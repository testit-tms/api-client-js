# ProjectWorkItemsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2ProjectsProjectIdWorkItemsPreviewsBulkPost**](ProjectWorkItemsApi.md#apiV2ProjectsProjectIdWorkItemsPreviewsBulkPost) | **POST** /api/v2/projects/{projectId}/work-items/previews/bulk |  |
| [**apiV2ProjectsProjectIdWorkItemsPreviewsPost**](ProjectWorkItemsApi.md#apiV2ProjectsProjectIdWorkItemsPreviewsPost) | **POST** /api/v2/projects/{projectId}/work-items/previews |  |
| [**apiV2ProjectsProjectIdWorkItemsSearchGroupedPost**](ProjectWorkItemsApi.md#apiV2ProjectsProjectIdWorkItemsSearchGroupedPost) | **POST** /api/v2/projects/{projectId}/workItems/search/grouped | Search for work items and group results by attribute |
| [**apiV2ProjectsProjectIdWorkItemsSearchIdPost**](ProjectWorkItemsApi.md#apiV2ProjectsProjectIdWorkItemsSearchIdPost) | **POST** /api/v2/projects/{projectId}/workItems/search/id | Search for work items and extract IDs only |
| [**apiV2ProjectsProjectIdWorkItemsSearchPost**](ProjectWorkItemsApi.md#apiV2ProjectsProjectIdWorkItemsSearchPost) | **POST** /api/v2/projects/{projectId}/workItems/search | Search for work items |
| [**apiV2ProjectsProjectIdWorkItemsTagsGet**](ProjectWorkItemsApi.md#apiV2ProjectsProjectIdWorkItemsTagsGet) | **GET** /api/v2/projects/{projectId}/workItems/tags | Get WorkItems Tags |
| [**getWorkItemsByProjectId**](ProjectWorkItemsApi.md#getWorkItemsByProjectId) | **GET** /api/v2/projects/{projectId}/workItems | Get project work items |


<a name="apiV2ProjectsProjectIdWorkItemsPreviewsBulkPost"></a>
# **apiV2ProjectsProjectIdWorkItemsPreviewsBulkPost**
> apiV2ProjectsProjectIdWorkItemsPreviewsBulkPost(projectId, CreateWorkItemPreviewsApiModel)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**|  | [default to null] |
| **CreateWorkItemPreviewsApiModel** | [**CreateWorkItemPreviewsApiModel**](../Models/CreateWorkItemPreviewsApiModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ProjectsProjectIdWorkItemsPreviewsPost"></a>
# **apiV2ProjectsProjectIdWorkItemsPreviewsPost**
> GenerateWorkItemPreviewsApiResult apiV2ProjectsProjectIdWorkItemsPreviewsPost(projectId, GenerateWorkItemPreviewsApiModel)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**|  | [default to null] |
| **GenerateWorkItemPreviewsApiModel** | [**GenerateWorkItemPreviewsApiModel**](../Models/GenerateWorkItemPreviewsApiModel.md)|  | [optional] |

### Return type

[**GenerateWorkItemPreviewsApiResult**](../Models/GenerateWorkItemPreviewsApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ProjectsProjectIdWorkItemsSearchGroupedPost"></a>
# **apiV2ProjectsProjectIdWorkItemsSearchGroupedPost**
> List apiV2ProjectsProjectIdWorkItemsSearchGroupedPost(projectId, Skip, Take, OrderBy, SearchField, SearchValue, WorkItemGroupGetModel)

Search for work items and group results by attribute

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**| Unique or global ID of the project | [default to null] |
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **WorkItemGroupGetModel** | [**WorkItemGroupGetModel**](../Models/WorkItemGroupGetModel.md)|  | [optional] |

### Return type

[**List**](../Models/WorkItemGroupModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ProjectsProjectIdWorkItemsSearchIdPost"></a>
# **apiV2ProjectsProjectIdWorkItemsSearchIdPost**
> List apiV2ProjectsProjectIdWorkItemsSearchIdPost(projectId, Skip, Take, OrderBy, SearchField, SearchValue, WorkItemSelectModel)

Search for work items and extract IDs only

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**| Unique or global ID of the project | [default to null] |
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **WorkItemSelectModel** | [**WorkItemSelectModel**](../Models/WorkItemSelectModel.md)|  | [optional] |

### Return type

**List**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ProjectsProjectIdWorkItemsSearchPost"></a>
# **apiV2ProjectsProjectIdWorkItemsSearchPost**
> List apiV2ProjectsProjectIdWorkItemsSearchPost(projectId, Skip, Take, OrderBy, SearchField, SearchValue, WorkItemSelectApiModel)

Search for work items

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**| Unique or global ID of the project | [default to null] |
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **WorkItemSelectApiModel** | [**WorkItemSelectApiModel**](../Models/WorkItemSelectApiModel.md)|  | [optional] |

### Return type

[**List**](../Models/WorkItemShortApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ProjectsProjectIdWorkItemsTagsGet"></a>
# **apiV2ProjectsProjectIdWorkItemsTagsGet**
> List apiV2ProjectsProjectIdWorkItemsTagsGet(projectId, isDeleted)

Get WorkItems Tags

     Use case  User sets project internal identifier  User runs method execution  System returns work items tags

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **UUID**| Project internal (UUID) identifier | [default to null] |
| **isDeleted** | **Boolean**|  | [optional] [default to null] |

### Return type

[**List**](../Models/TagShortApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getWorkItemsByProjectId"></a>
# **getWorkItemsByProjectId**
> List getWorkItemsByProjectId(projectId, isDeleted, tagNames, includeIterations, Skip, Take, OrderBy, SearchField, SearchValue)

Get project work items

     Use case  User sets project internal or global identifier  [Optional] User sets isDeleted field value  User runs method execution  System search project  [Optional] If User sets isDeleted field value as true, System search all deleted workitems related to project  [Optional] If User sets isDeleted field value as false, System search all workitems related to project which are not deleted  If User did not set isDeleted field value, System search all  workitems related to project  System returns array of found workitems (listed in response model)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**| Project internal (UUID) or global (integer) identifier | [default to null] |
| **isDeleted** | **Boolean**| If result must consist of only actual/deleted work items | [optional] [default to false] |
| **tagNames** | [**List**](../Models/String.md)| List of tags to filter by | [optional] [default to null] |
| **includeIterations** | **Boolean**|  | [optional] [default to true] |
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |

### Return type

[**List**](../Models/WorkItemShortModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

