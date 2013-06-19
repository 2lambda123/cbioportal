/** Copyright (c) 2012 Memorial Sloan-Kettering Cancer Center.
**
** This library is free software; you can redistribute it and/or modify it
** under the terms of the GNU Lesser General Public License as published
** by the Free Software Foundation; either version 2.1 of the License, or
** any later version.
**
** This library is distributed in the hope that it will be useful, but
** WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF
** MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.  The software and
** documentation provided hereunder is on an "as is" basis, and
** Memorial Sloan-Kettering Cancer Center 
** has no obligations to provide maintenance, support,
** updates, enhancements or modifications.  In no event shall
** Memorial Sloan-Kettering Cancer Center
** be liable to any party for direct, indirect, special,
** incidental or consequential damages, including lost profits, arising
** out of the use of this software and its documentation, even if
** Memorial Sloan-Kettering Cancer Center 
** has been advised of the possibility of such damage.  See
** the GNU Lesser General Public License for more details.
**
** You should have received a copy of the GNU Lesser General Public License
** along with this library; if not, write to the Free Software Foundation,
** Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA.
**/

// package
package org.mskcc.cbio.importer.fetcher.internal;

// imports
import org.mskcc.cbio.importer.Config;
import org.mskcc.cbio.importer.Fetcher;
import org.mskcc.cbio.importer.FileUtils;
import org.mskcc.cbio.importer.DatabaseUtils;
import org.mskcc.cbio.importer.model.DatatypeMetadata;
import org.mskcc.cbio.importer.model.ReferenceMetadata;
import org.mskcc.cbio.importer.model.DataSourcesMetadata;
import org.mskcc.cbio.importer.dao.ImportDataRecordDAO;
import org.mskcc.cbio.importer.util.soap.*;

import org.foundation.*;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.sun.xml.ws.fault.ServerSOAPFaultException;

import java.io.File;
import java.io.IOException;
import java.io.StringReader;
import java.util.*;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import org.springframework.beans.factory.annotation.Value;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

/**
 * Class which implements the fetcher interface.
 */
class FoundationFetcherImpl implements Fetcher {

	// our logger
	private static final Log LOG = LogFactory.getLog(FoundationFetcherImpl.class);

	// foundation data file extension
	private static final String FOUNDATION_FILE_EXTENSION = ".xml";

	// not all fields in ImportDataRecord will be used
	private static final String UNUSED_IMPORT_DATA_FIELD = "NA";

	// ref to configuration
	private Config config;

	// ref to file utils
	private FileUtils fileUtils;

	// ref to import data
	private ImportDataRecordDAO importDataRecordDAO;

	// ref to database utils
	private DatabaseUtils databaseUtils;

	// download directories
	private DataSourcesMetadata dataSourceMetadata;

	/**
	 * Constructor.
     *
     * @param config Config
	 * @param fileUtils FileUtils
	 * @param databaseUtils DatabaseUtils
	 * @param importDataRecordDAO ImportDataRecordDAO;
	 */
	public FoundationFetcherImpl(Config config, FileUtils fileUtils,
								 DatabaseUtils databaseUtils, ImportDataRecordDAO importDataRecordDAO) {

		// set members
		this.config = config;
		this.fileUtils = fileUtils;
		this.databaseUtils = databaseUtils;
		this.importDataRecordDAO = importDataRecordDAO;
	}

	// service username
	private String serviceUser;
	@Value("${foundation.service.user}")
	public void setServiceUser(String serviceUser) { this.serviceUser = serviceUser; }

	public String getServiceUser() { return this.serviceUser; }

	// service password
	private String servicePassword;
	@Value("${foundation.service.password}")
	public void setServicePassword(String servicePassword) { this.servicePassword = servicePassword; }

	public String getServicePassword() { return this.servicePassword; }

	/**
	 * Fetches genomic data from an external datasource and
	 * places in download directory for processing.
	 *
	 * @param dataSource String
	 * @param desiredRunDate String
	 * @throws Exception
	 */
	@Override
	public void fetch(String dataSource, String desiredRunDate) throws Exception {

		if (LOG.isInfoEnabled()) {
			LOG.info("fetch(), dateSource:runDate: " + dataSource + ":" + desiredRunDate);
		}

		// get our DataSourcesMetadata object
		Collection<DataSourcesMetadata> dataSourcesMetadata = config.getDataSourcesMetadata(dataSource);
		if (dataSourcesMetadata.isEmpty()) {
			throw new IllegalArgumentException("cannot instantiate a proper DataSourcesMetadata object.");			
		}
		this.dataSourceMetadata = dataSourcesMetadata.iterator().next();

		if (LOG.isInfoEnabled()) {
			LOG.info("fetch(), creating CaseInfoService endpoint.");
		}

		CaseInfoService caseInfoService = new CaseInfoService();
		this.authenticate(caseInfoService);
		ICaseInfoService foundationService = caseInfoService.getICaseInfoService();

		NodeList cases = this.fetchCaseList(foundationService);

		// clinical data content
		StringBuilder dataClinicalContent = new StringBuilder();

		// mutation data content
		StringBuilder dataMutationsContent = new StringBuilder();

		// CNA data content
		HashMap<String, Integer> valueMap = new HashMap<String, Integer>();
		Set<String> caseSet = new HashSet<String>();
		Set<String> geneSet = new HashSet<String>();

		DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
		DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();

		int numCases = 0; // total number of processed cases

		for (int lc = 0; lc < cases.getLength(); lc++)
		{
			String caseRecord = this.fetchCaseRecord(cases.item(lc),
				foundationService);

			// skip empty/unavailable records
			if (caseRecord != null)
			{
				Document doc = dBuilder.parse(new InputSource(
						new StringReader(caseRecord)));

				this.addClinicalData(doc, dataClinicalContent);
				this.addMutationData(doc, dataMutationsContent);
				this.addCNAData(doc, valueMap, caseSet, geneSet);
				this.generateCaseFile(doc, caseRecord);

				numCases++;
			}
		}

		// generate data files
		this.generateClinicalDataFile(dataClinicalContent);
		this.generateMutationDataFile(dataMutationsContent);
		this.generateCNADataFile(valueMap, caseSet, geneSet);

		// generate meta files
		this.generateStudyMetaFile(numCases);
		this.generateMutationMetaFile(numCases);
		this.generateCNAMetaFile(numCases);
	}

	/**
	 * Adds credentials to the outbound SOAP header for the given service.
	 *
	 * @param service   service requiring SOAP authentication
	 */
	private void authenticate(CaseInfoService service)
	{
		HeaderHandlerResolver resolver = new HeaderHandlerResolver();
		resolver.getSecurityHandler().setServiceUser(this.getServiceUser());
		resolver.getSecurityHandler().setServicePassword(this.getServicePassword());
		service.setHandlerResolver(resolver);
	}

	/**
	 * Writes a single data file for the given case to the download directory.
	 *
	 * @param caseDoc   document object containing case data
	 * @param content   actual content of the file to generate
	 * @return          data file representing a single case
	 */
	protected File generateCaseFile(Document caseDoc, String content) throws Exception
	{
		File caseFile = null;
		Element caseNode = this.extractCaseNode(caseDoc);

		if (caseNode != null)
		{
			String fmiCaseID = caseNode.getAttribute("fmiCase");

			caseFile = fileUtils.createFileWithContents(dataSourceMetadata.getDownloadDirectory() +
				File.separator + fmiCaseID + FOUNDATION_FILE_EXTENSION,
					content);
		}

		return caseFile;
	}

	protected File generateClinicalDataFile(StringBuilder content) throws Exception
	{
		String header = "CASE_ID\t" +
		                "GENDER\t" +
		                "FMI_CASE_ID\t" +
		                "PIPELINE_VER\t" +
		                "TUMOR_NUCLEI_PERCENT\t" +
		                "MEDIAN_COV\t" +
		                "COV>100X\t" +
		                "ERROR_PERCENT\n";

		File clinicalFile = fileUtils.createFileWithContents(
			dataSourceMetadata.getDownloadDirectory() + File.separator + "data_clinical.txt",
			header + content.toString());

		return clinicalFile;
	}

	protected File generateMutationDataFile(StringBuilder content) throws Exception
	{
		String header = "hugo_symbol\t" +
		                "NCBI_build\t" +
		                "chromosome\t" +
		                "start_position\t" +
		                "end_position\t" +
		                "strand\t" +
		                "variant_classification\t" +
		                "reference_allele\t" +
		                "tumor_seq_allele1\t" +
		                "tumor_seq_allele2\t" +
		                "tumor_sample_barcode\t" +
		                "validation_status\t" +
		                "mutation_status\t" +
		                "amino_acid_change\t" +
		                "transcript\t" +
		                "t_ref_count\t" +
		                "t_alt_count\n";

		File mafFile = fileUtils.createFileWithContents(
			dataSourceMetadata.getDownloadDirectory() + File.separator + "data_mutations_extended.txt",
			header + content.toString());

		return mafFile;
	}

	protected File generateCNADataFile(HashMap<String, Integer> valueMap, Set<String> caseSet,
			Set<String> geneSet) throws Exception
	{
		StringBuilder content = new StringBuilder();

		// generate header line

		content.append("Gene Symbol");

		for (String caseID : caseSet)
		{
			content.append("\t");
			content.append(caseID);
		}

		content.append("\n");

		// generate line for each gene
		for (String gene : geneSet)
		{
			content.append(gene);

			for (String caseId : caseSet)
			{
				Integer value = valueMap.get(gene + "_" + caseId);

				if (value == null)
				{
					value = 0;
				}

				content.append("\t");
				content.append(value.toString());
			}

			content.append("\n");
		}

		File cnaFile = fileUtils.createFileWithContents(dataSourceMetadata.getDownloadDirectory() +
			File.separator + "data_CNA.txt", content.toString());

		return cnaFile;
	}

	protected File generateStudyMetaFile(Integer numCases) throws Exception
	{
		StringBuilder content = new StringBuilder();

		content.append("type_of_cancer: prad\n");
		content.append("cancer_study_identifier: prad_foundation\n");
		content.append("name: Prostate Adenocarcinoma (Foundation)\n");
		content.append("description: Foundation Medicine\n"); // TODO description with # of cases?

		File studyFile = fileUtils.createFileWithContents(dataSourceMetadata.getDownloadDirectory() +
			File.separator + "meta_study.txt", content.toString());

		return studyFile;
	}

	protected File generateCNAMetaFile(Integer numCases) throws Exception
	{
		Collection<DatatypeMetadata> list = this.config.getDatatypeMetadata("cna-foundation");
		DatatypeMetadata metadata = list.iterator().next();

		File cnaFile = fileUtils.createFileWithContents(
			dataSourceMetadata.getDownloadDirectory() + File.separator + metadata.getMetaFilename(),
			this.generateMetaFileContent(metadata, numCases).toString());

		return cnaFile;
	}

	protected File generateMutationMetaFile(Integer numCases) throws Exception
	{
		Collection<DatatypeMetadata> list = this.config.getDatatypeMetadata("mutation");
		DatatypeMetadata metadata = list.iterator().next();

		File cnaFile = fileUtils.createFileWithContents(
			dataSourceMetadata.getDownloadDirectory() + File.separator + metadata.getMetaFilename(),
			this.generateMetaFileContent(metadata, numCases).toString());

		return cnaFile;
	}

	protected StringBuilder generateMetaFileContent(DatatypeMetadata metadata, Integer numCases)
	{
		StringBuilder content = new StringBuilder();

		content.append("cancer_study_identifier: prad_foundation\n");
		content.append("genetic_alteration_type: ");
		content.append(metadata.getMetaGeneticAlterationType());
		content.append("\n");

		String stableID = metadata.getMetaStableID();
		stableID = stableID.replaceAll(
				DatatypeMetadata.CANCER_STUDY_TAG, "prad_foundation");
		content.append("stable_id: ");
		content.append(stableID);
		content.append("\n");

		content.append("show_profile_in_analysis_tab: ");
		content.append(metadata.getMetaShowProfileInAnalysisTab());
		content.append("\n");

		String profileDescription = metadata.getMetaProfileDescription();

		if (numCases != null) {
			profileDescription = profileDescription.replaceAll(
					DatatypeMetadata.NUM_GENES_TAG, numCases.toString());
			profileDescription = profileDescription.replaceAll(
					DatatypeMetadata.NUM_CASES_TAG, numCases.toString());
		}

		profileDescription = profileDescription.replaceAll(
				DatatypeMetadata.TUMOR_TYPE_TAG, "prad");

		content.append("profile_description: ");
		content.append(profileDescription);
		content.append("\n");
		content.append("profile_name: ");
		content.append(metadata.getMetaProfileName());
		content.append("\n");

		return content;
	}

	protected void addClinicalData(Document caseDoc, StringBuilder content)
	{
		String fmiCaseID = "";
		String caseID = "";
		String gender = "";
		String pipelineVer = "";
		String percentTumorNuclei = "";
		String medianCov = "";
		String covGreaterThan100x = "";
		String errorPercent = "";

		Element caseNode = this.extractCaseNode(caseDoc);

		if (caseNode == null)
		{
			return; // no case to process
		}

		fmiCaseID = caseNode.getAttribute("fmiCase");
		caseID = caseNode.getAttribute("case");

		Element variantReport = this.extractVariantReport(caseNode);

		if (variantReport != null)
		{
			gender = variantReport.getAttribute("gender");
			pipelineVer = variantReport.getAttribute("pipeline-version");

			NodeList samples = variantReport.getElementsByTagName("sample");
			Node sample = samples.item(0); // assuming there is only one sample

			if (sample.getNodeType() == Node.ELEMENT_NODE)
			{
				percentTumorNuclei = ((Element)sample).getAttribute("percent-tumor-nuclei");
			}

			NodeList metrics = variantReport.getElementsByTagName("metric");

			for (int i = 0; i < metrics.getLength(); i++)
			{
				Node metric = metrics.item(i);

				if (metric.getNodeType() == Node.ELEMENT_NODE)
				{
					String name = ((Element)metric).getAttribute("name");
					String value = ((Element)metric).getAttribute("value");

					if (name.equalsIgnoreCase("median coverage"))
					{
						medianCov = value;
					}
					else if (name.equalsIgnoreCase("coverage >100x"))
					{
						covGreaterThan100x = value;
					}
					else if (name.equalsIgnoreCase("error"))
					{
						errorPercent = value;
					}
				}
			}
		}

		// append the data as a single line
		content.append(caseID);
		content.append("\t");
		content.append(gender);
		content.append("\t");
		content.append(fmiCaseID);
		content.append("\t");
		content.append(pipelineVer);
		content.append("\t");
		content.append(percentTumorNuclei);
		content.append("\t");
		content.append(medianCov);
		content.append("\t");
		content.append(covGreaterThan100x);
		content.append("\t");
		content.append(errorPercent);
		content.append("\n");
	}

	protected void addMutationData(Document caseDoc, StringBuilder content)
	{
		Element caseNode = this.extractCaseNode(caseDoc);

		if (caseNode == null)
		{
			return; // no case to process
		}

		//fmiCaseID = caseNode.getAttribute("fmiCase");
		String caseID = caseNode.getAttribute("case").replaceAll("\\s", "_");

		Element variantReport = this.extractVariantReport(caseNode);

		if (variantReport != null)
		{
			NodeList shortVariants = variantReport.getElementsByTagName("short-variant");

			for (int i = 0; i < shortVariants.getLength(); i++)
			{
				Node shortVar = shortVariants.item(i);

				if (shortVar.getNodeType() == Node.ELEMENT_NODE)
				{
					String depth = ((Element)shortVar).getAttribute("depth");
					String percentReads = ((Element)shortVar).getAttribute("percent-reads");
					String position = ((Element)shortVar).getAttribute("position");
					String cdsEffect = ((Element)shortVar).getAttribute("cds-effect");

					String gene = ((Element)shortVar).getAttribute("gene");
					String proteinEffect = ((Element)shortVar).getAttribute("protein-effect");
					String status = ((Element)shortVar).getAttribute("status");
					String transcript = ((Element)shortVar).getAttribute("transcript");
					String strand = ((Element)shortVar).getAttribute("strand");
					String functionalEffect = ((Element)shortVar).getAttribute("functional-effect");

					Map<String, String> posInfo = this.parsePosition(position);

					String chromosome = this.parseChr(posInfo.get("chromosome"));
					String startPos = posInfo.get("startPos");
					String endPos = posInfo.get("endPos");
					String tAltCount = this.calcTumorAltCount(percentReads, depth);
					String tRefCount = this.calcTumorRefCount(percentReads, depth);

					Map<String, String> alleleInfo = this.parseCdsEffect(cdsEffect, strand);

					String refAllele = alleleInfo.get("refAllele");
					String varAllele = alleleInfo.get("varAllele");

					// make sure we have an end position
					if (endPos.length() == 0)
					{
						endPos = this.calcEndPos(startPos, refAllele);
					}

					this.appendMutationData(content,
							gene,
							chromosome,
							startPos,
							endPos,
							strand,
							functionalEffect,
							refAllele,
							varAllele,
							caseID,
							proteinEffect,
							transcript,
							tRefCount,
							tAltCount);
				}
			}
		}
	}

	protected String parseChr(String chromosome)
	{
		String chr = chromosome;

		if (chromosome == null)
		{
			chr = "";
		}
		else if (chromosome.toLowerCase().startsWith("chr"))
		{
			chr = chromosome.substring(("chr").length());
		}

		return chr;
	}

	protected void appendMutationData(StringBuilder content,
			String gene,
			String chromosome,
			String startPos,
			String endPos,
			String strand,
			String functionalEffect,
			String refAllele,
			String varAllele,
			String caseID,
			String proteinEffect,
			String transcript,
			String tRefCount,
			String tAltCount)
	{
		// append the data as a single line
		content.append(gene); // hugo_symbol
		content.append("\t");
		content.append("37"); // NCBI_build (assuming it is always hg19/37)
		content.append("\t");
		content.append(chromosome);
		content.append("\t");
		content.append(startPos);
		content.append("\t");
		content.append(endPos);
		content.append("\t");
		content.append(strand);
		content.append("\t");
		content.append(functionalEffect); // variant_classification
		content.append("\t");
		content.append(refAllele); // reference_allele
		content.append("\t");
		content.append(varAllele); // tumor_seq_allele1
		content.append("\t");
		content.append(varAllele); // tumor_seq_allele2 (copy first one, we have no other var allele)
		content.append("\t");
		content.append(caseID); // tumor_sample_barcode
		content.append("\t");
		content.append("Unknown\t"); // validation_status
		content.append("Unknown\t"); // mutation_status
		content.append(proteinEffect); // amino_acid_change
		content.append("\t");
		content.append(transcript);
		content.append("\t");
		content.append(tRefCount);
		content.append("\t");
		content.append(tAltCount);
		content.append("\n");
	}

	/**
	 * Parses cds-effect string and creates a map for reference and variant
	 * alleles. If the input string has a missing value, corresponding value
	 * in the map will be an empty string.
	 *
	 * @param cdsEffect string to parse
	 * @param strand    - or +
	 * @return          map of parsed values
	 */
	protected Map<String, String> parseCdsEffect(String cdsEffect, String strand)
	{
		String refAllele = "";
		String varAllele = "";

		cdsEffect = cdsEffect.toLowerCase();

		int insIdx = cdsEffect.indexOf("ins");
		int delIdx = cdsEffect.indexOf("del");
		int changeIdx = cdsEffect.indexOf(">");

		// insertion
		if (insIdx > 0)
		{
			refAllele = "-";
			varAllele = cdsEffect.substring(insIdx + ("ins").length());
		}
		// deletion
		else if (delIdx > 0)
		{
			varAllele = "-";
			refAllele = cdsEffect.substring(delIdx + ("del").length());
		}
		// nucleotide change
		else if (changeIdx > 0)
		{
			// rip off everything except nucleotides
			String ripped = cdsEffect.replaceAll("[^tcga]", " ").trim();
			String[] parts = ripped.split(" ");
			refAllele = parts[0];
			varAllele = parts[1];
		}

		// take complement if strand is minus
		if (strand.equals("-"))
		{
			refAllele = this.complementOf(refAllele);
			varAllele = this.complementOf(varAllele);
		}

		// make them uppercase for consistency
		varAllele = varAllele.toUpperCase();
		refAllele = refAllele.toUpperCase();

		Map<String, String> map = new HashMap<String, String>();

		map.put("refAllele", refAllele);
		map.put("varAllele", varAllele);

		return map;
	}

	/**
	 * Returns complement of the given nucleotide sequence.
	 *
	 * @param sequence  a nucleotide sequence
	 * @return          complement of the sequence
	 */
	protected String complementOf(String sequence)
	{
		// check if it is a nucleotide sequence
		if (!sequence.matches("[TCGAtcga]+"))
		{
			return sequence;
		}

		sequence = sequence.toUpperCase();

		Map<Character, Character> map = new HashMap<Character, Character>();

		map.put('T', 'A');
		map.put('A', 'T');
		map.put('G', 'C');
		map.put('C', 'G');

		StringBuilder complement = new StringBuilder();

		for (int i = 0; i < sequence.length(); i++)
		{
			complement.append(map.get(sequence.charAt(i)));
		}

		return complement.toString();
	}

	/**
	 * Parses position string and creates a map for chromosome, startPos and
	 * endPos values. If the position string has a missing value, corresponding
	 * value in the map will be an empty string.
	 *
	 * @param position  expected format chrPos:startPos-endPos
	 * @return  map of parsed values
	 */
	protected Map<String, String> parsePosition(String position)
	{
		String chromosome = "";
		String startPos = "";
		String endPos = "";

		// extract position information

		String[] parts = position.split(":");

		if (parts.length > 1)
		{
			chromosome = parts[0];
			parts = parts[1].split("-");

			if (parts.length > 0)
			{
				startPos = parts[0];
			}

			if (parts.length > 1)
			{
				endPos = parts[1];
			}
		}

		Map<String, String> map = new HashMap<String, String>();

		map.put("chromosome", chromosome);
		map.put("startPos", startPos);
		map.put("endPos", endPos);

		return map;
	}

	/**
	 * Calculates the end position of the mutation by the help of
	 * start position and reference allele info.
	 *
	 * @param startPos  start position as a string
	 * @param refAllele reference allele (assumed to be T, C, G, A, or -
	 * @return  end position as a string
	 */
	protected String calcEndPos(String startPos, String refAllele)
	{
		long startPosition = Long.parseLong(startPos);
		long endPosition = -1L;

		if (refAllele.matches("[TCGAtcga]+"))
		{
			endPosition = startPosition + refAllele.length() - 1;
		}
		else if (refAllele.equals("-"))
		{
			endPosition = startPosition + 1;
		}

		String endPos = "";

		if (endPosition > 0)
		{
			endPos = Long.toString(endPosition);
		}

		return endPos;
	}

	/**
	 * Calculates tumor alt count value by using percent reads and depth.
	 *
	 * @param percentReads
	 * @param depth
	 * @return  calculated tumor alt count
	 */
	protected String calcTumorAltCount(String percentReads, String depth)
	{
		String tAltCount = "";

		// try to calculate allele counts
		try {
			long tumorAltCount = Math.round(Long.parseLong(depth) *
			                                Double.parseDouble(percentReads) / 100);

			tAltCount = Long.toString(tumorAltCount);
		} catch (NumberFormatException e) {
			// empty or invalid depth & percent values
		}

		return tAltCount;
	}

	/**
	 * Calculates tumor ref count value by using percent reads and depth.
	 *
	 * @param percentReads
	 * @param depth
	 * @return  calculated tumor ref count
	 */
	protected String calcTumorRefCount(String percentReads, String depth)
	{
		String tRefCount = "";

		// try to calculate allele counts
		try {
			long tumorAltCount = Math.round(Long.parseLong(depth) *
			                                Double.parseDouble(percentReads) / 100);
			long tumorRefCount = Long.parseLong(depth) - tumorAltCount;

			tRefCount = Long.toString(tumorRefCount);
		} catch (NumberFormatException e) {
			// empty or invalid depth & percent values
		}

		return tRefCount;
	}

	protected void addCNAData(Document caseDoc,
			HashMap<String,Integer> valueMap,
			Set<String> caseSet,
			Set<String> geneSet)
	{
		String gene = "";
		String type = "";

		Element caseNode = this.extractCaseNode(caseDoc);

		if (caseNode == null)
		{
			return; // no case to process
		}

		//fmiCaseID = caseNode.getAttribute("fmiCase");
		String caseID = caseNode.getAttribute("case").replaceAll("\\s", "_");

		caseSet.add(caseID);

		Element variantReport = this.extractVariantReport(caseNode);

		if (variantReport != null)
		{
			NodeList cnas = variantReport.getElementsByTagName("copy-number-alteration");

			for (int i = 0; i < cnas.getLength(); i++)
			{
				Node cna = cnas.item(i);

				if (cna.getNodeType() == Node.ELEMENT_NODE)
				{
					gene = ((Element)cna).getAttribute("gene");
					type = ((Element)cna).getAttribute("type");

					if (gene.length() > 0)
					{
						geneSet.add(gene);

						valueMap.put(gene + "_" + caseID, this.cnaValue(type));
					}
				}
			}
		}
	}

	protected Integer cnaValue(String type)
	{
		if (type.equalsIgnoreCase("loss"))
		{
			return -2;
		}
		else if (type.equalsIgnoreCase("amplification"))
		{
			return 2;
		}
		else
		{
			return 0;
		}
	}

	protected Element extractCaseNode(Document caseDoc)
	{
		NodeList cases = caseDoc.getElementsByTagName("Case");

		if (cases.getLength() == 0)
		{
			return null; // no case to process
		}

		// process only the first case
		// (assuming each document has only one distinct case)
		Node caseNode = cases.item(0);

		if (caseNode.getNodeType() != Node.ELEMENT_NODE)
		{
			return null; // no case to process
		}

		return (Element)caseNode;
	}

	protected Element extractVariantReport(Element caseNode)
	{
		NodeList variantReports = caseNode.getElementsByTagName("variant-report");
		Node variantReport = variantReports.item(0); // assuming there is only one variant report

		if (variantReport.getNodeType() != Node.ELEMENT_NODE)
		{
			return null;
		}

		return (Element)variantReport;
	}

	protected String fetchCaseRecord(Node caseNode, ICaseInfoService foundationService)
	{
		String record = null;

		if (caseNode.getNodeType() == Node.ELEMENT_NODE)
		{
			String fmiCaseID = ((Element)caseNode).getAttribute("fmiCase");
			String caseID = ((Element)caseNode).getAttribute("case");
			String hasVariant = ((Element)caseNode).getAttribute("hasVariant");

			// skip cases with no information
			if (hasVariant.equals("false"))
			{
				return null;
			}

			//System.out.println(caseID);

			if (LOG.isInfoEnabled()) {
				LOG.info("fetch(), fetching case : " + caseID);
			}

			try {
				record =  foundationService.getCase(caseID);
			} catch (ServerSOAPFaultException e) {
				// we get here if record does not exist on server side (yet)
				if (LOG.isInfoEnabled()) {
					LOG.info("fetch(), Cannot fetch case record for case: " + caseID);
				}
			}
		}

		return record;
	}

	protected NodeList fetchCaseList(ICaseInfoService foundationService)
			throws ParserConfigurationException, IOException, SAXException
	{
		if (LOG.isInfoEnabled()) {
			LOG.info("fetch(), fetching case list.");
		}

		DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
		DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
		Document doc = dBuilder.parse(new InputSource(new StringReader(foundationService.getCaseList())));

		return doc.getElementsByTagName("Case");
	}

	/**
	 * Fetches reference data from an external datasource.
	 *
     * @param referenceMetadata ReferenceMetadata
	 * @throws Exception
	 */
	@Override
	public void fetchReferenceData(ReferenceMetadata referenceMetadata) throws Exception {
		throw new UnsupportedOperationException();
	}
}
