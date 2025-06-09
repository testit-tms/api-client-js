# ProjectAttributeTemplatesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2ProjectsProjectIdAttributesTemplatesSearchPost**](ProjectAttributeTemplatesApi.md#apiV2ProjectsProjectIdAttributesTemplatesSearchPost) | **POST** /api/v2/projects/{projectId}/attributes/templates/search | Search for custom attributes templates |
| [**apiV2ProjectsProjectIdAttributesTemplatesTemplateIdDelete**](ProjectAttributeTemplatesApi.md#apiV2ProjectsProjectIdAttributesTemplatesTemplateIdDelete) | **DELETE** /api/v2/projects/{projectId}/attributes/templates/{templateId} | Delete CustomAttributeTemplate from Project |
| [**apiV2ProjectsProjectIdAttributesTemplatesTemplateIdPost**](ProjectAttributeTemplatesApi.md#apiV2ProjectsProjectIdAttributesTemplatesTemplateIdPost) | **POST** /api/v2/projects/{projectId}/attributes/templates/{templateId} | Add CustomAttributeTemplate to Project |


<a name="apiV2ProjectsProjectIdAttributesTemplatesSearchPost"></a>
# **apiV2ProjectsProjectIdAttributesTemplatesSearchPost**
> List apiV2ProjectsProjectIdAttributesTemplatesSearchPost(projectId, Skip, Take, OrderBy, SearchField, SearchValue, ProjectCustomAttributesTemplatesFilterModel)

Search for custom attributes templates

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**|  | [default to null] |
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **ProjectCustomAttributesTemplatesFilterModel** | [**ProjectCustomAttributesTemplatesFilterModel**](../Models/ProjectCustomAttributesTemplatesFilterModel.md)|  | [optional] |

### Return type

[**List**](../Models/ProjectCustomAttributeTemplateGetModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ProjectsProjectIdAttributesTemplatesTemplateIdDelete"></a>
# **apiV2ProjectsProjectIdAttributesTemplatesTemplateIdDelete**
> apiV2ProjectsProjectIdAttributesTemplatesTemplateIdDelete(projectId, templateId)

Delete CustomAttributeTemplate from Project

     Use case  User sets project internal or global identifier  User sets attribute template internal identifier  User runs method execution  System delete attribute template from project

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**| Project internal (UUID) or global (integer) identifier | [default to null] |
| **templateId** | **UUID**| CustomAttributeTemplate internal (UUID) identifier | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2ProjectsProjectIdAttributesTemplatesTemplateIdPost"></a>
# **apiV2ProjectsProjectIdAttributesTemplatesTemplateIdPost**
> apiV2ProjectsProjectIdAttributesTemplatesTemplateIdPost(projectId, templateId)

Add CustomAttributeTemplate to Project

     Use case  User sets project internal or global identifier  User sets attribute template internal identifier  User runs method execution  System add attribute template to project

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**| Project internal (UUID) or global (integer) identifier | [default to null] |
| **templateId** | **UUID**| CustomAttributeTemplate internal (UUID) identifier | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

