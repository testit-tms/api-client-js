# TestitApiClient.ExternalIssuesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2ExternalIssuesSuggestionsPost**](ExternalIssuesApi.md#apiV2ExternalIssuesSuggestionsPost) | **POST** /api/v2/external-issues/suggestions | Returns list of suggestions from available external issues



## apiV2ExternalIssuesSuggestionsPost

> ExternalIssueApiFieldSuggestionIReply apiV2ExternalIssuesSuggestionsPost(opts)

Returns list of suggestions from available external issues

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

let apiInstance = new TestitApiClient.ExternalIssuesApi();
let opts = {
  'getExternalIssueSuggestionsApiModel': new TestitApiClient.GetExternalIssueSuggestionsApiModel() // GetExternalIssueSuggestionsApiModel | 
};
apiInstance.apiV2ExternalIssuesSuggestionsPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getExternalIssueSuggestionsApiModel** | [**GetExternalIssueSuggestionsApiModel**](GetExternalIssueSuggestionsApiModel.md)|  | [optional] 

### Return type

[**ExternalIssueApiFieldSuggestionIReply**](ExternalIssueApiFieldSuggestionIReply.md)

### Authorization

[PrivateToken](../README.md#PrivateToken), [Cookies](../README.md#Cookies)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

