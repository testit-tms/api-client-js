# TagsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2TagsDelete**](TagsApi.md#apiV2TagsDelete) | **DELETE** /api/v2/tags | Delete tags |
| [**apiV2TagsGet**](TagsApi.md#apiV2TagsGet) | **GET** /api/v2/tags | Get all Tags |
| [**apiV2TagsIdDelete**](TagsApi.md#apiV2TagsIdDelete) | **DELETE** /api/v2/tags/{id} | Delete tag |
| [**apiV2TagsPost**](TagsApi.md#apiV2TagsPost) | **POST** /api/v2/tags | Create tag |
| [**apiV2TagsPut**](TagsApi.md#apiV2TagsPut) | **PUT** /api/v2/tags | Update tag |
| [**apiV2TagsSearchGet**](TagsApi.md#apiV2TagsSearchGet) | **GET** /api/v2/tags/search | Search tags |
| [**apiV2TagsTestPlansTagsGet**](TagsApi.md#apiV2TagsTestPlansTagsGet) | **GET** /api/v2/tags/testPlansTags | Get all Tags that are used in TestPlans |


<a name="apiV2TagsDelete"></a>
# **apiV2TagsDelete**
> apiV2TagsDelete(TagSelectModel)

Delete tags

    &lt;br&gt;Use case  &lt;br&gt;User sets collection of tags internal (guid format) identifiers  &lt;br&gt;System searches and deletes a collection of tags

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **TagSelectModel** | [**TagSelectModel**](../Models/TagSelectModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: application/json

<a name="apiV2TagsGet"></a>
# **apiV2TagsGet**
> List apiV2TagsGet()

Get all Tags

    &lt;br&gt;Use case  &lt;br&gt;User runs method execution  &lt;br&gt;System returns tags (listed in the response example)

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../Models/TagModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TagsIdDelete"></a>
# **apiV2TagsIdDelete**
> apiV2TagsIdDelete(id)

Delete tag

    &lt;br&gt;Use case  &lt;br&gt;User sets tag internal (guid format) identifier  &lt;br&gt;System search and delete tag

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Tag internal (UUID) identifier | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TagsPost"></a>
# **apiV2TagsPost**
> TagModel apiV2TagsPost(TagPostModel)

Create tag

    &lt;br&gt;Use case  &lt;br&gt;User sets tag model (listed in the request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System creates tag  &lt;br&gt;System returns tag model (listed in the response example)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **TagPostModel** | [**TagPostModel**](../Models/TagPostModel.md)|  | [optional] |

### Return type

[**TagModel**](../Models/TagModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: application/json

<a name="apiV2TagsPut"></a>
# **apiV2TagsPut**
> TagModel apiV2TagsPut(id, TagPutModel)

Update tag

    &lt;br&gt;Use case  &lt;br&gt;User sets tag ID and model (listed in the request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System updates tag  &lt;br&gt;System returns tag model (listed in the response example)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**|  | [optional] [default to null] |
| **TagPutModel** | [**TagPutModel**](../Models/TagPutModel.md)|  | [optional] |

### Return type

[**TagModel**](../Models/TagModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: application/json

<a name="apiV2TagsSearchGet"></a>
# **apiV2TagsSearchGet**
> List apiV2TagsSearchGet(Skip, Take, OrderBy, SearchField, SearchValue)

Search tags

    &lt;br&gt;Use case  &lt;br&gt;User runs method execution  &lt;br&gt;System returns collection of tags (listed in the response example)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |

### Return type

[**List**](../Models/TagModel.md)

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

[**List**](../Models/TagModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

