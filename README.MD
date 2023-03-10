# Api client for Test IT TMS
![Test IT](https://raw.githubusercontent.com/testit-tms/api-client-js/master/images/banner.png)

## Getting Started

### Compatibility

| Test IT | API Client |
|---------|------------|
| 3.4     | 1.0        |
| 3.5     | 2.0        |
| 4.0     | 3.0        |

## Installation

```shell
npm install testit-api-client
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```typescript
import {
  AttachmentsApi,
  AttachmentsApiApiKeys,
  RequestDetailedFile
} from 'testit-api-client';
import { readFileSync } from 'fs';
import { basename } from 'path';

const attachmentsApi = new AttachmentsApi("Your TMS address");
attachmentsApi.setApiKey(
  AttachmentsApiApiKeys['Bearer or PrivateToken'],
  "PrivateToken " + "Your private token");
  
const file: RequestDetailedFile = {
  value: readFileSync("Path to file"),
  options: {
      filename: basename("Path to file")
  }
};

const attachment = await attachmentsApi.apiV2AttachmentsPost(file)
  .then((response) => {
      return response.body;
  })
  .catch((response) => {
    console.log(response.data);
  });
```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

| Class | Method | HTTP request | Description |
|------------ | ------------- | ------------- | -------------|
| *AttachmentsApi* | [**apiV2AttachmentsIdDelete**](docs/Apis/AttachmentsApi.md#apiv2attachmentsiddelete) | **DELETE** /api/v2/attachments/{id} | Delete attachment file |
*AttachmentsApi* | [**apiV2AttachmentsIdGet**](docs/Apis/AttachmentsApi.md#apiv2attachmentsidget) | **GET** /api/v2/attachments/{id} | Download attachment file |
*AttachmentsApi* | [**apiV2AttachmentsOccupiedFileStorageSizeGet**](docs/Apis/AttachmentsApi.md#apiv2attachmentsoccupiedfilestoragesizeget) | **GET** /api/v2/attachments/occupiedFileStorageSize | Get size of attachments storage in bytes |
*AttachmentsApi* | [**apiV2AttachmentsPost**](docs/Apis/AttachmentsApi.md#apiv2attachmentspost) | **POST** /api/v2/attachments | Upload new attachment file |
| *AutoTestsApi* | [**apiV2AutoTestsFlakyBulkPost**](docs/Apis/AutoTestsApi.md#apiv2autotestsflakybulkpost) | **POST** /api/v2/autoTests/flaky/bulk | Set \"Flaky\" status for multiple autotests |
*AutoTestsApi* | [**apiV2AutoTestsIdTestResultsSearchPost**](docs/Apis/AutoTestsApi.md#apiv2autotestsidtestresultssearchpost) | **POST** /api/v2/autoTests/{id}/testResults/search | Get test results history for autotest |
*AutoTestsApi* | [**apiV2AutoTestsIdWorkItemsChangedIdGet**](docs/Apis/AutoTestsApi.md#apiv2autotestsidworkitemschangedidget) | **GET** /api/v2/autoTests/{id}/workItems/changed/id | Get identifiers of changed linked work items |
*AutoTestsApi* | [**apiV2AutoTestsIdWorkItemsChangedWorkItemIdApprovePost**](docs/Apis/AutoTestsApi.md#apiv2autotestsidworkitemschangedworkitemidapprovepost) | **POST** /api/v2/autoTests/{id}/workItems/changed/{workItemId}/approve | Approve changes to work items linked to autotest |
*AutoTestsApi* | [**apiV2AutoTestsSearchPost**](docs/Apis/AutoTestsApi.md#apiv2autotestssearchpost) | **POST** /api/v2/autoTests/search | Search for autotests |
*AutoTestsApi* | [**createAutoTest**](docs/Apis/AutoTestsApi.md#createautotest) | **POST** /api/v2/autoTests | Create autotest |
*AutoTestsApi* | [**createMultiple**](docs/Apis/AutoTestsApi.md#createmultiple) | **POST** /api/v2/autoTests/bulk | Create multiple autotests |
*AutoTestsApi* | [**deleteAutoTest**](docs/Apis/AutoTestsApi.md#deleteautotest) | **DELETE** /api/v2/autoTests/{id} | Delete autotest |
*AutoTestsApi* | [**deleteAutoTestLinkFromWorkItem**](docs/Apis/AutoTestsApi.md#deleteautotestlinkfromworkitem) | **DELETE** /api/v2/autoTests/{id}/workItems | Unlink autotest from work item |
*AutoTestsApi* | [**getAllAutoTests**](docs/Apis/AutoTestsApi.md#getallautotests) | **GET** /api/v2/autoTests |  |
*AutoTestsApi* | [**getAutoTestAverageDuration**](docs/Apis/AutoTestsApi.md#getautotestaverageduration) | **GET** /api/v2/autoTests/{id}/averageDuration | Get average autotest duration |
*AutoTestsApi* | [**getAutoTestById**](docs/Apis/AutoTestsApi.md#getautotestbyid) | **GET** /api/v2/autoTests/{id} | Get autotest by internal or global ID |
*AutoTestsApi* | [**getAutoTestChronology**](docs/Apis/AutoTestsApi.md#getautotestchronology) | **GET** /api/v2/autoTests/{id}/chronology | Get autotest chronology |
*AutoTestsApi* | [**getTestRuns**](docs/Apis/AutoTestsApi.md#gettestruns) | **GET** /api/v2/autoTests/{id}/testRuns | Get completed tests runs for autotests |
*AutoTestsApi* | [**getWorkItemResults**](docs/Apis/AutoTestsApi.md#getworkitemresults) | **GET** /api/v2/autoTests/{id}/testResultHistory |  |
*AutoTestsApi* | [**getWorkItemsLinkedToAutoTest**](docs/Apis/AutoTestsApi.md#getworkitemslinkedtoautotest) | **GET** /api/v2/autoTests/{id}/workItems | Get work items linked to autotest |
*AutoTestsApi* | [**linkAutoTestToWorkItem**](docs/Apis/AutoTestsApi.md#linkautotesttoworkitem) | **POST** /api/v2/autoTests/{id}/workItems | Link autotest with work items |
*AutoTestsApi* | [**updateAutoTest**](docs/Apis/AutoTestsApi.md#updateautotest) | **PUT** /api/v2/autoTests | Update autotest |
*AutoTestsApi* | [**updateMultiple**](docs/Apis/AutoTestsApi.md#updatemultiple) | **PUT** /api/v2/autoTests/bulk | Update multiple autotests |
| *ConfigurationsApi* | [**apiV2ConfigurationsCreateByParametersPost**](docs/Apis/ConfigurationsApi.md#apiv2configurationscreatebyparameterspost) | **POST** /api/v2/configurations/createByParameters | Create Configurations by parameters |
*ConfigurationsApi* | [**apiV2ConfigurationsSearchPost**](docs/Apis/ConfigurationsApi.md#apiv2configurationssearchpost) | **POST** /api/v2/configurations/search | Search for configurations |
*ConfigurationsApi* | [**createConfiguration**](docs/Apis/ConfigurationsApi.md#createconfiguration) | **POST** /api/v2/configurations | Create Configuration |
*ConfigurationsApi* | [**getConfigurationById**](docs/Apis/ConfigurationsApi.md#getconfigurationbyid) | **GET** /api/v2/configurations/{id} | Get configuration by internal or global ID |
*ConfigurationsApi* | [**updateConfiguration**](docs/Apis/ConfigurationsApi.md#updateconfiguration) | **PUT** /api/v2/configurations | Update Configuration |
| *CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesIdCustomAttributesExcludePost**](docs/Apis/CustomAttributeTemplatesApi.md#apiv2customattributestemplatesidcustomattributesexcludepost) | **POST** /api/v2/customAttributes/templates/{id}/customAttributes/exclude | Exclude CustomAttributes from CustomAttributeTemplate |
*CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesIdCustomAttributesIncludePost**](docs/Apis/CustomAttributeTemplatesApi.md#apiv2customattributestemplatesidcustomattributesincludepost) | **POST** /api/v2/customAttributes/templates/{id}/customAttributes/include | Include CustomAttributes to CustomAttributeTemplate |
*CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesIdDelete**](docs/Apis/CustomAttributeTemplatesApi.md#apiv2customattributestemplatesiddelete) | **DELETE** /api/v2/customAttributes/templates/{id} | Delete CustomAttributeTemplate |
*CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesIdGet**](docs/Apis/CustomAttributeTemplatesApi.md#apiv2customattributestemplatesidget) | **GET** /api/v2/customAttributes/templates/{id} | Get CustomAttributeTemplate by ID |
*CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesNameGet**](docs/Apis/CustomAttributeTemplatesApi.md#apiv2customattributestemplatesnameget) | **GET** /api/v2/customAttributes/templates/{name} | Get CustomAttributeTemplate by name |
*CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesPost**](docs/Apis/CustomAttributeTemplatesApi.md#apiv2customattributestemplatespost) | **POST** /api/v2/customAttributes/templates | Create CustomAttributeTemplate |
*CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesPut**](docs/Apis/CustomAttributeTemplatesApi.md#apiv2customattributestemplatesput) | **PUT** /api/v2/customAttributes/templates | Update custom attributes template |
*CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesSearchPost**](docs/Apis/CustomAttributeTemplatesApi.md#apiv2customattributestemplatessearchpost) | **POST** /api/v2/customAttributes/templates/search | Search CustomAttributeTemplates |
| *CustomAttributesApi* | [**apiV2CustomAttributesGlobalIdDelete**](docs/Apis/CustomAttributesApi.md#apiv2customattributesglobaliddelete) | **DELETE** /api/v2/customAttributes/global/{id} | Delete global attribute |
*CustomAttributesApi* | [**apiV2CustomAttributesGlobalIdPut**](docs/Apis/CustomAttributesApi.md#apiv2customattributesglobalidput) | **PUT** /api/v2/customAttributes/global/{id} | Edit global attribute |
*CustomAttributesApi* | [**apiV2CustomAttributesGlobalPost**](docs/Apis/CustomAttributesApi.md#apiv2customattributesglobalpost) | **POST** /api/v2/customAttributes/global | Create global attribute |
*CustomAttributesApi* | [**apiV2CustomAttributesIdGet**](docs/Apis/CustomAttributesApi.md#apiv2customattributesidget) | **GET** /api/v2/customAttributes/{id} | Get attribute |
*CustomAttributesApi* | [**apiV2CustomAttributesSearchPost**](docs/Apis/CustomAttributesApi.md#apiv2customattributessearchpost) | **POST** /api/v2/customAttributes/search | Search for attributes |
| *NotificationsApi* | [**apiV2NotificationsCountGet**](docs/Apis/NotificationsApi.md#apiv2notificationscountget) | **GET** /api/v2/notifications/count | Get unread Notifications total in last 7 days |
*NotificationsApi* | [**apiV2NotificationsGet**](docs/Apis/NotificationsApi.md#apiv2notificationsget) | **GET** /api/v2/notifications | Get all Notifications for current User |
*NotificationsApi* | [**apiV2NotificationsIdReadPost**](docs/Apis/NotificationsApi.md#apiv2notificationsidreadpost) | **POST** /api/v2/notifications/{id}/read | Set Notification as read |
*NotificationsApi* | [**apiV2NotificationsReadPost**](docs/Apis/NotificationsApi.md#apiv2notificationsreadpost) | **POST** /api/v2/notifications/read | Set all Notifications as read |
*NotificationsApi* | [**apiV2NotificationsSearchPost**](docs/Apis/NotificationsApi.md#apiv2notificationssearchpost) | **POST** /api/v2/notifications/search | Search Notifications for current User |
| *ParametersApi* | [**apiV2ParametersBulkPost**](docs/Apis/ParametersApi.md#apiv2parametersbulkpost) | **POST** /api/v2/parameters/bulk | Create multiple parameters |
*ParametersApi* | [**apiV2ParametersBulkPut**](docs/Apis/ParametersApi.md#apiv2parametersbulkput) | **PUT** /api/v2/parameters/bulk | Update multiple parameters |
*ParametersApi* | [**apiV2ParametersGroupsGet**](docs/Apis/ParametersApi.md#apiv2parametersgroupsget) | **GET** /api/v2/parameters/groups | Get parameters as group |
*ParametersApi* | [**apiV2ParametersKeyNameNameExistsGet**](docs/Apis/ParametersApi.md#apiv2parameterskeynamenameexistsget) | **GET** /api/v2/parameters/key/name/{name}/exists | Check existence parameter key in system |
*ParametersApi* | [**apiV2ParametersKeyValuesGet**](docs/Apis/ParametersApi.md#apiv2parameterskeyvaluesget) | **GET** /api/v2/parameters/{key}/values | Get all parameter key values |
*ParametersApi* | [**apiV2ParametersKeysGet**](docs/Apis/ParametersApi.md#apiv2parameterskeysget) | **GET** /api/v2/parameters/keys | Get all parameter keys |
*ParametersApi* | [**createParameter**](docs/Apis/ParametersApi.md#createparameter) | **POST** /api/v2/parameters | Create parameter |
*ParametersApi* | [**deleteByName**](docs/Apis/ParametersApi.md#deletebyname) | **DELETE** /api/v2/parameters/name/{name} | Delete parameter by name |
*ParametersApi* | [**deleteByParameterKeyId**](docs/Apis/ParametersApi.md#deletebyparameterkeyid) | **DELETE** /api/v2/parameters/keyId/{keyId} | Delete parameters by parameter key identifier |
*ParametersApi* | [**deleteParameter**](docs/Apis/ParametersApi.md#deleteparameter) | **DELETE** /api/v2/parameters/{id} | Delete parameter |
*ParametersApi* | [**getAllParameters**](docs/Apis/ParametersApi.md#getallparameters) | **GET** /api/v2/parameters | Get all parameters |
*ParametersApi* | [**getParameterById**](docs/Apis/ParametersApi.md#getparameterbyid) | **GET** /api/v2/parameters/{id} | Get parameter by ID |
*ParametersApi* | [**obsoleteDeleteByName**](docs/Apis/ParametersApi.md#obsoletedeletebyname) | **POST** /api/v2/parameters/deleteByName |  |
*ParametersApi* | [**updateParameter**](docs/Apis/ParametersApi.md#updateparameter) | **PUT** /api/v2/parameters | Update parameter |
| *ProjectsApi* | [**addGlobaAttributesToProject**](docs/Apis/ProjectsApi.md#addglobaattributestoproject) | **POST** /api/v2/projects/{id}/globalAttributes | Add global attributes to project |
*ProjectsApi* | [**apiV2ProjectsIdAttributesTemplatesSearchPost**](docs/Apis/ProjectsApi.md#apiv2projectsidattributestemplatessearchpost) | **POST** /api/v2/projects/{id}/attributes/templates/search | Search for custom attributes templates |
*ProjectsApi* | [**apiV2ProjectsIdAttributesTemplatesTemplateIdDelete**](docs/Apis/ProjectsApi.md#apiv2projectsidattributestemplatestemplateiddelete) | **DELETE** /api/v2/projects/{id}/attributes/templates/{templateId} | Delete CustomAttributeTemplate from Project |
*ProjectsApi* | [**apiV2ProjectsIdAttributesTemplatesTemplateIdPost**](docs/Apis/ProjectsApi.md#apiv2projectsidattributestemplatestemplateidpost) | **POST** /api/v2/projects/{id}/attributes/templates/{templateId} | Add CustomAttributeTemplate to Project |
*ProjectsApi* | [**apiV2ProjectsIdFailureClassesGet**](docs/Apis/ProjectsApi.md#apiv2projectsidfailureclassesget) | **GET** /api/v2/projects/{id}/failureClasses | Get Project FailureClasses |
*ProjectsApi* | [**apiV2ProjectsIdFavoritePut**](docs/Apis/ProjectsApi.md#apiv2projectsidfavoriteput) | **PUT** /api/v2/projects/{id}/favorite | Mark Project as favorite |
*ProjectsApi* | [**apiV2ProjectsIdFiltersGet**](docs/Apis/ProjectsApi.md#apiv2projectsidfiltersget) | **GET** /api/v2/projects/{id}/filters | Get Project filters |
*ProjectsApi* | [**apiV2ProjectsIdTestPlansAnalyticsGet**](docs/Apis/ProjectsApi.md#apiv2projectsidtestplansanalyticsget) | **GET** /api/v2/projects/{id}/testPlans/analytics | Get TestPlans analytics |
*ProjectsApi* | [**apiV2ProjectsIdTestPlansNameExistsGet**](docs/Apis/ProjectsApi.md#apiv2projectsidtestplansnameexistsget) | **GET** /api/v2/projects/{id}/testPlans/{name}/exists | Checks if TestPlan exists with the specified name exists for the project |
*ProjectsApi* | [**apiV2ProjectsIdTestPlansSearchPost**](docs/Apis/ProjectsApi.md#apiv2projectsidtestplanssearchpost) | **POST** /api/v2/projects/{id}/testPlans/search | Get Project TestPlans with analytics |
*ProjectsApi* | [**apiV2ProjectsIdTestRunsActiveGet**](docs/Apis/ProjectsApi.md#apiv2projectsidtestrunsactiveget) | **GET** /api/v2/projects/{id}/testRuns/active | Get active Project TestRuns |
*ProjectsApi* | [**apiV2ProjectsIdTestRunsFullGet**](docs/Apis/ProjectsApi.md#apiv2projectsidtestrunsfullget) | **GET** /api/v2/projects/{id}/testRuns/full | Get Project TestRuns full models |
*ProjectsApi* | [**apiV2ProjectsIdWorkItemsSearchIdPost**](docs/Apis/ProjectsApi.md#apiv2projectsidworkitemssearchidpost) | **POST** /api/v2/projects/{id}/workItems/search/id | Search for work items and extract IDs only |
*ProjectsApi* | [**apiV2ProjectsIdWorkItemsSearchPost**](docs/Apis/ProjectsApi.md#apiv2projectsidworkitemssearchpost) | **POST** /api/v2/projects/{id}/workItems/search | Search for work items |
*ProjectsApi* | [**apiV2ProjectsIdWorkItemsTagsGet**](docs/Apis/ProjectsApi.md#apiv2projectsidworkitemstagsget) | **GET** /api/v2/projects/{id}/workItems/tags | Get WorkItems Tags |
*ProjectsApi* | [**apiV2ProjectsNameNameExistsGet**](docs/Apis/ProjectsApi.md#apiv2projectsnamenameexistsget) | **GET** /api/v2/projects/name/{name}/exists |  |
*ProjectsApi* | [**apiV2ProjectsSearchPost**](docs/Apis/ProjectsApi.md#apiv2projectssearchpost) | **POST** /api/v2/projects/search | Search for projects |
*ProjectsApi* | [**createCustomAttributeTestPlanProjectRelations**](docs/Apis/ProjectsApi.md#createcustomattributetestplanprojectrelations) | **POST** /api/v2/projects/{id}/testPlans/attributes | Add attributes to project's test plans |
*ProjectsApi* | [**createProject**](docs/Apis/ProjectsApi.md#createproject) | **POST** /api/v2/projects | Create project |
*ProjectsApi* | [**createProjectsAttribute**](docs/Apis/ProjectsApi.md#createprojectsattribute) | **POST** /api/v2/projects/{id}/attributes | Create project attribute |
*ProjectsApi* | [**deleteCustomAttributeTestPlanProjectRelations**](docs/Apis/ProjectsApi.md#deletecustomattributetestplanprojectrelations) | **DELETE** /api/v2/projects/{id}/testPlans/attribute/{attributeId} | Delete attribute from project's test plans |
*ProjectsApi* | [**deleteProject**](docs/Apis/ProjectsApi.md#deleteproject) | **DELETE** /api/v2/projects/{id} | Delete project |
*ProjectsApi* | [**deleteProjectAutoTests**](docs/Apis/ProjectsApi.md#deleteprojectautotests) | **DELETE** /api/v2/projects/{id}/autoTests | Delete project |
*ProjectsApi* | [**deleteProjectsAttribute**](docs/Apis/ProjectsApi.md#deleteprojectsattribute) | **DELETE** /api/v2/projects/{id}/attributes/{attributeId} | Delete project attribute |
*ProjectsApi* | [**export**](docs/Apis/ProjectsApi.md#export) | **POST** /api/v2/projects/{id}/export | Export project as JSON file |
*ProjectsApi* | [**exportWithTestPlansAndConfigurations**](docs/Apis/ProjectsApi.md#exportwithtestplansandconfigurations) | **POST** /api/v2/projects/{id}/export-by-testPlans | Export project with test plans, test suites and test points as JSON file |
*ProjectsApi* | [**getAllProjects**](docs/Apis/ProjectsApi.md#getallprojects) | **GET** /api/v2/projects | Get all projects |
*ProjectsApi* | [**getAttributeByProjectId**](docs/Apis/ProjectsApi.md#getattributebyprojectid) | **GET** /api/v2/projects/{id}/attributes/{attributeId} | Get project attribute |
*ProjectsApi* | [**getAttributesByProjectId**](docs/Apis/ProjectsApi.md#getattributesbyprojectid) | **GET** /api/v2/projects/{id}/attributes | Get project attributes |
*ProjectsApi* | [**getAutoTestsNamespaces**](docs/Apis/ProjectsApi.md#getautotestsnamespaces) | **GET** /api/v2/projects/{id}/autoTestsNamespaces | Get namespaces of autotests in project |
*ProjectsApi* | [**getConfigurationsByProjectId**](docs/Apis/ProjectsApi.md#getconfigurationsbyprojectid) | **GET** /api/v2/projects/{id}/configurations | Get project configurations |
*ProjectsApi* | [**getCustomAttributeTestPlanProjectRelations**](docs/Apis/ProjectsApi.md#getcustomattributetestplanprojectrelations) | **GET** /api/v2/projects/{id}/testPlans/attributes | Get project's test plan attributes |
*ProjectsApi* | [**getProjectById**](docs/Apis/ProjectsApi.md#getprojectbyid) | **GET** /api/v2/projects/{id} | Get project by ID |
*ProjectsApi* | [**getSectionsByProjectId**](docs/Apis/ProjectsApi.md#getsectionsbyprojectid) | **GET** /api/v2/projects/{id}/sections | Get project sections |
*ProjectsApi* | [**getTestPlansByProjectId**](docs/Apis/ProjectsApi.md#gettestplansbyprojectid) | **GET** /api/v2/projects/{id}/testPlans | Get project test plans |
*ProjectsApi* | [**getTestRunsByProjectId**](docs/Apis/ProjectsApi.md#gettestrunsbyprojectid) | **GET** /api/v2/projects/{id}/testRuns | Get project test runs |
*ProjectsApi* | [**getWorkItemsByProjectId**](docs/Apis/ProjectsApi.md#getworkitemsbyprojectid) | **GET** /api/v2/projects/{id}/workItems | Get project work items |
*ProjectsApi* | [**import**](docs/Apis/ProjectsApi.md#import) | **POST** /api/v2/projects/import | Import project from JSON file |
*ProjectsApi* | [**importToExistingProject**](docs/Apis/ProjectsApi.md#importtoexistingproject) | **POST** /api/v2/projects/{id}/import | Import project from JSON file into existing project |
*ProjectsApi* | [**restoreProject**](docs/Apis/ProjectsApi.md#restoreproject) | **POST** /api/v2/projects/{id}/restore | Restore project |
*ProjectsApi* | [**searchAttributesInProject**](docs/Apis/ProjectsApi.md#searchattributesinproject) | **POST** /api/v2/projects/{id}/attributes/search | Search for attributes used in the project |
*ProjectsApi* | [**searchTestPlanAttributesInProject**](docs/Apis/ProjectsApi.md#searchtestplanattributesinproject) | **POST** /api/v2/projects/{id}/testPlans/attributes/search | Search for attributes used in the project test plans |
*ProjectsApi* | [**updateCustomAttributeTestPlanProjectRelations**](docs/Apis/ProjectsApi.md#updatecustomattributetestplanprojectrelations) | **PUT** /api/v2/projects/{id}/testPlans/attribute | Update attribute of project's test plans |
*ProjectsApi* | [**updateProject**](docs/Apis/ProjectsApi.md#updateproject) | **PUT** /api/v2/projects | Update project |
*ProjectsApi* | [**updateProjectsAttribute**](docs/Apis/ProjectsApi.md#updateprojectsattribute) | **PUT** /api/v2/projects/{id}/attributes | Edit attribute of the project |
| *SectionsApi* | [**createSection**](docs/Apis/SectionsApi.md#createsection) | **POST** /api/v2/sections | Create section |
*SectionsApi* | [**deleteSection**](docs/Apis/SectionsApi.md#deletesection) | **DELETE** /api/v2/sections/{id} | Delete section |
*SectionsApi* | [**getSectionById**](docs/Apis/SectionsApi.md#getsectionbyid) | **GET** /api/v2/sections/{id} | Get section |
*SectionsApi* | [**getWorkItemsBySectionId**](docs/Apis/SectionsApi.md#getworkitemsbysectionid) | **GET** /api/v2/sections/{id}/workItems | Get section work items |
*SectionsApi* | [**move**](docs/Apis/SectionsApi.md#move) | **POST** /api/v2/sections/move | Move section with all work items into another section |
*SectionsApi* | [**rename**](docs/Apis/SectionsApi.md#rename) | **POST** /api/v2/sections/rename | Rename section |
*SectionsApi* | [**updateSection**](docs/Apis/SectionsApi.md#updatesection) | **PUT** /api/v2/sections | Update section |
| *TagsApi* | [**apiV2TagsGet**](docs/Apis/TagsApi.md#apiv2tagsget) | **GET** /api/v2/tags | Get all Tags |
*TagsApi* | [**apiV2TagsTestPlansTagsGet**](docs/Apis/TagsApi.md#apiv2tagstestplanstagsget) | **GET** /api/v2/tags/testPlansTags | Get all Tags that are used in TestPlans |
| *TestPlansApi* | [**addTestPointsWithSections**](docs/Apis/TestPlansApi.md#addtestpointswithsections) | **POST** /api/v2/testPlans/{id}/test-points/withSections | Add test-points to TestPlan with sections |
*TestPlansApi* | [**addWorkItemsWithSections**](docs/Apis/TestPlansApi.md#addworkitemswithsections) | **POST** /api/v2/testPlans/{id}/workItems/withSections | Add WorkItems to TestPlan with Sections as TestSuites |
*TestPlansApi* | [**apiV2TestPlansIdAnalyticsGet**](docs/Apis/TestPlansApi.md#apiv2testplansidanalyticsget) | **GET** /api/v2/testPlans/{id}/analytics | Get analytics by TestPlan |
*TestPlansApi* | [**apiV2TestPlansIdAutobalancePost**](docs/Apis/TestPlansApi.md#apiv2testplansidautobalancepost) | **POST** /api/v2/testPlans/{id}/autobalance | Distribute test points between the users |
*TestPlansApi* | [**apiV2TestPlansIdConfigurationsGet**](docs/Apis/TestPlansApi.md#apiv2testplansidconfigurationsget) | **GET** /api/v2/testPlans/{id}/configurations | Get TestPlan configurations |
*TestPlansApi* | [**apiV2TestPlansIdExportTestPointsXlsxPost**](docs/Apis/TestPlansApi.md#apiv2testplansidexporttestpointsxlsxpost) | **POST** /api/v2/testPlans/{id}/export/testPoints/xlsx | Export TestPoints from TestPlan in xls format |
*TestPlansApi* | [**apiV2TestPlansIdExportTestResultHistoryXlsxPost**](docs/Apis/TestPlansApi.md#apiv2testplansidexporttestresulthistoryxlsxpost) | **POST** /api/v2/testPlans/{id}/export/testResultHistory/xlsx | Export TestResults history from TestPlan in xls format |
*TestPlansApi* | [**apiV2TestPlansIdHistoryGet**](docs/Apis/TestPlansApi.md#apiv2testplansidhistoryget) | **GET** /api/v2/testPlans/{id}/history | Get TestPlan history |
*TestPlansApi* | [**apiV2TestPlansIdLinksGet**](docs/Apis/TestPlansApi.md#apiv2testplansidlinksget) | **GET** /api/v2/testPlans/{id}/links | Get Links of TestPlan |
*TestPlansApi* | [**apiV2TestPlansIdTestPointsLastResultsGet**](docs/Apis/TestPlansApi.md#apiv2testplansidtestpointslastresultsget) | **GET** /api/v2/testPlans/{id}/testPoints/lastResults | Get TestPoints with last result from TestPlan |
*TestPlansApi* | [**apiV2TestPlansIdTestPointsResetPost**](docs/Apis/TestPlansApi.md#apiv2testplansidtestpointsresetpost) | **POST** /api/v2/testPlans/{id}/testPoints/reset | Reset TestPoints status of TestPlan |
*TestPlansApi* | [**apiV2TestPlansIdTestRunsGet**](docs/Apis/TestPlansApi.md#apiv2testplansidtestrunsget) | **GET** /api/v2/testPlans/{id}/testRuns | Get TestRuns of TestPlan |
*TestPlansApi* | [**apiV2TestPlansIdTestRunsSearchPost**](docs/Apis/TestPlansApi.md#apiv2testplansidtestrunssearchpost) | **POST** /api/v2/testPlans/{id}/testRuns/search | Search TestRuns of TestPlan |
*TestPlansApi* | [**apiV2TestPlansIdTestRunsTestResultsLastModifiedModifiedDateGet**](docs/Apis/TestPlansApi.md#apiv2testplansidtestrunstestresultslastmodifiedmodifieddateget) | **GET** /api/v2/testPlans/{id}/testRuns/testResults/lastModified/modifiedDate | Get last modification date of test plan's test results |
*TestPlansApi* | [**apiV2TestPlansIdUnlockRequestPost**](docs/Apis/TestPlansApi.md#apiv2testplansidunlockrequestpost) | **POST** /api/v2/testPlans/{id}/unlock/request | Send unlock TestPlan notification |
*TestPlansApi* | [**apiV2TestPlansShortsPost**](docs/Apis/TestPlansApi.md#apiv2testplansshortspost) | **POST** /api/v2/testPlans/shorts | Get TestPlans short models by Project identifiers |
*TestPlansApi* | [**clone**](docs/Apis/TestPlansApi.md#clone) | **POST** /api/v2/testPlans/{id}/clone | Clone TestPlan |
*TestPlansApi* | [**complete**](docs/Apis/TestPlansApi.md#complete) | **POST** /api/v2/testPlans/{id}/complete | Complete TestPlan |
*TestPlansApi* | [**createTestPlan**](docs/Apis/TestPlansApi.md#createtestplan) | **POST** /api/v2/testPlans | Create TestPlan |
*TestPlansApi* | [**deleteTestPlan**](docs/Apis/TestPlansApi.md#deletetestplan) | **DELETE** /api/v2/testPlans/{id} | Delete TestPlan |
*TestPlansApi* | [**getTestPlanById**](docs/Apis/TestPlansApi.md#gettestplanbyid) | **GET** /api/v2/testPlans/{id} | Get TestPlan by Id |
*TestPlansApi* | [**getTestSuitesById**](docs/Apis/TestPlansApi.md#gettestsuitesbyid) | **GET** /api/v2/testPlans/{id}/testSuites | Get TestSuites Tree By Id |
*TestPlansApi* | [**pause**](docs/Apis/TestPlansApi.md#pause) | **POST** /api/v2/testPlans/{id}/pause | Pause TestPlan |
*TestPlansApi* | [**restoreTestPlan**](docs/Apis/TestPlansApi.md#restoretestplan) | **POST** /api/v2/testPlans/{id}/restore | Restore TestPlan |
*TestPlansApi* | [**start**](docs/Apis/TestPlansApi.md#start) | **POST** /api/v2/testPlans/{id}/start | Start TestPlan |
*TestPlansApi* | [**updateTestPlan**](docs/Apis/TestPlansApi.md#updatetestplan) | **PUT** /api/v2/testPlans | Update TestPlan |
| *TestPointsApi* | [**apiV2TestPointsIdTestRunsGet**](docs/Apis/TestPointsApi.md#apiv2testpointsidtestrunsget) | **GET** /api/v2/testPoints/{id}/testRuns | Get all test runs which use test point |
*TestPointsApi* | [**apiV2TestPointsIdWorkItemGet**](docs/Apis/TestPointsApi.md#apiv2testpointsidworkitemget) | **GET** /api/v2/testPoints/{id}/workItem | Get work item represented by test point |
*TestPointsApi* | [**apiV2TestPointsSearchIdPost**](docs/Apis/TestPointsApi.md#apiv2testpointssearchidpost) | **POST** /api/v2/testPoints/search/id | Search for test points and extract IDs only |
*TestPointsApi* | [**apiV2TestPointsSearchPost**](docs/Apis/TestPointsApi.md#apiv2testpointssearchpost) | **POST** /api/v2/testPoints/search | Search for test points |
| *TestResultsApi* | [**apiV2TestResultsIdAggregatedGet**](docs/Apis/TestResultsApi.md#apiv2testresultsidaggregatedget) | **GET** /api/v2/testResults/{id}/aggregated | Get test result by ID aggregated with previous results |
*TestResultsApi* | [**apiV2TestResultsIdAttachmentsAttachmentIdPut**](docs/Apis/TestResultsApi.md#apiv2testresultsidattachmentsattachmentidput) | **PUT** /api/v2/testResults/{id}/attachments/{attachmentId} | Attach file to the test result |
*TestResultsApi* | [**apiV2TestResultsIdAttachmentsInfoGet**](docs/Apis/TestResultsApi.md#apiv2testresultsidattachmentsinfoget) | **GET** /api/v2/testResults/{id}/attachments/info | Get test result attachments meta-information |
*TestResultsApi* | [**apiV2TestResultsIdGet**](docs/Apis/TestResultsApi.md#apiv2testresultsidget) | **GET** /api/v2/testResults/{id} | Get test result by ID |
*TestResultsApi* | [**apiV2TestResultsIdPut**](docs/Apis/TestResultsApi.md#apiv2testresultsidput) | **PUT** /api/v2/testResults/{id} | Edit test result by ID |
*TestResultsApi* | [**apiV2TestResultsSearchPost**](docs/Apis/TestResultsApi.md#apiv2testresultssearchpost) | **POST** /api/v2/testResults/search | Search for test results |
*TestResultsApi* | [**apiV2TestResultsStatisticsFilterPost**](docs/Apis/TestResultsApi.md#apiv2testresultsstatisticsfilterpost) | **POST** /api/v2/testResults/statistics/filter | Search for test results and extract statistics |
*TestResultsApi* | [**createAttachment**](docs/Apis/TestResultsApi.md#createattachment) | **POST** /api/v2/testResults/{id}/attachments | Upload and link attachment to TestResult |
*TestResultsApi* | [**deleteAttachment**](docs/Apis/TestResultsApi.md#deleteattachment) | **DELETE** /api/v2/testResults/{id}/attachments/{attachmentId} | Remove attachment and unlink from TestResult |
*TestResultsApi* | [**downloadAttachment**](docs/Apis/TestResultsApi.md#downloadattachment) | **GET** /api/v2/testResults/{id}/attachments/{attachmentId} | Get attachment of TestResult |
*TestResultsApi* | [**getAttachment**](docs/Apis/TestResultsApi.md#getattachment) | **GET** /api/v2/testResults/{id}/attachments/{attachmentId}/info | Get Metadata of TestResult's attachment |
*TestResultsApi* | [**getAttachments**](docs/Apis/TestResultsApi.md#getattachments) | **GET** /api/v2/testResults/{id}/attachments | Get all attachments of TestResult |
| *TestRunsApi* | [**apiV2TestRunsIdStatisticsFilterPost**](docs/Apis/TestRunsApi.md#apiv2testrunsidstatisticsfilterpost) | **POST** /api/v2/testRuns/{id}/statistics/filter | Search for the test run test results and build statistics |
*TestRunsApi* | [**apiV2TestRunsIdTestPointsResultsGet**](docs/Apis/TestRunsApi.md#apiv2testrunsidtestpointsresultsget) | **GET** /api/v2/testRuns/{id}/testPoints/results | Get test results from the test run grouped by test points |
*TestRunsApi* | [**apiV2TestRunsIdTestResultsBulkPut**](docs/Apis/TestRunsApi.md#apiv2testrunsidtestresultsbulkput) | **PUT** /api/v2/testRuns/{id}/testResults/bulk | Partial edit of multiple test results in the test run |
*TestRunsApi* | [**apiV2TestRunsIdTestResultsLastModifiedModificationDateGet**](docs/Apis/TestRunsApi.md#apiv2testrunsidtestresultslastmodifiedmodificationdateget) | **GET** /api/v2/testRuns/{id}/testResults/lastModified/modificationDate | Get modification date of last test result of the test run |
*TestRunsApi* | [**apiV2TestRunsSearchPost**](docs/Apis/TestRunsApi.md#apiv2testrunssearchpost) | **POST** /api/v2/testRuns/search | Search for test runs |
*TestRunsApi* | [**completeTestRun**](docs/Apis/TestRunsApi.md#completetestrun) | **POST** /api/v2/testRuns/{id}/complete | Complete TestRun |
*TestRunsApi* | [**createAndFillByAutoTests**](docs/Apis/TestRunsApi.md#createandfillbyautotests) | **POST** /api/v2/testRuns/byAutoTests | Create test runs based on autotests and configurations |
*TestRunsApi* | [**createAndFillByConfigurations**](docs/Apis/TestRunsApi.md#createandfillbyconfigurations) | **POST** /api/v2/testRuns/byConfigurations | Create test runs picking the needed test points |
*TestRunsApi* | [**createAndFillByWorkItems**](docs/Apis/TestRunsApi.md#createandfillbyworkitems) | **POST** /api/v2/testRuns/byWorkItems | Create test run based on configurations and work items |
*TestRunsApi* | [**createEmpty**](docs/Apis/TestRunsApi.md#createempty) | **POST** /api/v2/testRuns | Create empty TestRun |
*TestRunsApi* | [**getTestRunById**](docs/Apis/TestRunsApi.md#gettestrunbyid) | **GET** /api/v2/testRuns/{id} | Get TestRun by Id |
*TestRunsApi* | [**setAutoTestResultsForTestRun**](docs/Apis/TestRunsApi.md#setautotestresultsfortestrun) | **POST** /api/v2/testRuns/{id}/testResults | Send test results to the test runs in the system |
*TestRunsApi* | [**startTestRun**](docs/Apis/TestRunsApi.md#starttestrun) | **POST** /api/v2/testRuns/{id}/start | Start TestRun |
*TestRunsApi* | [**stopTestRun**](docs/Apis/TestRunsApi.md#stoptestrun) | **POST** /api/v2/testRuns/{id}/stop | Stop TestRun |
*TestRunsApi* | [**updateEmpty**](docs/Apis/TestRunsApi.md#updateempty) | **PUT** /api/v2/testRuns | Update empty TestRun |
| *TestSuitesApi* | [**addTestPointsToTestSuite**](docs/Apis/TestSuitesApi.md#addtestpointstotestsuite) | **POST** /api/v2/testSuites/{id}/test-points | Add test-points to test suite |
*TestSuitesApi* | [**createTestSuite**](docs/Apis/TestSuitesApi.md#createtestsuite) | **POST** /api/v2/testSuites | Create TestSuite |
*TestSuitesApi* | [**deleteTestSuite**](docs/Apis/TestSuitesApi.md#deletetestsuite) | **DELETE** /api/v2/testSuites/{id} | Delete TestSuite |
*TestSuitesApi* | [**getConfigurationsByTestSuiteId**](docs/Apis/TestSuitesApi.md#getconfigurationsbytestsuiteid) | **GET** /api/v2/testSuites/{id}/configurations | Get Configurations By Id |
*TestSuitesApi* | [**getTestPointsById**](docs/Apis/TestSuitesApi.md#gettestpointsbyid) | **GET** /api/v2/testSuites/{id}/testPoints | Get TestPoints By Id |
*TestSuitesApi* | [**getTestResultsById**](docs/Apis/TestSuitesApi.md#gettestresultsbyid) | **GET** /api/v2/testSuites/{id}/testResults | Get TestResults By Id |
*TestSuitesApi* | [**getTestSuiteById**](docs/Apis/TestSuitesApi.md#gettestsuitebyid) | **GET** /api/v2/testSuites/{id} | Get TestSuite by Id |
*TestSuitesApi* | [**getWorkItemsById**](docs/Apis/TestSuitesApi.md#getworkitemsbyid) | **GET** /api/v2/testSuites/{id}/workItems |  |
*TestSuitesApi* | [**searchWorkItems**](docs/Apis/TestSuitesApi.md#searchworkitems) | **POST** /api/v2/testSuites/{id}/workItems/search | Search WorkItems |
*TestSuitesApi* | [**setConfigurationsByTestSuiteId**](docs/Apis/TestSuitesApi.md#setconfigurationsbytestsuiteid) | **POST** /api/v2/testSuites/{id}/configurations | Set Configurations By TestSuite Id |
*TestSuitesApi* | [**setWorkItemsByTestSuiteId**](docs/Apis/TestSuitesApi.md#setworkitemsbytestsuiteid) | **POST** /api/v2/testSuites/{id}/workItems | Set WorkItems By TestSuite Id |
*TestSuitesApi* | [**updateTestSuite**](docs/Apis/TestSuitesApi.md#updatetestsuite) | **PUT** /api/v2/testSuites | Update TestSuite |
| *WebhooksApi* | [**apiV2WebhooksGet**](docs/Apis/WebhooksApi.md#apiv2webhooksget) | **GET** /api/v2/webhooks | Get all webhooks |
*WebhooksApi* | [**apiV2WebhooksIdDelete**](docs/Apis/WebhooksApi.md#apiv2webhooksiddelete) | **DELETE** /api/v2/webhooks/{id} | Delete webhook by ID |
*WebhooksApi* | [**apiV2WebhooksIdGet**](docs/Apis/WebhooksApi.md#apiv2webhooksidget) | **GET** /api/v2/webhooks/{id} | Get webhook by ID |
*WebhooksApi* | [**apiV2WebhooksIdPut**](docs/Apis/WebhooksApi.md#apiv2webhooksidput) | **PUT** /api/v2/webhooks/{id} | Edit webhook by ID |
*WebhooksApi* | [**apiV2WebhooksPost**](docs/Apis/WebhooksApi.md#apiv2webhookspost) | **POST** /api/v2/webhooks | Create webhook |
*WebhooksApi* | [**apiV2WebhooksSearchPost**](docs/Apis/WebhooksApi.md#apiv2webhookssearchpost) | **POST** /api/v2/webhooks/search | Search for webhooks |
*WebhooksApi* | [**apiV2WebhooksSpecialVariablesGet**](docs/Apis/WebhooksApi.md#apiv2webhooksspecialvariablesget) | **GET** /api/v2/webhooks/specialVariables | Get special variables for webhook event type |
| *WebhooksLogsApi* | [**apiV2WebhooksLogsGet**](docs/Apis/WebhooksLogsApi.md#apiv2webhookslogsget) | **GET** /api/v2/webhooks/logs | Get all webhook logs |
*WebhooksLogsApi* | [**apiV2WebhooksLogsIdDelete**](docs/Apis/WebhooksLogsApi.md#apiv2webhookslogsiddelete) | **DELETE** /api/v2/webhooks/logs/{id} | Delete webhook log by ID |
*WebhooksLogsApi* | [**apiV2WebhooksLogsIdGet**](docs/Apis/WebhooksLogsApi.md#apiv2webhookslogsidget) | **GET** /api/v2/webhooks/logs/{id} | Get webhook log by ID |
| *WorkItemsApi* | [**apiV2WorkItemsIdCheckListTransformToTestCasePost**](docs/Apis/WorkItemsApi.md#apiv2workitemsidchecklisttransformtotestcasepost) | **POST** /api/v2/workItems/{id}/checkList/transformTo/testCase | Transform CheckList to TestCase |
*WorkItemsApi* | [**apiV2WorkItemsIdHistoryGet**](docs/Apis/WorkItemsApi.md#apiv2workitemsidhistoryget) | **GET** /api/v2/workItems/{id}/history | Get change history of WorkItem |
*WorkItemsApi* | [**apiV2WorkItemsIdLikeDelete**](docs/Apis/WorkItemsApi.md#apiv2workitemsidlikedelete) | **DELETE** /api/v2/workItems/{id}/like | Delete like from WorkItem |
*WorkItemsApi* | [**apiV2WorkItemsIdLikePost**](docs/Apis/WorkItemsApi.md#apiv2workitemsidlikepost) | **POST** /api/v2/workItems/{id}/like | Set like to WorkItem |
*WorkItemsApi* | [**apiV2WorkItemsIdLikesCountGet**](docs/Apis/WorkItemsApi.md#apiv2workitemsidlikescountget) | **GET** /api/v2/workItems/{id}/likes/count | Get likes count of WorkItem |
*WorkItemsApi* | [**apiV2WorkItemsIdLikesGet**](docs/Apis/WorkItemsApi.md#apiv2workitemsidlikesget) | **GET** /api/v2/workItems/{id}/likes | Get likes of WorkItem |
*WorkItemsApi* | [**apiV2WorkItemsIdTestResultsHistoryGet**](docs/Apis/WorkItemsApi.md#apiv2workitemsidtestresultshistoryget) | **GET** /api/v2/workItems/{id}/testResults/history | Get test results history of WorkItem |
*WorkItemsApi* | [**apiV2WorkItemsIdVersionVersionIdActualPost**](docs/Apis/WorkItemsApi.md#apiv2workitemsidversionversionidactualpost) | **POST** /api/v2/workItems/{id}/version/{versionId}/actual | Set WorkItem as actual |
*WorkItemsApi* | [**apiV2WorkItemsMovePost**](docs/Apis/WorkItemsApi.md#apiv2workitemsmovepost) | **POST** /api/v2/workItems/move | Move WorkItem to another section |
*WorkItemsApi* | [**apiV2WorkItemsSearchPost**](docs/Apis/WorkItemsApi.md#apiv2workitemssearchpost) | **POST** /api/v2/workItems/search | Search for work items |
*WorkItemsApi* | [**apiV2WorkItemsSharedStepIdReferencesSectionsPost**](docs/Apis/WorkItemsApi.md#apiv2workitemssharedstepidreferencessectionspost) | **POST** /api/v2/workItems/{sharedStepId}/references/sections | Get SharedStep references in sections |
*WorkItemsApi* | [**apiV2WorkItemsSharedStepIdReferencesWorkItemsPost**](docs/Apis/WorkItemsApi.md#apiv2workitemssharedstepidreferencesworkitemspost) | **POST** /api/v2/workItems/{sharedStepId}/references/workItems | Get SharedStep references in workitems |
*WorkItemsApi* | [**apiV2WorkItemsSharedStepsSharedStepIdReferencesGet**](docs/Apis/WorkItemsApi.md#apiv2workitemssharedstepssharedstepidreferencesget) | **GET** /api/v2/workItems/sharedSteps/{sharedStepId}/references | Get SharedStep references |
*WorkItemsApi* | [**createWorkItem**](docs/Apis/WorkItemsApi.md#createworkitem) | **POST** /api/v2/workItems | Create Test Case, Checklist or Shared Step |
*WorkItemsApi* | [**deleteAllWorkItemsFromAutoTest**](docs/Apis/WorkItemsApi.md#deleteallworkitemsfromautotest) | **DELETE** /api/v2/workItems/{id}/autoTests | Delete all links AutoTests from WorkItem by Id or GlobalId |
*WorkItemsApi* | [**deleteWorkItem**](docs/Apis/WorkItemsApi.md#deleteworkitem) | **DELETE** /api/v2/workItems/{id} | Delete Test Case, Checklist or Shared Step by Id or GlobalId |
*WorkItemsApi* | [**getAutoTestsForWorkItem**](docs/Apis/WorkItemsApi.md#getautotestsforworkitem) | **GET** /api/v2/workItems/{id}/autoTests | Get all AutoTests linked to WorkItem by Id or GlobalId |
*WorkItemsApi* | [**getIterations**](docs/Apis/WorkItemsApi.md#getiterations) | **GET** /api/v2/workItems/{id}/iterations | Get iterations by workitem Id or GlobalId |
*WorkItemsApi* | [**getWorkItemById**](docs/Apis/WorkItemsApi.md#getworkitembyid) | **GET** /api/v2/workItems/{id} | Get Test Case, Checklist or Shared Step by Id or GlobalId |
*WorkItemsApi* | [**getWorkItemChronology**](docs/Apis/WorkItemsApi.md#getworkitemchronology) | **GET** /api/v2/workItems/{id}/chronology | Get WorkItem chronology by Id or GlobalId |
*WorkItemsApi* | [**getWorkItemVersions**](docs/Apis/WorkItemsApi.md#getworkitemversions) | **GET** /api/v2/workItems/{id}/versions | Get WorkItem versions |
*WorkItemsApi* | [**updateWorkItem**](docs/Apis/WorkItemsApi.md#updateworkitem) | **PUT** /api/v2/workItems | Update Test Case, Checklist or Shared Step |
| *WorkItemsCommentsApi* | [**apiV2WorkItemsCommentsCommentIdDelete**](docs/Apis/WorkItemsCommentsApi.md#apiv2workitemscommentscommentiddelete) | **DELETE** /api/v2/workItems/comments/{commentId} | Delete WorkItem comment |
*WorkItemsCommentsApi* | [**apiV2WorkItemsCommentsPost**](docs/Apis/WorkItemsCommentsApi.md#apiv2workitemscommentspost) | **POST** /api/v2/workItems/comments | Create WorkItem comment |
*WorkItemsCommentsApi* | [**apiV2WorkItemsCommentsPut**](docs/Apis/WorkItemsCommentsApi.md#apiv2workitemscommentsput) | **PUT** /api/v2/workItems/comments | Update work item comment |
*WorkItemsCommentsApi* | [**apiV2WorkItemsIdCommentsGet**](docs/Apis/WorkItemsCommentsApi.md#apiv2workitemsidcommentsget) | **GET** /api/v2/workItems/{id}/comments | Get work item comments |


## Documentation for Models

 - You can see the documentation [here](docs/Models/README.md).


# Contributing

You can help to develop the project. Any contributions are **greatly appreciated**.

* If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/testit-tms/api-client-js/issues/new) to discuss it, or directly create a pull request after you edit the *README.md* file with necessary changes.
* Please make sure you check your spelling and grammar.
* Create individual PR for each suggestion.
* Please also read through the [Code Of Conduct](https://github.com/testit-tms/api-client-js/blob/master/CODE_OF_CONDUCT.md) before posting your first idea as well.


# License

Distributed under the Apache-2.0 License. See [LICENSE](https://github.com/testit-tms/api-client-js/blob/master/LICENSE.md) for more information.
