# TestitApiClient.UsersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2UsersExistsGet**](UsersApi.md#apiV2UsersExistsGet) | **GET** /api/v2/users/exists | 



## apiV2UsersExistsGet

> UserCustomNameValidationResponse apiV2UsersExistsGet(opts)



### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: PrivateToken
let PrivateToken = defaultClient.authentications['PrivateToken'];
PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//PrivateToken.apiKeyPrefix = 'Token';
// Configure API key authorization: Identity.Application
let Identity.Application = defaultClient.authentications['Identity.Application'];
Identity.Application.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Identity.Application.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.UsersApi();
let opts = {
  'userName': "userName_example" // String | 
};
apiInstance.apiV2UsersExistsGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userName** | **String**|  | [optional] 

### Return type

[**UserCustomNameValidationResponse**](UserCustomNameValidationResponse.md)

### Authorization

[PrivateToken](../README.md#PrivateToken), [Identity.Application](../README.md#Identity.Application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

