# TestitApiClient.WorkflowsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2WorkflowsIdDelete**](WorkflowsApi.md#apiV2WorkflowsIdDelete) | **DELETE** /api/v2/workflows/{id} | 
[**apiV2WorkflowsIdGet**](WorkflowsApi.md#apiV2WorkflowsIdGet) | **GET** /api/v2/workflows/{id} | 
[**apiV2WorkflowsIdPatch**](WorkflowsApi.md#apiV2WorkflowsIdPatch) | **PATCH** /api/v2/workflows/{id} | 
[**apiV2WorkflowsIdProjectsSearchPost**](WorkflowsApi.md#apiV2WorkflowsIdProjectsSearchPost) | **POST** /api/v2/workflows/{id}/projects/search | 
[**apiV2WorkflowsIdPut**](WorkflowsApi.md#apiV2WorkflowsIdPut) | **PUT** /api/v2/workflows/{id} | 
[**apiV2WorkflowsNameNameExistsGet**](WorkflowsApi.md#apiV2WorkflowsNameNameExistsGet) | **GET** /api/v2/workflows/name/{name}/exists | 
[**apiV2WorkflowsPost**](WorkflowsApi.md#apiV2WorkflowsPost) | **POST** /api/v2/workflows | 
[**apiV2WorkflowsSearchPost**](WorkflowsApi.md#apiV2WorkflowsSearchPost) | **POST** /api/v2/workflows/search | 



## apiV2WorkflowsIdDelete

> apiV2WorkflowsIdDelete(id)



### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkflowsApi();
let id = "id_example"; // String | 
apiInstance.apiV2WorkflowsIdDelete(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2WorkflowsIdGet

> WorkflowApiResult apiV2WorkflowsIdGet(id)



### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkflowsApi();
let id = "id_example"; // String | 
apiInstance.apiV2WorkflowsIdGet(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**WorkflowApiResult**](WorkflowApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiV2WorkflowsIdPatch

> apiV2WorkflowsIdPatch(id, opts)



See &lt;a href&#x3D;\&quot;https://www.rfc-editor.org/rfc/rfc6902\&quot; target&#x3D;\&quot;_blank\&quot;&gt;RFC 6902: JavaScript Object Notation (JSON) Patch&lt;/a&gt; for details

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkflowsApi();
let id = "id_example"; // String | 
let opts = {
  'operation': [new TestitApiClient.Operation()] // [Operation] | 
};
apiInstance.apiV2WorkflowsIdPatch(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **operation** | [**[Operation]**](Operation.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: application/json


## apiV2WorkflowsIdProjectsSearchPost

> WorkflowProjectApiResultReply apiV2WorkflowsIdProjectsSearchPost(id, opts)



### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkflowsApi();
let id = "id_example"; // String | 
let opts = {
  'searchWorkflowProjectsApiModel': new TestitApiClient.SearchWorkflowProjectsApiModel() // SearchWorkflowProjectsApiModel | 
};
apiInstance.apiV2WorkflowsIdProjectsSearchPost(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **searchWorkflowProjectsApiModel** | [**SearchWorkflowProjectsApiModel**](SearchWorkflowProjectsApiModel.md)|  | [optional] 

### Return type

[**WorkflowProjectApiResultReply**](WorkflowProjectApiResultReply.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## apiV2WorkflowsIdPut

> apiV2WorkflowsIdPut(id, opts)



### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkflowsApi();
let id = "id_example"; // String | 
let opts = {
  'updateWorkflowApiModel': new TestitApiClient.UpdateWorkflowApiModel() // UpdateWorkflowApiModel | 
};
apiInstance.apiV2WorkflowsIdPut(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **updateWorkflowApiModel** | [**UpdateWorkflowApiModel**](UpdateWorkflowApiModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: application/json


## apiV2WorkflowsNameNameExistsGet

> WorkflowExistsByNameApiResult apiV2WorkflowsNameNameExistsGet(name)



### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkflowsApi();
let name = "name_example"; // String | 
apiInstance.apiV2WorkflowsNameNameExistsGet(name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 

### Return type

[**WorkflowExistsByNameApiResult**](WorkflowExistsByNameApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiV2WorkflowsPost

> WorkflowApiResult apiV2WorkflowsPost(opts)



### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkflowsApi();
let opts = {
  'createWorkflowApiModel': new TestitApiClient.CreateWorkflowApiModel() // CreateWorkflowApiModel | 
};
apiInstance.apiV2WorkflowsPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createWorkflowApiModel** | [**CreateWorkflowApiModel**](CreateWorkflowApiModel.md)|  | [optional] 

### Return type

[**WorkflowApiResult**](WorkflowApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json


## apiV2WorkflowsSearchPost

> WorkflowShortApiResultReply apiV2WorkflowsSearchPost(opts)



### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WorkflowsApi();
let opts = {
  'searchWorkflowsApiModel': new TestitApiClient.SearchWorkflowsApiModel() // SearchWorkflowsApiModel | 
};
apiInstance.apiV2WorkflowsSearchPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchWorkflowsApiModel** | [**SearchWorkflowsApiModel**](SearchWorkflowsApiModel.md)|  | [optional] 

### Return type

[**WorkflowShortApiResultReply**](WorkflowShortApiResultReply.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

