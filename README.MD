# Api client for Test IT TMS
![Test IT](https://raw.githubusercontent.com/testit-tms/api-client-js/master/images/banner.png)

## Getting Started

### Compatibility

| Test IT | API Client |
|---------|------------|
| 3.9     | 2.0        |
| 3.5     | 1.0        |

## Installation

```shell
npm install testit-api-client
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var testit_api_client = require('testit-api-client');

var defaultClient = testit_api_client.ApiClient.instance;
var PrivateToken = defaultClient.authentications['PrivateToken'];
PrivateToken.apiKey = "Your private token"

var api = new testit_api_client.AttachmentsApi()
var id = "Attachment's guid in the TMS";
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.apiV2AttachmentsIdDelete(id, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*testit_api_client.AttachmentsApi* | [**apiV2AttachmentsIdDelete**](docs/AttachmentsApi.md#apiV2AttachmentsIdDelete) | **DELETE** /api/v2/attachments/{id} | Delete attachment file
*testit_api_client.AttachmentsApi* | [**apiV2AttachmentsIdGet**](docs/AttachmentsApi.md#apiV2AttachmentsIdGet) | **GET** /api/v2/attachments/{id} | Download attachment file
*testit_api_client.AttachmentsApi* | [**apiV2AttachmentsOccupiedFileStorageSizeGet**](docs/AttachmentsApi.md#apiV2AttachmentsOccupiedFileStorageSizeGet) | **GET** /api/v2/attachments/occupiedFileStorageSize | 
*testit_api_client.AttachmentsApi* | [**apiV2AttachmentsPost**](docs/AttachmentsApi.md#apiV2AttachmentsPost) | **POST** /api/v2/attachments | Upload new attachment file
*testit_api_client.AutoTestsApi* | [**apiV2AutoTestsFlakyBulkPost**](docs/AutoTestsApi.md#apiV2AutoTestsFlakyBulkPost) | **POST** /api/v2/autoTests/flaky/bulk | Set \&quot;Flaky\&quot; status for multiple autotests
*testit_api_client.AutoTestsApi* | [**apiV2AutoTestsIdWorkItemsChangedIdGet**](docs/AutoTestsApi.md#apiV2AutoTestsIdWorkItemsChangedIdGet) | **GET** /api/v2/autoTests/{id}/workItems/changed/id | Get identifiers of changed linked work items
*testit_api_client.AutoTestsApi* | [**apiV2AutoTestsIdWorkItemsChangedWorkItemIdApprovePost**](docs/AutoTestsApi.md#apiV2AutoTestsIdWorkItemsChangedWorkItemIdApprovePost) | **POST** /api/v2/autoTests/{id}/workItems/changed/{workItemId}/approve | Approve changes to work items linked to autotest
*testit_api_client.AutoTestsApi* | [**createAutoTest**](docs/AutoTestsApi.md#createAutoTest) | **POST** /api/v2/autoTests | Create autotest
*testit_api_client.AutoTestsApi* | [**createMultiple**](docs/AutoTestsApi.md#createMultiple) | **POST** /api/v2/autoTests/bulk | Create multiple autotests
*testit_api_client.AutoTestsApi* | [**deleteAutoTest**](docs/AutoTestsApi.md#deleteAutoTest) | **DELETE** /api/v2/autoTests/{id} | Delete autotest
*testit_api_client.AutoTestsApi* | [**deleteAutoTestLinkFromWorkItem**](docs/AutoTestsApi.md#deleteAutoTestLinkFromWorkItem) | **DELETE** /api/v2/autoTests/{id}/workItems | Unlink autotest from work item
*testit_api_client.AutoTestsApi* | [**getAllAutoTests**](docs/AutoTestsApi.md#getAllAutoTests) | **GET** /api/v2/autoTests | Get all autotests
*testit_api_client.AutoTestsApi* | [**getAutoTestAverageDuration**](docs/AutoTestsApi.md#getAutoTestAverageDuration) | **GET** /api/v2/autoTests/{id}/averageDuration | Get average autotest duration
*testit_api_client.AutoTestsApi* | [**getAutoTestById**](docs/AutoTestsApi.md#getAutoTestById) | **GET** /api/v2/autoTests/{id} | Get autotest by internal or global ID
*testit_api_client.AutoTestsApi* | [**getAutoTestChronology**](docs/AutoTestsApi.md#getAutoTestChronology) | **GET** /api/v2/autoTests/{id}/chronology | Get autotest chronology
*testit_api_client.AutoTestsApi* | [**getTestRuns**](docs/AutoTestsApi.md#getTestRuns) | **GET** /api/v2/autoTests/{id}/testRuns | Get completed tests runs for autotests
*testit_api_client.AutoTestsApi* | [**getWorkItemResults**](docs/AutoTestsApi.md#getWorkItemResults) | **GET** /api/v2/autoTests/{id}/testResultHistory | Get test results history for autotest
*testit_api_client.AutoTestsApi* | [**getWorkItemsLinkedToAutoTest**](docs/AutoTestsApi.md#getWorkItemsLinkedToAutoTest) | **GET** /api/v2/autoTests/{id}/workItems | Get work items linked to autotest
*testit_api_client.AutoTestsApi* | [**linkAutoTestToWorkItem**](docs/AutoTestsApi.md#linkAutoTestToWorkItem) | **POST** /api/v2/autoTests/{id}/workItems | Link autotest with work items
*testit_api_client.AutoTestsApi* | [**updateAutoTest**](docs/AutoTestsApi.md#updateAutoTest) | **PUT** /api/v2/autoTests | Update autotest
*testit_api_client.AutoTestsApi* | [**updateMultiple**](docs/AutoTestsApi.md#updateMultiple) | **PUT** /api/v2/autoTests/bulk | Update multiple autotests
*testit_api_client.ConfigurationsApi* | [**apiV2ConfigurationsCreateByParametersPost**](docs/ConfigurationsApi.md#apiV2ConfigurationsCreateByParametersPost) | **POST** /api/v2/configurations/createByParameters | Create Configurations by parameters
*testit_api_client.ConfigurationsApi* | [**apiV2ConfigurationsSearchPost**](docs/ConfigurationsApi.md#apiV2ConfigurationsSearchPost) | **POST** /api/v2/configurations/search | Search for configurations
*testit_api_client.ConfigurationsApi* | [**createConfiguration**](docs/ConfigurationsApi.md#createConfiguration) | **POST** /api/v2/configurations | Create Configuration
*testit_api_client.ConfigurationsApi* | [**getConfigurationById**](docs/ConfigurationsApi.md#getConfigurationById) | **GET** /api/v2/configurations/{id} | Get configuration by internal or global ID
*testit_api_client.ConfigurationsApi* | [**updateConfiguration**](docs/ConfigurationsApi.md#updateConfiguration) | **PUT** /api/v2/configurations | Update Configuration
*testit_api_client.CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesIdCustomAttributesExcludePost**](docs/CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesIdCustomAttributesExcludePost) | **POST** /api/v2/customAttributes/templates/{id}/customAttributes/exclude | Exclude CustomAttributes from CustomAttributeTemplate
*testit_api_client.CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesIdCustomAttributesIncludePost**](docs/CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesIdCustomAttributesIncludePost) | **POST** /api/v2/customAttributes/templates/{id}/customAttributes/include | Include CustomAttributes to CustomAttributeTemplate
*testit_api_client.CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesIdDelete**](docs/CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesIdDelete) | **DELETE** /api/v2/customAttributes/templates/{id} | Delete CustomAttributeTemplate
*testit_api_client.CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesIdGet**](docs/CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesIdGet) | **GET** /api/v2/customAttributes/templates/{id} | Get CustomAttributeTemplate by ID
*testit_api_client.CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesNameGet**](docs/CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesNameGet) | **GET** /api/v2/customAttributes/templates/{name} | Get CustomAttributeTemplate by name
*testit_api_client.CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesPost**](docs/CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesPost) | **POST** /api/v2/customAttributes/templates | Create CustomAttributeTemplate
*testit_api_client.CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesPut**](docs/CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesPut) | **PUT** /api/v2/customAttributes/templates | Update CustomAttributeTemplate
*testit_api_client.CustomAttributeTemplatesApi* | [**apiV2CustomAttributesTemplatesSearchPost**](docs/CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesSearchPost) | **POST** /api/v2/customAttributes/templates/search | Search CustomAttributeTemplates
*testit_api_client.CustomAttributesApi* | [**apiV2CustomAttributesIdDelete**](docs/CustomAttributesApi.md#apiV2CustomAttributesIdDelete) | **DELETE** /api/v2/customAttributes/{id} | 
*testit_api_client.CustomAttributesApi* | [**apiV2CustomAttributesIdGet**](docs/CustomAttributesApi.md#apiV2CustomAttributesIdGet) | **GET** /api/v2/customAttributes/{id} | 
*testit_api_client.CustomAttributesApi* | [**apiV2CustomAttributesIdMakeGlobalPost**](docs/CustomAttributesApi.md#apiV2CustomAttributesIdMakeGlobalPost) | **POST** /api/v2/customAttributes/{id}/makeGlobal | 
*testit_api_client.CustomAttributesApi* | [**apiV2CustomAttributesIdProjectsGet**](docs/CustomAttributesApi.md#apiV2CustomAttributesIdProjectsGet) | **GET** /api/v2/customAttributes/{id}/projects | 
*testit_api_client.CustomAttributesApi* | [**apiV2CustomAttributesIdPut**](docs/CustomAttributesApi.md#apiV2CustomAttributesIdPut) | **PUT** /api/v2/customAttributes/{id} | 
*testit_api_client.CustomAttributesApi* | [**apiV2CustomAttributesMergePost**](docs/CustomAttributesApi.md#apiV2CustomAttributesMergePost) | **POST** /api/v2/customAttributes/merge | 
*testit_api_client.CustomAttributesApi* | [**apiV2CustomAttributesOrderPost**](docs/CustomAttributesApi.md#apiV2CustomAttributesOrderPost) | **POST** /api/v2/customAttributes/order | 
*testit_api_client.CustomAttributesApi* | [**apiV2CustomAttributesPost**](docs/CustomAttributesApi.md#apiV2CustomAttributesPost) | **POST** /api/v2/customAttributes | 
*testit_api_client.CustomAttributesApi* | [**apiV2CustomAttributesReplacePost**](docs/CustomAttributesApi.md#apiV2CustomAttributesReplacePost) | **POST** /api/v2/customAttributes/replace | 
*testit_api_client.CustomAttributesApi* | [**apiV2CustomAttributesSearchPost**](docs/CustomAttributesApi.md#apiV2CustomAttributesSearchPost) | **POST** /api/v2/customAttributes/search | 
*testit_api_client.NotificationsApi* | [**apiV2NotificationsCountGet**](docs/NotificationsApi.md#apiV2NotificationsCountGet) | **GET** /api/v2/notifications/count | Get unread Notifications total in last 7 days
*testit_api_client.NotificationsApi* | [**apiV2NotificationsGet**](docs/NotificationsApi.md#apiV2NotificationsGet) | **GET** /api/v2/notifications | Get all Notifications for current User
*testit_api_client.NotificationsApi* | [**apiV2NotificationsIdReadPost**](docs/NotificationsApi.md#apiV2NotificationsIdReadPost) | **POST** /api/v2/notifications/{id}/read | Set Notification as read
*testit_api_client.NotificationsApi* | [**apiV2NotificationsReadPost**](docs/NotificationsApi.md#apiV2NotificationsReadPost) | **POST** /api/v2/notifications/read | Set all Notifications as read
*testit_api_client.ParametersApi* | [**apiV2ParametersBulkPost**](docs/ParametersApi.md#apiV2ParametersBulkPost) | **POST** /api/v2/parameters/bulk | Create multiple parameters
*testit_api_client.ParametersApi* | [**apiV2ParametersBulkPut**](docs/ParametersApi.md#apiV2ParametersBulkPut) | **PUT** /api/v2/parameters/bulk | Update multiple parameters
*testit_api_client.ParametersApi* | [**apiV2ParametersGroupsGet**](docs/ParametersApi.md#apiV2ParametersGroupsGet) | **GET** /api/v2/parameters/groups | Get parameters as group
*testit_api_client.ParametersApi* | [**apiV2ParametersKeyNameNameExistsGet**](docs/ParametersApi.md#apiV2ParametersKeyNameNameExistsGet) | **GET** /api/v2/parameters/key/name/{name}/exists | Check existence parameter key in system
*testit_api_client.ParametersApi* | [**apiV2ParametersKeyValuesGet**](docs/ParametersApi.md#apiV2ParametersKeyValuesGet) | **GET** /api/v2/parameters/{key}/values | Get all parameter key values
*testit_api_client.ParametersApi* | [**apiV2ParametersKeysGet**](docs/ParametersApi.md#apiV2ParametersKeysGet) | **GET** /api/v2/parameters/keys | Get all parameter keys
*testit_api_client.ParametersApi* | [**createParameter**](docs/ParametersApi.md#createParameter) | **POST** /api/v2/parameters | Create parameter
*testit_api_client.ParametersApi* | [**deleteByName**](docs/ParametersApi.md#deleteByName) | **DELETE** /api/v2/parameters/name/{name} | Delete parameter by name
*testit_api_client.ParametersApi* | [**deleteByParameterKeyId**](docs/ParametersApi.md#deleteByParameterKeyId) | **DELETE** /api/v2/parameters/keyId/{keyId} | Delete parameters by parameter key identifier
*testit_api_client.ParametersApi* | [**deleteParameter**](docs/ParametersApi.md#deleteParameter) | **DELETE** /api/v2/parameters/{id} | Delete parameter
*testit_api_client.ParametersApi* | [**getAllParameters**](docs/ParametersApi.md#getAllParameters) | **GET** /api/v2/parameters | Get all parameters
*testit_api_client.ParametersApi* | [**getParameterById**](docs/ParametersApi.md#getParameterById) | **GET** /api/v2/parameters/{id} | Get parameter by ID
*testit_api_client.ParametersApi* | [**obsoleteDeleteByName**](docs/ParametersApi.md#obsoleteDeleteByName) | **POST** /api/v2/parameters/deleteByName | 
*testit_api_client.ParametersApi* | [**updateParameter**](docs/ParametersApi.md#updateParameter) | **PUT** /api/v2/parameters | Update parameter
*testit_api_client.ProjectsApi* | [**apiV2ProjectsIdCustomAttributeTemplatesTemplateIdDelete**](docs/ProjectsApi.md#apiV2ProjectsIdCustomAttributeTemplatesTemplateIdDelete) | **DELETE** /api/v2/projects/{id}/customAttributeTemplates/{templateId} | Delete CustomAttributeTemplate from Project
*testit_api_client.ProjectsApi* | [**apiV2ProjectsIdCustomAttributeTemplatesTemplateIdPost**](docs/ProjectsApi.md#apiV2ProjectsIdCustomAttributeTemplatesTemplateIdPost) | **POST** /api/v2/projects/{id}/customAttributeTemplates/{templateId} | Add CustomAttributeTemplate to Project
*testit_api_client.ProjectsApi* | [**apiV2ProjectsIdFailureClassesGet**](docs/ProjectsApi.md#apiV2ProjectsIdFailureClassesGet) | **GET** /api/v2/projects/{id}/failureClasses | Get Project FailureClasses
*testit_api_client.ProjectsApi* | [**apiV2ProjectsIdFavoritePut**](docs/ProjectsApi.md#apiV2ProjectsIdFavoritePut) | **PUT** /api/v2/projects/{id}/favorite | Mark Project as favorite
*testit_api_client.ProjectsApi* | [**apiV2ProjectsIdFiltersGet**](docs/ProjectsApi.md#apiV2ProjectsIdFiltersGet) | **GET** /api/v2/projects/{id}/filters | Get Project filters
*testit_api_client.ProjectsApi* | [**apiV2ProjectsIdTestPlansAnalyticsGet**](docs/ProjectsApi.md#apiV2ProjectsIdTestPlansAnalyticsGet) | **GET** /api/v2/projects/{id}/testPlans/analytics | Get TestPlans analytics
*testit_api_client.ProjectsApi* | [**apiV2ProjectsIdTestPlansSearchPost**](docs/ProjectsApi.md#apiV2ProjectsIdTestPlansSearchPost) | **POST** /api/v2/projects/{id}/testPlans/search | Get Project TestPlans with analytics
*testit_api_client.ProjectsApi* | [**apiV2ProjectsIdTestRunsActiveGet**](docs/ProjectsApi.md#apiV2ProjectsIdTestRunsActiveGet) | **GET** /api/v2/projects/{id}/testRuns/active | Get active Project TestRuns
*testit_api_client.ProjectsApi* | [**apiV2ProjectsIdTestRunsFullGet**](docs/ProjectsApi.md#apiV2ProjectsIdTestRunsFullGet) | **GET** /api/v2/projects/{id}/testRuns/full | Get Project TestRuns full models
*testit_api_client.ProjectsApi* | [**apiV2ProjectsIdWorkItemsTagsGet**](docs/ProjectsApi.md#apiV2ProjectsIdWorkItemsTagsGet) | **GET** /api/v2/projects/{id}/workItems/tags | Get WorkItems Tags
*testit_api_client.ProjectsApi* | [**apiV2ProjectsSearchPost**](docs/ProjectsApi.md#apiV2ProjectsSearchPost) | **POST** /api/v2/projects/search | 
*testit_api_client.ProjectsApi* | [**callExport**](docs/ProjectsApi.md#callExport) | **POST** /api/v2/projects/{id}/export | Export project as JSON file
*testit_api_client.ProjectsApi* | [**callImport**](docs/ProjectsApi.md#callImport) | **POST** /api/v2/projects/import | Import project from JSON file
*testit_api_client.ProjectsApi* | [**createCustomAttributeTestPlanProjectRelations**](docs/ProjectsApi.md#createCustomAttributeTestPlanProjectRelations) | **POST** /api/v2/projects/{id}/testPlans/attributes | Add attributes to project&#39;s test plans
*testit_api_client.ProjectsApi* | [**createProject**](docs/ProjectsApi.md#createProject) | **POST** /api/v2/projects | Create project
*testit_api_client.ProjectsApi* | [**createProjectsAttribute**](docs/ProjectsApi.md#createProjectsAttribute) | **POST** /api/v2/projects/{id}/attributes | Create project attribute
*testit_api_client.ProjectsApi* | [**deleteCustomAttributeTestPlanProjectRelations**](docs/ProjectsApi.md#deleteCustomAttributeTestPlanProjectRelations) | **DELETE** /api/v2/projects/{id}/testPlans/attribute/{attributeId} | Delete attribute from project&#39;s test plans
*testit_api_client.ProjectsApi* | [**deleteProject**](docs/ProjectsApi.md#deleteProject) | **DELETE** /api/v2/projects/{id} | Delete project
*testit_api_client.ProjectsApi* | [**deleteProjectAutoTests**](docs/ProjectsApi.md#deleteProjectAutoTests) | **DELETE** /api/v2/projects/{id}/autoTests | Delete project
*testit_api_client.ProjectsApi* | [**deleteProjectsAttribute**](docs/ProjectsApi.md#deleteProjectsAttribute) | **DELETE** /api/v2/projects/{id}/attributes/{attributeId} | Delete project attribute
*testit_api_client.ProjectsApi* | [**exportWithTestPlansAndConfigurations**](docs/ProjectsApi.md#exportWithTestPlansAndConfigurations) | **POST** /api/v2/projects/{id}/export-by-testPlans | Export project with test plans, test suites and test points as JSON file
*testit_api_client.ProjectsApi* | [**getAllProjects**](docs/ProjectsApi.md#getAllProjects) | **GET** /api/v2/projects | Get all projects
*testit_api_client.ProjectsApi* | [**getAttributeByProjectId**](docs/ProjectsApi.md#getAttributeByProjectId) | **GET** /api/v2/projects/{id}/attributes/{attributeId} | Get project attribute
*testit_api_client.ProjectsApi* | [**getAttributesByProjectId**](docs/ProjectsApi.md#getAttributesByProjectId) | **GET** /api/v2/projects/{id}/attributes | Get project attributes
*testit_api_client.ProjectsApi* | [**getAutoTestsNamespaces**](docs/ProjectsApi.md#getAutoTestsNamespaces) | **GET** /api/v2/projects/{id}/autoTestsNamespaces | Get namespaces of autotests in project
*testit_api_client.ProjectsApi* | [**getConfigurationsByProjectId**](docs/ProjectsApi.md#getConfigurationsByProjectId) | **GET** /api/v2/projects/{id}/configurations | Get project configurations
*testit_api_client.ProjectsApi* | [**getCustomAttributeTestPlanProjectRelations**](docs/ProjectsApi.md#getCustomAttributeTestPlanProjectRelations) | **GET** /api/v2/projects/{id}/testPlans/attributes | Get project&#39;s test plan attributes
*testit_api_client.ProjectsApi* | [**getProjectById**](docs/ProjectsApi.md#getProjectById) | **GET** /api/v2/projects/{id} | Get project by ID
*testit_api_client.ProjectsApi* | [**getSectionsByProjectId**](docs/ProjectsApi.md#getSectionsByProjectId) | **GET** /api/v2/projects/{id}/sections | Get project sections
*testit_api_client.ProjectsApi* | [**getTestPlansByProjectId**](docs/ProjectsApi.md#getTestPlansByProjectId) | **GET** /api/v2/projects/{id}/testPlans | Get project test plans
*testit_api_client.ProjectsApi* | [**getTestRunsByProjectId**](docs/ProjectsApi.md#getTestRunsByProjectId) | **GET** /api/v2/projects/{id}/testRuns | Get project test runs
*testit_api_client.ProjectsApi* | [**getWorkItemsByProjectId**](docs/ProjectsApi.md#getWorkItemsByProjectId) | **GET** /api/v2/projects/{id}/workItems | Get project work items
*testit_api_client.ProjectsApi* | [**importToExistingProject**](docs/ProjectsApi.md#importToExistingProject) | **POST** /api/v2/projects/{id}/import | Import project from JSON file into existing project
*testit_api_client.ProjectsApi* | [**restoreProject**](docs/ProjectsApi.md#restoreProject) | **POST** /api/v2/projects/{id}/restore | Restore project
*testit_api_client.ProjectsApi* | [**updateCustomAttributeTestPlanProjectRelations**](docs/ProjectsApi.md#updateCustomAttributeTestPlanProjectRelations) | **PUT** /api/v2/projects/{id}/testPlans/attribute | Update attribute of project&#39;s test plans
*testit_api_client.ProjectsApi* | [**updateProject**](docs/ProjectsApi.md#updateProject) | **PUT** /api/v2/projects | Update project
*testit_api_client.ProjectsApi* | [**updateProjectsAttribute**](docs/ProjectsApi.md#updateProjectsAttribute) | **PUT** /api/v2/projects/{id}/attributes | Update project attribute
*testit_api_client.SectionsApi* | [**createSection**](docs/SectionsApi.md#createSection) | **POST** /api/v2/sections | Create section
*testit_api_client.SectionsApi* | [**deleteSection**](docs/SectionsApi.md#deleteSection) | **DELETE** /api/v2/sections/{id} | Delete section
*testit_api_client.SectionsApi* | [**getSectionById**](docs/SectionsApi.md#getSectionById) | **GET** /api/v2/sections/{id} | Get section
*testit_api_client.SectionsApi* | [**getWorkItemsBySectionId**](docs/SectionsApi.md#getWorkItemsBySectionId) | **GET** /api/v2/sections/{id}/workItems | Get section work items
*testit_api_client.SectionsApi* | [**move**](docs/SectionsApi.md#move) | **POST** /api/v2/sections/move | Move section
*testit_api_client.SectionsApi* | [**rename**](docs/SectionsApi.md#rename) | **POST** /api/v2/sections/rename | Rename section
*testit_api_client.SectionsApi* | [**updateSection**](docs/SectionsApi.md#updateSection) | **PUT** /api/v2/sections | Update section
*testit_api_client.StepCommentsApi* | [**apiV2StepCommentsIdGet**](docs/StepCommentsApi.md#apiV2StepCommentsIdGet) | **GET** /api/v2/stepComments/{id} | Get StepComment by internal ID
*testit_api_client.TagsApi* | [**apiV2TagsGet**](docs/TagsApi.md#apiV2TagsGet) | **GET** /api/v2/tags | Get all Tags
*testit_api_client.TagsApi* | [**apiV2TagsTestPlansTagsGet**](docs/TagsApi.md#apiV2TagsTestPlansTagsGet) | **GET** /api/v2/tags/testPlansTags | Get all Tags that are used in TestPlans
*testit_api_client.TestPlansApi* | [**addTestPointsWithSections**](docs/TestPlansApi.md#addTestPointsWithSections) | **POST** /api/v2/testPlans/{id}/test-points/withSections | Add test-points to test suite with sections
*testit_api_client.TestPlansApi* | [**addWorkItemsWithSections**](docs/TestPlansApi.md#addWorkItemsWithSections) | **POST** /api/v2/testPlans/{id}/workItems/withSections | Add WorkItems to TestPlan with Sections as TestSuites
*testit_api_client.TestPlansApi* | [**apiV2TestPlansIdAnalyticsGet**](docs/TestPlansApi.md#apiV2TestPlansIdAnalyticsGet) | **GET** /api/v2/testPlans/{id}/analytics | Get analytics by TestPlan
*testit_api_client.TestPlansApi* | [**apiV2TestPlansIdAutobalancePost**](docs/TestPlansApi.md#apiV2TestPlansIdAutobalancePost) | **POST** /api/v2/testPlans/{id}/autobalance | Auto-balance for TestPlan with testers
*testit_api_client.TestPlansApi* | [**apiV2TestPlansIdConfigurationsGet**](docs/TestPlansApi.md#apiV2TestPlansIdConfigurationsGet) | **GET** /api/v2/testPlans/{id}/configurations | Get TestPlan configurations
*testit_api_client.TestPlansApi* | [**apiV2TestPlansIdExportTestPointsXlsxPost**](docs/TestPlansApi.md#apiV2TestPlansIdExportTestPointsXlsxPost) | **POST** /api/v2/testPlans/{id}/export/testPoints/xlsx | Export TestPoints from TestPlan in xls format
*testit_api_client.TestPlansApi* | [**apiV2TestPlansIdExportTestResultHistoryXlsxPost**](docs/TestPlansApi.md#apiV2TestPlansIdExportTestResultHistoryXlsxPost) | **POST** /api/v2/testPlans/{id}/export/testResultHistory/xlsx | Export TestResults history from TestPlan in xls format
*testit_api_client.TestPlansApi* | [**apiV2TestPlansIdHistoryGet**](docs/TestPlansApi.md#apiV2TestPlansIdHistoryGet) | **GET** /api/v2/testPlans/{id}/history | Get TestPlan history
*testit_api_client.TestPlansApi* | [**apiV2TestPlansIdLinksGet**](docs/TestPlansApi.md#apiV2TestPlansIdLinksGet) | **GET** /api/v2/testPlans/{id}/links | Get Links of TestPlan
*testit_api_client.TestPlansApi* | [**apiV2TestPlansIdTestPointsLastResultsGet**](docs/TestPlansApi.md#apiV2TestPlansIdTestPointsLastResultsGet) | **GET** /api/v2/testPlans/{id}/testPoints/lastResults | Get TestPoints with last result from TestPlan
*testit_api_client.TestPlansApi* | [**apiV2TestPlansIdTestPointsResetPost**](docs/TestPlansApi.md#apiV2TestPlansIdTestPointsResetPost) | **POST** /api/v2/testPlans/{id}/testPoints/reset | Reset TestPoints status of TestPlan
*testit_api_client.TestPlansApi* | [**apiV2TestPlansIdTestRunsGet**](docs/TestPlansApi.md#apiV2TestPlansIdTestRunsGet) | **GET** /api/v2/testPlans/{id}/testRuns | Get TestRuns of TestPlan
*testit_api_client.TestPlansApi* | [**apiV2TestPlansIdTestRunsSearchPost**](docs/TestPlansApi.md#apiV2TestPlansIdTestRunsSearchPost) | **POST** /api/v2/testPlans/{id}/testRuns/search | Search TestRuns of TestPlan
*testit_api_client.TestPlansApi* | [**apiV2TestPlansIdTestRunsTestResultsLastModifiedModifiedDateGet**](docs/TestPlansApi.md#apiV2TestPlansIdTestRunsTestResultsLastModifiedModifiedDateGet) | **GET** /api/v2/testPlans/{id}/testRuns/testResults/lastModified/modifiedDate | Get max modified date in TestRun for TestPlan
*testit_api_client.TestPlansApi* | [**apiV2TestPlansIdUnlockRequestPost**](docs/TestPlansApi.md#apiV2TestPlansIdUnlockRequestPost) | **POST** /api/v2/testPlans/{id}/unlock/request | Send unlock TestPlan notification
*testit_api_client.TestPlansApi* | [**apiV2TestPlansShortsPost**](docs/TestPlansApi.md#apiV2TestPlansShortsPost) | **POST** /api/v2/testPlans/shorts | Get TestPlans short models by Project identifiers
*testit_api_client.TestPlansApi* | [**clone**](docs/TestPlansApi.md#clone) | **POST** /api/v2/testPlans/{id}/clone | Clone TestPlan
*testit_api_client.TestPlansApi* | [**complete**](docs/TestPlansApi.md#complete) | **POST** /api/v2/testPlans/{id}/complete | Complete TestPlan
*testit_api_client.TestPlansApi* | [**createTestPlan**](docs/TestPlansApi.md#createTestPlan) | **POST** /api/v2/testPlans | Create TestPlan
*testit_api_client.TestPlansApi* | [**deleteTestPlan**](docs/TestPlansApi.md#deleteTestPlan) | **DELETE** /api/v2/testPlans/{id} | Delete TestPlan
*testit_api_client.TestPlansApi* | [**getTestPlanById**](docs/TestPlansApi.md#getTestPlanById) | **GET** /api/v2/testPlans/{id} | Get TestPlan by Id
*testit_api_client.TestPlansApi* | [**getTestSuitesById**](docs/TestPlansApi.md#getTestSuitesById) | **GET** /api/v2/testPlans/{id}/testSuites | Get TestSuites Tree By Id
*testit_api_client.TestPlansApi* | [**pause**](docs/TestPlansApi.md#pause) | **POST** /api/v2/testPlans/{id}/pause | Pause TestPlan
*testit_api_client.TestPlansApi* | [**restoreTestPlan**](docs/TestPlansApi.md#restoreTestPlan) | **POST** /api/v2/testPlans/{id}/restore | Restore TestPlan
*testit_api_client.TestPlansApi* | [**start**](docs/TestPlansApi.md#start) | **POST** /api/v2/testPlans/{id}/start | Start TestPlan
*testit_api_client.TestPlansApi* | [**updateTestPlan**](docs/TestPlansApi.md#updateTestPlan) | **PUT** /api/v2/testPlans | Update TestPlan
*testit_api_client.TestPointsApi* | [**apiV2TestPointsIdTestRunsGet**](docs/TestPointsApi.md#apiV2TestPointsIdTestRunsGet) | **GET** /api/v2/testPoints/{id}/testRuns | 
*testit_api_client.TestPointsApi* | [**apiV2TestPointsIdWorkItemGet**](docs/TestPointsApi.md#apiV2TestPointsIdWorkItemGet) | **GET** /api/v2/testPoints/{id}/workItem | 
*testit_api_client.TestPointsApi* | [**apiV2TestPointsSearchPost**](docs/TestPointsApi.md#apiV2TestPointsSearchPost) | **POST** /api/v2/testPoints/search | 
*testit_api_client.TestResultsApi* | [**apiV2TestResultsIdAggregatedGet**](docs/TestResultsApi.md#apiV2TestResultsIdAggregatedGet) | **GET** /api/v2/testResults/{id}/aggregated | 
*testit_api_client.TestResultsApi* | [**apiV2TestResultsIdAttachmentsAttachmentIdPut**](docs/TestResultsApi.md#apiV2TestResultsIdAttachmentsAttachmentIdPut) | **PUT** /api/v2/testResults/{id}/attachments/{attachmentId} | 
*testit_api_client.TestResultsApi* | [**apiV2TestResultsIdAttachmentsInfoGet**](docs/TestResultsApi.md#apiV2TestResultsIdAttachmentsInfoGet) | **GET** /api/v2/testResults/{id}/attachments/info | 
*testit_api_client.TestResultsApi* | [**apiV2TestResultsIdExternalProjectsExternalProjectIdDefectPost**](docs/TestResultsApi.md#apiV2TestResultsIdExternalProjectsExternalProjectIdDefectPost) | **POST** /api/v2/testResults/{id}/externalProjects/{externalProjectId}/defect | 
*testit_api_client.TestResultsApi* | [**apiV2TestResultsIdExternalProjectsExternalProjectIdFormGet**](docs/TestResultsApi.md#apiV2TestResultsIdExternalProjectsExternalProjectIdFormGet) | **GET** /api/v2/testResults/{id}/externalProjects/{externalProjectId}/form | 
*testit_api_client.TestResultsApi* | [**apiV2TestResultsIdGet**](docs/TestResultsApi.md#apiV2TestResultsIdGet) | **GET** /api/v2/testResults/{id} | 
*testit_api_client.TestResultsApi* | [**apiV2TestResultsIdLinkRequestsPost**](docs/TestResultsApi.md#apiV2TestResultsIdLinkRequestsPost) | **POST** /api/v2/testResults/{id}/linkRequests | 
*testit_api_client.TestResultsApi* | [**apiV2TestResultsIdPut**](docs/TestResultsApi.md#apiV2TestResultsIdPut) | **PUT** /api/v2/testResults/{id} | 
*testit_api_client.TestResultsApi* | [**apiV2TestResultsLinkRequestsLinkRequestIdUsePost**](docs/TestResultsApi.md#apiV2TestResultsLinkRequestsLinkRequestIdUsePost) | **POST** /api/v2/testResults/linkRequests/{linkRequestId}/use | 
*testit_api_client.TestResultsApi* | [**createAttachment**](docs/TestResultsApi.md#createAttachment) | **POST** /api/v2/testResults/{id}/attachments | Upload and link attachment to TestResult
*testit_api_client.TestResultsApi* | [**deleteAttachment**](docs/TestResultsApi.md#deleteAttachment) | **DELETE** /api/v2/testResults/{id}/attachments/{attachmentId} | Remove attachment and unlink from TestResult
*testit_api_client.TestResultsApi* | [**downloadAttachment**](docs/TestResultsApi.md#downloadAttachment) | **GET** /api/v2/testResults/{id}/attachments/{attachmentId} | Get attachment of TestResult
*testit_api_client.TestResultsApi* | [**getAttachment**](docs/TestResultsApi.md#getAttachment) | **GET** /api/v2/testResults/{id}/attachments/{attachmentId}/info | Get Metadata of TestResult&#39;s attachment
*testit_api_client.TestResultsApi* | [**getAttachments**](docs/TestResultsApi.md#getAttachments) | **GET** /api/v2/testResults/{id}/attachments | Get all attachments of TestResult
*testit_api_client.TestRunsApi* | [**apiV2TestRunsIdTestPointsResultsGet**](docs/TestRunsApi.md#apiV2TestRunsIdTestPointsResultsGet) | **GET** /api/v2/testRuns/{id}/testPoints/results | 
*testit_api_client.TestRunsApi* | [**apiV2TestRunsIdTestResultsLastModifiedModificationDateGet**](docs/TestRunsApi.md#apiV2TestRunsIdTestResultsLastModifiedModificationDateGet) | **GET** /api/v2/testRuns/{id}/testResults/lastModified/modificationDate | 
*testit_api_client.TestRunsApi* | [**completeTestRun**](docs/TestRunsApi.md#completeTestRun) | **POST** /api/v2/testRuns/{id}/complete | Complete TestRun
*testit_api_client.TestRunsApi* | [**createAndFillByAutoTests**](docs/TestRunsApi.md#createAndFillByAutoTests) | **POST** /api/v2/testRuns/byAutoTests | Create test runs based on autotests and configurations
*testit_api_client.TestRunsApi* | [**createAndFillByConfigurations**](docs/TestRunsApi.md#createAndFillByConfigurations) | **POST** /api/v2/testRuns/byConfigurations | Create test runs picking the needed test points
*testit_api_client.TestRunsApi* | [**createAndFillByWorkItems**](docs/TestRunsApi.md#createAndFillByWorkItems) | **POST** /api/v2/testRuns/byWorkItems | Create test run based on configurations and work items
*testit_api_client.TestRunsApi* | [**createEmpty**](docs/TestRunsApi.md#createEmpty) | **POST** /api/v2/testRuns | Create empty TestRun
*testit_api_client.TestRunsApi* | [**getTestRunById**](docs/TestRunsApi.md#getTestRunById) | **GET** /api/v2/testRuns/{id} | Get TestRun by Id
*testit_api_client.TestRunsApi* | [**setAutoTestResultsForTestRun**](docs/TestRunsApi.md#setAutoTestResultsForTestRun) | **POST** /api/v2/testRuns/{id}/testResults | Send test results to the test runs in the system
*testit_api_client.TestRunsApi* | [**startTestRun**](docs/TestRunsApi.md#startTestRun) | **POST** /api/v2/testRuns/{id}/start | Start TestRun
*testit_api_client.TestRunsApi* | [**stopTestRun**](docs/TestRunsApi.md#stopTestRun) | **POST** /api/v2/testRuns/{id}/stop | Stop TestRun
*testit_api_client.TestRunsApi* | [**updateEmpty**](docs/TestRunsApi.md#updateEmpty) | **PUT** /api/v2/testRuns | Update empty TestRun
*testit_api_client.TestSuitesApi* | [**addTestPointsToTestSuite**](docs/TestSuitesApi.md#addTestPointsToTestSuite) | **POST** /api/v2/testSuites/{id}/test-points | Add test-points to test suite
*testit_api_client.TestSuitesApi* | [**createTestSuite**](docs/TestSuitesApi.md#createTestSuite) | **POST** /api/v2/testSuites | Create TestSuite
*testit_api_client.TestSuitesApi* | [**deleteTestSuite**](docs/TestSuitesApi.md#deleteTestSuite) | **DELETE** /api/v2/testSuites/{id} | Delete TestSuite
*testit_api_client.TestSuitesApi* | [**getConfigurationsByTestSuiteId**](docs/TestSuitesApi.md#getConfigurationsByTestSuiteId) | **GET** /api/v2/testSuites/{id}/configurations | Get Configurations By Id
*testit_api_client.TestSuitesApi* | [**getTestPointsById**](docs/TestSuitesApi.md#getTestPointsById) | **GET** /api/v2/testSuites/{id}/testPoints | Get TestPoints By Id
*testit_api_client.TestSuitesApi* | [**getTestResultsById**](docs/TestSuitesApi.md#getTestResultsById) | **GET** /api/v2/testSuites/{id}/testResults | Get TestResults By Id
*testit_api_client.TestSuitesApi* | [**getTestSuiteById**](docs/TestSuitesApi.md#getTestSuiteById) | **GET** /api/v2/testSuites/{id} | Get TestSuite by Id
*testit_api_client.TestSuitesApi* | [**getWorkItemsById**](docs/TestSuitesApi.md#getWorkItemsById) | **GET** /api/v2/testSuites/{id}/workItems | 
*testit_api_client.TestSuitesApi* | [**searchWorkItems**](docs/TestSuitesApi.md#searchWorkItems) | **POST** /api/v2/testSuites/{id}/workItems/search | Search WorkItems
*testit_api_client.TestSuitesApi* | [**setConfigurationsByTestSuiteId**](docs/TestSuitesApi.md#setConfigurationsByTestSuiteId) | **POST** /api/v2/testSuites/{id}/configurations | Set Configurations By TestSuite Id
*testit_api_client.TestSuitesApi* | [**setWorkItemsByTestSuiteId**](docs/TestSuitesApi.md#setWorkItemsByTestSuiteId) | **POST** /api/v2/testSuites/{id}/workItems | Set WorkItems By TestSuite Id
*testit_api_client.TestSuitesApi* | [**updateTestSuite**](docs/TestSuitesApi.md#updateTestSuite) | **PUT** /api/v2/testSuites | Update TestSuite
*testit_api_client.WebhooksApi* | [**apiV2WebhooksGet**](docs/WebhooksApi.md#apiV2WebhooksGet) | **GET** /api/v2/webhooks | 
*testit_api_client.WebhooksApi* | [**apiV2WebhooksIdDelete**](docs/WebhooksApi.md#apiV2WebhooksIdDelete) | **DELETE** /api/v2/webhooks/{id} | 
*testit_api_client.WebhooksApi* | [**apiV2WebhooksIdGet**](docs/WebhooksApi.md#apiV2WebhooksIdGet) | **GET** /api/v2/webhooks/{id} | 
*testit_api_client.WebhooksApi* | [**apiV2WebhooksIdPut**](docs/WebhooksApi.md#apiV2WebhooksIdPut) | **PUT** /api/v2/webhooks/{id} | 
*testit_api_client.WebhooksApi* | [**apiV2WebhooksPost**](docs/WebhooksApi.md#apiV2WebhooksPost) | **POST** /api/v2/webhooks | 
*testit_api_client.WebhooksApi* | [**apiV2WebhooksSpecialVariablesGet**](docs/WebhooksApi.md#apiV2WebhooksSpecialVariablesGet) | **GET** /api/v2/webhooks/specialVariables | 
*testit_api_client.WebhooksLogsApi* | [**apiV2WebhooksLogsGet**](docs/WebhooksLogsApi.md#apiV2WebhooksLogsGet) | **GET** /api/v2/webhooks/logs | 
*testit_api_client.WebhooksLogsApi* | [**apiV2WebhooksLogsIdDelete**](docs/WebhooksLogsApi.md#apiV2WebhooksLogsIdDelete) | **DELETE** /api/v2/webhooks/logs/{id} | 
*testit_api_client.WebhooksLogsApi* | [**apiV2WebhooksLogsIdGet**](docs/WebhooksLogsApi.md#apiV2WebhooksLogsIdGet) | **GET** /api/v2/webhooks/logs/{id} | 
*testit_api_client.WorkItemsApi* | [**apiV2WorkItemsIdActualPost**](docs/WorkItemsApi.md#apiV2WorkItemsIdActualPost) | **POST** /api/v2/workItems/{id}/actual | Set WorkItem as actual
*testit_api_client.WorkItemsApi* | [**apiV2WorkItemsIdCheckListTransformToTestCasePost**](docs/WorkItemsApi.md#apiV2WorkItemsIdCheckListTransformToTestCasePost) | **POST** /api/v2/workItems/{id}/checkList/transformTo/testCase | Transform CheckList to TestCase
*testit_api_client.WorkItemsApi* | [**apiV2WorkItemsIdHistoryGet**](docs/WorkItemsApi.md#apiV2WorkItemsIdHistoryGet) | **GET** /api/v2/workItems/{id}/history | Get change history of WorkItem
*testit_api_client.WorkItemsApi* | [**apiV2WorkItemsIdLikeDelete**](docs/WorkItemsApi.md#apiV2WorkItemsIdLikeDelete) | **DELETE** /api/v2/workItems/{id}/like | Delete like from WorkItem
*testit_api_client.WorkItemsApi* | [**apiV2WorkItemsIdLikePost**](docs/WorkItemsApi.md#apiV2WorkItemsIdLikePost) | **POST** /api/v2/workItems/{id}/like | Set like to WorkItem
*testit_api_client.WorkItemsApi* | [**apiV2WorkItemsIdLikesCountGet**](docs/WorkItemsApi.md#apiV2WorkItemsIdLikesCountGet) | **GET** /api/v2/workItems/{id}/likes/count | Get likes count of WorkItem
*testit_api_client.WorkItemsApi* | [**apiV2WorkItemsIdLikesGet**](docs/WorkItemsApi.md#apiV2WorkItemsIdLikesGet) | **GET** /api/v2/workItems/{id}/likes | Get likes of WorkItem
*testit_api_client.WorkItemsApi* | [**apiV2WorkItemsIdTestResultsHistoryGet**](docs/WorkItemsApi.md#apiV2WorkItemsIdTestResultsHistoryGet) | **GET** /api/v2/workItems/{id}/testResults/history | Get test results history of WorkItem
*testit_api_client.WorkItemsApi* | [**apiV2WorkItemsMovePost**](docs/WorkItemsApi.md#apiV2WorkItemsMovePost) | **POST** /api/v2/workItems/move | Move WorkItem to another section
*testit_api_client.WorkItemsApi* | [**apiV2WorkItemsSharedStepsSharedStepIdReferencesGet**](docs/WorkItemsApi.md#apiV2WorkItemsSharedStepsSharedStepIdReferencesGet) | **GET** /api/v2/workItems/sharedSteps/{sharedStepId}/references | Get SharedStep references
*testit_api_client.WorkItemsApi* | [**createWorkItem**](docs/WorkItemsApi.md#createWorkItem) | **POST** /api/v2/workItems | Create Test Case, Checklist or Shared Step
*testit_api_client.WorkItemsApi* | [**deleteAllWorkItemsFromAutoTest**](docs/WorkItemsApi.md#deleteAllWorkItemsFromAutoTest) | **DELETE** /api/v2/workItems/{id}/autoTests | Delete all links AutoTests from WorkItem by Id or GlobalId
*testit_api_client.WorkItemsApi* | [**deleteWorkItem**](docs/WorkItemsApi.md#deleteWorkItem) | **DELETE** /api/v2/workItems/{id} | Delete Test Case, Checklist or Shared Step by Id or GlobalId
*testit_api_client.WorkItemsApi* | [**getAutoTestsForWorkItem**](docs/WorkItemsApi.md#getAutoTestsForWorkItem) | **GET** /api/v2/workItems/{id}/autoTests | Get all AutoTests linked to WorkItem by Id or GlobalId
*testit_api_client.WorkItemsApi* | [**getIterations**](docs/WorkItemsApi.md#getIterations) | **GET** /api/v2/workItems/{id}/iterations | Get iterations by workitem Id or GlobalId
*testit_api_client.WorkItemsApi* | [**getWorkItemById**](docs/WorkItemsApi.md#getWorkItemById) | **GET** /api/v2/workItems/{id} | Get Test Case, Checklist or Shared Step by Id or GlobalId
*testit_api_client.WorkItemsApi* | [**getWorkItemChronology**](docs/WorkItemsApi.md#getWorkItemChronology) | **GET** /api/v2/workItems/{id}/chronology | Get WorkItem chronology by Id or GlobalId
*testit_api_client.WorkItemsApi* | [**getWorkItemVersions**](docs/WorkItemsApi.md#getWorkItemVersions) | **GET** /api/v2/workItems/{id}/versions | Get WorkItem versions
*testit_api_client.WorkItemsApi* | [**updateWorkItem**](docs/WorkItemsApi.md#updateWorkItem) | **PUT** /api/v2/workItems | Update Test Case, Checklist or Shared Step
*testit_api_client.WorkItemsCommentsApi* | [**apiV2WorkItemsCommentsCommentIdDelete**](docs/WorkItemsCommentsApi.md#apiV2WorkItemsCommentsCommentIdDelete) | **DELETE** /api/v2/workItems/comments/{commentId} | Delete WorkItem comment
*testit_api_client.WorkItemsCommentsApi* | [**apiV2WorkItemsCommentsPost**](docs/WorkItemsCommentsApi.md#apiV2WorkItemsCommentsPost) | **POST** /api/v2/workItems/comments | Create WorkItem comment
*testit_api_client.WorkItemsCommentsApi* | [**apiV2WorkItemsCommentsPut**](docs/WorkItemsCommentsApi.md#apiV2WorkItemsCommentsPut) | **PUT** /api/v2/workItems/comments | Update WorkItem comment
*testit_api_client.WorkItemsCommentsApi* | [**apiV2WorkItemsIdCommentsGet**](docs/WorkItemsCommentsApi.md#apiV2WorkItemsIdCommentsGet) | **GET** /api/v2/workItems/{id}/comments | Get WorkItem comments by Id or GlobalId


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
