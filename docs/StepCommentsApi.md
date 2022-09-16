# testit_api_client.StepCommentsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2StepCommentsIdGet**](StepCommentsApi.md#apiV2StepCommentsIdGet) | **GET** /api/v2/stepComments/{id} | Get StepComment by internal ID



## apiV2StepCommentsIdGet

> StepCommentModel apiV2StepCommentsIdGet(id)

Get StepComment by internal ID

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.StepCommentsApi();
let id = "id_example"; // String | StepComment internal (UUID) identifier
apiInstance.apiV2StepCommentsIdGet(id, (error, data, response) => {
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
 **id** | **String**| StepComment internal (UUID) identifier | 

### Return type

[**StepCommentModel**](StepCommentModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

