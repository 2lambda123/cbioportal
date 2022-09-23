(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1333:function(e,t,n){},493:function(e,t,n){"use strict";n.r(t),n.d(t,"UserDataAccessToken",function(){return G});var l=n(0),r=n(18),a=n(7),c=n(157),o=n(709),i=n(68),s=(n(1333),n(160)),u=n.n(s),m=n(5),d=n(2),E=n(147),p=n(154),f=n.n(p),g=n(67);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function y(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function D(e){return(D="function"==typeof Symbol&&"symbol"===h(Symbol.iterator)?function(e){return h(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":h(e)})(e)}var A=function(e,t,n,l){var r,a=arguments.length,c=a<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,n):l;if("object"===("undefined"==typeof Reflect?"undefined":D(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,l);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(c=(a<3?r(c):a>3?r(t,n,c):r(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c},C=function(e,t,n,l){return new(n||(n=Promise))(function(r,a){function c(e){try{i(l.next(e))}catch(e){a(e)}}function o(e){try{i(l.throw(e))}catch(e){a(e)}}function i(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(c,o)}i((l=l.apply(e,t||[])).next())})},G=function e(t,n,l,r){w(this,e),this.token=t,this.creationDate=n,this.expirationDate=l,this.username=r};function T(e){return Object(E.isNullOrUndefined)(e)?(alert("Cannot create Data Access Token file for user with non-existent tokens."),null):"token: "+e.token+"\ncreation_date: "+new Date(e.creationDate).toISOString()+"\nexpiration_date: "+new Date(e.expirationDate).toISOString()}A([a.observable],G.prototype,"token",void 0),A([a.observable],G.prototype,"creationDate",void 0),A([a.observable],G.prototype,"expirationDate",void 0),A([a.observable],G.prototype,"username",void 0);var R=function(e){function t(e){return w(this,t),y(this,_(t).call(this,e))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,l["Component"]),n=t,(r=[{key:"generateNewDataAccessToken",value:function(){return C(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.appStore.isLoggedIn){e.next=8;break}return e.next=3,Promise.resolve(i.a.createDataAccessTokenUsingPOST({allowRevocationOfOtherTokens:d.b.serverConfig.dat_uuid_revoke_other_tokens}));case 3:return t=e.sent,n=new G(t.token,t.creation,t.expiration,t.username),e.abrupt("return",n);case 8:return e.abrupt("return",void 0);case 9:case"end":return e.stop()}},e,this)}))}},{key:"downloadDataAccessTokenFile",value:function(){return C(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.generateNewDataAccessToken(),Object(E.isNullOrUndefined)(t)){e.next=8;break}return e.t0=T,e.next=5,t;case 5:e.t1=e.sent,n=(0,e.t0)(e.t1),f()(n,"cbioportal_data_access_token.txt");case 8:case"end":return e.stop()}},e,this)}))}},{key:"renderDataAccessTokensDiv",value:function(){var e=this;return"social_auth"===d.b.serverConfig.authenticationMethod||"uuid"!==d.b.serverConfig.dat_method&&"jwt"!==d.b.serverConfig.dat_method?l.createElement("div",null):l.createElement("div",{id:"using-data-access-tokens"},l.createElement(o.a,{sourceUrl:d.b.serverConfig.skin_documentation_dat,title:"Using Data Access Tokens"}),l.createElement("a",{onClick:function(){return e.downloadDataAccessTokenFile()}},"Download token"))}},{key:"render",value:function(){return l.createElement(c.a,{className:"whiteBackground staticPage"},l.createElement(u.a,null,l.createElement("title",null,"cBioPortal for Cancer Genomics::Helmet")),l.createElement("h1",null,"Web API"),l.createElement("h2",{id:"introduction"},"Introduction"),l.createElement("p",null,"The Cancer Genomic Data Server (CGDS) web service interface provides direct programmatic access to all genomic data stored within the server. This enables you to easily access data from your favorite programming language, such as Python, Java, Perl, R or MatLab. The CGDS web service is REST-based, meaning that client applications create a query consisting of parameters appended to a URL, and receive back either either text or an XML response. For CGDS, all responses are currently tab-delimited text. Clients of the CGDS web service can issue the following types of queries:"),l.createElement("ul",null,l.createElement("li",null,"What cancer studies are stored on the server?"),l.createElement("li",null,"What genetic profile types are available for cancer study X? For example, does the server store mutation and copy number data for the TCGA Glioblastoma data?"),l.createElement("li",null,"What case sets are available for cancer study X? For example, what case sets are available for TCGA Glioblastoma?")),l.createElement("p",null,'Additionally, clients can easily retrieve "slices" of genomic data. For example, a client can retrieve all mutation data from PTEN and EGFR in the TCGA Glioblastoma data.'),l.createElement("p",null,"Please note that the example queries below are accurate, but they are not guaranteed to return data, as our database is constantly being updated."),l.createElement("h2",{id:"the-cgds-r-package"},"The CGDS R Package"),l.createElement("p",null,"If you are interested in accessing CGDS via R, please check out our ",l.createElement(m.b,{to:"/rmatlab"}," CGDS-R library"),"."),l.createElement("h2",{id:"basic-query-syntax"},"Basic Query Syntax"),l.createElement("p",null,"All web queries are available at: ",l.createElement("a",{href:"webservice.do"},"webservice.do"),". All calls to the Web interface are constructed by appending URL parameters. Within each call, you must specify:"),l.createElement("ul",null,l.createElement("li",null,l.createElement("strong",null,"cmd")," = the command that you wish to execute. The command must be equal to one of the following: getTypesOfCancer, getNetwork, getCancerStudies, getGeneticProfiles, getProfileData, getCaseLists, getClinicalData, or getMutationData."),l.createElement("li",null,"optional additional parameters, depending of the command (see below).")),l.createElement("p",null,"For example, the following query will request all case lists for the TCGA GBM data:"),l.createElement("p",null,l.createElement("a",{href:"webservice.do?cmd=getCaseLists&cancer_study_id=gbm_tcga"},"webservice.do?cmd=getCaseLists&cancer_study_id=gbm_tcga")),l.createElement("h2",{id:"response-header-and-error-messages"},"Response Header and Error Messages"),l.createElement("p",null,"The first line of each response begins with a hash mark (#), and will contain data regarding the server status. For example:"),l.createElement("pre",null,l.createElement("code",null,"# CGDS Kernel:  Data served up fresh at:  Wed Oct 27 13:02:30 EDT 2010")),l.createElement("p",null,'If any errors have occurred in processing your query, this will appear directly after the status message. Error messages begin with the "Error:" tag. Warning messages begin with the "# Warning:" tag. Unrecoverable errors are reported as errors. For example:'),l.createElement("pre",null,l.createElement("code",null,"# CGDS Kernel:  Data served up fresh at:  Wed Oct 27 13:02:30 EDT 2010",l.createElement("br",null),"Error:  No case lists available for cancer_study_id:  gbs.")),l.createElement("p",null,"Recoverable errors, such as invalid gene symbols are reported as warnings. Multiple warnings may also be returned. For example:"),l.createElement("pre",null,l.createElement("code",null,"# CGDS Kernel:  Data served up fresh at:  Wed Oct 27 13:06:34 EDT 2010",l.createElement("br",null),"# Warning:  Unknown gene:  EGFR11",l.createElement("br",null),"# Warning:  Unknown gene:  EGFR12",l.createElement("br",null))),l.createElement("h2",{id:"deprecated-api"},"Deprecated API"),l.createElement("p",null,"As of August, 2011:"),l.createElement("ul",null,l.createElement("li",null,l.createElement("p",null,"In previous versions of the API, the ",l.createElement("strong",null,"getCancerStudies")," command was referred to as ",l.createElement("strong",null,"getCancerTypes"),". For backward compatibility, ",l.createElement("strong",null,"getCancerTypes")," still works, but is now considered deprecated.")),l.createElement("li",null,l.createElement("p",null,"In previous versions of the API, the ",l.createElement("strong",null,"cancer_study_id")," parameter was referred to as ",l.createElement("strong",null,"cancer_type_id"),". For backward compatibility,, ",l.createElement("strong",null,"cancer_type_id")," still works, but is now considered deprecated."))),l.createElement("h2",{id:"commands"},"Commands"),l.createElement("div",{className:"commandDocumentation"},l.createElement("table",{className:"table table-bordered"},l.createElement("tbody",null,l.createElement("tr",null,l.createElement("th",{colSpan:2},"Get All Types of Cancer")),l.createElement("tr",null,l.createElement("td",null,"Description"),l.createElement("td",null,"Retrieves a list of all the clinical types of cancer stored on the server.")),l.createElement("tr",null,l.createElement("td",null,"Query Format"),l.createElement("td",null,l.createElement("strong",null,"cmd=getTypesOfCancer")," (required)")),l.createElement("tr",null,l.createElement("td",null,"Response Format"),l.createElement("td",null,l.createElement("p",null,"A tab-delimited file with two columns:"),l.createElement("ul",null,l.createElement("li",null,l.createElement("strong",null,"type_of_cancer_id:"),' a unique text identifier used to identify the type of cancer. For example, "gbm" identifies Glioblastoma multiforme.'),l.createElement("li",null,l.createElement("strong",null,"name:")," short name of the type of cancer.")))),l.createElement("tr",null,l.createElement("td",null,"Example"),l.createElement("td",null,l.createElement("a",{href:"webservice.do?cmd=getTypesOfCancer"},"Get all Types of Cancer."))))),l.createElement("table",{className:"table table-bordered"},l.createElement("tbody",null,l.createElement("tr",null,l.createElement("th",{colSpan:2},"Get All Cancer Studies")),l.createElement("tr",null,l.createElement("td",null,"Description"),l.createElement("td",null,"Retrieves meta-data regarding cancer studies stored on the server.")),l.createElement("tr",null,l.createElement("td",null,"Query Format"),l.createElement("td",null,l.createElement("strong",null,"cmd=getCancerStudies")," (required)")),l.createElement("tr",null,l.createElement("td",null,"Response Format"),l.createElement("td",null,l.createElement("p",null,"A tab-delimited file with three columns:"),l.createElement("ul",null,l.createElement("li",null,l.createElement("strong",null,"cancer_study_id:")," a unique ID that should be used to identify the cancer study in subsequent interface calls."),l.createElement("li",null,l.createElement("strong",null,"name:")," short name of the cancer study."),l.createElement("li",null,l.createElement("strong",null,"description:")," short description of the cancer study.")))),l.createElement("tr",null,l.createElement("td",null,"Example"),l.createElement("td",null,l.createElement("a",{href:"webservice.do?cmd=getCancerStudies"},"Get all Cancer Studies."))))),l.createElement("table",{className:"table table-bordered"},l.createElement("tbody",null,l.createElement("tr",null,l.createElement("th",{colSpan:2},"Get All Genetic Profiles for a Specific Cancer Study")),l.createElement("tr",null,l.createElement("td",null,"Description"),l.createElement("td",null,"Retrieves meta-data regarding all genetic profiles, e.g. mutation or copy number profiles, stored about a specific cancer study.")),l.createElement("tr",null,l.createElement("td",null,"Query Format"),l.createElement("td",null,l.createElement("ul",null,l.createElement("li",null,l.createElement("strong",null,"cmd"),"=getGeneticProfiles (required)"),l.createElement("li",null,l.createElement("strong",null,"cancer_study_id"),"=[cancer study ID] (required)")))),l.createElement("tr",null,l.createElement("td",null,"Response Format"),l.createElement("td",null,l.createElement("p",null,"A tab-delimited file with six columns:"),l.createElement("ul",null,l.createElement("li",null,l.createElement("strong",null,"genetic_profile_id"),': a unique ID used to identify the genetic profile ID in subsequent interface calls. This is a human readable ID. For example, "gbm_mutations" identifies the TCGA GBM mutation genetic profile.'),l.createElement("li",null,l.createElement("strong",null,"genetic_profile_name"),": short profile name."),l.createElement("li",null,l.createElement("strong",null,"genetic_profile_description"),": short profile description."),l.createElement("li",null,l.createElement("strong",null,"cancer_study_id"),": cancer study ID tied to this genetic profile. Will match the input cancer_study_id."),l.createElement("li",null,l.createElement("strong",null,"genetic_alteration_type"),": indicates the profile type. Will be one of:",l.createElement("ul",null,l.createElement("li",null,"MUTATION"),l.createElement("li",null,"MUTATION_EXTENDED"),l.createElement("li",null,"COPY_NUMBER_ALTERATION"),l.createElement("li",null,"MRNA_EXPRESSION"),l.createElement("li",null,"METHYLATION"))),l.createElement("li",null,l.createElement("strong",null,"show_profile_in_analysis_tab"),": a boolean flag used for internal purposes (you can safely ignore it).")))),l.createElement("tr",null,l.createElement("td",null,"Example"),l.createElement("td",null,l.createElement("a",{href:"webservice.do?cmd=getGeneticProfiles&cancer_study_id=gbm_tcga"},"Get all Genetic Profiles for Glioblastoma (TCGA)."))))),l.createElement("table",{className:"table table-bordered"},l.createElement("tbody",null,l.createElement("tr",null,l.createElement("th",{colSpan:2},"Get All Case Lists for a Specific Cancer Study")),l.createElement("tr",null,l.createElement("td",null,"Description"),l.createElement("td",null,"Retrieves meta-data regarding all case lists stored about a specific cancer study. For example, a within a particular study, only some cases may have sequence data, and another subset of cases may have been sequenced and treated with a specific therapeutic protocol. Multiple case lists may be associated with each cancer study, and this method enables you to retrieve meta-data regarding all of these case lists.")),l.createElement("tr",null,l.createElement("td",null,"Query Format"),l.createElement("td",null,l.createElement("ul",null,l.createElement("li",null,l.createElement("strong",null,"cmd"),"=getCaseLists (required)"),l.createElement("li",null,l.createElement("strong",null,"cancer_study_id"),"=[cancer study ID] (required)")))),l.createElement("tr",null,l.createElement("td",null,"Response Format"),l.createElement("td",null,l.createElement("p",null,"A tab-delimited file with five columns:"),l.createElement("ul",null,l.createElement("li",null,l.createElement("strong",null,"case_list_id"),': a unique ID used to identify the case list ID in subsequent interface calls. This is a human readable ID. For example, "gbm_all" identifies all cases profiles in the TCGA GBM study.'),l.createElement("li",null,l.createElement("strong",null,"case_list_name"),": short name for the case list."),l.createElement("li",null,l.createElement("strong",null,"case_list_description"),": short description of the case list."),l.createElement("li",null,l.createElement("strong",null,"cancer_study_id"),": cancer study ID tied to this genetic profile. Will match the input cancer_study_id."),l.createElement("li",null,l.createElement("strong",null,"case_ids"),": space delimited list of all case IDs that make up this case list.")))),l.createElement("tr",null,l.createElement("td",null,"Example"),l.createElement("td",null,l.createElement("a",{href:"webservice.do?cmd=getCaseLists&cancer_study_id=gbm_tcga"},"Get all Case Lists for Glioblastoma (TCGA)."))))),l.createElement("table",{className:"table table-bordered"},l.createElement("tbody",null,l.createElement("tr",null,l.createElement("th",{colSpan:2},"Get Profile Data")),l.createElement("tr",null,l.createElement("td",null,"Description"),l.createElement("td",null,"Retrieves genomic profile data for one or more genes.")),l.createElement("tr",null,l.createElement("td",null,"Query Format"),l.createElement("td",null,l.createElement("ul",null,l.createElement("li",null,l.createElement("strong",null,"cmd"),"=getProfileData (required)"),l.createElement("li",null,l.createElement("strong",null,"case_set_id"),"= [case set ID] (required)"),l.createElement("li",null,l.createElement("strong",null,"genetic_profile_id"),"= [one or more genetic profile IDs] (required). Multiple genetic profile IDs must be separated by comma (,) characters, or URL encoded spaces, e.g. +"),l.createElement("li",null,l.createElement("strong",null,"gene_list"),"= [one or more genes, specified as HUGO Gene Symbols or Entrez Gene IDs] (required). Multiple genes must be separated by comma (,) characters, or URL encoded spaces, e.g. +")),l.createElement("p",null,"You can either:"),l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"webservice.do?cmd=getProfileData&case_set_id=gbm_tcga_all&genetic_profile_id=gbm_tcga_mutations&gene_list=BRCA1+BRCA2+TP53"},"Specify multiple genes and a single genetic profile ID.")),l.createElement("li",null,l.createElement("a",{href:"webservice.do?cmd=getProfileData&case_set_id=gbm_tcga_all&genetic_profile_id=gbm_tcga_log2CNA,gbm_tcga_gistic&gene_list=EGFR"},"Specify a single gene and multiple genetic profile IDs."))))),l.createElement("tr",null,l.createElement("td",null,"Response Format"),l.createElement("td",null,l.createElement("p",null,"When requesting one or multiple genes and a single genetic profile ID (see above), you will receive a tab-delimited matrix with the following columns:"),l.createElement("ol",null,l.createElement("li",null,l.createElement("strong",null,"GENE_ID"),": Entrez Gene ID"),l.createElement("li",null,l.createElement("strong",null,"COMMON"),": HUGO Gene Symbol"),l.createElement("li",null,l.createElement("strong",null,"Columns 3 - N"),": Data for each case")),l.createElement("h4",{id:"response-format-2"},"Response Format 2"),l.createElement("p",null,"When requesting a single gene and multiple genetic profile IDs (see above), you will receive a tab-delimited matrix with the following columns:"),l.createElement("ol",null,l.createElement("li",null,l.createElement("strong",null,"GENETIC_PROFILE_ID"),": The Genetic Profile ID."),l.createElement("li",null,l.createElement("strong",null,"ALTERATION_TYPE"),": The Genetic Alteration Type, e.g. MUTATION, MUTATION_EXTENDED, COPY_NUMBER_ALTERATION, or MRNA_EXPRESSION."),l.createElement("li",null,l.createElement("strong",null,"GENE_ID"),": Entrez Gene ID."),l.createElement("li",null,l.createElement("strong",null,"COMMON"),": HUGO Gene Symbol."),l.createElement("li",null,l.createElement("strong",null,"Columns 5 - N"),": Data for each case.")))),l.createElement("tr",null,l.createElement("td",null,"Example"),l.createElement("td",null,"See Query Format above.")))),l.createElement("table",{className:"table table-bordered"},l.createElement("tbody",null,l.createElement("tr",null,l.createElement("th",{colSpan:2},"Get Extended Mutation Data")),l.createElement("tr",null,l.createElement("td",null,"Description"),l.createElement("td",null,"For data of type EXTENDED_MUTATION, you can request the full set of annotated extended mutation data. This enables you to, for example, determine which sequencing center sequenced the mutation, the amino acid change that results from the mutation, or gather links to predicted functional consequences of the mutation.")),l.createElement("tr",null,l.createElement("td",null,"Query Format"),l.createElement("td",null,l.createElement("ul",null,l.createElement("li",null,l.createElement("strong",null,"cmd"),"=getMutationData (required)"),l.createElement("li",null,l.createElement("strong",null,"genetic_profile_id"),"= [one or more mutation profile IDs] (required). Multiple genetic profile IDs must be separated by comma (,) characters, or URL encoded spaces, e.g. +"),l.createElement("li",null,l.createElement("strong",null,"case_set_id"),"= [case set ID] (optional). If not provided, all cases that have data in the specified mutation profiles will be queried."),l.createElement("li",null,l.createElement("strong",null,"gene_list"),"= [one or more genes, specified as HUGO Gene Symbols or Entrez Gene IDs] (required). Multiple genes must be separated by comma (,) characters, or URL encoded spaces, e.g. +")))),l.createElement("tr",null,l.createElement("td",null,"Response Format"),l.createElement("td",null,l.createElement("p",null,"A tab-delimited file with the following columns:"),l.createElement("ul",null,l.createElement("li",null,l.createElement("strong",null,"entrez_gene_id"),": Entrez Gene ID."),l.createElement("li",null,l.createElement("strong",null,"gene_symbol"),": HUGO Gene Symbol."),l.createElement("li",null,l.createElement("strong",null,"case_id"),": Case ID."),l.createElement("li",null,l.createElement("strong",null,"sequencing_center"),": Sequencer Center responsible for identifying this mutation. For example: broad.mit.edu."),l.createElement("li",null,l.createElement("strong",null,"mutation_status"),": somatic or germline mutation status. all mutations returned will be of type somatic."),l.createElement("li",null,l.createElement("strong",null,"mutation_type"),": mutation type, such as nonsense, missense, or frameshift_ins."),l.createElement("li",null,l.createElement("strong",null,"validation_status"),": validation status. Usually valid, invalid, or unknown."),l.createElement("li",null,l.createElement("strong",null,"amino_acid_change"),": amino acid change resulting from the mutation."),l.createElement("li",null,l.createElement("strong",null,"functional_impact_score"),": predicted functional impact score, as predicted by: ",l.createElement("a",{href:"http://mutationassessor.org/"},"Mutation Assessor"),"."),l.createElement("li",null,l.createElement("strong",null,"xvar_link"),": Link to the Mutation Assessor web site."),l.createElement("li",null,l.createElement("strong",null,"xvar_link_pdb"),": Link to the Protein Data Bank (PDB) View within Mutation Assessor web site."),l.createElement("li",null,l.createElement("strong",null,"xvar_link_msa"),": Link the Multiple Sequence Alignment (MSA) view within the Mutation Assessor web site."),l.createElement("li",null,l.createElement("strong",null,"chr"),": chromosome where mutation occurs."),l.createElement("li",null,l.createElement("strong",null,"start_position"),": start position of mutation."),l.createElement("li",null,l.createElement("strong",null,"end_position"),": end position of mutation."),l.createElement("li",null,l.createElement("strong",null,"genetic_profile_id"),": mutation profile id.")))),l.createElement("tr",null,l.createElement("td",null,"Example"),l.createElement("td",null,l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"webservice.do?cmd=getMutationData&case_set_id=gbm_tcga_all&genetic_profile_id=gbm_tcga_mutations&gene_list=EGFR+PTEN"},"Get Extended Mutation Data for EGFR and PTEN in TCGA GBM.")),l.createElement("li",null,l.createElement("a",{href:"webservice.do?cmd=getMutationData&genetic_profile_id=ov_tcga_mutations+ucec_tcga_mutations&gene_list=BRCA1"},"Get Extended Mutation Data for BRCA1 in TCGA OV and UCEC."))))))),l.createElement("table",{className:"table table-bordered"},l.createElement("tbody",null,l.createElement("tr",null,l.createElement("th",{colSpan:2},"Get Clinical Data")),l.createElement("tr",null,l.createElement("td",null,"Description"),l.createElement("td",null,"Retrieves overall survival, disease free survival and age at diagnosis for specified cases. Due to patient privacy restrictions, no other clinical data is available.")),l.createElement("tr",null,l.createElement("td",null,"Query Format"),l.createElement("td",null,l.createElement("ul",null,l.createElement("li",null,l.createElement("strong",null,"cmd"),"=getClinicalData (required)"),l.createElement("li",null,l.createElement("strong",null,"case_set_id"),"= [case set ID] (required)")))),l.createElement("tr",null,l.createElement("td",null,"Response Format"),l.createElement("td",null,l.createElement("p",null,"A tab-delimited file with the following columns:"),l.createElement("ul",null,l.createElement("li",null,l.createElement("strong",null,"case_id"),": Unique Case Identifier."),l.createElement("li",null,l.createElement("strong",null,"overall_survival_months"),": Overall survival, in months."),l.createElement("li",null,l.createElement("strong",null,"overall_survival_status"),': Overall survival status, usually indicated as "LIVING" or "DECEASED".'),l.createElement("li",null,l.createElement("strong",null,"disease_free_survival_months"),": Disease free survival, in months."),l.createElement("li",null,l.createElement("strong",null,"disease_free_survival_status"),': Disease free survival status, usually indicated as "DiseaseFree" or "Recurred/Progressed".'),l.createElement("li",null,l.createElement("strong",null,"age_at_diagnosis"),": Age at diagnosis.")))),l.createElement("tr",null,l.createElement("td",null,"Example"),l.createElement("td",null,l.createElement("a",{href:"webservice.do?cmd=getClinicalData&case_set_id=ov_tcga_all"},"Get Clinical Data for All TCGA Ovarian Cases."))))),l.createElement("table",{className:"table table-bordered"},l.createElement("tbody",null,l.createElement("tr",null,l.createElement("th",{colSpan:2},"Get Protein/Phosphoprotein Antibody Information")),l.createElement("tr",null,l.createElement("td",null,"Description"),l.createElement("td",null,"Retrieves information on antibodies used by reverse-phase protein arrays (RPPA) to measure protein/phosphoprotein levels.")),l.createElement("tr",null,l.createElement("td",null,"Query Format"),l.createElement("td",null,l.createElement("ul",null,l.createElement("li",null,l.createElement("strong",null,"cmd"),"=getProteinArrayInfo (required)"),l.createElement("li",null,l.createElement("strong",null,"cancer_study_id"),"= [cancer study ID] (required)"),l.createElement("li",null,l.createElement("strong",null,"protein_array_type"),"= [protein_level or phosphorylation]"),l.createElement("li",null,l.createElement("strong",null,"gene_list"),"= [one or more genes, specified as HUGO Gene Symbols or Entrez Gene IDs]. Multiple genes must be separated by comma (,) characters, or URL encoded spaces, e.g. +")))),l.createElement("tr",null,l.createElement("td",null,"Response Format"),l.createElement("td",null,l.createElement("p",null,"You will receive a tab-delimited matrix with the following 4 columns:"),l.createElement("ul",null,l.createElement("li",null,l.createElement("strong",null,"ARRAY_ID"),": The protein array ID."),l.createElement("li",null,l.createElement("strong",null,"ARRAY_TYPE"),": The protein array antibody type, i.e. protein_level or phosphorylation."),l.createElement("li",null,l.createElement("strong",null,"GENE"),": The targeted gene name (HUGO gene symbol)."),l.createElement("li",null,l.createElement("strong",null,"RESIDUE"),": The targeted resdue(s).")))),l.createElement("tr",null,l.createElement("td",null,"Example"),l.createElement("td",null,l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"webservice.do?cmd=getProteinArrayInfo&cancer_study_id=coadread_tcga"},"Get Information on RPPA Antibodies Measuring TCGA Colorectal Cases.")),l.createElement("li",null,l.createElement("a",{href:"webservice.do?cmd=getProteinArrayInfo&cancer_study_id=coadread_tcga&protein_array_type=phosphorylation"},"Get Information on RPPA Phosphoprotein Antibodies Measuring TCGA Colorectal Cases.")),l.createElement("li",null,l.createElement("a",{href:"webservice.do?cmd=getProteinArrayInfo&cancer_study_id=coadread_tcga&protein_array_type=protein_level&gene_list=ERBB2+TP53"},"Get Information on ERBB2 and TP53 RPPA Protein Antibodies Measuring TCGA Colorectal Cases."))))))),l.createElement("table",{className:"table table-bordered"},l.createElement("tbody",null,l.createElement("tr",null,l.createElement("th",{colSpan:2},"Get RPPA-based Proteomics Data")),l.createElement("tr",null,l.createElement("td",null,"Description"),l.createElement("td",null,"Retrieves protein and/or phosphoprotein levels measured by reverse-phase protein arrays (RPPA).")),l.createElement("tr",null,l.createElement("td",null,"Query Format"),l.createElement("td",null,l.createElement("ul",null,l.createElement("li",null,l.createElement("strong",null,"cmd"),"=getProteinArrayData (required)"),l.createElement("li",null,l.createElement("strong",null,"case_set_id"),"= [case set ID] (required)"),l.createElement("li",null,l.createElement("strong",null,"array_info"),"= [1 or 0]. If 1, antibody information will also be exported.")))),l.createElement("tr",null,l.createElement("td",null,"Response Format 1"),l.createElement("td",null,l.createElement("p",null,"If the parameter of array_info is not specified or it is not 1, you will receive a tab-delimited matrix with the following columns:"),l.createElement("ul",null,l.createElement("li",null,l.createElement("strong",null,"ARRAY_ID"),": The protein array ID."),l.createElement("li",null,l.createElement("strong",null,"Columns 2 - N"),": Data for each case.")))),l.createElement("tr",null,l.createElement("td",null,"Response Format 2"),l.createElement("td",null,l.createElement("p",null,"If the parameter of array_info is 1, you will receive a tab-delimited matrix with the following columns:"),l.createElement("ul",null,l.createElement("li",null,l.createElement("strong",null,"ARRAY_ID"),": The protein array ID."),l.createElement("li",null,l.createElement("strong",null,"ARRAY_TYPE"),": The protein array antibody type, i.e. protein_level or phosphorylation."),l.createElement("li",null,l.createElement("strong",null,"GENE"),": The targeted gene name (HUGO gene symbol)."),l.createElement("li",null,l.createElement("strong",null,"RESIDUE"),": The targeted resdue(s)."),l.createElement("li",null,l.createElement("strong",null,"Columns 5 - N"),": Data for each case.")))),l.createElement("tr",null,l.createElement("td",null,"Example"),l.createElement("td",null,l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"webservice.do?cmd=getProteinArrayData&case_set_id=coadread_tcga_RPPA"},"Get All RPPA Data in TCGA Colorectal Cases.")),l.createElement("li",null,l.createElement("a",{href:"webservice.do?cmd=getProteinArrayData&case_set_id=coadread_tcga_RPPA&array_info=1"},"Get All RPPA Data with antibody information in TCGA Colorectal Cases.")))))))),l.createElement("hr",null),l.createElement("h2",{id:"linking-to-us"},"Linking to Us"),l.createElement("p",null,"Once you have a cancer_study_id, it is very easy to create stable links from your web site to the cBio Portal. Stable links must point to ln, and can include the following parameters:"),l.createElement("ul",null,l.createElement("li",null,l.createElement("strong",null,"q"),"=[a query following ",l.createElement("a",{href:"oql",target:"_blank"},"Onco Query Language"),", e.g. a space separated list of HUGO gene symbols] (required)"),l.createElement("li",null,l.createElement("strong",null,"cancer_study_id"),"=[cancer study ID] (if not specified, do a cross cancer query)"),l.createElement("li",null,l.createElement("strong",null,"report"),"=[report to display; can be one of: full (default), oncoprint_html]")),l.createElement("p",null,"For example, here is a link to the TCGA GBM data for EGFR and NF1:"),l.createElement("p",null,l.createElement("a",{href:"ln?cancer_study_id=gbm_tcga&q=EGFR+NF1"},"ln?cancer_study_id=gbm_tcga&q=EGFR+NF1")),l.createElement("p",null,"And a link to TP53 mutations across all cancer studies:"),l.createElement("p",null,l.createElement("a",{href:"ln?q=TP53:MUT"},"ln?q=TP53:MUT")),l.createElement("div",{id:"using-data-access-tokens"},this.renderDataAccessTokensDiv()))}}])&&b(n.prototype,r),a&&b(n,a),t}();R.defaultProps={loadingComponent:l.createElement(g.a,{isLoading:!0})},R=A([r.observer],R),t.default=R},709:function(e,t,n){"use strict";var l=n(0),r=n(10),a=n.n(r),c=n(18),o=n(815),i=n.n(o),s=n(2),u=n(54),m=n(67),d=n(15);n(710);function E(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var b=function(e,t,n,l){var r,a=arguments.length,c=a<3?t:null===l?l=Object.getOwnPropertyDescriptor(t,n):l;if("object"===("undefined"==typeof Reflect?"undefined":h(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,l);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(c=(a<3?r(c):a>3?r(t,n,c):r(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c},y=function(e,t,n,l){return new(n||(n=Promise))(function(r,a){function c(e){try{i(l.next(e))}catch(e){a(e)}}function o(e){try{i(l.throw(e))}catch(e){a(e)}}function i(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(c,o)}i((l=l.apply(e,t||[])).next())})};var _=function(e){function t(){var e,n,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,l=p(t).apply(this,arguments),(e=!l||"object"!==h(l)&&"function"!=typeof l?f(n):l).source=Object(u.b)(function(){return y(f(e),void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.get(this.url);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}))}),e}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,l["Component"]),n=t,(r=[{key:"content",value:function(e,t){return function(e){return 0==!s.b.serverConfig.skin_documentation_markdown&&/\.md$/.test(e)}(t)?l.createElement(i.a,{renderers:this.props.renderers||{},className:"markdown-body",escapeHtml:!1,source:this.source.result}):l.createElement("div",{dangerouslySetInnerHTML:{__html:e}})}},{key:"render",value:function(){return l.createElement("div",null,this.props.title&&l.createElement("h1",null,this.props.title),l.createElement(m.a,{isLoading:this.source.isPending,size:"big",center:!0}),this.source.isComplete&&this.content(this.source.result,this.url))}},{key:"url",get:function(){return Object(d.m)(this.props.sourceUrl,s.b.serverConfig.skin_documentation_baseurl)}}])&&E(n.prototype,r),c&&E(n,c),t}();_=b([c.observer],_),t.a=_},710:function(e,t,n){}}]);