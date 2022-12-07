# testit_api_client.TestPlansApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTestPointsWithSections**](TestPlansApi.md#addTestPointsWithSections) | **POST** /api/v2/testPlans/{id}/test-points/withSections | Add test-points to test suite with sections
[**addWorkItemsWithSections**](TestPlansApi.md#addWorkItemsWithSections) | **POST** /api/v2/testPlans/{id}/workItems/withSections | Add WorkItems to TestPlan with Sections as TestSuites
[**apiV2TestPlansIdAnalyticsGet**](TestPlansApi.md#apiV2TestPlansIdAnalyticsGet) | **GET** /api/v2/testPlans/{id}/analytics | Get analytics by TestPlan
[**apiV2TestPlansIdAutobalancePost**](TestPlansApi.md#apiV2TestPlansIdAutobalancePost) | **POST** /api/v2/testPlans/{id}/autobalance | Auto-balance for TestPlan with testers
[**apiV2TestPlansIdConfigurationsGet**](TestPlansApi.md#apiV2TestPlansIdConfigurationsGet) | **GET** /api/v2/testPlans/{id}/configurations | Get TestPlan configurations
[**apiV2TestPlansIdExportTestPointsXlsxPost**](TestPlansApi.md#apiV2TestPlansIdExportTestPointsXlsxPost) | **POST** /api/v2/testPlans/{id}/export/testPoints/xlsx | Export TestPoints from TestPlan in xls format
[**apiV2TestPlansIdExportTestResultHistoryXlsxPost**](TestPlansApi.md#apiV2TestPlansIdExportTestResultHistoryXlsxPost) | **POST** /api/v2/testPlans/{id}/export/testResultHistory/xlsx | Export TestResults history from TestPlan in xls format
[**apiV2TestPlansIdHistoryGet**](TestPlansApi.md#apiV2TestPlansIdHistoryGet) | **GET** /api/v2/testPlans/{id}/history | Get TestPlan history
[**apiV2TestPlansIdLinksGet**](TestPlansApi.md#apiV2TestPlansIdLinksGet) | **GET** /api/v2/testPlans/{id}/links | Get Links of TestPlan
[**apiV2TestPlansIdTestPointsLastResultsGet**](TestPlansApi.md#apiV2TestPlansIdTestPointsLastResultsGet) | **GET** /api/v2/testPlans/{id}/testPoints/lastResults | Get TestPoints with last result from TestPlan
[**apiV2TestPlansIdTestPointsResetPost**](TestPlansApi.md#apiV2TestPlansIdTestPointsResetPost) | **POST** /api/v2/testPlans/{id}/testPoints/reset | Reset TestPoints status of TestPlan
[**apiV2TestPlansIdTestRunsGet**](TestPlansApi.md#apiV2TestPlansIdTestRunsGet) | **GET** /api/v2/testPlans/{id}/testRuns | Get TestRuns of TestPlan
[**apiV2TestPlansIdTestRunsSearchPost**](TestPlansApi.md#apiV2TestPlansIdTestRunsSearchPost) | **POST** /api/v2/testPlans/{id}/testRuns/search | Search TestRuns of TestPlan
[**apiV2TestPlansIdTestRunsTestResultsLastModifiedModifiedDateGet**](TestPlansApi.md#apiV2TestPlansIdTestRunsTestResultsLastModifiedModifiedDateGet) | **GET** /api/v2/testPlans/{id}/testRuns/testResults/lastModified/modifiedDate | Get max modified date in TestRun for TestPlan
[**apiV2TestPlansIdUnlockRequestPost**](TestPlansApi.md#apiV2TestPlansIdUnlockRequestPost) | **POST** /api/v2/testPlans/{id}/unlock/request | Send unlock TestPlan notification
[**apiV2TestPlansShortsPost**](TestPlansApi.md#apiV2TestPlansShortsPost) | **POST** /api/v2/testPlans/shorts | Get TestPlans short models by Project identifiers
[**clone**](TestPlansApi.md#clone) | **POST** /api/v2/testPlans/{id}/clone | Clone TestPlan
[**complete**](TestPlansApi.md#complete) | **POST** /api/v2/testPlans/{id}/complete | Complete TestPlan
[**createTestPlan**](TestPlansApi.md#createTestPlan) | **POST** /api/v2/testPlans | Create TestPlan
[**deleteTestPlan**](TestPlansApi.md#deleteTestPlan) | **DELETE** /api/v2/testPlans/{id} | Delete TestPlan
[**getTestPlanById**](TestPlansApi.md#getTestPlanById) | **GET** /api/v2/testPlans/{id} | Get TestPlan by Id
[**getTestSuitesById**](TestPlansApi.md#getTestSuitesById) | **GET** /api/v2/testPlans/{id}/testSuites | Get TestSuites Tree By Id
[**pause**](TestPlansApi.md#pause) | **POST** /api/v2/testPlans/{id}/pause | Pause TestPlan
[**restoreTestPlan**](TestPlansApi.md#restoreTestPlan) | **POST** /api/v2/testPlans/{id}/restore | Restore TestPlan
[**start**](TestPlansApi.md#start) | **POST** /api/v2/testPlans/{id}/start | Start TestPlan
[**updateTestPlan**](TestPlansApi.md#updateTestPlan) | **PUT** /api/v2/testPlans | Update TestPlan



## addTestPointsWithSections

> addTestPointsWithSections(id, opts)

Add test-points to test suite with sections

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestPlansApi();
let id = 1ed608bf-8ac9-4ffd-b91e-ebdbbdce6132; // String | Test suite internal identifier
let opts = {
  'workItemSelectModel': new testit_api_client.WorkItemSelectModel() // WorkItemSelectModel | Filter object to retrieve work items for test-suite's project
};
apiInstance.addTestPointsWithSections(id, opts, (error, data, response) => {
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
 **id** | **String**| Test suite internal identifier | 
 **workItemSelectModel** | [**WorkItemSelectModel**](WorkItemSelectModel.md)| Filter object to retrieve work items for test-suite&#39;s project | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## addWorkItemsWithSections

> addWorkItemsWithSections(id, opts)

Add WorkItems to TestPlan with Sections as TestSuites

&lt;br&gt;Use case  &lt;br&gt;User sets TestPlan identifier  &lt;br&gt;User sets WorkItem identifiers (listed in request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System added WorkItems and Sections to TestPlan  &lt;br&gt;System returns no content response

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestPlansApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | Test plan internal (guid format) or global (int  format) identifier
let opts = {
  'requestBody': ["null"] // [String] | 
};
apiInstance.addWorkItemsWithSections(id, opts, (error, data, response) => {
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
 **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | 
 **requestBody** | [**[String]**](String.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2TestPlansIdAnalyticsGet

> TestPointAnalyticResult apiV2TestPlansIdAnalyticsGet(id)

Get analytics by TestPlan

&lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System returns analytics by test plan

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestPlansApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | Test plan internal (guid format) or global (int  format) identifier
apiInstance.apiV2TestPlansIdAnalyticsGet(id, (error, data, response) => {
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
 **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | 

### Return type

[**TestPointAnalyticResult**](TestPointAnalyticResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2TestPlansIdAutobalancePost

> TestPlanWithTestSuiteTreeModel apiV2TestPlansIdAutobalancePost(id, opts)

Auto-balance for TestPlan with testers

&lt;br&gt;Use case  &lt;br&gt;User sets TestPlan identifier  &lt;br&gt;User sets testers identifiers (listed in request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System auto-balances TestPlan  &lt;br&gt;System returns test plan model (listed in response example)

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestPlansApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | Test plan internal (guid format) or global (int  format) identifier
let opts = {
  'testers': ["null"] // [String] | List of testers internal identifiers
};
apiInstance.apiV2TestPlansIdAutobalancePost(id, opts, (error, data, response) => {
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
 **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | 
 **testers** | [**[String]**](String.md)| List of testers internal identifiers | [optional] 

### Return type

[**TestPlanWithTestSuiteTreeModel**](TestPlanWithTestSuiteTreeModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2TestPlansIdConfigurationsGet

> [ConfigurationModel] apiV2TestPlansIdConfigurationsGet(id)

Get TestPlan configurations

&lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System return test plan configurations

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestPlansApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | Test plan internal (guid format) or global (int  format) identifier
apiInstance.apiV2TestPlansIdConfigurationsGet(id, (error, data, response) => {
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
 **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | 

### Return type

[**[ConfigurationModel]**](ConfigurationModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2TestPlansIdExportTestPointsXlsxPost

> File apiV2TestPlansIdExportTestPointsXlsxPost(id, opts)

Export TestPoints from TestPlan in xls format

&lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User sets filter model (listed in request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System return export xlsx file

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestPlansApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | Test plan internal (guid format) or global (int  format) identifier
let opts = {
  'timeZoneOffsetInMinutes': 789, // Number | 
  'getXlsxTestPointsByTestPlanModel': new testit_api_client.GetXlsxTestPointsByTestPlanModel() // GetXlsxTestPointsByTestPlanModel | 
};
apiInstance.apiV2TestPlansIdExportTestPointsXlsxPost(id, opts, (error, data, response) => {
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
 **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | 
 **timeZoneOffsetInMinutes** | **Number**|  | [optional] 
 **getXlsxTestPointsByTestPlanModel** | [**GetXlsxTestPointsByTestPlanModel**](GetXlsxTestPointsByTestPlanModel.md)|  | [optional] 

### Return type

**File**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/octet-stream, application/json


## apiV2TestPlansIdExportTestResultHistoryXlsxPost

> File apiV2TestPlansIdExportTestResultHistoryXlsxPost(id, opts)

Export TestResults history from TestPlan in xls format

&lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User sets filter model (listed in request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System return export xlsx file

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestPlansApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | Test plan internal (guid format) or global (int  format) identifier
let opts = {
  'mustReturnOnlyLastTestResult': true, // Boolean | 
  'includeSteps': true, // Boolean | 
  'includeDeletedTestSuites': true, // Boolean | 
  'timeZoneOffsetInMinutes': 789 // Number | 
};
apiInstance.apiV2TestPlansIdExportTestResultHistoryXlsxPost(id, opts, (error, data, response) => {
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
 **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | 
 **mustReturnOnlyLastTestResult** | **Boolean**|  | [optional] 
 **includeSteps** | **Boolean**|  | [optional] 
 **includeDeletedTestSuites** | **Boolean**|  | [optional] 
 **timeZoneOffsetInMinutes** | **Number**|  | [optional] 

### Return type

**File**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream, application/json


## apiV2TestPlansIdHistoryGet

> [TestPlanChangeModel] apiV2TestPlansIdHistoryGet(id, opts)

Get TestPlan history

&lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System return test plan history

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestPlansApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | Test plan internal (guid format) or global (int  format) identifier
let opts = {
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example" // String | Value for searching
};
apiInstance.apiV2TestPlansIdHistoryGet(id, opts, (error, data, response) => {
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
 **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | 
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 

### Return type

[**[TestPlanChangeModel]**](TestPlanChangeModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2TestPlansIdLinksGet

> [TestPlanLink] apiV2TestPlansIdLinksGet(id, opts)

Get Links of TestPlan

&lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User sets pagination filter (listed in request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System returns links of TestPlan

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestPlansApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | Test plan internal (guid format) or global (int  format) identifier
let opts = {
  'skip': 56, // Number | 
  'take': 56, // Number | 
  'orderBy': "orderBy_example" // String | 
};
apiInstance.apiV2TestPlansIdLinksGet(id, opts, (error, data, response) => {
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
 **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 
 **orderBy** | **String**|  | [optional] 

### Return type

[**[TestPlanLink]**](TestPlanLink.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2TestPlansIdTestPointsLastResultsGet

> [TestPointWithLastResultModel] apiV2TestPlansIdTestPointsLastResultsGet(id, opts)

Get TestPoints with last result from TestPlan

&lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User sets filter (listed in request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System return test points with last result from test plan

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestPlansApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | Test plan internal (guid format) or global (int  format) identifier
let opts = {
  'mustAddGroupingElements': true, // Boolean | 
  'testerId': "testerId_example", // String | 
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example" // String | Value for searching
};
apiInstance.apiV2TestPlansIdTestPointsLastResultsGet(id, opts, (error, data, response) => {
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
 **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | 
 **mustAddGroupingElements** | **Boolean**|  | [optional] 
 **testerId** | **String**|  | [optional] 
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 

### Return type

[**[TestPointWithLastResultModel]**](TestPointWithLastResultModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2TestPlansIdTestPointsResetPost

> apiV2TestPlansIdTestPointsResetPost(id, opts)

Reset TestPoints status of TestPlan

&lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User sets test points identifiers  &lt;br&gt;User runs method execution  &lt;br&gt;System reset test points statuses of test plan

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestPlansApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | Test plan internal (guid format) or global (int  format) identifier
let opts = {
  'requestBody': ["null"] // [String] | 
};
apiInstance.apiV2TestPlansIdTestPointsResetPost(id, opts, (error, data, response) => {
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
 **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | 
 **requestBody** | [**[String]**](String.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2TestPlansIdTestRunsGet

> [TestRunModel] apiV2TestPlansIdTestRunsGet(id, opts)

Get TestRuns of TestPlan

&lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User sets TestRun status filter (listed in request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System returns TestRuns for TestPlan

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestPlansApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | Test plan internal (guid format) or global (int  format) identifier
let opts = {
  'notStarted': true, // Boolean | 
  'inProgress': true, // Boolean | 
  'stopped': true, // Boolean | 
  'completed': true, // Boolean | 
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example" // String | Value for searching
};
apiInstance.apiV2TestPlansIdTestRunsGet(id, opts, (error, data, response) => {
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
 **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | 
 **notStarted** | **Boolean**|  | [optional] 
 **inProgress** | **Boolean**|  | [optional] 
 **stopped** | **Boolean**|  | [optional] 
 **completed** | **Boolean**|  | [optional] 
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


## apiV2TestPlansIdTestRunsSearchPost

> [TestRunModel] apiV2TestPlansIdTestRunsSearchPost(id, opts)

Search TestRuns of TestPlan

&lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User sets TestRuns filter (listed in request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System returns TestRuns for TestPlan

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestPlansApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | Test plan internal (guid format) or global (int  format) identifier
let opts = {
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example", // String | Value for searching
  'testRunSearchQueryModel': new testit_api_client.TestRunSearchQueryModel() // TestRunSearchQueryModel | 
};
apiInstance.apiV2TestPlansIdTestRunsSearchPost(id, opts, (error, data, response) => {
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
 **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | 
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 
 **testRunSearchQueryModel** | [**TestRunSearchQueryModel**](TestRunSearchQueryModel.md)|  | [optional] 

### Return type

[**[TestRunModel]**](TestRunModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2TestPlansIdTestRunsTestResultsLastModifiedModifiedDateGet

> Date apiV2TestPlansIdTestRunsTestResultsLastModifiedModifiedDateGet(id)

Get max modified date in TestRun for TestPlan

&lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System returns max modified date in TestRun for TestPlan

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestPlansApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | Test plan internal (guid format) or global (int  format) identifier
apiInstance.apiV2TestPlansIdTestRunsTestResultsLastModifiedModifiedDateGet(id, (error, data, response) => {
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
 **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | 

### Return type

**Date**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2TestPlansIdUnlockRequestPost

> apiV2TestPlansIdUnlockRequestPost(id)

Send unlock TestPlan notification

&lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System send unlock test plan notification

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestPlansApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | Test plan internal (guid format) or global (int  format) identifier
apiInstance.apiV2TestPlansIdUnlockRequestPost(id, (error, data, response) => {
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
 **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2TestPlansShortsPost

> [TestPlanShortModel] apiV2TestPlansShortsPost(opts)

Get TestPlans short models by Project identifiers

&lt;br&gt;Use case  &lt;br&gt;User sets projects identifiers  &lt;br&gt;User runs method execution  &lt;br&gt;System return test plans short models (listed in response example)

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestPlansApi();
let opts = {
  'isDeleted': true, // Boolean | 
  'requestBody': ["null"] // [String] | 
};
apiInstance.apiV2TestPlansShortsPost(opts, (error, data, response) => {
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
 **isDeleted** | **Boolean**|  | [optional] 
 **requestBody** | [**[String]**](String.md)|  | [optional] 

### Return type

[**[TestPlanShortModel]**](TestPlanShortModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## clone

> TestPlanModel clone(id)

Clone TestPlan

&lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System clones test plan  &lt;br&gt;System returns test plan (listed in response example)

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestPlansApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | Test plan internal (guid format) or global (int  format) identifier
apiInstance.clone(id, (error, data, response) => {
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
 **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | 

### Return type

[**TestPlanModel**](TestPlanModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## complete

> complete(id)

Complete TestPlan

&lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System completes the test plan and updates test plan status  &lt;br&gt;System returns no content response

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestPlansApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | Test plan internal (guid format) or global (int  format) identifier
apiInstance.complete(id, (error, data, response) => {
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
 **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createTestPlan

> TestPlanModel createTestPlan(opts)

Create TestPlan

&lt;br&gt;Use case  &lt;br&gt;User sets test plan properties (listed in request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System creates test plan  &lt;br&gt;System returns test plan (listed in response example)

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestPlansApi();
let opts = {
  'testPlanPostModel': new testit_api_client.TestPlanPostModel() // TestPlanPostModel | 
};
apiInstance.createTestPlan(opts, (error, data, response) => {
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
 **testPlanPostModel** | [**TestPlanPostModel**](TestPlanPostModel.md)|  | [optional] 

### Return type

[**TestPlanModel**](TestPlanModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTestPlan

> deleteTestPlan(id)

Delete TestPlan

&lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System delete test plan  &lt;br&gt;System returns no content response

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestPlansApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | Test plan internal (guid format) or global (int  format) identifier
apiInstance.deleteTestPlan(id, (error, data, response) => {
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
 **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTestPlanById

> TestPlanModel getTestPlanById(id)

Get TestPlan by Id

&lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System search  test plan by the identifier  &lt;br&gt;System returns test plan

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestPlansApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | Test plan internal (guid format) or global (int  format) identifier
apiInstance.getTestPlanById(id, (error, data, response) => {
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
 **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | 

### Return type

[**TestPlanModel**](TestPlanModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTestSuitesById

> [TestSuiteV2TreeModel] getTestSuitesById(id)

Get TestSuites Tree By Id

&lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System finds test suites related to the test plan  &lt;br&gt;System returns test suites as a tree model (listed in response example)

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestPlansApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | Test plan internal (guid format) or global (int  format) identifier
apiInstance.getTestSuitesById(id, (error, data, response) => {
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
 **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | 

### Return type

[**[TestSuiteV2TreeModel]**](TestSuiteV2TreeModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pause

> pause(id)

Pause TestPlan

&lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System pauses the test plan and updates test plan status  &lt;br&gt;System returns no content response

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestPlansApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | Test plan internal (guid format) or global (int  format) identifier
apiInstance.pause(id, (error, data, response) => {
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
 **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## restoreTestPlan

> restoreTestPlan(id)

Restore TestPlan

&lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System restores test plan  &lt;br&gt;System returns no content response

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestPlansApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | Test plan internal (guid format) or global (int  format) identifier
apiInstance.restoreTestPlan(id, (error, data, response) => {
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
 **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## start

> start(id)

Start TestPlan

&lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System starts the test plan and updates test plan status  &lt;br&gt;System returns no content response

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestPlansApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | Test plan internal (guid format) or global (int  format) identifier
apiInstance.start(id, (error, data, response) => {
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
 **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateTestPlan

> updateTestPlan(opts)

Update TestPlan

&lt;br&gt;Use case  &lt;br&gt;User sets test plan properties(listed in request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System updates test plan  &lt;br&gt;System returns no content response

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestPlansApi();
let opts = {
  'testPlanPutModel': new testit_api_client.TestPlanPutModel() // TestPlanPutModel | 
};
apiInstance.updateTestPlan(opts, (error, data, response) => {
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
 **testPlanPutModel** | [**TestPlanPutModel**](TestPlanPutModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

