# CustomAttributeTemplatesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2CustomAttributesTemplatesExistsGet**](CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesExistsGet) | **GET** /api/v2/customAttributes/templates/exists |  |
| [**apiV2CustomAttributesTemplatesIdCustomAttributesExcludePost**](CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesIdCustomAttributesExcludePost) | **POST** /api/v2/customAttributes/templates/{id}/customAttributes/exclude | Exclude CustomAttributes from CustomAttributeTemplate |
| [**apiV2CustomAttributesTemplatesIdCustomAttributesIncludePost**](CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesIdCustomAttributesIncludePost) | **POST** /api/v2/customAttributes/templates/{id}/customAttributes/include | Include CustomAttributes to CustomAttributeTemplate |
| [**apiV2CustomAttributesTemplatesIdDelete**](CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesIdDelete) | **DELETE** /api/v2/customAttributes/templates/{id} | Delete CustomAttributeTemplate |
| [**apiV2CustomAttributesTemplatesIdGet**](CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesIdGet) | **GET** /api/v2/customAttributes/templates/{id} | Get CustomAttributeTemplate by ID |
| [**apiV2CustomAttributesTemplatesNameGet**](CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesNameGet) | **GET** /api/v2/customAttributes/templates/{name} | Get CustomAttributeTemplate by name |
| [**apiV2CustomAttributesTemplatesPost**](CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesPost) | **POST** /api/v2/customAttributes/templates | Create CustomAttributeTemplate |
| [**apiV2CustomAttributesTemplatesPut**](CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesPut) | **PUT** /api/v2/customAttributes/templates | Update custom attributes template |
| [**apiV2CustomAttributesTemplatesSearchPost**](CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesSearchPost) | **POST** /api/v2/customAttributes/templates/search | Search CustomAttributeTemplates |


<a name="apiV2CustomAttributesTemplatesExistsGet"></a>
# **apiV2CustomAttributesTemplatesExistsGet**
> CustomAttributeTemplateValidationResult apiV2CustomAttributesTemplatesExistsGet(name)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **name** | **String**|  | [optional] [default to null] |

### Return type

[**CustomAttributeTemplateValidationResult**](../Models/CustomAttributeTemplateValidationResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2CustomAttributesTemplatesIdCustomAttributesExcludePost"></a>
# **apiV2CustomAttributesTemplatesIdCustomAttributesExcludePost**
> apiV2CustomAttributesTemplatesIdCustomAttributesExcludePost(id, request\_body)

Exclude CustomAttributes from CustomAttributeTemplate

      Use case    User sets attribute template internal identifier    User sets attribute internal identifiers    User runs method execution    System delete attributes from attributes tempalte

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Attribute template internal (UUID) identifier | [default to null] |
| **request\_body** | [**Set**](../Models/UUID.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2CustomAttributesTemplatesIdCustomAttributesIncludePost"></a>
# **apiV2CustomAttributesTemplatesIdCustomAttributesIncludePost**
> apiV2CustomAttributesTemplatesIdCustomAttributesIncludePost(id, request\_body)

Include CustomAttributes to CustomAttributeTemplate

      Use case    User sets attribute template internal identifier    User sets attribute internal identifiers    User runs method execution    System add attributes to attributes tempalte

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Attribute template internal (UUID) identifier | [default to null] |
| **request\_body** | [**Set**](../Models/UUID.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2CustomAttributesTemplatesIdDelete"></a>
# **apiV2CustomAttributesTemplatesIdDelete**
> apiV2CustomAttributesTemplatesIdDelete(id)

Delete CustomAttributeTemplate

      Use case    User sets attribute template internal identifier    User runs method execution    System search and delete attribute template    System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Attribute template internal (UUID) identifier | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2CustomAttributesTemplatesIdGet"></a>
# **apiV2CustomAttributesTemplatesIdGet**
> CustomAttributeTemplateModel apiV2CustomAttributesTemplatesIdGet(id)

Get CustomAttributeTemplate by ID

      Use case    User sets attribute template internal identifier    User runs method execution    System return attribute template (listed in response example)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| CustomAttributeTemplate internal (UUID) identifier | [default to null] |

### Return type

[**CustomAttributeTemplateModel**](../Models/CustomAttributeTemplateModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2CustomAttributesTemplatesNameGet"></a>
# **apiV2CustomAttributesTemplatesNameGet**
> CustomAttributeTemplateModel apiV2CustomAttributesTemplatesNameGet(name)

Get CustomAttributeTemplate by name

      Use case    User sets attribute template name    User runs method execution    System search and return list of attribute templates (listed in response example)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **name** | **String**| CustomAttributeTemplate name for search | [default to null] |

### Return type

[**CustomAttributeTemplateModel**](../Models/CustomAttributeTemplateModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2CustomAttributesTemplatesPost"></a>
# **apiV2CustomAttributesTemplatesPost**
> CustomAttributeTemplateModel apiV2CustomAttributesTemplatesPost(CustomAttributeTemplatePostModel)

Create CustomAttributeTemplate

      Use case    User sets attribute template parameters (listed in request example)    User runs method execution    System creates attribute template    System returns attribute template model (example listed in response parameters)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **CustomAttributeTemplatePostModel** | [**CustomAttributeTemplatePostModel**](../Models/CustomAttributeTemplatePostModel.md)|  | [optional] |

### Return type

[**CustomAttributeTemplateModel**](../Models/CustomAttributeTemplateModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2CustomAttributesTemplatesPut"></a>
# **apiV2CustomAttributesTemplatesPut**
> apiV2CustomAttributesTemplatesPut(CustomAttributeTemplatePutModel)

Update custom attributes template

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **CustomAttributeTemplatePutModel** | [**CustomAttributeTemplatePutModel**](../Models/CustomAttributeTemplatePutModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2CustomAttributesTemplatesSearchPost"></a>
# **apiV2CustomAttributesTemplatesSearchPost**
> List apiV2CustomAttributesTemplatesSearchPost(Skip, Take, OrderBy, SearchField, SearchValue, CustomAttributeTemplateSearchQueryModel)

Search CustomAttributeTemplates

      Use case    User sets search params model (listed in request example)    User runs method execution    System return attribute templates (listed in response example)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **CustomAttributeTemplateSearchQueryModel** | [**CustomAttributeTemplateSearchQueryModel**](../Models/CustomAttributeTemplateSearchQueryModel.md)|  | [optional] |

### Return type

[**List**](../Models/SearchCustomAttributeTemplateGetModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

