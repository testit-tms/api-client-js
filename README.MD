# Api client for Test IT TMS
![Test IT](https://raw.githubusercontent.com/testit-tms/api-client-js/master/images/banner.png)

## Getting Started

### Compatibility

| Test IT | API Client |
|---------|------------|
| 3.4     | 1.0        |
| 3.5     | 2.0        |
| 4.0     | 3.0        |
| 4.2     | 3.1        |
| 4.3     | 3.2        |

## Installation

```shell
npm install testit-api-client
```

## Examples

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
| *AttachmentsApi* | [**apiV2AttachmentsIdDelete**](Apis/AttachmentsApi.md#apiv2attachmentsiddelete) | **DELETE** /api/v2/attachments/{id} | Delete attachment file |
*AttachmentsApi* | [**apiV2AttachmentsIdGet**](Apis/AttachmentsApi.md#apiv2attachmentsidget) | **GET** /api/v2/attachments/{id} | Download attachment file |
*AttachmentsApi* | [**apiV2AttachmentsOccupiedFileStorageSizeGet**](Apis/AttachmentsApi.md#apiv2attachmentsoccupiedfilestoragesizeget) | **GET** /api/v2/attachments/occupiedFileStorageSize | Get size of attachments storage in bytes |
*AttachmentsApi* | [**apiV2AttachmentsPost**](Apis/AttachmentsApi.md#apiv2attachmentspost) | **POST** /api/v2/attachments | Upload new attachment file |
| *AutoTestsApi* | [**apiV2AutoTestsFlakyBulkPost**](Apis/AutoTestsApi.md#apiv2autotestsflakybulkpost) | **POST** /api/v2/autoTests/flaky/bulk | Set \"Flaky\" status for multiple autotests |
*AutoTestsApi* | [**apiV2AutoTestsIdPatch**](Apis/AutoTestsApi.md#apiv2autotestsidpatch) | **PATCH** /api/v2/autoTests/{id} | Patch auto test |
*AutoTestsApi* | [**apiV2AutoTestsIdTestResultsSearchPost**](Apis/AutoTestsApi.md#apiv2autotestsidtestresultssearchpost) | **POST** /api/v2/autoTests/{id}/testResults/search | Get test results history for autotest |
*AutoTestsApi* | [**apiV2AutoTestsIdWorkItemsChangedIdGet**](Apis/AutoTestsApi.md#apiv2autotestsidworkitemschangedidget) | **GET** /api/v2/autoTests/{id}/workItems/changed/id | Get identifiers of changed linked work items |
*AutoTestsApi* | [**apiV2AutoTestsIdWorkItemsChangedWorkItemIdApprovePost**](Apis/AutoTestsApi.md#apiv2autotestsidworkitemschangedworkitemidapprovepost) | **POST** /api/v2/autoTests/{id}/workItems/changed/{workItemId}/approve | Approve changes to work items linked to autotest |
*AutoTestsApi* | [**apiV2AutoTestsSearchPost**](Apis/AutoTestsApi.md#apiv2autotestssearchpost) | **POST** /api/v2/autoTests/search | Search for autotests |
*AutoTestsApi* | [**createAutoTest**](Apis/AutoTestsApi.md#createautotest) | **POST** /api/v2/autoTests | Create autotest |
*AutoTestsApi* | [**createMultiple**](Apis/AutoTestsApi.md#createmultiple) | **POST** /api/v2/autoTests/bulk | Create multiple autotests |
*AutoTestsApi* | [**deleteAutoTest**](Apis/AutoTestsApi.md#deleteautotest) | **DELETE** /api/v2/autoTests/{id} | Delete autotest |
*AutoTestsApi* | [**deleteAutoTestLinkFromWorkItem**](Apis/AutoTestsApi.md#deleteautotestlinkfromworkitem) | **DELETE** /api/v2/autoTests/{id}/workItems | Unlink autotest from work item |
*AutoTestsApi* | [**getAllAutoTests**](Apis/AutoTestsApi.md#getallautotests) | **GET** /api/v2/autoTests |  |
*AutoTestsApi* | [**getAutoTestAverageDuration**](Apis/AutoTestsApi.md#getautotestaverageduration) | **GET** /api/v2/autoTests/{id}/averageDuration | Get average autotest duration |
*AutoTestsApi* | [**getAutoTestById**](Apis/AutoTestsApi.md#getautotestbyid) | **GET** /api/v2/autoTests/{id} | Get autotest by internal or global ID |
*AutoTestsApi* | [**getAutoTestChronology**](Apis/AutoTestsApi.md#getautotestchronology) | **GET** /api/v2/autoTests/{id}/chronology | Get autotest chronology |
*AutoTestsApi* | [**getTestRuns**](Apis/AutoTestsApi.md#gettestruns) | **GET** /api/v2/autoTests/{id}/testRuns | Get completed tests runs for autotests |
*AutoTestsApi* | [**getWorkItemResults**](Apis/AutoTestsApi.md#getworkitemresults) | **GET** /api/v2/autoTests/{id}/testResultHistory |  |
*AutoTestsApi* | [**getWorkItemsLinkedToAutoTest**](Apis/AutoTestsApi.md#getworkitemslinkedtoautotest) | **GET** /api/v2/autoTests/{id}/workItems | Get work items linked to autotest |
*AutoTestsApi* | [**linkAutoTestToWorkItem**](Apis/AutoTestsApi.md#linkautotesttoworkitem) | **POST** /api/v2/autoTests/{id}/workItems | Link autotest with work items |
*AutoTestsApi* | [**updateAutoTest**](Apis/AutoTestsApi.md#updateautotest) | **PUT** /api/v2/autoTests | Update autotest |
*AutoTestsApi* | [**updateMultiple**](Apis/AutoTestsApi.md#updatemultiple) | **PUT** /api/v2/autoTests/bulk | Update multiple autotests |
| *BackgroundJobsApi* | [**apiV2BackgroundJobsGet**](Apis/BackgroundJobsApi.md#apiv2backgroundjobsget) | **GET** /api/v2/backgroundJobs | Get current user background jobs |
*BackgroundJobsApi* | [**apiV2BackgroundJobsIdCancelPost**](Apis/BackgroundJobsApi.md#apiv2backgroundjobsidcancelpost) | **POST** /api/v2/backgroundJobs/{id}/cancel | Cancel current user background job |
| *ConfigurationsApi* | [**apiV2ConfigurationsCreateByParametersPost**](Apis/ConfigurationsApi.md#apiv2configurationscreatebyparameterspost) | **POST** /api/v2/configurations/createByParameters | Create Configurations by parameters |
*ConfigurationsApi* | [**apiV2ConfigurationsDeleteBulkPost**](Apis/ConfigurationsApi.md#apiv2configurationsdeletebulkpost) | **POST** /api/v2/configurations/delete/bulk | Delete multiple configurations |
*ConfigurationsApi* | [**apiV2ConfigurationsIdDelete**](Apis/ConfigurationsApi.md#apiv2configurationsiddelete) | **DELETE** /api/v2/configurations/{id} | Delete configuration |
*ConfigurationsApi* | [**apiV2ConfigurationsIdPatch**](Apis/ConfigurationsApi.md#apiv2configurationsidpatch) | **PATCH** /api/v2/configurations/{id} | Patch configuration |
*ConfigurationsApi* | [**apiV2ConfigurationsIdPurgePost**](Apis/ConfigurationsApi.md#apiv2configurationsidpurgepost) | **POST** /api/v2/configurations/{id}/purge | Permanently delete configuration from archive |
*ConfigurationsApi* | [**apiV2ConfigurationsIdRestorePost**](Apis/ConfigurationsApi.md#apiv2configurationsidrestorepost) | **POST** /api/v2/configurations/{id}/restore | Restore configuration from the archive |
*ConfigurationsApi* | [**apiV2ConfigurationsPurgeBulkPost**](Apis/ConfigurationsApi.md#apiv2configurationspurgebulkpost) | **POST** /api/v2/configurations/purge/bulk | Permanently delete multiple archived configurations |
*ConfigurationsApi* | [**apiV2ConfigurationsPut**](Apis/ConfigurationsApi.md#apiv2configurationsput) | **PUT** /api/v2/configurations | Edit configuration |
*ConfigurationsApi* | [**apiV2ConfigurationsRestoreBulkPost**](Apis/ConfigurationsApi.md#apiv2configurationsrestorebulkpost) | **POST** /api/v2/configurations/restore/bulk | Restore multiple configurations from the archive |
*ConfigurationsApi* | [**apiV2ConfigurationsSearchPost**](Apis/ConfigurationsApi.md#apiv2configurationssearchpost) | **POST** /api/v2/configurations/search | Search for configurations |
*ConfigurationsApi* | [**createConfiguration**](Apis/ConfigurationsApi.md#createconfiguration) | **POST** /api/v2/configurations | Create Configuration |
*ConfigurationsApi* | [**getConfigurationById**](Apis/ConfigurationsApi.md#getconfigurationbyid) | **GET** /api/v2/configurations/{id} | Get configuration by internal or global ID |
| *CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesIdCustomAttributesExcludePost**](Apis/CustomAttributeTemplatesApi.md#apiv2customattributestemplatesidcustomattributesexcludepost) | **POST** /api/v2/customAttributes/templates/{id}/customAttributes/exclude | Exclude CustomAttributes from CustomAttributeTemplate |
*CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesIdCustomAttributesIncludePost**](Apis/CustomAttributeTemplatesApi.md#apiv2customattributestemplatesidcustomattributesincludepost) | **POST** /api/v2/customAttributes/templates/{id}/customAttributes/include | Include CustomAttributes to CustomAttributeTemplate |
*CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesIdDelete**](Apis/CustomAttributeTemplatesApi.md#apiv2customattributestemplatesiddelete) | **DELETE** /api/v2/customAttributes/templates/{id} | Delete CustomAttributeTemplate |
*CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesIdGet**](Apis/CustomAttributeTemplatesApi.md#apiv2customattributestemplatesidget) | **GET** /api/v2/customAttributes/templates/{id} | Get CustomAttributeTemplate by ID |
*CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesNameGet**](Apis/CustomAttributeTemplatesApi.md#apiv2customattributestemplatesnameget) | **GET** /api/v2/customAttributes/templates/{name} | Get CustomAttributeTemplate by name |
*CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesPost**](Apis/CustomAttributeTemplatesApi.md#apiv2customattributestemplatespost) | **POST** /api/v2/customAttributes/templates | Create CustomAttributeTemplate |
*CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesPut**](Apis/CustomAttributeTemplatesApi.md#apiv2customattributestemplatesput) | **PUT** /api/v2/customAttributes/templates | Update custom attributes template |
*CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesSearchPost**](Apis/CustomAttributeTemplatesApi.md#apiv2customattributestemplatessearchpost) | **POST** /api/v2/customAttributes/templates/search | Search CustomAttributeTemplates |
| *CustomAttributesApi* | [**apiV2CustomAttributesGlobalIdDelete**](Apis/CustomAttributesApi.md#apiv2customattributesglobaliddelete) | **DELETE** /api/v2/customAttributes/global/{id} | Delete global attribute |
*CustomAttributesApi* | [**apiV2CustomAttributesGlobalIdPut**](Apis/CustomAttributesApi.md#apiv2customattributesglobalidput) | **PUT** /api/v2/customAttributes/global/{id} | Edit global attribute |
*CustomAttributesApi* | [**apiV2CustomAttributesGlobalPost**](Apis/CustomAttributesApi.md#apiv2customattributesglobalpost) | **POST** /api/v2/customAttributes/global | Create global attribute |
*CustomAttributesApi* | [**apiV2CustomAttributesIdGet**](Apis/CustomAttributesApi.md#apiv2customattributesidget) | **GET** /api/v2/customAttributes/{id} | Get attribute |
*CustomAttributesApi* | [**apiV2CustomAttributesSearchPost**](Apis/CustomAttributesApi.md#apiv2customattributessearchpost) | **POST** /api/v2/customAttributes/search | Search for attributes |
| *NotificationsApi* | [**apiV2NotificationsCountGet**](Apis/NotificationsApi.md#apiv2notificationscountget) | **GET** /api/v2/notifications/count | Get unread Notifications total in last 7 days |
*NotificationsApi* | [**apiV2NotificationsGet**](Apis/NotificationsApi.md#apiv2notificationsget) | **GET** /api/v2/notifications | Get all Notifications for current User |
*NotificationsApi* | [**apiV2NotificationsIdReadPost**](Apis/NotificationsApi.md#apiv2notificationsidreadpost) | **POST** /api/v2/notifications/{id}/read | Set Notification as read |
*NotificationsApi* | [**apiV2NotificationsReadPost**](Apis/NotificationsApi.md#apiv2notificationsreadpost) | **POST** /api/v2/notifications/read | Set all Notifications as read |
*NotificationsApi* | [**apiV2NotificationsSearchPost**](Apis/NotificationsApi.md#apiv2notificationssearchpost) | **POST** /api/v2/notifications/search | Search Notifications for current User |
| *ParametersApi* | [**apiV2ParametersBulkPost**](Apis/ParametersApi.md#apiv2parametersbulkpost) | **POST** /api/v2/parameters/bulk | Create multiple parameters |
*ParametersApi* | [**apiV2ParametersBulkPut**](Apis/ParametersApi.md#apiv2parametersbulkput) | **PUT** /api/v2/parameters/bulk | Update multiple parameters |
*ParametersApi* | [**apiV2ParametersGroupsGet**](Apis/ParametersApi.md#apiv2parametersgroupsget) | **GET** /api/v2/parameters/groups | Get parameters as group |
*ParametersApi* | [**apiV2ParametersKeyNameNameExistsGet**](Apis/ParametersApi.md#apiv2parameterskeynamenameexistsget) | **GET** /api/v2/parameters/key/name/{name}/exists | Check existence parameter key in system |
*ParametersApi* | [**apiV2ParametersKeyValuesGet**](Apis/ParametersApi.md#apiv2parameterskeyvaluesget) | **GET** /api/v2/parameters/{key}/values | Get all parameter key values |
*ParametersApi* | [**apiV2ParametersKeysGet**](Apis/ParametersApi.md#apiv2parameterskeysget) | **GET** /api/v2/parameters/keys | Get all parameter keys |
*ParametersApi* | [**apiV2ParametersSearchPost**](Apis/ParametersApi.md#apiv2parameterssearchpost) | **POST** /api/v2/parameters/search | Search for parameters |
*ParametersApi* | [**createParameter**](Apis/ParametersApi.md#createparameter) | **POST** /api/v2/parameters | Create parameter |
*ParametersApi* | [**deleteByName**](Apis/ParametersApi.md#deletebyname) | **DELETE** /api/v2/parameters/name/{name} | Delete parameter by name |
*ParametersApi* | [**deleteByParameterKeyId**](Apis/ParametersApi.md#deletebyparameterkeyid) | **DELETE** /api/v2/parameters/keyId/{keyId} | Delete parameters by parameter key identifier |
*ParametersApi* | [**deleteParameter**](Apis/ParametersApi.md#deleteparameter) | **DELETE** /api/v2/parameters/{id} | Delete parameter |
*ParametersApi* | [**getAllParameters**](Apis/ParametersApi.md#getallparameters) | **GET** /api/v2/parameters | Get all parameters |
*ParametersApi* | [**getParameterById**](Apis/ParametersApi.md#getparameterbyid) | **GET** /api/v2/parameters/{id} | Get parameter by ID |
*ParametersApi* | [**updateParameter**](Apis/ParametersApi.md#updateparameter) | **PUT** /api/v2/parameters | Update parameter |
| *ProjectsApi* | [**addGlobaAttributesToProject**](Apis/ProjectsApi.md#addglobaattributestoproject) | **POST** /api/v2/projects/{id}/globalAttributes | Add global attributes to project |
*ProjectsApi* | [**apiV2ProjectsIdAttributesTemplatesSearchPost**](Apis/ProjectsApi.md#apiv2projectsidattributestemplatessearchpost) | **POST** /api/v2/projects/{id}/attributes/templates/search | Search for custom attributes templates |
*ProjectsApi* | [**apiV2ProjectsIdAttributesTemplatesTemplateIdDelete**](Apis/ProjectsApi.md#apiv2projectsidattributestemplatestemplateiddelete) | **DELETE** /api/v2/projects/{id}/attributes/templates/{templateId} | Delete CustomAttributeTemplate from Project |
*ProjectsApi* | [**apiV2ProjectsIdAttributesTemplatesTemplateIdPost**](Apis/ProjectsApi.md#apiv2projectsidattributestemplatestemplateidpost) | **POST** /api/v2/projects/{id}/attributes/templates/{templateId} | Add CustomAttributeTemplate to Project |
*ProjectsApi* | [**apiV2ProjectsIdFailureClassesGet**](Apis/ProjectsApi.md#apiv2projectsidfailureclassesget) | **GET** /api/v2/projects/{id}/failureClasses | Get Project FailureClasses |
*ProjectsApi* | [**apiV2ProjectsIdFavoritePut**](Apis/ProjectsApi.md#apiv2projectsidfavoriteput) | **PUT** /api/v2/projects/{id}/favorite | Mark Project as favorite |
*ProjectsApi* | [**apiV2ProjectsIdFiltersGet**](Apis/ProjectsApi.md#apiv2projectsidfiltersget) | **GET** /api/v2/projects/{id}/filters | Get Project filters |
*ProjectsApi* | [**apiV2ProjectsIdPatch**](Apis/ProjectsApi.md#apiv2projectsidpatch) | **PATCH** /api/v2/projects/{id} | Patch project |
*ProjectsApi* | [**apiV2ProjectsIdTestPlansAnalyticsGet**](Apis/ProjectsApi.md#apiv2projectsidtestplansanalyticsget) | **GET** /api/v2/projects/{id}/testPlans/analytics | Get TestPlans analytics |
*ProjectsApi* | [**apiV2ProjectsIdTestPlansDeleteBulkPost**](Apis/ProjectsApi.md#apiv2projectsidtestplansdeletebulkpost) | **POST** /api/v2/projects/{id}/testPlans/delete/bulk | Delete multiple test plans |
*ProjectsApi* | [**apiV2ProjectsIdTestPlansNameExistsGet**](Apis/ProjectsApi.md#apiv2projectsidtestplansnameexistsget) | **GET** /api/v2/projects/{id}/testPlans/{name}/exists | Checks if TestPlan exists with the specified name exists for the project |
*ProjectsApi* | [**apiV2ProjectsIdTestPlansPurgeBulkPost**](Apis/ProjectsApi.md#apiv2projectsidtestplanspurgebulkpost) | **POST** /api/v2/projects/{id}/testPlans/purge/bulk | Permanently delete multiple archived test plans |
*ProjectsApi* | [**apiV2ProjectsIdTestPlansRestoreBulkPost**](Apis/ProjectsApi.md#apiv2projectsidtestplansrestorebulkpost) | **POST** /api/v2/projects/{id}/testPlans/restore/bulk | Restore multiple test plans |
*ProjectsApi* | [**apiV2ProjectsIdTestPlansSearchPost**](Apis/ProjectsApi.md#apiv2projectsidtestplanssearchpost) | **POST** /api/v2/projects/{id}/testPlans/search | Get Project TestPlans with analytics |
*ProjectsApi* | [**apiV2ProjectsIdTestRunsActiveGet**](Apis/ProjectsApi.md#apiv2projectsidtestrunsactiveget) | **GET** /api/v2/projects/{id}/testRuns/active | Get active Project TestRuns |
*ProjectsApi* | [**apiV2ProjectsIdTestRunsFullGet**](Apis/ProjectsApi.md#apiv2projectsidtestrunsfullget) | **GET** /api/v2/projects/{id}/testRuns/full | Get Project TestRuns full models |
*ProjectsApi* | [**apiV2ProjectsIdWorkItemsSearchIdPost**](Apis/ProjectsApi.md#apiv2projectsidworkitemssearchidpost) | **POST** /api/v2/projects/{id}/workItems/search/id | Search for work items and extract IDs only |
*ProjectsApi* | [**apiV2ProjectsIdWorkItemsSearchPost**](Apis/ProjectsApi.md#apiv2projectsidworkitemssearchpost) | **POST** /api/v2/projects/{id}/workItems/search | Search for work items |
*ProjectsApi* | [**apiV2ProjectsIdWorkItemsTagsGet**](Apis/ProjectsApi.md#apiv2projectsidworkitemstagsget) | **GET** /api/v2/projects/{id}/workItems/tags | Get WorkItems Tags |
*ProjectsApi* | [**apiV2ProjectsNameNameExistsGet**](Apis/ProjectsApi.md#apiv2projectsnamenameexistsget) | **GET** /api/v2/projects/name/{name}/exists |  |
*ProjectsApi* | [**apiV2ProjectsSearchPost**](Apis/ProjectsApi.md#apiv2projectssearchpost) | **POST** /api/v2/projects/search | Search for projects |
*ProjectsApi* | [**backgroundImportProject**](Apis/ProjectsApi.md#backgroundimportproject) | **POST** /api/v2/projects/import/json | Import project from JSON file in background job |
*ProjectsApi* | [**backgroundImportToExistingProject**](Apis/ProjectsApi.md#backgroundimporttoexistingproject) | **POST** /api/v2/projects/{id}/import/json | Import project from JSON file into existing project in background job |
*ProjectsApi* | [**backgroundImportZipProject**](Apis/ProjectsApi.md#backgroundimportzipproject) | **POST** /api/v2/projects/import/zip | Import project from Zip file in background job |
*ProjectsApi* | [**backgroundImportZipToExistingProject**](Apis/ProjectsApi.md#backgroundimportziptoexistingproject) | **POST** /api/v2/projects/{id}/import/zip | Import project from Zip file into existing project in background job |
*ProjectsApi* | [**createCustomAttributeTestPlanProjectRelations**](Apis/ProjectsApi.md#createcustomattributetestplanprojectrelations) | **POST** /api/v2/projects/{id}/testPlans/attributes | Add attributes to project's test plans |
*ProjectsApi* | [**createProject**](Apis/ProjectsApi.md#createproject) | **POST** /api/v2/projects | Create project |
*ProjectsApi* | [**createProjectsAttribute**](Apis/ProjectsApi.md#createprojectsattribute) | **POST** /api/v2/projects/{id}/attributes | Create project attribute |
*ProjectsApi* | [**deleteCustomAttributeTestPlanProjectRelations**](Apis/ProjectsApi.md#deletecustomattributetestplanprojectrelations) | **DELETE** /api/v2/projects/{id}/testPlans/attribute/{attributeId} | Delete attribute from project's test plans |
*ProjectsApi* | [**deleteProject**](Apis/ProjectsApi.md#deleteproject) | **DELETE** /api/v2/projects/{id} | Delete project |
*ProjectsApi* | [**deleteProjectAutoTests**](Apis/ProjectsApi.md#deleteprojectautotests) | **DELETE** /api/v2/projects/{id}/autoTests | Delete project |
*ProjectsApi* | [**deleteProjectsAttribute**](Apis/ProjectsApi.md#deleteprojectsattribute) | **DELETE** /api/v2/projects/{id}/attributes/{attributeId} | Delete project attribute |
*ProjectsApi* | [**export**](Apis/ProjectsApi.md#export) | **POST** /api/v2/projects/{id}/export | Export project as JSON file |
*ProjectsApi* | [**exportProjectJson**](Apis/ProjectsApi.md#exportprojectjson) | **POST** /api/v2/projects/{id}/export/json | Export project as JSON file in background job |
*ProjectsApi* | [**exportProjectWithTestPlansJson**](Apis/ProjectsApi.md#exportprojectwithtestplansjson) | **POST** /api/v2/projects/{id}/export/testPlans/json | Export project as JSON file with test plans in background job |
*ProjectsApi* | [**exportProjectWithTestPlansZip**](Apis/ProjectsApi.md#exportprojectwithtestplanszip) | **POST** /api/v2/projects/{id}/export/testPlans/zip | Export project as Zip file with test plans in background job |
*ProjectsApi* | [**exportProjectZip**](Apis/ProjectsApi.md#exportprojectzip) | **POST** /api/v2/projects/{id}/export/zip | Export project as Zip file in background job |
*ProjectsApi* | [**exportWithTestPlansAndConfigurations**](Apis/ProjectsApi.md#exportwithtestplansandconfigurations) | **POST** /api/v2/projects/{id}/export-by-testPlans | Export project with test plans, test suites and test points as JSON file |
*ProjectsApi* | [**getAllProjects**](Apis/ProjectsApi.md#getallprojects) | **GET** /api/v2/projects | Get all projects |
*ProjectsApi* | [**getAttributeByProjectId**](Apis/ProjectsApi.md#getattributebyprojectid) | **GET** /api/v2/projects/{id}/attributes/{attributeId} | Get project attribute |
*ProjectsApi* | [**getAttributesByProjectId**](Apis/ProjectsApi.md#getattributesbyprojectid) | **GET** /api/v2/projects/{id}/attributes | Get project attributes |
*ProjectsApi* | [**getAutoTestsNamespaces**](Apis/ProjectsApi.md#getautotestsnamespaces) | **GET** /api/v2/projects/{id}/autoTestsNamespaces | Get namespaces of autotests in project |
*ProjectsApi* | [**getConfigurationsByProjectId**](Apis/ProjectsApi.md#getconfigurationsbyprojectid) | **GET** /api/v2/projects/{id}/configurations | Get project configurations |
*ProjectsApi* | [**getCustomAttributeTestPlanProjectRelations**](Apis/ProjectsApi.md#getcustomattributetestplanprojectrelations) | **GET** /api/v2/projects/{id}/testPlans/attributes | Get project's test plan attributes |
*ProjectsApi* | [**getProjectById**](Apis/ProjectsApi.md#getprojectbyid) | **GET** /api/v2/projects/{id} | Get project by ID |
*ProjectsApi* | [**getSectionsByProjectId**](Apis/ProjectsApi.md#getsectionsbyprojectid) | **GET** /api/v2/projects/{id}/sections | Get project sections |
*ProjectsApi* | [**getTestPlansByProjectId**](Apis/ProjectsApi.md#gettestplansbyprojectid) | **GET** /api/v2/projects/{id}/testPlans | Get project test plans |
*ProjectsApi* | [**getTestRunsByProjectId**](Apis/ProjectsApi.md#gettestrunsbyprojectid) | **GET** /api/v2/projects/{id}/testRuns | Get project test runs |
*ProjectsApi* | [**getWorkItemsByProjectId**](Apis/ProjectsApi.md#getworkitemsbyprojectid) | **GET** /api/v2/projects/{id}/workItems | Get project work items |
*ProjectsApi* | [**import**](Apis/ProjectsApi.md#import) | **POST** /api/v2/projects/import | Import project from JSON file |
*ProjectsApi* | [**importToExistingProject**](Apis/ProjectsApi.md#importtoexistingproject) | **POST** /api/v2/projects/{id}/import | Import project from JSON file into existing project |
*ProjectsApi* | [**restoreProject**](Apis/ProjectsApi.md#restoreproject) | **POST** /api/v2/projects/{id}/restore | Restore project |
*ProjectsApi* | [**searchAttributesInProject**](Apis/ProjectsApi.md#searchattributesinproject) | **POST** /api/v2/projects/{id}/attributes/search | Search for attributes used in the project |
*ProjectsApi* | [**searchTestPlanAttributesInProject**](Apis/ProjectsApi.md#searchtestplanattributesinproject) | **POST** /api/v2/projects/{id}/testPlans/attributes/search | Search for attributes used in the project test plans |
*ProjectsApi* | [**updateCustomAttributeTestPlanProjectRelations**](Apis/ProjectsApi.md#updatecustomattributetestplanprojectrelations) | **PUT** /api/v2/projects/{id}/testPlans/attribute | Update attribute of project's test plans |
*ProjectsApi* | [**updateProject**](Apis/ProjectsApi.md#updateproject) | **PUT** /api/v2/projects | Update project |
*ProjectsApi* | [**updateProjectsAttribute**](Apis/ProjectsApi.md#updateprojectsattribute) | **PUT** /api/v2/projects/{id}/attributes | Edit attribute of the project |
| *SectionsApi* | [**apiV2SectionsIdPatch**](Apis/SectionsApi.md#apiv2sectionsidpatch) | **PATCH** /api/v2/sections/{id} | Patch section |
*SectionsApi* | [**createSection**](Apis/SectionsApi.md#createsection) | **POST** /api/v2/sections | Create section |
*SectionsApi* | [**deleteSection**](Apis/SectionsApi.md#deletesection) | **DELETE** /api/v2/sections/{id} | Delete section |
*SectionsApi* | [**getSectionById**](Apis/SectionsApi.md#getsectionbyid) | **GET** /api/v2/sections/{id} | Get section |
*SectionsApi* | [**getWorkItemsBySectionId**](Apis/SectionsApi.md#getworkitemsbysectionid) | **GET** /api/v2/sections/{id}/workItems | Get section work items |
*SectionsApi* | [**move**](Apis/SectionsApi.md#move) | **POST** /api/v2/sections/move | Move section with all work items into another section |
*SectionsApi* | [**rename**](Apis/SectionsApi.md#rename) | **POST** /api/v2/sections/rename | Rename section |
*SectionsApi* | [**updateSection**](Apis/SectionsApi.md#updatesection) | **PUT** /api/v2/sections | Update section |
| *TagsApi* | [**apiV2TagsGet**](Apis/TagsApi.md#apiv2tagsget) | **GET** /api/v2/tags | Get all Tags |
*TagsApi* | [**apiV2TagsTestPlansTagsGet**](Apis/TagsApi.md#apiv2tagstestplanstagsget) | **GET** /api/v2/tags/testPlansTags | Get all Tags that are used in TestPlans |
| *TestPlansApi* | [**addTestPointsWithSections**](Apis/TestPlansApi.md#addtestpointswithsections) | **POST** /api/v2/testPlans/{id}/test-points/withSections | Add test-points to TestPlan with sections |
*TestPlansApi* | [**addWorkItemsWithSections**](Apis/TestPlansApi.md#addworkitemswithsections) | **POST** /api/v2/testPlans/{id}/workItems/withSections | Add WorkItems to TestPlan with Sections as TestSuites |
*TestPlansApi* | [**apiV2TestPlansIdAnalyticsGet**](Apis/TestPlansApi.md#apiv2testplansidanalyticsget) | **GET** /api/v2/testPlans/{id}/analytics | Get analytics by TestPlan |
*TestPlansApi* | [**apiV2TestPlansIdAutobalancePost**](Apis/TestPlansApi.md#apiv2testplansidautobalancepost) | **POST** /api/v2/testPlans/{id}/autobalance | Distribute test points between the users |
*TestPlansApi* | [**apiV2TestPlansIdConfigurationsGet**](Apis/TestPlansApi.md#apiv2testplansidconfigurationsget) | **GET** /api/v2/testPlans/{id}/configurations | Get TestPlan configurations |
*TestPlansApi* | [**apiV2TestPlansIdExportTestPointsXlsxPost**](Apis/TestPlansApi.md#apiv2testplansidexporttestpointsxlsxpost) | **POST** /api/v2/testPlans/{id}/export/testPoints/xlsx | Export TestPoints from TestPlan in xls format |
*TestPlansApi* | [**apiV2TestPlansIdExportTestResultHistoryXlsxPost**](Apis/TestPlansApi.md#apiv2testplansidexporttestresulthistoryxlsxpost) | **POST** /api/v2/testPlans/{id}/export/testResultHistory/xlsx | Export TestResults history from TestPlan in xls format |
*TestPlansApi* | [**apiV2TestPlansIdHistoryGet**](Apis/TestPlansApi.md#apiv2testplansidhistoryget) | **GET** /api/v2/testPlans/{id}/history | Get TestPlan history |
*TestPlansApi* | [**apiV2TestPlansIdLinksGet**](Apis/TestPlansApi.md#apiv2testplansidlinksget) | **GET** /api/v2/testPlans/{id}/links | Get Links of TestPlan |
*TestPlansApi* | [**apiV2TestPlansIdPatch**](Apis/TestPlansApi.md#apiv2testplansidpatch) | **PATCH** /api/v2/testPlans/{id} | Patch test plan |
*TestPlansApi* | [**apiV2TestPlansIdTestPointsLastResultsGet**](Apis/TestPlansApi.md#apiv2testplansidtestpointslastresultsget) | **GET** /api/v2/testPlans/{id}/testPoints/lastResults | Get TestPoints with last result from TestPlan |
*TestPlansApi* | [**apiV2TestPlansIdTestPointsResetPost**](Apis/TestPlansApi.md#apiv2testplansidtestpointsresetpost) | **POST** /api/v2/testPlans/{id}/testPoints/reset | Reset TestPoints status of TestPlan |
*TestPlansApi* | [**apiV2TestPlansIdTestPointsTesterDelete**](Apis/TestPlansApi.md#apiv2testplansidtestpointstesterdelete) | **DELETE** /api/v2/testPlans/{id}/testPoints/tester | Unassign users from multiple test points |
*TestPlansApi* | [**apiV2TestPlansIdTestPointsTesterUserIdPost**](Apis/TestPlansApi.md#apiv2testplansidtestpointstesteruseridpost) | **POST** /api/v2/testPlans/{id}/testPoints/tester/{userId} | Assign user as a tester to multiple test points |
*TestPlansApi* | [**apiV2TestPlansIdTestRunsGet**](Apis/TestPlansApi.md#apiv2testplansidtestrunsget) | **GET** /api/v2/testPlans/{id}/testRuns | Get TestRuns of TestPlan |
*TestPlansApi* | [**apiV2TestPlansIdTestRunsSearchPost**](Apis/TestPlansApi.md#apiv2testplansidtestrunssearchpost) | **POST** /api/v2/testPlans/{id}/testRuns/search | Search TestRuns of TestPlan |
*TestPlansApi* | [**apiV2TestPlansIdTestRunsTestResultsLastModifiedModifiedDateGet**](Apis/TestPlansApi.md#apiv2testplansidtestrunstestresultslastmodifiedmodifieddateget) | **GET** /api/v2/testPlans/{id}/testRuns/testResults/lastModified/modifiedDate | Get last modification date of test plan's test results |
*TestPlansApi* | [**apiV2TestPlansIdUnlockRequestPost**](Apis/TestPlansApi.md#apiv2testplansidunlockrequestpost) | **POST** /api/v2/testPlans/{id}/unlock/request | Send unlock TestPlan notification |
*TestPlansApi* | [**apiV2TestPlansShortsPost**](Apis/TestPlansApi.md#apiv2testplansshortspost) | **POST** /api/v2/testPlans/shorts | Get TestPlans short models by Project identifiers |
*TestPlansApi* | [**clone**](Apis/TestPlansApi.md#clone) | **POST** /api/v2/testPlans/{id}/clone | Clone TestPlan |
*TestPlansApi* | [**complete**](Apis/TestPlansApi.md#complete) | **POST** /api/v2/testPlans/{id}/complete | Complete TestPlan |
*TestPlansApi* | [**createTestPlan**](Apis/TestPlansApi.md#createtestplan) | **POST** /api/v2/testPlans | Create TestPlan |
*TestPlansApi* | [**deleteTestPlan**](Apis/TestPlansApi.md#deletetestplan) | **DELETE** /api/v2/testPlans/{id} | Delete TestPlan |
*TestPlansApi* | [**getTestPlanById**](Apis/TestPlansApi.md#gettestplanbyid) | **GET** /api/v2/testPlans/{id} | Get TestPlan by Id |
*TestPlansApi* | [**getTestSuitesById**](Apis/TestPlansApi.md#gettestsuitesbyid) | **GET** /api/v2/testPlans/{id}/testSuites | Get TestSuites Tree By Id |
*TestPlansApi* | [**pause**](Apis/TestPlansApi.md#pause) | **POST** /api/v2/testPlans/{id}/pause | Pause TestPlan |
*TestPlansApi* | [**purgeTestPlan**](Apis/TestPlansApi.md#purgetestplan) | **POST** /api/v2/testPlans/{id}/purge | Permanently delete test plan from archive |
*TestPlansApi* | [**restoreTestPlan**](Apis/TestPlansApi.md#restoretestplan) | **POST** /api/v2/testPlans/{id}/restore | Restore TestPlan |
*TestPlansApi* | [**start**](Apis/TestPlansApi.md#start) | **POST** /api/v2/testPlans/{id}/start | Start TestPlan |
*TestPlansApi* | [**updateTestPlan**](Apis/TestPlansApi.md#updatetestplan) | **PUT** /api/v2/testPlans | Update TestPlan |
| *TestPointsApi* | [**apiV2TestPointsIdTestRunsGet**](Apis/TestPointsApi.md#apiv2testpointsidtestrunsget) | **GET** /api/v2/testPoints/{id}/testRuns | Get all test runs which use test point |
*TestPointsApi* | [**apiV2TestPointsIdWorkItemGet**](Apis/TestPointsApi.md#apiv2testpointsidworkitemget) | **GET** /api/v2/testPoints/{id}/workItem | Get work item represented by test point |
*TestPointsApi* | [**apiV2TestPointsSearchIdPost**](Apis/TestPointsApi.md#apiv2testpointssearchidpost) | **POST** /api/v2/testPoints/search/id | Search for test points and extract IDs only |
*TestPointsApi* | [**apiV2TestPointsSearchPost**](Apis/TestPointsApi.md#apiv2testpointssearchpost) | **POST** /api/v2/testPoints/search | Search for test points |
| *TestResultsApi* | [**apiV2TestResultsIdAggregatedGet**](Apis/TestResultsApi.md#apiv2testresultsidaggregatedget) | **GET** /api/v2/testResults/{id}/aggregated | Get test result by ID aggregated with previous results |
*TestResultsApi* | [**apiV2TestResultsIdAttachmentsAttachmentIdPut**](Apis/TestResultsApi.md#apiv2testresultsidattachmentsattachmentidput) | **PUT** /api/v2/testResults/{id}/attachments/{attachmentId} | Attach file to the test result |
*TestResultsApi* | [**apiV2TestResultsIdAttachmentsInfoGet**](Apis/TestResultsApi.md#apiv2testresultsidattachmentsinfoget) | **GET** /api/v2/testResults/{id}/attachments/info | Get test result attachments meta-information |
*TestResultsApi* | [**apiV2TestResultsIdGet**](Apis/TestResultsApi.md#apiv2testresultsidget) | **GET** /api/v2/testResults/{id} | Get test result by ID |
*TestResultsApi* | [**apiV2TestResultsIdPut**](Apis/TestResultsApi.md#apiv2testresultsidput) | **PUT** /api/v2/testResults/{id} | Edit test result by ID |
*TestResultsApi* | [**apiV2TestResultsSearchPost**](Apis/TestResultsApi.md#apiv2testresultssearchpost) | **POST** /api/v2/testResults/search | Search for test results |
*TestResultsApi* | [**apiV2TestResultsStatisticsFilterPost**](Apis/TestResultsApi.md#apiv2testresultsstatisticsfilterpost) | **POST** /api/v2/testResults/statistics/filter | Search for test results and extract statistics |
*TestResultsApi* | [**createAttachment**](Apis/TestResultsApi.md#createattachment) | **POST** /api/v2/testResults/{id}/attachments | Upload and link attachment to TestResult |
*TestResultsApi* | [**deleteAttachment**](Apis/TestResultsApi.md#deleteattachment) | **DELETE** /api/v2/testResults/{id}/attachments/{attachmentId} | Remove attachment and unlink from TestResult |
*TestResultsApi* | [**downloadAttachment**](Apis/TestResultsApi.md#downloadattachment) | **GET** /api/v2/testResults/{id}/attachments/{attachmentId} | Get attachment of TestResult |
*TestResultsApi* | [**getAttachment**](Apis/TestResultsApi.md#getattachment) | **GET** /api/v2/testResults/{id}/attachments/{attachmentId}/info | Get Metadata of TestResult's attachment |
*TestResultsApi* | [**getAttachments**](Apis/TestResultsApi.md#getattachments) | **GET** /api/v2/testResults/{id}/attachments | Get all attachments of TestResult |
| *TestRunsApi* | [**apiV2TestRunsIdStatisticsFilterPost**](Apis/TestRunsApi.md#apiv2testrunsidstatisticsfilterpost) | **POST** /api/v2/testRuns/{id}/statistics/filter | Search for the test run test results and build statistics |
*TestRunsApi* | [**apiV2TestRunsIdTestPointsResultsGet**](Apis/TestRunsApi.md#apiv2testrunsidtestpointsresultsget) | **GET** /api/v2/testRuns/{id}/testPoints/results | Get test results from the test run grouped by test points |
*TestRunsApi* | [**apiV2TestRunsIdTestResultsBulkPut**](Apis/TestRunsApi.md#apiv2testrunsidtestresultsbulkput) | **PUT** /api/v2/testRuns/{id}/testResults/bulk | Partial edit of multiple test results in the test run |
*TestRunsApi* | [**apiV2TestRunsIdTestResultsLastModifiedModificationDateGet**](Apis/TestRunsApi.md#apiv2testrunsidtestresultslastmodifiedmodificationdateget) | **GET** /api/v2/testRuns/{id}/testResults/lastModified/modificationDate | Get modification date of last test result of the test run |
*TestRunsApi* | [**apiV2TestRunsSearchPost**](Apis/TestRunsApi.md#apiv2testrunssearchpost) | **POST** /api/v2/testRuns/search | Search for test runs |
*TestRunsApi* | [**completeTestRun**](Apis/TestRunsApi.md#completetestrun) | **POST** /api/v2/testRuns/{id}/complete | Complete TestRun |
*TestRunsApi* | [**createAndFillByAutoTests**](Apis/TestRunsApi.md#createandfillbyautotests) | **POST** /api/v2/testRuns/byAutoTests | Create test runs based on autotests and configurations |
*TestRunsApi* | [**createAndFillByConfigurations**](Apis/TestRunsApi.md#createandfillbyconfigurations) | **POST** /api/v2/testRuns/byConfigurations | Create test runs picking the needed test points |
*TestRunsApi* | [**createAndFillByWorkItems**](Apis/TestRunsApi.md#createandfillbyworkitems) | **POST** /api/v2/testRuns/byWorkItems | Create test run based on configurations and work items |
*TestRunsApi* | [**createEmpty**](Apis/TestRunsApi.md#createempty) | **POST** /api/v2/testRuns | Create empty TestRun |
*TestRunsApi* | [**getTestRunById**](Apis/TestRunsApi.md#gettestrunbyid) | **GET** /api/v2/testRuns/{id} | Get TestRun by Id |
*TestRunsApi* | [**setAutoTestResultsForTestRun**](Apis/TestRunsApi.md#setautotestresultsfortestrun) | **POST** /api/v2/testRuns/{id}/testResults | Send test results to the test runs in the system |
*TestRunsApi* | [**startTestRun**](Apis/TestRunsApi.md#starttestrun) | **POST** /api/v2/testRuns/{id}/start | Start TestRun |
*TestRunsApi* | [**stopTestRun**](Apis/TestRunsApi.md#stoptestrun) | **POST** /api/v2/testRuns/{id}/stop | Stop TestRun |
*TestRunsApi* | [**updateEmpty**](Apis/TestRunsApi.md#updateempty) | **PUT** /api/v2/testRuns | Update empty TestRun |
| *TestSuitesApi* | [**addTestPointsToTestSuite**](Apis/TestSuitesApi.md#addtestpointstotestsuite) | **POST** /api/v2/testSuites/{id}/test-points | Add test-points to test suite |
*TestSuitesApi* | [**apiV2TestSuitesIdPatch**](Apis/TestSuitesApi.md#apiv2testsuitesidpatch) | **PATCH** /api/v2/testSuites/{id} | Patch test suite |
*TestSuitesApi* | [**apiV2TestSuitesIdRefreshPost**](Apis/TestSuitesApi.md#apiv2testsuitesidrefreshpost) | **POST** /api/v2/testSuites/{id}/refresh | Refresh test suite. Only dynamic test suites are supported by this method |
*TestSuitesApi* | [**apiV2TestSuitesIdWorkItemsPost**](Apis/TestSuitesApi.md#apiv2testsuitesidworkitemspost) | **POST** /api/v2/testSuites/{id}/workItems | Set work items for test suite |
*TestSuitesApi* | [**apiV2TestSuitesPost**](Apis/TestSuitesApi.md#apiv2testsuitespost) | **POST** /api/v2/testSuites | Create test suite |
*TestSuitesApi* | [**apiV2TestSuitesPut**](Apis/TestSuitesApi.md#apiv2testsuitesput) | **PUT** /api/v2/testSuites | Edit test suite |
*TestSuitesApi* | [**deleteTestSuite**](Apis/TestSuitesApi.md#deletetestsuite) | **DELETE** /api/v2/testSuites/{id} | Delete TestSuite |
*TestSuitesApi* | [**getConfigurationsByTestSuiteId**](Apis/TestSuitesApi.md#getconfigurationsbytestsuiteid) | **GET** /api/v2/testSuites/{id}/configurations | Get Configurations By Id |
*TestSuitesApi* | [**getTestPointsById**](Apis/TestSuitesApi.md#gettestpointsbyid) | **GET** /api/v2/testSuites/{id}/testPoints | Get TestPoints By Id |
*TestSuitesApi* | [**getTestResultsById**](Apis/TestSuitesApi.md#gettestresultsbyid) | **GET** /api/v2/testSuites/{id}/testResults | Get TestResults By Id |
*TestSuitesApi* | [**getTestSuiteById**](Apis/TestSuitesApi.md#gettestsuitebyid) | **GET** /api/v2/testSuites/{id} | Get TestSuite by Id |
*TestSuitesApi* | [**getWorkItemsById**](Apis/TestSuitesApi.md#getworkitemsbyid) | **GET** /api/v2/testSuites/{id}/workItems |  |
*TestSuitesApi* | [**searchWorkItems**](Apis/TestSuitesApi.md#searchworkitems) | **POST** /api/v2/testSuites/{id}/workItems/search | Search WorkItems |
*TestSuitesApi* | [**setConfigurationsByTestSuiteId**](Apis/TestSuitesApi.md#setconfigurationsbytestsuiteid) | **POST** /api/v2/testSuites/{id}/configurations | Set Configurations By TestSuite Id |
| *WebhooksApi* | [**apiV2WebhooksGet**](Apis/WebhooksApi.md#apiv2webhooksget) | **GET** /api/v2/webhooks | Get all webhooks |
*WebhooksApi* | [**apiV2WebhooksIdDelete**](Apis/WebhooksApi.md#apiv2webhooksiddelete) | **DELETE** /api/v2/webhooks/{id} | Delete webhook by ID |
*WebhooksApi* | [**apiV2WebhooksIdGet**](Apis/WebhooksApi.md#apiv2webhooksidget) | **GET** /api/v2/webhooks/{id} | Get webhook by ID |
*WebhooksApi* | [**apiV2WebhooksIdPut**](Apis/WebhooksApi.md#apiv2webhooksidput) | **PUT** /api/v2/webhooks/{id} | Edit webhook by ID |
*WebhooksApi* | [**apiV2WebhooksPost**](Apis/WebhooksApi.md#apiv2webhookspost) | **POST** /api/v2/webhooks | Create webhook |
*WebhooksApi* | [**apiV2WebhooksSearchPost**](Apis/WebhooksApi.md#apiv2webhookssearchpost) | **POST** /api/v2/webhooks/search | Search for webhooks |
*WebhooksApi* | [**apiV2WebhooksSpecialVariablesGet**](Apis/WebhooksApi.md#apiv2webhooksspecialvariablesget) | **GET** /api/v2/webhooks/specialVariables | Get special variables for webhook event type |
*WebhooksApi* | [**apiV2WebhooksTestPost**](Apis/WebhooksApi.md#apiv2webhookstestpost) | **POST** /api/v2/webhooks/test | Test webhook's url |
| *WebhooksLogsApi* | [**apiV2WebhooksLogsGet**](Apis/WebhooksLogsApi.md#apiv2webhookslogsget) | **GET** /api/v2/webhooks/logs | Get all webhook logs |
*WebhooksLogsApi* | [**apiV2WebhooksLogsIdDelete**](Apis/WebhooksLogsApi.md#apiv2webhookslogsiddelete) | **DELETE** /api/v2/webhooks/logs/{id} | Delete webhook log by ID |
*WebhooksLogsApi* | [**apiV2WebhooksLogsIdGet**](Apis/WebhooksLogsApi.md#apiv2webhookslogsidget) | **GET** /api/v2/webhooks/logs/{id} | Get webhook log by ID |
| *WorkItemsApi* | [**apiV2WorkItemsIdAttachmentsPost**](Apis/WorkItemsApi.md#apiv2workitemsidattachmentspost) | **POST** /api/v2/workItems/{id}/attachments | Upload and link attachment to WorkItem |
*WorkItemsApi* | [**apiV2WorkItemsIdCheckListTransformToTestCasePost**](Apis/WorkItemsApi.md#apiv2workitemsidchecklisttransformtotestcasepost) | **POST** /api/v2/workItems/{id}/checkList/transformTo/testCase | Transform CheckList to TestCase |
*WorkItemsApi* | [**apiV2WorkItemsIdHistoryGet**](Apis/WorkItemsApi.md#apiv2workitemsidhistoryget) | **GET** /api/v2/workItems/{id}/history | Get change history of WorkItem |
*WorkItemsApi* | [**apiV2WorkItemsIdLikeDelete**](Apis/WorkItemsApi.md#apiv2workitemsidlikedelete) | **DELETE** /api/v2/workItems/{id}/like | Delete like from WorkItem |
*WorkItemsApi* | [**apiV2WorkItemsIdLikePost**](Apis/WorkItemsApi.md#apiv2workitemsidlikepost) | **POST** /api/v2/workItems/{id}/like | Set like to WorkItem |
*WorkItemsApi* | [**apiV2WorkItemsIdLikesCountGet**](Apis/WorkItemsApi.md#apiv2workitemsidlikescountget) | **GET** /api/v2/workItems/{id}/likes/count | Get likes count of WorkItem |
*WorkItemsApi* | [**apiV2WorkItemsIdLikesGet**](Apis/WorkItemsApi.md#apiv2workitemsidlikesget) | **GET** /api/v2/workItems/{id}/likes | Get likes of WorkItem |
*WorkItemsApi* | [**apiV2WorkItemsIdTestResultsHistoryGet**](Apis/WorkItemsApi.md#apiv2workitemsidtestresultshistoryget) | **GET** /api/v2/workItems/{id}/testResults/history | Get test results history of WorkItem |
*WorkItemsApi* | [**apiV2WorkItemsIdVersionVersionIdActualPost**](Apis/WorkItemsApi.md#apiv2workitemsidversionversionidactualpost) | **POST** /api/v2/workItems/{id}/version/{versionId}/actual | Set WorkItem as actual |
*WorkItemsApi* | [**apiV2WorkItemsMovePost**](Apis/WorkItemsApi.md#apiv2workitemsmovepost) | **POST** /api/v2/workItems/move | Move WorkItem to another section |
*WorkItemsApi* | [**apiV2WorkItemsSearchPost**](Apis/WorkItemsApi.md#apiv2workitemssearchpost) | **POST** /api/v2/workItems/search | Search for work items |
*WorkItemsApi* | [**apiV2WorkItemsSharedStepIdReferencesSectionsPost**](Apis/WorkItemsApi.md#apiv2workitemssharedstepidreferencessectionspost) | **POST** /api/v2/workItems/{sharedStepId}/references/sections | Get SharedStep references in sections |
*WorkItemsApi* | [**apiV2WorkItemsSharedStepIdReferencesWorkItemsPost**](Apis/WorkItemsApi.md#apiv2workitemssharedstepidreferencesworkitemspost) | **POST** /api/v2/workItems/{sharedStepId}/references/workItems | Get SharedStep references in workitems |
*WorkItemsApi* | [**apiV2WorkItemsSharedStepsSharedStepIdReferencesGet**](Apis/WorkItemsApi.md#apiv2workitemssharedstepssharedstepidreferencesget) | **GET** /api/v2/workItems/sharedSteps/{sharedStepId}/references | Get SharedStep references |
*WorkItemsApi* | [**createWorkItem**](Apis/WorkItemsApi.md#createworkitem) | **POST** /api/v2/workItems | Create Test Case, Checklist or Shared Step |
*WorkItemsApi* | [**deleteAllWorkItemsFromAutoTest**](Apis/WorkItemsApi.md#deleteallworkitemsfromautotest) | **DELETE** /api/v2/workItems/{id}/autoTests | Delete all links AutoTests from WorkItem by Id or GlobalId |
*WorkItemsApi* | [**deleteWorkItem**](Apis/WorkItemsApi.md#deleteworkitem) | **DELETE** /api/v2/workItems/{id} | Delete Test Case, Checklist or Shared Step by Id or GlobalId |
*WorkItemsApi* | [**getAutoTestsForWorkItem**](Apis/WorkItemsApi.md#getautotestsforworkitem) | **GET** /api/v2/workItems/{id}/autoTests | Get all AutoTests linked to WorkItem by Id or GlobalId |
*WorkItemsApi* | [**getIterations**](Apis/WorkItemsApi.md#getiterations) | **GET** /api/v2/workItems/{id}/iterations | Get iterations by workitem Id or GlobalId |
*WorkItemsApi* | [**getWorkItemById**](Apis/WorkItemsApi.md#getworkitembyid) | **GET** /api/v2/workItems/{id} | Get Test Case, Checklist or Shared Step by Id or GlobalId |
*WorkItemsApi* | [**getWorkItemChronology**](Apis/WorkItemsApi.md#getworkitemchronology) | **GET** /api/v2/workItems/{id}/chronology | Get WorkItem chronology by Id or GlobalId |
*WorkItemsApi* | [**getWorkItemVersions**](Apis/WorkItemsApi.md#getworkitemversions) | **GET** /api/v2/workItems/{id}/versions | Get WorkItem versions |
*WorkItemsApi* | [**purgeWorkItem**](Apis/WorkItemsApi.md#purgeworkitem) | **POST** /api/v2/workItems/{id}/purge | Permanently delete test case, checklist or shared steps from archive |
*WorkItemsApi* | [**restoreWorkItem**](Apis/WorkItemsApi.md#restoreworkitem) | **POST** /api/v2/workItems/{id}/restore | Restore test case, checklist or shared steps from archive |
*WorkItemsApi* | [**updateWorkItem**](Apis/WorkItemsApi.md#updateworkitem) | **PUT** /api/v2/workItems | Update Test Case, Checklist or Shared Step |
| *WorkItemsCommentsApi* | [**apiV2WorkItemsCommentsCommentIdDelete**](Apis/WorkItemsCommentsApi.md#apiv2workitemscommentscommentiddelete) | **DELETE** /api/v2/workItems/comments/{commentId} | Delete WorkItem comment |
*WorkItemsCommentsApi* | [**apiV2WorkItemsCommentsPost**](Apis/WorkItemsCommentsApi.md#apiv2workitemscommentspost) | **POST** /api/v2/workItems/comments | Create WorkItem comment |
*WorkItemsCommentsApi* | [**apiV2WorkItemsCommentsPut**](Apis/WorkItemsCommentsApi.md#apiv2workitemscommentsput) | **PUT** /api/v2/workItems/comments | Update work item comment |
*WorkItemsCommentsApi* | [**apiV2WorkItemsIdCommentsGet**](Apis/WorkItemsCommentsApi.md#apiv2workitemsidcommentsget) | **GET** /api/v2/workItems/{id}/comments | Get work item comments |


<a name="documentation-for-models"></a>
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
