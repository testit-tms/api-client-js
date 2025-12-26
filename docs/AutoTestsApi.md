# TestitApiClient.AutoTestsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2AutoTestsDelete**](AutoTestsApi.md#apiV2AutoTestsDelete) | **DELETE** /api/v2/autoTests | Delete autotests
[**apiV2AutoTestsFlakyBulkPost**](AutoTestsApi.md#apiV2AutoTestsFlakyBulkPost) | **POST** /api/v2/autoTests/flaky/bulk | Set \&quot;Flaky\&quot; status for multiple autotests
[**apiV2AutoTestsIdPatch**](AutoTestsApi.md#apiV2AutoTestsIdPatch) | **PATCH** /api/v2/autoTests/{id} | Patch auto test
[**apiV2AutoTestsIdTestResultsSearchPost**](AutoTestsApi.md#apiV2AutoTestsIdTestResultsSearchPost) | **POST** /api/v2/autoTests/{id}/testResults/search | Get test results history for autotest
[**apiV2AutoTestsIdWorkItemsChangedIdGet**](AutoTestsApi.md#apiV2AutoTestsIdWorkItemsChangedIdGet) | **GET** /api/v2/autoTests/{id}/workItems/changed/id | Get identifiers of changed linked work items
[**apiV2AutoTestsIdWorkItemsChangedWorkItemIdApprovePost**](AutoTestsApi.md#apiV2AutoTestsIdWorkItemsChangedWorkItemIdApprovePost) | **POST** /api/v2/autoTests/{id}/workItems/changed/{workItemId}/approve | Approve changes to work items linked to autotest
[**apiV2AutoTestsSearchPost**](AutoTestsApi.md#apiV2AutoTestsSearchPost) | **POST** /api/v2/autoTests/search | Search for autotests
[**createAutoTest**](AutoTestsApi.md#createAutoTest) | **POST** /api/v2/autoTests | Create autotest
[**createMultiple**](AutoTestsApi.md#createMultiple) | **POST** /api/v2/autoTests/bulk | Create multiple autotests
[**deleteAutoTest**](AutoTestsApi.md#deleteAutoTest) | **DELETE** /api/v2/autoTests/{id} | Delete autotest
[**deleteAutoTestLinkFromWorkItem**](AutoTestsApi.md#deleteAutoTestLinkFromWorkItem) | **DELETE** /api/v2/autoTests/{id}/workItems | Unlink autotest from work item
[**getAllAutoTests**](AutoTestsApi.md#getAllAutoTests) | **GET** /api/v2/autoTests | 
[**getAutoTestAverageDuration**](AutoTestsApi.md#getAutoTestAverageDuration) | **GET** /api/v2/autoTests/{id}/averageDuration | Get average autotest duration
[**getAutoTestById**](AutoTestsApi.md#getAutoTestById) | **GET** /api/v2/autoTests/{id} | Get autotest by internal or global ID
[**getAutoTestChronology**](AutoTestsApi.md#getAutoTestChronology) | **GET** /api/v2/autoTests/{id}/chronology | Get autotest chronology
[**getTestRuns**](AutoTestsApi.md#getTestRuns) | **GET** /api/v2/autoTests/{id}/testRuns | Get completed tests runs for autotests
[**getWorkItemsLinkedToAutoTest**](AutoTestsApi.md#getWorkItemsLinkedToAutoTest) | **GET** /api/v2/autoTests/{id}/workItems | Get work items linked to autotest
[**linkAutoTestToWorkItem**](AutoTestsApi.md#linkAutoTestToWorkItem) | **POST** /api/v2/autoTests/{id}/workItems | Link autotest with work items
[**updateAutoTest**](AutoTestsApi.md#updateAutoTest) | **PUT** /api/v2/autoTests | Update autotest
[**updateMultiple**](AutoTestsApi.md#updateMultiple) | **PUT** /api/v2/autoTests/bulk | Update multiple autotests



## apiV2AutoTestsDelete

> AutoTestBulkDeleteApiResult apiV2AutoTestsDelete(opts)

Delete autotests

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.AutoTestsApi();
let opts = {
  'autoTestBulkDeleteApiModel': new TestitApiClient.AutoTestBulkDeleteApiModel() // AutoTestBulkDeleteApiModel | 
};
apiInstance.apiV2AutoTestsDelete(opts, (error, data, response) => {
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
 **autoTestBulkDeleteApiModel** | [**AutoTestBulkDeleteApiModel**](AutoTestBulkDeleteApiModel.md)|  | [optional] 

### Return type

[**AutoTestBulkDeleteApiResult**](AutoTestBulkDeleteApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2AutoTestsFlakyBulkPost

> apiV2AutoTestsFlakyBulkPost(opts)

Set \&quot;Flaky\&quot; status for multiple autotests

User permissions for project: - Read only - Execute - Write - Full control

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.AutoTestsApi();
let opts = {
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example", // String | Value for searching
  'autoTestFlakyBulkApiModel': new TestitApiClient.AutoTestFlakyBulkApiModel() // AutoTestFlakyBulkApiModel | 
};
apiInstance.apiV2AutoTestsFlakyBulkPost(opts, (error, data, response) => {
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
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 
 **autoTestFlakyBulkApiModel** | [**AutoTestFlakyBulkApiModel**](AutoTestFlakyBulkApiModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2AutoTestsIdPatch

> apiV2AutoTestsIdPatch(id, opts)

Patch auto test

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

let apiInstance = new TestitApiClient.AutoTestsApi();
let id = "id_example"; // String | Global Id of auto test
let opts = {
  'operation': [new TestitApiClient.Operation()] // [Operation] | 
};
apiInstance.apiV2AutoTestsIdPatch(id, opts, (error, data, response) => {
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
 **id** | **String**| Global Id of auto test | 
 **operation** | [**[Operation]**](Operation.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2AutoTestsIdTestResultsSearchPost

> [AutoTestResultHistoryApiResult] apiV2AutoTestsIdTestResultsSearchPost(id, opts)

Get test results history for autotest

 Use case  User sets autotest internal (guid format) or global (integer format) identifier  User sets getTestResultHistoryReportQuery (listed in the example)  User runs method execution  System search for test results using filters set by user in getTestResultHistoryReportQuery and id  System returns the enumeration of test results

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.AutoTestsApi();
let id = "id_example"; // String | Autotest identifier
let opts = {
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example", // String | Value for searching
  'autoTestResultHistorySelectApiModel': new TestitApiClient.AutoTestResultHistorySelectApiModel() // AutoTestResultHistorySelectApiModel | 
};
apiInstance.apiV2AutoTestsIdTestResultsSearchPost(id, opts, (error, data, response) => {
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
 **id** | **String**| Autotest identifier | 
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 
 **autoTestResultHistorySelectApiModel** | [**AutoTestResultHistorySelectApiModel**](AutoTestResultHistorySelectApiModel.md)|  | [optional] 

### Return type

[**[AutoTestResultHistoryApiResult]**](AutoTestResultHistoryApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2AutoTestsIdWorkItemsChangedIdGet

> [String] apiV2AutoTestsIdWorkItemsChangedIdGet(id)

Get identifiers of changed linked work items

User permissions for project: - Read only - Execute - Write - Full control

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.AutoTestsApi();
let id = "id_example"; // String | 
apiInstance.apiV2AutoTestsIdWorkItemsChangedIdGet(id, (error, data, response) => {
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

**[String]**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2AutoTestsIdWorkItemsChangedWorkItemIdApprovePost

> apiV2AutoTestsIdWorkItemsChangedWorkItemIdApprovePost(id, workItemId)

Approve changes to work items linked to autotest

User permissions for project: - Read only - Execute - Write - Full control

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.AutoTestsApi();
let id = "id_example"; // String | 
let workItemId = "workItemId_example"; // String | 
apiInstance.apiV2AutoTestsIdWorkItemsChangedWorkItemIdApprovePost(id, workItemId, (error, data, response) => {
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
 **workItemId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2AutoTestsSearchPost

> [AutoTestApiResult] apiV2AutoTestsSearchPost(opts)

Search for autotests

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.AutoTestsApi();
let opts = {
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example", // String | Value for searching
  'autoTestSearchApiModel': new TestitApiClient.AutoTestSearchApiModel() // AutoTestSearchApiModel | 
};
apiInstance.apiV2AutoTestsSearchPost(opts, (error, data, response) => {
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
 **autoTestSearchApiModel** | [**AutoTestSearchApiModel**](AutoTestSearchApiModel.md)|  | [optional] 

### Return type

[**[AutoTestApiResult]**](AutoTestApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAutoTest

> AutoTestApiResult createAutoTest(opts)

Create autotest

 This method creates a new autotest.  To add an autotest to the test plan, link it to a work item using the &#x60;POST /api/v2/autoTests/{autoTestId}/workItems&#x60; method.  Use the &#x60;POST /api/v2/testRuns/byAutoTests&#x60; method to run autotest outside the test plan.

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.AutoTestsApi();
let opts = {
  'autoTestCreateApiModel': new TestitApiClient.AutoTestCreateApiModel() // AutoTestCreateApiModel | 
};
apiInstance.createAutoTest(opts, (error, data, response) => {
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
 **autoTestCreateApiModel** | [**AutoTestCreateApiModel**](AutoTestCreateApiModel.md)|  | [optional] 

### Return type

[**AutoTestApiResult**](AutoTestApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createMultiple

> [AutoTestApiResult] createMultiple(opts)

Create multiple autotests

 Use case  User sets autotest parameters (listed in the example) and runs method execution  System creates autotest  [Optional] If steps enumeration is set, system creates step items and relates them to autotest  [Optional] If setup enumeration is set, system creates setup items and relates them to autotest  [Optional] If teardown enumeration is set, system creates teardown items and relates them to autotest  [Optional] If label enumeration is set, system creates labels and relates them to autotest  [Optional] If link enumeration is set, system creates links and relates them to autotest  System returns autotest model (example listed in response parameters)

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.AutoTestsApi();
let opts = {
  'autoTestCreateApiModel': [new TestitApiClient.AutoTestCreateApiModel()] // [AutoTestCreateApiModel] | 
};
apiInstance.createMultiple(opts, (error, data, response) => {
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
 **autoTestCreateApiModel** | [**[AutoTestCreateApiModel]**](AutoTestCreateApiModel.md)|  | [optional] 

### Return type

[**[AutoTestApiResult]**](AutoTestApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAutoTest

> deleteAutoTest(id)

Delete autotest

 Use case  User sets autotest internal (guid format) or global (integer format) identifier and runs method execution  System finds the autotest by the identifier  System deletes autotest and returns no content response

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.AutoTestsApi();
let id = "id_example"; // String | Autotest internal (UUID) or global (integer) identifier
apiInstance.deleteAutoTest(id, (error, data, response) => {
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
 **id** | **String**| Autotest internal (UUID) or global (integer) identifier | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteAutoTestLinkFromWorkItem

> deleteAutoTestLinkFromWorkItem(id, opts)

Unlink autotest from work item

 Use case  User sets autotest internal (guid format) or global (integer format) identifier  [Optional] User sets workitem internal (guid format) or global (integer format) identifier  User runs method execution  System finds the autotest by the autotest identifier  [Optional] if workitem id is set by User, System finds the workitem by the workitem identifier and unlinks it             from autotest.  [Optional] Otherwise, if workitem id is not specified, System unlinks all workitems linked to autotest.  System returns no content response

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.AutoTestsApi();
let id = "id_example"; // String | Autotest internal (UUID) or global (integer) identifier
let opts = {
  'workItemId': "workItemId_example" // String | Work item internal (UUID) or global (integer) identifier
};
apiInstance.deleteAutoTestLinkFromWorkItem(id, opts, (error, data, response) => {
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
 **id** | **String**| Autotest internal (UUID) or global (integer) identifier | 
 **workItemId** | **String**| Work item internal (UUID) or global (integer) identifier | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllAutoTests

> [AutoTestModel] getAllAutoTests(opts)



### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.AutoTestsApi();
let opts = {
  'projectId': "projectId_example", // String | Project internal ID
  'externalId': "externalId_example", // String | Autotest external ID
  'globalId': 789, // Number | Autotest global ID
  'namespace': "namespace_example", // String | Namespace in which autotest is located
  'isNamespaceNull': true, // Boolean | OBSOLETE: Use `includeEmptyNamespaces` instead
  'includeEmptyNamespaces': true, // Boolean | If result must contain autotests without namespace
  'className': "className_example", // String | Name of class in which autotest is located
  'isClassnameNull': true, // Boolean | OBSOLETE: Use `includeEmptyClassNames` instead
  'includeEmptyClassNames': true, // Boolean | If result must contain autotests without class
  'isDeleted': true, // Boolean | OBSOLETE: Use `deleted` instead
  'deleted': true, // Boolean | Is autotest deleted
  'labels': ["null"], // [String] | Include only autotests with provided labels
  'stabilityMinimal': 56, // Number | OBSOLETE: Use `minStability` instead
  'minStability': 56, // Number | Minimum stability value of autotest
  'stabilityMaximal': 56, // Number | OBSOLETE: Use `maxStability` instead
  'maxStability': 56, // Number | Maximum stability value of autotest
  'isFlaky': true, // Boolean | OBSOLETE: Use `flaky` instead
  'flaky': true, // Boolean | Is autotest marked as \"Flaky\"
  'includeSteps': true, // Boolean | If result must also include autotest steps
  'includeLabels': true, // Boolean | If result must also include autotest labels
  'externalKey': "externalKey_example", // String | External key of autotest
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example" // String | Value for searching
};
apiInstance.getAllAutoTests(opts, (error, data, response) => {
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
 **projectId** | **String**| Project internal ID | [optional] 
 **externalId** | **String**| Autotest external ID | [optional] 
 **globalId** | **Number**| Autotest global ID | [optional] 
 **namespace** | **String**| Namespace in which autotest is located | [optional] 
 **isNamespaceNull** | **Boolean**| OBSOLETE: Use &#x60;includeEmptyNamespaces&#x60; instead | [optional] 
 **includeEmptyNamespaces** | **Boolean**| If result must contain autotests without namespace | [optional] 
 **className** | **String**| Name of class in which autotest is located | [optional] 
 **isClassnameNull** | **Boolean**| OBSOLETE: Use &#x60;includeEmptyClassNames&#x60; instead | [optional] 
 **includeEmptyClassNames** | **Boolean**| If result must contain autotests without class | [optional] 
 **isDeleted** | **Boolean**| OBSOLETE: Use &#x60;deleted&#x60; instead | [optional] 
 **deleted** | **Boolean**| Is autotest deleted | [optional] 
 **labels** | [**[String]**](String.md)| Include only autotests with provided labels | [optional] 
 **stabilityMinimal** | **Number**| OBSOLETE: Use &#x60;minStability&#x60; instead | [optional] 
 **minStability** | **Number**| Minimum stability value of autotest | [optional] 
 **stabilityMaximal** | **Number**| OBSOLETE: Use &#x60;maxStability&#x60; instead | [optional] 
 **maxStability** | **Number**| Maximum stability value of autotest | [optional] 
 **isFlaky** | **Boolean**| OBSOLETE: Use &#x60;flaky&#x60; instead | [optional] 
 **flaky** | **Boolean**| Is autotest marked as \&quot;Flaky\&quot; | [optional] 
 **includeSteps** | **Boolean**| If result must also include autotest steps | [optional] 
 **includeLabels** | **Boolean**| If result must also include autotest labels | [optional] 
 **externalKey** | **String**| External key of autotest | [optional] 
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 

### Return type

[**[AutoTestModel]**](AutoTestModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAutoTestAverageDuration

> AutoTestAverageDurationApiResult getAutoTestAverageDuration(id)

Get average autotest duration

 Use case  User sets autotest internal (guid format) or global (integer format) identifier  User runs method execution  System calculates pass average duration and fail average duration of autotest from all related test results  System returns pass average duration and fail average duration for autotest

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.AutoTestsApi();
let id = "id_example"; // String | Autotest internal (UUID) or global (integer) identifier
apiInstance.getAutoTestAverageDuration(id, (error, data, response) => {
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
 **id** | **String**| Autotest internal (UUID) or global (integer) identifier | 

### Return type

[**AutoTestAverageDurationApiResult**](AutoTestAverageDurationApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAutoTestById

> AutoTestApiResult getAutoTestById(id)

Get autotest by internal or global ID

 Use case  User sets autotest internal or global identifier and runs method execution  System returns autotest, which internal or global identifier equals the identifier value set in the previous action

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.AutoTestsApi();
let id = "id_example"; // String | Autotest internal (UUID) or global (integer) identifier
apiInstance.getAutoTestById(id, (error, data, response) => {
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
 **id** | **String**| Autotest internal (UUID) or global (integer) identifier | 

### Return type

[**AutoTestApiResult**](AutoTestApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAutoTestChronology

> [TestResultChronologyModel] getAutoTestChronology(id)

Get autotest chronology

 Use case  User sets autotest internal (guid format) or global (integer format) identifier  User runs method execution  System search all test results related to autotest (with default limit equal 100)  System orders the test results by CompletedOn property descending and then orders by CreatedDate property descending  System returns test result chronology for autotest

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.AutoTestsApi();
let id = "id_example"; // String | Autotest internal (UUID) or global (integer) identifier
apiInstance.getAutoTestChronology(id, (error, data, response) => {
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
 **id** | **String**| Autotest internal (UUID) or global (integer) identifier | 

### Return type

[**[TestResultChronologyModel]**](TestResultChronologyModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTestRuns

> [TestRunByAutoTestApiResult] getTestRuns(id)

Get completed tests runs for autotests

 Use case  User sets autotest internal (guid format) or global (integer format) identifier  User runs method execution  System search for all test runs related to the autotest  System returns the enumeration of test runs

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.AutoTestsApi();
let id = "id_example"; // String | Autotest internal (UUID) or global (integer) identifier
apiInstance.getTestRuns(id, (error, data, response) => {
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
 **id** | **String**| Autotest internal (UUID) or global (integer) identifier | 

### Return type

[**[TestRunByAutoTestApiResult]**](TestRunByAutoTestApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkItemsLinkedToAutoTest

> [AutoTestWorkItemIdentifierApiResult] getWorkItemsLinkedToAutoTest(id, opts)

Get work items linked to autotest

 This method links an autotest to a test case or a checklist.             A manual test case with a linked automated work item is marked in the test management system as an autotest.             You can run it from graphical user interface (GUI). To do that:  1. Open the project in GUI.              2. Go to &lt;b&gt;Test plans&lt;/b&gt; section and switch to the &lt;b&gt;Execution&lt;/b&gt; tab.              3. Select the autotest(s) you want to run using checkboxes.              4. In the toolbar above the test list, click &lt;b&gt;Run autotests&lt;/b&gt;.

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.AutoTestsApi();
let id = "id_example"; // String | Specifies the autotest entity ID.  You can copy it from the address bar in your web browser or use autotest GUID.
let opts = {
  'isDeleted': true, // Boolean | Specifies that a test is deleted or still relevant.
  'isWorkItemDeleted': false // Boolean | OBSOLETE: Use `isDeleted` instead
};
apiInstance.getWorkItemsLinkedToAutoTest(id, opts, (error, data, response) => {
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
 **id** | **String**| Specifies the autotest entity ID.  You can copy it from the address bar in your web browser or use autotest GUID. | 
 **isDeleted** | **Boolean**| Specifies that a test is deleted or still relevant. | [optional] 
 **isWorkItemDeleted** | **Boolean**| OBSOLETE: Use &#x60;isDeleted&#x60; instead | [optional] [default to false]

### Return type

[**[AutoTestWorkItemIdentifierApiResult]**](AutoTestWorkItemIdentifierApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## linkAutoTestToWorkItem

> linkAutoTestToWorkItem(id, opts)

Link autotest with work items

 Use case  User sets autotest internal (guid format) or global (integer format) identifier  User sets work item internal (guid format) or global (integer format) identifier  User runs method execution  System finds the autotest by the autotest identifier  System finds the work item by the work item identifier  System relates the work item with the autotest and returns no content response

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.AutoTestsApi();
let id = "id_example"; // String | Autotest internal (UUID) or global (integer) identifier
let opts = {
  'workItemIdApiModel': new TestitApiClient.WorkItemIdApiModel() // WorkItemIdApiModel | 
};
apiInstance.linkAutoTestToWorkItem(id, opts, (error, data, response) => {
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
 **id** | **String**| Autotest internal (UUID) or global (integer) identifier | 
 **workItemIdApiModel** | [**WorkItemIdApiModel**](WorkItemIdApiModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAutoTest

> updateAutoTest(opts)

Update autotest

 Use case  User sets autotest updated parameters values (listed in the example) and runs method execution  System finds the autotest by the identifier  System updates autotest parameters  [Optional] If steps enumeration is set, system creates step items, relates them to autotest             and deletes relations with current steps( if exist)  [Optional] If Setup enumeration is set, system creates setup items and relates them to autotest             and deletes relations with current Setup items (if exist)  [Optional] If teardown enumeration is set, system creates teardown items and relates them to autotest             and deletes relations with current teardown items (if exist)  [Optional] If label enumeration is set, system creates labels and relates them to autotest             and deletes relations with current Labels (if exist)  [Optional] If link enumeration is set, system creates links and relates them to autotest             and deletes relations with current Links (if exist)  System updates autotest and returns no content response

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.AutoTestsApi();
let opts = {
  'autoTestUpdateApiModel': new TestitApiClient.AutoTestUpdateApiModel() // AutoTestUpdateApiModel | 
};
apiInstance.updateAutoTest(opts, (error, data, response) => {
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
 **autoTestUpdateApiModel** | [**AutoTestUpdateApiModel**](AutoTestUpdateApiModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateMultiple

> updateMultiple(opts)

Update multiple autotests

 Use case  User sets autotest updated parameters values (listed in the example) and runs method execution  System finds the autotest by the identifier  System updates autotest parameters  [Optional] If steps enumeration is set, system creates step items, relates them to autotest             and deletes relations with current steps( if exist)  [Optional] If Setup enumeration is set, system creates setup items and relates them to autotest             and deletes relations with current Setup items (if exist)  [Optional] If teardown enumeration is set, system creates teardown items and relates them to autotest             and deletes relations with current teardown items (if exist)  [Optional] If label enumeration is set, system creates labels and relates them to autotest             and deletes relations with current Labels (if exist)  [Optional] If link enumeration is set, system creates links and relates them to autotest             and deletes relations with current Links (if exist)  System updates autotest and returns no content response

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.AutoTestsApi();
let opts = {
  'autoTestUpdateApiModel': [new TestitApiClient.AutoTestUpdateApiModel()] // [AutoTestUpdateApiModel] | 
};
apiInstance.updateMultiple(opts, (error, data, response) => {
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
 **autoTestUpdateApiModel** | [**[AutoTestUpdateApiModel]**](AutoTestUpdateApiModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

