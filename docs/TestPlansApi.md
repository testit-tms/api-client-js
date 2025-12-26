# TestitApiClient.TestPlansApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTestPointsWithSections**](TestPlansApi.md#addTestPointsWithSections) | **POST** /api/v2/testPlans/{id}/test-points/withSections | Add test-points to TestPlan with sections
[**addWorkItemsWithSections**](TestPlansApi.md#addWorkItemsWithSections) | **POST** /api/v2/testPlans/{id}/workItems/withSections | Add WorkItems to TestPlan with Sections as TestSuites
[**apiV2TestPlansIdAnalyticsGet**](TestPlansApi.md#apiV2TestPlansIdAnalyticsGet) | **GET** /api/v2/testPlans/{id}/analytics | Get analytics by TestPlan
[**apiV2TestPlansIdAutobalancePost**](TestPlansApi.md#apiV2TestPlansIdAutobalancePost) | **POST** /api/v2/testPlans/{id}/autobalance | Distribute test points between the users
[**apiV2TestPlansIdConfigurationsGet**](TestPlansApi.md#apiV2TestPlansIdConfigurationsGet) | **GET** /api/v2/testPlans/{id}/configurations | Get TestPlan configurations
[**apiV2TestPlansIdExportTestPointsXlsxPost**](TestPlansApi.md#apiV2TestPlansIdExportTestPointsXlsxPost) | **POST** /api/v2/testPlans/{id}/export/testPoints/xlsx | Export TestPoints from TestPlan in xls format
[**apiV2TestPlansIdExportTestResultHistoryXlsxPost**](TestPlansApi.md#apiV2TestPlansIdExportTestResultHistoryXlsxPost) | **POST** /api/v2/testPlans/{id}/export/testResultHistory/xlsx | Export TestResults history from TestPlan in xls format
[**apiV2TestPlansIdHistoryGet**](TestPlansApi.md#apiV2TestPlansIdHistoryGet) | **GET** /api/v2/testPlans/{id}/history | Get TestPlan history
[**apiV2TestPlansIdLinksGet**](TestPlansApi.md#apiV2TestPlansIdLinksGet) | **GET** /api/v2/testPlans/{id}/links | Get Links of TestPlan
[**apiV2TestPlansIdPatch**](TestPlansApi.md#apiV2TestPlansIdPatch) | **PATCH** /api/v2/testPlans/{id} | Patch test plan
[**apiV2TestPlansIdSummariesGet**](TestPlansApi.md#apiV2TestPlansIdSummariesGet) | **GET** /api/v2/testPlans/{id}/summaries | Get summary by TestPlan
[**apiV2TestPlansIdTestPointsLastResultsGet**](TestPlansApi.md#apiV2TestPlansIdTestPointsLastResultsGet) | **GET** /api/v2/testPlans/{id}/testPoints/lastResults | Get TestPoints with last result from TestPlan
[**apiV2TestPlansIdTestPointsResetPost**](TestPlansApi.md#apiV2TestPlansIdTestPointsResetPost) | **POST** /api/v2/testPlans/{id}/testPoints/reset | Reset TestPoints status of TestPlan
[**apiV2TestPlansIdTestPointsTesterDelete**](TestPlansApi.md#apiV2TestPlansIdTestPointsTesterDelete) | **DELETE** /api/v2/testPlans/{id}/testPoints/tester | Unassign users from multiple test points
[**apiV2TestPlansIdTestPointsTesterUserIdPost**](TestPlansApi.md#apiV2TestPlansIdTestPointsTesterUserIdPost) | **POST** /api/v2/testPlans/{id}/testPoints/tester/{userId} | Assign user as a tester to multiple test points
[**apiV2TestPlansIdTestRunsGet**](TestPlansApi.md#apiV2TestPlansIdTestRunsGet) | **GET** /api/v2/testPlans/{id}/testRuns | Get TestRuns of TestPlan
[**apiV2TestPlansIdTestRunsSearchPost**](TestPlansApi.md#apiV2TestPlansIdTestRunsSearchPost) | **POST** /api/v2/testPlans/{id}/testRuns/search | Search TestRuns of TestPlan
[**apiV2TestPlansIdTestRunsTestResultsLastModifiedModifiedDateGet**](TestPlansApi.md#apiV2TestPlansIdTestRunsTestResultsLastModifiedModifiedDateGet) | **GET** /api/v2/testPlans/{id}/testRuns/testResults/lastModified/modifiedDate | Get last modification date of test plan&#39;s test results
[**apiV2TestPlansIdUnlockRequestPost**](TestPlansApi.md#apiV2TestPlansIdUnlockRequestPost) | **POST** /api/v2/testPlans/{id}/unlock/request | Send unlock TestPlan notification
[**apiV2TestPlansShortsPost**](TestPlansApi.md#apiV2TestPlansShortsPost) | **POST** /api/v2/testPlans/shorts | Get TestPlans short models by Project identifiers
[**clone**](TestPlansApi.md#clone) | **POST** /api/v2/testPlans/{id}/clone | Clone TestPlan
[**complete**](TestPlansApi.md#complete) | **POST** /api/v2/testPlans/{id}/complete | Complete TestPlan
[**createTestPlan**](TestPlansApi.md#createTestPlan) | **POST** /api/v2/testPlans | Create TestPlan
[**deleteTestPlan**](TestPlansApi.md#deleteTestPlan) | **DELETE** /api/v2/testPlans/{id} | Delete TestPlan
[**getTestPlanById**](TestPlansApi.md#getTestPlanById) | **GET** /api/v2/testPlans/{id} | Get TestPlan by Id
[**getTestSuitesById**](TestPlansApi.md#getTestSuitesById) | **GET** /api/v2/testPlans/{id}/testSuites | Get TestSuites Tree By Id
[**pause**](TestPlansApi.md#pause) | **POST** /api/v2/testPlans/{id}/pause | Pause TestPlan
[**purgeTestPlan**](TestPlansApi.md#purgeTestPlan) | **POST** /api/v2/testPlans/{id}/purge | Permanently delete test plan from archive
[**restoreTestPlan**](TestPlansApi.md#restoreTestPlan) | **POST** /api/v2/testPlans/{id}/restore | Restore TestPlan
[**start**](TestPlansApi.md#start) | **POST** /api/v2/testPlans/{id}/start | Start TestPlan
[**updateTestPlan**](TestPlansApi.md#updateTestPlan) | **PUT** /api/v2/testPlans | Update TestPlan



## addTestPointsWithSections

> addTestPointsWithSections(id, opts)

Add test-points to TestPlan with sections

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestPlansApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test plan internal (guid format) or global (int format) identifier
let opts = {
  'workItemSelectModel': new TestitApiClient.WorkItemSelectModel() // WorkItemSelectModel | Filter object to retrieve work items for test-suite's project
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
 **id** | **String**| Test plan internal (guid format) or global (int format) identifier | 
 **workItemSelectModel** | [**WorkItemSelectModel**](WorkItemSelectModel.md)| Filter object to retrieve work items for test-suite&#39;s project | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## addWorkItemsWithSections

> addWorkItemsWithSections(id, opts)

Add WorkItems to TestPlan with Sections as TestSuites

 Use case  User sets TestPlan identifier  User sets WorkItem identifiers (listed in request example)  User runs method execution  System added WorkItems and Sections to TestPlan  System returns no content response

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestPlansApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test plan internal (guid format) or global (int format) identifier
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
 **id** | **String**| Test plan internal (guid format) or global (int format) identifier | 
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

 Use case  User sets test plan identifier  User runs method execution  System returns analytics by test plan

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestPlansApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test plan internal (guid format) or global (int format) identifier
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
 **id** | **String**| Test plan internal (guid format) or global (int format) identifier | 

### Return type

[**TestPointAnalyticResult**](TestPointAnalyticResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2TestPlansIdAutobalancePost

> TestPlanWithTestSuiteTreeModel apiV2TestPlansIdAutobalancePost(id, opts)

Distribute test points between the users

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestPlansApi();
let id = "id_example"; // String | Test plan unique or global ID
let opts = {
  'testers': ["null"] // [String] | Specifies a project user IDs to distribute
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
 **id** | **String**| Test plan unique or global ID | 
 **testers** | [**[String]**](String.md)| Specifies a project user IDs to distribute | [optional] 

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

 Use case  User sets test plan identifier  User runs method execution  System return test plan configurations

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestPlansApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test plan internal (guid format) or global (int format) identifier
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
 **id** | **String**| Test plan internal (guid format) or global (int format) identifier | 

### Return type

[**[ConfigurationModel]**](ConfigurationModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2TestPlansIdExportTestPointsXlsxPost

> apiV2TestPlansIdExportTestPointsXlsxPost(id, opts)

Export TestPoints from TestPlan in xls format

 Use case  User sets test plan identifier  User sets filter model (listed in request example)  User runs method execution  System return export xlsx file

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestPlansApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test plan internal (guid format) or global (int format) identifier
let opts = {
  'timeZoneOffsetInMinutes': 789, // Number | 
  'getXlsxTestPointsByTestPlanModel': new TestitApiClient.GetXlsxTestPointsByTestPlanModel() // GetXlsxTestPointsByTestPlanModel | 
};
apiInstance.apiV2TestPlansIdExportTestPointsXlsxPost(id, opts, (error, data, response) => {
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
 **id** | **String**| Test plan internal (guid format) or global (int format) identifier | 
 **timeZoneOffsetInMinutes** | **Number**|  | [optional] 
 **getXlsxTestPointsByTestPlanModel** | [**GetXlsxTestPointsByTestPlanModel**](GetXlsxTestPointsByTestPlanModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2TestPlansIdExportTestResultHistoryXlsxPost

> apiV2TestPlansIdExportTestResultHistoryXlsxPost(id, opts)

Export TestResults history from TestPlan in xls format

 Use case  User sets test plan identifier  User sets filter model (listed in request example)  User runs method execution  System return export xlsx file

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestPlansApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test plan internal (guid format) or global (int format) identifier
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
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Test plan internal (guid format) or global (int format) identifier | 
 **mustReturnOnlyLastTestResult** | **Boolean**|  | [optional] 
 **includeSteps** | **Boolean**|  | [optional] 
 **includeDeletedTestSuites** | **Boolean**|  | [optional] 
 **timeZoneOffsetInMinutes** | **Number**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2TestPlansIdHistoryGet

> [TestPlanChangeModel] apiV2TestPlansIdHistoryGet(id, opts)

Get TestPlan history

 Use case  User sets test plan identifier  User runs method execution  System return test plan history

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestPlansApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test plan internal (guid format) or global (int format) identifier
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
 **id** | **String**| Test plan internal (guid format) or global (int format) identifier | 
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

 Use case  User sets test plan identifier  User sets pagination filter (listed in request example)  User runs method execution  System returns links of TestPlan

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestPlansApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test plan internal (guid format) or global (int format) identifier
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
 **id** | **String**| Test plan internal (guid format) or global (int format) identifier | 
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


## apiV2TestPlansIdPatch

> apiV2TestPlansIdPatch(id, opts)

Patch test plan

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

let apiInstance = new TestitApiClient.TestPlansApi();
let id = "id_example"; // String | Unique ID of the test plan
let opts = {
  'operation': [new TestitApiClient.Operation()] // [Operation] | 
};
apiInstance.apiV2TestPlansIdPatch(id, opts, (error, data, response) => {
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
 **id** | **String**| Unique ID of the test plan | 
 **operation** | [**[Operation]**](Operation.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2TestPlansIdSummariesGet

> TestPlanSummaryModel apiV2TestPlansIdSummariesGet(id)

Get summary by TestPlan

 Use case  User sets test plan identifier  User runs method execution  System returns summary by test plan

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestPlansApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test plan internal (guid format) or global (int format) identifier
apiInstance.apiV2TestPlansIdSummariesGet(id, (error, data, response) => {
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
 **id** | **String**| Test plan internal (guid format) or global (int format) identifier | 

### Return type

[**TestPlanSummaryModel**](TestPlanSummaryModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2TestPlansIdTestPointsLastResultsGet

> [TestPointWithLastResultResponseModel] apiV2TestPlansIdTestPointsLastResultsGet(id, opts)

Get TestPoints with last result from TestPlan

 Use case  User sets test plan identifier  User sets filter (listed in request example)  User runs method execution  System return test points with last result from test plan

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestPlansApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test plan internal (guid format) or global (int format) identifier
let opts = {
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
 **id** | **String**| Test plan internal (guid format) or global (int format) identifier | 
 **testerId** | **String**|  | [optional] 
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 

### Return type

[**[TestPointWithLastResultResponseModel]**](TestPointWithLastResultResponseModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2TestPlansIdTestPointsResetPost

> apiV2TestPlansIdTestPointsResetPost(id, opts)

Reset TestPoints status of TestPlan

 Use case  User sets test plan identifier  User sets test points identifiers  User runs method execution  System reset test points statuses of test plan

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestPlansApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test plan internal (guid format) or global (int format) identifier
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
 **id** | **String**| Test plan internal (guid format) or global (int format) identifier | 
 **requestBody** | [**[String]**](String.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2TestPlansIdTestPointsTesterDelete

> [String] apiV2TestPlansIdTestPointsTesterDelete(id, opts)

Unassign users from multiple test points

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestPlansApi();
let id = "id_example"; // String | Unique or global ID of the test plan
let opts = {
  'testPointSelectModel': new TestitApiClient.TestPointSelectModel() // TestPointSelectModel | 
};
apiInstance.apiV2TestPlansIdTestPointsTesterDelete(id, opts, (error, data, response) => {
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
 **id** | **String**| Unique or global ID of the test plan | 
 **testPointSelectModel** | [**TestPointSelectModel**](TestPointSelectModel.md)|  | [optional] 

### Return type

**[String]**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2TestPlansIdTestPointsTesterUserIdPost

> [String] apiV2TestPlansIdTestPointsTesterUserIdPost(id, userId, opts)

Assign user as a tester to multiple test points

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestPlansApi();
let id = "id_example"; // String | Unique or global ID of the test plan
let userId = "userId_example"; // String | Unique ID of the user
let opts = {
  'testPointSelectModel': new TestitApiClient.TestPointSelectModel() // TestPointSelectModel | 
};
apiInstance.apiV2TestPlansIdTestPointsTesterUserIdPost(id, userId, opts, (error, data, response) => {
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
 **id** | **String**| Unique or global ID of the test plan | 
 **userId** | **String**| Unique ID of the user | 
 **testPointSelectModel** | [**TestPointSelectModel**](TestPointSelectModel.md)|  | [optional] 

### Return type

**[String]**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2TestPlansIdTestRunsGet

> [TestRunApiResult] apiV2TestPlansIdTestRunsGet(id, opts)

Get TestRuns of TestPlan

 Use case  User sets test plan identifier  User sets TestRun status filter (listed in request example)  User runs method execution  System returns TestRuns for TestPlan

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestPlansApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test plan internal (guid format) or global (int format) identifier
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
 **id** | **String**| Test plan internal (guid format) or global (int format) identifier | 
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

[**[TestRunApiResult]**](TestRunApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2TestPlansIdTestRunsSearchPost

> [TestRunApiResult] apiV2TestPlansIdTestRunsSearchPost(id, opts)

Search TestRuns of TestPlan

 Use case  User sets test plan identifier  User sets TestRuns filter (listed in request example)  User runs method execution  System returns TestRuns for TestPlan

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestPlansApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test plan internal (guid format) or global (int format) identifier
let opts = {
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example", // String | Value for searching
  'searchTestRunsApiModel': new TestitApiClient.SearchTestRunsApiModel() // SearchTestRunsApiModel | 
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
 **id** | **String**| Test plan internal (guid format) or global (int format) identifier | 
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 
 **searchTestRunsApiModel** | [**SearchTestRunsApiModel**](SearchTestRunsApiModel.md)|  | [optional] 

### Return type

[**[TestRunApiResult]**](TestRunApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2TestPlansIdTestRunsTestResultsLastModifiedModifiedDateGet

> apiV2TestPlansIdTestRunsTestResultsLastModifiedModifiedDateGet(id)

Get last modification date of test plan&#39;s test results

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestPlansApi();
let id = "id_example"; // String | Internal (UUID) or global (integer) identifier
apiInstance.apiV2TestPlansIdTestRunsTestResultsLastModifiedModifiedDateGet(id, (error, data, response) => {
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
 **id** | **String**| Internal (UUID) or global (integer) identifier | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2TestPlansIdUnlockRequestPost

> apiV2TestPlansIdUnlockRequestPost(id)

Send unlock TestPlan notification

 Use case  User sets test plan identifier  User runs method execution  System send unlock test plan notification

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestPlansApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test plan internal (guid format) or global (int format) identifier
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
 **id** | **String**| Test plan internal (guid format) or global (int format) identifier | 

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

 Use case  User sets projects identifiers  User runs method execution  System return test plans short models (listed in response example)

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestPlansApi();
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

 Use case  User sets test plan identifier  User runs method execution  System clones test plan  System returns test plan (listed in response example)

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestPlansApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test plan internal (guid format) or global (int format) identifier
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
 **id** | **String**| Test plan internal (guid format) or global (int format) identifier | 

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

 Use case  User sets test plan identifier  User runs method execution  System completes the test plan and updates test plan status  System returns no content response

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestPlansApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test plan internal (guid format) or global (int format) identifier
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
 **id** | **String**| Test plan internal (guid format) or global (int format) identifier | 

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

 Use case  User sets test plan properties (listed in request example)  User runs method execution  System creates test plan  System returns test plan (listed in response example)

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestPlansApi();
let opts = {
  'createTestPlanApiModel': new TestitApiClient.CreateTestPlanApiModel() // CreateTestPlanApiModel | 
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
 **createTestPlanApiModel** | [**CreateTestPlanApiModel**](CreateTestPlanApiModel.md)|  | [optional] 

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

 Use case  User sets test plan identifier  User runs method execution  System delete test plan  System returns no content response

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestPlansApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test plan internal (guid format) or global (int format) identifier
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
 **id** | **String**| Test plan internal (guid format) or global (int format) identifier | 

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

 Use case  User sets test plan identifier  User runs method execution  System search  test plan by the identifier  System returns test plan

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestPlansApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test plan internal (guid format) or global (int format) identifier
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
 **id** | **String**| Test plan internal (guid format) or global (int format) identifier | 

### Return type

[**TestPlanModel**](TestPlanModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTestSuitesById

> [TestSuiteHierarchyApiResult] getTestSuitesById(id)

Get TestSuites Tree By Id

 Use case  User sets test plan identifier  User runs method execution  System finds test suites related to the test plan  System returns test suites as a tree model (listed in response example)

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestPlansApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test plan internal (guid format) or global (int format) identifier
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
 **id** | **String**| Test plan internal (guid format) or global (int format) identifier | 

### Return type

[**[TestSuiteHierarchyApiResult]**](TestSuiteHierarchyApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pause

> pause(id)

Pause TestPlan

 Use case  User sets test plan identifier  User runs method execution  System pauses the test plan and updates test plan status  System returns no content response

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestPlansApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test plan internal (guid format) or global (int format) identifier
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
 **id** | **String**| Test plan internal (guid format) or global (int format) identifier | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## purgeTestPlan

> purgeTestPlan(id)

Permanently delete test plan from archive

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestPlansApi();
let id = "id_example"; // String | Unique or global ID of the test plan
apiInstance.purgeTestPlan(id, (error, data, response) => {
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
 **id** | **String**| Unique or global ID of the test plan | 

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

 Use case  User sets test plan identifier  User runs method execution  System restores test plan  System returns no content response

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestPlansApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test plan internal (guid format) or global (int format) identifier
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
 **id** | **String**| Test plan internal (guid format) or global (int format) identifier | 

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

 Use case  User sets test plan identifier  User runs method execution  System starts the test plan and updates test plan status  System returns no content response

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestPlansApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test plan internal (guid format) or global (int format) identifier
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
 **id** | **String**| Test plan internal (guid format) or global (int format) identifier | 

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

 Use case  User sets test plan properties(listed in request example)  User runs method execution  System updates test plan  System returns no content response

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestPlansApi();
let opts = {
  'updateTestPlanApiModel': new TestitApiClient.UpdateTestPlanApiModel() // UpdateTestPlanApiModel | 
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
 **updateTestPlanApiModel** | [**UpdateTestPlanApiModel**](UpdateTestPlanApiModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

