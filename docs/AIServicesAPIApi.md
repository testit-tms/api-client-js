# AIServicesAPIApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2ExternalServicesIdAiModelsPost**](AIServicesAPIApi.md#apiV2ExternalServicesIdAiModelsPost) | **POST** /api/v2/external-services/{id}/ai/models | Ask for models with inquiry filter, cached |


<a name="apiV2ExternalServicesIdAiModelsPost"></a>
# **apiV2ExternalServicesIdAiModelsPost**
> AIServiceModelApiResultReply apiV2ExternalServicesIdAiModelsPost(id, GetAIServiceModelsApiModel)

Ask for models with inquiry filter, cached

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**|  | [default to null] |
| **GetAIServiceModelsApiModel** | [**GetAIServiceModelsApiModel**](../Models/GetAIServiceModelsApiModel.md)|  | [optional] |

### Return type

[**AIServiceModelApiResultReply**](../Models/AIServiceModelApiResultReply.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

