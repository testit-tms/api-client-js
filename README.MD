# Api client for Test IT TMS
![Test IT](https://raw.githubusercontent.com/testit-tms/api-client-js/master/images/banner.png)

## Getting Started

### Compatibility

| Test IT | API Client      |
|---------|-----------------|
| 3.4     | 1.0             |
| 3.5     | 2.0             |
| 4.0     | 3.0             |
| 4.2     | 3.1             |
| 4.3     | 3.2             |
| 4.4     | 3.3             |
| 4.5     | 4.1             |
| 4.6     | 4.2             |
| 5.0     | 5.0             |
| 5.2     | 5.1             |
| 5.2.2   | 5.2.1-TMS-5.2.2 |
| 5.3     | 6.0.1-TMS-5.3   |
| 5.4     | 6.2.0-TMS-5.4   |
| 5.4.1   | 6.2.2-TMS-5.4.1 |
| 5.5     | 6.4.0-TMS-5.5   |
| Cloud   | 6.4.0           |

## For new versions

On the new version generation please run `npm run fix` for models fixing

## Installation

```shell
npm install testit-api-client
```

## How to run

```javascript
var TestitApiClient = require('testit-api-client');

var defaultClient = TestitApiClient.ApiClient.instance;
defaultClient.basePath = 'https://team-xxx.testit.software';
var auth = defaultClient.authentications['Bearer or PrivateToken'];
auth.apiKeyPrefix = "PrivateToken"
auth.apiKey = "xxxxxx"

async function get() {
    var api = new TestitApiClient.ProjectsApi()
    try {
        var res = await api.getAllProjects()
        console.log(res)
    }
    catch (e) {
        console.log(e)
    }
}

get()

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*TestitApiClient.AttachmentsApi* | [**apiV2AttachmentsIdDelete**](docs/AttachmentsApi.md#apiV2AttachmentsIdDelete) | **DELETE** /api/v2/attachments/{id} | Delete attachment file
*TestitApiClient.AttachmentsApi* | [**apiV2AttachmentsIdGet**](docs/AttachmentsApi.md#apiV2AttachmentsIdGet) | **GET** /api/v2/attachments/{id} | Download attachment file
*TestitApiClient.AttachmentsApi* | [**apiV2AttachmentsIdMetadataGet**](docs/AttachmentsApi.md#apiV2AttachmentsIdMetadataGet) | **GET** /api/v2/attachments/{id}/metadata | Get attachment metadata
*TestitApiClient.AttachmentsApi* | [**apiV2AttachmentsOccupiedFileStorageSizeGet**](docs/AttachmentsApi.md#apiV2AttachmentsOccupiedFileStorageSizeGet) | **GET** /api/v2/attachments/occupiedFileStorageSize | Get size of attachments storage in bytes
*TestitApiClient.AttachmentsApi* | [**apiV2AttachmentsPost**](docs/AttachmentsApi.md#apiV2AttachmentsPost) | **POST** /api/v2/attachments | Upload new attachment file
*TestitApiClient.AutoTestsApi* | [**apiV2AutoTestsDelete**](docs/AutoTestsApi.md#apiV2AutoTestsDelete) | **DELETE** /api/v2/autoTests | Delete autotests
*TestitApiClient.AutoTestsApi* | [**apiV2AutoTestsFlakyBulkPost**](docs/AutoTestsApi.md#apiV2AutoTestsFlakyBulkPost) | **POST** /api/v2/autoTests/flaky/bulk | Set \&quot;Flaky\&quot; status for multiple autotests
*TestitApiClient.AutoTestsApi* | [**apiV2AutoTestsIdPatch**](docs/AutoTestsApi.md#apiV2AutoTestsIdPatch) | **PATCH** /api/v2/autoTests/{id} | Patch auto test
*TestitApiClient.AutoTestsApi* | [**apiV2AutoTestsIdTestResultsSearchPost**](docs/AutoTestsApi.md#apiV2AutoTestsIdTestResultsSearchPost) | **POST** /api/v2/autoTests/{id}/testResults/search | Get test results history for autotest
*TestitApiClient.AutoTestsApi* | [**apiV2AutoTestsIdWorkItemsChangedIdGet**](docs/AutoTestsApi.md#apiV2AutoTestsIdWorkItemsChangedIdGet) | **GET** /api/v2/autoTests/{id}/workItems/changed/id | Get identifiers of changed linked work items
*TestitApiClient.AutoTestsApi* | [**apiV2AutoTestsIdWorkItemsChangedWorkItemIdApprovePost**](docs/AutoTestsApi.md#apiV2AutoTestsIdWorkItemsChangedWorkItemIdApprovePost) | **POST** /api/v2/autoTests/{id}/workItems/changed/{workItemId}/approve | Approve changes to work items linked to autotest
*TestitApiClient.AutoTestsApi* | [**apiV2AutoTestsSearchPost**](docs/AutoTestsApi.md#apiV2AutoTestsSearchPost) | **POST** /api/v2/autoTests/search | Search for autotests
*TestitApiClient.AutoTestsApi* | [**createAutoTest**](docs/AutoTestsApi.md#createAutoTest) | **POST** /api/v2/autoTests | Create autotest
*TestitApiClient.AutoTestsApi* | [**createMultiple**](docs/AutoTestsApi.md#createMultiple) | **POST** /api/v2/autoTests/bulk | Create multiple autotests
*TestitApiClient.AutoTestsApi* | [**deleteAutoTest**](docs/AutoTestsApi.md#deleteAutoTest) | **DELETE** /api/v2/autoTests/{id} | Delete autotest
*TestitApiClient.AutoTestsApi* | [**deleteAutoTestLinkFromWorkItem**](docs/AutoTestsApi.md#deleteAutoTestLinkFromWorkItem) | **DELETE** /api/v2/autoTests/{id}/workItems | Unlink autotest from work item
*TestitApiClient.AutoTestsApi* | [**getAllAutoTests**](docs/AutoTestsApi.md#getAllAutoTests) | **GET** /api/v2/autoTests | 
*TestitApiClient.AutoTestsApi* | [**getAutoTestAverageDuration**](docs/AutoTestsApi.md#getAutoTestAverageDuration) | **GET** /api/v2/autoTests/{id}/averageDuration | Get average autotest duration
*TestitApiClient.AutoTestsApi* | [**getAutoTestById**](docs/AutoTestsApi.md#getAutoTestById) | **GET** /api/v2/autoTests/{id} | Get autotest by internal or global ID
*TestitApiClient.AutoTestsApi* | [**getAutoTestChronology**](docs/AutoTestsApi.md#getAutoTestChronology) | **GET** /api/v2/autoTests/{id}/chronology | Get autotest chronology
*TestitApiClient.AutoTestsApi* | [**getTestRuns**](docs/AutoTestsApi.md#getTestRuns) | **GET** /api/v2/autoTests/{id}/testRuns | Get completed tests runs for autotests
*TestitApiClient.AutoTestsApi* | [**getWorkItemsLinkedToAutoTest**](docs/AutoTestsApi.md#getWorkItemsLinkedToAutoTest) | **GET** /api/v2/autoTests/{id}/workItems | Get work items linked to autotest
*TestitApiClient.AutoTestsApi* | [**linkAutoTestToWorkItem**](docs/AutoTestsApi.md#linkAutoTestToWorkItem) | **POST** /api/v2/autoTests/{id}/workItems | Link autotest with work items
*TestitApiClient.AutoTestsApi* | [**updateAutoTest**](docs/AutoTestsApi.md#updateAutoTest) | **PUT** /api/v2/autoTests | Update autotest
*TestitApiClient.AutoTestsApi* | [**updateMultiple**](docs/AutoTestsApi.md#updateMultiple) | **PUT** /api/v2/autoTests/bulk | Update multiple autotests
*TestitApiClient.BackgroundJobsApi* | [**apiV2BackgroundJobsCompletedDelete**](docs/BackgroundJobsApi.md#apiV2BackgroundJobsCompletedDelete) | **DELETE** /api/v2/backgroundJobs/completed | Delete all completed background jobs
*TestitApiClient.BackgroundJobsApi* | [**apiV2BackgroundJobsGet**](docs/BackgroundJobsApi.md#apiV2BackgroundJobsGet) | **GET** /api/v2/backgroundJobs | 
*TestitApiClient.BackgroundJobsApi* | [**apiV2BackgroundJobsIdCancelPost**](docs/BackgroundJobsApi.md#apiV2BackgroundJobsIdCancelPost) | **POST** /api/v2/backgroundJobs/{id}/cancel | Cancel current user background job
*TestitApiClient.BackgroundJobsApi* | [**apiV2BackgroundJobsIdGet**](docs/BackgroundJobsApi.md#apiV2BackgroundJobsIdGet) | **GET** /api/v2/backgroundJobs/{id} | Get background job by ID
*TestitApiClient.BackgroundJobsApi* | [**apiV2BackgroundJobsIdStatusGet**](docs/BackgroundJobsApi.md#apiV2BackgroundJobsIdStatusGet) | **GET** /api/v2/backgroundJobs/{id}/status | Get background job status by job ID
*TestitApiClient.BackgroundJobsApi* | [**apiV2BackgroundJobsSearchPost**](docs/BackgroundJobsApi.md#apiV2BackgroundJobsSearchPost) | **POST** /api/v2/backgroundJobs/search | Search for user background jobs
*TestitApiClient.ConfigurationsApi* | [**apiV2ConfigurationsCreateByParametersPost**](docs/ConfigurationsApi.md#apiV2ConfigurationsCreateByParametersPost) | **POST** /api/v2/configurations/createByParameters | Create configurations by parameters
*TestitApiClient.ConfigurationsApi* | [**apiV2ConfigurationsDeleteBulkPost**](docs/ConfigurationsApi.md#apiV2ConfigurationsDeleteBulkPost) | **POST** /api/v2/configurations/delete/bulk | Delete multiple configurations
*TestitApiClient.ConfigurationsApi* | [**apiV2ConfigurationsIdDelete**](docs/ConfigurationsApi.md#apiV2ConfigurationsIdDelete) | **DELETE** /api/v2/configurations/{id} | Delete configuration
*TestitApiClient.ConfigurationsApi* | [**apiV2ConfigurationsIdPatch**](docs/ConfigurationsApi.md#apiV2ConfigurationsIdPatch) | **PATCH** /api/v2/configurations/{id} | Patch configuration
*TestitApiClient.ConfigurationsApi* | [**apiV2ConfigurationsIdPurgePost**](docs/ConfigurationsApi.md#apiV2ConfigurationsIdPurgePost) | **POST** /api/v2/configurations/{id}/purge | Permanently delete configuration from archive
*TestitApiClient.ConfigurationsApi* | [**apiV2ConfigurationsIdRestorePost**](docs/ConfigurationsApi.md#apiV2ConfigurationsIdRestorePost) | **POST** /api/v2/configurations/{id}/restore | Restore configuration from the archive
*TestitApiClient.ConfigurationsApi* | [**apiV2ConfigurationsPurgeBulkPost**](docs/ConfigurationsApi.md#apiV2ConfigurationsPurgeBulkPost) | **POST** /api/v2/configurations/purge/bulk | Permanently delete multiple archived configurations
*TestitApiClient.ConfigurationsApi* | [**apiV2ConfigurationsPut**](docs/ConfigurationsApi.md#apiV2ConfigurationsPut) | **PUT** /api/v2/configurations | Edit configuration
*TestitApiClient.ConfigurationsApi* | [**apiV2ConfigurationsRestoreBulkPost**](docs/ConfigurationsApi.md#apiV2ConfigurationsRestoreBulkPost) | **POST** /api/v2/configurations/restore/bulk | Restore multiple configurations from the archive
*TestitApiClient.ConfigurationsApi* | [**apiV2ConfigurationsSearchPost**](docs/ConfigurationsApi.md#apiV2ConfigurationsSearchPost) | **POST** /api/v2/configurations/search | Search for configurations
*TestitApiClient.ConfigurationsApi* | [**createConfiguration**](docs/ConfigurationsApi.md#createConfiguration) | **POST** /api/v2/configurations | Create Configuration
*TestitApiClient.ConfigurationsApi* | [**getConfigurationById**](docs/ConfigurationsApi.md#getConfigurationById) | **GET** /api/v2/configurations/{id} | Get configuration by internal or global ID
*TestitApiClient.CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesExistsGet**](docs/CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesExistsGet) | **GET** /api/v2/customAttributes/templates/exists | 
*TestitApiClient.CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesIdCustomAttributesExcludePost**](docs/CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesIdCustomAttributesExcludePost) | **POST** /api/v2/customAttributes/templates/{id}/customAttributes/exclude | Exclude CustomAttributes from CustomAttributeTemplate
*TestitApiClient.CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesIdCustomAttributesIncludePost**](docs/CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesIdCustomAttributesIncludePost) | **POST** /api/v2/customAttributes/templates/{id}/customAttributes/include | Include CustomAttributes to CustomAttributeTemplate
*TestitApiClient.CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesIdDelete**](docs/CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesIdDelete) | **DELETE** /api/v2/customAttributes/templates/{id} | Delete CustomAttributeTemplate
*TestitApiClient.CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesIdGet**](docs/CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesIdGet) | **GET** /api/v2/customAttributes/templates/{id} | Get CustomAttributeTemplate by ID
*TestitApiClient.CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesNameGet**](docs/CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesNameGet) | **GET** /api/v2/customAttributes/templates/{name} | Get CustomAttributeTemplate by name
*TestitApiClient.CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesPost**](docs/CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesPost) | **POST** /api/v2/customAttributes/templates | Create CustomAttributeTemplate
*TestitApiClient.CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesPut**](docs/CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesPut) | **PUT** /api/v2/customAttributes/templates | Update custom attributes template
*TestitApiClient.CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesSearchPost**](docs/CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesSearchPost) | **POST** /api/v2/customAttributes/templates/search | Search CustomAttributeTemplates
*TestitApiClient.CustomAttributesApi* | [**apiV2CustomAttributesExistsGet**](docs/CustomAttributesApi.md#apiV2CustomAttributesExistsGet) | **GET** /api/v2/customAttributes/exists | 
*TestitApiClient.CustomAttributesApi* | [**apiV2CustomAttributesGlobalIdDelete**](docs/CustomAttributesApi.md#apiV2CustomAttributesGlobalIdDelete) | **DELETE** /api/v2/customAttributes/global/{id} | Delete global attribute
*TestitApiClient.CustomAttributesApi* | [**apiV2CustomAttributesGlobalIdPut**](docs/CustomAttributesApi.md#apiV2CustomAttributesGlobalIdPut) | **PUT** /api/v2/customAttributes/global/{id} | Edit global attribute
*TestitApiClient.CustomAttributesApi* | [**apiV2CustomAttributesGlobalPost**](docs/CustomAttributesApi.md#apiV2CustomAttributesGlobalPost) | **POST** /api/v2/customAttributes/global | Create global attribute
*TestitApiClient.CustomAttributesApi* | [**apiV2CustomAttributesIdGet**](docs/CustomAttributesApi.md#apiV2CustomAttributesIdGet) | **GET** /api/v2/customAttributes/{id} | Get attribute
*TestitApiClient.CustomAttributesApi* | [**apiV2CustomAttributesSearchPost**](docs/CustomAttributesApi.md#apiV2CustomAttributesSearchPost) | **POST** /api/v2/customAttributes/search | Search for attributes
*TestitApiClient.ExternalIssuesApi* | [**apiV2ExternalIssuesSuggestionsPost**](docs/ExternalIssuesApi.md#apiV2ExternalIssuesSuggestionsPost) | **POST** /api/v2/external-issues/suggestions | Returns list of suggestions from available external issues
*TestitApiClient.NotificationsApi* | [**apiV2NotificationsCountGet**](docs/NotificationsApi.md#apiV2NotificationsCountGet) | **GET** /api/v2/notifications/count | Get unread Notifications total in last 7 days
*TestitApiClient.NotificationsApi* | [**apiV2NotificationsGet**](docs/NotificationsApi.md#apiV2NotificationsGet) | **GET** /api/v2/notifications | Get all Notifications for current User
*TestitApiClient.NotificationsApi* | [**apiV2NotificationsIdReadPost**](docs/NotificationsApi.md#apiV2NotificationsIdReadPost) | **POST** /api/v2/notifications/{id}/read | Set Notification as read
*TestitApiClient.NotificationsApi* | [**apiV2NotificationsReadPost**](docs/NotificationsApi.md#apiV2NotificationsReadPost) | **POST** /api/v2/notifications/read | Set all Notifications as read
*TestitApiClient.NotificationsApi* | [**apiV2NotificationsSearchPost**](docs/NotificationsApi.md#apiV2NotificationsSearchPost) | **POST** /api/v2/notifications/search | Search Notifications for current User
*TestitApiClient.ParametersApi* | [**apiV2ParametersBulkPost**](docs/ParametersApi.md#apiV2ParametersBulkPost) | **POST** /api/v2/parameters/bulk | Create multiple parameters
*TestitApiClient.ParametersApi* | [**apiV2ParametersBulkPut**](docs/ParametersApi.md#apiV2ParametersBulkPut) | **PUT** /api/v2/parameters/bulk | Update multiple parameters
*TestitApiClient.ParametersApi* | [**apiV2ParametersGroupsGet**](docs/ParametersApi.md#apiV2ParametersGroupsGet) | **GET** /api/v2/parameters/groups | Get parameters as group
*TestitApiClient.ParametersApi* | [**apiV2ParametersKeyNameNameExistsGet**](docs/ParametersApi.md#apiV2ParametersKeyNameNameExistsGet) | **GET** /api/v2/parameters/key/name/{name}/exists | Check existence parameter key in system
*TestitApiClient.ParametersApi* | [**apiV2ParametersKeyValuesGet**](docs/ParametersApi.md#apiV2ParametersKeyValuesGet) | **GET** /api/v2/parameters/{key}/values | Get all parameter key values
*TestitApiClient.ParametersApi* | [**apiV2ParametersKeysGet**](docs/ParametersApi.md#apiV2ParametersKeysGet) | **GET** /api/v2/parameters/keys | Get all parameter keys
*TestitApiClient.ParametersApi* | [**apiV2ParametersSearchGroupsPost**](docs/ParametersApi.md#apiV2ParametersSearchGroupsPost) | **POST** /api/v2/parameters/search/groups | Search for parameters as group
*TestitApiClient.ParametersApi* | [**apiV2ParametersSearchPost**](docs/ParametersApi.md#apiV2ParametersSearchPost) | **POST** /api/v2/parameters/search | Search for parameters
*TestitApiClient.ParametersApi* | [**createParameter**](docs/ParametersApi.md#createParameter) | **POST** /api/v2/parameters | Create parameter
*TestitApiClient.ParametersApi* | [**deleteByName**](docs/ParametersApi.md#deleteByName) | **DELETE** /api/v2/parameters/name/{name} | Delete parameter by name
*TestitApiClient.ParametersApi* | [**deleteByParameterKeyId**](docs/ParametersApi.md#deleteByParameterKeyId) | **DELETE** /api/v2/parameters/keyId/{keyId} | Delete parameters by parameter key identifier
*TestitApiClient.ParametersApi* | [**deleteParameter**](docs/ParametersApi.md#deleteParameter) | **DELETE** /api/v2/parameters/{id} | Delete parameter
*TestitApiClient.ParametersApi* | [**getAllParameters**](docs/ParametersApi.md#getAllParameters) | **GET** /api/v2/parameters | Get all parameters
*TestitApiClient.ParametersApi* | [**getParameterById**](docs/ParametersApi.md#getParameterById) | **GET** /api/v2/parameters/{id} | Get parameter by ID
*TestitApiClient.ParametersApi* | [**updateParameter**](docs/ParametersApi.md#updateParameter) | **PUT** /api/v2/parameters | Update parameter
*TestitApiClient.ProjectAttributeTemplatesApi* | [**apiV2ProjectsProjectIdAttributesTemplatesSearchPost**](docs/ProjectAttributeTemplatesApi.md#apiV2ProjectsProjectIdAttributesTemplatesSearchPost) | **POST** /api/v2/projects/{projectId}/attributes/templates/search | Search for custom attributes templates
*TestitApiClient.ProjectAttributeTemplatesApi* | [**apiV2ProjectsProjectIdAttributesTemplatesTemplateIdDelete**](docs/ProjectAttributeTemplatesApi.md#apiV2ProjectsProjectIdAttributesTemplatesTemplateIdDelete) | **DELETE** /api/v2/projects/{projectId}/attributes/templates/{templateId} | Delete CustomAttributeTemplate from Project
*TestitApiClient.ProjectAttributeTemplatesApi* | [**apiV2ProjectsProjectIdAttributesTemplatesTemplateIdPost**](docs/ProjectAttributeTemplatesApi.md#apiV2ProjectsProjectIdAttributesTemplatesTemplateIdPost) | **POST** /api/v2/projects/{projectId}/attributes/templates/{templateId} | Add CustomAttributeTemplate to Project
*TestitApiClient.ProjectAttributesApi* | [**createProjectsAttribute**](docs/ProjectAttributesApi.md#createProjectsAttribute) | **POST** /api/v2/projects/{projectId}/attributes | Create project attribute
*TestitApiClient.ProjectAttributesApi* | [**deleteProjectsAttribute**](docs/ProjectAttributesApi.md#deleteProjectsAttribute) | **DELETE** /api/v2/projects/{projectId}/attributes/{attributeId} | Delete project attribute
*TestitApiClient.ProjectAttributesApi* | [**getAttributeByProjectId**](docs/ProjectAttributesApi.md#getAttributeByProjectId) | **GET** /api/v2/projects/{projectId}/attributes/{attributeId} | Get project attribute
*TestitApiClient.ProjectAttributesApi* | [**getAttributesByProjectId**](docs/ProjectAttributesApi.md#getAttributesByProjectId) | **GET** /api/v2/projects/{projectId}/attributes | Get project attributes
*TestitApiClient.ProjectAttributesApi* | [**searchAttributesInProject**](docs/ProjectAttributesApi.md#searchAttributesInProject) | **POST** /api/v2/projects/{projectId}/attributes/search | Search for attributes used in the project
*TestitApiClient.ProjectAttributesApi* | [**updateProjectsAttribute**](docs/ProjectAttributesApi.md#updateProjectsAttribute) | **PUT** /api/v2/projects/{projectId}/attributes | Edit attribute of the project
*TestitApiClient.ProjectConfigurationsApi* | [**getConfigurationsByProjectId**](docs/ProjectConfigurationsApi.md#getConfigurationsByProjectId) | **GET** /api/v2/projects/{projectId}/configurations | Get project configurations
*TestitApiClient.ProjectSectionsApi* | [**getSectionsByProjectId**](docs/ProjectSectionsApi.md#getSectionsByProjectId) | **GET** /api/v2/projects/{projectId}/sections | Get project sections
*TestitApiClient.ProjectSettingsApi* | [**apiV2ProjectsProjectIdSettingsAutotestsPost**](docs/ProjectSettingsApi.md#apiV2ProjectsProjectIdSettingsAutotestsPost) | **POST** /api/v2/projects/{projectId}/settings/autotests | Set autotest project settings.
*TestitApiClient.ProjectSettingsApi* | [**getAutotestProjectSettings**](docs/ProjectSettingsApi.md#getAutotestProjectSettings) | **GET** /api/v2/projects/{projectId}/settings/autotests | Get autotest project settings.
*TestitApiClient.ProjectTestPlanAttributesApi* | [**createCustomAttributeTestPlanProjectRelations**](docs/ProjectTestPlanAttributesApi.md#createCustomAttributeTestPlanProjectRelations) | **POST** /api/v2/projects/{projectId}/testPlans/attributes | Add attributes to project&#39;s test plans
*TestitApiClient.ProjectTestPlanAttributesApi* | [**deleteCustomAttributeTestPlanProjectRelations**](docs/ProjectTestPlanAttributesApi.md#deleteCustomAttributeTestPlanProjectRelations) | **DELETE** /api/v2/projects/{projectId}/testPlans/attributes/{attributeId} | Delete attribute from project&#39;s test plans
*TestitApiClient.ProjectTestPlanAttributesApi* | [**getCustomAttributeTestPlanProjectRelations**](docs/ProjectTestPlanAttributesApi.md#getCustomAttributeTestPlanProjectRelations) | **GET** /api/v2/projects/{projectId}/testPlans/attributes | Get project&#39;s test plan attributes
*TestitApiClient.ProjectTestPlanAttributesApi* | [**searchTestPlanAttributesInProject**](docs/ProjectTestPlanAttributesApi.md#searchTestPlanAttributesInProject) | **POST** /api/v2/projects/{projectId}/testPlans/attributes/search | Search for attributes used in the project test plans
*TestitApiClient.ProjectTestPlanAttributesApi* | [**updateCustomAttributeTestPlanProjectRelations**](docs/ProjectTestPlanAttributesApi.md#updateCustomAttributeTestPlanProjectRelations) | **PUT** /api/v2/projects/{projectId}/testPlans/attributes | Update attribute of project&#39;s test plans
*TestitApiClient.ProjectTestPlanTestPointsApi* | [**apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRerunPost**](docs/ProjectTestPlanTestPointsApi.md#apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRerunPost) | **POST** /api/v2/projects/{projectId}/test-plans/{testPlanId}/test-points/autotests/rerun | Rerun autotests.
*TestitApiClient.ProjectTestPlanTestPointsApi* | [**apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRunPost**](docs/ProjectTestPlanTestPointsApi.md#apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRunPost) | **POST** /api/v2/projects/{projectId}/test-plans/{testPlanId}/test-points/autotests/run | Run autotests.
*TestitApiClient.ProjectTestPlansApi* | [**apiV2ProjectsProjectIdTestPlansAnalyticsGet**](docs/ProjectTestPlansApi.md#apiV2ProjectsProjectIdTestPlansAnalyticsGet) | **GET** /api/v2/projects/{projectId}/testPlans/analytics | Get TestPlans analytics
*TestitApiClient.ProjectTestPlansApi* | [**apiV2ProjectsProjectIdTestPlansDeleteBulkPost**](docs/ProjectTestPlansApi.md#apiV2ProjectsProjectIdTestPlansDeleteBulkPost) | **POST** /api/v2/projects/{projectId}/testPlans/delete/bulk | Delete multiple test plans
*TestitApiClient.ProjectTestPlansApi* | [**apiV2ProjectsProjectIdTestPlansNameExistsGet**](docs/ProjectTestPlansApi.md#apiV2ProjectsProjectIdTestPlansNameExistsGet) | **GET** /api/v2/projects/{projectId}/testPlans/{name}/exists | Checks if TestPlan exists with the specified name exists for the project
*TestitApiClient.ProjectTestPlansApi* | [**apiV2ProjectsProjectIdTestPlansPurgeBulkPost**](docs/ProjectTestPlansApi.md#apiV2ProjectsProjectIdTestPlansPurgeBulkPost) | **POST** /api/v2/projects/{projectId}/testPlans/purge/bulk | Permanently delete multiple archived test plans
*TestitApiClient.ProjectTestPlansApi* | [**apiV2ProjectsProjectIdTestPlansRestoreBulkPost**](docs/ProjectTestPlansApi.md#apiV2ProjectsProjectIdTestPlansRestoreBulkPost) | **POST** /api/v2/projects/{projectId}/testPlans/restore/bulk | Restore multiple test plans
*TestitApiClient.ProjectTestPlansApi* | [**apiV2ProjectsProjectIdTestPlansSearchPost**](docs/ProjectTestPlansApi.md#apiV2ProjectsProjectIdTestPlansSearchPost) | **POST** /api/v2/projects/{projectId}/testPlans/search | Get Project TestPlans with analytics
*TestitApiClient.ProjectWorkItemsApi* | [**apiV2ProjectsProjectIdWorkItemsSearchGroupedPost**](docs/ProjectWorkItemsApi.md#apiV2ProjectsProjectIdWorkItemsSearchGroupedPost) | **POST** /api/v2/projects/{projectId}/workItems/search/grouped | Search for work items and group results by attribute
*TestitApiClient.ProjectWorkItemsApi* | [**apiV2ProjectsProjectIdWorkItemsSearchIdPost**](docs/ProjectWorkItemsApi.md#apiV2ProjectsProjectIdWorkItemsSearchIdPost) | **POST** /api/v2/projects/{projectId}/workItems/search/id | Search for work items and extract IDs only
*TestitApiClient.ProjectWorkItemsApi* | [**apiV2ProjectsProjectIdWorkItemsSearchPost**](docs/ProjectWorkItemsApi.md#apiV2ProjectsProjectIdWorkItemsSearchPost) | **POST** /api/v2/projects/{projectId}/workItems/search | Search for work items
*TestitApiClient.ProjectWorkItemsApi* | [**apiV2ProjectsProjectIdWorkItemsSearchWorkItemIdIndexPost**](docs/ProjectWorkItemsApi.md#apiV2ProjectsProjectIdWorkItemsSearchWorkItemIdIndexPost) | **POST** /api/v2/projects/{projectId}/workItems/search/{workItemId}/index | Get work item index (position) in a collection by its id.
*TestitApiClient.ProjectWorkItemsApi* | [**apiV2ProjectsProjectIdWorkItemsTagsGet**](docs/ProjectWorkItemsApi.md#apiV2ProjectsProjectIdWorkItemsTagsGet) | **GET** /api/v2/projects/{projectId}/workItems/tags | Get WorkItems Tags
*TestitApiClient.ProjectWorkItemsApi* | [**getWorkItemsByProjectId**](docs/ProjectWorkItemsApi.md#getWorkItemsByProjectId) | **GET** /api/v2/projects/{projectId}/workItems | Get project work items
*TestitApiClient.ProjectsApi* | [**addGlobalAttributesToProject**](docs/ProjectsApi.md#addGlobalAttributesToProject) | **POST** /api/v2/projects/{id}/globalAttributes | Add global attributes to project
*TestitApiClient.ProjectsApi* | [**apiV2ProjectsDemoPost**](docs/ProjectsApi.md#apiV2ProjectsDemoPost) | **POST** /api/v2/projects/demo | 
*TestitApiClient.ProjectsApi* | [**apiV2ProjectsIdDelete**](docs/ProjectsApi.md#apiV2ProjectsIdDelete) | **DELETE** /api/v2/projects/{id} | Archive project
*TestitApiClient.ProjectsApi* | [**apiV2ProjectsIdFailureClassesGet**](docs/ProjectsApi.md#apiV2ProjectsIdFailureClassesGet) | **GET** /api/v2/projects/{id}/failureClasses | Get failure classes
*TestitApiClient.ProjectsApi* | [**apiV2ProjectsIdFavoritePut**](docs/ProjectsApi.md#apiV2ProjectsIdFavoritePut) | **PUT** /api/v2/projects/{id}/favorite | Mark Project as favorite
*TestitApiClient.ProjectsApi* | [**apiV2ProjectsIdFiltersGet**](docs/ProjectsApi.md#apiV2ProjectsIdFiltersGet) | **GET** /api/v2/projects/{id}/filters | Get Project filters
*TestitApiClient.ProjectsApi* | [**apiV2ProjectsIdPatch**](docs/ProjectsApi.md#apiV2ProjectsIdPatch) | **PATCH** /api/v2/projects/{id} | Patch project
*TestitApiClient.ProjectsApi* | [**apiV2ProjectsIdPurgePost**](docs/ProjectsApi.md#apiV2ProjectsIdPurgePost) | **POST** /api/v2/projects/{id}/purge | Purge the project
*TestitApiClient.ProjectsApi* | [**apiV2ProjectsIdRestorePost**](docs/ProjectsApi.md#apiV2ProjectsIdRestorePost) | **POST** /api/v2/projects/{id}/restore | Restore archived project
*TestitApiClient.ProjectsApi* | [**apiV2ProjectsIdTestPlansAttributeAttributeIdDelete**](docs/ProjectsApi.md#apiV2ProjectsIdTestPlansAttributeAttributeIdDelete) | **DELETE** /api/v2/projects/{id}/testPlans/attribute/{attributeId} | Delete attribute from project&#39;s test plans
*TestitApiClient.ProjectsApi* | [**apiV2ProjectsIdTestPlansAttributePut**](docs/ProjectsApi.md#apiV2ProjectsIdTestPlansAttributePut) | **PUT** /api/v2/projects/{id}/testPlans/attribute | Update attribute of project&#39;s test plans
*TestitApiClient.ProjectsApi* | [**apiV2ProjectsIdTestRunsFullGet**](docs/ProjectsApi.md#apiV2ProjectsIdTestRunsFullGet) | **GET** /api/v2/projects/{id}/testRuns/full | Get Project TestRuns full models
*TestitApiClient.ProjectsApi* | [**apiV2ProjectsNameNameExistsGet**](docs/ProjectsApi.md#apiV2ProjectsNameNameExistsGet) | **GET** /api/v2/projects/name/{name}/exists | 
*TestitApiClient.ProjectsApi* | [**apiV2ProjectsPurgeBulkPost**](docs/ProjectsApi.md#apiV2ProjectsPurgeBulkPost) | **POST** /api/v2/projects/purge/bulk | Purge multiple projects
*TestitApiClient.ProjectsApi* | [**apiV2ProjectsRestoreBulkPost**](docs/ProjectsApi.md#apiV2ProjectsRestoreBulkPost) | **POST** /api/v2/projects/restore/bulk | Restore multiple projects
*TestitApiClient.ProjectsApi* | [**apiV2ProjectsSearchPost**](docs/ProjectsApi.md#apiV2ProjectsSearchPost) | **POST** /api/v2/projects/search | Search for projects
*TestitApiClient.ProjectsApi* | [**apiV2ProjectsShortsPost**](docs/ProjectsApi.md#apiV2ProjectsShortsPost) | **POST** /api/v2/projects/shorts | Get projects short models
*TestitApiClient.ProjectsApi* | [**createProject**](docs/ProjectsApi.md#createProject) | **POST** /api/v2/projects | Create project
*TestitApiClient.ProjectsApi* | [**deleteProjectAutoTests**](docs/ProjectsApi.md#deleteProjectAutoTests) | **DELETE** /api/v2/projects/{id}/autoTests | Delete all autotests from project
*TestitApiClient.ProjectsApi* | [**getAllProjects**](docs/ProjectsApi.md#getAllProjects) | **GET** /api/v2/projects | Get all projects
*TestitApiClient.ProjectsApi* | [**getAutoTestsNamespaces**](docs/ProjectsApi.md#getAutoTestsNamespaces) | **GET** /api/v2/projects/{id}/autoTestsNamespaces | Get namespaces of autotests in project
*TestitApiClient.ProjectsApi* | [**getProjectById**](docs/ProjectsApi.md#getProjectById) | **GET** /api/v2/projects/{id} | Get project by ID
*TestitApiClient.ProjectsApi* | [**getTestPlansByProjectId**](docs/ProjectsApi.md#getTestPlansByProjectId) | **GET** /api/v2/projects/{id}/testPlans | Get project test plans
*TestitApiClient.ProjectsApi* | [**getTestRunsByProjectId**](docs/ProjectsApi.md#getTestRunsByProjectId) | **GET** /api/v2/projects/{id}/testRuns | Get project test runs
*TestitApiClient.ProjectsApi* | [**updateProject**](docs/ProjectsApi.md#updateProject) | **PUT** /api/v2/projects | Update project
*TestitApiClient.SearchApi* | [**apiV2SearchGlobalSearchPost**](docs/SearchApi.md#apiV2SearchGlobalSearchPost) | **POST** /api/v2/search/globalSearch | 
*TestitApiClient.SectionsApi* | [**apiV2SectionsIdPatch**](docs/SectionsApi.md#apiV2SectionsIdPatch) | **PATCH** /api/v2/sections/{id} | Patch section
*TestitApiClient.SectionsApi* | [**createSection**](docs/SectionsApi.md#createSection) | **POST** /api/v2/sections | Create section
*TestitApiClient.SectionsApi* | [**deleteSection**](docs/SectionsApi.md#deleteSection) | **DELETE** /api/v2/sections/{id} | Delete section
*TestitApiClient.SectionsApi* | [**getSectionById**](docs/SectionsApi.md#getSectionById) | **GET** /api/v2/sections/{id} | Get section
*TestitApiClient.SectionsApi* | [**getWorkItemsBySectionId**](docs/SectionsApi.md#getWorkItemsBySectionId) | **GET** /api/v2/sections/{id}/workItems | Get section work items
*TestitApiClient.SectionsApi* | [**move**](docs/SectionsApi.md#move) | **POST** /api/v2/sections/move | Move section with all work items into another section
*TestitApiClient.SectionsApi* | [**rename**](docs/SectionsApi.md#rename) | **POST** /api/v2/sections/rename | Rename section
*TestitApiClient.SectionsApi* | [**updateSection**](docs/SectionsApi.md#updateSection) | **PUT** /api/v2/sections | Update section
*TestitApiClient.TagsApi* | [**apiV2TagsDelete**](docs/TagsApi.md#apiV2TagsDelete) | **DELETE** /api/v2/tags | Delete tags
*TestitApiClient.TagsApi* | [**apiV2TagsIdDelete**](docs/TagsApi.md#apiV2TagsIdDelete) | **DELETE** /api/v2/tags/{id} | Delete tag
*TestitApiClient.TagsApi* | [**apiV2TagsPost**](docs/TagsApi.md#apiV2TagsPost) | **POST** /api/v2/tags | Create tag
*TestitApiClient.TagsApi* | [**apiV2TagsPut**](docs/TagsApi.md#apiV2TagsPut) | **PUT** /api/v2/tags | Update tag
*TestitApiClient.TagsApi* | [**apiV2TagsSearchGet**](docs/TagsApi.md#apiV2TagsSearchGet) | **GET** /api/v2/tags/search | Search tags
*TestitApiClient.TagsApi* | [**apiV2TagsTestPlansTagsGet**](docs/TagsApi.md#apiV2TagsTestPlansTagsGet) | **GET** /api/v2/tags/testPlansTags | Get all Tags that are used in TestPlans
*TestitApiClient.TestPlansApi* | [**addTestPointsWithSections**](docs/TestPlansApi.md#addTestPointsWithSections) | **POST** /api/v2/testPlans/{id}/test-points/withSections | Add test-points to TestPlan with sections
*TestitApiClient.TestPlansApi* | [**addWorkItemsWithSections**](docs/TestPlansApi.md#addWorkItemsWithSections) | **POST** /api/v2/testPlans/{id}/workItems/withSections | Add WorkItems to TestPlan with Sections as TestSuites
*TestitApiClient.TestPlansApi* | [**apiV2TestPlansIdAnalyticsGet**](docs/TestPlansApi.md#apiV2TestPlansIdAnalyticsGet) | **GET** /api/v2/testPlans/{id}/analytics | Get analytics by TestPlan
*TestitApiClient.TestPlansApi* | [**apiV2TestPlansIdAutobalancePost**](docs/TestPlansApi.md#apiV2TestPlansIdAutobalancePost) | **POST** /api/v2/testPlans/{id}/autobalance | Distribute test points between the users
*TestitApiClient.TestPlansApi* | [**apiV2TestPlansIdConfigurationsGet**](docs/TestPlansApi.md#apiV2TestPlansIdConfigurationsGet) | **GET** /api/v2/testPlans/{id}/configurations | Get TestPlan configurations
*TestitApiClient.TestPlansApi* | [**apiV2TestPlansIdExportTestPointsXlsxPost**](docs/TestPlansApi.md#apiV2TestPlansIdExportTestPointsXlsxPost) | **POST** /api/v2/testPlans/{id}/export/testPoints/xlsx | Export TestPoints from TestPlan in xls format
*TestitApiClient.TestPlansApi* | [**apiV2TestPlansIdExportTestResultHistoryXlsxPost**](docs/TestPlansApi.md#apiV2TestPlansIdExportTestResultHistoryXlsxPost) | **POST** /api/v2/testPlans/{id}/export/testResultHistory/xlsx | Export TestResults history from TestPlan in xls format
*TestitApiClient.TestPlansApi* | [**apiV2TestPlansIdHistoryGet**](docs/TestPlansApi.md#apiV2TestPlansIdHistoryGet) | **GET** /api/v2/testPlans/{id}/history | Get TestPlan history
*TestitApiClient.TestPlansApi* | [**apiV2TestPlansIdLinksGet**](docs/TestPlansApi.md#apiV2TestPlansIdLinksGet) | **GET** /api/v2/testPlans/{id}/links | Get Links of TestPlan
*TestitApiClient.TestPlansApi* | [**apiV2TestPlansIdPatch**](docs/TestPlansApi.md#apiV2TestPlansIdPatch) | **PATCH** /api/v2/testPlans/{id} | Patch test plan
*TestitApiClient.TestPlansApi* | [**apiV2TestPlansIdSummariesGet**](docs/TestPlansApi.md#apiV2TestPlansIdSummariesGet) | **GET** /api/v2/testPlans/{id}/summaries | Get summary by TestPlan
*TestitApiClient.TestPlansApi* | [**apiV2TestPlansIdTestPointsLastResultsGet**](docs/TestPlansApi.md#apiV2TestPlansIdTestPointsLastResultsGet) | **GET** /api/v2/testPlans/{id}/testPoints/lastResults | Get TestPoints with last result from TestPlan
*TestitApiClient.TestPlansApi* | [**apiV2TestPlansIdTestPointsResetPost**](docs/TestPlansApi.md#apiV2TestPlansIdTestPointsResetPost) | **POST** /api/v2/testPlans/{id}/testPoints/reset | Reset TestPoints status of TestPlan
*TestitApiClient.TestPlansApi* | [**apiV2TestPlansIdTestPointsTesterDelete**](docs/TestPlansApi.md#apiV2TestPlansIdTestPointsTesterDelete) | **DELETE** /api/v2/testPlans/{id}/testPoints/tester | Unassign users from multiple test points
*TestitApiClient.TestPlansApi* | [**apiV2TestPlansIdTestPointsTesterUserIdPost**](docs/TestPlansApi.md#apiV2TestPlansIdTestPointsTesterUserIdPost) | **POST** /api/v2/testPlans/{id}/testPoints/tester/{userId} | Assign user as a tester to multiple test points
*TestitApiClient.TestPlansApi* | [**apiV2TestPlansIdTestRunsGet**](docs/TestPlansApi.md#apiV2TestPlansIdTestRunsGet) | **GET** /api/v2/testPlans/{id}/testRuns | Get TestRuns of TestPlan
*TestitApiClient.TestPlansApi* | [**apiV2TestPlansIdTestRunsSearchPost**](docs/TestPlansApi.md#apiV2TestPlansIdTestRunsSearchPost) | **POST** /api/v2/testPlans/{id}/testRuns/search | Search TestRuns of TestPlan
*TestitApiClient.TestPlansApi* | [**apiV2TestPlansIdTestRunsTestResultsLastModifiedModifiedDateGet**](docs/TestPlansApi.md#apiV2TestPlansIdTestRunsTestResultsLastModifiedModifiedDateGet) | **GET** /api/v2/testPlans/{id}/testRuns/testResults/lastModified/modifiedDate | Get last modification date of test plan&#39;s test results
*TestitApiClient.TestPlansApi* | [**apiV2TestPlansIdUnlockRequestPost**](docs/TestPlansApi.md#apiV2TestPlansIdUnlockRequestPost) | **POST** /api/v2/testPlans/{id}/unlock/request | Send unlock TestPlan notification
*TestitApiClient.TestPlansApi* | [**apiV2TestPlansShortsPost**](docs/TestPlansApi.md#apiV2TestPlansShortsPost) | **POST** /api/v2/testPlans/shorts | Get TestPlans short models by Project identifiers
*TestitApiClient.TestPlansApi* | [**clone**](docs/TestPlansApi.md#clone) | **POST** /api/v2/testPlans/{id}/clone | Clone TestPlan
*TestitApiClient.TestPlansApi* | [**complete**](docs/TestPlansApi.md#complete) | **POST** /api/v2/testPlans/{id}/complete | Complete TestPlan
*TestitApiClient.TestPlansApi* | [**createTestPlan**](docs/TestPlansApi.md#createTestPlan) | **POST** /api/v2/testPlans | Create TestPlan
*TestitApiClient.TestPlansApi* | [**deleteTestPlan**](docs/TestPlansApi.md#deleteTestPlan) | **DELETE** /api/v2/testPlans/{id} | Delete TestPlan
*TestitApiClient.TestPlansApi* | [**getTestPlanById**](docs/TestPlansApi.md#getTestPlanById) | **GET** /api/v2/testPlans/{id} | Get TestPlan by Id
*TestitApiClient.TestPlansApi* | [**getTestSuitesById**](docs/TestPlansApi.md#getTestSuitesById) | **GET** /api/v2/testPlans/{id}/testSuites | Get TestSuites Tree By Id
*TestitApiClient.TestPlansApi* | [**pause**](docs/TestPlansApi.md#pause) | **POST** /api/v2/testPlans/{id}/pause | Pause TestPlan
*TestitApiClient.TestPlansApi* | [**purgeTestPlan**](docs/TestPlansApi.md#purgeTestPlan) | **POST** /api/v2/testPlans/{id}/purge | Permanently delete test plan from archive
*TestitApiClient.TestPlansApi* | [**restoreTestPlan**](docs/TestPlansApi.md#restoreTestPlan) | **POST** /api/v2/testPlans/{id}/restore | Restore TestPlan
*TestitApiClient.TestPlansApi* | [**start**](docs/TestPlansApi.md#start) | **POST** /api/v2/testPlans/{id}/start | Start TestPlan
*TestitApiClient.TestPlansApi* | [**updateTestPlan**](docs/TestPlansApi.md#updateTestPlan) | **PUT** /api/v2/testPlans | Update TestPlan
*TestitApiClient.TestPointsApi* | [**apiV2TestPointsIdTestRunsGet**](docs/TestPointsApi.md#apiV2TestPointsIdTestRunsGet) | **GET** /api/v2/testPoints/{id}/testRuns | Get all test runs which use test point
*TestitApiClient.TestPointsApi* | [**apiV2TestPointsIdWorkItemGet**](docs/TestPointsApi.md#apiV2TestPointsIdWorkItemGet) | **GET** /api/v2/testPoints/{id}/workItem | Get work item represented by test point
*TestitApiClient.TestPointsApi* | [**apiV2TestPointsSearchIdPost**](docs/TestPointsApi.md#apiV2TestPointsSearchIdPost) | **POST** /api/v2/testPoints/search/id | Search for test points and extract IDs only
*TestitApiClient.TestPointsApi* | [**apiV2TestPointsSearchPost**](docs/TestPointsApi.md#apiV2TestPointsSearchPost) | **POST** /api/v2/testPoints/search | Search for test points
*TestitApiClient.TestResultsApi* | [**apiV2TestResultsExternalProjectsExternalProjectIdDefectsExternalFormsPost**](docs/TestResultsApi.md#apiV2TestResultsExternalProjectsExternalProjectIdDefectsExternalFormsPost) | **POST** /api/v2/testResults/external-projects/{externalProjectId}/defects/external-forms | 
*TestitApiClient.TestResultsApi* | [**apiV2TestResultsExternalProjectsExternalProjectIdDefectsPost**](docs/TestResultsApi.md#apiV2TestResultsExternalProjectsExternalProjectIdDefectsPost) | **POST** /api/v2/testResults/external-projects/{externalProjectId}/defects | 
*TestitApiClient.TestResultsApi* | [**apiV2TestResultsIdAggregatedGet**](docs/TestResultsApi.md#apiV2TestResultsIdAggregatedGet) | **GET** /api/v2/testResults/{id}/aggregated | Get test result by ID aggregated with previous results
*TestitApiClient.TestResultsApi* | [**apiV2TestResultsIdAttachmentsAttachmentIdPut**](docs/TestResultsApi.md#apiV2TestResultsIdAttachmentsAttachmentIdPut) | **PUT** /api/v2/testResults/{id}/attachments/{attachmentId} | Attach file to the test result
*TestitApiClient.TestResultsApi* | [**apiV2TestResultsIdAttachmentsInfoGet**](docs/TestResultsApi.md#apiV2TestResultsIdAttachmentsInfoGet) | **GET** /api/v2/testResults/{id}/attachments/info | Get test result attachments meta-information
*TestitApiClient.TestResultsApi* | [**apiV2TestResultsIdGet**](docs/TestResultsApi.md#apiV2TestResultsIdGet) | **GET** /api/v2/testResults/{id} | Get test result by ID
*TestitApiClient.TestResultsApi* | [**apiV2TestResultsIdPut**](docs/TestResultsApi.md#apiV2TestResultsIdPut) | **PUT** /api/v2/testResults/{id} | Edit test result by ID
*TestitApiClient.TestResultsApi* | [**apiV2TestResultsIdRerunsGet**](docs/TestResultsApi.md#apiV2TestResultsIdRerunsGet) | **GET** /api/v2/testResults/{id}/reruns | Get reruns
*TestitApiClient.TestResultsApi* | [**apiV2TestResultsSearchPost**](docs/TestResultsApi.md#apiV2TestResultsSearchPost) | **POST** /api/v2/testResults/search | Search for test results
*TestitApiClient.TestResultsApi* | [**apiV2TestResultsStatisticsFilterPost**](docs/TestResultsApi.md#apiV2TestResultsStatisticsFilterPost) | **POST** /api/v2/testResults/statistics/filter | Search for test results and extract statistics
*TestitApiClient.TestResultsApi* | [**createAttachment**](docs/TestResultsApi.md#createAttachment) | **POST** /api/v2/testResults/{id}/attachments | Upload and link attachment to TestResult
*TestitApiClient.TestResultsApi* | [**deleteAttachment**](docs/TestResultsApi.md#deleteAttachment) | **DELETE** /api/v2/testResults/{id}/attachments/{attachmentId} | Remove attachment and unlink from TestResult
*TestitApiClient.TestResultsApi* | [**downloadAttachment**](docs/TestResultsApi.md#downloadAttachment) | **GET** /api/v2/testResults/{id}/attachments/{attachmentId} | Get attachment of TestResult
*TestitApiClient.TestResultsApi* | [**getAttachment**](docs/TestResultsApi.md#getAttachment) | **GET** /api/v2/testResults/{id}/attachments/{attachmentId}/info | Get Metadata of TestResult&#39;s attachment
*TestitApiClient.TestResultsApi* | [**getAttachments**](docs/TestResultsApi.md#getAttachments) | **GET** /api/v2/testResults/{id}/attachments | Get all attachments of TestResult
*TestitApiClient.TestRunsApi* | [**apiV2TestRunsDelete**](docs/TestRunsApi.md#apiV2TestRunsDelete) | **DELETE** /api/v2/testRuns | Delete multiple test runs
*TestitApiClient.TestRunsApi* | [**apiV2TestRunsIdAutoTestsNamespacesGet**](docs/TestRunsApi.md#apiV2TestRunsIdAutoTestsNamespacesGet) | **GET** /api/v2/testRuns/{id}/autoTestsNamespaces | Get autotest classes and namespaces in test run
*TestitApiClient.TestRunsApi* | [**apiV2TestRunsIdDelete**](docs/TestRunsApi.md#apiV2TestRunsIdDelete) | **DELETE** /api/v2/testRuns/{id} | Delete test run
*TestitApiClient.TestRunsApi* | [**apiV2TestRunsIdPurgePost**](docs/TestRunsApi.md#apiV2TestRunsIdPurgePost) | **POST** /api/v2/testRuns/{id}/purge | Permanently delete test run from archive
*TestitApiClient.TestRunsApi* | [**apiV2TestRunsIdRerunsPost**](docs/TestRunsApi.md#apiV2TestRunsIdRerunsPost) | **POST** /api/v2/testRuns/{id}/reruns | Manual autotests rerun in test run
*TestitApiClient.TestRunsApi* | [**apiV2TestRunsIdRestorePost**](docs/TestRunsApi.md#apiV2TestRunsIdRestorePost) | **POST** /api/v2/testRuns/{id}/restore | Restore test run from the archive
*TestitApiClient.TestRunsApi* | [**apiV2TestRunsIdStatisticsFilterPost**](docs/TestRunsApi.md#apiV2TestRunsIdStatisticsFilterPost) | **POST** /api/v2/testRuns/{id}/statistics/filter | Search for the test run test results and build statistics
*TestitApiClient.TestRunsApi* | [**apiV2TestRunsIdTestPointsResultsGet**](docs/TestRunsApi.md#apiV2TestRunsIdTestPointsResultsGet) | **GET** /api/v2/testRuns/{id}/testPoints/results | Get test results from the test run grouped by test points
*TestitApiClient.TestRunsApi* | [**apiV2TestRunsIdTestResultsBulkPut**](docs/TestRunsApi.md#apiV2TestRunsIdTestResultsBulkPut) | **PUT** /api/v2/testRuns/{id}/testResults/bulk | Partial edit of multiple test results in the test run
*TestitApiClient.TestRunsApi* | [**apiV2TestRunsIdTestResultsLastModifiedModificationDateGet**](docs/TestRunsApi.md#apiV2TestRunsIdTestResultsLastModifiedModificationDateGet) | **GET** /api/v2/testRuns/{id}/testResults/lastModified/modificationDate | Get modification date of last test result of the test run
*TestitApiClient.TestRunsApi* | [**apiV2TestRunsPurgeBulkPost**](docs/TestRunsApi.md#apiV2TestRunsPurgeBulkPost) | **POST** /api/v2/testRuns/purge/bulk | Permanently delete multiple test runs from archive
*TestitApiClient.TestRunsApi* | [**apiV2TestRunsRestoreBulkPost**](docs/TestRunsApi.md#apiV2TestRunsRestoreBulkPost) | **POST** /api/v2/testRuns/restore/bulk | Restore multiple test runs from the archive
*TestitApiClient.TestRunsApi* | [**apiV2TestRunsSearchPost**](docs/TestRunsApi.md#apiV2TestRunsSearchPost) | **POST** /api/v2/testRuns/search | Search for test runs
*TestitApiClient.TestRunsApi* | [**apiV2TestRunsUpdateMultiplePost**](docs/TestRunsApi.md#apiV2TestRunsUpdateMultiplePost) | **POST** /api/v2/testRuns/updateMultiple | Update multiple test runs
*TestitApiClient.TestRunsApi* | [**completeTestRun**](docs/TestRunsApi.md#completeTestRun) | **POST** /api/v2/testRuns/{id}/complete | Complete TestRun
*TestitApiClient.TestRunsApi* | [**createAndFillByAutoTests**](docs/TestRunsApi.md#createAndFillByAutoTests) | **POST** /api/v2/testRuns/byAutoTests | Create test runs based on autotests and configurations
*TestitApiClient.TestRunsApi* | [**createAndFillByConfigurations**](docs/TestRunsApi.md#createAndFillByConfigurations) | **POST** /api/v2/testRuns/byConfigurations | Create test runs picking the needed test points
*TestitApiClient.TestRunsApi* | [**createAndFillByWorkItems**](docs/TestRunsApi.md#createAndFillByWorkItems) | **POST** /api/v2/testRuns/byWorkItems | Create test run based on configurations and work items
*TestitApiClient.TestRunsApi* | [**createEmpty**](docs/TestRunsApi.md#createEmpty) | **POST** /api/v2/testRuns | Create empty TestRun
*TestitApiClient.TestRunsApi* | [**getTestRunById**](docs/TestRunsApi.md#getTestRunById) | **GET** /api/v2/testRuns/{id} | Get TestRun by Id
*TestitApiClient.TestRunsApi* | [**setAutoTestResultsForTestRun**](docs/TestRunsApi.md#setAutoTestResultsForTestRun) | **POST** /api/v2/testRuns/{id}/testResults | Send test results to the test runs in the system
*TestitApiClient.TestRunsApi* | [**startTestRun**](docs/TestRunsApi.md#startTestRun) | **POST** /api/v2/testRuns/{id}/start | Start TestRun
*TestitApiClient.TestRunsApi* | [**stopTestRun**](docs/TestRunsApi.md#stopTestRun) | **POST** /api/v2/testRuns/{id}/stop | Stop TestRun
*TestitApiClient.TestRunsApi* | [**updateEmpty**](docs/TestRunsApi.md#updateEmpty) | **PUT** /api/v2/testRuns | Update empty TestRun
*TestitApiClient.TestSuitesApi* | [**addTestPointsToTestSuite**](docs/TestSuitesApi.md#addTestPointsToTestSuite) | **POST** /api/v2/testSuites/{id}/test-points | Add test-points to test suite
*TestitApiClient.TestSuitesApi* | [**apiV2TestSuitesIdPatch**](docs/TestSuitesApi.md#apiV2TestSuitesIdPatch) | **PATCH** /api/v2/testSuites/{id} | Patch test suite
*TestitApiClient.TestSuitesApi* | [**apiV2TestSuitesIdRefreshPost**](docs/TestSuitesApi.md#apiV2TestSuitesIdRefreshPost) | **POST** /api/v2/testSuites/{id}/refresh | Refresh test suite. Only dynamic test suites are supported by this method
*TestitApiClient.TestSuitesApi* | [**apiV2TestSuitesIdWorkItemsPost**](docs/TestSuitesApi.md#apiV2TestSuitesIdWorkItemsPost) | **POST** /api/v2/testSuites/{id}/workItems | Set work items for test suite
*TestitApiClient.TestSuitesApi* | [**apiV2TestSuitesPost**](docs/TestSuitesApi.md#apiV2TestSuitesPost) | **POST** /api/v2/testSuites | Create test suite
*TestitApiClient.TestSuitesApi* | [**apiV2TestSuitesPut**](docs/TestSuitesApi.md#apiV2TestSuitesPut) | **PUT** /api/v2/testSuites | Edit test suite
*TestitApiClient.TestSuitesApi* | [**deleteTestSuite**](docs/TestSuitesApi.md#deleteTestSuite) | **DELETE** /api/v2/testSuites/{id} | Delete TestSuite
*TestitApiClient.TestSuitesApi* | [**getConfigurationsByTestSuiteId**](docs/TestSuitesApi.md#getConfigurationsByTestSuiteId) | **GET** /api/v2/testSuites/{id}/configurations | Get Configurations By Id
*TestitApiClient.TestSuitesApi* | [**getTestPointsById**](docs/TestSuitesApi.md#getTestPointsById) | **GET** /api/v2/testSuites/{id}/testPoints | Get TestPoints By Id
*TestitApiClient.TestSuitesApi* | [**getTestResultsById**](docs/TestSuitesApi.md#getTestResultsById) | **GET** /api/v2/testSuites/{id}/testResults | Get TestResults By Id
*TestitApiClient.TestSuitesApi* | [**getTestSuiteById**](docs/TestSuitesApi.md#getTestSuiteById) | **GET** /api/v2/testSuites/{id} | Get TestSuite by Id
*TestitApiClient.TestSuitesApi* | [**searchWorkItems**](docs/TestSuitesApi.md#searchWorkItems) | **POST** /api/v2/testSuites/{id}/workItems/search | Search WorkItems
*TestitApiClient.TestSuitesApi* | [**setConfigurationsByTestSuiteId**](docs/TestSuitesApi.md#setConfigurationsByTestSuiteId) | **POST** /api/v2/testSuites/{id}/configurations | Set Configurations By TestSuite Id
*TestitApiClient.UsersApi* | [**apiV2UsersExistsGet**](docs/UsersApi.md#apiV2UsersExistsGet) | **GET** /api/v2/users/exists | 
*TestitApiClient.WebhooksApi* | [**apiV2WebhooksDelete**](docs/WebhooksApi.md#apiV2WebhooksDelete) | **DELETE** /api/v2/webhooks | 
*TestitApiClient.WebhooksApi* | [**apiV2WebhooksGet**](docs/WebhooksApi.md#apiV2WebhooksGet) | **GET** /api/v2/webhooks | Get all webhooks
*TestitApiClient.WebhooksApi* | [**apiV2WebhooksIdDelete**](docs/WebhooksApi.md#apiV2WebhooksIdDelete) | **DELETE** /api/v2/webhooks/{id} | Delete webhook by ID
*TestitApiClient.WebhooksApi* | [**apiV2WebhooksIdGet**](docs/WebhooksApi.md#apiV2WebhooksIdGet) | **GET** /api/v2/webhooks/{id} | Get webhook by ID
*TestitApiClient.WebhooksApi* | [**apiV2WebhooksIdPut**](docs/WebhooksApi.md#apiV2WebhooksIdPut) | **PUT** /api/v2/webhooks/{id} | Edit webhook by ID
*TestitApiClient.WebhooksApi* | [**apiV2WebhooksPost**](docs/WebhooksApi.md#apiV2WebhooksPost) | **POST** /api/v2/webhooks | Create webhook
*TestitApiClient.WebhooksApi* | [**apiV2WebhooksPut**](docs/WebhooksApi.md#apiV2WebhooksPut) | **PUT** /api/v2/webhooks | 
*TestitApiClient.WebhooksApi* | [**apiV2WebhooksSearchPost**](docs/WebhooksApi.md#apiV2WebhooksSearchPost) | **POST** /api/v2/webhooks/search | Search for webhooks
*TestitApiClient.WebhooksApi* | [**apiV2WebhooksSpecialVariablesGet**](docs/WebhooksApi.md#apiV2WebhooksSpecialVariablesGet) | **GET** /api/v2/webhooks/specialVariables | Get special variables for webhook event type
*TestitApiClient.WebhooksApi* | [**apiV2WebhooksTestPost**](docs/WebhooksApi.md#apiV2WebhooksTestPost) | **POST** /api/v2/webhooks/test | Test webhook&#39;s url
*TestitApiClient.WebhooksLogsApi* | [**apiV2WebhooksLogsGet**](docs/WebhooksLogsApi.md#apiV2WebhooksLogsGet) | **GET** /api/v2/webhooks/logs | Get last webhook logs
*TestitApiClient.WebhooksLogsApi* | [**apiV2WebhooksLogsIdDelete**](docs/WebhooksLogsApi.md#apiV2WebhooksLogsIdDelete) | **DELETE** /api/v2/webhooks/logs/{id} | Delete webhook log by ID
*TestitApiClient.WebhooksLogsApi* | [**apiV2WebhooksLogsIdGet**](docs/WebhooksLogsApi.md#apiV2WebhooksLogsIdGet) | **GET** /api/v2/webhooks/logs/{id} | Get webhook log by ID
*TestitApiClient.WorkItemsApi* | [**apiV2WorkItemsIdAttachmentsPost**](docs/WorkItemsApi.md#apiV2WorkItemsIdAttachmentsPost) | **POST** /api/v2/workItems/{id}/attachments | Upload and link attachment to WorkItem
*TestitApiClient.WorkItemsApi* | [**apiV2WorkItemsIdCheckListTransformToTestCasePost**](docs/WorkItemsApi.md#apiV2WorkItemsIdCheckListTransformToTestCasePost) | **POST** /api/v2/workItems/{id}/checkList/transformTo/testCase | Transform CheckList to TestCase
*TestitApiClient.WorkItemsApi* | [**apiV2WorkItemsIdHistoryGet**](docs/WorkItemsApi.md#apiV2WorkItemsIdHistoryGet) | **GET** /api/v2/workItems/{id}/history | Get change history of WorkItem
*TestitApiClient.WorkItemsApi* | [**apiV2WorkItemsIdLikeDelete**](docs/WorkItemsApi.md#apiV2WorkItemsIdLikeDelete) | **DELETE** /api/v2/workItems/{id}/like | Delete like from WorkItem
*TestitApiClient.WorkItemsApi* | [**apiV2WorkItemsIdLikePost**](docs/WorkItemsApi.md#apiV2WorkItemsIdLikePost) | **POST** /api/v2/workItems/{id}/like | Set like to WorkItem
*TestitApiClient.WorkItemsApi* | [**apiV2WorkItemsIdLikesCountGet**](docs/WorkItemsApi.md#apiV2WorkItemsIdLikesCountGet) | **GET** /api/v2/workItems/{id}/likes/count | Get likes count of WorkItem
*TestitApiClient.WorkItemsApi* | [**apiV2WorkItemsIdLikesGet**](docs/WorkItemsApi.md#apiV2WorkItemsIdLikesGet) | **GET** /api/v2/workItems/{id}/likes | Get likes of WorkItem
*TestitApiClient.WorkItemsApi* | [**apiV2WorkItemsIdTestResultsHistoryGet**](docs/WorkItemsApi.md#apiV2WorkItemsIdTestResultsHistoryGet) | **GET** /api/v2/workItems/{id}/testResults/history | Get test results history of WorkItem
*TestitApiClient.WorkItemsApi* | [**apiV2WorkItemsIdVersionVersionIdActualPost**](docs/WorkItemsApi.md#apiV2WorkItemsIdVersionVersionIdActualPost) | **POST** /api/v2/workItems/{id}/version/{versionId}/actual | Set WorkItem as actual
*TestitApiClient.WorkItemsApi* | [**apiV2WorkItemsLinksUrlsSearchPost**](docs/WorkItemsApi.md#apiV2WorkItemsLinksUrlsSearchPost) | **POST** /api/v2/workItems/links/urls/search | 
*TestitApiClient.WorkItemsApi* | [**apiV2WorkItemsMovePost**](docs/WorkItemsApi.md#apiV2WorkItemsMovePost) | **POST** /api/v2/workItems/move | Move WorkItem to another section
*TestitApiClient.WorkItemsApi* | [**apiV2WorkItemsPost**](docs/WorkItemsApi.md#apiV2WorkItemsPost) | **POST** /api/v2/workItems | Creates work item
*TestitApiClient.WorkItemsApi* | [**apiV2WorkItemsSearchPost**](docs/WorkItemsApi.md#apiV2WorkItemsSearchPost) | **POST** /api/v2/workItems/search | Search for work items
*TestitApiClient.WorkItemsApi* | [**apiV2WorkItemsSharedStepIdReferencesSectionsPost**](docs/WorkItemsApi.md#apiV2WorkItemsSharedStepIdReferencesSectionsPost) | **POST** /api/v2/workItems/{sharedStepId}/references/sections | Get SharedStep references in sections
*TestitApiClient.WorkItemsApi* | [**apiV2WorkItemsSharedStepIdReferencesWorkItemsPost**](docs/WorkItemsApi.md#apiV2WorkItemsSharedStepIdReferencesWorkItemsPost) | **POST** /api/v2/workItems/{sharedStepId}/references/workItems | Get SharedStep references in work items
*TestitApiClient.WorkItemsApi* | [**apiV2WorkItemsSharedStepsSharedStepIdReferencesGet**](docs/WorkItemsApi.md#apiV2WorkItemsSharedStepsSharedStepIdReferencesGet) | **GET** /api/v2/workItems/sharedSteps/{sharedStepId}/references | Get SharedStep references
*TestitApiClient.WorkItemsApi* | [**deleteAllWorkItemsFromAutoTest**](docs/WorkItemsApi.md#deleteAllWorkItemsFromAutoTest) | **DELETE** /api/v2/workItems/{id}/autoTests | Delete all links AutoTests from WorkItem by Id or GlobalId
*TestitApiClient.WorkItemsApi* | [**deleteWorkItem**](docs/WorkItemsApi.md#deleteWorkItem) | **DELETE** /api/v2/workItems/{id} | Delete Test Case, Checklist or Shared Step by Id or GlobalId
*TestitApiClient.WorkItemsApi* | [**getAutoTestsForWorkItem**](docs/WorkItemsApi.md#getAutoTestsForWorkItem) | **GET** /api/v2/workItems/{id}/autoTests | Get all AutoTests linked to WorkItem by Id or GlobalId
*TestitApiClient.WorkItemsApi* | [**getIterations**](docs/WorkItemsApi.md#getIterations) | **GET** /api/v2/workItems/{id}/iterations | Get iterations by work item Id or GlobalId
*TestitApiClient.WorkItemsApi* | [**getWorkItemById**](docs/WorkItemsApi.md#getWorkItemById) | **GET** /api/v2/workItems/{id} | Get Test Case, Checklist or Shared Step by Id or GlobalId
*TestitApiClient.WorkItemsApi* | [**getWorkItemChronology**](docs/WorkItemsApi.md#getWorkItemChronology) | **GET** /api/v2/workItems/{id}/chronology | Get WorkItem chronology by Id or GlobalId
*TestitApiClient.WorkItemsApi* | [**getWorkItemVersions**](docs/WorkItemsApi.md#getWorkItemVersions) | **GET** /api/v2/workItems/{id}/versions | Get WorkItem versions
*TestitApiClient.WorkItemsApi* | [**purgeWorkItem**](docs/WorkItemsApi.md#purgeWorkItem) | **POST** /api/v2/workItems/{id}/purge | Permanently delete test case, checklist or shared steps from archive
*TestitApiClient.WorkItemsApi* | [**restoreWorkItem**](docs/WorkItemsApi.md#restoreWorkItem) | **POST** /api/v2/workItems/{id}/restore | Restore test case, checklist or shared steps from archive
*TestitApiClient.WorkItemsApi* | [**updateWorkItem**](docs/WorkItemsApi.md#updateWorkItem) | **PUT** /api/v2/workItems | Update Test Case, Checklist or Shared Step
*TestitApiClient.WorkItemsCommentsApi* | [**apiV2WorkItemsCommentsCommentIdDelete**](docs/WorkItemsCommentsApi.md#apiV2WorkItemsCommentsCommentIdDelete) | **DELETE** /api/v2/workItems/comments/{commentId} | Delete WorkItem comment
*TestitApiClient.WorkItemsCommentsApi* | [**apiV2WorkItemsCommentsPost**](docs/WorkItemsCommentsApi.md#apiV2WorkItemsCommentsPost) | **POST** /api/v2/workItems/comments | Create WorkItem comment
*TestitApiClient.WorkItemsCommentsApi* | [**apiV2WorkItemsCommentsPut**](docs/WorkItemsCommentsApi.md#apiV2WorkItemsCommentsPut) | **PUT** /api/v2/workItems/comments | Update work item comment
*TestitApiClient.WorkItemsCommentsApi* | [**apiV2WorkItemsIdCommentsCountGet**](docs/WorkItemsCommentsApi.md#apiV2WorkItemsIdCommentsCountGet) | **GET** /api/v2/workItems/{id}/comments/count | Get work item comments count
*TestitApiClient.WorkItemsCommentsApi* | [**apiV2WorkItemsIdCommentsGet**](docs/WorkItemsCommentsApi.md#apiV2WorkItemsIdCommentsGet) | **GET** /api/v2/workItems/{id}/comments | Get work item comments


## Documentation for Models

 - [TestitApiClient.AIServiceModelApiResult](docs/AIServiceModelApiResult.md)
 - [TestitApiClient.AIServiceModelApiResultReply](docs/AIServiceModelApiResultReply.md)
 - [TestitApiClient.ActionUpdate](docs/ActionUpdate.md)
 - [TestitApiClient.ApiExternalServiceCategory](docs/ApiExternalServiceCategory.md)
 - [TestitApiClient.AssignAttachmentApiModel](docs/AssignAttachmentApiModel.md)
 - [TestitApiClient.AssignIterationApiModel](docs/AssignIterationApiModel.md)
 - [TestitApiClient.AttachmentApiResult](docs/AttachmentApiResult.md)
 - [TestitApiClient.AttachmentChangeViewModel](docs/AttachmentChangeViewModel.md)
 - [TestitApiClient.AttachmentChangeViewModelArrayChangedFieldViewModel](docs/AttachmentChangeViewModelArrayChangedFieldViewModel.md)
 - [TestitApiClient.AttachmentModel](docs/AttachmentModel.md)
 - [TestitApiClient.AttachmentPutModel](docs/AttachmentPutModel.md)
 - [TestitApiClient.AttachmentPutModelAutoTestStepResultsModel](docs/AttachmentPutModelAutoTestStepResultsModel.md)
 - [TestitApiClient.AttachmentUpdateRequest](docs/AttachmentUpdateRequest.md)
 - [TestitApiClient.AuditApiResult](docs/AuditApiResult.md)
 - [TestitApiClient.AutoTest](docs/AutoTest.md)
 - [TestitApiClient.AutoTestApiResult](docs/AutoTestApiResult.md)
 - [TestitApiClient.AutoTestAverageDurationApiResult](docs/AutoTestAverageDurationApiResult.md)
 - [TestitApiClient.AutoTestBulkDeleteApiModel](docs/AutoTestBulkDeleteApiModel.md)
 - [TestitApiClient.AutoTestBulkDeleteApiResult](docs/AutoTestBulkDeleteApiResult.md)
 - [TestitApiClient.AutoTestChangeViewModel](docs/AutoTestChangeViewModel.md)
 - [TestitApiClient.AutoTestChangeViewModelArrayChangedFieldViewModel](docs/AutoTestChangeViewModelArrayChangedFieldViewModel.md)
 - [TestitApiClient.AutoTestClassCountApiModel](docs/AutoTestClassCountApiModel.md)
 - [TestitApiClient.AutoTestCreateApiModel](docs/AutoTestCreateApiModel.md)
 - [TestitApiClient.AutoTestExtractionApiModel](docs/AutoTestExtractionApiModel.md)
 - [TestitApiClient.AutoTestFilterApiModel](docs/AutoTestFilterApiModel.md)
 - [TestitApiClient.AutoTestFilterModel](docs/AutoTestFilterModel.md)
 - [TestitApiClient.AutoTestFlakyBulkApiModel](docs/AutoTestFlakyBulkApiModel.md)
 - [TestitApiClient.AutoTestIdModel](docs/AutoTestIdModel.md)
 - [TestitApiClient.AutoTestModel](docs/AutoTestModel.md)
 - [TestitApiClient.AutoTestModelV2GetModel](docs/AutoTestModelV2GetModel.md)
 - [TestitApiClient.AutoTestNamespaceApiResult](docs/AutoTestNamespaceApiResult.md)
 - [TestitApiClient.AutoTestNamespaceCountApiModel](docs/AutoTestNamespaceCountApiModel.md)
 - [TestitApiClient.AutoTestNamespacesCountResponse](docs/AutoTestNamespacesCountResponse.md)
 - [TestitApiClient.AutoTestOutcome](docs/AutoTestOutcome.md)
 - [TestitApiClient.AutoTestProjectSettingsApiModel](docs/AutoTestProjectSettingsApiModel.md)
 - [TestitApiClient.AutoTestProjectSettingsApiResult](docs/AutoTestProjectSettingsApiResult.md)
 - [TestitApiClient.AutoTestResultHistoryApiResult](docs/AutoTestResultHistoryApiResult.md)
 - [TestitApiClient.AutoTestResultHistorySelectApiModel](docs/AutoTestResultHistorySelectApiModel.md)
 - [TestitApiClient.AutoTestResultReasonShort](docs/AutoTestResultReasonShort.md)
 - [TestitApiClient.AutoTestResultReasonsCountItemModel](docs/AutoTestResultReasonsCountItemModel.md)
 - [TestitApiClient.AutoTestResultReasonsCountModel](docs/AutoTestResultReasonsCountModel.md)
 - [TestitApiClient.AutoTestResultsForTestRunModel](docs/AutoTestResultsForTestRunModel.md)
 - [TestitApiClient.AutoTestSearchApiModel](docs/AutoTestSearchApiModel.md)
 - [TestitApiClient.AutoTestSearchIncludeApiModel](docs/AutoTestSearchIncludeApiModel.md)
 - [TestitApiClient.AutoTestSelectApiModel](docs/AutoTestSelectApiModel.md)
 - [TestitApiClient.AutoTestSelectModel](docs/AutoTestSelectModel.md)
 - [TestitApiClient.AutoTestShortApiResult](docs/AutoTestShortApiResult.md)
 - [TestitApiClient.AutoTestStep](docs/AutoTestStep.md)
 - [TestitApiClient.AutoTestStepApiModel](docs/AutoTestStepApiModel.md)
 - [TestitApiClient.AutoTestStepApiResult](docs/AutoTestStepApiResult.md)
 - [TestitApiClient.AutoTestStepModel](docs/AutoTestStepModel.md)
 - [TestitApiClient.AutoTestStepResult](docs/AutoTestStepResult.md)
 - [TestitApiClient.AutoTestStepResultUpdateRequest](docs/AutoTestStepResultUpdateRequest.md)
 - [TestitApiClient.AutoTestStepResultsApiResult](docs/AutoTestStepResultsApiResult.md)
 - [TestitApiClient.AutoTestUpdateApiModel](docs/AutoTestUpdateApiModel.md)
 - [TestitApiClient.AutoTestWorkItemIdentifierApiResult](docs/AutoTestWorkItemIdentifierApiResult.md)
 - [TestitApiClient.AutoTestsExtractionModel](docs/AutoTestsExtractionModel.md)
 - [TestitApiClient.AutotestResultOutcome](docs/AutotestResultOutcome.md)
 - [TestitApiClient.AutotestResultReasonFilterModel](docs/AutotestResultReasonFilterModel.md)
 - [TestitApiClient.AutotestResultReasonShortGetModel](docs/AutotestResultReasonShortGetModel.md)
 - [TestitApiClient.AvailableFailureCategory](docs/AvailableFailureCategory.md)
 - [TestitApiClient.AvailableTestResultOutcome](docs/AvailableTestResultOutcome.md)
 - [TestitApiClient.BackgroundJobAttachmentModel](docs/BackgroundJobAttachmentModel.md)
 - [TestitApiClient.BackgroundJobFilterModel](docs/BackgroundJobFilterModel.md)
 - [TestitApiClient.BackgroundJobGetModel](docs/BackgroundJobGetModel.md)
 - [TestitApiClient.BackgroundJobState](docs/BackgroundJobState.md)
 - [TestitApiClient.BackgroundJobType](docs/BackgroundJobType.md)
 - [TestitApiClient.BooleanChangedFieldViewModel](docs/BooleanChangedFieldViewModel.md)
 - [TestitApiClient.BooleanNullableChangedFieldViewModel](docs/BooleanNullableChangedFieldViewModel.md)
 - [TestitApiClient.CollectionFilter](docs/CollectionFilter.md)
 - [TestitApiClient.CollectionOperator](docs/CollectionOperator.md)
 - [TestitApiClient.CompositeFilter](docs/CompositeFilter.md)
 - [TestitApiClient.ConfigurationByParametersModel](docs/ConfigurationByParametersModel.md)
 - [TestitApiClient.ConfigurationExtractionApiModel](docs/ConfigurationExtractionApiModel.md)
 - [TestitApiClient.ConfigurationExtractionModel](docs/ConfigurationExtractionModel.md)
 - [TestitApiClient.ConfigurationFilterApiModel](docs/ConfigurationFilterApiModel.md)
 - [TestitApiClient.ConfigurationFilterModel](docs/ConfigurationFilterModel.md)
 - [TestitApiClient.ConfigurationModel](docs/ConfigurationModel.md)
 - [TestitApiClient.ConfigurationPostModel](docs/ConfigurationPostModel.md)
 - [TestitApiClient.ConfigurationPutModel](docs/ConfigurationPutModel.md)
 - [TestitApiClient.ConfigurationSelectApiModel](docs/ConfigurationSelectApiModel.md)
 - [TestitApiClient.ConfigurationSelectModel](docs/ConfigurationSelectModel.md)
 - [TestitApiClient.ConfigurationShort](docs/ConfigurationShort.md)
 - [TestitApiClient.ConfigurationShortApiResult](docs/ConfigurationShortApiResult.md)
 - [TestitApiClient.ConfigurationShortModel](docs/ConfigurationShortModel.md)
 - [TestitApiClient.CreateDefectApiModel](docs/CreateDefectApiModel.md)
 - [TestitApiClient.CreateEmptyTestRunApiModel](docs/CreateEmptyTestRunApiModel.md)
 - [TestitApiClient.CreateFailureCategoryApiModel](docs/CreateFailureCategoryApiModel.md)
 - [TestitApiClient.CreateFailureClassRegexApiModel](docs/CreateFailureClassRegexApiModel.md)
 - [TestitApiClient.CreateLinkApiModel](docs/CreateLinkApiModel.md)
 - [TestitApiClient.CreateParameterApiModel](docs/CreateParameterApiModel.md)
 - [TestitApiClient.CreateProjectApiModel](docs/CreateProjectApiModel.md)
 - [TestitApiClient.CreateProjectFailureCategoryApiModel](docs/CreateProjectFailureCategoryApiModel.md)
 - [TestitApiClient.CreateStepApiModel](docs/CreateStepApiModel.md)
 - [TestitApiClient.CreateTagApiModel](docs/CreateTagApiModel.md)
 - [TestitApiClient.CreateTestPlanApiModel](docs/CreateTestPlanApiModel.md)
 - [TestitApiClient.CreateTestRunAndFillByAutoTestsApiModel](docs/CreateTestRunAndFillByAutoTestsApiModel.md)
 - [TestitApiClient.CreateTestRunAndFillByConfigurationsApiModel](docs/CreateTestRunAndFillByConfigurationsApiModel.md)
 - [TestitApiClient.CreateTestRunAndFillByWorkItemsApiModel](docs/CreateTestRunAndFillByWorkItemsApiModel.md)
 - [TestitApiClient.CreateTestStatusApiModel](docs/CreateTestStatusApiModel.md)
 - [TestitApiClient.CreateWorkItemApiModel](docs/CreateWorkItemApiModel.md)
 - [TestitApiClient.CreateWorkItemPreviewsApiModel](docs/CreateWorkItemPreviewsApiModel.md)
 - [TestitApiClient.CreateWorkflowApiModel](docs/CreateWorkflowApiModel.md)
 - [TestitApiClient.CustomAttributeApiResult](docs/CustomAttributeApiResult.md)
 - [TestitApiClient.CustomAttributeChangeModel](docs/CustomAttributeChangeModel.md)
 - [TestitApiClient.CustomAttributeGetModel](docs/CustomAttributeGetModel.md)
 - [TestitApiClient.CustomAttributeModel](docs/CustomAttributeModel.md)
 - [TestitApiClient.CustomAttributeOptionApiResult](docs/CustomAttributeOptionApiResult.md)
 - [TestitApiClient.CustomAttributeOptionModel](docs/CustomAttributeOptionModel.md)
 - [TestitApiClient.CustomAttributeOptionPostModel](docs/CustomAttributeOptionPostModel.md)
 - [TestitApiClient.CustomAttributePostModel](docs/CustomAttributePostModel.md)
 - [TestitApiClient.CustomAttributePutModel](docs/CustomAttributePutModel.md)
 - [TestitApiClient.CustomAttributeSearchQueryModel](docs/CustomAttributeSearchQueryModel.md)
 - [TestitApiClient.CustomAttributeSearchResponseModel](docs/CustomAttributeSearchResponseModel.md)
 - [TestitApiClient.CustomAttributeTemplateModel](docs/CustomAttributeTemplateModel.md)
 - [TestitApiClient.CustomAttributeTemplatePostModel](docs/CustomAttributeTemplatePostModel.md)
 - [TestitApiClient.CustomAttributeTemplatePutModel](docs/CustomAttributeTemplatePutModel.md)
 - [TestitApiClient.CustomAttributeTemplateSearchQueryModel](docs/CustomAttributeTemplateSearchQueryModel.md)
 - [TestitApiClient.CustomAttributeTemplateValidationResult](docs/CustomAttributeTemplateValidationResult.md)
 - [TestitApiClient.CustomAttributeTestPlanProjectRelationPutModel](docs/CustomAttributeTestPlanProjectRelationPutModel.md)
 - [TestitApiClient.CustomAttributeType](docs/CustomAttributeType.md)
 - [TestitApiClient.CustomAttributeTypesEnum](docs/CustomAttributeTypesEnum.md)
 - [TestitApiClient.CustomAttributeValidationResult](docs/CustomAttributeValidationResult.md)
 - [TestitApiClient.DateTimeRangeSelectorModel](docs/DateTimeRangeSelectorModel.md)
 - [TestitApiClient.DefectApiModel](docs/DefectApiModel.md)
 - [TestitApiClient.DeletionState](docs/DeletionState.md)
 - [TestitApiClient.DemoProjectApiResult](docs/DemoProjectApiResult.md)
 - [TestitApiClient.EnableProjectExternalServiceApiModel](docs/EnableProjectExternalServiceApiModel.md)
 - [TestitApiClient.ExternalFormAllowedValueModel](docs/ExternalFormAllowedValueModel.md)
 - [TestitApiClient.ExternalFormCreateModel](docs/ExternalFormCreateModel.md)
 - [TestitApiClient.ExternalFormFieldModel](docs/ExternalFormFieldModel.md)
 - [TestitApiClient.ExternalFormLinkModel](docs/ExternalFormLinkModel.md)
 - [TestitApiClient.ExternalFormModel](docs/ExternalFormModel.md)
 - [TestitApiClient.ExternalIssueApiField](docs/ExternalIssueApiField.md)
 - [TestitApiClient.ExternalIssueApiFieldSuggestion](docs/ExternalIssueApiFieldSuggestion.md)
 - [TestitApiClient.ExternalIssueApiFieldSuggestionReply](docs/ExternalIssueApiFieldSuggestionReply.md)
 - [TestitApiClient.ExternalIssueApiMetadata](docs/ExternalIssueApiMetadata.md)
 - [TestitApiClient.ExternalIssueApiPriority](docs/ExternalIssueApiPriority.md)
 - [TestitApiClient.ExternalIssueApiResult](docs/ExternalIssueApiResult.md)
 - [TestitApiClient.ExternalIssueApiType](docs/ExternalIssueApiType.md)
 - [TestitApiClient.ExternalIssueExternalServiceApiResult](docs/ExternalIssueExternalServiceApiResult.md)
 - [TestitApiClient.ExternalIssueMetadataModel](docs/ExternalIssueMetadataModel.md)
 - [TestitApiClient.ExternalIssueModel](docs/ExternalIssueModel.md)
 - [TestitApiClient.ExternalIssuePriorityModel](docs/ExternalIssuePriorityModel.md)
 - [TestitApiClient.ExternalIssueTypeModel](docs/ExternalIssueTypeModel.md)
 - [TestitApiClient.ExternalLinkModel](docs/ExternalLinkModel.md)
 - [TestitApiClient.ExternalServiceMetadataApiResult](docs/ExternalServiceMetadataApiResult.md)
 - [TestitApiClient.ExternalServicesMetadataApiResult](docs/ExternalServicesMetadataApiResult.md)
 - [TestitApiClient.FailureCategory](docs/FailureCategory.md)
 - [TestitApiClient.FailureCategoryApiResult](docs/FailureCategoryApiResult.md)
 - [TestitApiClient.FailureCategoryGroupApiModel](docs/FailureCategoryGroupApiModel.md)
 - [TestitApiClient.FailureCategoryGroupApiResult](docs/FailureCategoryGroupApiResult.md)
 - [TestitApiClient.FailureCategoryGroupItemApiResult](docs/FailureCategoryGroupItemApiResult.md)
 - [TestitApiClient.FailureCategoryGroupItemApiResultReply](docs/FailureCategoryGroupItemApiResultReply.md)
 - [TestitApiClient.FailureCategoryGroupSearchApiModel](docs/FailureCategoryGroupSearchApiModel.md)
 - [TestitApiClient.FailureCategoryItemApiResult](docs/FailureCategoryItemApiResult.md)
 - [TestitApiClient.FailureCategoryModel](docs/FailureCategoryModel.md)
 - [TestitApiClient.FailureClassRegexApiResult](docs/FailureClassRegexApiResult.md)
 - [TestitApiClient.Filter](docs/Filter.md)
 - [TestitApiClient.FilterModel](docs/FilterModel.md)
 - [TestitApiClient.FilterOperator](docs/FilterOperator.md)
 - [TestitApiClient.GenerateWorkItemPreviewsApiModel](docs/GenerateWorkItemPreviewsApiModel.md)
 - [TestitApiClient.GenerateWorkItemPreviewsApiResult](docs/GenerateWorkItemPreviewsApiResult.md)
 - [TestitApiClient.GetAIServiceModelsApiModel](docs/GetAIServiceModelsApiModel.md)
 - [TestitApiClient.GetExternalFormApiResult](docs/GetExternalFormApiResult.md)
 - [TestitApiClient.GetExternalIssueSuggestionsApiModel](docs/GetExternalIssueSuggestionsApiModel.md)
 - [TestitApiClient.GetShortProjectsApiModel](docs/GetShortProjectsApiModel.md)
 - [TestitApiClient.GetXlsxTestPointsByTestPlanModel](docs/GetXlsxTestPointsByTestPlanModel.md)
 - [TestitApiClient.GlobalCustomAttributePostModel](docs/GlobalCustomAttributePostModel.md)
 - [TestitApiClient.GlobalCustomAttributeUpdateModel](docs/GlobalCustomAttributeUpdateModel.md)
 - [TestitApiClient.GlobalSearchItemResult](docs/GlobalSearchItemResult.md)
 - [TestitApiClient.GlobalSearchRequest](docs/GlobalSearchRequest.md)
 - [TestitApiClient.GlobalSearchResponse](docs/GlobalSearchResponse.md)
 - [TestitApiClient.GuidChangedFieldViewModel](docs/GuidChangedFieldViewModel.md)
 - [TestitApiClient.GuidExtractionModel](docs/GuidExtractionModel.md)
 - [TestitApiClient.IFilter](docs/IFilter.md)
 - [TestitApiClient.ImageResizeType](docs/ImageResizeType.md)
 - [TestitApiClient.Inquiry](docs/Inquiry.md)
 - [TestitApiClient.Int32ChangedFieldViewModel](docs/Int32ChangedFieldViewModel.md)
 - [TestitApiClient.Int32RangeSelectorModel](docs/Int32RangeSelectorModel.md)
 - [TestitApiClient.Int64ChangedFieldViewModel](docs/Int64ChangedFieldViewModel.md)
 - [TestitApiClient.Int64RangeSelectorModel](docs/Int64RangeSelectorModel.md)
 - [TestitApiClient.IterationApiResult](docs/IterationApiResult.md)
 - [TestitApiClient.IterationModel](docs/IterationModel.md)
 - [TestitApiClient.Label](docs/Label.md)
 - [TestitApiClient.LabelApiModel](docs/LabelApiModel.md)
 - [TestitApiClient.LabelApiResult](docs/LabelApiResult.md)
 - [TestitApiClient.LabelShortModel](docs/LabelShortModel.md)
 - [TestitApiClient.LastTestResultApiResult](docs/LastTestResultApiResult.md)
 - [TestitApiClient.LastTestResultModel](docs/LastTestResultModel.md)
 - [TestitApiClient.Link](docs/Link.md)
 - [TestitApiClient.LinkApiResult](docs/LinkApiResult.md)
 - [TestitApiClient.LinkCreateApiModel](docs/LinkCreateApiModel.md)
 - [TestitApiClient.LinkModel](docs/LinkModel.md)
 - [TestitApiClient.LinkPostModel](docs/LinkPostModel.md)
 - [TestitApiClient.LinkPutModel](docs/LinkPutModel.md)
 - [TestitApiClient.LinkShort](docs/LinkShort.md)
 - [TestitApiClient.LinkShortApiResult](docs/LinkShortApiResult.md)
 - [TestitApiClient.LinkShortModel](docs/LinkShortModel.md)
 - [TestitApiClient.LinkType](docs/LinkType.md)
 - [TestitApiClient.LinkUpdateApiModel](docs/LinkUpdateApiModel.md)
 - [TestitApiClient.ListSortDirection](docs/ListSortDirection.md)
 - [TestitApiClient.LogicalOperator](docs/LogicalOperator.md)
 - [TestitApiClient.ManualRerunApiResult](docs/ManualRerunApiResult.md)
 - [TestitApiClient.ManualRerunSelectTestResultsApiModel](docs/ManualRerunSelectTestResultsApiModel.md)
 - [TestitApiClient.ManualRerunTestResultApiModel](docs/ManualRerunTestResultApiModel.md)
 - [TestitApiClient.NamedEntityApiModel](docs/NamedEntityApiModel.md)
 - [TestitApiClient.NotificationModel](docs/NotificationModel.md)
 - [TestitApiClient.NotificationQueryFilterModel](docs/NotificationQueryFilterModel.md)
 - [TestitApiClient.NotificationTypeModel](docs/NotificationTypeModel.md)
 - [TestitApiClient.Operation](docs/Operation.md)
 - [TestitApiClient.Order](docs/Order.md)
 - [TestitApiClient.Page](docs/Page.md)
 - [TestitApiClient.ParameterApiResult](docs/ParameterApiResult.md)
 - [TestitApiClient.ParameterGroupApiResult](docs/ParameterGroupApiResult.md)
 - [TestitApiClient.ParameterGroupsFilterApiModel](docs/ParameterGroupsFilterApiModel.md)
 - [TestitApiClient.ParameterIterationModel](docs/ParameterIterationModel.md)
 - [TestitApiClient.ParameterShortApiResult](docs/ParameterShortApiResult.md)
 - [TestitApiClient.ParameterShortModel](docs/ParameterShortModel.md)
 - [TestitApiClient.ParametersFilterApiModel](docs/ParametersFilterApiModel.md)
 - [TestitApiClient.PeriodViewModel](docs/PeriodViewModel.md)
 - [TestitApiClient.PeriodViewModelChangedFieldViewModel](docs/PeriodViewModelChangedFieldViewModel.md)
 - [TestitApiClient.PreviewsIssueLinkApiModel](docs/PreviewsIssueLinkApiModel.md)
 - [TestitApiClient.PreviewsIssueLinkApiResult](docs/PreviewsIssueLinkApiResult.md)
 - [TestitApiClient.ProblemDetails](docs/ProblemDetails.md)
 - [TestitApiClient.ProjectApiResult](docs/ProjectApiResult.md)
 - [TestitApiClient.ProjectAttributesFilterModel](docs/ProjectAttributesFilterModel.md)
 - [TestitApiClient.ProjectCustomAttributeTemplateGetModel](docs/ProjectCustomAttributeTemplateGetModel.md)
 - [TestitApiClient.ProjectCustomAttributesTemplatesFilterModel](docs/ProjectCustomAttributesTemplatesFilterModel.md)
 - [TestitApiClient.ProjectDetailedFailureCategoryApiResult](docs/ProjectDetailedFailureCategoryApiResult.md)
 - [TestitApiClient.ProjectExternalServiceApiResult](docs/ProjectExternalServiceApiResult.md)
 - [TestitApiClient.ProjectExternalServiceSettingsApiResult](docs/ProjectExternalServiceSettingsApiResult.md)
 - [TestitApiClient.ProjectExternalServicesApiResult](docs/ProjectExternalServicesApiResult.md)
 - [TestitApiClient.ProjectExtractionModel](docs/ProjectExtractionModel.md)
 - [TestitApiClient.ProjectFailureCategoryApiResult](docs/ProjectFailureCategoryApiResult.md)
 - [TestitApiClient.ProjectFailureCategoryGroupItemApiResult](docs/ProjectFailureCategoryGroupItemApiResult.md)
 - [TestitApiClient.ProjectFailureCategoryGroupItemApiResultReply](docs/ProjectFailureCategoryGroupItemApiResultReply.md)
 - [TestitApiClient.ProjectModel](docs/ProjectModel.md)
 - [TestitApiClient.ProjectNameApiResult](docs/ProjectNameApiResult.md)
 - [TestitApiClient.ProjectSelectModel](docs/ProjectSelectModel.md)
 - [TestitApiClient.ProjectShortApiResult](docs/ProjectShortApiResult.md)
 - [TestitApiClient.ProjectShortApiResultReply](docs/ProjectShortApiResultReply.md)
 - [TestitApiClient.ProjectShortModel](docs/ProjectShortModel.md)
 - [TestitApiClient.ProjectShortestModel](docs/ProjectShortestModel.md)
 - [TestitApiClient.ProjectTestPlansFilterModel](docs/ProjectTestPlansFilterModel.md)
 - [TestitApiClient.ProjectType](docs/ProjectType.md)
 - [TestitApiClient.ProjectTypeModel](docs/ProjectTypeModel.md)
 - [TestitApiClient.ProjectsFilterModel](docs/ProjectsFilterModel.md)
 - [TestitApiClient.ReplaceProjectExternalServiceApiModel](docs/ReplaceProjectExternalServiceApiModel.md)
 - [TestitApiClient.RequestType](docs/RequestType.md)
 - [TestitApiClient.RequestTypeApiModel](docs/RequestTypeApiModel.md)
 - [TestitApiClient.RequestTypeModel](docs/RequestTypeModel.md)
 - [TestitApiClient.RerunTestResultApiResult](docs/RerunTestResultApiResult.md)
 - [TestitApiClient.RerunTestResultModel](docs/RerunTestResultModel.md)
 - [TestitApiClient.RerunsModel](docs/RerunsModel.md)
 - [TestitApiClient.SearchCustomAttributeTemplateGetModel](docs/SearchCustomAttributeTemplateGetModel.md)
 - [TestitApiClient.SearchExternalIssuesApiModel](docs/SearchExternalIssuesApiModel.md)
 - [TestitApiClient.SearchTestRunsApiModel](docs/SearchTestRunsApiModel.md)
 - [TestitApiClient.SearchTestStatusesApiModel](docs/SearchTestStatusesApiModel.md)
 - [TestitApiClient.SearchWebhooksQueryModel](docs/SearchWebhooksQueryModel.md)
 - [TestitApiClient.SearchWorkItemLinkUrlsApiResult](docs/SearchWorkItemLinkUrlsApiResult.md)
 - [TestitApiClient.SearchWorkflowProjectsApiModel](docs/SearchWorkflowProjectsApiModel.md)
 - [TestitApiClient.SearchWorkflowsApiModel](docs/SearchWorkflowsApiModel.md)
 - [TestitApiClient.SectionModel](docs/SectionModel.md)
 - [TestitApiClient.SectionMoveModel](docs/SectionMoveModel.md)
 - [TestitApiClient.SectionPostModel](docs/SectionPostModel.md)
 - [TestitApiClient.SectionPutModel](docs/SectionPutModel.md)
 - [TestitApiClient.SectionRenameModel](docs/SectionRenameModel.md)
 - [TestitApiClient.SectionWithStepsModel](docs/SectionWithStepsModel.md)
 - [TestitApiClient.SelectTagsApiModel](docs/SelectTagsApiModel.md)
 - [TestitApiClient.SharedStepChangeViewModel](docs/SharedStepChangeViewModel.md)
 - [TestitApiClient.SharedStepModel](docs/SharedStepModel.md)
 - [TestitApiClient.SharedStepReferenceModel](docs/SharedStepReferenceModel.md)
 - [TestitApiClient.SharedStepReferenceSectionModel](docs/SharedStepReferenceSectionModel.md)
 - [TestitApiClient.SharedStepReferenceSectionsQueryFilterModel](docs/SharedStepReferenceSectionsQueryFilterModel.md)
 - [TestitApiClient.SharedStepReferencesQueryFilterModel](docs/SharedStepReferencesQueryFilterModel.md)
 - [TestitApiClient.SharedStepResultApiModel](docs/SharedStepResultApiModel.md)
 - [TestitApiClient.ShortConfiguration](docs/ShortConfiguration.md)
 - [TestitApiClient.StepCommentApiModel](docs/StepCommentApiModel.md)
 - [TestitApiClient.StepModel](docs/StepModel.md)
 - [TestitApiClient.StepPostModel](docs/StepPostModel.md)
 - [TestitApiClient.StepPutModel](docs/StepPutModel.md)
 - [TestitApiClient.StepResultApiModel](docs/StepResultApiModel.md)
 - [TestitApiClient.StringArrayChangedFieldViewModel](docs/StringArrayChangedFieldViewModel.md)
 - [TestitApiClient.StringChangedFieldViewModel](docs/StringChangedFieldViewModel.md)
 - [TestitApiClient.StringChangedFieldWithDiffsViewModel](docs/StringChangedFieldWithDiffsViewModel.md)
 - [TestitApiClient.StringExtractionModel](docs/StringExtractionModel.md)
 - [TestitApiClient.TagApiModel](docs/TagApiModel.md)
 - [TestitApiClient.TagApiResult](docs/TagApiResult.md)
 - [TestitApiClient.TagModel](docs/TagModel.md)
 - [TestitApiClient.TagShortApiResult](docs/TagShortApiResult.md)
 - [TestitApiClient.TagsExtractionApiModel](docs/TagsExtractionApiModel.md)
 - [TestitApiClient.TagsFilterApiModel](docs/TagsFilterApiModel.md)
 - [TestitApiClient.TestPlanApiResult](docs/TestPlanApiResult.md)
 - [TestitApiClient.TestPlanChangeModel](docs/TestPlanChangeModel.md)
 - [TestitApiClient.TestPlanChangedFieldsViewModel](docs/TestPlanChangedFieldsViewModel.md)
 - [TestitApiClient.TestPlanExtractionModel](docs/TestPlanExtractionModel.md)
 - [TestitApiClient.TestPlanGroupByStatus](docs/TestPlanGroupByStatus.md)
 - [TestitApiClient.TestPlanGroupByStatusCode](docs/TestPlanGroupByStatusCode.md)
 - [TestitApiClient.TestPlanGroupByStatusType](docs/TestPlanGroupByStatusType.md)
 - [TestitApiClient.TestPlanGroupByTestSuite](docs/TestPlanGroupByTestSuite.md)
 - [TestitApiClient.TestPlanGroupByTester](docs/TestPlanGroupByTester.md)
 - [TestitApiClient.TestPlanGroupByTesterAndStatus](docs/TestPlanGroupByTesterAndStatus.md)
 - [TestitApiClient.TestPlanGroupByTesterAndStatusCode](docs/TestPlanGroupByTesterAndStatusCode.md)
 - [TestitApiClient.TestPlanLink](docs/TestPlanLink.md)
 - [TestitApiClient.TestPlanModel](docs/TestPlanModel.md)
 - [TestitApiClient.TestPlanSelectModel](docs/TestPlanSelectModel.md)
 - [TestitApiClient.TestPlanShortModel](docs/TestPlanShortModel.md)
 - [TestitApiClient.TestPlanStatus](docs/TestPlanStatus.md)
 - [TestitApiClient.TestPlanStatusModel](docs/TestPlanStatusModel.md)
 - [TestitApiClient.TestPlanSummaryModel](docs/TestPlanSummaryModel.md)
 - [TestitApiClient.TestPlanTagApiResult](docs/TestPlanTagApiResult.md)
 - [TestitApiClient.TestPlanTestPointsAnalyticsApiModel](docs/TestPlanTestPointsAnalyticsApiModel.md)
 - [TestitApiClient.TestPlanTestPointsAnalyticsApiResult](docs/TestPlanTestPointsAnalyticsApiResult.md)
 - [TestitApiClient.TestPlanTestPointsApiModel](docs/TestPlanTestPointsApiModel.md)
 - [TestitApiClient.TestPlanTestPointsAutoTestsRerunApiModel](docs/TestPlanTestPointsAutoTestsRerunApiModel.md)
 - [TestitApiClient.TestPlanTestPointsAutoTestsRunApiModel](docs/TestPlanTestPointsAutoTestsRunApiModel.md)
 - [TestitApiClient.TestPlanTestPointsExtractionApiModel](docs/TestPlanTestPointsExtractionApiModel.md)
 - [TestitApiClient.TestPlanTestPointsGroupApiModel](docs/TestPlanTestPointsGroupApiModel.md)
 - [TestitApiClient.TestPlanTestPointsGroupApiResult](docs/TestPlanTestPointsGroupApiResult.md)
 - [TestitApiClient.TestPlanTestPointsGroupSearchApiResult](docs/TestPlanTestPointsGroupSearchApiResult.md)
 - [TestitApiClient.TestPlanTestPointsGroupSearchItemApiResult](docs/TestPlanTestPointsGroupSearchItemApiResult.md)
 - [TestitApiClient.TestPlanTestPointsInquiryApiModel](docs/TestPlanTestPointsInquiryApiModel.md)
 - [TestitApiClient.TestPlanTestPointsSearchApiModel](docs/TestPlanTestPointsSearchApiModel.md)
 - [TestitApiClient.TestPlanTestPointsSearchApiResult](docs/TestPlanTestPointsSearchApiResult.md)
 - [TestitApiClient.TestPlanTestPointsSearchStatusCountersApiResult](docs/TestPlanTestPointsSearchStatusCountersApiResult.md)
 - [TestitApiClient.TestPlanTestPointsSectionSearchApiResult](docs/TestPlanTestPointsSectionSearchApiResult.md)
 - [TestitApiClient.TestPlanTestPointsSetTestersApiModel](docs/TestPlanTestPointsSetTestersApiModel.md)
 - [TestitApiClient.TestPlanTestPointsStatusCodeGroupApiResult](docs/TestPlanTestPointsStatusCodeGroupApiResult.md)
 - [TestitApiClient.TestPlanTestPointsStatusGroupApiResult](docs/TestPlanTestPointsStatusGroupApiResult.md)
 - [TestitApiClient.TestPlanTestPointsStatusTypeGroupApiResult](docs/TestPlanTestPointsStatusTypeGroupApiResult.md)
 - [TestitApiClient.TestPlanTestPointsTestSuiteSearchApiResult](docs/TestPlanTestPointsTestSuiteSearchApiResult.md)
 - [TestitApiClient.TestPlanTestPointsTesterAndStatusGroupApiResult](docs/TestPlanTestPointsTesterAndStatusGroupApiResult.md)
 - [TestitApiClient.TestPlanTestPointsTesterAndStatusTypeGroupApiResult](docs/TestPlanTestPointsTesterAndStatusTypeGroupApiResult.md)
 - [TestitApiClient.TestPlanTestPointsTesterGroupApiResult](docs/TestPlanTestPointsTesterGroupApiResult.md)
 - [TestitApiClient.TestPlanTestPointsWorkItemSearchApiResult](docs/TestPlanTestPointsWorkItemSearchApiResult.md)
 - [TestitApiClient.TestPlanWithAnalyticModel](docs/TestPlanWithAnalyticModel.md)
 - [TestitApiClient.TestPlanWithTestSuiteTreeModel](docs/TestPlanWithTestSuiteTreeModel.md)
 - [TestitApiClient.TestPoint](docs/TestPoint.md)
 - [TestitApiClient.TestPointAnalyticResult](docs/TestPointAnalyticResult.md)
 - [TestitApiClient.TestPointByTestSuiteModel](docs/TestPointByTestSuiteModel.md)
 - [TestitApiClient.TestPointChangeViewModel](docs/TestPointChangeViewModel.md)
 - [TestitApiClient.TestPointChangeViewModelChangedFieldViewModel](docs/TestPointChangeViewModelChangedFieldViewModel.md)
 - [TestitApiClient.TestPointFilterModel](docs/TestPointFilterModel.md)
 - [TestitApiClient.TestPointFilterRequestModel](docs/TestPointFilterRequestModel.md)
 - [TestitApiClient.TestPointResultApiResult](docs/TestPointResultApiResult.md)
 - [TestitApiClient.TestPointSelectModel](docs/TestPointSelectModel.md)
 - [TestitApiClient.TestPointSelector](docs/TestPointSelector.md)
 - [TestitApiClient.TestPointShortApiResult](docs/TestPointShortApiResult.md)
 - [TestitApiClient.TestPointShortModel](docs/TestPointShortModel.md)
 - [TestitApiClient.TestPointShortResponseModel](docs/TestPointShortResponseModel.md)
 - [TestitApiClient.TestPointStatus](docs/TestPointStatus.md)
 - [TestitApiClient.TestPointWithLastResultResponseModel](docs/TestPointWithLastResultResponseModel.md)
 - [TestitApiClient.TestPointsExtractionModel](docs/TestPointsExtractionModel.md)
 - [TestitApiClient.TestResultApiResult](docs/TestResultApiResult.md)
 - [TestitApiClient.TestResultChangeViewModel](docs/TestResultChangeViewModel.md)
 - [TestitApiClient.TestResultChangeViewModelChangedFieldViewModel](docs/TestResultChangeViewModelChangedFieldViewModel.md)
 - [TestitApiClient.TestResultChronologyModel](docs/TestResultChronologyModel.md)
 - [TestitApiClient.TestResultFailureClassApiResult](docs/TestResultFailureClassApiResult.md)
 - [TestitApiClient.TestResultHistoryReportApiResult](docs/TestResultHistoryReportApiResult.md)
 - [TestitApiClient.TestResultOutcome](docs/TestResultOutcome.md)
 - [TestitApiClient.TestResultResponse](docs/TestResultResponse.md)
 - [TestitApiClient.TestResultShortApiResult](docs/TestResultShortApiResult.md)
 - [TestitApiClient.TestResultShortResponse](docs/TestResultShortResponse.md)
 - [TestitApiClient.TestResultStepCommentUpdateRequest](docs/TestResultStepCommentUpdateRequest.md)
 - [TestitApiClient.TestResultUpdateV2Request](docs/TestResultUpdateV2Request.md)
 - [TestitApiClient.TestResultV2GetModel](docs/TestResultV2GetModel.md)
 - [TestitApiClient.TestResultV2ShortModel](docs/TestResultV2ShortModel.md)
 - [TestitApiClient.TestResultsExtractionApiModel](docs/TestResultsExtractionApiModel.md)
 - [TestitApiClient.TestResultsFilterApiModel](docs/TestResultsFilterApiModel.md)
 - [TestitApiClient.TestResultsLocalFilterModel](docs/TestResultsLocalFilterModel.md)
 - [TestitApiClient.TestResultsSelectApiModel](docs/TestResultsSelectApiModel.md)
 - [TestitApiClient.TestResultsStatisticsApiResult](docs/TestResultsStatisticsApiResult.md)
 - [TestitApiClient.TestResultsStatisticsFailureCategoriesApiResult](docs/TestResultsStatisticsFailureCategoriesApiResult.md)
 - [TestitApiClient.TestResultsStatisticsStatusesApiResult](docs/TestResultsStatisticsStatusesApiResult.md)
 - [TestitApiClient.TestRunAnalyticApiResult](docs/TestRunAnalyticApiResult.md)
 - [TestitApiClient.TestRunApiResult](docs/TestRunApiResult.md)
 - [TestitApiClient.TestRunByAutoTestApiResult](docs/TestRunByAutoTestApiResult.md)
 - [TestitApiClient.TestRunExtractionApiModel](docs/TestRunExtractionApiModel.md)
 - [TestitApiClient.TestRunFilterApiModel](docs/TestRunFilterApiModel.md)
 - [TestitApiClient.TestRunGroupByFailureClassApiResult](docs/TestRunGroupByFailureClassApiResult.md)
 - [TestitApiClient.TestRunGroupByStatusApiResult](docs/TestRunGroupByStatusApiResult.md)
 - [TestitApiClient.TestRunGroupByStatusTypeApiResult](docs/TestRunGroupByStatusTypeApiResult.md)
 - [TestitApiClient.TestRunNameApiResult](docs/TestRunNameApiResult.md)
 - [TestitApiClient.TestRunSelectApiModel](docs/TestRunSelectApiModel.md)
 - [TestitApiClient.TestRunShortApiResult](docs/TestRunShortApiResult.md)
 - [TestitApiClient.TestRunState](docs/TestRunState.md)
 - [TestitApiClient.TestRunStatisticsFilterApiModel](docs/TestRunStatisticsFilterApiModel.md)
 - [TestitApiClient.TestRunTestResultsPartialBulkSetModel](docs/TestRunTestResultsPartialBulkSetModel.md)
 - [TestitApiClient.TestRunTestResultsSelectModel](docs/TestRunTestResultsSelectModel.md)
 - [TestitApiClient.TestRunV2ApiResult](docs/TestRunV2ApiResult.md)
 - [TestitApiClient.TestStatusApiResult](docs/TestStatusApiResult.md)
 - [TestitApiClient.TestStatusApiResultReply](docs/TestStatusApiResultReply.md)
 - [TestitApiClient.TestStatusApiType](docs/TestStatusApiType.md)
 - [TestitApiClient.TestStatusModel](docs/TestStatusModel.md)
 - [TestitApiClient.TestStatusShortApiResult](docs/TestStatusShortApiResult.md)
 - [TestitApiClient.TestStatusType](docs/TestStatusType.md)
 - [TestitApiClient.TestSuiteApiResult](docs/TestSuiteApiResult.md)
 - [TestitApiClient.TestSuiteChangeViewModel](docs/TestSuiteChangeViewModel.md)
 - [TestitApiClient.TestSuiteChangeViewModelChangedFieldViewModel](docs/TestSuiteChangeViewModelChangedFieldViewModel.md)
 - [TestitApiClient.TestSuiteHierarchyApiResult](docs/TestSuiteHierarchyApiResult.md)
 - [TestitApiClient.TestSuiteTestPlanApiModel](docs/TestSuiteTestPlanApiModel.md)
 - [TestitApiClient.TestSuiteType](docs/TestSuiteType.md)
 - [TestitApiClient.TestSuiteTypeApiResult](docs/TestSuiteTypeApiResult.md)
 - [TestitApiClient.TestSuiteV2GetModel](docs/TestSuiteV2GetModel.md)
 - [TestitApiClient.TestSuiteV2PostModel](docs/TestSuiteV2PostModel.md)
 - [TestitApiClient.TestSuiteV2PutModel](docs/TestSuiteV2PutModel.md)
 - [TestitApiClient.TestSuiteWithChildrenModel](docs/TestSuiteWithChildrenModel.md)
 - [TestitApiClient.TestSuiteWorkItemsSearchModel](docs/TestSuiteWorkItemsSearchModel.md)
 - [TestitApiClient.UpdateEmptyTestRunApiModel](docs/UpdateEmptyTestRunApiModel.md)
 - [TestitApiClient.UpdateFailureCategoryApiModel](docs/UpdateFailureCategoryApiModel.md)
 - [TestitApiClient.UpdateFailureCategoryProjectApiModel](docs/UpdateFailureCategoryProjectApiModel.md)
 - [TestitApiClient.UpdateFailureClassRegexApiModel](docs/UpdateFailureClassRegexApiModel.md)
 - [TestitApiClient.UpdateLinkApiModel](docs/UpdateLinkApiModel.md)
 - [TestitApiClient.UpdateMultipleAttachmentsApiModel](docs/UpdateMultipleAttachmentsApiModel.md)
 - [TestitApiClient.UpdateMultipleLinksApiModel](docs/UpdateMultipleLinksApiModel.md)
 - [TestitApiClient.UpdateMultipleTestRunsApiModel](docs/UpdateMultipleTestRunsApiModel.md)
 - [TestitApiClient.UpdateParameterApiModel](docs/UpdateParameterApiModel.md)
 - [TestitApiClient.UpdateProjectApiModel](docs/UpdateProjectApiModel.md)
 - [TestitApiClient.UpdateStepApiModel](docs/UpdateStepApiModel.md)
 - [TestitApiClient.UpdateTagApiModel](docs/UpdateTagApiModel.md)
 - [TestitApiClient.UpdateTestPlanApiModel](docs/UpdateTestPlanApiModel.md)
 - [TestitApiClient.UpdateTestStatusApiModel](docs/UpdateTestStatusApiModel.md)
 - [TestitApiClient.UpdateWorkItemApiModel](docs/UpdateWorkItemApiModel.md)
 - [TestitApiClient.UpdateWorkflowApiModel](docs/UpdateWorkflowApiModel.md)
 - [TestitApiClient.UserCustomNameValidationResponse](docs/UserCustomNameValidationResponse.md)
 - [TestitApiClient.UserNameApiResult](docs/UserNameApiResult.md)
 - [TestitApiClient.UserRankModel](docs/UserRankModel.md)
 - [TestitApiClient.UserWithRankModel](docs/UserWithRankModel.md)
 - [TestitApiClient.ValidationProblemDetails](docs/ValidationProblemDetails.md)
 - [TestitApiClient.WebHookEventType](docs/WebHookEventType.md)
 - [TestitApiClient.WebHookEventTypeModel](docs/WebHookEventTypeModel.md)
 - [TestitApiClient.WebHookEventTypeRequest](docs/WebHookEventTypeRequest.md)
 - [TestitApiClient.WebHookModel](docs/WebHookModel.md)
 - [TestitApiClient.WebHookPostModel](docs/WebHookPostModel.md)
 - [TestitApiClient.WebHookTestModel](docs/WebHookTestModel.md)
 - [TestitApiClient.WebhookBulkUpdateApiModel](docs/WebhookBulkUpdateApiModel.md)
 - [TestitApiClient.WebhookLogApiResult](docs/WebhookLogApiResult.md)
 - [TestitApiClient.WebhookResponse](docs/WebhookResponse.md)
 - [TestitApiClient.WebhookVariablesType](docs/WebhookVariablesType.md)
 - [TestitApiClient.WebhooksDeleteApiModel](docs/WebhooksDeleteApiModel.md)
 - [TestitApiClient.WebhooksDeleteFilterApiModel](docs/WebhooksDeleteFilterApiModel.md)
 - [TestitApiClient.WebhooksExtractionApiModel](docs/WebhooksExtractionApiModel.md)
 - [TestitApiClient.WebhooksFilterApiModel](docs/WebhooksFilterApiModel.md)
 - [TestitApiClient.WebhooksUpdateApiModel](docs/WebhooksUpdateApiModel.md)
 - [TestitApiClient.WebhooksUpdateApiResult](docs/WebhooksUpdateApiResult.md)
 - [TestitApiClient.WorkItemApiResult](docs/WorkItemApiResult.md)
 - [TestitApiClient.WorkItemChangeModel](docs/WorkItemChangeModel.md)
 - [TestitApiClient.WorkItemChangedAttributeViewModel](docs/WorkItemChangedAttributeViewModel.md)
 - [TestitApiClient.WorkItemChangedFieldsViewModel](docs/WorkItemChangedFieldsViewModel.md)
 - [TestitApiClient.WorkItemCommentModel](docs/WorkItemCommentModel.md)
 - [TestitApiClient.WorkItemCommentPostModel](docs/WorkItemCommentPostModel.md)
 - [TestitApiClient.WorkItemCommentPutModel](docs/WorkItemCommentPutModel.md)
 - [TestitApiClient.WorkItemEntityTypeApiModel](docs/WorkItemEntityTypeApiModel.md)
 - [TestitApiClient.WorkItemEntityTypes](docs/WorkItemEntityTypes.md)
 - [TestitApiClient.WorkItemExternalMetadataFieldFilterApiModel](docs/WorkItemExternalMetadataFieldFilterApiModel.md)
 - [TestitApiClient.WorkItemExternalMetadataFieldFilterModel](docs/WorkItemExternalMetadataFieldFilterModel.md)
 - [TestitApiClient.WorkItemExternalMetadataFilterApiModel](docs/WorkItemExternalMetadataFilterApiModel.md)
 - [TestitApiClient.WorkItemExternalMetadataFilterModel](docs/WorkItemExternalMetadataFilterModel.md)
 - [TestitApiClient.WorkItemExtractionApiModel](docs/WorkItemExtractionApiModel.md)
 - [TestitApiClient.WorkItemExtractionModel](docs/WorkItemExtractionModel.md)
 - [TestitApiClient.WorkItemFilterApiModel](docs/WorkItemFilterApiModel.md)
 - [TestitApiClient.WorkItemFilterModel](docs/WorkItemFilterModel.md)
 - [TestitApiClient.WorkItemGroupGetModel](docs/WorkItemGroupGetModel.md)
 - [TestitApiClient.WorkItemGroupModel](docs/WorkItemGroupModel.md)
 - [TestitApiClient.WorkItemGroupType](docs/WorkItemGroupType.md)
 - [TestitApiClient.WorkItemIdApiModel](docs/WorkItemIdApiModel.md)
 - [TestitApiClient.WorkItemIndexApiResult](docs/WorkItemIndexApiResult.md)
 - [TestitApiClient.WorkItemLikeModel](docs/WorkItemLikeModel.md)
 - [TestitApiClient.WorkItemLinkChangeViewModel](docs/WorkItemLinkChangeViewModel.md)
 - [TestitApiClient.WorkItemLinkChangeViewModelArrayChangedFieldViewModel](docs/WorkItemLinkChangeViewModelArrayChangedFieldViewModel.md)
 - [TestitApiClient.WorkItemLinkExtractionApiModel](docs/WorkItemLinkExtractionApiModel.md)
 - [TestitApiClient.WorkItemLinkFilterApiModel](docs/WorkItemLinkFilterApiModel.md)
 - [TestitApiClient.WorkItemLinkFilterModel](docs/WorkItemLinkFilterModel.md)
 - [TestitApiClient.WorkItemLinkUrlApiModel](docs/WorkItemLinkUrlApiModel.md)
 - [TestitApiClient.WorkItemLinkUrlApiResult](docs/WorkItemLinkUrlApiResult.md)
 - [TestitApiClient.WorkItemLinkUrlFilterApiModel](docs/WorkItemLinkUrlFilterApiModel.md)
 - [TestitApiClient.WorkItemLocalFilterModel](docs/WorkItemLocalFilterModel.md)
 - [TestitApiClient.WorkItemLocalSelectModel](docs/WorkItemLocalSelectModel.md)
 - [TestitApiClient.WorkItemModel](docs/WorkItemModel.md)
 - [TestitApiClient.WorkItemMovePostModel](docs/WorkItemMovePostModel.md)
 - [TestitApiClient.WorkItemPreviewApiModel](docs/WorkItemPreviewApiModel.md)
 - [TestitApiClient.WorkItemPreviewStepApiModel](docs/WorkItemPreviewStepApiModel.md)
 - [TestitApiClient.WorkItemPriority](docs/WorkItemPriority.md)
 - [TestitApiClient.WorkItemPriorityApiModel](docs/WorkItemPriorityApiModel.md)
 - [TestitApiClient.WorkItemPriorityModel](docs/WorkItemPriorityModel.md)
 - [TestitApiClient.WorkItemSearchQueryModel](docs/WorkItemSearchQueryModel.md)
 - [TestitApiClient.WorkItemSelectApiModel](docs/WorkItemSelectApiModel.md)
 - [TestitApiClient.WorkItemSelectModel](docs/WorkItemSelectModel.md)
 - [TestitApiClient.WorkItemShortApiResult](docs/WorkItemShortApiResult.md)
 - [TestitApiClient.WorkItemShortModel](docs/WorkItemShortModel.md)
 - [TestitApiClient.WorkItemSourceTypeApiModel](docs/WorkItemSourceTypeApiModel.md)
 - [TestitApiClient.WorkItemSourceTypeModel](docs/WorkItemSourceTypeModel.md)
 - [TestitApiClient.WorkItemState](docs/WorkItemState.md)
 - [TestitApiClient.WorkItemStateApiModel](docs/WorkItemStateApiModel.md)
 - [TestitApiClient.WorkItemStates](docs/WorkItemStates.md)
 - [TestitApiClient.WorkItemStepChangeViewModel](docs/WorkItemStepChangeViewModel.md)
 - [TestitApiClient.WorkItemStepChangeViewModelArrayChangedFieldWithDiffsViewModel](docs/WorkItemStepChangeViewModelArrayChangedFieldWithDiffsViewModel.md)
 - [TestitApiClient.WorkItemVersionModel](docs/WorkItemVersionModel.md)
 - [TestitApiClient.WorkflowApiResult](docs/WorkflowApiResult.md)
 - [TestitApiClient.WorkflowExistsByNameApiResult](docs/WorkflowExistsByNameApiResult.md)
 - [TestitApiClient.WorkflowProjectApiResult](docs/WorkflowProjectApiResult.md)
 - [TestitApiClient.WorkflowProjectApiResultApiCollectionPreview](docs/WorkflowProjectApiResultApiCollectionPreview.md)
 - [TestitApiClient.WorkflowProjectApiResultReply](docs/WorkflowProjectApiResultReply.md)
 - [TestitApiClient.WorkflowShortApiResult](docs/WorkflowShortApiResult.md)
 - [TestitApiClient.WorkflowShortApiResultReply](docs/WorkflowShortApiResultReply.md)
 - [TestitApiClient.WorkflowStatusApiModel](docs/WorkflowStatusApiModel.md)
 - [TestitApiClient.WorkflowStatusApiResult](docs/WorkflowStatusApiResult.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### Bearer or PrivateToken


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

