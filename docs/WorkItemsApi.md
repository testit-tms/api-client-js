# TestitApiClient.WorkItemsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2WorkItemsIdAttachmentsPost**](WorkItemsApi.md#apiV2WorkItemsIdAttachmentsPost) | **POST** /api/v2/workItems/{id}/attachments | Upload and link attachment to WorkItem
[**apiV2WorkItemsIdCheckListTransformToTestCasePost**](WorkItemsApi.md#apiV2WorkItemsIdCheckListTransformToTestCasePost) | **POST** /api/v2/workItems/{id}/checkList/transformTo/testCase | Transform CheckList to TestCase
[**apiV2WorkItemsIdHistoryGet**](WorkItemsApi.md#apiV2WorkItemsIdHistoryGet) | **GET** /api/v2/workItems/{id}/history | Get change history of WorkItem
[**apiV2WorkItemsIdLikeDelete**](WorkItemsApi.md#apiV2WorkItemsIdLikeDelete) | **DELETE** /api/v2/workItems/{id}/like | Delete like from WorkItem
[**apiV2WorkItemsIdLikePost**](WorkItemsApi.md#apiV2WorkItemsIdLikePost) | **POST** /api/v2/workItems/{id}/like | Set like to WorkItem
[**apiV2WorkItemsIdLikesCountGet**](WorkItemsApi.md#apiV2WorkItemsIdLikesCountGet) | **GET** /api/v2/workItems/{id}/likes/count | Get likes count of WorkItem
[**apiV2WorkItemsIdLikesGet**](WorkItemsApi.md#apiV2WorkItemsIdLikesGet) | **GET** /api/v2/workItems/{id}/likes | Get likes of WorkItem
[**apiV2WorkItemsIdTestResultsHistoryGet**](WorkItemsApi.md#apiV2WorkItemsIdTestResultsHistoryGet) | **GET** /api/v2/workItems/{id}/testResults/history | Get test results history of WorkItem
[**apiV2WorkItemsIdVersionVersionIdActualPost**](WorkItemsApi.md#apiV2WorkItemsIdVersionVersionIdActualPost) | **POST** /api/v2/workItems/{id}/version/{versionId}/actual | Set WorkItem as actual
[**apiV2WorkItemsLinksUrlsSearchPost**](WorkItemsApi.md#apiV2WorkItemsLinksUrlsSearchPost) | **POST** /api/v2/workItems/links/urls/search | 
[**apiV2WorkItemsMovePost**](WorkItemsApi.md#apiV2WorkItemsMovePost) | **POST** /api/v2/workItems/move | Move WorkItem to another section
[**apiV2WorkItemsPost**](WorkItemsApi.md#apiV2WorkItemsPost) | **POST** /api/v2/workItems | Creates work item
[**apiV2WorkItemsSearchPost**](WorkItemsApi.md#apiV2WorkItemsSearchPost) | **POST** /api/v2/workItems/search | Search for work items
[**apiV2WorkItemsSharedStepIdReferencesSectionsPost**](WorkItemsApi.md#apiV2WorkItemsSharedStepIdReferencesSectionsPost) | **POST** /api/v2/workItems/{sharedStepId}/references/sections | Get SharedStep references in sections
[**apiV2WorkItemsSharedStepIdReferencesWorkItemsPost**](WorkItemsApi.md#apiV2WorkItemsSharedStepIdReferencesWorkItemsPost) | **POST** /api/v2/workItems/{sharedStepId}/references/workItems | Get SharedStep references in work items
[**apiV2WorkItemsSharedStepsSharedStepIdReferencesGet**](WorkItemsApi.md#apiV2WorkItemsSharedStepsSharedStepIdReferencesGet) | **GET** /api/v2/workItems/sharedSteps/{sharedStepId}/references | Get SharedStep references
[**deleteAllWorkItemsFromAutoTest**](WorkItemsApi.md#deleteAllWorkItemsFromAutoTest) | **DELETE** /api/v2/workItems/{id}/autoTests | Delete all links AutoTests from WorkItem by Id or GlobalId
[**deleteWorkItem**](WorkItemsApi.md#deleteWorkItem) | **DELETE** /api/v2/workItems/{id} | Delete Test Case, Checklist or Shared Step by Id or GlobalId
[**getAutoTestsForWorkItem**](WorkItemsApi.md#getAutoTestsForWorkItem) | **GET** /api/v2/workItems/{id}/autoTests | Get all AutoTests linked to WorkItem by Id or GlobalId
[**getIterations**](WorkItemsApi.md#getIterations) | **GET** /api/v2/workItems/{id}/iterations | Get iterations by work item Id or GlobalId
[**getWorkItemById**](WorkItemsApi.md#getWorkItemById) | **GET** /api/v2/workItems/{id} | Get Test Case, Checklist or Shared Step by Id or GlobalId
[**getWorkItemChronology**](WorkItemsApi.md#getWorkItemChronology) | **GET** /api/v2/workItems/{id}/chronology | Get WorkItem chronology by Id or GlobalId
[**getWorkItemVersions**](WorkItemsApi.md#getWorkItemVersions) | **GET** /api/v2/workItems/{id}/versions | Get WorkItem versions
[**purgeWorkItem**](WorkItemsApi.md#purgeWorkItem) | **POST** /api/v2/workItems/{id}/purge | Permanently delete test case, checklist or shared steps from archive
[**restoreWorkItem**](WorkItemsApi.md#restoreWorkItem) | **POST** /api/v2/workItems/{id}/restore | Restore test case, checklist or shared steps from archive
[**updateWorkItem**](WorkItemsApi.md#updateWorkItem) | **PUT** /api/v2/workItems | Update Test Case, Checklist or Shared Step



## apiV2WorkItemsIdAttachmentsPost

> apiV2WorkItemsIdAttachmentsPost(id, opts)

Upload and link attachment to WorkItem

 Use case  User sets workItemId  User attaches a file  System creates attachment and links it to the work item  System returns attachment identifier

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkItemsApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Work item internal identifier (guid format)
let opts = {
  'file': "/path/to/file" // File | Select file
};
apiInstance.apiV2WorkItemsIdAttachmentsPost(id, opts, (error, data, response) => {
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
 **id** | **String**| Work item internal identifier (guid format) | 
 **file** | **File**| Select file | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## apiV2WorkItemsIdCheckListTransformToTestCasePost

> WorkItemModel apiV2WorkItemsIdCheckListTransformToTestCasePost(id)

Transform CheckList to TestCase

 Use case  User sets checklist identifier  User runs method execution  System transform CheckList to TestCase

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkItemsApi();
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

 Use case  User sets work item identifier  User runs method execution  System return change history of WorkItem

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkItemsApi();
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

 Use case  User sets WorkItem identifier  User runs method execution  System delete like from WorkItem

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkItemsApi();
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

 Use case  User sets WorkItem identifier  User runs method execution  System set like to WorkItem

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkItemsApi();
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

 Use case  User sets WorkItem identifier  User runs method execution  System return likes count of WorkItem

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkItemsApi();
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

 Use case  User sets WorkItem identifier  User runs method execution  System return likes of WorkItem

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkItemsApi();
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

> [TestResultHistoryReportApiResult] apiV2WorkItemsIdTestResultsHistoryGet(id, opts)

Get test results history of WorkItem

 Use case  User sets WorkItem identifier  User runs method execution  System return test results history of WorkItem

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkItemsApi();
let id = "id_example"; // String | 
let opts = {
  'from': new Date("2013-10-20T19:20:30+01:00"), // Date | Take results from this date
  'to': new Date("2013-10-20T19:20:30+01:00"), // Date | Take results until this date
  'configurationIds': ["null"], // [String] | Identifiers of test result configurations
  'testPlanIds': ["null"], // [String] | Identifiers of test plans which contain test results
  'userIds': ["null"], // [String] | Identifiers of users who set test results
  'outcomes': ["null"], // [String] | List of outcomes of test results
  'statusCodes': ["null"], // [String] | List of status codes of test results
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
 **statusCodes** | [**[String]**](String.md)| List of status codes of test results | [optional] 
 **isAutomated** | **Boolean**| OBSOLETE: Use &#x60;Automated&#x60; instead | [optional] 
 **automated** | **Boolean**| If result must consist of only manual/automated test results | [optional] 
 **testRunIds** | [**[String]**](String.md)| Identifiers of test runs which contain test results | [optional] 
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 

### Return type

[**[TestResultHistoryReportApiResult]**](TestResultHistoryReportApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2WorkItemsIdVersionVersionIdActualPost

> WorkItemModel apiV2WorkItemsIdVersionVersionIdActualPost(id, versionId)

Set WorkItem as actual

 Use case  User sets work item identifier  User runs method execution  System set WorkItem as actual

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkItemsApi();
let id = "id_example"; // String | 
let versionId = "versionId_example"; // String | 
apiInstance.apiV2WorkItemsIdVersionVersionIdActualPost(id, versionId, (error, data, response) => {
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
 **versionId** | **String**|  | 

### Return type

[**WorkItemModel**](WorkItemModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2WorkItemsLinksUrlsSearchPost

> SearchWorkItemLinkUrlsApiResult apiV2WorkItemsLinksUrlsSearchPost(opts)



### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkItemsApi();
let opts = {
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example", // String | Value for searching
  'workItemLinkUrlApiModel': new TestitApiClient.WorkItemLinkUrlApiModel() // WorkItemLinkUrlApiModel | 
};
apiInstance.apiV2WorkItemsLinksUrlsSearchPost(opts, (error, data, response) => {
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
 **workItemLinkUrlApiModel** | [**WorkItemLinkUrlApiModel**](WorkItemLinkUrlApiModel.md)|  | [optional] 

### Return type

[**SearchWorkItemLinkUrlsApiResult**](SearchWorkItemLinkUrlsApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2WorkItemsMovePost

> WorkItemShortModel apiV2WorkItemsMovePost(opts)

Move WorkItem to another section

 Use case  User sets WorkItem identifier  User runs method execution  System move WorkItem to another section

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkItemsApi();
let opts = {
  'workItemMovePostModel': new TestitApiClient.WorkItemMovePostModel() // WorkItemMovePostModel | 
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


## apiV2WorkItemsPost

> WorkItemApiResult apiV2WorkItemsPost(opts)

Creates work item

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkItemsApi();
let opts = {
  'createWorkItemApiModel': new TestitApiClient.CreateWorkItemApiModel() // CreateWorkItemApiModel | 
};
apiInstance.apiV2WorkItemsPost(opts, (error, data, response) => {
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
 **createWorkItemApiModel** | [**CreateWorkItemApiModel**](CreateWorkItemApiModel.md)|  | [optional] 

### Return type

[**WorkItemApiResult**](WorkItemApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2WorkItemsSearchPost

> [WorkItemShortApiResult] apiV2WorkItemsSearchPost(opts)

Search for work items

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkItemsApi();
let opts = {
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example", // String | Value for searching
  'workItemSelectApiModel': new TestitApiClient.WorkItemSelectApiModel() // WorkItemSelectApiModel | 
};
apiInstance.apiV2WorkItemsSearchPost(opts, (error, data, response) => {
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
 **workItemSelectApiModel** | [**WorkItemSelectApiModel**](WorkItemSelectApiModel.md)|  | [optional] 

### Return type

[**[WorkItemShortApiResult]**](WorkItemShortApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2WorkItemsSharedStepIdReferencesSectionsPost

> [SharedStepReferenceSectionModel] apiV2WorkItemsSharedStepIdReferencesSectionsPost(sharedStepId, opts)

Get SharedStep references in sections

 Use case  User sets SharedStep identifier  User runs method execution  System return SharedStep references

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkItemsApi();
let sharedStepId = "sharedStepId_example"; // String | 
let opts = {
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example", // String | Value for searching
  'sharedStepReferenceSectionsQueryFilterModel': new TestitApiClient.SharedStepReferenceSectionsQueryFilterModel() // SharedStepReferenceSectionsQueryFilterModel | 
};
apiInstance.apiV2WorkItemsSharedStepIdReferencesSectionsPost(sharedStepId, opts, (error, data, response) => {
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
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 
 **sharedStepReferenceSectionsQueryFilterModel** | [**SharedStepReferenceSectionsQueryFilterModel**](SharedStepReferenceSectionsQueryFilterModel.md)|  | [optional] 

### Return type

[**[SharedStepReferenceSectionModel]**](SharedStepReferenceSectionModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2WorkItemsSharedStepIdReferencesWorkItemsPost

> [SharedStepReferenceModel] apiV2WorkItemsSharedStepIdReferencesWorkItemsPost(sharedStepId, opts)

Get SharedStep references in work items

 Use case  User sets SharedStep identifier  User runs method execution  System return SharedStep references

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkItemsApi();
let sharedStepId = "sharedStepId_example"; // String | 
let opts = {
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example", // String | Value for searching
  'sharedStepReferencesQueryFilterModel': new TestitApiClient.SharedStepReferencesQueryFilterModel() // SharedStepReferencesQueryFilterModel | 
};
apiInstance.apiV2WorkItemsSharedStepIdReferencesWorkItemsPost(sharedStepId, opts, (error, data, response) => {
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
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 
 **sharedStepReferencesQueryFilterModel** | [**SharedStepReferencesQueryFilterModel**](SharedStepReferencesQueryFilterModel.md)|  | [optional] 

### Return type

[**[SharedStepReferenceModel]**](SharedStepReferenceModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2WorkItemsSharedStepsSharedStepIdReferencesGet

> [SharedStepReferenceModel] apiV2WorkItemsSharedStepsSharedStepIdReferencesGet(sharedStepId)

Get SharedStep references

 Use case  User sets SharedStep identifier  User runs method execution  System return SharedStep references

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkItemsApi();
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


## deleteAllWorkItemsFromAutoTest

> deleteAllWorkItemsFromAutoTest(id)

Delete all links AutoTests from WorkItem by Id or GlobalId

 Use case  User sets work item identifier  User runs method execution  System search work item by identifier  System search and delete all autotests, related to found work item  System returns no content response

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkItemsApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | WorkItem internal (guid format) or global(integer format) identifier\"
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
 **id** | **String**| WorkItem internal (guid format) or global(integer format) identifier\&quot; | 

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

 Use case  User sets work item identifier  User runs method execution  System deletes work item  System returns no content response

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkItemsApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | WorkItem internal (guid format) or global(integer format) identifier\"
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
 **id** | **String**| WorkItem internal (guid format) or global(integer format) identifier\&quot; | 

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

 Use case  User sets work item identifier  User runs method execution  System search work item by identifier  System search all autotests, related to found work item  System returns list of found autotests

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkItemsApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | WorkItem internal (guid format) or global(integer format) identifier\"
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
 **id** | **String**| WorkItem internal (guid format) or global(integer format) identifier\&quot; | 

### Return type

[**[AutoTestModel]**](AutoTestModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getIterations

> [IterationModel] getIterations(id, opts)

Get iterations by work item Id or GlobalId

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkItemsApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | WorkItem internal (guid format) or global(integer format) identifier\"
let opts = {
  'versionId': "00000000-0000-0000-0000-000000000000", // String | WorkItem version (guid format) identifier
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
 **id** | **String**| WorkItem internal (guid format) or global(integer format) identifier\&quot; | 
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

 Use case  User sets work item identifier  [Optional] User sets work item version identifier  [Optional] User sets work item version number  User runs method execution  System search work item by identifier  [Optional] if User sets work item version identifier, system search work item version by identifier.  [Optional] if user sets work item version number, system search work item version by number  Otherwise, system search last work item version  System returns work item

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkItemsApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | WorkItem internal (guid format) or global(integer format) identifier\"
let opts = {
  'versionId': "00000000-0000-0000-0000-000000000000", // String | WorkItem version (guid format) identifier\"
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
 **id** | **String**| WorkItem internal (guid format) or global(integer format) identifier\&quot; | 
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

 Use case  User sets work item identifier  User runs method execution  System search work item by identifier  System search test results of all autotests, related to found work item  System sort results by CompletedOn ascending, then by CreatedDate ascending  System returns sorted collection of test results

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkItemsApi();
let id = "id_example"; // String | Internal (UUID) or global (integer) identifier
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
 **id** | **String**| Internal (UUID) or global (integer) identifier | 

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

 Use case  User sets work item identifier  [Optional] User sets work item version identifier  User runs method execution  System search work item by identifier  [Optional] If User set work item version identifier, System search work item version by version identifier                     Otherwise, system search all version of work item  System returns array of work item version models (listed in response example)

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkItemsApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | WorkItem internal (guid format) or global(integer format) identifier\"
let opts = {
  'workItemVersionId': "3fa85f64-5717-4562-b3fc-2c963f66afa6", // String | WorkItem version (guid format) identifier\"
  'versionNumber': 1 // Number | WorkItem version (integer format) number\"
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
 **id** | **String**| WorkItem internal (guid format) or global(integer format) identifier\&quot; | 
 **workItemVersionId** | **String**| WorkItem version (guid format) identifier\&quot; | [optional] 
 **versionNumber** | **Number**| WorkItem version (integer format) number\&quot; | [optional] 

### Return type

[**[WorkItemVersionModel]**](WorkItemVersionModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## purgeWorkItem

> purgeWorkItem(id)

Permanently delete test case, checklist or shared steps from archive

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkItemsApi();
let id = "id_example"; // String | Unique or global ID of the work item
apiInstance.purgeWorkItem(id, (error, data, response) => {
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
 **id** | **String**| Unique or global ID of the work item | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## restoreWorkItem

> restoreWorkItem(id)

Restore test case, checklist or shared steps from archive

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkItemsApi();
let id = "id_example"; // String | Unique or global ID of the work item
apiInstance.restoreWorkItem(id, (error, data, response) => {
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
 **id** | **String**| Unique or global ID of the work item | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateWorkItem

> updateWorkItem(opts)

Update Test Case, Checklist or Shared Step

 Use case  User sets work item properties (listed in request parameters)  User runs method execution  System updates work item by identifier  System returns updated work item model (listed in response parameters)

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkItemsApi();
let opts = {
  'updateWorkItemApiModel': new TestitApiClient.UpdateWorkItemApiModel() // UpdateWorkItemApiModel | 
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
 **updateWorkItemApiModel** | [**UpdateWorkItemApiModel**](UpdateWorkItemApiModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

