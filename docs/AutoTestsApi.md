# testit_api_client.AutoTestsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2AutoTestsFlakyBulkPost**](AutoTestsApi.md#apiV2AutoTestsFlakyBulkPost) | **POST** /api/v2/autoTests/flaky/bulk | Set \&quot;Flaky\&quot; status for multiple autotests
[**apiV2AutoTestsIdWorkItemsChangedIdGet**](AutoTestsApi.md#apiV2AutoTestsIdWorkItemsChangedIdGet) | **GET** /api/v2/autoTests/{id}/workItems/changed/id | Get identifiers of changed linked work items
[**apiV2AutoTestsIdWorkItemsChangedWorkItemIdApprovePost**](AutoTestsApi.md#apiV2AutoTestsIdWorkItemsChangedWorkItemIdApprovePost) | **POST** /api/v2/autoTests/{id}/workItems/changed/{workItemId}/approve | Approve changes to work items linked to autotest
[**createAutoTest**](AutoTestsApi.md#createAutoTest) | **POST** /api/v2/autoTests | Create autotest
[**createMultiple**](AutoTestsApi.md#createMultiple) | **POST** /api/v2/autoTests/bulk | Create multiple autotests
[**deleteAutoTest**](AutoTestsApi.md#deleteAutoTest) | **DELETE** /api/v2/autoTests/{id} | Delete autotest
[**deleteAutoTestLinkFromWorkItem**](AutoTestsApi.md#deleteAutoTestLinkFromWorkItem) | **DELETE** /api/v2/autoTests/{id}/workItems | Unlink autotest from work item
[**getAllAutoTests**](AutoTestsApi.md#getAllAutoTests) | **GET** /api/v2/autoTests | Get all autotests
[**getAutoTestAverageDuration**](AutoTestsApi.md#getAutoTestAverageDuration) | **GET** /api/v2/autoTests/{id}/averageDuration | Get average autotest duration
[**getAutoTestById**](AutoTestsApi.md#getAutoTestById) | **GET** /api/v2/autoTests/{id} | Get autotest by internal or global ID
[**getAutoTestChronology**](AutoTestsApi.md#getAutoTestChronology) | **GET** /api/v2/autoTests/{id}/chronology | Get autotest chronology
[**getTestRuns**](AutoTestsApi.md#getTestRuns) | **GET** /api/v2/autoTests/{id}/testRuns | Get completed tests runs for autotests
[**getWorkItemResults**](AutoTestsApi.md#getWorkItemResults) | **GET** /api/v2/autoTests/{id}/testResultHistory | Get test results history for autotest
[**getWorkItemsLinkedToAutoTest**](AutoTestsApi.md#getWorkItemsLinkedToAutoTest) | **GET** /api/v2/autoTests/{id}/workItems | Get work items linked to autotest
[**linkAutoTestToWorkItem**](AutoTestsApi.md#linkAutoTestToWorkItem) | **POST** /api/v2/autoTests/{id}/workItems | Link autotest with work items
[**updateAutoTest**](AutoTestsApi.md#updateAutoTest) | **PUT** /api/v2/autoTests | Update autotest
[**updateMultiple**](AutoTestsApi.md#updateMultiple) | **PUT** /api/v2/autoTests/bulk | Update multiple autotests



## apiV2AutoTestsFlakyBulkPost

> apiV2AutoTestsFlakyBulkPost(opts)

Set \&quot;Flaky\&quot; status for multiple autotests

User permissions for project:  - Read only  - Execute  - Write  - Full control

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.AutoTestsApi();
let opts = {
  'flakyBulkDto': new testit_api_client.FlakyBulkDto() // FlakyBulkDto | 
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
 **flakyBulkDto** | [**FlakyBulkDto**](FlakyBulkDto.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2AutoTestsIdWorkItemsChangedIdGet

> [String] apiV2AutoTestsIdWorkItemsChangedIdGet(id)

Get identifiers of changed linked work items

User permissions for project:  - Read only  - Execute  - Write  - Full control

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.AutoTestsApi();
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

User permissions for project:  - Read only  - Execute  - Write  - Full control

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.AutoTestsApi();
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


## createAutoTest

> AutoTestModel createAutoTest(opts)

Create autotest

&lt;br&gt;This method creates a new autotest.  &lt;br&gt;To add an autotest to the test plan, link it to a work item using the &#x60;POST /api/v2/autoTests/{autoTestId}/workItems&#x60; method.  &lt;br&gt;Use the &#x60;POST /api/v2/testRuns/byAutoTests&#x60; method to run autotest outside the test plan.

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.AutoTestsApi();
let opts = {
  'autoTestPostModel': new testit_api_client.AutoTestPostModel() // AutoTestPostModel | 
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
 **autoTestPostModel** | [**AutoTestPostModel**](AutoTestPostModel.md)|  | [optional] 

### Return type

[**AutoTestModel**](AutoTestModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createMultiple

> [AutoTestModel] createMultiple(opts)

Create multiple autotests

&lt;br&gt;Use case  &lt;br&gt;User sets autotest parameters (listed in the example) and runs method execution  &lt;br&gt;System creates autotest  &lt;br&gt;[Optional] If steps enumeration is set, system creates step items and relates them to autotest  &lt;br&gt;[Optional] If setup enumeration is set, system creates setup items and relates them to autotest  &lt;br&gt;[Optional] If teardown enumeration is set, system creates teardown items and relates them to autotest  &lt;br&gt;[Optional] If label enumeration is set, system creates labels and relates them to autotest  &lt;br&gt;[Optional] If link enumeration is set, system creates links and relates them to autotest  &lt;br&gt;System returns autotest model (example listed in response parameters)

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.AutoTestsApi();
let opts = {
  'autoTestPostModel': [new testit_api_client.AutoTestPostModel()] // [AutoTestPostModel] | 
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
 **autoTestPostModel** | [**[AutoTestPostModel]**](AutoTestPostModel.md)|  | [optional] 

### Return type

[**[AutoTestModel]**](AutoTestModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAutoTest

> deleteAutoTest(id)

Delete autotest

&lt;br&gt;Use case  &lt;br&gt;User sets autotest internal (guid format) or global (integer format) identifier and runs method execution  &lt;br&gt;System finds the autotest by the identifier  &lt;br&gt;System deletes autotest and returns no content response

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.AutoTestsApi();
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

&lt;br&gt;Use case  &lt;br&gt;User sets autotest internal (guid format) or global (integer format) identifier  &lt;br&gt;[Optional] User sets workitem internal (guid format) or global (integer format) identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System finds the autotest by the autotest identifier  &lt;br&gt;              [Optional] if workitem id is set by User, System finds the workitem by the workitem identifier and unlinks it              from autotest.                &lt;br&gt;[Optional] Otherwise, if workitem id is not specified, System unlinks all workitems linked to autotest.  &lt;br&gt;System returns no content response

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.AutoTestsApi();
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

Get all autotests

&lt;br&gt;Use case  &lt;br&gt;[Optional] User sets search parameters (listed in request parameters) and runs method execution  &lt;br&gt;System returns all autotests, matching search criteria

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.AutoTestsApi();
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

> AutoTestAverageDurationModel getAutoTestAverageDuration(id)

Get average autotest duration

&lt;br&gt;Use case  &lt;br&gt;User sets autotest internal (guid format) or global (integer format) identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System calculates pass average duration and fail average duration of autotest from all related test results  &lt;br&gt;System returns pass average duration and fail average duration for autotest

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.AutoTestsApi();
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

[**AutoTestAverageDurationModel**](AutoTestAverageDurationModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAutoTestById

> AutoTestModel getAutoTestById(id)

Get autotest by internal or global ID

&lt;br&gt;Use case  &lt;br&gt;User sets autotest internal or global identifier and runs method execution  &lt;br&gt;System returns autotest, which internal or global identifier equals the identifier value set in the previous action

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.AutoTestsApi();
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

[**AutoTestModel**](AutoTestModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAutoTestChronology

> [TestResultChronologyModel] getAutoTestChronology(id)

Get autotest chronology

&lt;br&gt;Use case  &lt;br&gt;User sets autotest internal (guid format) or global (integer format) identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System search all test results related to autotest (with default limit equal 100)  &lt;br&gt;System orders the test results by CompletedOn property descending and then orders by CreatedDate property descending  &lt;br&gt;System returns test result chronology for autotest

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.AutoTestsApi();
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

> [TestRunShortModel] getTestRuns(id)

Get completed tests runs for autotests

&lt;br&gt;Use case  &lt;br&gt;User sets autotest internal (guid format) or global (integer format) identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System search for all test runs related to the autotest  &lt;br&gt;System returns the enumeration of test runs

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.AutoTestsApi();
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

[**[TestRunShortModel]**](TestRunShortModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkItemResults

> [TestResultHistoryReportModel] getWorkItemResults(id, opts)

Get test results history for autotest

&lt;br&gt;Use case  &lt;br&gt;User sets autotest internal (guid format) or global (integer format) identifier  &lt;br&gt;User sets getTestResultHistoryReportQuery (listed in the example)  &lt;br&gt;User runs method execution  &lt;br&gt;System search for test results using filters set by user in getTestResultHistoryReportQuery and id  &lt;br&gt;System returns the enumeration of test results

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.AutoTestsApi();
let id = "id_example"; // String | Autotest internal (UUID) or global (integer) identifier
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
apiInstance.getWorkItemResults(id, opts, (error, data, response) => {
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


## getWorkItemsLinkedToAutoTest

> [WorkItemIdentifierModel] getWorkItemsLinkedToAutoTest(id, opts)

Get work items linked to autotest

&lt;br&gt;              This method links an autotest to a test case or a checklist.              A manual test case with a linked automated work item is marked in the test management system as an autotest.              You can run it from graphical user interface (GUI). To do that:                &lt;br&gt;              1. Open the project in GUI.&lt;br /&gt;              2. Go to &lt;b&gt;Test plans&lt;/b&gt; section and switch to the &lt;b&gt;Execution&lt;/b&gt; tab.&lt;br /&gt;              3. Select the autotest(s) you want to run using checkboxes.&lt;br /&gt;              4. In the toolbar above the test list, click &lt;b&gt;Run autotests&lt;/b&gt;.              

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.AutoTestsApi();
let id = "id_example"; // String | Specifies the autotest entity ID.<br />  You can copy it from the address bar in your web browser or use autotest GUID.
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
 **id** | **String**| Specifies the autotest entity ID.&lt;br /&gt;  You can copy it from the address bar in your web browser or use autotest GUID. | 
 **isDeleted** | **Boolean**| Specifies that a test is deleted or still relevant. | [optional] 
 **isWorkItemDeleted** | **Boolean**| OBSOLETE: Use &#x60;isDeleted&#x60; instead | [optional] [default to false]

### Return type

[**[WorkItemIdentifierModel]**](WorkItemIdentifierModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## linkAutoTestToWorkItem

> linkAutoTestToWorkItem(id, opts)

Link autotest with work items

&lt;br&gt;Use case  &lt;br&gt;User sets autotest internal (guid format) or global (integer format) identifier  &lt;br&gt;User sets work item internal (guid format) or global (integer format) identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System finds the autotest by the autotest identifier  &lt;br&gt;System finds the work item by the work item identifier  &lt;br&gt;System relates the work item with the autotest and returns no content response

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.AutoTestsApi();
let id = "id_example"; // String | Autotest internal (UUID) or global (integer) identifier
let opts = {
  'workItemIdModel': new testit_api_client.WorkItemIdModel() // WorkItemIdModel | 
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
 **workItemIdModel** | [**WorkItemIdModel**](WorkItemIdModel.md)|  | [optional] 

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

&lt;br&gt;Use case  &lt;br&gt;User sets autotest updated parameters values (listed in the example) and runs method execution  &lt;br&gt;System finds the autotest by the identifier  &lt;br&gt;System updates autotest parameters   &lt;br&gt;              [Optional] If steps enumeration is set, system creates step items, relates them to autotest              and deletes relations with current steps( if exist)                &lt;br&gt;              [Optional] If Setup enumeration is set, system creates setup items and relates them to autotest              and deletes relations with current Setup items (if exist)                &lt;br&gt;              [Optional] If teardown enumeration is set, system creates teardown items and relates them to autotest              and deletes relations with current teardown items (if exist)                &lt;br&gt;              [Optional] If label enumeration is set, system creates labels and relates them to autotest              and deletes relations with current Labels (if exist)                &lt;br&gt;              [Optional] If link enumeration is set, system creates links and relates them to autotest              and deletes relations with current Links (if exist)                &lt;br&gt;System updates autotest and returns no content response

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.AutoTestsApi();
let opts = {
  'autoTestPutModel': new testit_api_client.AutoTestPutModel() // AutoTestPutModel | 
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
 **autoTestPutModel** | [**AutoTestPutModel**](AutoTestPutModel.md)|  | [optional] 

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

&lt;br&gt;Use case  &lt;br&gt;User sets autotest updated parameters values (listed in the example) and runs method execution  &lt;br&gt;System finds the autotest by the identifier  &lt;br&gt;System updates autotest parameters   &lt;br&gt;              [Optional] If steps enumeration is set, system creates step items, relates them to autotest              and deletes relations with current steps( if exist)                &lt;br&gt;              [Optional] If Setup enumeration is set, system creates setup items and relates them to autotest              and deletes relations with current Setup items (if exist)                &lt;br&gt;              [Optional] If teardown enumeration is set, system creates teardown items and relates them to autotest              and deletes relations with current teardown items (if exist)                &lt;br&gt;              [Optional] If label enumeration is set, system creates labels and relates them to autotest              and deletes relations with current Labels (if exist)                &lt;br&gt;              [Optional] If link enumeration is set, system creates links and relates them to autotest              and deletes relations with current Links (if exist)                &lt;br&gt;System updates autotest and returns no content response

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.AutoTestsApi();
let opts = {
  'autoTestPutModel': [new testit_api_client.AutoTestPutModel()] // [AutoTestPutModel] | 
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
 **autoTestPutModel** | [**[AutoTestPutModel]**](AutoTestPutModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

