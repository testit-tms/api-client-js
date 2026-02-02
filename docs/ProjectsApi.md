# TestitApiClient.ProjectsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addGlobalAttributesToProject**](ProjectsApi.md#addGlobalAttributesToProject) | **POST** /api/v2/projects/{id}/globalAttributes | Add global attributes to project
[**apiV2ProjectsIdDelete**](ProjectsApi.md#apiV2ProjectsIdDelete) | **DELETE** /api/v2/projects/{id} | Archive project
[**apiV2ProjectsIdFailureClassesGet**](ProjectsApi.md#apiV2ProjectsIdFailureClassesGet) | **GET** /api/v2/projects/{id}/failureClasses | Get failure classes
[**apiV2ProjectsIdFavoritePut**](ProjectsApi.md#apiV2ProjectsIdFavoritePut) | **PUT** /api/v2/projects/{id}/favorite | Mark Project as favorite
[**apiV2ProjectsIdFiltersGet**](ProjectsApi.md#apiV2ProjectsIdFiltersGet) | **GET** /api/v2/projects/{id}/filters | Get Project filters
[**apiV2ProjectsIdPatch**](ProjectsApi.md#apiV2ProjectsIdPatch) | **PATCH** /api/v2/projects/{id} | Patch project
[**apiV2ProjectsIdPurgePost**](ProjectsApi.md#apiV2ProjectsIdPurgePost) | **POST** /api/v2/projects/{id}/purge | Purge the project
[**apiV2ProjectsIdRestorePost**](ProjectsApi.md#apiV2ProjectsIdRestorePost) | **POST** /api/v2/projects/{id}/restore | Restore archived project
[**apiV2ProjectsIdTestPlansAttributeAttributeIdDelete**](ProjectsApi.md#apiV2ProjectsIdTestPlansAttributeAttributeIdDelete) | **DELETE** /api/v2/projects/{id}/testPlans/attribute/{attributeId} | Delete attribute from project&#39;s test plans
[**apiV2ProjectsIdTestPlansAttributePut**](ProjectsApi.md#apiV2ProjectsIdTestPlansAttributePut) | **PUT** /api/v2/projects/{id}/testPlans/attribute | Update attribute of project&#39;s test plans
[**apiV2ProjectsIdTestRunsFullGet**](ProjectsApi.md#apiV2ProjectsIdTestRunsFullGet) | **GET** /api/v2/projects/{id}/testRuns/full | Get Project TestRuns full models
[**apiV2ProjectsNameNameExistsGet**](ProjectsApi.md#apiV2ProjectsNameNameExistsGet) | **GET** /api/v2/projects/name/{name}/exists | 
[**apiV2ProjectsPurgeBulkPost**](ProjectsApi.md#apiV2ProjectsPurgeBulkPost) | **POST** /api/v2/projects/purge/bulk | Purge multiple projects
[**apiV2ProjectsRestoreBulkPost**](ProjectsApi.md#apiV2ProjectsRestoreBulkPost) | **POST** /api/v2/projects/restore/bulk | Restore multiple projects
[**apiV2ProjectsSearchPost**](ProjectsApi.md#apiV2ProjectsSearchPost) | **POST** /api/v2/projects/search | Search for projects
[**apiV2ProjectsShortsPost**](ProjectsApi.md#apiV2ProjectsShortsPost) | **POST** /api/v2/projects/shorts | Get projects short models
[**createProject**](ProjectsApi.md#createProject) | **POST** /api/v2/projects | Create project
[**deleteProjectAutoTests**](ProjectsApi.md#deleteProjectAutoTests) | **DELETE** /api/v2/projects/{id}/autoTests | Delete all autotests from project
[**getAllProjects**](ProjectsApi.md#getAllProjects) | **GET** /api/v2/projects | Get all projects
[**getAutoTestsNamespaces**](ProjectsApi.md#getAutoTestsNamespaces) | **GET** /api/v2/projects/{id}/autoTestsNamespaces | Get namespaces of autotests in project
[**getProjectById**](ProjectsApi.md#getProjectById) | **GET** /api/v2/projects/{id} | Get project by ID
[**getTestPlansByProjectId**](ProjectsApi.md#getTestPlansByProjectId) | **GET** /api/v2/projects/{id}/testPlans | Get project test plans
[**getTestRunsByProjectId**](ProjectsApi.md#getTestRunsByProjectId) | **GET** /api/v2/projects/{id}/testRuns | Get project test runs
[**updateProject**](ProjectsApi.md#updateProject) | **PUT** /api/v2/projects | Update project



## addGlobalAttributesToProject

> addGlobalAttributesToProject(id, opts)

Add global attributes to project

 Use case  User sets project internal or global identifier and attributes identifiers  System search project  System relates global attributes with project  System returns no content response

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
let opts = {
  'requestBody': ["null"] // [String] | 
};
apiInstance.addGlobalAttributesToProject(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
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


## apiV2ProjectsIdDelete

> apiV2ProjectsIdDelete(id)

Archive project

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectsApi();
let id = "id_example"; // String | Unique or global ID of the project
apiInstance.apiV2ProjectsIdDelete(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique or global ID of the project | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ProjectsIdFailureClassesGet

> [FailureCategoryApiResult] apiV2ProjectsIdFailureClassesGet(id, opts)

Get failure classes

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectsApi();
let id = "id_example"; // String | Unique or global ID of the project
let opts = {
  'isDeleted': true // Boolean | 
};
apiInstance.apiV2ProjectsIdFailureClassesGet(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique or global ID of the project | 
 **isDeleted** | **Boolean**|  | [optional] 

### Return type

[**[FailureCategoryApiResult]**](FailureCategoryApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ProjectsIdFavoritePut

> apiV2ProjectsIdFavoritePut(id)

Mark Project as favorite

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
apiInstance.apiV2ProjectsIdFavoritePut(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
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


## apiV2ProjectsIdFiltersGet

> [FilterModel] apiV2ProjectsIdFiltersGet(id)

Get Project filters

 Use case  User sets project internal or global identifier  User runs method execution  System returns project filters

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
apiInstance.apiV2ProjectsIdFiltersGet(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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


## apiV2ProjectsIdPatch

> apiV2ProjectsIdPatch(id, opts)

Patch project

See &lt;a href&#x3D;\&quot;https://www.rfc-editor.org/rfc/rfc6902\&quot; target&#x3D;\&quot;_blank\&quot;&gt;RFC 6902: JavaScript Object Notation (JSON) Patch&lt;/a&gt; for details

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectsApi();
let id = "id_example"; // String | Unique or global Id of project
let opts = {
  'operation': [new TestitApiClient.Operation()] // [Operation] | 
};
apiInstance.apiV2ProjectsIdPatch(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique or global Id of project | 
 **operation** | [**[Operation]**](Operation.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2ProjectsIdPurgePost

> apiV2ProjectsIdPurgePost(id)

Purge the project

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectsApi();
let id = "id_example"; // String | Unique or global ID of the project
apiInstance.apiV2ProjectsIdPurgePost(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique or global ID of the project | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ProjectsIdRestorePost

> apiV2ProjectsIdRestorePost(id)

Restore archived project

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectsApi();
let id = "id_example"; // String | Unique or global ID of the project
apiInstance.apiV2ProjectsIdRestorePost(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique or global ID of the project | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ProjectsIdTestPlansAttributeAttributeIdDelete

> apiV2ProjectsIdTestPlansAttributeAttributeIdDelete(id, attributeId)

Delete attribute from project&#39;s test plans

 Use case  User sets project internal or global identifier and attribute identifier  User runs method execution  System updates project and delete attribute from project for test plans  System returns no content response

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
let attributeId = "attributeId_example"; // String | 
apiInstance.apiV2ProjectsIdTestPlansAttributeAttributeIdDelete(id, attributeId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
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


## apiV2ProjectsIdTestPlansAttributePut

> apiV2ProjectsIdTestPlansAttributePut(id, opts)

Update attribute of project&#39;s test plans

 Use case  User sets project internal or global identifier and attribute model  User runs method execution  System updates project and project attribute for test plan  System returns no content response

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
let opts = {
  'customAttributeTestPlanProjectRelationPutModel': new TestitApiClient.CustomAttributeTestPlanProjectRelationPutModel() // CustomAttributeTestPlanProjectRelationPutModel | 
};
apiInstance.apiV2ProjectsIdTestPlansAttributePut(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
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


## apiV2ProjectsIdTestRunsFullGet

> [TestRunApiResult] apiV2ProjectsIdTestRunsFullGet(id, opts)

Get Project TestRuns full models

 Use case  User sets project internal or global identifier  User sets query params  User runs method execution  System returns project test runs full models

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
let opts = {
  'includeTestResults': true, // Boolean | 
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
apiInstance.apiV2ProjectsIdTestRunsFullGet(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project internal (UUID) or global (integer) identifier | 
 **includeTestResults** | **Boolean**|  | [optional] 
 **mustAggregateTestResults** | **Boolean**|  | [optional] 
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

[**[TestRunApiResult]**](TestRunApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ProjectsNameNameExistsGet

> Boolean apiV2ProjectsNameNameExistsGet(name)



### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectsApi();
let name = "name_example"; // String | 
apiInstance.apiV2ProjectsNameNameExistsGet(name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 

### Return type

**Boolean**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ProjectsPurgeBulkPost

> Number apiV2ProjectsPurgeBulkPost(opts)

Purge multiple projects

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectsApi();
let opts = {
  'projectSelectModel': new TestitApiClient.ProjectSelectModel() // ProjectSelectModel | 
};
apiInstance.apiV2ProjectsPurgeBulkPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectSelectModel** | [**ProjectSelectModel**](ProjectSelectModel.md)|  | [optional] 

### Return type

**Number**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2ProjectsRestoreBulkPost

> Number apiV2ProjectsRestoreBulkPost(opts)

Restore multiple projects

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectsApi();
let opts = {
  'projectSelectModel': new TestitApiClient.ProjectSelectModel() // ProjectSelectModel | 
};
apiInstance.apiV2ProjectsRestoreBulkPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectSelectModel** | [**ProjectSelectModel**](ProjectSelectModel.md)|  | [optional] 

### Return type

**Number**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2ProjectsSearchPost

> [ProjectShortModel] apiV2ProjectsSearchPost(opts)

Search for projects

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectsApi();
let opts = {
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example", // String | Value for searching
  'projectsFilterModel': new TestitApiClient.ProjectsFilterModel() // ProjectsFilterModel | 
};
apiInstance.apiV2ProjectsSearchPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
 **projectsFilterModel** | [**ProjectsFilterModel**](ProjectsFilterModel.md)|  | [optional] 

### Return type

[**[ProjectShortModel]**](ProjectShortModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2ProjectsShortsPost

> ProjectShortApiResultReply apiV2ProjectsShortsPost(opts)

Get projects short models

 Use case  User sets query params  User runs method execution  System return projects short models

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectsApi();
let opts = {
  'getShortProjectsApiModel': new TestitApiClient.GetShortProjectsApiModel() // GetShortProjectsApiModel | 
};
apiInstance.apiV2ProjectsShortsPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getShortProjectsApiModel** | [**GetShortProjectsApiModel**](GetShortProjectsApiModel.md)|  | [optional] 

### Return type

[**ProjectShortApiResultReply**](ProjectShortApiResultReply.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createProject

> ProjectApiResult createProject(opts)

Create project

 Use case  User sets project parameters (listed in request example) and runs method execution  System creates project  System returns project model (example listed in response parameters)

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectsApi();
let opts = {
  'createProjectApiModel': new TestitApiClient.CreateProjectApiModel() // CreateProjectApiModel | 
};
apiInstance.createProject(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createProjectApiModel** | [**CreateProjectApiModel**](CreateProjectApiModel.md)|  | [optional] 

### Return type

[**ProjectApiResult**](ProjectApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteProjectAutoTests

> deleteProjectAutoTests(id)

Delete all autotests from project

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectsApi();
let id = "id_example"; // String | Unique or global ID of the project
apiInstance.deleteProjectAutoTests(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique or global ID of the project | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllProjects

> [ProjectShortModel] getAllProjects(opts)

Get all projects

 Use case  [Optional] User sets isDeleted field value  [Optional] If User sets isDeleted field value as true, System search all deleted projects  [Optional] If User sets isDeleted field value as false, System search all projects which are not deleted  If User did not set isDeleted field value, System search all projects  System returns array of all found projects(listed in response model)

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectsApi();
let opts = {
  'isDeleted': true, // Boolean | If result must consist of only actual/deleted parameters
  'projectName': "projectName_example", // String | 
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example" // String | Value for searching
};
apiInstance.getAllProjects(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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

[**[ProjectShortModel]**](ProjectShortModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAutoTestsNamespaces

> [AutoTestNamespaceApiResult] getAutoTestsNamespaces(id)

Get namespaces of autotests in project

 Use case  User sets project internal or global identifier and runs method execution  System search project  System search all autotest related to the project  System returns array of autotest with namespaces and classnames (listed in response)

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
apiInstance.getAutoTestsNamespaces(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project internal (UUID) or global (integer) identifier | 

### Return type

[**[AutoTestNamespaceApiResult]**](AutoTestNamespaceApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectById

> ProjectModel getProjectById(id)

Get project by ID

 Use case  User sets project internal or global identifier and runs method execution  System search project  System returns project (example listed in response parameters)

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
apiInstance.getProjectById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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


## getTestPlansByProjectId

> [TestPlanModel] getTestPlansByProjectId(id, opts)

Get project test plans

 Use case  User sets project internal or global identifier  [Optional] User sets isDeleted field value  User runs method execution  System search project  [Optional] If User sets isDeleted field value as true, System search all deleted test plans related to project  [Optional] If User sets isDeleted field value as false, System search all test plans related to project which are not deleted  [Optional] If User did not set isDeleted field value, System search all v related to project  System returns array of found test plans (listed in response model)

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
let opts = {
  'isDeleted': true // Boolean | If result must consist of only actual/archived test plans
};
apiInstance.getTestPlansByProjectId(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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

> [TestRunV2ApiResult] getTestRunsByProjectId(id, notStarted, inProgress, stopped, completed, opts)

Get project test runs

 Use case  User sets project internal or global identifier  User runs method execution  System search project  System search all test runs related to project  System returns array of found test runs (listed in response model)

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectsApi();
let id = "id_example"; // String | Project internal (UUID) or global (integer) identifier
let notStarted = true; // Boolean | 
let inProgress = true; // Boolean | 
let stopped = true; // Boolean | 
let completed = true; // Boolean | 
let opts = {
  'createdDateFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdDateTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'testPlanId': "testPlanId_example", // String | 
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example" // String | Value for searching
};
apiInstance.getTestRunsByProjectId(id, notStarted, inProgress, stopped, completed, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project internal (UUID) or global (integer) identifier | 
 **notStarted** | **Boolean**|  | 
 **inProgress** | **Boolean**|  | 
 **stopped** | **Boolean**|  | 
 **completed** | **Boolean**|  | 
 **createdDateFrom** | **Date**|  | [optional] 
 **createdDateTo** | **Date**|  | [optional] 
 **testPlanId** | **String**|  | [optional] 
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 

### Return type

[**[TestRunV2ApiResult]**](TestRunV2ApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateProject

> updateProject(opts)

Update project

 Use case  User sets project parameters (listed in request example) and runs method execution  System updates project  System returns updated project model (example listed in response parameters)

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectsApi();
let opts = {
  'updateProjectApiModel': new TestitApiClient.UpdateProjectApiModel() // UpdateProjectApiModel | 
};
apiInstance.updateProject(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateProjectApiModel** | [**UpdateProjectApiModel**](UpdateProjectApiModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

