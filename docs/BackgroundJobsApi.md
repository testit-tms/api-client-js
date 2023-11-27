# BackgroundJobsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2BackgroundJobsGet**](BackgroundJobsApi.md#apiV2BackgroundJobsGet) | **GET** /api/v2/backgroundJobs |  |
| [**apiV2BackgroundJobsIdCancelPost**](BackgroundJobsApi.md#apiV2BackgroundJobsIdCancelPost) | **POST** /api/v2/backgroundJobs/{id}/cancel | Cancel current user background job |
| [**apiV2BackgroundJobsIdGet**](BackgroundJobsApi.md#apiV2BackgroundJobsIdGet) | **GET** /api/v2/backgroundJobs/{id} | Get background job by ID |
| [**apiV2BackgroundJobsIdStatusGet**](BackgroundJobsApi.md#apiV2BackgroundJobsIdStatusGet) | **GET** /api/v2/backgroundJobs/{id}/status | Get background job status by job ID |
| [**apiV2BackgroundJobsSearchPost**](BackgroundJobsApi.md#apiV2BackgroundJobsSearchPost) | **POST** /api/v2/backgroundJobs/search | Search for user background jobs |


<a name="apiV2BackgroundJobsGet"></a>
# **apiV2BackgroundJobsGet**
> List apiV2BackgroundJobsGet(Skip, Take, OrderBy, SearchField, SearchValue)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |

### Return type

[**List**](../Models/BackgroundJobGetModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2BackgroundJobsIdCancelPost"></a>
# **apiV2BackgroundJobsIdCancelPost**
> apiV2BackgroundJobsIdCancelPost(id)

Cancel current user background job

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
- **Accept**: Not defined

<a name="apiV2BackgroundJobsIdGet"></a>
# **apiV2BackgroundJobsIdGet**
> BackgroundJobGetModel apiV2BackgroundJobsIdGet(id)

Get background job by ID

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Unique ID of the background job | [default to null] |

### Return type

[**BackgroundJobGetModel**](../Models/BackgroundJobGetModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2BackgroundJobsIdStatusGet"></a>
# **apiV2BackgroundJobsIdStatusGet**
> BackgroundJobState apiV2BackgroundJobsIdStatusGet(id)

Get background job status by job ID

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Unique ID of the background job | [default to null] |

### Return type

[**BackgroundJobState**](../Models/BackgroundJobState.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2BackgroundJobsSearchPost"></a>
# **apiV2BackgroundJobsSearchPost**
> List apiV2BackgroundJobsSearchPost(Skip, Take, OrderBy, SearchField, SearchValue, \_api\_v2\_backgroundJobs\_search\_post\_request)

Search for user background jobs

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **\_api\_v2\_backgroundJobs\_search\_post\_request** | [**_api_v2_backgroundJobs_search_post_request**](../Models/_api_v2_backgroundJobs_search_post_request.md)|  | [optional] |

### Return type

[**List**](../Models/BackgroundJobGetModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

