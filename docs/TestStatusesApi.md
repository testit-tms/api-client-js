# TestStatusesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2TestStatusesCodeCodeExistsGet**](TestStatusesApi.md#apiV2TestStatusesCodeCodeExistsGet) | **GET** /api/v2/testStatuses/code/{code}/exists |  |
| [**apiV2TestStatusesIdDelete**](TestStatusesApi.md#apiV2TestStatusesIdDelete) | **DELETE** /api/v2/testStatuses/{id} |  |
| [**apiV2TestStatusesIdGet**](TestStatusesApi.md#apiV2TestStatusesIdGet) | **GET** /api/v2/testStatuses/{id} |  |
| [**apiV2TestStatusesIdPut**](TestStatusesApi.md#apiV2TestStatusesIdPut) | **PUT** /api/v2/testStatuses/{id} |  |
| [**apiV2TestStatusesNameNameExistsGet**](TestStatusesApi.md#apiV2TestStatusesNameNameExistsGet) | **GET** /api/v2/testStatuses/name/{name}/exists |  |
| [**apiV2TestStatusesPost**](TestStatusesApi.md#apiV2TestStatusesPost) | **POST** /api/v2/testStatuses |  |
| [**apiV2TestStatusesSearchPost**](TestStatusesApi.md#apiV2TestStatusesSearchPost) | **POST** /api/v2/testStatuses/search |  |


<a name="apiV2TestStatusesCodeCodeExistsGet"></a>
# **apiV2TestStatusesCodeCodeExistsGet**
> Boolean apiV2TestStatusesCodeCodeExistsGet(code)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **code** | **String**|  | [default to null] |

### Return type

**Boolean**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

<a name="apiV2TestStatusesIdDelete"></a>
# **apiV2TestStatusesIdDelete**
> apiV2TestStatusesIdDelete(id)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**|  | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TestStatusesIdGet"></a>
# **apiV2TestStatusesIdGet**
> TestStatusApiResult apiV2TestStatusesIdGet(id)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**|  | [default to null] |

### Return type

[**TestStatusApiResult**](../Models/TestStatusApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

<a name="apiV2TestStatusesIdPut"></a>
# **apiV2TestStatusesIdPut**
> apiV2TestStatusesIdPut(id, UpdateTestStatusApiModel)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**|  | [default to null] |
| **UpdateTestStatusApiModel** | [**UpdateTestStatusApiModel**](../Models/UpdateTestStatusApiModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: application/json

<a name="apiV2TestStatusesNameNameExistsGet"></a>
# **apiV2TestStatusesNameNameExistsGet**
> Boolean apiV2TestStatusesNameNameExistsGet(name)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **name** | **String**|  | [default to null] |

### Return type

**Boolean**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

<a name="apiV2TestStatusesPost"></a>
# **apiV2TestStatusesPost**
> TestStatusApiResult apiV2TestStatusesPost(CreateTestStatusApiModel)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **CreateTestStatusApiModel** | [**CreateTestStatusApiModel**](../Models/CreateTestStatusApiModel.md)|  | [optional] |

### Return type

[**TestStatusApiResult**](../Models/TestStatusApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

<a name="apiV2TestStatusesSearchPost"></a>
# **apiV2TestStatusesSearchPost**
> TestStatusApiResultReply apiV2TestStatusesSearchPost(SearchTestStatusesApiModel)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **SearchTestStatusesApiModel** | [**SearchTestStatusesApiModel**](../Models/SearchTestStatusesApiModel.md)|  | [optional] |

### Return type

[**TestStatusApiResultReply**](../Models/TestStatusApiResultReply.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

