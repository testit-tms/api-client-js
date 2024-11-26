# ProjectSettingsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2ProjectsProjectIdSettingsAutotestsPost**](ProjectSettingsApi.md#apiV2ProjectsProjectIdSettingsAutotestsPost) | **POST** /api/v2/projects/{projectId}/settings/autotests | Set autotest project settings. |
| [**getAutotestProjectSettings**](ProjectSettingsApi.md#getAutotestProjectSettings) | **GET** /api/v2/projects/{projectId}/settings/autotests | Get autotest project settings. |


<a name="apiV2ProjectsProjectIdSettingsAutotestsPost"></a>
# **apiV2ProjectsProjectIdSettingsAutotestsPost**
> apiV2ProjectsProjectIdSettingsAutotestsPost(projectId, AutoTestProjectSettingsPostModel)

Set autotest project settings.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**|  | [default to null] |
| **AutoTestProjectSettingsPostModel** | [**AutoTestProjectSettingsPostModel**](../Models/AutoTestProjectSettingsPostModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getAutotestProjectSettings"></a>
# **getAutotestProjectSettings**
> AutoTestProjectSettingsGetModel getAutotestProjectSettings(projectId)

Get autotest project settings.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**|  | [default to null] |

### Return type

[**AutoTestProjectSettingsGetModel**](../Models/AutoTestProjectSettingsGetModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

