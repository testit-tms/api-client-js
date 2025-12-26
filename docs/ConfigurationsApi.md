# TestitApiClient.ConfigurationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2ConfigurationsCreateByParametersPost**](ConfigurationsApi.md#apiV2ConfigurationsCreateByParametersPost) | **POST** /api/v2/configurations/createByParameters | Create configurations by parameters
[**apiV2ConfigurationsDeleteBulkPost**](ConfigurationsApi.md#apiV2ConfigurationsDeleteBulkPost) | **POST** /api/v2/configurations/delete/bulk | Delete multiple configurations
[**apiV2ConfigurationsIdDelete**](ConfigurationsApi.md#apiV2ConfigurationsIdDelete) | **DELETE** /api/v2/configurations/{id} | Delete configuration
[**apiV2ConfigurationsIdPatch**](ConfigurationsApi.md#apiV2ConfigurationsIdPatch) | **PATCH** /api/v2/configurations/{id} | Patch configuration
[**apiV2ConfigurationsIdPurgePost**](ConfigurationsApi.md#apiV2ConfigurationsIdPurgePost) | **POST** /api/v2/configurations/{id}/purge | Permanently delete configuration from archive
[**apiV2ConfigurationsIdRestorePost**](ConfigurationsApi.md#apiV2ConfigurationsIdRestorePost) | **POST** /api/v2/configurations/{id}/restore | Restore configuration from the archive
[**apiV2ConfigurationsPurgeBulkPost**](ConfigurationsApi.md#apiV2ConfigurationsPurgeBulkPost) | **POST** /api/v2/configurations/purge/bulk | Permanently delete multiple archived configurations
[**apiV2ConfigurationsPut**](ConfigurationsApi.md#apiV2ConfigurationsPut) | **PUT** /api/v2/configurations | Edit configuration
[**apiV2ConfigurationsRestoreBulkPost**](ConfigurationsApi.md#apiV2ConfigurationsRestoreBulkPost) | **POST** /api/v2/configurations/restore/bulk | Restore multiple configurations from the archive
[**apiV2ConfigurationsSearchPost**](ConfigurationsApi.md#apiV2ConfigurationsSearchPost) | **POST** /api/v2/configurations/search | Search for configurations
[**createConfiguration**](ConfigurationsApi.md#createConfiguration) | **POST** /api/v2/configurations | Create Configuration
[**getConfigurationById**](ConfigurationsApi.md#getConfigurationById) | **GET** /api/v2/configurations/{id} | Get configuration by internal or global ID



## apiV2ConfigurationsCreateByParametersPost

> [String] apiV2ConfigurationsCreateByParametersPost(opts)

Create configurations by parameters

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ConfigurationsApi();
let opts = {
  'configurationByParametersModel': new TestitApiClient.ConfigurationByParametersModel() // ConfigurationByParametersModel | 
};
apiInstance.apiV2ConfigurationsCreateByParametersPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configurationByParametersModel** | [**ConfigurationByParametersModel**](ConfigurationByParametersModel.md)|  | [optional] 

### Return type

**[String]**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2ConfigurationsDeleteBulkPost

> Number apiV2ConfigurationsDeleteBulkPost(opts)

Delete multiple configurations

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ConfigurationsApi();
let opts = {
  'configurationSelectApiModel': new TestitApiClient.ConfigurationSelectApiModel() // ConfigurationSelectApiModel | 
};
apiInstance.apiV2ConfigurationsDeleteBulkPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configurationSelectApiModel** | [**ConfigurationSelectApiModel**](ConfigurationSelectApiModel.md)|  | [optional] 

### Return type

**Number**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2ConfigurationsIdDelete

> apiV2ConfigurationsIdDelete(id)

Delete configuration

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ConfigurationsApi();
let id = "id_example"; // String | Unique or global ID of the configuration
apiInstance.apiV2ConfigurationsIdDelete(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique or global ID of the configuration | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ConfigurationsIdPatch

> apiV2ConfigurationsIdPatch(id, opts)

Patch configuration

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

let apiInstance = new TestitApiClient.ConfigurationsApi();
let id = "id_example"; // String | Unique ID of the configuration
let opts = {
  'operation': [new TestitApiClient.Operation()] // [Operation] | 
};
apiInstance.apiV2ConfigurationsIdPatch(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique ID of the configuration | 
 **operation** | [**[Operation]**](Operation.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2ConfigurationsIdPurgePost

> apiV2ConfigurationsIdPurgePost(id)

Permanently delete configuration from archive

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ConfigurationsApi();
let id = "id_example"; // String | Unique or global ID of the configuration
apiInstance.apiV2ConfigurationsIdPurgePost(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique or global ID of the configuration | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ConfigurationsIdRestorePost

> apiV2ConfigurationsIdRestorePost(id)

Restore configuration from the archive

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ConfigurationsApi();
let id = "id_example"; // String | Unique or global ID of the configuration
apiInstance.apiV2ConfigurationsIdRestorePost(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique or global ID of the configuration | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ConfigurationsPurgeBulkPost

> Number apiV2ConfigurationsPurgeBulkPost(opts)

Permanently delete multiple archived configurations

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ConfigurationsApi();
let opts = {
  'configurationSelectModel': new TestitApiClient.ConfigurationSelectModel() // ConfigurationSelectModel | 
};
apiInstance.apiV2ConfigurationsPurgeBulkPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configurationSelectModel** | [**ConfigurationSelectModel**](ConfigurationSelectModel.md)|  | [optional] 

### Return type

**Number**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2ConfigurationsPut

> apiV2ConfigurationsPut(opts)

Edit configuration

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ConfigurationsApi();
let opts = {
  'configurationPutModel': new TestitApiClient.ConfigurationPutModel() // ConfigurationPutModel | 
};
apiInstance.apiV2ConfigurationsPut(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configurationPutModel** | [**ConfigurationPutModel**](ConfigurationPutModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2ConfigurationsRestoreBulkPost

> Number apiV2ConfigurationsRestoreBulkPost(opts)

Restore multiple configurations from the archive

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ConfigurationsApi();
let opts = {
  'configurationSelectModel': new TestitApiClient.ConfigurationSelectModel() // ConfigurationSelectModel | 
};
apiInstance.apiV2ConfigurationsRestoreBulkPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configurationSelectModel** | [**ConfigurationSelectModel**](ConfigurationSelectModel.md)|  | [optional] 

### Return type

**Number**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2ConfigurationsSearchPost

> [ConfigurationModel] apiV2ConfigurationsSearchPost(opts)

Search for configurations

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ConfigurationsApi();
let opts = {
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example", // String | Value for searching
  'configurationFilterModel': new TestitApiClient.ConfigurationFilterModel() // ConfigurationFilterModel | Model containing all the filters
};
apiInstance.apiV2ConfigurationsSearchPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
 **configurationFilterModel** | [**ConfigurationFilterModel**](ConfigurationFilterModel.md)| Model containing all the filters | [optional] 

### Return type

[**[ConfigurationModel]**](ConfigurationModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createConfiguration

> ConfigurationModel createConfiguration(opts)

Create Configuration

 Use case  User sets configuration model (listed in the request example)  User runs method execution  System creates configuration  System returns created configuration (listed in the response example)

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ConfigurationsApi();
let opts = {
  'configurationPostModel': new TestitApiClient.ConfigurationPostModel() // ConfigurationPostModel | 
};
apiInstance.createConfiguration(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configurationPostModel** | [**ConfigurationPostModel**](ConfigurationPostModel.md)|  | [optional] 

### Return type

[**ConfigurationModel**](ConfigurationModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getConfigurationById

> ConfigurationModel getConfigurationById(id)

Get configuration by internal or global ID

 Use case  User sets configuration internal (guid format) or global (integer format) identifier  User runs method execution  System search configuration using the identifier  System returns configuration

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ConfigurationsApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Configuration internal (guid format) or global (integer format) identifier
apiInstance.getConfigurationById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Configuration internal (guid format) or global (integer format) identifier | 

### Return type

[**ConfigurationModel**](ConfigurationModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

