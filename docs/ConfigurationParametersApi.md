# TestitApiClient.ConfigurationParametersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2ConfigurationParametersConfigurationParameterIdDelete**](ConfigurationParametersApi.md#apiV2ConfigurationParametersConfigurationParameterIdDelete) | **DELETE** /api/v2/configuration-parameters/{configurationParameterId} | Deletes configuration parameter
[**apiV2ConfigurationParametersConfigurationParameterIdGet**](ConfigurationParametersApi.md#apiV2ConfigurationParametersConfigurationParameterIdGet) | **GET** /api/v2/configuration-parameters/{configurationParameterId} | Gets configuration parameter by its identifier
[**apiV2ConfigurationParametersConfigurationParameterIdPut**](ConfigurationParametersApi.md#apiV2ConfigurationParametersConfigurationParameterIdPut) | **PUT** /api/v2/configuration-parameters/{configurationParameterId} | Updates configuration parameter
[**apiV2ConfigurationParametersPost**](ConfigurationParametersApi.md#apiV2ConfigurationParametersPost) | **POST** /api/v2/configuration-parameters | Creates new configuration parameter
[**apiV2ConfigurationParametersSearchPost**](ConfigurationParametersApi.md#apiV2ConfigurationParametersSearchPost) | **POST** /api/v2/configuration-parameters/search | Searches for configuration parameters



## apiV2ConfigurationParametersConfigurationParameterIdDelete

> apiV2ConfigurationParametersConfigurationParameterIdDelete(configurationParameterId)

Deletes configuration parameter

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: PrivateToken
let PrivateToken = defaultClient.authentications['PrivateToken'];
PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//PrivateToken.apiKeyPrefix = 'Token';
// Configure API key authorization: Identity.Application
let Identity.Application = defaultClient.authentications['Identity.Application'];
Identity.Application.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Identity.Application.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ConfigurationParametersApi();
let configurationParameterId = "configurationParameterId_example"; // String | 
apiInstance.apiV2ConfigurationParametersConfigurationParameterIdDelete(configurationParameterId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configurationParameterId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[PrivateToken](../README.md#PrivateToken), [Identity.Application](../README.md#Identity.Application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ConfigurationParametersConfigurationParameterIdGet

> ConfigurationParameterApiResult apiV2ConfigurationParametersConfigurationParameterIdGet(configurationParameterId)

Gets configuration parameter by its identifier

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: PrivateToken
let PrivateToken = defaultClient.authentications['PrivateToken'];
PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//PrivateToken.apiKeyPrefix = 'Token';
// Configure API key authorization: Identity.Application
let Identity.Application = defaultClient.authentications['Identity.Application'];
Identity.Application.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Identity.Application.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ConfigurationParametersApi();
let configurationParameterId = "configurationParameterId_example"; // String | 
apiInstance.apiV2ConfigurationParametersConfigurationParameterIdGet(configurationParameterId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configurationParameterId** | **String**|  | 

### Return type

[**ConfigurationParameterApiResult**](ConfigurationParameterApiResult.md)

### Authorization

[PrivateToken](../README.md#PrivateToken), [Identity.Application](../README.md#Identity.Application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ConfigurationParametersConfigurationParameterIdPut

> apiV2ConfigurationParametersConfigurationParameterIdPut(configurationParameterId, opts)

Updates configuration parameter

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: PrivateToken
let PrivateToken = defaultClient.authentications['PrivateToken'];
PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//PrivateToken.apiKeyPrefix = 'Token';
// Configure API key authorization: Identity.Application
let Identity.Application = defaultClient.authentications['Identity.Application'];
Identity.Application.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Identity.Application.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ConfigurationParametersApi();
let configurationParameterId = "configurationParameterId_example"; // String | 
let opts = {
  'configurationParameterApiModel': new TestitApiClient.ConfigurationParameterApiModel() // ConfigurationParameterApiModel | 
};
apiInstance.apiV2ConfigurationParametersConfigurationParameterIdPut(configurationParameterId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configurationParameterId** | **String**|  | 
 **configurationParameterApiModel** | [**ConfigurationParameterApiModel**](ConfigurationParameterApiModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[PrivateToken](../README.md#PrivateToken), [Identity.Application](../README.md#Identity.Application)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2ConfigurationParametersPost

> ConfigurationParameterApiResult apiV2ConfigurationParametersPost(opts)

Creates new configuration parameter

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: PrivateToken
let PrivateToken = defaultClient.authentications['PrivateToken'];
PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//PrivateToken.apiKeyPrefix = 'Token';
// Configure API key authorization: Identity.Application
let Identity.Application = defaultClient.authentications['Identity.Application'];
Identity.Application.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Identity.Application.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ConfigurationParametersApi();
let opts = {
  'configurationParameterApiModel': new TestitApiClient.ConfigurationParameterApiModel() // ConfigurationParameterApiModel | 
};
apiInstance.apiV2ConfigurationParametersPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **configurationParameterApiModel** | [**ConfigurationParameterApiModel**](ConfigurationParameterApiModel.md)|  | [optional] 

### Return type

[**ConfigurationParameterApiResult**](ConfigurationParameterApiResult.md)

### Authorization

[PrivateToken](../README.md#PrivateToken), [Identity.Application](../README.md#Identity.Application)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2ConfigurationParametersSearchPost

> ConfigurationParameterPreviewApiResultIReply apiV2ConfigurationParametersSearchPost(opts)

Searches for configuration parameters

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: PrivateToken
let PrivateToken = defaultClient.authentications['PrivateToken'];
PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//PrivateToken.apiKeyPrefix = 'Token';
// Configure API key authorization: Identity.Application
let Identity.Application = defaultClient.authentications['Identity.Application'];
Identity.Application.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Identity.Application.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ConfigurationParametersApi();
let opts = {
  'searchConfigurationParametersApiModel': new TestitApiClient.SearchConfigurationParametersApiModel() // SearchConfigurationParametersApiModel | 
};
apiInstance.apiV2ConfigurationParametersSearchPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchConfigurationParametersApiModel** | [**SearchConfigurationParametersApiModel**](SearchConfigurationParametersApiModel.md)|  | [optional] 

### Return type

[**ConfigurationParameterPreviewApiResultIReply**](ConfigurationParameterPreviewApiResultIReply.md)

### Authorization

[PrivateToken](../README.md#PrivateToken), [Identity.Application](../README.md#Identity.Application)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

