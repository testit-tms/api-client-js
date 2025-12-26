# TestitApiClient.SearchApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2SearchGlobalSearchPost**](SearchApi.md#apiV2SearchGlobalSearchPost) | **POST** /api/v2/search/globalSearch | 



## apiV2SearchGlobalSearchPost

> GlobalSearchResponse apiV2SearchGlobalSearchPost(opts)



### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.SearchApi();
let opts = {
  'globalSearchRequest': new TestitApiClient.GlobalSearchRequest() // GlobalSearchRequest | 
};
apiInstance.apiV2SearchGlobalSearchPost(opts, (error, data, response) => {
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
 **globalSearchRequest** | [**GlobalSearchRequest**](GlobalSearchRequest.md)|  | [optional] 

### Return type

[**GlobalSearchResponse**](GlobalSearchResponse.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

