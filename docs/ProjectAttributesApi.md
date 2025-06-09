# ProjectAttributesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createProjectsAttribute**](ProjectAttributesApi.md#createProjectsAttribute) | **POST** /api/v2/projects/{projectId}/attributes | Create project attribute |
| [**deleteProjectsAttribute**](ProjectAttributesApi.md#deleteProjectsAttribute) | **DELETE** /api/v2/projects/{projectId}/attributes/{attributeId} | Delete project attribute |
| [**getAttributeByProjectId**](ProjectAttributesApi.md#getAttributeByProjectId) | **GET** /api/v2/projects/{projectId}/attributes/{attributeId} | Get project attribute |
| [**getAttributesByProjectId**](ProjectAttributesApi.md#getAttributesByProjectId) | **GET** /api/v2/projects/{projectId}/attributes | Get project attributes |
| [**searchAttributesInProject**](ProjectAttributesApi.md#searchAttributesInProject) | **POST** /api/v2/projects/{projectId}/attributes/search | Search for attributes used in the project |
| [**updateProjectsAttribute**](ProjectAttributesApi.md#updateProjectsAttribute) | **PUT** /api/v2/projects/{projectId}/attributes | Edit attribute of the project |


<a name="createProjectsAttribute"></a>
# **createProjectsAttribute**
> CustomAttributeModel createProjectsAttribute(projectId, CustomAttributePostModel)

Create project attribute

     Use case  User sets attribute parameters (listed in request example) and runs method execution  System search project  System creates attribute and relates it to the project  System returns project attribute properties (example listed in response parameters)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**| Project internal (UUID) or global (integer) identifier | [default to null] |
| **CustomAttributePostModel** | [**CustomAttributePostModel**](../Models/CustomAttributePostModel.md)|  | [optional] |

### Return type

[**CustomAttributeModel**](../Models/CustomAttributeModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteProjectsAttribute"></a>
# **deleteProjectsAttribute**
> deleteProjectsAttribute(projectId, attributeId)

Delete project attribute

     Use case  User sets project identifier and runs method execution  User sets attribute identifier  User runs method execution  System search project  System search and delete attribute  System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**| Project internal (UUID) or global (integer) identifier | [default to null] |
| **attributeId** | **UUID**| Project attribute internal (UUID) | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAttributeByProjectId"></a>
# **getAttributeByProjectId**
> CustomAttributeModel getAttributeByProjectId(projectId, attributeId)

Get project attribute

     Use case  User sets project internal or global identifier  User sets project attribute identifier  User runs method execution  System search project  System search project attribute  System returns project attribute (listed in response model)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**| Project internal (UUID) or global (integer) identifier | [default to null] |
| **attributeId** | **UUID**| Project attribute internal (UUID) or global (integer) identifier | [default to null] |

### Return type

[**CustomAttributeModel**](../Models/CustomAttributeModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAttributesByProjectId"></a>
# **getAttributesByProjectId**
> List getAttributesByProjectId(projectId, isDeleted)

Get project attributes

     Use case  User sets project internal or global identifier  [Optional] User sets isDeleted field value  User runs method execution  System search project  [Optional] If User sets isDeleted field value as true, System search all deleted attributes related to project  [Optional] If User sets isDeleted field value as false, System search all attributes related to project which are not deleted  [Optional] If User did not set isDeleted field value, System search all attributes related to project  System returns array of found attributes (listed in response model)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**| Project internal (UUID) or global (integer) identifier | [default to null] |
| **isDeleted** | [**DeletionState**](../Models/.md)|  | [optional] [default to NotDeleted] [enum: Any, Deleted, NotDeleted] |

### Return type

[**List**](../Models/CustomAttributeModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="searchAttributesInProject"></a>
# **searchAttributesInProject**
> List searchAttributesInProject(projectId, Skip, Take, OrderBy, SearchField, SearchValue, ProjectAttributesFilterModel)

Search for attributes used in the project

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

<a name="updateProjectsAttribute"></a>
# **updateProjectsAttribute**
> updateProjectsAttribute(projectId, CustomAttributePutModel)

Edit attribute of the project

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**| Unique or global project ID | [default to null] |
| **CustomAttributePutModel** | [**CustomAttributePutModel**](../Models/CustomAttributePutModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

