# TestitApiClient.ProjectExternalServicesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2ProjectsIdExternalServicesExternalServiceIdDelete**](ProjectExternalServicesApi.md#apiV2ProjectsIdExternalServicesExternalServiceIdDelete) | **DELETE** /api/v2/projects/{id}/external-services/{externalServiceId} | Disable an external service
[**apiV2ProjectsIdExternalServicesExternalServiceIdGet**](ProjectExternalServicesApi.md#apiV2ProjectsIdExternalServicesExternalServiceIdGet) | **GET** /api/v2/projects/{id}/external-services/{externalServiceId} | Retrieves settings of an external service
[**apiV2ProjectsIdExternalServicesExternalServiceIdPatch**](ProjectExternalServicesApi.md#apiV2ProjectsIdExternalServicesExternalServiceIdPatch) | **PATCH** /api/v2/projects/{id}/external-services/{externalServiceId} | Replaces one active external service with another
[**apiV2ProjectsIdExternalServicesExternalServiceIdPut**](ProjectExternalServicesApi.md#apiV2ProjectsIdExternalServicesExternalServiceIdPut) | **PUT** /api/v2/projects/{id}/external-services/{externalServiceId} | Enable an external service
[**apiV2ProjectsIdExternalServicesGet**](ProjectExternalServicesApi.md#apiV2ProjectsIdExternalServicesGet) | **GET** /api/v2/projects/{id}/external-services | Retrieves information about external services, including their integration status (enabled or not)
[**apiV2ProjectsIdExternalServicesIssuesSearchPost**](ProjectExternalServicesApi.md#apiV2ProjectsIdExternalServicesIssuesSearchPost) | **POST** /api/v2/projects/{id}/external-services/issues/search | Searches for external issues using enabled external services in project



## apiV2ProjectsIdExternalServicesExternalServiceIdDelete

> apiV2ProjectsIdExternalServicesExternalServiceIdDelete(id, externalServiceId)

Disable an external service

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: PrivateToken
let PrivateToken = defaultClient.authentications['PrivateToken'];
PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//PrivateToken.apiKeyPrefix = 'Token';
// Configure API key authorization: Cookies
let Cookies = defaultClient.authentications['Cookies'];
Cookies.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Cookies.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectExternalServicesApi();
let id = "id_example"; // String | Project ID
let externalServiceId = "externalServiceId_example"; // String | External service ID
apiInstance.apiV2ProjectsIdExternalServicesExternalServiceIdDelete(id, externalServiceId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project ID | 
 **externalServiceId** | **String**| External service ID | 

### Return type

null (empty response body)

### Authorization

[PrivateToken](../README.md#PrivateToken), [Cookies](../README.md#Cookies)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ProjectsIdExternalServicesExternalServiceIdGet

> ProjectExternalServiceSettingsApiResult apiV2ProjectsIdExternalServicesExternalServiceIdGet(id, externalServiceId)

Retrieves settings of an external service

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: PrivateToken
let PrivateToken = defaultClient.authentications['PrivateToken'];
PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//PrivateToken.apiKeyPrefix = 'Token';
// Configure API key authorization: Cookies
let Cookies = defaultClient.authentications['Cookies'];
Cookies.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Cookies.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectExternalServicesApi();
let id = "id_example"; // String | Project ID
let externalServiceId = "externalServiceId_example"; // String | External service ID
apiInstance.apiV2ProjectsIdExternalServicesExternalServiceIdGet(id, externalServiceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project ID | 
 **externalServiceId** | **String**| External service ID | 

### Return type

[**ProjectExternalServiceSettingsApiResult**](ProjectExternalServiceSettingsApiResult.md)

### Authorization

[PrivateToken](../README.md#PrivateToken), [Cookies](../README.md#Cookies)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ProjectsIdExternalServicesExternalServiceIdPatch

> apiV2ProjectsIdExternalServicesExternalServiceIdPatch(id, externalServiceId, opts)

Replaces one active external service with another

See &lt;a href&#x3D;\&quot;https://www.rfc-editor.org/rfc/rfc6902\&quot; target&#x3D;\&quot;_blank\&quot;&gt;RFC 6902: JavaScript Object Notation (JSON) Patch&lt;/a&gt; for details

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: PrivateToken
let PrivateToken = defaultClient.authentications['PrivateToken'];
PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//PrivateToken.apiKeyPrefix = 'Token';
// Configure API key authorization: Cookies
let Cookies = defaultClient.authentications['Cookies'];
Cookies.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Cookies.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectExternalServicesApi();
let id = "id_example"; // String | Project ID
let externalServiceId = "externalServiceId_example"; // String | External service ID
let opts = {
  'replaceProjectExternalServiceApiModel': new TestitApiClient.ReplaceProjectExternalServiceApiModel() // ReplaceProjectExternalServiceApiModel | 
};
apiInstance.apiV2ProjectsIdExternalServicesExternalServiceIdPatch(id, externalServiceId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project ID | 
 **externalServiceId** | **String**| External service ID | 
 **replaceProjectExternalServiceApiModel** | [**ReplaceProjectExternalServiceApiModel**](ReplaceProjectExternalServiceApiModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[PrivateToken](../README.md#PrivateToken), [Cookies](../README.md#Cookies)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2ProjectsIdExternalServicesExternalServiceIdPut

> apiV2ProjectsIdExternalServicesExternalServiceIdPut(id, externalServiceId, opts)

Enable an external service

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: PrivateToken
let PrivateToken = defaultClient.authentications['PrivateToken'];
PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//PrivateToken.apiKeyPrefix = 'Token';
// Configure API key authorization: Cookies
let Cookies = defaultClient.authentications['Cookies'];
Cookies.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Cookies.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectExternalServicesApi();
let id = "id_example"; // String | Project ID
let externalServiceId = "externalServiceId_example"; // String | External service ID
let opts = {
  'enableProjectExternalServiceApiModel': new TestitApiClient.EnableProjectExternalServiceApiModel() // EnableProjectExternalServiceApiModel | 
};
apiInstance.apiV2ProjectsIdExternalServicesExternalServiceIdPut(id, externalServiceId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project ID | 
 **externalServiceId** | **String**| External service ID | 
 **enableProjectExternalServiceApiModel** | [**EnableProjectExternalServiceApiModel**](EnableProjectExternalServiceApiModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[PrivateToken](../README.md#PrivateToken), [Cookies](../README.md#Cookies)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2ProjectsIdExternalServicesGet

> ProjectExternalServicesApiResult apiV2ProjectsIdExternalServicesGet(id, opts)

Retrieves information about external services, including their integration status (enabled or not)

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: PrivateToken
let PrivateToken = defaultClient.authentications['PrivateToken'];
PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//PrivateToken.apiKeyPrefix = 'Token';
// Configure API key authorization: Cookies
let Cookies = defaultClient.authentications['Cookies'];
Cookies.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Cookies.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectExternalServicesApi();
let id = "id_example"; // String | Project ID
let opts = {
  'category': new TestitApiClient.ApiExternalServiceCategory() // ApiExternalServiceCategory | 
};
apiInstance.apiV2ProjectsIdExternalServicesGet(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Project ID | 
 **category** | [**ApiExternalServiceCategory**](.md)|  | [optional] 

### Return type

[**ProjectExternalServicesApiResult**](ProjectExternalServicesApiResult.md)

### Authorization

[PrivateToken](../README.md#PrivateToken), [Cookies](../README.md#Cookies)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ProjectsIdExternalServicesIssuesSearchPost

> [ExternalIssueApiResult] apiV2ProjectsIdExternalServicesIssuesSearchPost(id, opts)

Searches for external issues using enabled external services in project

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: PrivateToken
let PrivateToken = defaultClient.authentications['PrivateToken'];
PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//PrivateToken.apiKeyPrefix = 'Token';
// Configure API key authorization: Cookies
let Cookies = defaultClient.authentications['Cookies'];
Cookies.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Cookies.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectExternalServicesApi();
let id = "id_example"; // String | Internal (UUID) or global (integer) identifier
let opts = {
  'searchExternalIssuesApiModel': new TestitApiClient.SearchExternalIssuesApiModel() // SearchExternalIssuesApiModel | 
};
apiInstance.apiV2ProjectsIdExternalServicesIssuesSearchPost(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Internal (UUID) or global (integer) identifier | 
 **searchExternalIssuesApiModel** | [**SearchExternalIssuesApiModel**](SearchExternalIssuesApiModel.md)|  | [optional] 

### Return type

[**[ExternalIssueApiResult]**](ExternalIssueApiResult.md)

### Authorization

[PrivateToken](../README.md#PrivateToken), [Cookies](../README.md#Cookies)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

