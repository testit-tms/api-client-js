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
// Configure API key authorization: PrivateToken
let PrivateToken = defaultClient.authentications['PrivateToken'];
PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//PrivateToken.apiKeyPrefix = 'Token';
// Configure API key authorization: Cookies
let Cookies = defaultClient.authentications['Cookies'];
Cookies.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Cookies.apiKeyPrefix = 'Token';

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

[PrivateToken](../README.md#PrivateToken), [Cookies](../README.md#Cookies)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

