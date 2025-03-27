# TestStatusesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2TestStatusesCodeCodeExistsGet**](TestStatusesApi.md#apiV2TestStatusesCodeCodeExistsGet) | **GET** /api/v2/testStatuses/code/{code}/exists |  |
| [**apiV2TestStatusesGet**](TestStatusesApi.md#apiV2TestStatusesGet) | **GET** /api/v2/testStatuses |  |
| [**apiV2TestStatusesIdDelete**](TestStatusesApi.md#apiV2TestStatusesIdDelete) | **DELETE** /api/v2/testStatuses/{id} |  |
| [**apiV2TestStatusesIdGet**](TestStatusesApi.md#apiV2TestStatusesIdGet) | **GET** /api/v2/testStatuses/{id} |  |
| [**apiV2TestStatusesNameNameExistsGet**](TestStatusesApi.md#apiV2TestStatusesNameNameExistsGet) | **GET** /api/v2/testStatuses/name/{name}/exists |  |
| [**apiV2TestStatusesPost**](TestStatusesApi.md#apiV2TestStatusesPost) | **POST** /api/v2/testStatuses |  |
| [**apiV2TestStatusesPut**](TestStatusesApi.md#apiV2TestStatusesPut) | **PUT** /api/v2/testStatuses |  |


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

<a name="apiV2TestStatusesGet"></a>
# **apiV2TestStatusesGet**
> List apiV2TestStatusesGet()



### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../Models/TestStatusApiResult.md)

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
> TestStatusApiResult apiV2TestStatusesPost(TestStatusCreateModel)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **TestStatusCreateModel** | [**TestStatusCreateModel**](../Models/TestStatusCreateModel.md)|  | [optional] |

### Return type

[**TestStatusApiResult**](../Models/TestStatusApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

<a name="apiV2TestStatusesPut"></a>
# **apiV2TestStatusesPut**
> apiV2TestStatusesPut(TestStatusUpdateModel)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **TestStatusUpdateModel** | [**TestStatusUpdateModel**](../Models/TestStatusUpdateModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: application/json

