# TestitApiClient.AIServicesAPIApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2ExternalServicesIdAiModelsPost**](AIServicesAPIApi.md#apiV2ExternalServicesIdAiModelsPost) | **POST** /api/v2/external-services/{id}/ai/models | Ask for models with inquiry filter, cached



## apiV2ExternalServicesIdAiModelsPost

> AIServiceModelApiResultIReply apiV2ExternalServicesIdAiModelsPost(id, opts)

Ask for models with inquiry filter, cached

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

let apiInstance = new TestitApiClient.AIServicesAPIApi();
let id = "id_example"; // String | 
let opts = {
  'getAIServiceModelsApiModel': new TestitApiClient.GetAIServiceModelsApiModel() // GetAIServiceModelsApiModel | 
};
apiInstance.apiV2ExternalServicesIdAiModelsPost(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **getAIServiceModelsApiModel** | [**GetAIServiceModelsApiModel**](GetAIServiceModelsApiModel.md)|  | [optional] 

### Return type

[**AIServiceModelApiResultIReply**](AIServiceModelApiResultIReply.md)

### Authorization

[PrivateToken](../README.md#PrivateToken), [Cookies](../README.md#Cookies)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

