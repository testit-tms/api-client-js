# TestitApiClient.ProjectTestPlansApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2ProjectsProjectIdTestPlansAnalyticsGet**](ProjectTestPlansApi.md#apiV2ProjectsProjectIdTestPlansAnalyticsGet) | **GET** /api/v2/projects/{projectId}/testPlans/analytics | Get TestPlans analytics
[**apiV2ProjectsProjectIdTestPlansDeleteBulkPost**](ProjectTestPlansApi.md#apiV2ProjectsProjectIdTestPlansDeleteBulkPost) | **POST** /api/v2/projects/{projectId}/testPlans/delete/bulk | Delete multiple test plans
[**apiV2ProjectsProjectIdTestPlansNameExistsGet**](ProjectTestPlansApi.md#apiV2ProjectsProjectIdTestPlansNameExistsGet) | **GET** /api/v2/projects/{projectId}/testPlans/{name}/exists | Checks if TestPlan exists with the specified name exists for the project
[**apiV2ProjectsProjectIdTestPlansPurgeBulkPost**](ProjectTestPlansApi.md#apiV2ProjectsProjectIdTestPlansPurgeBulkPost) | **POST** /api/v2/projects/{projectId}/testPlans/purge/bulk | Permanently delete multiple archived test plans
[**apiV2ProjectsProjectIdTestPlansRestoreBulkPost**](ProjectTestPlansApi.md#apiV2ProjectsProjectIdTestPlansRestoreBulkPost) | **POST** /api/v2/projects/{projectId}/testPlans/restore/bulk | Restore multiple test plans
[**apiV2ProjectsProjectIdTestPlansSearchPost**](ProjectTestPlansApi.md#apiV2ProjectsProjectIdTestPlansSearchPost) | **POST** /api/v2/projects/{projectId}/testPlans/search | Get Project TestPlans with analytics



## apiV2ProjectsProjectIdTestPlansAnalyticsGet

> [TestPlanWithAnalyticModel] apiV2ProjectsProjectIdTestPlansAnalyticsGet(projectId, opts)

Get TestPlans analytics

 Use case  User sets project internal identifier  User sets query params  User runs method execution  System return analytics

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectTestPlansApi();
let projectId = "projectId_example"; // String | Project internal (UUID) identifier
let opts = {
  'isDeleted': true, // Boolean | 
  'mustUpdateCache': false, // Boolean | 
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example" // String | Value for searching
};
apiInstance.apiV2ProjectsProjectIdTestPlansAnalyticsGet(projectId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project internal (UUID) identifier | 
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


## apiV2ProjectsProjectIdTestPlansDeleteBulkPost

> [String] apiV2ProjectsProjectIdTestPlansDeleteBulkPost(projectId, opts)

Delete multiple test plans

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectTestPlansApi();
let projectId = "projectId_example"; // String | Unique or global ID of the project
let opts = {
  'testPlanSelectModel': new TestitApiClient.TestPlanSelectModel() // TestPlanSelectModel | 
};
apiInstance.apiV2ProjectsProjectIdTestPlansDeleteBulkPost(projectId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Unique or global ID of the project | 
 **testPlanSelectModel** | [**TestPlanSelectModel**](TestPlanSelectModel.md)|  | [optional] 

### Return type

**[String]**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2ProjectsProjectIdTestPlansNameExistsGet

> Boolean apiV2ProjectsProjectIdTestPlansNameExistsGet(projectId, name)

Checks if TestPlan exists with the specified name exists for the project

 Use case  User sets project internal or global identifier  User runs method execution  System purge delete project workitems

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectTestPlansApi();
let projectId = "projectId_example"; // String | Project internal (UUID) or global (integer) identifier
let name = "name_example"; // String | TestPlan name to check
apiInstance.apiV2ProjectsProjectIdTestPlansNameExistsGet(projectId, name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project internal (UUID) or global (integer) identifier | 
 **name** | **String**| TestPlan name to check | 

### Return type

**Boolean**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ProjectsProjectIdTestPlansPurgeBulkPost

> apiV2ProjectsProjectIdTestPlansPurgeBulkPost(projectId, opts)

Permanently delete multiple archived test plans

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectTestPlansApi();
let projectId = "projectId_example"; // String | Unique or global ID of the project
let opts = {
  'testPlanSelectModel': new TestitApiClient.TestPlanSelectModel() // TestPlanSelectModel | 
};
apiInstance.apiV2ProjectsProjectIdTestPlansPurgeBulkPost(projectId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Unique or global ID of the project | 
 **testPlanSelectModel** | [**TestPlanSelectModel**](TestPlanSelectModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2ProjectsProjectIdTestPlansRestoreBulkPost

> [String] apiV2ProjectsProjectIdTestPlansRestoreBulkPost(projectId, opts)

Restore multiple test plans

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectTestPlansApi();
let projectId = "projectId_example"; // String | Unique or global ID of the project
let opts = {
  'testPlanSelectModel': new TestitApiClient.TestPlanSelectModel() // TestPlanSelectModel | 
};
apiInstance.apiV2ProjectsProjectIdTestPlansRestoreBulkPost(projectId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Unique or global ID of the project | 
 **testPlanSelectModel** | [**TestPlanSelectModel**](TestPlanSelectModel.md)|  | [optional] 

### Return type

**[String]**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2ProjectsProjectIdTestPlansSearchPost

> [TestPlanWithAnalyticModel] apiV2ProjectsProjectIdTestPlansSearchPost(projectId, opts)

Get Project TestPlans with analytics

 Use case  User sets project internal or global identifier  User sets request body  User runs method execution  System returns project testplans with analytics

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectTestPlansApi();
let projectId = "projectId_example"; // String | Project internal (UUID) or global (integer) identifier
let opts = {
  'mustUpdateCache': false, // Boolean | 
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example", // String | Value for searching
  'projectTestPlansFilterModel': new TestitApiClient.ProjectTestPlansFilterModel() // ProjectTestPlansFilterModel | 
};
apiInstance.apiV2ProjectsProjectIdTestPlansSearchPost(projectId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project internal (UUID) or global (integer) identifier | 
 **mustUpdateCache** | **Boolean**|  | [optional] [default to false]
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 
 **projectTestPlansFilterModel** | [**ProjectTestPlansFilterModel**](ProjectTestPlansFilterModel.md)|  | [optional] 

### Return type

[**[TestPlanWithAnalyticModel]**](TestPlanWithAnalyticModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

