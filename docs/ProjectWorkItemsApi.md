# TestitApiClient.ProjectWorkItemsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2ProjectsProjectIdWorkItemsSearchGroupedPost**](ProjectWorkItemsApi.md#apiV2ProjectsProjectIdWorkItemsSearchGroupedPost) | **POST** /api/v2/projects/{projectId}/workItems/search/grouped | Search for work items and group results by attribute
[**apiV2ProjectsProjectIdWorkItemsSearchIdPost**](ProjectWorkItemsApi.md#apiV2ProjectsProjectIdWorkItemsSearchIdPost) | **POST** /api/v2/projects/{projectId}/workItems/search/id | Search for work items and extract IDs only
[**apiV2ProjectsProjectIdWorkItemsSearchPost**](ProjectWorkItemsApi.md#apiV2ProjectsProjectIdWorkItemsSearchPost) | **POST** /api/v2/projects/{projectId}/workItems/search | Search for work items
[**apiV2ProjectsProjectIdWorkItemsSearchWorkItemIdIndexPost**](ProjectWorkItemsApi.md#apiV2ProjectsProjectIdWorkItemsSearchWorkItemIdIndexPost) | **POST** /api/v2/projects/{projectId}/workItems/search/{workItemId}/index | Get work item index (position) in a collection by its id.
[**apiV2ProjectsProjectIdWorkItemsTagsGet**](ProjectWorkItemsApi.md#apiV2ProjectsProjectIdWorkItemsTagsGet) | **GET** /api/v2/projects/{projectId}/workItems/tags | Get WorkItems Tags
[**getWorkItemsByProjectId**](ProjectWorkItemsApi.md#getWorkItemsByProjectId) | **GET** /api/v2/projects/{projectId}/workItems | Get project work items



## apiV2ProjectsProjectIdWorkItemsSearchGroupedPost

> [WorkItemGroupModel] apiV2ProjectsProjectIdWorkItemsSearchGroupedPost(projectId, opts)

Search for work items and group results by attribute

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectWorkItemsApi();
let projectId = "projectId_example"; // String | Unique or global ID of the project
let opts = {
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example", // String | Value for searching
  'workItemGroupGetModel': new TestitApiClient.WorkItemGroupGetModel() // WorkItemGroupGetModel | 
};
apiInstance.apiV2ProjectsProjectIdWorkItemsSearchGroupedPost(projectId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Unique or global ID of the project | 
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 
 **workItemGroupGetModel** | [**WorkItemGroupGetModel**](WorkItemGroupGetModel.md)|  | [optional] 

### Return type

[**[WorkItemGroupModel]**](WorkItemGroupModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2ProjectsProjectIdWorkItemsSearchIdPost

> [String] apiV2ProjectsProjectIdWorkItemsSearchIdPost(projectId, opts)

Search for work items and extract IDs only

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectWorkItemsApi();
let projectId = "projectId_example"; // String | Unique or global ID of the project
let opts = {
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example", // String | Value for searching
  'workItemSelectModel': new TestitApiClient.WorkItemSelectModel() // WorkItemSelectModel | 
};
apiInstance.apiV2ProjectsProjectIdWorkItemsSearchIdPost(projectId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Unique or global ID of the project | 
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 
 **workItemSelectModel** | [**WorkItemSelectModel**](WorkItemSelectModel.md)|  | [optional] 

### Return type

**[String]**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2ProjectsProjectIdWorkItemsSearchPost

> [WorkItemShortApiResult] apiV2ProjectsProjectIdWorkItemsSearchPost(projectId, opts)

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

let apiInstance = new TestitApiClient.ProjectWorkItemsApi();
let projectId = "projectId_example"; // String | Unique or global ID of the project
let opts = {
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example", // String | Value for searching
  'workItemSelectApiModel': new TestitApiClient.WorkItemSelectApiModel() // WorkItemSelectApiModel | 
};
apiInstance.apiV2ProjectsProjectIdWorkItemsSearchPost(projectId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Unique or global ID of the project | 
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


## apiV2ProjectsProjectIdWorkItemsSearchWorkItemIdIndexPost

> WorkItemIndexApiResult apiV2ProjectsProjectIdWorkItemsSearchWorkItemIdIndexPost(projectId, workItemId, opts)

Get work item index (position) in a collection by its id.

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectWorkItemsApi();
let projectId = "projectId_example"; // String | Internal (UUID) or global (integer) identifier
let workItemId = "workItemId_example"; // String | 
let opts = {
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example", // String | Value for searching
  'workItemSelectApiModel': new TestitApiClient.WorkItemSelectApiModel() // WorkItemSelectApiModel | 
};
apiInstance.apiV2ProjectsProjectIdWorkItemsSearchWorkItemIdIndexPost(projectId, workItemId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Internal (UUID) or global (integer) identifier | 
 **workItemId** | **String**|  | 
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 
 **workItemSelectApiModel** | [**WorkItemSelectApiModel**](WorkItemSelectApiModel.md)|  | [optional] 

### Return type

[**WorkItemIndexApiResult**](WorkItemIndexApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2ProjectsProjectIdWorkItemsTagsGet

> [TagShortApiResult] apiV2ProjectsProjectIdWorkItemsTagsGet(projectId, opts)

Get WorkItems Tags

 Use case  User sets project internal identifier  User runs method execution  System returns work items tags

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectWorkItemsApi();
let projectId = "projectId_example"; // String | Project internal (UUID) identifier
let opts = {
  'isDeleted': true // Boolean | 
};
apiInstance.apiV2ProjectsProjectIdWorkItemsTagsGet(projectId, opts).then((data) => {
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

### Return type

[**[TagShortApiResult]**](TagShortApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkItemsByProjectId

> [WorkItemShortModel] getWorkItemsByProjectId(projectId, opts)

Get project work items

 Use case  User sets project internal or global identifier  [Optional] User sets isDeleted field value  User runs method execution  System search project  [Optional] If User sets isDeleted field value as true, System search all deleted workitems related to project  [Optional] If User sets isDeleted field value as false, System search all workitems related to project which are not deleted  If User did not set isDeleted field value, System search all  workitems related to project  System returns array of found workitems (listed in response model)

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectWorkItemsApi();
let projectId = "projectId_example"; // String | Project internal (UUID) or global (integer) identifier
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
apiInstance.getWorkItemsByProjectId(projectId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project internal (UUID) or global (integer) identifier | 
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

