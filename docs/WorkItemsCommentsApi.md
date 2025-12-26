# TestitApiClient.WorkItemsCommentsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2WorkItemsCommentsCommentIdDelete**](WorkItemsCommentsApi.md#apiV2WorkItemsCommentsCommentIdDelete) | **DELETE** /api/v2/workItems/comments/{commentId} | Delete WorkItem comment
[**apiV2WorkItemsCommentsPost**](WorkItemsCommentsApi.md#apiV2WorkItemsCommentsPost) | **POST** /api/v2/workItems/comments | Create WorkItem comment
[**apiV2WorkItemsCommentsPut**](WorkItemsCommentsApi.md#apiV2WorkItemsCommentsPut) | **PUT** /api/v2/workItems/comments | Update work item comment
[**apiV2WorkItemsIdCommentsCountGet**](WorkItemsCommentsApi.md#apiV2WorkItemsIdCommentsCountGet) | **GET** /api/v2/workItems/{id}/comments/count | Get work item comments count
[**apiV2WorkItemsIdCommentsGet**](WorkItemsCommentsApi.md#apiV2WorkItemsIdCommentsGet) | **GET** /api/v2/workItems/{id}/comments | Get work item comments



## apiV2WorkItemsCommentsCommentIdDelete

> apiV2WorkItemsCommentsCommentIdDelete(commentId)

Delete WorkItem comment

 Use case  User sets comment identifier  User runs method execution  System delete comment  System returns success status code

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkItemsCommentsApi();
let commentId = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Comment internal (guid format) identifier
apiInstance.apiV2WorkItemsCommentsCommentIdDelete(commentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commentId** | **String**| Comment internal (guid format) identifier | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2WorkItemsCommentsPost

> WorkItemCommentModel apiV2WorkItemsCommentsPost(opts)

Create WorkItem comment

 Use case  User sets comment properties (listed in request parameters)  User runs method execution  System creates comment  System returns comment model (listed in response parameters)

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkItemsCommentsApi();
let opts = {
  'workItemCommentPostModel': new TestitApiClient.WorkItemCommentPostModel() // WorkItemCommentPostModel | 
};
apiInstance.apiV2WorkItemsCommentsPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workItemCommentPostModel** | [**WorkItemCommentPostModel**](WorkItemCommentPostModel.md)|  | [optional] 

### Return type

[**WorkItemCommentModel**](WorkItemCommentModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2WorkItemsCommentsPut

> apiV2WorkItemsCommentsPut(opts)

Update work item comment

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkItemsCommentsApi();
let opts = {
  'workItemCommentPutModel': new TestitApiClient.WorkItemCommentPutModel() // WorkItemCommentPutModel | 
};
apiInstance.apiV2WorkItemsCommentsPut(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workItemCommentPutModel** | [**WorkItemCommentPutModel**](WorkItemCommentPutModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2WorkItemsIdCommentsCountGet

> Number apiV2WorkItemsIdCommentsCountGet(id)

Get work item comments count

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkItemsCommentsApi();
let id = "id_example"; // String | Unique or global ID of the work item
apiInstance.apiV2WorkItemsIdCommentsCountGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique or global ID of the work item | 

### Return type

**Number**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2WorkItemsIdCommentsGet

> [WorkItemCommentModel] apiV2WorkItemsIdCommentsGet(id)

Get work item comments

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkItemsCommentsApi();
let id = "id_example"; // String | Unique or global ID of the work item
apiInstance.apiV2WorkItemsIdCommentsGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique or global ID of the work item | 

### Return type

[**[WorkItemCommentModel]**](WorkItemCommentModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

