# BackgroundJobsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2BackgroundJobsGet**](BackgroundJobsApi.md#apiV2BackgroundJobsGet) | **GET** /api/v2/backgroundJobs | Get current user background jobs |


<a name="apiV2BackgroundJobsGet"></a>
# **apiV2BackgroundJobsGet**
> List apiV2BackgroundJobsGet(Skip, Take, OrderBy, SearchField, SearchValue)

Get current user background jobs

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |

### Return type

[**List**](../Models/BackgroundJobModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

