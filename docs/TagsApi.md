# TagsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2TagsDelete**](TagsApi.md#apiV2TagsDelete) | **DELETE** /api/v2/tags | Delete tags |
| [**apiV2TagsIdDelete**](TagsApi.md#apiV2TagsIdDelete) | **DELETE** /api/v2/tags/{id} | Delete tag |
| [**apiV2TagsPost**](TagsApi.md#apiV2TagsPost) | **POST** /api/v2/tags | Create tag |
| [**apiV2TagsPut**](TagsApi.md#apiV2TagsPut) | **PUT** /api/v2/tags | Update tag |
| [**apiV2TagsSearchGet**](TagsApi.md#apiV2TagsSearchGet) | **GET** /api/v2/tags/search | Search tags |
| [**apiV2TagsTestPlansTagsGet**](TagsApi.md#apiV2TagsTestPlansTagsGet) | **GET** /api/v2/tags/testPlansTags | Get all Tags that are used in TestPlans |


<a name="apiV2TagsDelete"></a>
# **apiV2TagsDelete**
> apiV2TagsDelete(SelectTagsApiModel)

Delete tags

     Use case  User sets collection of tags internal (guid format) identifiers  System searches and deletes a collection of tags

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **SelectTagsApiModel** | [**SelectTagsApiModel**](../Models/SelectTagsApiModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: application/json

<a name="apiV2TagsIdDelete"></a>
# **apiV2TagsIdDelete**
> apiV2TagsIdDelete(id)

Delete tag

     Use case  User sets tag internal (guid format) identifier  System search and delete tag

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
> TagApiResult apiV2TagsPost(CreateTagApiModel)

Create tag

     Use case  User sets tag model (listed in the request example)  User runs method execution  System creates tag  System returns tag model (listed in the response example)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **CreateTagApiModel** | [**CreateTagApiModel**](../Models/CreateTagApiModel.md)|  | [optional] |

### Return type

[**TagApiResult**](../Models/TagApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: application/json

<a name="apiV2TagsPut"></a>
# **apiV2TagsPut**
> TagApiResult apiV2TagsPut(id, UpdateTagApiModel)

Update tag

     Use case  User sets tag ID and model (listed in the request example)  User runs method execution  System updates tag  System returns tag model (listed in the response example)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**|  | [optional] [default to null] |
| **UpdateTagApiModel** | [**UpdateTagApiModel**](../Models/UpdateTagApiModel.md)|  | [optional] |

### Return type

[**TagApiResult**](../Models/TagApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: application/json

<a name="apiV2TagsSearchGet"></a>
# **apiV2TagsSearchGet**
> List apiV2TagsSearchGet(Skip, Take, OrderBy, SearchField, SearchValue)

Search tags

     Use case  User runs method execution  System returns collection of tags (listed in the response example)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |

### Return type

[**List**](../Models/TagApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TagsTestPlansTagsGet"></a>
# **apiV2TagsTestPlansTagsGet**
> List apiV2TagsTestPlansTagsGet(Skip, Take, OrderBy, SearchField, SearchValue)

Get all Tags that are used in TestPlans

     Use case  User runs method execution  System returns tags (listed in the response example)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |

### Return type

[**List**](../Models/TagApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

