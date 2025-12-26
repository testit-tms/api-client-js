# TestitApiClient.TestSuitesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTestPointsToTestSuite**](TestSuitesApi.md#addTestPointsToTestSuite) | **POST** /api/v2/testSuites/{id}/test-points | Add test-points to test suite
[**apiV2TestSuitesIdPatch**](TestSuitesApi.md#apiV2TestSuitesIdPatch) | **PATCH** /api/v2/testSuites/{id} | Patch test suite
[**apiV2TestSuitesIdRefreshPost**](TestSuitesApi.md#apiV2TestSuitesIdRefreshPost) | **POST** /api/v2/testSuites/{id}/refresh | Refresh test suite. Only dynamic test suites are supported by this method
[**apiV2TestSuitesIdWorkItemsPost**](TestSuitesApi.md#apiV2TestSuitesIdWorkItemsPost) | **POST** /api/v2/testSuites/{id}/workItems | Set work items for test suite
[**apiV2TestSuitesPost**](TestSuitesApi.md#apiV2TestSuitesPost) | **POST** /api/v2/testSuites | Create test suite
[**apiV2TestSuitesPut**](TestSuitesApi.md#apiV2TestSuitesPut) | **PUT** /api/v2/testSuites | Edit test suite
[**deleteTestSuite**](TestSuitesApi.md#deleteTestSuite) | **DELETE** /api/v2/testSuites/{id} | Delete TestSuite
[**getConfigurationsByTestSuiteId**](TestSuitesApi.md#getConfigurationsByTestSuiteId) | **GET** /api/v2/testSuites/{id}/configurations | Get Configurations By Id
[**getTestPointsById**](TestSuitesApi.md#getTestPointsById) | **GET** /api/v2/testSuites/{id}/testPoints | Get TestPoints By Id
[**getTestResultsById**](TestSuitesApi.md#getTestResultsById) | **GET** /api/v2/testSuites/{id}/testResults | Get TestResults By Id
[**getTestSuiteById**](TestSuitesApi.md#getTestSuiteById) | **GET** /api/v2/testSuites/{id} | Get TestSuite by Id
[**searchWorkItems**](TestSuitesApi.md#searchWorkItems) | **POST** /api/v2/testSuites/{id}/workItems/search | Search WorkItems
[**setConfigurationsByTestSuiteId**](TestSuitesApi.md#setConfigurationsByTestSuiteId) | **POST** /api/v2/testSuites/{id}/configurations | Set Configurations By TestSuite Id



## addTestPointsToTestSuite

> addTestPointsToTestSuite(id, opts)

Add test-points to test suite

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestSuitesApi();
let id = "1ed608bf-8ac9-4ffd-b91e-ebdbbdce6132"; // String | Test suite internal identifier
let opts = {
  'workItemSelectModel': new TestitApiClient.WorkItemSelectModel() // WorkItemSelectModel | Filter object to retrieve work items for test-suite's project
};
apiInstance.addTestPointsToTestSuite(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
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
- **Accept**: application/json


## apiV2TestSuitesIdPatch

> apiV2TestSuitesIdPatch(id, opts)

Patch test suite

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

let apiInstance = new TestitApiClient.TestSuitesApi();
let id = "id_example"; // String | Test Suite internal (UUID) identifier
let opts = {
  'operation': [new TestitApiClient.Operation()] // [Operation] | 
};
apiInstance.apiV2TestSuitesIdPatch(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Test Suite internal (UUID) identifier | 
 **operation** | [**[Operation]**](Operation.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2TestSuitesIdRefreshPost

> apiV2TestSuitesIdRefreshPost(id)

Refresh test suite. Only dynamic test suites are supported by this method

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestSuitesApi();
let id = "id_example"; // String | Test Suite internal (UUID) identifier
apiInstance.apiV2TestSuitesIdRefreshPost(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Test Suite internal (UUID) identifier | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2TestSuitesIdWorkItemsPost

> apiV2TestSuitesIdWorkItemsPost(id, opts)

Set work items for test suite

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestSuitesApi();
let id = "id_example"; // String | Unique ID of the test suite
let opts = {
  'requestBody': ["null"] // [String] | 
};
apiInstance.apiV2TestSuitesIdWorkItemsPost(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique ID of the test suite | 
 **requestBody** | [**[String]**](String.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2TestSuitesPost

> TestSuiteV2GetModel apiV2TestSuitesPost(opts)

Create test suite

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestSuitesApi();
let opts = {
  'testSuiteV2PostModel': new TestitApiClient.TestSuiteV2PostModel() // TestSuiteV2PostModel | 
};
apiInstance.apiV2TestSuitesPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testSuiteV2PostModel** | [**TestSuiteV2PostModel**](TestSuiteV2PostModel.md)|  | [optional] 

### Return type

[**TestSuiteV2GetModel**](TestSuiteV2GetModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2TestSuitesPut

> apiV2TestSuitesPut(opts)

Edit test suite

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestSuitesApi();
let opts = {
  'testSuiteV2PutModel': new TestitApiClient.TestSuiteV2PutModel() // TestSuiteV2PutModel | 
};
apiInstance.apiV2TestSuitesPut(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testSuiteV2PutModel** | [**TestSuiteV2PutModel**](TestSuiteV2PutModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTestSuite

> deleteTestSuite(id)

Delete TestSuite

 Use case  User sets test suite identifier  User runs method execution  System search test suite by identifier  System deletes test suite  System returns no content response

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestSuitesApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test suite internal (guid format) identifier\"
apiInstance.deleteTestSuite(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Test suite internal (guid format) identifier\&quot; | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConfigurationsByTestSuiteId

> [ConfigurationModel] getConfigurationsByTestSuiteId(id)

Get Configurations By Id

 Use case  User sets test suite identifier  User runs method execution  System search test suite by identifier  System search test points related to the test suite  System search configurations related to the test points  System returns configurations array

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestSuitesApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test suite internal (guid format) identifier\"
apiInstance.getConfigurationsByTestSuiteId(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Test suite internal (guid format) identifier\&quot; | 

### Return type

[**[ConfigurationModel]**](ConfigurationModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTestPointsById

> [TestPointByTestSuiteModel] getTestPointsById(id)

Get TestPoints By Id

 Use case  User sets test suite identifier  User runs method execution  System search test suite by identifier  System search test points related to the test suite  System returns test points array

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestSuitesApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test suite internal (guid format) identifier\"
apiInstance.getTestPointsById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Test suite internal (guid format) identifier\&quot; | 

### Return type

[**[TestPointByTestSuiteModel]**](TestPointByTestSuiteModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTestResultsById

> [TestResultV2ShortModel] getTestResultsById(id)

Get TestResults By Id

 Use case  User sets test suite identifier  User runs method execution  System search test suite by identifier  System search test points related to the test suite  System search test results related to the test points  System returns test results array

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestSuitesApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test suite internal (guid format) identifier\"
apiInstance.getTestResultsById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Test suite internal (guid format) identifier\&quot; | 

### Return type

[**[TestResultV2ShortModel]**](TestResultV2ShortModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTestSuiteById

> TestSuiteApiResult getTestSuiteById(id)

Get TestSuite by Id

 Use case  User sets test suite identifier  User runs method execution  System search test suite by identifier  System returns test suite

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestSuitesApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test suite internal (guid format) identifier\"
apiInstance.getTestSuiteById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Test suite internal (guid format) identifier\&quot; | 

### Return type

[**TestSuiteApiResult**](TestSuiteApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchWorkItems

> [WorkItemShortModel] searchWorkItems(id, opts)

Search WorkItems

 Use case  User sets test suite identifier  [Optional] User sets filter  User runs method execution  System search test suite by identifier  System search test points related to the test suite  System search work items related to the test points  [Optional] User sets filter, system applies filter  System returns work items array

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestSuitesApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test suite internal (guid format) identifier\"
let opts = {
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example", // String | Value for searching
  'testSuiteWorkItemsSearchModel': new TestitApiClient.TestSuiteWorkItemsSearchModel() // TestSuiteWorkItemsSearchModel | 
};
apiInstance.searchWorkItems(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Test suite internal (guid format) identifier\&quot; | 
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 
 **testSuiteWorkItemsSearchModel** | [**TestSuiteWorkItemsSearchModel**](TestSuiteWorkItemsSearchModel.md)|  | [optional] 

### Return type

[**[WorkItemShortModel]**](WorkItemShortModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setConfigurationsByTestSuiteId

> setConfigurationsByTestSuiteId(id, opts)

Set Configurations By TestSuite Id

 Use case  User sets test suite identifier  User sets collection of configuration identifiers  User runs method execution  System search test suite by identifier  System search test points related to the test suite  System search configuration  System restores(if exist) or creates test points with listed configuration  System returns no content response

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestSuitesApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test suite internal (guid format) identifier\"
let opts = {
  'requestBody': ["null"] // [String] | Collection of configuration identifiers\"
};
apiInstance.setConfigurationsByTestSuiteId(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Test suite internal (guid format) identifier\&quot; | 
 **requestBody** | [**[String]**](String.md)| Collection of configuration identifiers\&quot; | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

