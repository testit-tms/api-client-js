# testit_api_client.WorkItemsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2WorkItemsIdActualPost**](WorkItemsApi.md#apiV2WorkItemsIdActualPost) | **POST** /api/v2/workItems/{id}/actual | Set WorkItem as actual
[**apiV2WorkItemsIdCheckListTransformToTestCasePost**](WorkItemsApi.md#apiV2WorkItemsIdCheckListTransformToTestCasePost) | **POST** /api/v2/workItems/{id}/checkList/transformTo/testCase | Transform CheckList to TestCase
[**apiV2WorkItemsIdHistoryGet**](WorkItemsApi.md#apiV2WorkItemsIdHistoryGet) | **GET** /api/v2/workItems/{id}/history | Get change history of WorkItem
[**apiV2WorkItemsIdLikeDelete**](WorkItemsApi.md#apiV2WorkItemsIdLikeDelete) | **DELETE** /api/v2/workItems/{id}/like | Delete like from WorkItem
[**apiV2WorkItemsIdLikePost**](WorkItemsApi.md#apiV2WorkItemsIdLikePost) | **POST** /api/v2/workItems/{id}/like | Set like to WorkItem
[**apiV2WorkItemsIdLikesCountGet**](WorkItemsApi.md#apiV2WorkItemsIdLikesCountGet) | **GET** /api/v2/workItems/{id}/likes/count | Get likes count of WorkItem
[**apiV2WorkItemsIdLikesGet**](WorkItemsApi.md#apiV2WorkItemsIdLikesGet) | **GET** /api/v2/workItems/{id}/likes | Get likes of WorkItem
[**apiV2WorkItemsIdTestResultsHistoryGet**](WorkItemsApi.md#apiV2WorkItemsIdTestResultsHistoryGet) | **GET** /api/v2/workItems/{id}/testResults/history | Get test results history of WorkItem
[**apiV2WorkItemsMovePost**](WorkItemsApi.md#apiV2WorkItemsMovePost) | **POST** /api/v2/workItems/move | Move WorkItem to another section
[**apiV2WorkItemsSharedStepsSharedStepIdReferencesGet**](WorkItemsApi.md#apiV2WorkItemsSharedStepsSharedStepIdReferencesGet) | **GET** /api/v2/workItems/sharedSteps/{sharedStepId}/references | Get SharedStep references
[**createWorkItem**](WorkItemsApi.md#createWorkItem) | **POST** /api/v2/workItems | Create Test Case, Checklist or Shared Step
[**deleteAllWorkItemsFromAutoTest**](WorkItemsApi.md#deleteAllWorkItemsFromAutoTest) | **DELETE** /api/v2/workItems/{id}/autoTests | Delete all links AutoTests from WorkItem by Id or GlobalId
[**deleteWorkItem**](WorkItemsApi.md#deleteWorkItem) | **DELETE** /api/v2/workItems/{id} | Delete Test Case, Checklist or Shared Step by Id or GlobalId
[**getAutoTestsForWorkItem**](WorkItemsApi.md#getAutoTestsForWorkItem) | **GET** /api/v2/workItems/{id}/autoTests | Get all AutoTests linked to WorkItem by Id or GlobalId
[**getIterations**](WorkItemsApi.md#getIterations) | **GET** /api/v2/workItems/{id}/iterations | Get iterations by workitem Id or GlobalId
[**getWorkItemById**](WorkItemsApi.md#getWorkItemById) | **GET** /api/v2/workItems/{id} | Get Test Case, Checklist or Shared Step by Id or GlobalId
[**getWorkItemChronology**](WorkItemsApi.md#getWorkItemChronology) | **GET** /api/v2/workItems/{id}/chronology | Get WorkItem chronology by Id or GlobalId
[**getWorkItemVersions**](WorkItemsApi.md#getWorkItemVersions) | **GET** /api/v2/workItems/{id}/versions | Get WorkItem versions
[**updateWorkItem**](WorkItemsApi.md#updateWorkItem) | **PUT** /api/v2/workItems | Update Test Case, Checklist or Shared Step



## apiV2WorkItemsIdActualPost

> WorkItemModel apiV2WorkItemsIdActualPost(id, opts)

Set WorkItem as actual

&lt;br&gt;Use case  &lt;br&gt;User sets workitem identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System set WorkItem as actual

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.WorkItemsApi();
let id = "id_example"; // String | 
let opts = {
  'versionId': "versionId_example" // String | 
};
apiInstance.apiV2WorkItemsIdActualPost(id, opts, (error, data, response) => {
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
 **id** | **String**|  | 
 **versionId** | **String**|  | [optional] 

### Return type

[**WorkItemModel**](WorkItemModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2WorkItemsIdCheckListTransformToTestCasePost

> WorkItemModel apiV2WorkItemsIdCheckListTransformToTestCasePost(id)

Transform CheckList to TestCase

&lt;br&gt;Use case  &lt;br&gt;User sets checklist identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System transform CheckList to TestCase

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.WorkItemsApi();
let id = "id_example"; // String | 
apiInstance.apiV2WorkItemsIdCheckListTransformToTestCasePost(id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

[**WorkItemModel**](WorkItemModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2WorkItemsIdHistoryGet

> [WorkItemChangeModel] apiV2WorkItemsIdHistoryGet(id, opts)

Get change history of WorkItem

&lt;br&gt;Use case  &lt;br&gt;User sets workitem identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System return change history of WorkItem

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.WorkItemsApi();
let id = "id_example"; // String | 
let opts = {
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example" // String | Value for searching
};
apiInstance.apiV2WorkItemsIdHistoryGet(id, opts, (error, data, response) => {
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
 **id** | **String**|  | 
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 

### Return type

[**[WorkItemChangeModel]**](WorkItemChangeModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2WorkItemsIdLikeDelete

> apiV2WorkItemsIdLikeDelete(id)

Delete like from WorkItem

&lt;br&gt;Use case  &lt;br&gt;User sets WorkItem identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System delete like from WorkItem

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.WorkItemsApi();
let id = "id_example"; // String | 
apiInstance.apiV2WorkItemsIdLikeDelete(id, (error, data, response) => {
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


## apiV2WorkItemsIdLikePost

> apiV2WorkItemsIdLikePost(id)

Set like to WorkItem

&lt;br&gt;Use case  &lt;br&gt;User sets WorkItem identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System set like to WorkItem

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.WorkItemsApi();
let id = "id_example"; // String | 
apiInstance.apiV2WorkItemsIdLikePost(id, (error, data, response) => {
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


## apiV2WorkItemsIdLikesCountGet

> Number apiV2WorkItemsIdLikesCountGet(id)

Get likes count of WorkItem

&lt;br&gt;Use case  &lt;br&gt;User sets WorkItem identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System return likes count of WorkItem

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.WorkItemsApi();
let id = "id_example"; // String | 
apiInstance.apiV2WorkItemsIdLikesCountGet(id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

**Number**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2WorkItemsIdLikesGet

> [WorkItemLikeModel] apiV2WorkItemsIdLikesGet(id)

Get likes of WorkItem

&lt;br&gt;Use case  &lt;br&gt;User sets WorkItem identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System return likes of WorkItem

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.WorkItemsApi();
let id = "id_example"; // String | 
apiInstance.apiV2WorkItemsIdLikesGet(id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

[**[WorkItemLikeModel]**](WorkItemLikeModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2WorkItemsIdTestResultsHistoryGet

> [TestResultHistoryReportModel] apiV2WorkItemsIdTestResultsHistoryGet(id, opts)

Get test results history of WorkItem

&lt;br&gt;Use case  &lt;br&gt;User sets WorkItem identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System return test results history of WorkItem

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.WorkItemsApi();
let id = "id_example"; // String | 
let opts = {
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | Take results from this date
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | Take results until this date
  'configurationIds': ["null"], // [String] | Identifiers of test result configurations
  'testPlanIds': ["null"], // [String] | Identifiers of test plans which contain test results
  'userIds': ["null"], // [String] | Identifiers of users who set test results
  'outcomes': ["null"], // [String] | List of outcomes of test results
  'isAutomated': true, // Boolean | OBSOLETE: Use `Automated` instead
  'automated': true, // Boolean | If result must consist of only manual/automated test results
  'testRunIds': ["null"], // [String] | Identifiers of test runs which contain test results
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example" // String | Value for searching
};
apiInstance.apiV2WorkItemsIdTestResultsHistoryGet(id, opts, (error, data, response) => {
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
 **id** | **String**|  | 
 **from** | **Date**| Take results from this date | [optional] 
 **to** | **Date**| Take results until this date | [optional] 
 **configurationIds** | [**[String]**](String.md)| Identifiers of test result configurations | [optional] 
 **testPlanIds** | [**[String]**](String.md)| Identifiers of test plans which contain test results | [optional] 
 **userIds** | [**[String]**](String.md)| Identifiers of users who set test results | [optional] 
 **outcomes** | [**[String]**](String.md)| List of outcomes of test results | [optional] 
 **isAutomated** | **Boolean**| OBSOLETE: Use &#x60;Automated&#x60; instead | [optional] 
 **automated** | **Boolean**| If result must consist of only manual/automated test results | [optional] 
 **testRunIds** | [**[String]**](String.md)| Identifiers of test runs which contain test results | [optional] 
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 

### Return type

[**[TestResultHistoryReportModel]**](TestResultHistoryReportModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2WorkItemsMovePost

> WorkItemShortModel apiV2WorkItemsMovePost(opts)

Move WorkItem to another section

&lt;br&gt;Use case  &lt;br&gt;User sets WorkItem identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System move WorkItem to another section

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.WorkItemsApi();
let opts = {
  'workItemMovePostModel': new testit_api_client.WorkItemMovePostModel() // WorkItemMovePostModel | 
};
apiInstance.apiV2WorkItemsMovePost(opts, (error, data, response) => {
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
 **workItemMovePostModel** | [**WorkItemMovePostModel**](WorkItemMovePostModel.md)|  | [optional] 

### Return type

[**WorkItemShortModel**](WorkItemShortModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2WorkItemsSharedStepsSharedStepIdReferencesGet

> [SharedStepReferenceModel] apiV2WorkItemsSharedStepsSharedStepIdReferencesGet(sharedStepId)

Get SharedStep references

&lt;br&gt;Use case  &lt;br&gt;User sets SharedStep identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System return SharedStep references

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.WorkItemsApi();
let sharedStepId = "sharedStepId_example"; // String | 
apiInstance.apiV2WorkItemsSharedStepsSharedStepIdReferencesGet(sharedStepId, (error, data, response) => {
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
 **sharedStepId** | **String**|  | 

### Return type

[**[SharedStepReferenceModel]**](SharedStepReferenceModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createWorkItem

> WorkItemModel createWorkItem(opts)

Create Test Case, Checklist or Shared Step

&lt;br&gt;Use case  &lt;br&gt;User sets workitem properties (listed in request parameters)  &lt;br&gt;User runs method execution  &lt;br&gt;System creates workitem by identifier  &lt;br&gt;System returns workitem model (listed in response parameters)

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.WorkItemsApi();
let opts = {
  'workItemPostModel': new testit_api_client.WorkItemPostModel() // WorkItemPostModel | 
};
apiInstance.createWorkItem(opts, (error, data, response) => {
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
 **workItemPostModel** | [**WorkItemPostModel**](WorkItemPostModel.md)|  | [optional] 

### Return type

[**WorkItemModel**](WorkItemModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAllWorkItemsFromAutoTest

> deleteAllWorkItemsFromAutoTest(id)

Delete all links AutoTests from WorkItem by Id or GlobalId

&lt;br&gt;Use case  &lt;br&gt;User sets workitem identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System search workitem by identifier  &lt;br&gt;System search and delete all autotests, related to found workitem  &lt;br&gt;System returns no content response

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.WorkItemsApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | WorkItem internal (guid format) or  global(integer format) identifier\"
apiInstance.deleteAllWorkItemsFromAutoTest(id, (error, data, response) => {
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
 **id** | **String**| WorkItem internal (guid format) or  global(integer format) identifier\&quot; | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteWorkItem

> deleteWorkItem(id)

Delete Test Case, Checklist or Shared Step by Id or GlobalId

&lt;br&gt;Use case  &lt;br&gt;User sets workitem identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System deletes workitem  &lt;br&gt;System returns no content response

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.WorkItemsApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | WorkItem internal (guid format) or  global(integer format) identifier\"
apiInstance.deleteWorkItem(id, (error, data, response) => {
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
 **id** | **String**| WorkItem internal (guid format) or  global(integer format) identifier\&quot; | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAutoTestsForWorkItem

> [AutoTestModel] getAutoTestsForWorkItem(id)

Get all AutoTests linked to WorkItem by Id or GlobalId

&lt;br&gt;Use case  &lt;br&gt;User sets workitem identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System search workitem by identifier  &lt;br&gt;System search all autotests, related to found workitem  &lt;br&gt;System returns list of found autotests

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.WorkItemsApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | WorkItem internal (guid format) or  global(integer format) identifier\"
apiInstance.getAutoTestsForWorkItem(id, (error, data, response) => {
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
 **id** | **String**| WorkItem internal (guid format) or  global(integer format) identifier\&quot; | 

### Return type

[**[AutoTestModel]**](AutoTestModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIterations

> [IterationModel] getIterations(id, opts)

Get iterations by workitem Id or GlobalId

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.WorkItemsApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | WorkItem internal (guid format) or  global(integer format) identifier\"
let opts = {
  'versionId': 00000000-0000-0000-0000-000000000000, // String | WorkItem version (guid format) identifier
  'versionNumber': 0 // Number | WorkItem version number (0 is the last version)\"
};
apiInstance.getIterations(id, opts, (error, data, response) => {
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
 **id** | **String**| WorkItem internal (guid format) or  global(integer format) identifier\&quot; | 
 **versionId** | **String**| WorkItem version (guid format) identifier | [optional] 
 **versionNumber** | **Number**| WorkItem version number (0 is the last version)\&quot; | [optional] 

### Return type

[**[IterationModel]**](IterationModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkItemById

> WorkItemModel getWorkItemById(id, opts)

Get Test Case, Checklist or Shared Step by Id or GlobalId

&lt;br&gt;Use case  &lt;br&gt;User sets workitem identifier  &lt;br&gt;[Optional] User sets workitem version identifier  &lt;br&gt;[Optional] User sets workitem version number  &lt;br&gt;User runs method execution  &lt;br&gt;System search workitem by identifier  &lt;br&gt;[Optional] if User sets workitem version identifier, system search workitem version by identifier.  &lt;br&gt;[Optional] if user sets workitem version number, system search workitem version by number  &lt;br&gt;Otherwise, system search last workitem version  &lt;br&gt;System returns workitem 

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.WorkItemsApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | WorkItem internal (guid format) or  global(integer format) identifier\"
let opts = {
  'versionId': 00000000-0000-0000-0000-000000000000, // String | WorkItem version (guid format) identifier\"
  'versionNumber': 0 // Number | WorkItem version number (0 is the last version)\"
};
apiInstance.getWorkItemById(id, opts, (error, data, response) => {
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
 **id** | **String**| WorkItem internal (guid format) or  global(integer format) identifier\&quot; | 
 **versionId** | **String**| WorkItem version (guid format) identifier\&quot; | [optional] 
 **versionNumber** | **Number**| WorkItem version number (0 is the last version)\&quot; | [optional] 

### Return type

[**WorkItemModel**](WorkItemModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkItemChronology

> [TestResultChronologyModel] getWorkItemChronology(id)

Get WorkItem chronology by Id or GlobalId

&lt;br&gt;Use case  &lt;br&gt;User sets workitem identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System search workitem by identifier  &lt;br&gt;System search test results of all autotests, related to found workitem  &lt;br&gt;System sort results by CompletedOn ascending, then by CreatedDate ascending  &lt;br&gt;System returns sorted collection of test results

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.WorkItemsApi();
let id = "id_example"; // String | 
apiInstance.getWorkItemChronology(id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

[**[TestResultChronologyModel]**](TestResultChronologyModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkItemVersions

> [WorkItemVersionModel] getWorkItemVersions(id, opts)

Get WorkItem versions

&lt;br&gt;Use case  &lt;br&gt;User sets workitem identifier  &lt;br&gt;[Optional] User sets workitem version identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System search workitem by identifier  &lt;br&gt;                      [Optional] If User set workitem version identifier, System search workitem version by version identifier                      Otherwise, system search all version of workitem                    &lt;br&gt;System returns array of workitem version models (listed in response example)

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.WorkItemsApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | WorkItem internal (guid format) or  global(integer format) identifier\"
let opts = {
  'workItemVersionId': 3fa85f64-5717-4562-b3fc-2c963f66afa6, // String | WorkItem version (guid format)  identifier\"
  'versionNumber': 1 // Number | WorkItem version (integer format)  number\"
};
apiInstance.getWorkItemVersions(id, opts, (error, data, response) => {
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
 **id** | **String**| WorkItem internal (guid format) or  global(integer format) identifier\&quot; | 
 **workItemVersionId** | **String**| WorkItem version (guid format)  identifier\&quot; | [optional] 
 **versionNumber** | **Number**| WorkItem version (integer format)  number\&quot; | [optional] 

### Return type

[**[WorkItemVersionModel]**](WorkItemVersionModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateWorkItem

> updateWorkItem(opts)

Update Test Case, Checklist or Shared Step

&lt;br&gt;Use case  &lt;br&gt;User sets workitem properties (listed in request parameters)  &lt;br&gt;User runs method execution  &lt;br&gt;System updates workitem by identifier  &lt;br&gt;System returns updated workitem model (listed in response parameters)

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.WorkItemsApi();
let opts = {
  'workItemPutModel': new testit_api_client.WorkItemPutModel() // WorkItemPutModel | 
};
apiInstance.updateWorkItem(opts, (error, data, response) => {
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
 **workItemPutModel** | [**WorkItemPutModel**](WorkItemPutModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

