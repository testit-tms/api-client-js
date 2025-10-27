# ProjectTestPlanAttributesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createCustomAttributeTestPlanProjectRelations**](ProjectTestPlanAttributesApi.md#createCustomAttributeTestPlanProjectRelations) | **POST** /api/v2/projects/{projectId}/testPlans/attributes | Add attributes to project&#39;s test plans |
| [**deleteCustomAttributeTestPlanProjectRelations**](ProjectTestPlanAttributesApi.md#deleteCustomAttributeTestPlanProjectRelations) | **DELETE** /api/v2/projects/{projectId}/testPlans/attributes/{attributeId} | Delete attribute from project&#39;s test plans |
| [**getCustomAttributeTestPlanProjectRelations**](ProjectTestPlanAttributesApi.md#getCustomAttributeTestPlanProjectRelations) | **GET** /api/v2/projects/{projectId}/testPlans/attributes | Get project&#39;s test plan attributes |
| [**searchTestPlanAttributesInProject**](ProjectTestPlanAttributesApi.md#searchTestPlanAttributesInProject) | **POST** /api/v2/projects/{projectId}/testPlans/attributes/search | Search for attributes used in the project test plans |
| [**updateCustomAttributeTestPlanProjectRelations**](ProjectTestPlanAttributesApi.md#updateCustomAttributeTestPlanProjectRelations) | **PUT** /api/v2/projects/{projectId}/testPlans/attributes | Update attribute of project&#39;s test plans |


<a name="createCustomAttributeTestPlanProjectRelations"></a>
# **createCustomAttributeTestPlanProjectRelations**
> createCustomAttributeTestPlanProjectRelations(projectId, request\_body)

Add attributes to project&#39;s test plans

      Use case    User sets project internal or global identifier and attributes identifiers    User runs method execution    System updates project and add attributes to project for test plans    System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**| Project internal (UUID) or global (integer) identifier | [default to null] |
| **request\_body** | [**Set**](../Models/UUID.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteCustomAttributeTestPlanProjectRelations"></a>
# **deleteCustomAttributeTestPlanProjectRelations**
> deleteCustomAttributeTestPlanProjectRelations(projectId, attributeId)

Delete attribute from project&#39;s test plans

      Use case    User sets project internal or global identifier and attribute identifier    User runs method execution    System updates project and delete attribute from project for test plans    System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**| Project internal (UUID) or global (integer) identifier | [default to null] |
| **attributeId** | **UUID**|  | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getCustomAttributeTestPlanProjectRelations"></a>
# **getCustomAttributeTestPlanProjectRelations**
> List getCustomAttributeTestPlanProjectRelations(projectId)

Get project&#39;s test plan attributes

      Use case    User runs method execution    System returns project for test plans attributes by project identifier

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**| Project internal (UUID) or global (integer) identifier | [default to null] |

### Return type

[**List**](../Models/CustomAttributeModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="searchTestPlanAttributesInProject"></a>
# **searchTestPlanAttributesInProject**
> List searchTestPlanAttributesInProject(projectId, Skip, Take, OrderBy, SearchField, SearchValue, ProjectAttributesFilterModel)

Search for attributes used in the project test plans

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**| Unique or global project ID | [default to null] |
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **ProjectAttributesFilterModel** | [**ProjectAttributesFilterModel**](../Models/ProjectAttributesFilterModel.md)|  | [optional] |

### Return type

[**List**](../Models/CustomAttributeGetModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateCustomAttributeTestPlanProjectRelations"></a>
# **updateCustomAttributeTestPlanProjectRelations**
> updateCustomAttributeTestPlanProjectRelations(projectId, CustomAttributeTestPlanProjectRelationPutModel)

Update attribute of project&#39;s test plans

      Use case    User sets project internal or global identifier and attribute model    User runs method execution    System updates project and project attribute for test plan    System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**| Project internal (UUID) or global (integer) identifier | [default to null] |
| **CustomAttributeTestPlanProjectRelationPutModel** | [**CustomAttributeTestPlanProjectRelationPutModel**](../Models/CustomAttributeTestPlanProjectRelationPutModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

