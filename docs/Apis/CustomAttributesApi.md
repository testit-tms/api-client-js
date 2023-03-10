# CustomAttributesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2CustomAttributesGlobalIdDelete**](CustomAttributesApi.md#apiV2CustomAttributesGlobalIdDelete) | **DELETE** /api/v2/customAttributes/global/{id} | Delete global attribute |
| [**apiV2CustomAttributesGlobalIdPut**](CustomAttributesApi.md#apiV2CustomAttributesGlobalIdPut) | **PUT** /api/v2/customAttributes/global/{id} | Edit global attribute |
| [**apiV2CustomAttributesGlobalPost**](CustomAttributesApi.md#apiV2CustomAttributesGlobalPost) | **POST** /api/v2/customAttributes/global | Create global attribute |
| [**apiV2CustomAttributesIdGet**](CustomAttributesApi.md#apiV2CustomAttributesIdGet) | **GET** /api/v2/customAttributes/{id} | Get attribute |
| [**apiV2CustomAttributesSearchPost**](CustomAttributesApi.md#apiV2CustomAttributesSearchPost) | **POST** /api/v2/customAttributes/search | Search for attributes |


<a name="apiV2CustomAttributesGlobalIdDelete"></a>
# **apiV2CustomAttributesGlobalIdDelete**
> apiV2CustomAttributesGlobalIdDelete(id)

Delete global attribute

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Unique ID of attribute | [default to null] |

### Return type

null (empty response body)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2CustomAttributesGlobalIdPut"></a>
# **apiV2CustomAttributesGlobalIdPut**
> CustomAttributeModel apiV2CustomAttributesGlobalIdPut(id, GlobalCustomAttributeUpdateModel)

Edit global attribute

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Unique ID of attribute | [default to null] |
| **GlobalCustomAttributeUpdateModel** | [**GlobalCustomAttributeUpdateModel**](../Models/GlobalCustomAttributeUpdateModel.md)|  | [optional] |

### Return type

[**CustomAttributeModel**](../Models/CustomAttributeModel.md)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2CustomAttributesGlobalPost"></a>
# **apiV2CustomAttributesGlobalPost**
> CustomAttributeModel apiV2CustomAttributesGlobalPost(GlobalCustomAttributePostModel)

Create global attribute

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **GlobalCustomAttributePostModel** | [**GlobalCustomAttributePostModel**](../Models/GlobalCustomAttributePostModel.md)|  | [optional] |

### Return type

[**CustomAttributeModel**](../Models/CustomAttributeModel.md)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2CustomAttributesIdGet"></a>
# **apiV2CustomAttributesIdGet**
> CustomAttributeModel apiV2CustomAttributesIdGet(id)

Get attribute

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Unique ID of attribute | [default to null] |

### Return type

[**CustomAttributeModel**](../Models/CustomAttributeModel.md)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2CustomAttributesSearchPost"></a>
# **apiV2CustomAttributesSearchPost**
> List apiV2CustomAttributesSearchPost(Skip, Take, OrderBy, SearchField, SearchValue, CustomAttributeSearchQueryModel)

Search for attributes

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **CustomAttributeSearchQueryModel** | [**CustomAttributeSearchQueryModel**](../Models/CustomAttributeSearchQueryModel.md)|  | [optional] |

### Return type

[**List**](../Models/CustomAttributeModel.md)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

