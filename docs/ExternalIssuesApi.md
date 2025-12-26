# TestitApiClient.ExternalIssuesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2ExternalIssuesSuggestionsPost**](ExternalIssuesApi.md#apiV2ExternalIssuesSuggestionsPost) | **POST** /api/v2/external-issues/suggestions | Returns list of suggestions from available external issues



## apiV2ExternalIssuesSuggestionsPost

> ExternalIssueApiFieldSuggestionReply apiV2ExternalIssuesSuggestionsPost(opts)

Returns list of suggestions from available external issues

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

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

[**ExternalIssueApiFieldSuggestionReply**](ExternalIssueApiFieldSuggestionReply.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

