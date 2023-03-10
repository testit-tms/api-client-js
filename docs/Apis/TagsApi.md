# TagsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2TagsGet**](TagsApi.md#apiV2TagsGet) | **GET** /api/v2/tags | Get all Tags |
| [**apiV2TagsTestPlansTagsGet**](TagsApi.md#apiV2TagsTestPlansTagsGet) | **GET** /api/v2/tags/testPlansTags | Get all Tags that are used in TestPlans |


<a name="apiV2TagsGet"></a>
# **apiV2TagsGet**
> List apiV2TagsGet()

Get all Tags

    &lt;br&gt;Use case  &lt;br&gt;User runs method execution  &lt;br&gt;System returns tags (listed in the response example)

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../Models/TagShortModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TagsTestPlansTagsGet"></a>
# **apiV2TagsTestPlansTagsGet**
> List apiV2TagsTestPlansTagsGet(Skip, Take, OrderBy, SearchField, SearchValue)

Get all Tags that are used in TestPlans

    &lt;br&gt;Use case  &lt;br&gt;User runs method execution  &lt;br&gt;System returns tags (listed in the response example)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |

### Return type

[**List**](../Models/TagShortModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

