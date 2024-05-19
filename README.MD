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
| 4.4     | 3.3        |
| 4.5     | 4.1        |
| 4.6     | 4.2        |
| 5.0     | 5.0        |

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
| *AttachmentsApi* | [**apiV2AttachmentsIdDelete**](docs/AttachmentsApi.md#apiv2attachmentsiddelete) | **DELETE** /api/v2/attachments/{id} | Delete attachment file |
*AttachmentsApi* | [**apiV2AttachmentsIdGet**](docs/AttachmentsApi.md#apiv2attachmentsidget) | **GET** /api/v2/attachments/{id} | Download attachment file |
*AttachmentsApi* | [**apiV2AttachmentsOccupiedFileStorageSizeGet**](docs/AttachmentsApi.md#apiv2attachmentsoccupiedfilestoragesizeget) | **GET** /api/v2/attachments/occupiedFileStorageSize | Get size of attachments storage in bytes |
*AttachmentsApi* | [**apiV2AttachmentsPost**](docs/AttachmentsApi.md#apiv2attachmentspost) | **POST** /api/v2/attachments | Upload new attachment file |
| *AutoTestsApi* | [**apiV2AutoTestsFlakyBulkPost**](docs/AutoTestsApi.md#apiv2autotestsflakybulkpost) | **POST** /api/v2/autoTests/flaky/bulk | Set \"Flaky\" status for multiple autotests |
*AutoTestsApi* | [**apiV2AutoTestsIdPatch**](docs/AutoTestsApi.md#apiv2autotestsidpatch) | **PATCH** /api/v2/autoTests/{id} | Patch auto test |
*AutoTestsApi* | [**apiV2AutoTestsIdTestResultsSearchPost**](docs/AutoTestsApi.md#apiv2autotestsidtestresultssearchpost) | **POST** /api/v2/autoTests/{id}/testResults/search | Get test results history for autotest |
*AutoTestsApi* | [**apiV2AutoTestsIdWorkItemsChangedIdGet**](docs/AutoTestsApi.md#apiv2autotestsidworkitemschangedidget) | **GET** /api/v2/autoTests/{id}/workItems/changed/id | Get identifiers of changed linked work items |
*AutoTestsApi* | [**apiV2AutoTestsIdWorkItemsChangedWorkItemIdApprovePost**](docs/AutoTestsApi.md#apiv2autotestsidworkitemschangedworkitemidapprovepost) | **POST** /api/v2/autoTests/{id}/workItems/changed/{workItemId}/approve | Approve changes to work items linked to autotest |
*AutoTestsApi* | [**apiV2AutoTestsSearchPost**](docs/AutoTestsApi.md#apiv2autotestssearchpost) | **POST** /api/v2/autoTests/search | Search for autotests |
*AutoTestsApi* | [**createAutoTest**](docs/AutoTestsApi.md#createautotest) | **POST** /api/v2/autoTests | Create autotest |
*AutoTestsApi* | [**createMultiple**](docs/AutoTestsApi.md#createmultiple) | **POST** /api/v2/autoTests/bulk | Create multiple autotests |
*AutoTestsApi* | [**deleteAutoTest**](docs/AutoTestsApi.md#deleteautotest) | **DELETE** /api/v2/autoTests/{id} | Delete autotest |
*AutoTestsApi* | [**deleteAutoTestLinkFromWorkItem**](docs/AutoTestsApi.md#deleteautotestlinkfromworkitem) | **DELETE** /api/v2/autoTests/{id}/workItems | Unlink autotest from work item |
*AutoTestsApi* | [**getAllAutoTests**](docs/AutoTestsApi.md#getallautotests) | **GET** /api/v2/autoTests |  |
*AutoTestsApi* | [**getAutoTestAverageDuration**](docs/AutoTestsApi.md#getautotestaverageduration) | **GET** /api/v2/autoTests/{id}/averageDuration | Get average autotest duration |
*AutoTestsApi* | [**getAutoTestById**](docs/AutoTestsApi.md#getautotestbyid) | **GET** /api/v2/autoTests/{id} | Get autotest by internal or global ID |
*AutoTestsApi* | [**getAutoTestChronology**](docs/AutoTestsApi.md#getautotestchronology) | **GET** /api/v2/autoTests/{id}/chronology | Get autotest chronology |
*AutoTestsApi* | [**getTestRuns**](docs/AutoTestsApi.md#gettestruns) | **GET** /api/v2/autoTests/{id}/testRuns | Get completed tests runs for autotests |
*AutoTestsApi* | [**getWorkItemResults**](docs/AutoTestsApi.md#getworkitemresults) | **GET** /api/v2/autoTests/{id}/testResultHistory |  |
*AutoTestsApi* | [**getWorkItemsLinkedToAutoTest**](docs/AutoTestsApi.md#getworkitemslinkedtoautotest) | **GET** /api/v2/autoTests/{id}/workItems | Get work items linked to autotest |
*AutoTestsApi* | [**linkAutoTestToWorkItem**](docs/AutoTestsApi.md#linkautotesttoworkitem) | **POST** /api/v2/autoTests/{id}/workItems | Link autotest with work items |
*AutoTestsApi* | [**updateAutoTest**](docs/AutoTestsApi.md#updateautotest) | **PUT** /api/v2/autoTests | Update autotest |
*AutoTestsApi* | [**updateMultiple**](docs/AutoTestsApi.md#updatemultiple) | **PUT** /api/v2/autoTests/bulk | Update multiple autotests |
| *BackgroundJobsApi* | [**apiV2BackgroundJobsGet**](docs/BackgroundJobsApi.md#apiv2backgroundjobsget) | **GET** /api/v2/backgroundJobs |  |
*BackgroundJobsApi* | [**apiV2BackgroundJobsIdCancelPost**](docs/BackgroundJobsApi.md#apiv2backgroundjobsidcancelpost) | **POST** /api/v2/backgroundJobs/{id}/cancel | Cancel current user background job |
*BackgroundJobsApi* | [**apiV2BackgroundJobsIdGet**](docs/BackgroundJobsApi.md#apiv2backgroundjobsidget) | **GET** /api/v2/backgroundJobs/{id} | Get background job by ID |
*BackgroundJobsApi* | [**apiV2BackgroundJobsIdStatusGet**](docs/BackgroundJobsApi.md#apiv2backgroundjobsidstatusget) | **GET** /api/v2/backgroundJobs/{id}/status | Get background job status by job ID |
*BackgroundJobsApi* | [**apiV2BackgroundJobsSearchPost**](docs/BackgroundJobsApi.md#apiv2backgroundjobssearchpost) | **POST** /api/v2/backgroundJobs/search | Search for user background jobs |
| *ConfigurationsApi* | [**apiV2ConfigurationsCreateByParametersPost**](docs/ConfigurationsApi.md#apiv2configurationscreatebyparameterspost) | **POST** /api/v2/configurations/createByParameters | Create configurations by parameters |
*ConfigurationsApi* | [**apiV2ConfigurationsDeleteBulkPost**](docs/ConfigurationsApi.md#apiv2configurationsdeletebulkpost) | **POST** /api/v2/configurations/delete/bulk | Delete multiple configurations |
*ConfigurationsApi* | [**apiV2ConfigurationsIdDelete**](docs/ConfigurationsApi.md#apiv2configurationsiddelete) | **DELETE** /api/v2/configurations/{id} | Delete configuration |
*ConfigurationsApi* | [**apiV2ConfigurationsIdPatch**](docs/ConfigurationsApi.md#apiv2configurationsidpatch) | **PATCH** /api/v2/configurations/{id} | Patch configuration |
*ConfigurationsApi* | [**apiV2ConfigurationsIdPurgePost**](docs/ConfigurationsApi.md#apiv2configurationsidpurgepost) | **POST** /api/v2/configurations/{id}/purge | Permanently delete configuration from archive |
*ConfigurationsApi* | [**apiV2ConfigurationsIdRestorePost**](docs/ConfigurationsApi.md#apiv2configurationsidrestorepost) | **POST** /api/v2/configurations/{id}/restore | Restore configuration from the archive |
*ConfigurationsApi* | [**apiV2ConfigurationsPurgeBulkPost**](docs/ConfigurationsApi.md#apiv2configurationspurgebulkpost) | **POST** /api/v2/configurations/purge/bulk | Permanently delete multiple archived configurations |
*ConfigurationsApi* | [**apiV2ConfigurationsPut**](docs/ConfigurationsApi.md#apiv2configurationsput) | **PUT** /api/v2/configurations | Edit configuration |
*ConfigurationsApi* | [**apiV2ConfigurationsRestoreBulkPost**](docs/ConfigurationsApi.md#apiv2configurationsrestorebulkpost) | **POST** /api/v2/configurations/restore/bulk | Restore multiple configurations from the archive |
*ConfigurationsApi* | [**apiV2ConfigurationsSearchPost**](docs/ConfigurationsApi.md#apiv2configurationssearchpost) | **POST** /api/v2/configurations/search | Search for configurations |
*ConfigurationsApi* | [**createConfiguration**](docs/ConfigurationsApi.md#createconfiguration) | **POST** /api/v2/configurations | Create Configuration |
*ConfigurationsApi* | [**getConfigurationById**](docs/ConfigurationsApi.md#getconfigurationbyid) | **GET** /api/v2/configurations/{id} | Get configuration by internal or global ID |
| *CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesIdCustomAttributesExcludePost**](docs/CustomAttributeTemplatesApi.md#apiv2customattributestemplatesidcustomattributesexcludepost) | **POST** /api/v2/customAttributes/templates/{id}/customAttributes/exclude | Exclude CustomAttributes from CustomAttributeTemplate |
*CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesIdCustomAttributesIncludePost**](docs/CustomAttributeTemplatesApi.md#apiv2customattributestemplatesidcustomattributesincludepost) | **POST** /api/v2/customAttributes/templates/{id}/customAttributes/include | Include CustomAttributes to CustomAttributeTemplate |
*CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesIdDelete**](docs/CustomAttributeTemplatesApi.md#apiv2customattributestemplatesiddelete) | **DELETE** /api/v2/customAttributes/templates/{id} | Delete CustomAttributeTemplate |
*CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesIdGet**](docs/CustomAttributeTemplatesApi.md#apiv2customattributestemplatesidget) | **GET** /api/v2/customAttributes/templates/{id} | Get CustomAttributeTemplate by ID |
*CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesNameGet**](docs/CustomAttributeTemplatesApi.md#apiv2customattributestemplatesnameget) | **GET** /api/v2/customAttributes/templates/{name} | Get CustomAttributeTemplate by name |
*CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesPost**](docs/CustomAttributeTemplatesApi.md#apiv2customattributestemplatespost) | **POST** /api/v2/customAttributes/templates | Create CustomAttributeTemplate |
*CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesPut**](docs/CustomAttributeTemplatesApi.md#apiv2customattributestemplatesput) | **PUT** /api/v2/customAttributes/templates | Update custom attributes template |
*CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesSearchPost**](docs/CustomAttributeTemplatesApi.md#apiv2customattributestemplatessearchpost) | **POST** /api/v2/customAttributes/templates/search | Search CustomAttributeTemplates |
| *CustomAttributesApi* | [**apiV2CustomAttributesGlobalIdDelete**](docs/CustomAttributesApi.md#apiv2customattributesglobaliddelete) | **DELETE** /api/v2/customAttributes/global/{id} | Delete global attribute |
*CustomAttributesApi* | [**apiV2CustomAttributesGlobalIdPut**](docs/CustomAttributesApi.md#apiv2customattributesglobalidput) | **PUT** /api/v2/customAttributes/global/{id} | Edit global attribute |
*CustomAttributesApi* | [**apiV2CustomAttributesGlobalPost**](docs/CustomAttributesApi.md#apiv2customattributesglobalpost) | **POST** /api/v2/customAttributes/global | Create global attribute |
*CustomAttributesApi* | [**apiV2CustomAttributesIdGet**](docs/CustomAttributesApi.md#apiv2customattributesidget) | **GET** /api/v2/customAttributes/{id} | Get attribute |
*CustomAttributesApi* | [**apiV2CustomAttributesSearchPost**](docs/CustomAttributesApi.md#apiv2customattributessearchpost) | **POST** /api/v2/customAttributes/search | Search for attributes |
| *NotificationsApi* | [**apiV2NotificationsCountGet**](docs/NotificationsApi.md#apiv2notificationscountget) | **GET** /api/v2/notifications/count | Get unread Notifications total in last 7 days |
*NotificationsApi* | [**apiV2NotificationsGet**](docs/NotificationsApi.md#apiv2notificationsget) | **GET** /api/v2/notifications | Get all Notifications for current User |
*NotificationsApi* | [**apiV2NotificationsIdReadPost**](docs/NotificationsApi.md#apiv2notificationsidreadpost) | **POST** /api/v2/notifications/{id}/read | Set Notification as read |
*NotificationsApi* | [**apiV2NotificationsReadPost**](docs/NotificationsApi.md#apiv2notificationsreadpost) | **POST** /api/v2/notifications/read | Set all Notifications as read |
*NotificationsApi* | [**apiV2NotificationsSearchPost**](docs/NotificationsApi.md#apiv2notificationssearchpost) | **POST** /api/v2/notifications/search | Search Notifications for current User |
| *ParametersApi* | [**apiV2ParametersBulkPost**](docs/ParametersApi.md#apiv2parametersbulkpost) | **POST** /api/v2/parameters/bulk | Create multiple parameters |
*ParametersApi* | [**apiV2ParametersBulkPut**](docs/ParametersApi.md#apiv2parametersbulkput) | **PUT** /api/v2/parameters/bulk | Update multiple parameters |
*ParametersApi* | [**apiV2ParametersGroupsGet**](docs/ParametersApi.md#apiv2parametersgroupsget) | **GET** /api/v2/parameters/groups | Get parameters as group |
*ParametersApi* | [**apiV2ParametersKeyNameNameExistsGet**](docs/ParametersApi.md#apiv2parameterskeynamenameexistsget) | **GET** /api/v2/parameters/key/name/{name}/exists | Check existence parameter key in system |
*ParametersApi* | [**apiV2ParametersKeyValuesGet**](docs/ParametersApi.md#apiv2parameterskeyvaluesget) | **GET** /api/v2/parameters/{key}/values | Get all parameter key values |
*ParametersApi* | [**apiV2ParametersKeysGet**](docs/ParametersApi.md#apiv2parameterskeysget) | **GET** /api/v2/parameters/keys | Get all parameter keys |
*ParametersApi* | [**apiV2ParametersSearchGroupsPost**](docs/ParametersApi.md#apiv2parameterssearchgroupspost) | **POST** /api/v2/parameters/search/groups | Search for parameters as group |
*ParametersApi* | [**apiV2ParametersSearchPost**](docs/ParametersApi.md#apiv2parameterssearchpost) | **POST** /api/v2/parameters/search | Search for parameters |
*ParametersApi* | [**createParameter**](docs/ParametersApi.md#createparameter) | **POST** /api/v2/parameters | Create parameter |
*ParametersApi* | [**deleteByName**](docs/ParametersApi.md#deletebyname) | **DELETE** /api/v2/parameters/name/{name} | Delete parameter by name |
*ParametersApi* | [**deleteByParameterKeyId**](docs/ParametersApi.md#deletebyparameterkeyid) | **DELETE** /api/v2/parameters/keyId/{keyId} | Delete parameters by parameter key identifier |
*ParametersApi* | [**deleteParameter**](docs/ParametersApi.md#deleteparameter) | **DELETE** /api/v2/parameters/{id} | Delete parameter |
*ParametersApi* | [**getAllParameters**](docs/ParametersApi.md#getallparameters) | **GET** /api/v2/parameters | Get all parameters |
*ParametersApi* | [**getParameterById**](docs/ParametersApi.md#getparameterbyid) | **GET** /api/v2/parameters/{id} | Get parameter by ID |
*ParametersApi* | [**updateParameter**](docs/ParametersApi.md#updateparameter) | **PUT** /api/v2/parameters | Update parameter |
| *ProjectAttributeTemplatesApi* | [**apiV2ProjectsProjectIdAttributesTemplatesSearchPost**](docs/ProjectAttributeTemplatesApi.md#apiv2projectsprojectidattributestemplatessearchpost) | **POST** /api/v2/projects/{projectId}/attributes/templates/search | Search for custom attributes templates |
*ProjectAttributeTemplatesApi* | [**apiV2ProjectsProjectIdAttributesTemplatesTemplateIdDelete**](docs/ProjectAttributeTemplatesApi.md#apiv2projectsprojectidattributestemplatestemplateiddelete) | **DELETE** /api/v2/projects/{projectId}/attributes/templates/{templateId} | Delete CustomAttributeTemplate from Project |
*ProjectAttributeTemplatesApi* | [**apiV2ProjectsProjectIdAttributesTemplatesTemplateIdPost**](docs/ProjectAttributeTemplatesApi.md#apiv2projectsprojectidattributestemplatestemplateidpost) | **POST** /api/v2/projects/{projectId}/attributes/templates/{templateId} | Add CustomAttributeTemplate to Project |
| *ProjectAttributesApi* | [**createProjectsAttribute**](docs/ProjectAttributesApi.md#createprojectsattribute) | **POST** /api/v2/projects/{projectId}/attributes | Create project attribute |
*ProjectAttributesApi* | [**deleteProjectsAttribute**](docs/ProjectAttributesApi.md#deleteprojectsattribute) | **DELETE** /api/v2/projects/{projectId}/attributes/{attributeId} | Delete project attribute |
*ProjectAttributesApi* | [**getAttributeByProjectId**](docs/ProjectAttributesApi.md#getattributebyprojectid) | **GET** /api/v2/projects/{projectId}/attributes/{attributeId} | Get project attribute |
*ProjectAttributesApi* | [**getAttributesByProjectId**](docs/ProjectAttributesApi.md#getattributesbyprojectid) | **GET** /api/v2/projects/{projectId}/attributes | Get project attributes |
*ProjectAttributesApi* | [**searchAttributesInProject**](docs/ProjectAttributesApi.md#searchattributesinproject) | **POST** /api/v2/projects/{projectId}/attributes/search | Search for attributes used in the project |
*ProjectAttributesApi* | [**updateProjectsAttribute**](docs/ProjectAttributesApi.md#updateprojectsattribute) | **PUT** /api/v2/projects/{projectId}/attributes | Edit attribute of the project |
| *ProjectConfigurationsApi* | [**getConfigurationsByProjectId**](docs/ProjectConfigurationsApi.md#getconfigurationsbyprojectid) | **GET** /api/v2/projects/{projectId}/configurations | Get project configurations |
| *ProjectExportApi* | [**export**](docs/ProjectExportApi.md#export) | **POST** /api/v2/projects/{projectId}/export | Export project as JSON file |
*ProjectExportApi* | [**exportProjectJson**](docs/ProjectExportApi.md#exportprojectjson) | **POST** /api/v2/projects/{projectId}/export/json | Export project as JSON file in background job |
*ProjectExportApi* | [**exportProjectWithTestPlansJson**](docs/ProjectExportApi.md#exportprojectwithtestplansjson) | **POST** /api/v2/projects/{projectId}/export/testPlans/json | Export project as JSON file with test plans in background job |
*ProjectExportApi* | [**exportProjectWithTestPlansZip**](docs/ProjectExportApi.md#exportprojectwithtestplanszip) | **POST** /api/v2/projects/{projectId}/export/testPlans/zip | Export project as Zip file with test plans in background job |
*ProjectExportApi* | [**exportProjectZip**](docs/ProjectExportApi.md#exportprojectzip) | **POST** /api/v2/projects/{projectId}/export/zip | Export project as Zip file in background job |
| *ProjectImportApi* | [**backgroundImportToExistingProject**](docs/ProjectImportApi.md#backgroundimporttoexistingproject) | **POST** /api/v2/projects/{projectId}/import/json | Import project from JSON file into existing project in background job |
*ProjectImportApi* | [**backgroundImportZipToExistingProject**](docs/ProjectImportApi.md#backgroundimportziptoexistingproject) | **POST** /api/v2/projects/{projectId}/import/zip | Import project from Zip file into existing project in background job |
*ProjectImportApi* | [**importToExistingProject**](docs/ProjectImportApi.md#importtoexistingproject) | **POST** /api/v2/projects/{projectId}/import | Import project from JSON file into existing project |
| *ProjectSectionsApi* | [**getSectionsByProjectId**](docs/ProjectSectionsApi.md#getsectionsbyprojectid) | **GET** /api/v2/projects/{projectId}/sections | Get project sections |
| *ProjectTestPlanAttributesApi* | [**createCustomAttributeTestPlanProjectRelations**](docs/ProjectTestPlanAttributesApi.md#createcustomattributetestplanprojectrelations) | **POST** /api/v2/projects/{projectId}/testPlans/attributes | Add attributes to project's test plans |
*ProjectTestPlanAttributesApi* | [**deleteCustomAttributeTestPlanProjectRelations**](docs/ProjectTestPlanAttributesApi.md#deletecustomattributetestplanprojectrelations) | **DELETE** /api/v2/projects/{projectId}/testPlans/attributes/{attributeId} | Delete attribute from project's test plans |
*ProjectTestPlanAttributesApi* | [**getCustomAttributeTestPlanProjectRelations**](docs/ProjectTestPlanAttributesApi.md#getcustomattributetestplanprojectrelations) | **GET** /api/v2/projects/{projectId}/testPlans/attributes | Get project's test plan attributes |
*ProjectTestPlanAttributesApi* | [**searchTestPlanAttributesInProject**](docs/ProjectTestPlanAttributesApi.md#searchtestplanattributesinproject) | **POST** /api/v2/projects/{projectId}/testPlans/attributes/search | Search for attributes used in the project test plans |
*ProjectTestPlanAttributesApi* | [**updateCustomAttributeTestPlanProjectRelations**](docs/ProjectTestPlanAttributesApi.md#updatecustomattributetestplanprojectrelations) | **PUT** /api/v2/projects/{projectId}/testPlans/attributes | Update attribute of project's test plans |
| *ProjectTestPlansApi* | [**apiV2ProjectsProjectIdTestPlansAnalyticsGet**](docs/ProjectTestPlansApi.md#apiv2projectsprojectidtestplansanalyticsget) | **GET** /api/v2/projects/{projectId}/testPlans/analytics | Get TestPlans analytics |
*ProjectTestPlansApi* | [**apiV2ProjectsProjectIdTestPlansDeleteBulkPost**](docs/ProjectTestPlansApi.md#apiv2projectsprojectidtestplansdeletebulkpost) | **POST** /api/v2/projects/{projectId}/testPlans/delete/bulk | Delete multiple test plans |
*ProjectTestPlansApi* | [**apiV2ProjectsProjectIdTestPlansNameExistsGet**](docs/ProjectTestPlansApi.md#apiv2projectsprojectidtestplansnameexistsget) | **GET** /api/v2/projects/{projectId}/testPlans/{name}/exists | Checks if TestPlan exists with the specified name exists for the project |
*ProjectTestPlansApi* | [**apiV2ProjectsProjectIdTestPlansPurgeBulkPost**](docs/ProjectTestPlansApi.md#apiv2projectsprojectidtestplanspurgebulkpost) | **POST** /api/v2/projects/{projectId}/testPlans/purge/bulk | Permanently delete multiple archived test plans |
*ProjectTestPlansApi* | [**apiV2ProjectsProjectIdTestPlansRestoreBulkPost**](docs/ProjectTestPlansApi.md#apiv2projectsprojectidtestplansrestorebulkpost) | **POST** /api/v2/projects/{projectId}/testPlans/restore/bulk | Restore multiple test plans |
*ProjectTestPlansApi* | [**apiV2ProjectsProjectIdTestPlansSearchPost**](docs/ProjectTestPlansApi.md#apiv2projectsprojectidtestplanssearchpost) | **POST** /api/v2/projects/{projectId}/testPlans/search | Get Project TestPlans with analytics |
| *ProjectWorkItemsApi* | [**apiV2ProjectsProjectIdWorkItemsSearchGroupedPost**](docs/ProjectWorkItemsApi.md#apiv2projectsprojectidworkitemssearchgroupedpost) | **POST** /api/v2/projects/{projectId}/workItems/search/grouped | Search for work items and group results by attribute |
*ProjectWorkItemsApi* | [**apiV2ProjectsProjectIdWorkItemsSearchIdPost**](docs/ProjectWorkItemsApi.md#apiv2projectsprojectidworkitemssearchidpost) | **POST** /api/v2/projects/{projectId}/workItems/search/id | Search for work items and extract IDs only |
*ProjectWorkItemsApi* | [**apiV2ProjectsProjectIdWorkItemsSearchPost**](docs/ProjectWorkItemsApi.md#apiv2projectsprojectidworkitemssearchpost) | **POST** /api/v2/projects/{projectId}/workItems/search | Search for work items |
*ProjectWorkItemsApi* | [**apiV2ProjectsProjectIdWorkItemsTagsGet**](docs/ProjectWorkItemsApi.md#apiv2projectsprojectidworkitemstagsget) | **GET** /api/v2/projects/{projectId}/workItems/tags | Get WorkItems Tags |
*ProjectWorkItemsApi* | [**getWorkItemsByProjectId**](docs/ProjectWorkItemsApi.md#getworkitemsbyprojectid) | **GET** /api/v2/projects/{projectId}/workItems | Get project work items |
| *ProjectsApi* | [**addGlobaAttributesToProject**](docs/ProjectsApi.md#addglobaattributestoproject) | **POST** /api/v2/projects/{id}/globalAttributes | Add global attributes to project |
*ProjectsApi* | [**apiV2ProjectsDemoPost**](docs/ProjectsApi.md#apiv2projectsdemopost) | **POST** /api/v2/projects/demo |  |
*ProjectsApi* | [**apiV2ProjectsIdDelete**](docs/ProjectsApi.md#apiv2projectsiddelete) | **DELETE** /api/v2/projects/{id} | Archive project |
*ProjectsApi* | [**apiV2ProjectsIdFailureClassesGet**](docs/ProjectsApi.md#apiv2projectsidfailureclassesget) | **GET** /api/v2/projects/{id}/failureClasses | Get failure classes |
*ProjectsApi* | [**apiV2ProjectsIdFavoritePut**](docs/ProjectsApi.md#apiv2projectsidfavoriteput) | **PUT** /api/v2/projects/{id}/favorite | Mark Project as favorite |
*ProjectsApi* | [**apiV2ProjectsIdFiltersGet**](docs/ProjectsApi.md#apiv2projectsidfiltersget) | **GET** /api/v2/projects/{id}/filters | Get Project filters |
*ProjectsApi* | [**apiV2ProjectsIdPatch**](docs/ProjectsApi.md#apiv2projectsidpatch) | **PATCH** /api/v2/projects/{id} | Patch project |
*ProjectsApi* | [**apiV2ProjectsIdPurgePost**](docs/ProjectsApi.md#apiv2projectsidpurgepost) | **POST** /api/v2/projects/{id}/purge | Purge archived project |
*ProjectsApi* | [**apiV2ProjectsIdRestorePost**](docs/ProjectsApi.md#apiv2projectsidrestorepost) | **POST** /api/v2/projects/{id}/restore | Restore archived project |
*ProjectsApi* | [**apiV2ProjectsIdTestPlansAttributeAttributeIdDelete**](docs/ProjectsApi.md#apiv2projectsidtestplansattributeattributeiddelete) | **DELETE** /api/v2/projects/{id}/testPlans/attribute/{attributeId} | Delete attribute from project's test plans |
*ProjectsApi* | [**apiV2ProjectsIdTestPlansAttributePut**](docs/ProjectsApi.md#apiv2projectsidtestplansattributeput) | **PUT** /api/v2/projects/{id}/testPlans/attribute | Update attribute of project's test plans |
*ProjectsApi* | [**apiV2ProjectsIdTestRunsActiveGet**](docs/ProjectsApi.md#apiv2projectsidtestrunsactiveget) | **GET** /api/v2/projects/{id}/testRuns/active | Get active Project TestRuns |
*ProjectsApi* | [**apiV2ProjectsIdTestRunsFullGet**](docs/ProjectsApi.md#apiv2projectsidtestrunsfullget) | **GET** /api/v2/projects/{id}/testRuns/full | Get Project TestRuns full models |
*ProjectsApi* | [**apiV2ProjectsNameNameExistsGet**](docs/ProjectsApi.md#apiv2projectsnamenameexistsget) | **GET** /api/v2/projects/name/{name}/exists |  |
*ProjectsApi* | [**apiV2ProjectsPurgeBulkPost**](docs/ProjectsApi.md#apiv2projectspurgebulkpost) | **POST** /api/v2/projects/purge/bulk | Purge multiple projects |
*ProjectsApi* | [**apiV2ProjectsRestoreBulkPost**](docs/ProjectsApi.md#apiv2projectsrestorebulkpost) | **POST** /api/v2/projects/restore/bulk | Restore multiple projects |
*ProjectsApi* | [**apiV2ProjectsSearchPost**](docs/ProjectsApi.md#apiv2projectssearchpost) | **POST** /api/v2/projects/search | Search for projects |
*ProjectsApi* | [**backgroundImportProject**](docs/ProjectsApi.md#backgroundimportproject) | **POST** /api/v2/projects/import/json | Import project from JSON file in background job |
*ProjectsApi* | [**backgroundImportZipProject**](docs/ProjectsApi.md#backgroundimportzipproject) | **POST** /api/v2/projects/import/zip | Import project from Zip file in background job |
*ProjectsApi* | [**createProject**](docs/ProjectsApi.md#createproject) | **POST** /api/v2/projects | Create project |
*ProjectsApi* | [**deleteProjectAutoTests**](docs/ProjectsApi.md#deleteprojectautotests) | **DELETE** /api/v2/projects/{id}/autoTests | Delete all autotests from project |
*ProjectsApi* | [**exportWithTestPlansAndConfigurations**](docs/ProjectsApi.md#exportwithtestplansandconfigurations) | **POST** /api/v2/projects/{id}/export-by-testPlans | Export project with test plans, test suites and test points as JSON file |
*ProjectsApi* | [**getAllProjects**](docs/ProjectsApi.md#getallprojects) | **GET** /api/v2/projects | Get all projects |
*ProjectsApi* | [**getAutoTestsNamespaces**](docs/ProjectsApi.md#getautotestsnamespaces) | **GET** /api/v2/projects/{id}/autoTestsNamespaces | Get namespaces of autotests in project |
*ProjectsApi* | [**getProjectById**](docs/ProjectsApi.md#getprojectbyid) | **GET** /api/v2/projects/{id} | Get project by ID |
*ProjectsApi* | [**getTestPlansByProjectId**](docs/ProjectsApi.md#gettestplansbyprojectid) | **GET** /api/v2/projects/{id}/testPlans | Get project test plans |
*ProjectsApi* | [**getTestRunsByProjectId**](docs/ProjectsApi.md#gettestrunsbyprojectid) | **GET** /api/v2/projects/{id}/testRuns | Get project test runs |
*ProjectsApi* | [**import**](docs/ProjectsApi.md#import) | **POST** /api/v2/projects/import | Import project from JSON file |
*ProjectsApi* | [**updateProject**](docs/ProjectsApi.md#updateproject) | **PUT** /api/v2/projects | Update project |
| *SearchApi* | [**apiV2SearchGlobalSearchPost**](docs/SearchApi.md#apiv2searchglobalsearchpost) | **POST** /api/v2/search/globalSearch |  |
| *SectionsApi* | [**apiV2SectionsIdPatch**](docs/SectionsApi.md#apiv2sectionsidpatch) | **PATCH** /api/v2/sections/{id} | Patch section |
*SectionsApi* | [**createSection**](docs/SectionsApi.md#createsection) | **POST** /api/v2/sections | Create section |
*SectionsApi* | [**deleteSection**](docs/SectionsApi.md#deletesection) | **DELETE** /api/v2/sections/{id} | Delete section |
*SectionsApi* | [**getSectionById**](docs/SectionsApi.md#getsectionbyid) | **GET** /api/v2/sections/{id} | Get section |
*SectionsApi* | [**getWorkItemsBySectionId**](docs/SectionsApi.md#getworkitemsbysectionid) | **GET** /api/v2/sections/{id}/workItems | Get section work items |
*SectionsApi* | [**move**](docs/SectionsApi.md#move) | **POST** /api/v2/sections/move | Move section with all work items into another section |
*SectionsApi* | [**rename**](docs/SectionsApi.md#rename) | **POST** /api/v2/sections/rename | Rename section |
*SectionsApi* | [**updateSection**](docs/SectionsApi.md#updatesection) | **PUT** /api/v2/sections | Update section |
| *TagsApi* | [**apiV2TagsDelete**](docs/TagsApi.md#apiv2tagsdelete) | **DELETE** /api/v2/tags | Delete tags |
*TagsApi* | [**apiV2TagsGet**](docs/TagsApi.md#apiv2tagsget) | **GET** /api/v2/tags | Get all Tags |
*TagsApi* | [**apiV2TagsIdDelete**](docs/TagsApi.md#apiv2tagsiddelete) | **DELETE** /api/v2/tags/{id} | Delete tag |
*TagsApi* | [**apiV2TagsPost**](docs/TagsApi.md#apiv2tagspost) | **POST** /api/v2/tags | Create tag |
*TagsApi* | [**apiV2TagsPut**](docs/TagsApi.md#apiv2tagsput) | **PUT** /api/v2/tags | Update tag |
*TagsApi* | [**apiV2TagsSearchGet**](docs/TagsApi.md#apiv2tagssearchget) | **GET** /api/v2/tags/search | Search tags |
*TagsApi* | [**apiV2TagsTestPlansTagsGet**](docs/TagsApi.md#apiv2tagstestplanstagsget) | **GET** /api/v2/tags/testPlansTags | Get all Tags that are used in TestPlans |
| *TestPlansApi* | [**addTestPointsWithSections**](docs/TestPlansApi.md#addtestpointswithsections) | **POST** /api/v2/testPlans/{id}/test-points/withSections | Add test-points to TestPlan with sections |
*TestPlansApi* | [**addWorkItemsWithSections**](docs/TestPlansApi.md#addworkitemswithsections) | **POST** /api/v2/testPlans/{id}/workItems/withSections | Add WorkItems to TestPlan with Sections as TestSuites |
*TestPlansApi* | [**apiV2TestPlansIdAnalyticsGet**](docs/TestPlansApi.md#apiv2testplansidanalyticsget) | **GET** /api/v2/testPlans/{id}/analytics | Get analytics by TestPlan |
*TestPlansApi* | [**apiV2TestPlansIdAutobalancePost**](docs/TestPlansApi.md#apiv2testplansidautobalancepost) | **POST** /api/v2/testPlans/{id}/autobalance | Distribute test points between the users |
*TestPlansApi* | [**apiV2TestPlansIdConfigurationsGet**](docs/TestPlansApi.md#apiv2testplansidconfigurationsget) | **GET** /api/v2/testPlans/{id}/configurations | Get TestPlan configurations |
*TestPlansApi* | [**apiV2TestPlansIdExportTestPointsXlsxPost**](docs/TestPlansApi.md#apiv2testplansidexporttestpointsxlsxpost) | **POST** /api/v2/testPlans/{id}/export/testPoints/xlsx | Export TestPoints from TestPlan in xls format |
*TestPlansApi* | [**apiV2TestPlansIdExportTestResultHistoryXlsxPost**](docs/TestPlansApi.md#apiv2testplansidexporttestresulthistoryxlsxpost) | **POST** /api/v2/testPlans/{id}/export/testResultHistory/xlsx | Export TestResults history from TestPlan in xls format |
*TestPlansApi* | [**apiV2TestPlansIdHistoryGet**](docs/TestPlansApi.md#apiv2testplansidhistoryget) | **GET** /api/v2/testPlans/{id}/history | Get TestPlan history |
*TestPlansApi* | [**apiV2TestPlansIdLinksGet**](docs/TestPlansApi.md#apiv2testplansidlinksget) | **GET** /api/v2/testPlans/{id}/links | Get Links of TestPlan |
*TestPlansApi* | [**apiV2TestPlansIdPatch**](docs/TestPlansApi.md#apiv2testplansidpatch) | **PATCH** /api/v2/testPlans/{id} | Patch test plan |
*TestPlansApi* | [**apiV2TestPlansIdTestPointsLastResultsGet**](docs/TestPlansApi.md#apiv2testplansidtestpointslastresultsget) | **GET** /api/v2/testPlans/{id}/testPoints/lastResults | Get TestPoints with last result from TestPlan |
*TestPlansApi* | [**apiV2TestPlansIdTestPointsResetPost**](docs/TestPlansApi.md#apiv2testplansidtestpointsresetpost) | **POST** /api/v2/testPlans/{id}/testPoints/reset | Reset TestPoints status of TestPlan |
*TestPlansApi* | [**apiV2TestPlansIdTestPointsTesterDelete**](docs/TestPlansApi.md#apiv2testplansidtestpointstesterdelete) | **DELETE** /api/v2/testPlans/{id}/testPoints/tester | Unassign users from multiple test points |
*TestPlansApi* | [**apiV2TestPlansIdTestPointsTesterUserIdPost**](docs/TestPlansApi.md#apiv2testplansidtestpointstesteruseridpost) | **POST** /api/v2/testPlans/{id}/testPoints/tester/{userId} | Assign user as a tester to multiple test points |
*TestPlansApi* | [**apiV2TestPlansIdTestRunsGet**](docs/TestPlansApi.md#apiv2testplansidtestrunsget) | **GET** /api/v2/testPlans/{id}/testRuns | Get TestRuns of TestPlan |
*TestPlansApi* | [**apiV2TestPlansIdTestRunsSearchPost**](docs/TestPlansApi.md#apiv2testplansidtestrunssearchpost) | **POST** /api/v2/testPlans/{id}/testRuns/search | Search TestRuns of TestPlan |
*TestPlansApi* | [**apiV2TestPlansIdTestRunsTestResultsLastModifiedModifiedDateGet**](docs/TestPlansApi.md#apiv2testplansidtestrunstestresultslastmodifiedmodifieddateget) | **GET** /api/v2/testPlans/{id}/testRuns/testResults/lastModified/modifiedDate | Get last modification date of test plan's test results |
*TestPlansApi* | [**apiV2TestPlansIdUnlockRequestPost**](docs/TestPlansApi.md#apiv2testplansidunlockrequestpost) | **POST** /api/v2/testPlans/{id}/unlock/request | Send unlock TestPlan notification |
*TestPlansApi* | [**apiV2TestPlansShortsPost**](docs/TestPlansApi.md#apiv2testplansshortspost) | **POST** /api/v2/testPlans/shorts | Get TestPlans short models by Project identifiers |
*TestPlansApi* | [**clone**](docs/TestPlansApi.md#clone) | **POST** /api/v2/testPlans/{id}/clone | Clone TestPlan |
*TestPlansApi* | [**complete**](docs/TestPlansApi.md#complete) | **POST** /api/v2/testPlans/{id}/complete | Complete TestPlan |
*TestPlansApi* | [**createTestPlan**](docs/TestPlansApi.md#createtestplan) | **POST** /api/v2/testPlans | Create TestPlan |
*TestPlansApi* | [**deleteTestPlan**](docs/TestPlansApi.md#deletetestplan) | **DELETE** /api/v2/testPlans/{id} | Delete TestPlan |
*TestPlansApi* | [**getTestPlanById**](docs/TestPlansApi.md#gettestplanbyid) | **GET** /api/v2/testPlans/{id} | Get TestPlan by Id |
*TestPlansApi* | [**getTestSuitesById**](docs/TestPlansApi.md#gettestsuitesbyid) | **GET** /api/v2/testPlans/{id}/testSuites | Get TestSuites Tree By Id |
*TestPlansApi* | [**pause**](docs/TestPlansApi.md#pause) | **POST** /api/v2/testPlans/{id}/pause | Pause TestPlan |
*TestPlansApi* | [**purgeTestPlan**](docs/TestPlansApi.md#purgetestplan) | **POST** /api/v2/testPlans/{id}/purge | Permanently delete test plan from archive |
*TestPlansApi* | [**restoreTestPlan**](docs/TestPlansApi.md#restoretestplan) | **POST** /api/v2/testPlans/{id}/restore | Restore TestPlan |
*TestPlansApi* | [**start**](docs/TestPlansApi.md#start) | **POST** /api/v2/testPlans/{id}/start | Start TestPlan |
*TestPlansApi* | [**updateTestPlan**](docs/TestPlansApi.md#updatetestplan) | **PUT** /api/v2/testPlans | Update TestPlan |
| *TestPointsApi* | [**apiV2TestPointsIdTestRunsGet**](docs/TestPointsApi.md#apiv2testpointsidtestrunsget) | **GET** /api/v2/testPoints/{id}/testRuns | Get all test runs which use test point |
*TestPointsApi* | [**apiV2TestPointsIdWorkItemGet**](docs/TestPointsApi.md#apiv2testpointsidworkitemget) | **GET** /api/v2/testPoints/{id}/workItem | Get work item represented by test point |
*TestPointsApi* | [**apiV2TestPointsSearchIdPost**](docs/TestPointsApi.md#apiv2testpointssearchidpost) | **POST** /api/v2/testPoints/search/id | Search for test points and extract IDs only |
*TestPointsApi* | [**apiV2TestPointsSearchPost**](docs/TestPointsApi.md#apiv2testpointssearchpost) | **POST** /api/v2/testPoints/search | Search for test points |
| *TestResultsApi* | [**apiV2TestResultsIdAggregatedGet**](docs/TestResultsApi.md#apiv2testresultsidaggregatedget) | **GET** /api/v2/testResults/{id}/aggregated | Get test result by ID aggregated with previous results |
*TestResultsApi* | [**apiV2TestResultsIdAttachmentsAttachmentIdPut**](docs/TestResultsApi.md#apiv2testresultsidattachmentsattachmentidput) | **PUT** /api/v2/testResults/{id}/attachments/{attachmentId} | Attach file to the test result |
*TestResultsApi* | [**apiV2TestResultsIdAttachmentsInfoGet**](docs/TestResultsApi.md#apiv2testresultsidattachmentsinfoget) | **GET** /api/v2/testResults/{id}/attachments/info | Get test result attachments meta-information |
*TestResultsApi* | [**apiV2TestResultsIdGet**](docs/TestResultsApi.md#apiv2testresultsidget) | **GET** /api/v2/testResults/{id} | Get test result by ID |
*TestResultsApi* | [**apiV2TestResultsIdPut**](docs/TestResultsApi.md#apiv2testresultsidput) | **PUT** /api/v2/testResults/{id} | Edit test result by ID |
*TestResultsApi* | [**apiV2TestResultsSearchPost**](docs/TestResultsApi.md#apiv2testresultssearchpost) | **POST** /api/v2/testResults/search | Search for test results |
*TestResultsApi* | [**apiV2TestResultsStatisticsFilterPost**](docs/TestResultsApi.md#apiv2testresultsstatisticsfilterpost) | **POST** /api/v2/testResults/statistics/filter | Search for test results and extract statistics |
*TestResultsApi* | [**createAttachment**](docs/TestResultsApi.md#createattachment) | **POST** /api/v2/testResults/{id}/attachments | Upload and link attachment to TestResult |
*TestResultsApi* | [**deleteAttachment**](docs/TestResultsApi.md#deleteattachment) | **DELETE** /api/v2/testResults/{id}/attachments/{attachmentId} | Remove attachment and unlink from TestResult |
*TestResultsApi* | [**downloadAttachment**](docs/TestResultsApi.md#downloadattachment) | **GET** /api/v2/testResults/{id}/attachments/{attachmentId} | Get attachment of TestResult |
*TestResultsApi* | [**getAttachment**](docs/TestResultsApi.md#getattachment) | **GET** /api/v2/testResults/{id}/attachments/{attachmentId}/info | Get Metadata of TestResult's attachment |
*TestResultsApi* | [**getAttachments**](docs/TestResultsApi.md#getattachments) | **GET** /api/v2/testResults/{id}/attachments | Get all attachments of TestResult |
| *TestRunsApi* | [**apiV2TestRunsDelete**](docs/TestRunsApi.md#apiv2testrunsdelete) | **DELETE** /api/v2/testRuns | Delete multiple test runs |
*TestRunsApi* | [**apiV2TestRunsIdDelete**](docs/TestRunsApi.md#apiv2testrunsiddelete) | **DELETE** /api/v2/testRuns/{id} | Delete test run |
*TestRunsApi* | [**apiV2TestRunsIdPurgePost**](docs/TestRunsApi.md#apiv2testrunsidpurgepost) | **POST** /api/v2/testRuns/{id}/purge | Permanently delete test run from archive |
*TestRunsApi* | [**apiV2TestRunsIdRestorePost**](docs/TestRunsApi.md#apiv2testrunsidrestorepost) | **POST** /api/v2/testRuns/{id}/restore | Restore test run from the archive |
*TestRunsApi* | [**apiV2TestRunsIdStatisticsFilterPost**](docs/TestRunsApi.md#apiv2testrunsidstatisticsfilterpost) | **POST** /api/v2/testRuns/{id}/statistics/filter | Search for the test run test results and build statistics |
*TestRunsApi* | [**apiV2TestRunsIdTestPointsResultsGet**](docs/TestRunsApi.md#apiv2testrunsidtestpointsresultsget) | **GET** /api/v2/testRuns/{id}/testPoints/results | Get test results from the test run grouped by test points |
*TestRunsApi* | [**apiV2TestRunsIdTestResultsBulkPut**](docs/TestRunsApi.md#apiv2testrunsidtestresultsbulkput) | **PUT** /api/v2/testRuns/{id}/testResults/bulk | Partial edit of multiple test results in the test run |
*TestRunsApi* | [**apiV2TestRunsIdTestResultsLastModifiedModificationDateGet**](docs/TestRunsApi.md#apiv2testrunsidtestresultslastmodifiedmodificationdateget) | **GET** /api/v2/testRuns/{id}/testResults/lastModified/modificationDate | Get modification date of last test result of the test run |
*TestRunsApi* | [**apiV2TestRunsPurgeBulkPost**](docs/TestRunsApi.md#apiv2testrunspurgebulkpost) | **POST** /api/v2/testRuns/purge/bulk | Permanently delete multiple test runs from archive |
*TestRunsApi* | [**apiV2TestRunsRestoreBulkPost**](docs/TestRunsApi.md#apiv2testrunsrestorebulkpost) | **POST** /api/v2/testRuns/restore/bulk | Restore multiple test runs from the archive |
*TestRunsApi* | [**apiV2TestRunsSearchPost**](docs/TestRunsApi.md#apiv2testrunssearchpost) | **POST** /api/v2/testRuns/search | Search for test runs |
*TestRunsApi* | [**apiV2TestRunsUpdateMultiplePost**](docs/TestRunsApi.md#apiv2testrunsupdatemultiplepost) | **POST** /api/v2/testRuns/updateMultiple | Update multiple test runs |
*TestRunsApi* | [**completeTestRun**](docs/TestRunsApi.md#completetestrun) | **POST** /api/v2/testRuns/{id}/complete | Complete TestRun |
*TestRunsApi* | [**createAndFillByAutoTests**](docs/TestRunsApi.md#createandfillbyautotests) | **POST** /api/v2/testRuns/byAutoTests | Create test runs based on autotests and configurations |
*TestRunsApi* | [**createAndFillByConfigurations**](docs/TestRunsApi.md#createandfillbyconfigurations) | **POST** /api/v2/testRuns/byConfigurations | Create test runs picking the needed test points |
*TestRunsApi* | [**createAndFillByWorkItems**](docs/TestRunsApi.md#createandfillbyworkitems) | **POST** /api/v2/testRuns/byWorkItems | Create test run based on configurations and work items |
*TestRunsApi* | [**createEmpty**](docs/TestRunsApi.md#createempty) | **POST** /api/v2/testRuns | Create empty TestRun |
*TestRunsApi* | [**getTestRunById**](docs/TestRunsApi.md#gettestrunbyid) | **GET** /api/v2/testRuns/{id} | Get TestRun by Id |
*TestRunsApi* | [**setAutoTestResultsForTestRun**](docs/TestRunsApi.md#setautotestresultsfortestrun) | **POST** /api/v2/testRuns/{id}/testResults | Send test results to the test runs in the system |
*TestRunsApi* | [**startTestRun**](docs/TestRunsApi.md#starttestrun) | **POST** /api/v2/testRuns/{id}/start | Start TestRun |
*TestRunsApi* | [**stopTestRun**](docs/TestRunsApi.md#stoptestrun) | **POST** /api/v2/testRuns/{id}/stop | Stop TestRun |
*TestRunsApi* | [**updateEmpty**](docs/TestRunsApi.md#updateempty) | **PUT** /api/v2/testRuns | Update empty TestRun |
| *TestSuitesApi* | [**addTestPointsToTestSuite**](docs/TestSuitesApi.md#addtestpointstotestsuite) | **POST** /api/v2/testSuites/{id}/test-points | Add test-points to test suite |
*TestSuitesApi* | [**apiV2TestSuitesIdPatch**](docs/TestSuitesApi.md#apiv2testsuitesidpatch) | **PATCH** /api/v2/testSuites/{id} | Patch test suite |
*TestSuitesApi* | [**apiV2TestSuitesIdRefreshPost**](docs/TestSuitesApi.md#apiv2testsuitesidrefreshpost) | **POST** /api/v2/testSuites/{id}/refresh | Refresh test suite. Only dynamic test suites are supported by this method |
*TestSuitesApi* | [**apiV2TestSuitesIdWorkItemsPost**](docs/TestSuitesApi.md#apiv2testsuitesidworkitemspost) | **POST** /api/v2/testSuites/{id}/workItems | Set work items for test suite |
*TestSuitesApi* | [**apiV2TestSuitesPost**](docs/TestSuitesApi.md#apiv2testsuitespost) | **POST** /api/v2/testSuites | Create test suite |
*TestSuitesApi* | [**apiV2TestSuitesPut**](docs/TestSuitesApi.md#apiv2testsuitesput) | **PUT** /api/v2/testSuites | Edit test suite |
*TestSuitesApi* | [**deleteTestSuite**](docs/TestSuitesApi.md#deletetestsuite) | **DELETE** /api/v2/testSuites/{id} | Delete TestSuite |
*TestSuitesApi* | [**getConfigurationsByTestSuiteId**](docs/TestSuitesApi.md#getconfigurationsbytestsuiteid) | **GET** /api/v2/testSuites/{id}/configurations | Get Configurations By Id |
*TestSuitesApi* | [**getTestPointsById**](docs/TestSuitesApi.md#gettestpointsbyid) | **GET** /api/v2/testSuites/{id}/testPoints | Get TestPoints By Id |
*TestSuitesApi* | [**getTestResultsById**](docs/TestSuitesApi.md#gettestresultsbyid) | **GET** /api/v2/testSuites/{id}/testResults | Get TestResults By Id |
*TestSuitesApi* | [**getTestSuiteById**](docs/TestSuitesApi.md#gettestsuitebyid) | **GET** /api/v2/testSuites/{id} | Get TestSuite by Id |
*TestSuitesApi* | [**searchWorkItems**](docs/TestSuitesApi.md#searchworkitems) | **POST** /api/v2/testSuites/{id}/workItems/search | Search WorkItems |
*TestSuitesApi* | [**setConfigurationsByTestSuiteId**](docs/TestSuitesApi.md#setconfigurationsbytestsuiteid) | **POST** /api/v2/testSuites/{id}/configurations | Set Configurations By TestSuite Id |
| *WebhooksApi* | [**apiV2WebhooksGet**](docs/WebhooksApi.md#apiv2webhooksget) | **GET** /api/v2/webhooks | Get all webhooks |
*WebhooksApi* | [**apiV2WebhooksIdDelete**](docs/WebhooksApi.md#apiv2webhooksiddelete) | **DELETE** /api/v2/webhooks/{id} | Delete webhook by ID |
*WebhooksApi* | [**apiV2WebhooksIdGet**](docs/WebhooksApi.md#apiv2webhooksidget) | **GET** /api/v2/webhooks/{id} | Get webhook by ID |
*WebhooksApi* | [**apiV2WebhooksIdPut**](docs/WebhooksApi.md#apiv2webhooksidput) | **PUT** /api/v2/webhooks/{id} | Edit webhook by ID |
*WebhooksApi* | [**apiV2WebhooksPost**](docs/WebhooksApi.md#apiv2webhookspost) | **POST** /api/v2/webhooks | Create webhook |
*WebhooksApi* | [**apiV2WebhooksSearchPost**](docs/WebhooksApi.md#apiv2webhookssearchpost) | **POST** /api/v2/webhooks/search | Search for webhooks |
*WebhooksApi* | [**apiV2WebhooksSpecialVariablesGet**](docs/WebhooksApi.md#apiv2webhooksspecialvariablesget) | **GET** /api/v2/webhooks/specialVariables | Get special variables for webhook event type |
*WebhooksApi* | [**apiV2WebhooksTestPost**](docs/WebhooksApi.md#apiv2webhookstestpost) | **POST** /api/v2/webhooks/test | Test webhook's url |
| *WebhooksLogsApi* | [**apiV2WebhooksLogsGet**](docs/WebhooksLogsApi.md#apiv2webhookslogsget) | **GET** /api/v2/webhooks/logs | Get all webhook logs |
*WebhooksLogsApi* | [**apiV2WebhooksLogsIdDelete**](docs/WebhooksLogsApi.md#apiv2webhookslogsiddelete) | **DELETE** /api/v2/webhooks/logs/{id} | Delete webhook log by ID |
*WebhooksLogsApi* | [**apiV2WebhooksLogsIdGet**](docs/WebhooksLogsApi.md#apiv2webhookslogsidget) | **GET** /api/v2/webhooks/logs/{id} | Get webhook log by ID |
| *WorkItemsApi* | [**apiV2WorkItemsIdAttachmentsPost**](docs/WorkItemsApi.md#apiv2workitemsidattachmentspost) | **POST** /api/v2/workItems/{id}/attachments | Upload and link attachment to WorkItem |
*WorkItemsApi* | [**apiV2WorkItemsIdCheckListTransformToTestCasePost**](docs/WorkItemsApi.md#apiv2workitemsidchecklisttransformtotestcasepost) | **POST** /api/v2/workItems/{id}/checkList/transformTo/testCase | Transform CheckList to TestCase |
*WorkItemsApi* | [**apiV2WorkItemsIdHistoryGet**](docs/WorkItemsApi.md#apiv2workitemsidhistoryget) | **GET** /api/v2/workItems/{id}/history | Get change history of WorkItem |
*WorkItemsApi* | [**apiV2WorkItemsIdLikeDelete**](docs/WorkItemsApi.md#apiv2workitemsidlikedelete) | **DELETE** /api/v2/workItems/{id}/like | Delete like from WorkItem |
*WorkItemsApi* | [**apiV2WorkItemsIdLikePost**](docs/WorkItemsApi.md#apiv2workitemsidlikepost) | **POST** /api/v2/workItems/{id}/like | Set like to WorkItem |
*WorkItemsApi* | [**apiV2WorkItemsIdLikesCountGet**](docs/WorkItemsApi.md#apiv2workitemsidlikescountget) | **GET** /api/v2/workItems/{id}/likes/count | Get likes count of WorkItem |
*WorkItemsApi* | [**apiV2WorkItemsIdLikesGet**](docs/WorkItemsApi.md#apiv2workitemsidlikesget) | **GET** /api/v2/workItems/{id}/likes | Get likes of WorkItem |
*WorkItemsApi* | [**apiV2WorkItemsIdTestResultsHistoryGet**](docs/WorkItemsApi.md#apiv2workitemsidtestresultshistoryget) | **GET** /api/v2/workItems/{id}/testResults/history | Get test results history of WorkItem |
*WorkItemsApi* | [**apiV2WorkItemsIdVersionVersionIdActualPost**](docs/WorkItemsApi.md#apiv2workitemsidversionversionidactualpost) | **POST** /api/v2/workItems/{id}/version/{versionId}/actual | Set WorkItem as actual |
*WorkItemsApi* | [**apiV2WorkItemsMovePost**](docs/WorkItemsApi.md#apiv2workitemsmovepost) | **POST** /api/v2/workItems/move | Move WorkItem to another section |
*WorkItemsApi* | [**apiV2WorkItemsSearchPost**](docs/WorkItemsApi.md#apiv2workitemssearchpost) | **POST** /api/v2/workItems/search | Search for work items |
*WorkItemsApi* | [**apiV2WorkItemsSharedStepIdReferencesSectionsPost**](docs/WorkItemsApi.md#apiv2workitemssharedstepidreferencessectionspost) | **POST** /api/v2/workItems/{sharedStepId}/references/sections | Get SharedStep references in sections |
*WorkItemsApi* | [**apiV2WorkItemsSharedStepIdReferencesWorkItemsPost**](docs/WorkItemsApi.md#apiv2workitemssharedstepidreferencesworkitemspost) | **POST** /api/v2/workItems/{sharedStepId}/references/workItems | Get SharedStep references in work items |
*WorkItemsApi* | [**apiV2WorkItemsSharedStepsSharedStepIdReferencesGet**](docs/WorkItemsApi.md#apiv2workitemssharedstepssharedstepidreferencesget) | **GET** /api/v2/workItems/sharedSteps/{sharedStepId}/references | Get SharedStep references |
*WorkItemsApi* | [**createWorkItem**](docs/WorkItemsApi.md#createworkitem) | **POST** /api/v2/workItems | Create Test Case, Checklist or Shared Step |
*WorkItemsApi* | [**deleteAllWorkItemsFromAutoTest**](docs/WorkItemsApi.md#deleteallworkitemsfromautotest) | **DELETE** /api/v2/workItems/{id}/autoTests | Delete all links AutoTests from WorkItem by Id or GlobalId |
*WorkItemsApi* | [**deleteWorkItem**](docs/WorkItemsApi.md#deleteworkitem) | **DELETE** /api/v2/workItems/{id} | Delete Test Case, Checklist or Shared Step by Id or GlobalId |
*WorkItemsApi* | [**getAutoTestsForWorkItem**](docs/WorkItemsApi.md#getautotestsforworkitem) | **GET** /api/v2/workItems/{id}/autoTests | Get all AutoTests linked to WorkItem by Id or GlobalId |
*WorkItemsApi* | [**getIterations**](docs/WorkItemsApi.md#getiterations) | **GET** /api/v2/workItems/{id}/iterations | Get iterations by work item Id or GlobalId |
*WorkItemsApi* | [**getWorkItemById**](docs/WorkItemsApi.md#getworkitembyid) | **GET** /api/v2/workItems/{id} | Get Test Case, Checklist or Shared Step by Id or GlobalId |
*WorkItemsApi* | [**getWorkItemChronology**](docs/WorkItemsApi.md#getworkitemchronology) | **GET** /api/v2/workItems/{id}/chronology | Get WorkItem chronology by Id or GlobalId |
*WorkItemsApi* | [**getWorkItemVersions**](docs/WorkItemsApi.md#getworkitemversions) | **GET** /api/v2/workItems/{id}/versions | Get WorkItem versions |
*WorkItemsApi* | [**purgeWorkItem**](docs/WorkItemsApi.md#purgeworkitem) | **POST** /api/v2/workItems/{id}/purge | Permanently delete test case, checklist or shared steps from archive |
*WorkItemsApi* | [**restoreWorkItem**](docs/WorkItemsApi.md#restoreworkitem) | **POST** /api/v2/workItems/{id}/restore | Restore test case, checklist or shared steps from archive |
*WorkItemsApi* | [**updateWorkItem**](docs/WorkItemsApi.md#updateworkitem) | **PUT** /api/v2/workItems | Update Test Case, Checklist or Shared Step |
| *WorkItemsCommentsApi* | [**apiV2WorkItemsCommentsCommentIdDelete**](docs/WorkItemsCommentsApi.md#apiv2workitemscommentscommentiddelete) | **DELETE** /api/v2/workItems/comments/{commentId} | Delete WorkItem comment |
*WorkItemsCommentsApi* | [**apiV2WorkItemsCommentsPost**](docs/WorkItemsCommentsApi.md#apiv2workitemscommentspost) | **POST** /api/v2/workItems/comments | Create WorkItem comment |
*WorkItemsCommentsApi* | [**apiV2WorkItemsCommentsPut**](docs/WorkItemsCommentsApi.md#apiv2workitemscommentsput) | **PUT** /api/v2/workItems/comments | Update work item comment |
*WorkItemsCommentsApi* | [**apiV2WorkItemsIdCommentsGet**](docs/WorkItemsCommentsApi.md#apiv2workitemsidcommentsget) | **GET** /api/v2/workItems/{id}/comments | Get work item comments |


<a name="documentation-for-models"></a>
## Documentation for Models

 - You can see the documentation [here](docs/README.md).


# Contributing

You can help to develop the project. Any contributions are **greatly appreciated**.

* If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/testit-tms/api-client-js/issues/new) to discuss it, or directly create a pull request after you edit the *README.md* file with necessary changes.
* Please make sure you check your spelling and grammar.
* Create individual PR for each suggestion.
* Please also read through the [Code Of Conduct](https://github.com/testit-tms/api-client-js/blob/master/CODE_OF_CONDUCT.md) before posting your first idea as well.


# License

Distributed under the Apache-2.0 License. See [LICENSE](https://github.com/testit-tms/api-client-js/blob/master/LICENSE.md) for more information.
