# testit_api_client.WorkItemsCommentsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2WorkItemsCommentsCommentIdDelete**](WorkItemsCommentsApi.md#apiV2WorkItemsCommentsCommentIdDelete) | **DELETE** /api/v2/workItems/comments/{commentId} | Delete WorkItem comment
[**apiV2WorkItemsCommentsPost**](WorkItemsCommentsApi.md#apiV2WorkItemsCommentsPost) | **POST** /api/v2/workItems/comments | Create WorkItem comment
[**apiV2WorkItemsCommentsPut**](WorkItemsCommentsApi.md#apiV2WorkItemsCommentsPut) | **PUT** /api/v2/workItems/comments | Update WorkItem comment
[**apiV2WorkItemsIdCommentsGet**](WorkItemsCommentsApi.md#apiV2WorkItemsIdCommentsGet) | **GET** /api/v2/workItems/{id}/comments | Get WorkItem comments by Id or GlobalId



## apiV2WorkItemsCommentsCommentIdDelete

> apiV2WorkItemsCommentsCommentIdDelete(commentId)

Delete WorkItem comment

&lt;br&gt;Use case  &lt;br&gt;User sets comment identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System delete comment   &lt;br&gt;System returns success status code

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.WorkItemsCommentsApi();
let commentId = "commentId_example"; // String | 
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
 **commentId** | **String**|  | 

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

&lt;br&gt;Use case  &lt;br&gt;User sets comment properties (listed in request parameters)  &lt;br&gt;User runs method execution  &lt;br&gt;System creates comment   &lt;br&gt;System returns comment model (listed in response parameters)

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.WorkItemsCommentsApi();
let opts = {
  'workItemCommentPostModel': new testit_api_client.WorkItemCommentPostModel() // WorkItemCommentPostModel | 
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

Update WorkItem comment

&lt;br&gt;Use case  &lt;br&gt;User sets comment properties (listed in request parameters)  &lt;br&gt;User runs method execution  &lt;br&gt;System updates comment   &lt;br&gt;System returns success status code

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.WorkItemsCommentsApi();
let opts = {
  'workItemCommentPutModel': new testit_api_client.WorkItemCommentPutModel() // WorkItemCommentPutModel | 
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


## apiV2WorkItemsIdCommentsGet

> [WorkItemCommentModel] apiV2WorkItemsIdCommentsGet(id)

Get WorkItem comments by Id or GlobalId

&lt;br&gt;Use case  &lt;br&gt;User sets workitem identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System search comments by workitem identifier  &lt;br&gt;System returns comments 

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.WorkItemsCommentsApi();
let id = 3fa85f64-5717-4562-b3fc-2c963f66afa6; // String | WorkItem internal (guid format) or  global(integer format) identifier\"
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
 **id** | **String**| WorkItem internal (guid format) or  global(integer format) identifier\&quot; | 

### Return type

[**[WorkItemCommentModel]**](WorkItemCommentModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

