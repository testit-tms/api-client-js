# testit_api_client.TestSuitesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTestPointsToTestSuite**](TestSuitesApi.md#addTestPointsToTestSuite) | **POST** /api/v2/testSuites/{id}/test-points | Add test-points to test suite
[**createTestSuite**](TestSuitesApi.md#createTestSuite) | **POST** /api/v2/testSuites | Create TestSuite
[**deleteTestSuite**](TestSuitesApi.md#deleteTestSuite) | **DELETE** /api/v2/testSuites/{id} | Delete TestSuite
[**getConfigurationsByTestSuiteId**](TestSuitesApi.md#getConfigurationsByTestSuiteId) | **GET** /api/v2/testSuites/{id}/configurations | Get Configurations By Id
[**getTestPointsById**](TestSuitesApi.md#getTestPointsById) | **GET** /api/v2/testSuites/{id}/testPoints | Get TestPoints By Id
[**getTestResultsById**](TestSuitesApi.md#getTestResultsById) | **GET** /api/v2/testSuites/{id}/testResults | Get TestResults By Id
[**getTestSuiteById**](TestSuitesApi.md#getTestSuiteById) | **GET** /api/v2/testSuites/{id} | Get TestSuite by Id
[**getWorkItemsById**](TestSuitesApi.md#getWorkItemsById) | **GET** /api/v2/testSuites/{id}/workItems | 
[**searchWorkItems**](TestSuitesApi.md#searchWorkItems) | **POST** /api/v2/testSuites/{id}/workItems/search | Search WorkItems
[**setConfigurationsByTestSuiteId**](TestSuitesApi.md#setConfigurationsByTestSuiteId) | **POST** /api/v2/testSuites/{id}/configurations | Set Configurations By TestSuite Id
[**setWorkItemsByTestSuiteId**](TestSuitesApi.md#setWorkItemsByTestSuiteId) | **POST** /api/v2/testSuites/{id}/workItems | Set WorkItems By TestSuite Id
[**updateTestSuite**](TestSuitesApi.md#updateTestSuite) | **PUT** /api/v2/testSuites | Update TestSuite



## addTestPointsToTestSuite

> addTestPointsToTestSuite(id, opts)

Add test-points to test suite

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestSuitesApi();
let id = 1ed608bf-8ac9-4ffd-b91e-ebdbbdce6132; // String | Test suite internal identifier
let opts = {
  'workItemSelectModel': new testit_api_client.WorkItemSelectModel() // WorkItemSelectModel | Filter object to retrieve work items for test-suite's project
};
apiInstance.addTestPointsToTestSuite(id, opts, (error, data, response) => {
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
- **Accept**: application/json


## createTestSuite

> TestSuiteV2GetModel createTestSuite(opts)

Create TestSuite

&lt;br&gt;Use case  &lt;br&gt;User sets test suite model (listed in request parameters)  &lt;br&gt;User runs method execution  &lt;br&gt;System creates test suite  &lt;br&gt;System returns test suite

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestSuitesApi();
let opts = {
  'testSuiteV2PostModel': new testit_api_client.TestSuiteV2PostModel() // TestSuiteV2PostModel | 
};
apiInstance.createTestSuite(opts, (error, data, response) => {
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
 **testSuiteV2PostModel** | [**TestSuiteV2PostModel**](TestSuiteV2PostModel.md)|  | [optional] 

### Return type

[**TestSuiteV2GetModel**](TestSuiteV2GetModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTestSuite

> String deleteTestSuite(id)

Delete TestSuite

&lt;br&gt;Use case  &lt;br&gt;User sets test suite identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System search test suite by identifier  &lt;br&gt;System deletes test suite  &lt;br&gt;System returns no content response

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestSuitesApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | Test suite internal (guid format) identifier\"
apiInstance.deleteTestSuite(id, (error, data, response) => {
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
 **id** | **String**| Test suite internal (guid format) identifier\&quot; | 

### Return type

**String**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConfigurationsByTestSuiteId

> [ConfigurationModel] getConfigurationsByTestSuiteId(id)

Get Configurations By Id

&lt;br&gt;Use case  &lt;br&gt;User sets test suite identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System search test suite by identifier  &lt;br&gt;System search test points related to the test suite  &lt;br&gt;System search configurations related to the test points  &lt;br&gt;System returns configurations array

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestSuitesApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | Test suite internal (guid format) identifier\"
apiInstance.getConfigurationsByTestSuiteId(id, (error, data, response) => {
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

&lt;br&gt;Use case  &lt;br&gt;User sets test suite identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System search test suite by identifier  &lt;br&gt;System search test points related to the test suite  &lt;br&gt;System returns test points array

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestSuitesApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | Test suite internal (guid format) identifier\"
apiInstance.getTestPointsById(id, (error, data, response) => {
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

&lt;br&gt;Use case  &lt;br&gt;User sets test suite identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System search test suite by identifier  &lt;br&gt;System search test points related to the test suite  &lt;br&gt;System search test results related to the test points  &lt;br&gt;System returns test results array

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestSuitesApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | Test suite internal (guid format) identifier\"
apiInstance.getTestResultsById(id, (error, data, response) => {
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
 **id** | **String**| Test suite internal (guid format) identifier\&quot; | 

### Return type

[**[TestResultV2ShortModel]**](TestResultV2ShortModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTestSuiteById

> TestSuiteV2GetModel getTestSuiteById(id)

Get TestSuite by Id

&lt;br&gt;Use case  &lt;br&gt;User sets test suite identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System search test suite by identifier  &lt;br&gt;System returns test suite

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestSuitesApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | Test suite internal (guid format) identifier\"
apiInstance.getTestSuiteById(id, (error, data, response) => {
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
 **id** | **String**| Test suite internal (guid format) identifier\&quot; | 

### Return type

[**TestSuiteV2GetModel**](TestSuiteV2GetModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkItemsById

> [WorkItemShortModel] getWorkItemsById(id, opts)



### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestSuitesApi();
let id = "id_example"; // String | 
let opts = {
  'isDeleted': false, // Boolean | 
  'tagNames': ["null"], // [String] | 
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example" // String | Value for searching
};
apiInstance.getWorkItemsById(id, opts, (error, data, response) => {
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
 **isDeleted** | **Boolean**|  | [optional] [default to false]
 **tagNames** | [**[String]**](String.md)|  | [optional] 
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


## searchWorkItems

> [WorkItemShortModel] searchWorkItems(id, opts)

Search WorkItems

&lt;br&gt;Use case  &lt;br&gt;User sets test suite identifier  &lt;br&gt;[Optional] User sets filter  &lt;br&gt;User runs method execution  &lt;br&gt;System search test suite by identifier  &lt;br&gt;System search test points related to the test suite  &lt;br&gt;System search workitems related to the test points  &lt;br&gt;                      [Optional] User sets filter, system applies filter                     &lt;br&gt;System returns workitems array

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestSuitesApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | Test suite internal (guid format) identifier\"
let opts = {
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example", // String | Value for searching
  'testSuiteWorkItemsSearchModel': new testit_api_client.TestSuiteWorkItemsSearchModel() // TestSuiteWorkItemsSearchModel | 
};
apiInstance.searchWorkItems(id, opts, (error, data, response) => {
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

> [ConfigurationModel] setConfigurationsByTestSuiteId(id, opts)

Set Configurations By TestSuite Id

&lt;br&gt;Use case  &lt;br&gt;User sets test suite identifier  &lt;br&gt;User sets collection of configuration identifiers  &lt;br&gt;User runs method execution  &lt;br&gt;System search test suite by identifier  &lt;br&gt;System search test points related to the test suite  &lt;br&gt;System search configuration  &lt;br&gt;System restores(if exist) or creates test points with listed configuration  &lt;br&gt;System returns no content response

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestSuitesApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | Test suite internal (guid format) identifier\"
let opts = {
  'requestBody': ["null"] // [String] | Collection of configuration identifiers\"
};
apiInstance.setConfigurationsByTestSuiteId(id, opts, (error, data, response) => {
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
 **id** | **String**| Test suite internal (guid format) identifier\&quot; | 
 **requestBody** | [**[String]**](String.md)| Collection of configuration identifiers\&quot; | [optional] 

### Return type

[**[ConfigurationModel]**](ConfigurationModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setWorkItemsByTestSuiteId

> [WorkItemShortModel] setWorkItemsByTestSuiteId(id, opts)

Set WorkItems By TestSuite Id

&lt;br&gt;Use case  &lt;br&gt;User sets test suite identifier  &lt;br&gt;User sets collection of workitems identifiers  &lt;br&gt;User runs method execution  &lt;br&gt;System search test suite by identifier  &lt;br&gt;System search test points related to the test suite  &lt;br&gt;System search workitems  &lt;br&gt;System restores(if exist) or creates test points with listed workitems  &lt;br&gt;System returns no content response

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestSuitesApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | Test suite internal (guid format) identifier\"
let opts = {
  'requestBody': ["null"] // [String] | Collection of workitem identifiers\"
};
apiInstance.setWorkItemsByTestSuiteId(id, opts, (error, data, response) => {
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
 **id** | **String**| Test suite internal (guid format) identifier\&quot; | 
 **requestBody** | [**[String]**](String.md)| Collection of workitem identifiers\&quot; | [optional] 

### Return type

[**[WorkItemShortModel]**](WorkItemShortModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTestSuite

> TestSuiteV2GetModel updateTestSuite(opts)

Update TestSuite

&lt;br&gt;Use case  &lt;br&gt;User sets test suite model (listed in request parameters)  &lt;br&gt;User runs method execution  &lt;br&gt;System updates test suite  &lt;br&gt;System returns test suite

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.TestSuitesApi();
let opts = {
  'testSuiteV2PutModel': new testit_api_client.TestSuiteV2PutModel() // TestSuiteV2PutModel | 
};
apiInstance.updateTestSuite(opts, (error, data, response) => {
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
 **testSuiteV2PutModel** | [**TestSuiteV2PutModel**](TestSuiteV2PutModel.md)|  | [optional] 

### Return type

[**TestSuiteV2GetModel**](TestSuiteV2GetModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

