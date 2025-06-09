# ProjectSectionsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getSectionsByProjectId**](ProjectSectionsApi.md#getSectionsByProjectId) | **GET** /api/v2/projects/{projectId}/sections | Get project sections |


<a name="getSectionsByProjectId"></a>
# **getSectionsByProjectId**
> List getSectionsByProjectId(projectId, Skip, Take, OrderBy, SearchField, SearchValue)

Get project sections

     Use case  User sets project internal or global identifier and runs method execution  System search project  System search all sections related to the project  System returns array of sections (listed in response)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**| Project internal (UUID) or global (integer) identifier | [default to null] |
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |

### Return type

[**List**](../Models/SectionModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

