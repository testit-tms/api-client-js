# TestitApiClient.ParametersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2ParametersBulkPost**](ParametersApi.md#apiV2ParametersBulkPost) | **POST** /api/v2/parameters/bulk | Create multiple parameters
[**apiV2ParametersBulkPut**](ParametersApi.md#apiV2ParametersBulkPut) | **PUT** /api/v2/parameters/bulk | Update multiple parameters
[**apiV2ParametersGroupsGet**](ParametersApi.md#apiV2ParametersGroupsGet) | **GET** /api/v2/parameters/groups | Get parameters as group
[**apiV2ParametersKeyNameNameExistsGet**](ParametersApi.md#apiV2ParametersKeyNameNameExistsGet) | **GET** /api/v2/parameters/key/name/{name}/exists | Check existence parameter key in system
[**apiV2ParametersKeyValuesGet**](ParametersApi.md#apiV2ParametersKeyValuesGet) | **GET** /api/v2/parameters/{key}/values | Get all parameter key values
[**apiV2ParametersKeysGet**](ParametersApi.md#apiV2ParametersKeysGet) | **GET** /api/v2/parameters/keys | Get all parameter keys
[**apiV2ParametersSearchGroupsPost**](ParametersApi.md#apiV2ParametersSearchGroupsPost) | **POST** /api/v2/parameters/search/groups | Search for parameters as group
[**apiV2ParametersSearchPost**](ParametersApi.md#apiV2ParametersSearchPost) | **POST** /api/v2/parameters/search | Search for parameters
[**createParameter**](ParametersApi.md#createParameter) | **POST** /api/v2/parameters | Create parameter
[**deleteByName**](ParametersApi.md#deleteByName) | **DELETE** /api/v2/parameters/name/{name} | Delete parameter by name
[**deleteByParameterKeyId**](ParametersApi.md#deleteByParameterKeyId) | **DELETE** /api/v2/parameters/keyId/{keyId} | Delete parameters by parameter key identifier
[**deleteParameter**](ParametersApi.md#deleteParameter) | **DELETE** /api/v2/parameters/{id} | Delete parameter
[**getAllParameters**](ParametersApi.md#getAllParameters) | **GET** /api/v2/parameters | Get all parameters
[**getParameterById**](ParametersApi.md#getParameterById) | **GET** /api/v2/parameters/{id} | Get parameter by ID
[**updateParameter**](ParametersApi.md#updateParameter) | **PUT** /api/v2/parameters | Update parameter



## apiV2ParametersBulkPost

> [ParameterApiResult] apiV2ParametersBulkPost(opts)

Create multiple parameters

 Use case  User sets list of parameter model (listed in the request example)  User runs method execution  System creates parameters  System returns list of parameter model (listed in the response example)

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ParametersApi();
let opts = {
  'createParameterApiModel': [new TestitApiClient.CreateParameterApiModel()] // [CreateParameterApiModel] | 
};
apiInstance.apiV2ParametersBulkPost(opts, (error, data, response) => {
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
 **createParameterApiModel** | [**[CreateParameterApiModel]**](CreateParameterApiModel.md)|  | [optional] 

### Return type

[**[ParameterApiResult]**](ParameterApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2ParametersBulkPut

> apiV2ParametersBulkPut(opts)

Update multiple parameters

 Use case  User sets list of parameter model (listed in the request example)  User runs method execution  System updates parameters

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ParametersApi();
let opts = {
  'updateParameterApiModel': [new TestitApiClient.UpdateParameterApiModel()] // [UpdateParameterApiModel] | 
};
apiInstance.apiV2ParametersBulkPut(opts, (error, data, response) => {
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
 **updateParameterApiModel** | [**[UpdateParameterApiModel]**](UpdateParameterApiModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2ParametersGroupsGet

> [ParameterGroupApiResult] apiV2ParametersGroupsGet(opts)

Get parameters as group

 Use case  User runs method execution  System search parameters  System returns parameters models as groups (listed in the response example)

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ParametersApi();
let opts = {
  'parameterKeyIds': ["null"], // [String] | 
  'name': "name_example", // String | 
  'isDeleted': true, // Boolean | 
  'projectIds': ["null"], // [String] | 
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example" // String | Value for searching
};
apiInstance.apiV2ParametersGroupsGet(opts, (error, data, response) => {
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
 **parameterKeyIds** | [**[String]**](String.md)|  | [optional] 
 **name** | **String**|  | [optional] 
 **isDeleted** | **Boolean**|  | [optional] 
 **projectIds** | [**[String]**](String.md)|  | [optional] 
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 

### Return type

[**[ParameterGroupApiResult]**](ParameterGroupApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ParametersKeyNameNameExistsGet

> Boolean apiV2ParametersKeyNameNameExistsGet(name)

Check existence parameter key in system

 Use case  User sets name of parameter key  User runs method execution  System search parameter key  System returns the flag for the existence of the parameter key in the system

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ParametersApi();
let name = "name_example"; // String | 
apiInstance.apiV2ParametersKeyNameNameExistsGet(name, (error, data, response) => {
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
 **name** | **String**|  | 

### Return type

**Boolean**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ParametersKeyValuesGet

> [String] apiV2ParametersKeyValuesGet(key)

Get all parameter key values

 Use case  User sets parameter key (string format)  User runs method execution  System search parameter values using the key  System returns parameter

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ParametersApi();
let key = "SomeKey"; // String | Parameter key (string format)
apiInstance.apiV2ParametersKeyValuesGet(key, (error, data, response) => {
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
 **key** | **String**| Parameter key (string format) | 

### Return type

**[String]**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ParametersKeysGet

> [String] apiV2ParametersKeysGet(opts)

Get all parameter keys

 Use case  User runs method execution  System search all parameter keys  System returns parameter keys

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ParametersApi();
let opts = {
  'projectIds': ["null"], // [String] | 
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example" // String | Value for searching
};
apiInstance.apiV2ParametersKeysGet(opts, (error, data, response) => {
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
 **projectIds** | [**[String]**](String.md)|  | [optional] 
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 

### Return type

**[String]**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ParametersSearchGroupsPost

> [ParameterGroupApiResult] apiV2ParametersSearchGroupsPost(opts)

Search for parameters as group

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ParametersApi();
let opts = {
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example", // String | Value for searching
  'parameterGroupsFilterApiModel': new TestitApiClient.ParameterGroupsFilterApiModel() // ParameterGroupsFilterApiModel | 
};
apiInstance.apiV2ParametersSearchGroupsPost(opts, (error, data, response) => {
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
 **parameterGroupsFilterApiModel** | [**ParameterGroupsFilterApiModel**](ParameterGroupsFilterApiModel.md)|  | [optional] 

### Return type

[**[ParameterGroupApiResult]**](ParameterGroupApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2ParametersSearchPost

> [ParameterApiResult] apiV2ParametersSearchPost(opts)

Search for parameters

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ParametersApi();
let opts = {
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example", // String | Value for searching
  'parametersFilterApiModel': new TestitApiClient.ParametersFilterApiModel() // ParametersFilterApiModel | 
};
apiInstance.apiV2ParametersSearchPost(opts, (error, data, response) => {
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
 **parametersFilterApiModel** | [**ParametersFilterApiModel**](ParametersFilterApiModel.md)|  | [optional] 

### Return type

[**[ParameterApiResult]**](ParameterApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createParameter

> ParameterApiResult createParameter(opts)

Create parameter

 Use case  User sets parameter model (listed in the request example)  User runs method execution  System creates parameter  System returns parameter model

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ParametersApi();
let opts = {
  'createParameterApiModel': new TestitApiClient.CreateParameterApiModel() // CreateParameterApiModel | 
};
apiInstance.createParameter(opts, (error, data, response) => {
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
 **createParameterApiModel** | [**CreateParameterApiModel**](CreateParameterApiModel.md)|  | [optional] 

### Return type

[**ParameterApiResult**](ParameterApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteByName

> deleteByName(name)

Delete parameter by name

Deletes parameter and all it&#39;s values

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ParametersApi();
let name = "name_example"; // String | Name of the parameter
apiInstance.deleteByName(name, (error, data, response) => {
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
 **name** | **String**| Name of the parameter | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteByParameterKeyId

> deleteByParameterKeyId(keyId)

Delete parameters by parameter key identifier

Deletes parameter and all it&#39;s values by parameter key identifier

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ParametersApi();
let keyId = "keyId_example"; // String | Identifier of the parameter key
apiInstance.deleteByParameterKeyId(keyId, (error, data, response) => {
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
 **keyId** | **String**| Identifier of the parameter key | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteParameter

> deleteParameter(id)

Delete parameter

 Use case  User sets parameter internal (guid format) identifier  System search and delete parameter  System returns deleted parameter

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ParametersApi();
let id = "id_example"; // String | Parameter internal (UUID) identifier
apiInstance.deleteParameter(id, (error, data, response) => {
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
 **id** | **String**| Parameter internal (UUID) identifier | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllParameters

> [ParameterApiResult] getAllParameters(opts)

Get all parameters

 Use case  [Optional] User sets isDeleted field value  [Optional] If User sets isDeleted field value as true, System search all deleted parameters  [Optional] If User sets isDeleted field value as false, System search all parameters which are not deleted  If User did not set isDeleted field value, System search all parameters  System returns array of all found parameters(listed in response model)

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ParametersApi();
let opts = {
  'isDeleted': true, // Boolean | If result must consist of only actual/deleted parameters
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example" // String | Value for searching
};
apiInstance.getAllParameters(opts, (error, data, response) => {
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
 **isDeleted** | **Boolean**| If result must consist of only actual/deleted parameters | [optional] 
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 

### Return type

[**[ParameterApiResult]**](ParameterApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getParameterById

> ParameterApiResult getParameterById(id)

Get parameter by ID

 Use case  User sets parameter internal (guid format) identifier  User runs method execution  System search parameter using the identifier  System returns parameter

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ParametersApi();
let id = "id_example"; // String | Parameter internal (UUID) identifier
apiInstance.getParameterById(id, (error, data, response) => {
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
 **id** | **String**| Parameter internal (UUID) identifier | 

### Return type

[**ParameterApiResult**](ParameterApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateParameter

> updateParameter(opts)

Update parameter

 Use case  User sets parameter updated properties(listed in the request example)  User runs method execution  System updated parameter using updated properties  System returns no content response

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ParametersApi();
let opts = {
  'updateParameterApiModel': new TestitApiClient.UpdateParameterApiModel() // UpdateParameterApiModel | 
};
apiInstance.updateParameter(opts, (error, data, response) => {
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
 **updateParameterApiModel** | [**UpdateParameterApiModel**](UpdateParameterApiModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

