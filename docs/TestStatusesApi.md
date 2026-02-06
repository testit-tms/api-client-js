# TestitApiClient.TestStatusesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2TestStatusesCodeCodeExistsGet**](TestStatusesApi.md#apiV2TestStatusesCodeCodeExistsGet) | **GET** /api/v2/testStatuses/code/{code}/exists | 
[**apiV2TestStatusesIdDelete**](TestStatusesApi.md#apiV2TestStatusesIdDelete) | **DELETE** /api/v2/testStatuses/{id} | 
[**apiV2TestStatusesIdGet**](TestStatusesApi.md#apiV2TestStatusesIdGet) | **GET** /api/v2/testStatuses/{id} | 
[**apiV2TestStatusesIdPut**](TestStatusesApi.md#apiV2TestStatusesIdPut) | **PUT** /api/v2/testStatuses/{id} | 
[**apiV2TestStatusesNameNameExistsGet**](TestStatusesApi.md#apiV2TestStatusesNameNameExistsGet) | **GET** /api/v2/testStatuses/name/{name}/exists | 
[**apiV2TestStatusesPost**](TestStatusesApi.md#apiV2TestStatusesPost) | **POST** /api/v2/testStatuses | 
[**apiV2TestStatusesSearchPost**](TestStatusesApi.md#apiV2TestStatusesSearchPost) | **POST** /api/v2/testStatuses/search | 



## apiV2TestStatusesCodeCodeExistsGet

> Boolean apiV2TestStatusesCodeCodeExistsGet(code)



### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestStatusesApi();
let code = "code_example"; // String | 
apiInstance.apiV2TestStatusesCodeCodeExistsGet(code).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**|  | 

### Return type

**Boolean**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiV2TestStatusesIdDelete

> apiV2TestStatusesIdDelete(id)



### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestStatusesApi();
let id = "id_example"; // String | 
apiInstance.apiV2TestStatusesIdDelete(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2TestStatusesIdGet

> TestStatusApiResult apiV2TestStatusesIdGet(id)



### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestStatusesApi();
let id = "id_example"; // String | 
apiInstance.apiV2TestStatusesIdGet(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**TestStatusApiResult**](TestStatusApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiV2TestStatusesIdPut

> apiV2TestStatusesIdPut(id, opts)



### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestStatusesApi();
let id = "id_example"; // String | 
let opts = {
  'updateTestStatusApiModel': new TestitApiClient.UpdateTestStatusApiModel() // UpdateTestStatusApiModel | 
};
apiInstance.apiV2TestStatusesIdPut(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **updateTestStatusApiModel** | [**UpdateTestStatusApiModel**](UpdateTestStatusApiModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: application/json


## apiV2TestStatusesNameNameExistsGet

> Boolean apiV2TestStatusesNameNameExistsGet(name)



### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestStatusesApi();
let name = "name_example"; // String | 
apiInstance.apiV2TestStatusesNameNameExistsGet(name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
- **Accept**: text/plain, application/json, text/json


## apiV2TestStatusesPost

> TestStatusApiResult apiV2TestStatusesPost(opts)



### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestStatusesApi();
let opts = {
  'createTestStatusApiModel': new TestitApiClient.CreateTestStatusApiModel() // CreateTestStatusApiModel | 
};
apiInstance.apiV2TestStatusesPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTestStatusApiModel** | [**CreateTestStatusApiModel**](CreateTestStatusApiModel.md)|  | [optional] 

### Return type

[**TestStatusApiResult**](TestStatusApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## apiV2TestStatusesSearchPost

> TestStatusApiResultReply apiV2TestStatusesSearchPost(opts)



### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestStatusesApi();
let opts = {
  'searchTestStatusesApiModel': new TestitApiClient.SearchTestStatusesApiModel() // SearchTestStatusesApiModel | 
};
apiInstance.apiV2TestStatusesSearchPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchTestStatusesApiModel** | [**SearchTestStatusesApiModel**](SearchTestStatusesApiModel.md)|  | [optional] 

### Return type

[**TestStatusApiResultReply**](TestStatusApiResultReply.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

