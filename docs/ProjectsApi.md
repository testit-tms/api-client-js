# testit_api_client.ProjectsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2ProjectsIdCustomAttributeTemplatesTemplateIdDelete**](ProjectsApi.md#apiV2ProjectsIdCustomAttributeTemplatesTemplateIdDelete) | **DELETE** /api/v2/projects/{id}/customAttributeTemplates/{templateId} | Delete CustomAttributeTemplate from Project
[**apiV2ProjectsIdCustomAttributeTemplatesTemplateIdPost**](ProjectsApi.md#apiV2ProjectsIdCustomAttributeTemplatesTemplateIdPost) | **POST** /api/v2/projects/{id}/customAttributeTemplates/{templateId} | Add CustomAttributeTemplate to Project
[**apiV2ProjectsIdFailureClassesGet**](ProjectsApi.md#apiV2ProjectsIdFailureClassesGet) | **GET** /api/v2/projects/{id}/failureClasses | Get Project FailureClasses
[**apiV2ProjectsIdFavoritePut**](ProjectsApi.md#apiV2ProjectsIdFavoritePut) | **PUT** /api/v2/projects/{id}/favorite | Mark Project as favorite
[**apiV2ProjectsIdFiltersGet**](ProjectsApi.md#apiV2ProjectsIdFiltersGet) | **GET** /api/v2/projects/{id}/filters | Get Project filters
[**apiV2ProjectsIdTestPlansAnalyticsGet**](ProjectsApi.md#apiV2ProjectsIdTestPlansAnalyticsGet) | **GET** /api/v2/projects/{id}/testPlans/analytics | Get TestPlans analytics
[**apiV2ProjectsIdTestPlansSearchPost**](ProjectsApi.md#apiV2ProjectsIdTestPlansSearchPost) | **POST** /api/v2/projects/{id}/testPlans/search | Get Project TestPlans with analytics
[**apiV2ProjectsIdTestRunsActiveGet**](ProjectsApi.md#apiV2ProjectsIdTestRunsActiveGet) | **GET** /api/v2/projects/{id}/testRuns/active | Get active Project TestRuns
[**apiV2ProjectsIdTestRunsFullGet**](ProjectsApi.md#apiV2ProjectsIdTestRunsFullGet) | **GET** /api/v2/projects/{id}/testRuns/full | Get Project TestRuns full models
[**apiV2ProjectsIdWorkItemsTagsGet**](ProjectsApi.md#apiV2ProjectsIdWorkItemsTagsGet) | **GET** /api/v2/projects/{id}/workItems/tags | Get WorkItems Tags
[**apiV2ProjectsSearchPost**](ProjectsApi.md#apiV2ProjectsSearchPost) | **POST** /api/v2/projects/search | 
[**callExport**](ProjectsApi.md#callExport) | **POST** /api/v2/projects/{id}/export | Export project as JSON file
[**callImport**](ProjectsApi.md#callImport) | **POST** /api/v2/projects/import | Import project from JSON file
[**createCustomAttributeTestPlanProjectRelations**](ProjectsApi.md#createCustomAttributeTestPlanProjectRelations) | **POST** /api/v2/projects/{id}/testPlans/attributes | Add attributes to project&#39;s test plans
[**createProject**](ProjectsApi.md#createProject) | **POST** /api/v2/projects | Create project
[**createProjectsAttribute**](ProjectsApi.md#createProjectsAttribute) | **POST** /api/v2/projects/{id}/attributes | Create project attribute
[**deleteCustomAttributeTestPlanProjectRelations**](ProjectsApi.md#deleteCustomAttributeTestPlanProjectRelations) | **DELETE** /api/v2/projects/{id}/testPlans/attribute/{attributeId} | Delete attribute from project&#39;s test plans
[**deleteProject**](ProjectsApi.md#deleteProject) | **DELETE** /api/v2/projects/{id} | Delete project
[**deleteProjectAutoTests**](ProjectsApi.md#deleteProjectAutoTests) | **DELETE** /api/v2/projects/{id}/autoTests | Delete project
[**deleteProjectsAttribute**](ProjectsApi.md#deleteProjectsAttribute) | **DELETE** /api/v2/projects/{id}/attributes/{attributeId} | Delete project attribute
[**exportWithTestPlansAndConfigurations**](ProjectsApi.md#exportWithTestPlansAndConfigurations) | **POST** /api/v2/projects/{id}/export-by-testPlans | Export project with test plans, test suites and test points as JSON file
[**getAllProjects**](ProjectsApi.md#getAllProjects) | **GET** /api/v2/projects | Get all projects
[**getAttributeByProjectId**](ProjectsApi.md#getAttributeByProjectId) | **GET** /api/v2/projects/{id}/attributes/{attributeId} | Get project attribute
[**getAttributesByProjectId**](ProjectsApi.md#getAttributesByProjectId) | **GET** /api/v2/projects/{id}/attributes | Get project attributes
[**getAutoTestsNamespaces**](ProjectsApi.md#getAutoTestsNamespaces) | **GET** /api/v2/projects/{id}/autoTestsNamespaces | Get namespaces of autotests in project
[**getConfigurationsByProjectId**](ProjectsApi.md#getConfigurationsByProjectId) | **GET** /api/v2/projects/{id}/configurations | Get project configurations
[**getCustomAttributeTestPlanProjectRelations**](ProjectsApi.md#getCustomAttributeTestPlanProjectRelations) | **GET** /api/v2/projects/{id}/testPlans/attributes | Get project&#39;s test plan attributes
[**getProjectById**](ProjectsApi.md#getProjectById) | **GET** /api/v2/projects/{id} | Get project by ID
[**getSectionsByProjectId**](ProjectsApi.md#getSectionsByProjectId) | **GET** /api/v2/projects/{id}/sections | Get project sections
[**getTestPlansByProjectId**](ProjectsApi.md#getTestPlansByProjectId) | **GET** /api/v2/projects/{id}/testPlans | Get project test plans
[**getTestRunsByProjectId**](ProjectsApi.md#getTestRunsByProjectId) | **GET** /api/v2/projects/{id}/testRuns | Get project test runs
[**getWorkItemsByProjectId**](ProjectsApi.md#getWorkItemsByProjectId) | **GET** /api/v2/projects/{id}/workItems | Get project work items
[**importToExistingProject**](ProjectsApi.md#importToExistingProject) | **POST** /api/v2/projects/{id}/import | Import project from JSON file into existing project
[**restoreProject**](ProjectsApi.md#restoreProject) | **POST** /api/v2/projects/{id}/restore | Restore project
[**updateCustomAttributeTestPlanProjectRelations**](ProjectsApi.md#updateCustomAttributeTestPlanProjectRelations) | **PUT** /api/v2/projects/{id}/testPlans/attribute | Update attribute of project&#39;s test plans
[**updateProject**](ProjectsApi.md#updateProject) | **PUT** /api/v2/projects | Update project
[**updateProjectsAttribute**](ProjectsApi.md#updateProjectsAttribute) | **PUT** /api/v2/projects/{id}/attributes | Update project attribute



## apiV2ProjectsIdCustomAttributeTemplatesTemplateIdDelete

> apiV2ProjectsIdCustomAttributeTemplatesTemplateIdDelete(id, templateId)

Delete CustomAttributeTemplate from Project

&lt;br&gt;Use case  &lt;br&gt;User sets project internal or global identifier   &lt;br&gt;User sets attribute template internal identifier   &lt;br&gt;User runs method execution  &lt;br&gt;System delete attribute template from project

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
let templateId = "templateId_example"; // String | CustomAttributeTemplate internal (UUID) identifier
apiInstance.apiV2ProjectsIdCustomAttributeTemplatesTemplateIdDelete(id, templateId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project internal (UUID) or global (integer) identifier | 
 **templateId** | **String**| CustomAttributeTemplate internal (UUID) identifier | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ProjectsIdCustomAttributeTemplatesTemplateIdPost

> apiV2ProjectsIdCustomAttributeTemplatesTemplateIdPost(id, templateId)

Add CustomAttributeTemplate to Project

&lt;br&gt;Use case  &lt;br&gt;User sets project internal or global identifier   &lt;br&gt;User sets attribute template internal identifier   &lt;br&gt;User runs method execution  &lt;br&gt;System add attribute template to project

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
let templateId = "templateId_example"; // String | CustomAttributeTemplate internal (UUID) identifier
apiInstance.apiV2ProjectsIdCustomAttributeTemplatesTemplateIdPost(id, templateId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project internal (UUID) or global (integer) identifier | 
 **templateId** | **String**| CustomAttributeTemplate internal (UUID) identifier | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ProjectsIdFailureClassesGet

> [FailureClassModel] apiV2ProjectsIdFailureClassesGet(id, opts)

Get Project FailureClasses

&lt;br&gt;Use case  &lt;br&gt;User sets project internal or global identifier   &lt;br&gt;User runs method execution  &lt;br&gt;System returns project failre classes

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
let opts = {
  'isDeleted': true // Boolean | 
};
apiInstance.apiV2ProjectsIdFailureClassesGet(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project internal (UUID) or global (integer) identifier | 
 **isDeleted** | **Boolean**|  | [optional] 

### Return type

[**[FailureClassModel]**](FailureClassModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ProjectsIdFavoritePut

> apiV2ProjectsIdFavoritePut(id)

Mark Project as favorite

User permissions for project:  {Read only}  {Execute}  {Write}  {Full control}

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let id = "id_example"; // String | 
apiInstance.apiV2ProjectsIdFavoritePut(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ProjectsIdFiltersGet

> [FilterModel] apiV2ProjectsIdFiltersGet(id)

Get Project filters

&lt;br&gt;Use case  &lt;br&gt;User sets project internal or global identifier   &lt;br&gt;User runs method execution  &lt;br&gt;System returns project filters

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
apiInstance.apiV2ProjectsIdFiltersGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project internal (UUID) or global (integer) identifier | 

### Return type

[**[FilterModel]**](FilterModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ProjectsIdTestPlansAnalyticsGet

> [TestPlanWithAnalyticModel] apiV2ProjectsIdTestPlansAnalyticsGet(id, opts)

Get TestPlans analytics

&lt;br&gt;Use case  &lt;br&gt;User sets project internal identifier  &lt;br&gt;User sets query params  &lt;br&gt;User runs method execution  &lt;br&gt;System return analytics

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) identifier
let opts = {
  'isDeleted': true, // Boolean | 
  'mustUpdateCache': false, // Boolean | 
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example" // String | Value for searching
};
apiInstance.apiV2ProjectsIdTestPlansAnalyticsGet(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project internal (UUID) identifier | 
 **isDeleted** | **Boolean**|  | [optional] 
 **mustUpdateCache** | **Boolean**|  | [optional] [default to false]
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 

### Return type

[**[TestPlanWithAnalyticModel]**](TestPlanWithAnalyticModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ProjectsIdTestPlansSearchPost

> [TestPlanWithAnalyticModel] apiV2ProjectsIdTestPlansSearchPost(id, opts)

Get Project TestPlans with analytics

&lt;br&gt;Use case  &lt;br&gt;User sets project internal or global identifier   &lt;br&gt;User sets request body   &lt;br&gt;User runs method execution  &lt;br&gt;System returns project testplans with analytics

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
let opts = {
  'mustUpdateCache': false, // Boolean | 
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example", // String | Value for searching
  'testPlanSearchQueryModel': new testit_api_client.TestPlanSearchQueryModel() // TestPlanSearchQueryModel | 
};
apiInstance.apiV2ProjectsIdTestPlansSearchPost(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project internal (UUID) or global (integer) identifier | 
 **mustUpdateCache** | **Boolean**|  | [optional] [default to false]
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 
 **testPlanSearchQueryModel** | [**TestPlanSearchQueryModel**](TestPlanSearchQueryModel.md)|  | [optional] 

### Return type

[**[TestPlanWithAnalyticModel]**](TestPlanWithAnalyticModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2ProjectsIdTestRunsActiveGet

> [PublicTestRunModel] apiV2ProjectsIdTestRunsActiveGet(id)

Get active Project TestRuns

&lt;br&gt;Use case  &lt;br&gt;User sets project internal or global identifier   &lt;br&gt;User runs method execution  &lt;br&gt;System returns active testruns

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
apiInstance.apiV2ProjectsIdTestRunsActiveGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project internal (UUID) or global (integer) identifier | 

### Return type

[**[PublicTestRunModel]**](PublicTestRunModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ProjectsIdTestRunsFullGet

> [TestRunModel] apiV2ProjectsIdTestRunsFullGet(id, opts)

Get Project TestRuns full models

&lt;br&gt;Use case  &lt;br&gt;User sets project internal or global identifier   &lt;br&gt;User sets query params   &lt;br&gt;User runs method execution  &lt;br&gt;System returns project test runs full models

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
let opts = {
  'includeTestResults': false, // Boolean | 
  'mustAggregateTestResults': true, // Boolean | 
  'notStarted': true, // Boolean | 
  'inProgress': true, // Boolean | 
  'stopped': true, // Boolean | 
  'completed': true, // Boolean | 
  'createdDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdDateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'testPlanId': "testPlanId_example", // String | 
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example" // String | Value for searching
};
apiInstance.apiV2ProjectsIdTestRunsFullGet(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project internal (UUID) or global (integer) identifier | 
 **includeTestResults** | **Boolean**|  | [optional] [default to false]
 **mustAggregateTestResults** | **Boolean**|  | [optional] [default to true]
 **notStarted** | **Boolean**|  | [optional] 
 **inProgress** | **Boolean**|  | [optional] 
 **stopped** | **Boolean**|  | [optional] 
 **completed** | **Boolean**|  | [optional] 
 **createdDateFrom** | **Date**|  | [optional] 
 **createdDateTo** | **Date**|  | [optional] 
 **testPlanId** | **String**|  | [optional] 
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 

### Return type

[**[TestRunModel]**](TestRunModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ProjectsIdWorkItemsTagsGet

> [TagShortModel] apiV2ProjectsIdWorkItemsTagsGet(id, opts)

Get WorkItems Tags

&lt;br&gt;Use case  &lt;br&gt;User sets project internal identifier   &lt;br&gt;User runs method execution  &lt;br&gt;System returns work items tags

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) identifier
let opts = {
  'isDeleted': true // Boolean | 
};
apiInstance.apiV2ProjectsIdWorkItemsTagsGet(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project internal (UUID) identifier | 
 **isDeleted** | **Boolean**|  | [optional] 

### Return type

[**[TagShortModel]**](TagShortModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ProjectsSearchPost

> [ProjectModel] apiV2ProjectsSearchPost(opts)



### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let opts = {
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example", // String | Value for searching
  'projectSelectModel': new testit_api_client.ProjectSelectModel() // ProjectSelectModel | 
};
apiInstance.apiV2ProjectsSearchPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 
 **projectSelectModel** | [**ProjectSelectModel**](ProjectSelectModel.md)|  | [optional] 

### Return type

[**[ProjectModel]**](ProjectModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## callExport

> File callExport(id, opts)

Export project as JSON file

&lt;br&gt;This method exports the selected project or its part (sections, work items) to a &#x60;.json&#x60; file.  &lt;br&gt;In the request body, you can specify sections and test cases to be exported.  &lt;br&gt;Example of a request to export two sections and two test cases:  &lt;br&gt;    &lt;code&gt;              curl -X POST \&quot;http://{domain}.com/api/v2/projects/27a32ce6-d972-4ef8-bef5-51be4bf9e468/export\&quot; \\              -H \&quot;accept: application/json\&quot; -H \&quot;Authorization: PrivateToken {token}\&quot; -H \&quot;Content-Type: application/json-patch+json\&quot; \\              -d \&quot;{\\\&quot;sectionIds\\\&quot;:[\\\&quot;3fa85f64-5717-4562-b3fc-2c963f66afa6\\\&quot;,\\\&quot;9fa85f64-5717-4562-b3fc-2c963f66a000\\\&quot;],\\\&quot;workItemIds\\\&quot;:[\\\&quot;3fa85f64-5717-4562-b3fc-2c963f66afa6\\\&quot;,\\\&quot;90085f64-5717-4562-b3fc-2c963f66a000\\\&quot;]}\&quot;              &lt;/code&gt;    &lt;br&gt;In the response, you get:  &lt;br&gt;              - A &#x60;.zip&#x60; file with attachments and a.json file if you enable attachments export.&lt;br /&gt;              - A &#x60;.json&#x60; file with the project if you do not enable attachments export.              

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let id = "id_example"; // String | Specifies the ID of the project you want to export.
let opts = {
  'includeAttachments': false, // Boolean | Enables attachment export.
  'projectExportQueryModel': new testit_api_client.ProjectExportQueryModel() // ProjectExportQueryModel | 
};
apiInstance.callExport(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Specifies the ID of the project you want to export. | 
 **includeAttachments** | **Boolean**| Enables attachment export. | [optional] [default to false]
 **projectExportQueryModel** | [**ProjectExportQueryModel**](ProjectExportQueryModel.md)|  | [optional] 

### Return type

**File**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## callImport

> callImport(opts)

Import project from JSON file

&lt;br&gt;    &lt;b&gt;A project can only be exported to another TMS instance, different from the one it was imported from.&lt;/b&gt;    &lt;br&gt;This method imports a &#x60;.json&#x60; file with a project to the test management system.  &lt;br&gt;In the body of the request, send the &#x60;.json&#x60; file received by the &#x60;POST /api/v2/projects/export&#x60; method:  &lt;br&gt;    &lt;code&gt;              curl -X POST \&quot;http://{domain.com}/api/v2/projects/import\&quot; \\              -H \&quot;accept: /\&quot; -H \&quot;Authorization: PrivateToken {token}\&quot; -H \&quot;Content-Type: multipart/form-data\&quot; \\              -F \&quot;file&#x3D;@import.txt;type&#x3D;text/plain\&quot;              &lt;/code&gt;    &lt;br&gt;              In the second instance, a project with the name of the imported one is created.              User attributes and the test library (along with content and structure) are imported.                &lt;br&gt;Test plan execution history from the first instance of TMS cannot be transferred.

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let opts = {
  'includeAttachments': false, // Boolean | Enables attachment import.
  'file': "/path/to/file" // File | Select file
};
apiInstance.callImport(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includeAttachments** | **Boolean**| Enables attachment import. | [optional] [default to false]
 **file** | **File**| Select file | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## createCustomAttributeTestPlanProjectRelations

> createCustomAttributeTestPlanProjectRelations(id, opts)

Add attributes to project&#39;s test plans

&lt;br&gt;Use case  &lt;br&gt;User sets project internal or global identifier and attributes identifiers  &lt;br&gt;User runs method execution  &lt;br&gt;System updates project and add attributes to project for test plans  &lt;br&gt;System returns no content response

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
let opts = {
  'requestBody': ["null"] // [String] | 
};
apiInstance.createCustomAttributeTestPlanProjectRelations(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project internal (UUID) or global (integer) identifier | 
 **requestBody** | [**[String]**](String.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createProject

> ProjectModel createProject(opts)

Create project

&lt;br&gt;Use case  &lt;br&gt;User sets project parameters (listed in request example) and runs method execution  &lt;br&gt;System creates project  &lt;br&gt;System returns project model (example listed in response parameters)

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let opts = {
  'projectPostModel': new testit_api_client.ProjectPostModel() // ProjectPostModel | 
};
apiInstance.createProject(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPostModel** | [**ProjectPostModel**](ProjectPostModel.md)|  | [optional] 

### Return type

[**ProjectModel**](ProjectModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createProjectsAttribute

> CustomAttributeModel createProjectsAttribute(id, opts)

Create project attribute

&lt;br&gt;Use case  &lt;br&gt;User sets attribute parameters (listed in request example) and runs method execution  &lt;br&gt;System search project  &lt;br&gt;System creates attribute and relates it to the project  &lt;br&gt;System returns project attribute properties (example listed in response parameters)

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
let opts = {
  'customAttributePostModel': new testit_api_client.CustomAttributePostModel() // CustomAttributePostModel | 
};
apiInstance.createProjectsAttribute(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project internal (UUID) or global (integer) identifier | 
 **customAttributePostModel** | [**CustomAttributePostModel**](CustomAttributePostModel.md)|  | [optional] 

### Return type

[**CustomAttributeModel**](CustomAttributeModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCustomAttributeTestPlanProjectRelations

> deleteCustomAttributeTestPlanProjectRelations(id, attributeId)

Delete attribute from project&#39;s test plans

&lt;br&gt;Use case  &lt;br&gt;User sets project internal or global identifier and attribute identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System updates project and delete attribute from project for test plans  &lt;br&gt;System returns no content response

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
let attributeId = "attributeId_example"; // String | 
apiInstance.deleteCustomAttributeTestPlanProjectRelations(id, attributeId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project internal (UUID) or global (integer) identifier | 
 **attributeId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteProject

> deleteProject(id)

Delete project

&lt;br&gt;Use case  &lt;br&gt;User sets project internal or global identifier and runs method execution  &lt;br&gt;System search and delete project  &lt;br&gt;System returns no content response

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
apiInstance.deleteProject(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project internal (UUID) or global (integer) identifier | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteProjectAutoTests

> deleteProjectAutoTests(id)

Delete project

&lt;br&gt;Use case  &lt;br&gt;User sets project internal or global identifier   &lt;br&gt;User runs method execution  &lt;br&gt;System delete all autotests from project  &lt;br&gt;System returns no content response

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
apiInstance.deleteProjectAutoTests(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project internal (UUID) or global (integer) identifier | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteProjectsAttribute

> deleteProjectsAttribute(id, attributeId)

Delete project attribute

&lt;br&gt;Use case  &lt;br&gt;User sets project identifier and runs method execution  &lt;br&gt;User sets attribute identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System search project  &lt;br&gt;System search and delete attribute  &lt;br&gt;System returns no content response

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
let attributeId = "attributeId_example"; // String | Project attribute internal (UUID) or global (integer) identifier
apiInstance.deleteProjectsAttribute(id, attributeId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project internal (UUID) or global (integer) identifier | 
 **attributeId** | **String**| Project attribute internal (UUID) or global (integer) identifier | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## exportWithTestPlansAndConfigurations

> File exportWithTestPlansAndConfigurations(id, opts)

Export project with test plans, test suites and test points as JSON file

&lt;br&gt;    &lt;b&gt;You cannot export test cases execution history.&lt;/b&gt;    &lt;br&gt;This method exports the project with the test library and specified test plans to another TMS instance.  &lt;br&gt;              After sending a correct request, the project is exported to a &#x60;.json&#x60; file.              If you enable attachment export, the &#x60;.json&#x60; file and the attachments are placed in a &#x60;.zip&#x60; file.              You can import such a project by using the &#x60;POST /api/v2/projects/import&#x60; method.              

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let id = "id_example"; // String | Specifies the ID of the project you want to export.
let opts = {
  'includeAttachments': false, // Boolean | Enables attachment export.
  'projectExportWithTestPlansPostModel': new testit_api_client.ProjectExportWithTestPlansPostModel() // ProjectExportWithTestPlansPostModel | 
};
apiInstance.exportWithTestPlansAndConfigurations(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Specifies the ID of the project you want to export. | 
 **includeAttachments** | **Boolean**| Enables attachment export. | [optional] [default to false]
 **projectExportWithTestPlansPostModel** | [**ProjectExportWithTestPlansPostModel**](ProjectExportWithTestPlansPostModel.md)|  | [optional] 

### Return type

**File**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAllProjects

> [ProjectModel] getAllProjects(opts)

Get all projects

&lt;br&gt;Use case  &lt;br&gt;[Optional] User sets isDeleted field value  &lt;br&gt;[Optional] If User sets isDeleted field value as true, System search all deleted projects  &lt;br&gt;[Optional] If User sets isDeleted field value as false, System search all projects which are not deleted  &lt;br&gt;If User did not set isDeleted field value, System search all projects  &lt;br&gt;System returns array of all found projects(listed in response model)

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let opts = {
  'isDeleted': true, // Boolean | If result must consist of only actual/deleted parameters
  'projectName': "projectName_example", // String | 
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example" // String | Value for searching
};
apiInstance.getAllProjects(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **isDeleted** | **Boolean**| If result must consist of only actual/deleted parameters | [optional] 
 **projectName** | **String**|  | [optional] 
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 

### Return type

[**[ProjectModel]**](ProjectModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAttributeByProjectId

> CustomAttributeModel getAttributeByProjectId(id, attributeId)

Get project attribute

&lt;br&gt;Use case  &lt;br&gt;User sets project internal or global identifier  &lt;br&gt;User sets project attribute identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System search project  &lt;br&gt;System search project attribute   &lt;br&gt;System returns project attribute (listed in response model)

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
let attributeId = "attributeId_example"; // String | Project attribute internal (UUID) or global (integer) identifier
apiInstance.getAttributeByProjectId(id, attributeId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project internal (UUID) or global (integer) identifier | 
 **attributeId** | **String**| Project attribute internal (UUID) or global (integer) identifier | 

### Return type

[**CustomAttributeModel**](CustomAttributeModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAttributesByProjectId

> [CustomAttributeModel] getAttributesByProjectId(id, opts)

Get project attributes

&lt;br&gt;Use case  &lt;br&gt;User sets project internal or global identifier  &lt;br&gt;[Optional] User sets isDeleted field value  &lt;br&gt;User runs method execution  &lt;br&gt;System search project  &lt;br&gt;[Optional] If User sets isDeleted field value as true, System search all deleted attributes related to project  &lt;br&gt;[Optional] If User sets isDeleted field value as false, System search all attributes related to project which are not deleted  &lt;br&gt;[Optional] If User did not set isDeleted field value, System search all attributes related to project  &lt;br&gt;System returns array of found attributes (listed in response model)

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
let opts = {
  'isDeleted': false // Boolean | If result must consist of only actual/deleted work items
};
apiInstance.getAttributesByProjectId(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project internal (UUID) or global (integer) identifier | 
 **isDeleted** | **Boolean**| If result must consist of only actual/deleted work items | [optional] [default to false]

### Return type

[**[CustomAttributeModel]**](CustomAttributeModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAutoTestsNamespaces

> [AutoTestNamespaceModel] getAutoTestsNamespaces(id)

Get namespaces of autotests in project

&lt;br&gt;Use case  &lt;br&gt;User sets project internal or global identifier and runs method execution  &lt;br&gt;System search project  &lt;br&gt;System search all autotest related to the project  &lt;br&gt;System returns array of autotest with namespaces and classnames (listed in response)

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
apiInstance.getAutoTestsNamespaces(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project internal (UUID) or global (integer) identifier | 

### Return type

[**[AutoTestNamespaceModel]**](AutoTestNamespaceModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConfigurationsByProjectId

> [ConfigurationModel] getConfigurationsByProjectId(id)

Get project configurations

&lt;br&gt;Use case  &lt;br&gt;User sets project internal or global identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System search project  &lt;br&gt;System search all configurations related to project  &lt;br&gt;System returns array of found configurations (listed in response model)

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
apiInstance.getConfigurationsByProjectId(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project internal (UUID) or global (integer) identifier | 

### Return type

[**[ConfigurationModel]**](ConfigurationModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomAttributeTestPlanProjectRelations

> [CustomAttributeModel] getCustomAttributeTestPlanProjectRelations(id)

Get project&#39;s test plan attributes

&lt;br&gt;Use case  &lt;br&gt;User runs method execution  &lt;br&gt;System returns project for test plans attributes by project identifier

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
apiInstance.getCustomAttributeTestPlanProjectRelations(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project internal (UUID) or global (integer) identifier | 

### Return type

[**[CustomAttributeModel]**](CustomAttributeModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectById

> ProjectModel getProjectById(id)

Get project by ID

&lt;br&gt;Use case  &lt;br&gt;User sets project internal or global identifier and runs method execution  &lt;br&gt;System search project  &lt;br&gt;System returns project (example listed in response parameters)

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
apiInstance.getProjectById(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project internal (UUID) or global (integer) identifier | 

### Return type

[**ProjectModel**](ProjectModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSectionsByProjectId

> [SectionModel] getSectionsByProjectId(id, opts)

Get project sections

&lt;br&gt;Use case  &lt;br&gt;User sets project internal or global identifier and runs method execution  &lt;br&gt;System search project  &lt;br&gt;System search all sections related to the project  &lt;br&gt;System returns array of sections (listed in response)

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
let opts = {
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example" // String | Value for searching
};
apiInstance.getSectionsByProjectId(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project internal (UUID) or global (integer) identifier | 
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 

### Return type

[**[SectionModel]**](SectionModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTestPlansByProjectId

> [TestPlanModel] getTestPlansByProjectId(id, opts)

Get project test plans

&lt;br&gt;Use case  &lt;br&gt;User sets project internal or global identifier  &lt;br&gt;[Optional] User sets isDeleted field value  &lt;br&gt;User runs method execution  &lt;br&gt;System search project  &lt;br&gt;[Optional] If User sets isDeleted field value as true, System search all deleted test plans related to project  &lt;br&gt;[Optional] If User sets isDeleted field value as false, System search all test plans related to project which are not deleted  &lt;br&gt;[Optional] If User did not set isDeleted field value, System search all v related to project  &lt;br&gt;System returns array of found test plans (listed in response model)

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
let opts = {
  'isDeleted': true // Boolean | If result must consist of only actual/archived test plans
};
apiInstance.getTestPlansByProjectId(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project internal (UUID) or global (integer) identifier | 
 **isDeleted** | **Boolean**| If result must consist of only actual/archived test plans | [optional] 

### Return type

[**[TestPlanModel]**](TestPlanModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTestRunsByProjectId

> [TestRunV2GetModel] getTestRunsByProjectId(id, opts)

Get project test runs

&lt;br&gt;Use case  &lt;br&gt;User sets project internal or global identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System search project  &lt;br&gt;System search all test runs related to project  &lt;br&gt;System returns array of found test runs (listed in response model)

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
let opts = {
  'notStarted': true, // Boolean | 
  'inProgress': true, // Boolean | 
  'stopped': true, // Boolean | 
  'completed': true, // Boolean | 
  'createdDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdDateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'testPlanId': "testPlanId_example", // String | 
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example" // String | Value for searching
};
apiInstance.getTestRunsByProjectId(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project internal (UUID) or global (integer) identifier | 
 **notStarted** | **Boolean**|  | [optional] 
 **inProgress** | **Boolean**|  | [optional] 
 **stopped** | **Boolean**|  | [optional] 
 **completed** | **Boolean**|  | [optional] 
 **createdDateFrom** | **Date**|  | [optional] 
 **createdDateTo** | **Date**|  | [optional] 
 **testPlanId** | **String**|  | [optional] 
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 

### Return type

[**[TestRunV2GetModel]**](TestRunV2GetModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkItemsByProjectId

> [WorkItemShortModel] getWorkItemsByProjectId(id, opts)

Get project work items

&lt;br&gt;Use case  &lt;br&gt;User sets project internal or global identifier  &lt;br&gt;[Optional] User sets isDeleted field value  &lt;br&gt;User runs method execution  &lt;br&gt;System search project  &lt;br&gt;[Optional] If User sets isDeleted field value as true, System search all deleted workitems related to project  &lt;br&gt;[Optional] If User sets isDeleted field value as false, System search all workitems related to project which are not deleted  &lt;br&gt;If User did not set isDeleted field value, System search all  workitems related to project  &lt;br&gt;System returns array of found workitems (listed in response model)

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
let opts = {
  'isDeleted': false, // Boolean | If result must consist of only actual/deleted work items
  'tagNames': ["null"], // [String] | List of tags to filter by
  'includeIterations': true, // Boolean | 
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example" // String | Value for searching
};
apiInstance.getWorkItemsByProjectId(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project internal (UUID) or global (integer) identifier | 
 **isDeleted** | **Boolean**| If result must consist of only actual/deleted work items | [optional] [default to false]
 **tagNames** | [**[String]**](String.md)| List of tags to filter by | [optional] 
 **includeIterations** | **Boolean**|  | [optional] [default to true]
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 

### Return type

[**[WorkItemShortModel]**](WorkItemShortModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## importToExistingProject

> importToExistingProject(id, opts)

Import project from JSON file into existing project

&lt;br&gt;Use case  &lt;br&gt;User attaches project as json file taken from export or export-by-testPlans method  &lt;br&gt;User runs method execution  &lt;br&gt;System updates project  &lt;br&gt;System returns no content response

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
let opts = {
  'includeAttachments': true, // Boolean | 
  'file': "/path/to/file" // File | Select file
};
apiInstance.importToExistingProject(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project internal (UUID) or global (integer) identifier | 
 **includeAttachments** | **Boolean**|  | [optional] 
 **file** | **File**| Select file | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## restoreProject

> restoreProject(id)

Restore project

&lt;br&gt;Use case  &lt;br&gt;User sets project internal or global identifier and runs method execution  &lt;br&gt;System search and restores deleted project  &lt;br&gt;System returns no content response

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
apiInstance.restoreProject(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project internal (UUID) or global (integer) identifier | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCustomAttributeTestPlanProjectRelations

> updateCustomAttributeTestPlanProjectRelations(id, opts)

Update attribute of project&#39;s test plans

&lt;br&gt;Use case  &lt;br&gt;User sets project internal or global identifier and attribute model  &lt;br&gt;User runs method execution  &lt;br&gt;System updates project and project attribute for test plan  &lt;br&gt;System returns no content response

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
let opts = {
  'customAttributeTestPlanProjectRelationPutModel': new testit_api_client.CustomAttributeTestPlanProjectRelationPutModel() // CustomAttributeTestPlanProjectRelationPutModel | 
};
apiInstance.updateCustomAttributeTestPlanProjectRelations(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project internal (UUID) or global (integer) identifier | 
 **customAttributeTestPlanProjectRelationPutModel** | [**CustomAttributeTestPlanProjectRelationPutModel**](CustomAttributeTestPlanProjectRelationPutModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProject

> updateProject(opts)

Update project

&lt;br&gt;Use case  &lt;br&gt;User sets project parameters (listed in request example) and runs method execution  &lt;br&gt;System updates project  &lt;br&gt;System returns updated project model (example listed in response parameters)

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let opts = {
  'projectPutModel': new testit_api_client.ProjectPutModel() // ProjectPutModel | 
};
apiInstance.updateProject(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectPutModel** | [**ProjectPutModel**](ProjectPutModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProjectsAttribute

> updateProjectsAttribute(id, opts)

Update project attribute

&lt;br&gt;Use case  &lt;br&gt;User sets project parameters (listed in request example) and runs method execution  &lt;br&gt;System updates project  &lt;br&gt;System updates attribute related to the project  &lt;br&gt;System returns no content response

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
let opts = {
  'customAttributePutModel': new testit_api_client.CustomAttributePutModel() // CustomAttributePutModel | 
};
apiInstance.updateProjectsAttribute(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project internal (UUID) or global (integer) identifier | 
 **customAttributePutModel** | [**CustomAttributePutModel**](CustomAttributePutModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

