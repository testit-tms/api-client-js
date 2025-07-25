# WorkItemsCommentsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2WorkItemsCommentsCommentIdDelete**](WorkItemsCommentsApi.md#apiV2WorkItemsCommentsCommentIdDelete) | **DELETE** /api/v2/workItems/comments/{commentId} | Delete WorkItem comment |
| [**apiV2WorkItemsCommentsPost**](WorkItemsCommentsApi.md#apiV2WorkItemsCommentsPost) | **POST** /api/v2/workItems/comments | Create WorkItem comment |
| [**apiV2WorkItemsCommentsPut**](WorkItemsCommentsApi.md#apiV2WorkItemsCommentsPut) | **PUT** /api/v2/workItems/comments | Update work item comment |
| [**apiV2WorkItemsIdCommentsCountGet**](WorkItemsCommentsApi.md#apiV2WorkItemsIdCommentsCountGet) | **GET** /api/v2/workItems/{id}/comments/count | Get work item comments count |
| [**apiV2WorkItemsIdCommentsGet**](WorkItemsCommentsApi.md#apiV2WorkItemsIdCommentsGet) | **GET** /api/v2/workItems/{id}/comments | Get work item comments |


<a name="apiV2WorkItemsCommentsCommentIdDelete"></a>
# **apiV2WorkItemsCommentsCommentIdDelete**
> apiV2WorkItemsCommentsCommentIdDelete(commentId)

Delete WorkItem comment

     Use case  User sets comment identifier  User runs method execution  System delete comment  System returns success status code

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **commentId** | **UUID**| Comment internal (guid format) identifier | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2WorkItemsCommentsPost"></a>
# **apiV2WorkItemsCommentsPost**
> WorkItemCommentModel apiV2WorkItemsCommentsPost(WorkItemCommentPostModel)

Create WorkItem comment

     Use case  User sets comment properties (listed in request parameters)  User runs method execution  System creates comment  System returns comment model (listed in response parameters)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **WorkItemCommentPostModel** | [**WorkItemCommentPostModel**](../Models/WorkItemCommentPostModel.md)|  | [optional] |

### Return type

[**WorkItemCommentModel**](../Models/WorkItemCommentModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2WorkItemsCommentsPut"></a>
# **apiV2WorkItemsCommentsPut**
> apiV2WorkItemsCommentsPut(WorkItemCommentPutModel)

Update work item comment

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **WorkItemCommentPutModel** | [**WorkItemCommentPutModel**](../Models/WorkItemCommentPutModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2WorkItemsIdCommentsCountGet"></a>
# **apiV2WorkItemsIdCommentsCountGet**
> Integer apiV2WorkItemsIdCommentsCountGet(id)

Get work item comments count

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Unique or global ID of the work item | [default to null] |

### Return type

**Integer**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2WorkItemsIdCommentsGet"></a>
# **apiV2WorkItemsIdCommentsGet**
> List apiV2WorkItemsIdCommentsGet(id)

Get work item comments

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Unique or global ID of the work item | [default to null] |

### Return type

[**List**](../Models/WorkItemCommentModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

