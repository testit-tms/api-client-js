# ProjectExternalServicesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2ProjectsIdExternalServicesExternalServiceIdDelete**](ProjectExternalServicesApi.md#apiV2ProjectsIdExternalServicesExternalServiceIdDelete) | **DELETE** /api/v2/projects/{id}/external-services/{externalServiceId} | Disable an external service |
| [**apiV2ProjectsIdExternalServicesExternalServiceIdGet**](ProjectExternalServicesApi.md#apiV2ProjectsIdExternalServicesExternalServiceIdGet) | **GET** /api/v2/projects/{id}/external-services/{externalServiceId} | Retrieves settings of an external service |
| [**apiV2ProjectsIdExternalServicesExternalServiceIdPatch**](ProjectExternalServicesApi.md#apiV2ProjectsIdExternalServicesExternalServiceIdPatch) | **PATCH** /api/v2/projects/{id}/external-services/{externalServiceId} | Replaces one active external service with another |
| [**apiV2ProjectsIdExternalServicesExternalServiceIdPut**](ProjectExternalServicesApi.md#apiV2ProjectsIdExternalServicesExternalServiceIdPut) | **PUT** /api/v2/projects/{id}/external-services/{externalServiceId} | Enable an external service |
| [**apiV2ProjectsIdExternalServicesGet**](ProjectExternalServicesApi.md#apiV2ProjectsIdExternalServicesGet) | **GET** /api/v2/projects/{id}/external-services | Retrieves information about external services, including their integration status (enabled or not) |
| [**apiV2ProjectsIdExternalServicesIssuesSuggestionsPost**](ProjectExternalServicesApi.md#apiV2ProjectsIdExternalServicesIssuesSuggestionsPost) | **POST** /api/v2/projects/{id}/external-services/issues/suggestions | Returns list of suggestions from available external issues |


<a name="apiV2ProjectsIdExternalServicesExternalServiceIdDelete"></a>
# **apiV2ProjectsIdExternalServicesExternalServiceIdDelete**
> apiV2ProjectsIdExternalServicesExternalServiceIdDelete(id, externalServiceId)

Disable an external service

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Project ID | [default to null] |
| **externalServiceId** | **UUID**| External service ID | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2ProjectsIdExternalServicesExternalServiceIdGet"></a>
# **apiV2ProjectsIdExternalServicesExternalServiceIdGet**
> ProjectExternalServiceSettingsApiResult apiV2ProjectsIdExternalServicesExternalServiceIdGet(id, externalServiceId)

Retrieves settings of an external service

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Project ID | [default to null] |
| **externalServiceId** | **UUID**| External service ID | [default to null] |

### Return type

[**ProjectExternalServiceSettingsApiResult**](../Models/ProjectExternalServiceSettingsApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2ProjectsIdExternalServicesExternalServiceIdPatch"></a>
# **apiV2ProjectsIdExternalServicesExternalServiceIdPatch**
> apiV2ProjectsIdExternalServicesExternalServiceIdPatch(id, externalServiceId, ReplaceProjectExternalServiceApiModel)

Replaces one active external service with another

    See &lt;a href&#x3D;\&quot;https://www.rfc-editor.org/rfc/rfc6902\&quot; target&#x3D;\&quot;_blank\&quot;&gt;RFC 6902: JavaScript Object Notation (JSON) Patch&lt;/a&gt; for details

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Project ID | [default to null] |
| **externalServiceId** | **UUID**| External service ID | [default to null] |
| **ReplaceProjectExternalServiceApiModel** | [**ReplaceProjectExternalServiceApiModel**](../Models/ReplaceProjectExternalServiceApiModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ProjectsIdExternalServicesExternalServiceIdPut"></a>
# **apiV2ProjectsIdExternalServicesExternalServiceIdPut**
> apiV2ProjectsIdExternalServicesExternalServiceIdPut(id, externalServiceId, EnableProjectExternalServiceApiModel)

Enable an external service

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Project ID | [default to null] |
| **externalServiceId** | **UUID**| External service ID | [default to null] |
| **EnableProjectExternalServiceApiModel** | [**EnableProjectExternalServiceApiModel**](../Models/EnableProjectExternalServiceApiModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ProjectsIdExternalServicesGet"></a>
# **apiV2ProjectsIdExternalServicesGet**
> ProjectExternalServicesApiResult apiV2ProjectsIdExternalServicesGet(id)

Retrieves information about external services, including their integration status (enabled or not)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Project ID | [default to null] |

### Return type

[**ProjectExternalServicesApiResult**](../Models/ProjectExternalServicesApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2ProjectsIdExternalServicesIssuesSuggestionsPost"></a>
# **apiV2ProjectsIdExternalServicesIssuesSuggestionsPost**
> ExternalIssueApiFieldSuggestionReply apiV2ProjectsIdExternalServicesIssuesSuggestionsPost(id, GetExternalIssueSuggestionsApiModel)

Returns list of suggestions from available external issues

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Project ID | [default to null] |
| **GetExternalIssueSuggestionsApiModel** | [**GetExternalIssueSuggestionsApiModel**](../Models/GetExternalIssueSuggestionsApiModel.md)|  | [optional] |

### Return type

[**ExternalIssueApiFieldSuggestionReply**](../Models/ExternalIssueApiFieldSuggestionReply.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

