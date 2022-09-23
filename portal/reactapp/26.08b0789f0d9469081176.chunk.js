(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1259:function(e,t,l){},492:function(e,t,l){"use strict";l.r(t);var n=l(0),r=l(18),a=l(157),c=(l(1259),l(160)),i=l.n(c),o=l(5);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var l=0;l<t.length;l++){var n=t[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){return(p="function"==typeof Symbol&&"symbol"===s(Symbol.iterator)?function(e){return s(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":s(e)})(e)}var g=function(e,t,l,n){var r,a=arguments.length,c=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,l):n;if("object"===("undefined"==typeof Reflect?"undefined":p(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,l,n);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(a<3?r(c):a>3?r(t,l,c):r(t,l))||c);return a>3&&c&&Object.defineProperty(t,l,c),c},f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,d(t).apply(this,arguments))}var l,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,n["Component"]),l=t,(r=[{key:"render",value:function(){return n.createElement(a.a,{className:"whiteBackground staticPage"},n.createElement(i.a,null,n.createElement("title",null,"cBioPortal for Cancer Genomics::Helmet")),n.createElement("h1",null,"Web API"),n.createElement("h2",{id:"introduction"},"Introduction"),n.createElement("p",null,"The Cancer Genomic Data Server (CGDS) web service interface provides direct programmatic access to all genomic data stored within the server. This enables you to easily access data from your favorite programming language, such as Python, Java, Perl, R or MatLab. The CGDS web service is REST-based, meaning that client applications create a query consisting of parameters appended to a URL, and receive back either either text or an XML response. For CGDS, all responses are currently tab-delimited text. Clients of the CGDS web service can issue the following types of queries:"),n.createElement("ul",null,n.createElement("li",null,"What cancer studies are stored on the server?"),n.createElement("li",null,"What genetic profile types are available for cancer study X? For example, does the server store mutation and copy number data for the TCGA Glioblastoma data?"),n.createElement("li",null,"What case sets are available for cancer study X? For example, what case sets are available for TCGA Glioblastoma?")),n.createElement("p",null,'Additionally, clients can easily retrieve "slices" of genomic data. For example, a client can retrieve all mutation data from PTEN and EGFR in the TCGA Glioblastoma data.'),n.createElement("p",null,"Please note that the example queries below are accurate, but they are not guaranteed to return data, as our database is constantly being updated."),n.createElement("h2",{id:"the-cgds-r-package"},"The CGDS R Package"),n.createElement("p",null,"If you are interested in accessing CGDS via R, please check out our ",n.createElement(o.b,{to:"/rmatlab"}," CGDS-R library"),"."),n.createElement("h2",{id:"basic-query-syntax"},"Basic Query Syntax"),n.createElement("p",null,"All web queries are available at: ",n.createElement("a",{href:"webservice.do"},"webservice.do"),". All calls to the Web interface are constructed by appending URL parameters. Within each call, you must specify:"),n.createElement("ul",null,n.createElement("li",null,n.createElement("strong",null,"cmd")," = the command that you wish to execute. The command must be equal to one of the following: getTypesOfCancer, getNetwork, getCancerStudies, getGeneticProfiles, getProfileData, getCaseLists, getClinicalData, or getMutationData."),n.createElement("li",null,"optional additional parameters, depending of the command (see below).")),n.createElement("p",null,"For example, the following query will request all case lists for the TCGA GBM data:"),n.createElement("p",null,n.createElement("a",{href:"webservice.do?cmd=getCaseLists&cancer_study_id=gbm_tcga"},"webservice.do?cmd=getCaseLists&cancer_study_id=gbm_tcga")),n.createElement("h2",{id:"response-header-and-error-messages"},"Response Header and Error Messages"),n.createElement("p",null,"The first line of each response begins with a hash mark (#), and will contain data regarding the server status. For example:"),n.createElement("pre",null,n.createElement("code",null,"# CGDS Kernel:  Data served up fresh at:  Wed Oct 27 13:02:30 EDT 2010")),n.createElement("p",null,'If any errors have occurred in processing your query, this will appear directly after the status message. Error messages begin with the "Error:" tag. Warning messages begin with the "# Warning:" tag. Unrecoverable errors are reported as errors. For example:'),n.createElement("pre",null,n.createElement("code",null,"# CGDS Kernel:  Data served up fresh at:  Wed Oct 27 13:02:30 EDT 2010",n.createElement("br",null),"Error:  No case lists available for cancer_study_id:  gbs.")),n.createElement("p",null,"Recoverable errors, such as invalid gene symbols are reported as warnings. Multiple warnings may also be returned. For example:"),n.createElement("pre",null,n.createElement("code",null,"# CGDS Kernel:  Data served up fresh at:  Wed Oct 27 13:06:34 EDT 2010",n.createElement("br",null),"# Warning:  Unknown gene:  EGFR11",n.createElement("br",null),"# Warning:  Unknown gene:  EGFR12",n.createElement("br",null))),n.createElement("h2",{id:"deprecated-api"},"Deprecated API"),n.createElement("p",null,"As of August, 2011:"),n.createElement("ul",null,n.createElement("li",null,n.createElement("p",null,"In previous versions of the API, the ",n.createElement("strong",null,"getCancerStudies")," command was referred to as ",n.createElement("strong",null,"getCancerTypes"),". For backward compatibility, ",n.createElement("strong",null,"getCancerTypes")," still works, but is now considered deprecated.")),n.createElement("li",null,n.createElement("p",null,"In previous versions of the API, the ",n.createElement("strong",null,"cancer_study_id")," parameter was referred to as ",n.createElement("strong",null,"cancer_type_id"),". For backward compatibility,, ",n.createElement("strong",null,"cancer_type_id")," still works, but is now considered deprecated."))),n.createElement("h2",{id:"commands"},"Commands"),n.createElement("div",{className:"commandDocumentation"},n.createElement("table",{className:"table table-bordered"},n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",{colSpan:2},"Get All Types of Cancer")),n.createElement("tr",null,n.createElement("td",null,"Description"),n.createElement("td",null,"Retrieves a list of all the clinical types of cancer stored on the server.")),n.createElement("tr",null,n.createElement("td",null,"Query Format"),n.createElement("td",null,n.createElement("strong",null,"cmd=getTypesOfCancer")," (required)")),n.createElement("tr",null,n.createElement("td",null,"Response Format"),n.createElement("td",null,n.createElement("p",null,"A tab-delimited file with two columns:"),n.createElement("ul",null,n.createElement("li",null,n.createElement("strong",null,"type_of_cancer_id:"),' a unique text identifier used to identify the type of cancer. For example, "gbm" identifies Glioblastoma multiforme.'),n.createElement("li",null,n.createElement("strong",null,"name:")," short name of the type of cancer.")))),n.createElement("tr",null,n.createElement("td",null,"Example"),n.createElement("td",null,n.createElement("a",{href:"webservice.do?cmd=getTypesOfCancer"},"Get all Types of Cancer."))))),n.createElement("table",{className:"table table-bordered"},n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",{colSpan:2},"Get All Cancer Studies")),n.createElement("tr",null,n.createElement("td",null,"Description"),n.createElement("td",null,"Retrieves meta-data regarding cancer studies stored on the server.")),n.createElement("tr",null,n.createElement("td",null,"Query Format"),n.createElement("td",null,n.createElement("strong",null,"cmd=getCancerStudies")," (required)")),n.createElement("tr",null,n.createElement("td",null,"Response Format"),n.createElement("td",null,n.createElement("p",null,"A tab-delimited file with three columns:"),n.createElement("ul",null,n.createElement("li",null,n.createElement("strong",null,"cancer_study_id:")," a unique ID that should be used to identify the cancer study in subsequent interface calls."),n.createElement("li",null,n.createElement("strong",null,"name:")," short name of the cancer study."),n.createElement("li",null,n.createElement("strong",null,"description:")," short description of the cancer study.")))),n.createElement("tr",null,n.createElement("td",null,"Example"),n.createElement("td",null,n.createElement("a",{href:"webservice.do?cmd=getCancerStudies"},"Get all Cancer Studies."))))),n.createElement("table",{className:"table table-bordered"},n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",{colSpan:2},"Get All Genetic Profiles for a Specific Cancer Study")),n.createElement("tr",null,n.createElement("td",null,"Description"),n.createElement("td",null,"Retrieves meta-data regarding all genetic profiles, e.g. mutation or copy number profiles, stored about a specific cancer study.")),n.createElement("tr",null,n.createElement("td",null,"Query Format"),n.createElement("td",null,n.createElement("ul",null,n.createElement("li",null,n.createElement("strong",null,"cmd"),"=getGeneticProfiles (required)"),n.createElement("li",null,n.createElement("strong",null,"cancer_study_id"),"=[cancer study ID] (required)")))),n.createElement("tr",null,n.createElement("td",null,"Response Format"),n.createElement("td",null,n.createElement("p",null,"A tab-delimited file with six columns:"),n.createElement("ul",null,n.createElement("li",null,n.createElement("strong",null,"genetic_profile_id"),': a unique ID used to identify the genetic profile ID in subsequent interface calls. This is a human readable ID. For example, "gbm_mutations" identifies the TCGA GBM mutation genetic profile.'),n.createElement("li",null,n.createElement("strong",null,"genetic_profile_name"),": short profile name."),n.createElement("li",null,n.createElement("strong",null,"genetic_profile_description"),": short profile description."),n.createElement("li",null,n.createElement("strong",null,"cancer_study_id"),": cancer study ID tied to this genetic profile. Will match the input cancer_study_id."),n.createElement("li",null,n.createElement("strong",null,"genetic_alteration_type"),": indicates the profile type. Will be one of:",n.createElement("ul",null,n.createElement("li",null,"MUTATION"),n.createElement("li",null,"MUTATION_EXTENDED"),n.createElement("li",null,"COPY_NUMBER_ALTERATION"),n.createElement("li",null,"MRNA_EXPRESSION"),n.createElement("li",null,"METHYLATION"))),n.createElement("li",null,n.createElement("strong",null,"show_profile_in_analysis_tab"),": a boolean flag used for internal purposes (you can safely ignore it).")))),n.createElement("tr",null,n.createElement("td",null,"Example"),n.createElement("td",null,n.createElement("a",{href:"webservice.do?cmd=getGeneticProfiles&cancer_study_id=gbm_tcga"},"Get all Genetic Profiles for Glioblastoma (TCGA)."))))),n.createElement("table",{className:"table table-bordered"},n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",{colSpan:2},"Get All Case Lists for a Specific Cancer Study")),n.createElement("tr",null,n.createElement("td",null,"Description"),n.createElement("td",null,"Retrieves meta-data regarding all case lists stored about a specific cancer study. For example, a within a particular study, only some cases may have sequence data, and another subset of cases may have been sequenced and treated with a specific therapeutic protocol. Multiple case lists may be associated with each cancer study, and this method enables you to retrieve meta-data regarding all of these case lists.")),n.createElement("tr",null,n.createElement("td",null,"Query Format"),n.createElement("td",null,n.createElement("ul",null,n.createElement("li",null,n.createElement("strong",null,"cmd"),"=getCaseLists (required)"),n.createElement("li",null,n.createElement("strong",null,"cancer_study_id"),"=[cancer study ID] (required)")))),n.createElement("tr",null,n.createElement("td",null,"Response Format"),n.createElement("td",null,n.createElement("p",null,"A tab-delimited file with five columns:"),n.createElement("ul",null,n.createElement("li",null,n.createElement("strong",null,"case_list_id"),': a unique ID used to identify the case list ID in subsequent interface calls. This is a human readable ID. For example, "gbm_all" identifies all cases profiles in the TCGA GBM study.'),n.createElement("li",null,n.createElement("strong",null,"case_list_name"),": short name for the case list."),n.createElement("li",null,n.createElement("strong",null,"case_list_description"),": short description of the case list."),n.createElement("li",null,n.createElement("strong",null,"cancer_study_id"),": cancer study ID tied to this genetic profile. Will match the input cancer_study_id."),n.createElement("li",null,n.createElement("strong",null,"case_ids"),": space delimited list of all case IDs that make up this case list.")))),n.createElement("tr",null,n.createElement("td",null,"Example"),n.createElement("td",null,n.createElement("a",{href:"webservice.do?cmd=getCaseLists&cancer_study_id=gbm_tcga"},"Get all Case Lists for Glioblastoma (TCGA)."))))),n.createElement("table",{className:"table table-bordered"},n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",{colSpan:2},"Get Profile Data")),n.createElement("tr",null,n.createElement("td",null,"Description"),n.createElement("td",null,"Retrieves genomic profile data for one or more genes.")),n.createElement("tr",null,n.createElement("td",null,"Query Format"),n.createElement("td",null,n.createElement("ul",null,n.createElement("li",null,n.createElement("strong",null,"cmd"),"=getProfileData (required)"),n.createElement("li",null,n.createElement("strong",null,"case_set_id"),"= [case set ID] (required)"),n.createElement("li",null,n.createElement("strong",null,"genetic_profile_id"),"= [one or more genetic profile IDs] (required). Multiple genetic profile IDs must be separated by comma (,) characters, or URL encoded spaces, e.g. +"),n.createElement("li",null,n.createElement("strong",null,"gene_list"),"= [one or more genes, specified as HUGO Gene Symbols or Entrez Gene IDs] (required). Multiple genes must be separated by comma (,) characters, or URL encoded spaces, e.g. +")),n.createElement("p",null,"You can either:"),n.createElement("ul",null,n.createElement("li",null,n.createElement("a",{href:"webservice.do?cmd=getProfileData&case_set_id=gbm_tcga_all&genetic_profile_id=gbm_tcga_mutations&gene_list=BRCA1+BRCA2+TP53"},"Specify multiple genes and a single genetic profile ID.")),n.createElement("li",null,n.createElement("a",{href:"webservice.do?cmd=getProfileData&case_set_id=gbm_tcga_all&genetic_profile_id=gbm_tcga_log2CNA,gbm_tcga_gistic&gene_list=EGFR"},"Specify a single gene and multiple genetic profile IDs."))))),n.createElement("tr",null,n.createElement("td",null,"Response Format"),n.createElement("td",null,n.createElement("p",null,"When requesting one or multiple genes and a single genetic profile ID (see above), you will receive a tab-delimited matrix with the following columns:"),n.createElement("ol",null,n.createElement("li",null,n.createElement("strong",null,"GENE_ID"),": Entrez Gene ID"),n.createElement("li",null,n.createElement("strong",null,"COMMON"),": HUGO Gene Symbol"),n.createElement("li",null,n.createElement("strong",null,"Columns 3 - N"),": Data for each case")),n.createElement("h4",{id:"response-format-2"},"Response Format 2"),n.createElement("p",null,"When requesting a single gene and multiple genetic profile IDs (see above), you will receive a tab-delimited matrix with the following columns:"),n.createElement("ol",null,n.createElement("li",null,n.createElement("strong",null,"GENETIC_PROFILE_ID"),": The Genetic Profile ID."),n.createElement("li",null,n.createElement("strong",null,"ALTERATION_TYPE"),": The Genetic Alteration Type, e.g. MUTATION, MUTATION_EXTENDED, COPY_NUMBER_ALTERATION, or MRNA_EXPRESSION."),n.createElement("li",null,n.createElement("strong",null,"GENE_ID"),": Entrez Gene ID."),n.createElement("li",null,n.createElement("strong",null,"COMMON"),": HUGO Gene Symbol."),n.createElement("li",null,n.createElement("strong",null,"Columns 5 - N"),": Data for each case.")))),n.createElement("tr",null,n.createElement("td",null,"Example"),n.createElement("td",null,"See Query Format above.")))),n.createElement("table",{className:"table table-bordered"},n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",{colSpan:2},"Get Extended Mutation Data")),n.createElement("tr",null,n.createElement("td",null,"Description"),n.createElement("td",null,"For data of type EXTENDED_MUTATION, you can request the full set of annotated extended mutation data. This enables you to, for example, determine which sequencing center sequenced the mutation, the amino acid change that results from the mutation, or gather links to predicted functional consequences of the mutation.")),n.createElement("tr",null,n.createElement("td",null,"Query Format"),n.createElement("td",null,n.createElement("ul",null,n.createElement("li",null,n.createElement("strong",null,"cmd"),"=getMutationData (required)"),n.createElement("li",null,n.createElement("strong",null,"genetic_profile_id"),"= [one or more mutation profile IDs] (required). Multiple genetic profile IDs must be separated by comma (,) characters, or URL encoded spaces, e.g. +"),n.createElement("li",null,n.createElement("strong",null,"case_set_id"),"= [case set ID] (optional). If not provided, all cases that have data in the specified mutation profiles will be queried."),n.createElement("li",null,n.createElement("strong",null,"gene_list"),"= [one or more genes, specified as HUGO Gene Symbols or Entrez Gene IDs] (required). Multiple genes must be separated by comma (,) characters, or URL encoded spaces, e.g. +")))),n.createElement("tr",null,n.createElement("td",null,"Response Format"),n.createElement("td",null,n.createElement("p",null,"A tab-delimited file with the following columns:"),n.createElement("ul",null,n.createElement("li",null,n.createElement("strong",null,"entrez_gene_id"),": Entrez Gene ID."),n.createElement("li",null,n.createElement("strong",null,"gene_symbol"),": HUGO Gene Symbol."),n.createElement("li",null,n.createElement("strong",null,"case_id"),": Case ID."),n.createElement("li",null,n.createElement("strong",null,"sequencing_center"),": Sequencer Center responsible for identifying this mutation. For example: broad.mit.edu."),n.createElement("li",null,n.createElement("strong",null,"mutation_status"),": somatic or germline mutation status. all mutations returned will be of type somatic."),n.createElement("li",null,n.createElement("strong",null,"mutation_type"),": mutation type, such as nonsense, missense, or frameshift_ins."),n.createElement("li",null,n.createElement("strong",null,"validation_status"),": validation status. Usually valid, invalid, or unknown."),n.createElement("li",null,n.createElement("strong",null,"amino_acid_change"),": amino acid change resulting from the mutation."),n.createElement("li",null,n.createElement("strong",null,"functional_impact_score"),": predicted functional impact score, as predicted by: ",n.createElement("a",{href:"http://mutationassessor.org/"},"Mutation Assessor"),"."),n.createElement("li",null,n.createElement("strong",null,"xvar_link"),": Link to the Mutation Assessor web site."),n.createElement("li",null,n.createElement("strong",null,"xvar_link_pdb"),": Link to the Protein Data Bank (PDB) View within Mutation Assessor web site."),n.createElement("li",null,n.createElement("strong",null,"xvar_link_msa"),": Link the Multiple Sequence Alignment (MSA) view within the Mutation Assessor web site."),n.createElement("li",null,n.createElement("strong",null,"chr"),": chromosome where mutation occurs."),n.createElement("li",null,n.createElement("strong",null,"start_position"),": start position of mutation."),n.createElement("li",null,n.createElement("strong",null,"end_position"),": end position of mutation."),n.createElement("li",null,n.createElement("strong",null,"genetic_profile_id"),": mutation profile id.")))),n.createElement("tr",null,n.createElement("td",null,"Example"),n.createElement("td",null,n.createElement("ul",null,n.createElement("li",null,n.createElement("a",{href:"webservice.do?cmd=getMutationData&case_set_id=gbm_tcga_all&genetic_profile_id=gbm_tcga_mutations&gene_list=EGFR+PTEN"},"Get Extended Mutation Data for EGFR and PTEN in TCGA GBM.")),n.createElement("li",null,n.createElement("a",{href:"webservice.do?cmd=getMutationData&genetic_profile_id=ov_tcga_mutations+ucec_tcga_mutations&gene_list=BRCA1"},"Get Extended Mutation Data for BRCA1 in TCGA OV and UCEC."))))))),n.createElement("table",{className:"table table-bordered"},n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",{colSpan:2},"Get Clinical Data")),n.createElement("tr",null,n.createElement("td",null,"Description"),n.createElement("td",null,"Retrieves overall survival, disease free survival and age at diagnosis for specified cases. Due to patient privacy restrictions, no other clinical data is available.")),n.createElement("tr",null,n.createElement("td",null,"Query Format"),n.createElement("td",null,n.createElement("ul",null,n.createElement("li",null,n.createElement("strong",null,"cmd"),"=getClinicalData (required)"),n.createElement("li",null,n.createElement("strong",null,"case_set_id"),"= [case set ID] (required)")))),n.createElement("tr",null,n.createElement("td",null,"Response Format"),n.createElement("td",null,n.createElement("p",null,"A tab-delimited file with the following columns:"),n.createElement("ul",null,n.createElement("li",null,n.createElement("strong",null,"case_id"),": Unique Case Identifier."),n.createElement("li",null,n.createElement("strong",null,"overall_survival_months"),": Overall survival, in months."),n.createElement("li",null,n.createElement("strong",null,"overall_survival_status"),': Overall survival status, usually indicated as "LIVING" or "DECEASED".'),n.createElement("li",null,n.createElement("strong",null,"disease_free_survival_months"),": Disease free survival, in months."),n.createElement("li",null,n.createElement("strong",null,"disease_free_survival_status"),': Disease free survival status, usually indicated as "DiseaseFree" or "Recurred/Progressed".'),n.createElement("li",null,n.createElement("strong",null,"age_at_diagnosis"),": Age at diagnosis.")))),n.createElement("tr",null,n.createElement("td",null,"Example"),n.createElement("td",null,n.createElement("a",{href:"webservice.do?cmd=getClinicalData&case_set_id=ov_tcga_all"},"Get Clinical Data for All TCGA Ovarian Cases."))))),n.createElement("table",{className:"table table-bordered"},n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",{colSpan:2},"Get Protein/Phosphoprotein Antibody Information")),n.createElement("tr",null,n.createElement("td",null,"Description"),n.createElement("td",null,"Retrieves information on antibodies used by reverse-phase protein arrays (RPPA) to measure protein/phosphoprotein levels.")),n.createElement("tr",null,n.createElement("td",null,"Query Format"),n.createElement("td",null,n.createElement("ul",null,n.createElement("li",null,n.createElement("strong",null,"cmd"),"=getProteinArrayInfo (required)"),n.createElement("li",null,n.createElement("strong",null,"cancer_study_id"),"= [cancer study ID] (required)"),n.createElement("li",null,n.createElement("strong",null,"protein_array_type"),"= [protein_level or phosphorylation]"),n.createElement("li",null,n.createElement("strong",null,"gene_list"),"= [one or more genes, specified as HUGO Gene Symbols or Entrez Gene IDs]. Multiple genes must be separated by comma (,) characters, or URL encoded spaces, e.g. +")))),n.createElement("tr",null,n.createElement("td",null,"Response Format"),n.createElement("td",null,n.createElement("p",null,"You will receive a tab-delimited matrix with the following 4 columns:"),n.createElement("ul",null,n.createElement("li",null,n.createElement("strong",null,"ARRAY_ID"),": The protein array ID."),n.createElement("li",null,n.createElement("strong",null,"ARRAY_TYPE"),": The protein array antibody type, i.e. protein_level or phosphorylation."),n.createElement("li",null,n.createElement("strong",null,"GENE"),": The targeted gene name (HUGO gene symbol)."),n.createElement("li",null,n.createElement("strong",null,"RESIDUE"),": The targeted resdue(s).")))),n.createElement("tr",null,n.createElement("td",null,"Example"),n.createElement("td",null,n.createElement("ul",null,n.createElement("li",null,n.createElement("a",{href:"webservice.do?cmd=getProteinArrayInfo&cancer_study_id=coadread_tcga"},"Get Information on RPPA Antibodies Measuring TCGA Colorectal Cases.")),n.createElement("li",null,n.createElement("a",{href:"webservice.do?cmd=getProteinArrayInfo&cancer_study_id=coadread_tcga&protein_array_type=phosphorylation"},"Get Information on RPPA Phosphoprotein Antibodies Measuring TCGA Colorectal Cases.")),n.createElement("li",null,n.createElement("a",{href:"webservice.do?cmd=getProteinArrayInfo&cancer_study_id=coadread_tcga&protein_array_type=protein_level&gene_list=ERBB2+TP53"},"Get Information on ERBB2 and TP53 RPPA Protein Antibodies Measuring TCGA Colorectal Cases."))))))),n.createElement("table",{className:"table table-bordered"},n.createElement("tbody",null,n.createElement("tr",null,n.createElement("th",{colSpan:2},"Get RPPA-based Proteomics Data")),n.createElement("tr",null,n.createElement("td",null,"Description"),n.createElement("td",null,"Retrieves protein and/or phosphoprotein levels measured by reverse-phase protein arrays (RPPA).")),n.createElement("tr",null,n.createElement("td",null,"Query Format"),n.createElement("td",null,n.createElement("ul",null,n.createElement("li",null,n.createElement("strong",null,"cmd"),"=getProteinArrayData (required)"),n.createElement("li",null,n.createElement("strong",null,"case_set_id"),"= [case set ID] (required)"),n.createElement("li",null,n.createElement("strong",null,"array_info"),"= [1 or 0]. If 1, antibody information will also be exported.")))),n.createElement("tr",null,n.createElement("td",null,"Response Format 1"),n.createElement("td",null,n.createElement("p",null,"If the parameter of array_info is not specified or it is not 1, you will receive a tab-delimited matrix with the following columns:"),n.createElement("ul",null,n.createElement("li",null,n.createElement("strong",null,"ARRAY_ID"),": The protein array ID."),n.createElement("li",null,n.createElement("strong",null,"Columns 2 - N"),": Data for each case.")))),n.createElement("tr",null,n.createElement("td",null,"Response Format 2"),n.createElement("td",null,n.createElement("p",null,"If the parameter of array_info is 1, you will receive a tab-delimited matrix with the following columns:"),n.createElement("ul",null,n.createElement("li",null,n.createElement("strong",null,"ARRAY_ID"),": The protein array ID."),n.createElement("li",null,n.createElement("strong",null,"ARRAY_TYPE"),": The protein array antibody type, i.e. protein_level or phosphorylation."),n.createElement("li",null,n.createElement("strong",null,"GENE"),": The targeted gene name (HUGO gene symbol)."),n.createElement("li",null,n.createElement("strong",null,"RESIDUE"),": The targeted resdue(s)."),n.createElement("li",null,n.createElement("strong",null,"Columns 5 - N"),": Data for each case.")))),n.createElement("tr",null,n.createElement("td",null,"Example"),n.createElement("td",null,n.createElement("ul",null,n.createElement("li",null,n.createElement("a",{href:"webservice.do?cmd=getProteinArrayData&case_set_id=coadread_tcga_RPPA"},"Get All RPPA Data in TCGA Colorectal Cases.")),n.createElement("li",null,n.createElement("a",{href:"webservice.do?cmd=getProteinArrayData&case_set_id=coadread_tcga_RPPA&array_info=1"},"Get All RPPA Data with antibody information in TCGA Colorectal Cases.")))))))),n.createElement("hr",null),n.createElement("h2",{id:"linking-to-us"},"Linking to Us"),n.createElement("p",null,"Once you have a cancer_study_id, it is very easy to create stable links from your web site to the cBio Portal. Stable links must point to ln, and can include the following parameters:"),n.createElement("ul",null,n.createElement("li",null,n.createElement("strong",null,"q"),"=[a query following ",n.createElement("a",{href:"oql",target:"_blank"},"Onco Query Language"),", e.g. a space separated list of HUGO gene symbols] (required)"),n.createElement("li",null,n.createElement("strong",null,"cancer_study_id"),"=[cancer study ID] (if not specified, do a cross cancer query)"),n.createElement("li",null,n.createElement("strong",null,"report"),"=[report to display; can be one of: full (default), oncoprint_html]")),n.createElement("p",null,"For example, here is a link to the TCGA GBM data for EGFR and NF1:"),n.createElement("p",null,n.createElement("a",{href:"ln?cancer_study_id=gbm_tcga&q=EGFR+NF1"},"ln?cancer_study_id=gbm_tcga&q=EGFR+NF1")),n.createElement("p",null,"And a link to TP53 mutations across all cancer studies:"),n.createElement("p",null,n.createElement("a",{href:"ln?q=TP53:MUT"},"ln?q=TP53:MUT")))}}])&&u(l.prototype,r),c&&u(l,c),t}();f=g([r.observer],f),t.default=f}}]);