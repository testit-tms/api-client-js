# WorkflowsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2WorkflowsIdDelete**](WorkflowsApi.md#apiV2WorkflowsIdDelete) | **DELETE** /api/v2/workflows/{id} |  |
| [**apiV2WorkflowsIdGet**](WorkflowsApi.md#apiV2WorkflowsIdGet) | **GET** /api/v2/workflows/{id} |  |
| [**apiV2WorkflowsIdPatch**](WorkflowsApi.md#apiV2WorkflowsIdPatch) | **PATCH** /api/v2/workflows/{id} |  |
| [**apiV2WorkflowsIdProjectsSearchPost**](WorkflowsApi.md#apiV2WorkflowsIdProjectsSearchPost) | **POST** /api/v2/workflows/{id}/projects/search |  |
| [**apiV2WorkflowsIdPut**](WorkflowsApi.md#apiV2WorkflowsIdPut) | **PUT** /api/v2/workflows/{id} |  |
| [**apiV2WorkflowsNameNameExistsGet**](WorkflowsApi.md#apiV2WorkflowsNameNameExistsGet) | **GET** /api/v2/workflows/name/{name}/exists |  |
| [**apiV2WorkflowsPost**](WorkflowsApi.md#apiV2WorkflowsPost) | **POST** /api/v2/workflows |  |
| [**apiV2WorkflowsSearchPost**](WorkflowsApi.md#apiV2WorkflowsSearchPost) | **POST** /api/v2/workflows/search |  |


<a name="apiV2WorkflowsIdDelete"></a>
# **apiV2WorkflowsIdDelete**
> apiV2WorkflowsIdDelete(id)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**|  | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2WorkflowsIdGet"></a>
# **apiV2WorkflowsIdGet**
> WorkflowApiResult apiV2WorkflowsIdGet(id)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**|  | [default to null] |

### Return type

[**WorkflowApiResult**](../Models/WorkflowApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

<a name="apiV2WorkflowsIdPatch"></a>
# **apiV2WorkflowsIdPatch**
> apiV2WorkflowsIdPatch(id, Operation)



    See &lt;a href&#x3D;\&quot;https://www.rfc-editor.org/rfc/rfc6902\&quot; target&#x3D;\&quot;_blank\&quot;&gt;RFC 6902: JavaScript Object Notation (JSON) Patch&lt;/a&gt; for details

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**|  | [default to null] |
| **Operation** | [**List**](../Models/Operation.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: application/json

<a name="apiV2WorkflowsIdProjectsSearchPost"></a>
# **apiV2WorkflowsIdProjectsSearchPost**
> WorkflowProjectApiResultReply apiV2WorkflowsIdProjectsSearchPost(id, SearchWorkflowProjectsApiModel)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**|  | [default to null] |
| **SearchWorkflowProjectsApiModel** | [**SearchWorkflowProjectsApiModel**](../Models/SearchWorkflowProjectsApiModel.md)|  | [optional] |

### Return type

[**WorkflowProjectApiResultReply**](../Models/WorkflowProjectApiResultReply.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

<a name="apiV2WorkflowsIdPut"></a>
# **apiV2WorkflowsIdPut**
> apiV2WorkflowsIdPut(id, UpdateWorkflowApiModel)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**|  | [default to null] |
| **UpdateWorkflowApiModel** | [**UpdateWorkflowApiModel**](../Models/UpdateWorkflowApiModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: application/json

<a name="apiV2WorkflowsNameNameExistsGet"></a>
# **apiV2WorkflowsNameNameExistsGet**
> WorkflowExistsByNameApiResult apiV2WorkflowsNameNameExistsGet(name)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **name** | **String**|  | [default to null] |

### Return type

[**WorkflowExistsByNameApiResult**](../Models/WorkflowExistsByNameApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

<a name="apiV2WorkflowsPost"></a>
# **apiV2WorkflowsPost**
> WorkflowApiResult apiV2WorkflowsPost(CreateWorkflowApiModel)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **CreateWorkflowApiModel** | [**CreateWorkflowApiModel**](../Models/CreateWorkflowApiModel.md)|  | [optional] |

### Return type

[**WorkflowApiResult**](../Models/WorkflowApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

<a name="apiV2WorkflowsSearchPost"></a>
# **apiV2WorkflowsSearchPost**
> WorkflowShortApiResultReply apiV2WorkflowsSearchPost(SearchWorkflowsApiModel)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **SearchWorkflowsApiModel** | [**SearchWorkflowsApiModel**](../Models/SearchWorkflowsApiModel.md)|  | [optional] |

### Return type

[**WorkflowShortApiResultReply**](../Models/WorkflowShortApiResultReply.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

