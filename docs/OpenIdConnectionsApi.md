# TestitApiClient.OpenIdConnectionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2OpenidConnectionsGet**](OpenIdConnectionsApi.md#apiV2OpenidConnectionsGet) | **GET** /api/v2/openid-connections | 



## apiV2OpenidConnectionsGet

> [OpenIdConnectionClientShortModel] apiV2OpenidConnectionsGet()



### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.OpenIdConnectionsApi();
apiInstance.apiV2OpenidConnectionsGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[OpenIdConnectionClientShortModel]**](OpenIdConnectionClientShortModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

