# ExternalIssuesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2ExternalIssuesSuggestionsPost**](ExternalIssuesApi.md#apiV2ExternalIssuesSuggestionsPost) | **POST** /api/v2/external-issues/suggestions | Returns list of suggestions from available external issues |


<a name="apiV2ExternalIssuesSuggestionsPost"></a>
# **apiV2ExternalIssuesSuggestionsPost**
> ExternalIssueApiFieldSuggestionReply apiV2ExternalIssuesSuggestionsPost(GetExternalIssueSuggestionsApiModel)

Returns list of suggestions from available external issues

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **GetExternalIssueSuggestionsApiModel** | [**GetExternalIssueSuggestionsApiModel**](../Models/GetExternalIssueSuggestionsApiModel.md)|  | [optional] |

### Return type

[**ExternalIssueApiFieldSuggestionReply**](../Models/ExternalIssueApiFieldSuggestionReply.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

