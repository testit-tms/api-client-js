# TestitApiClient.ProjectSettingsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2ProjectsProjectIdSettingsAutotestsPost**](ProjectSettingsApi.md#apiV2ProjectsProjectIdSettingsAutotestsPost) | **POST** /api/v2/projects/{projectId}/settings/autotests | Set autotest project settings.
[**getAutotestProjectSettings**](ProjectSettingsApi.md#getAutotestProjectSettings) | **GET** /api/v2/projects/{projectId}/settings/autotests | Get autotest project settings.



## apiV2ProjectsProjectIdSettingsAutotestsPost

> apiV2ProjectsProjectIdSettingsAutotestsPost(projectId, opts)

Set autotest project settings.

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectSettingsApi();
let projectId = "projectId_example"; // String | Internal (UUID) or global (integer) identifier
let opts = {
  'autoTestProjectSettingsApiModel': new TestitApiClient.AutoTestProjectSettingsApiModel() // AutoTestProjectSettingsApiModel | 
};
apiInstance.apiV2ProjectsProjectIdSettingsAutotestsPost(projectId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Internal (UUID) or global (integer) identifier | 
 **autoTestProjectSettingsApiModel** | [**AutoTestProjectSettingsApiModel**](AutoTestProjectSettingsApiModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAutotestProjectSettings

> AutoTestProjectSettingsApiResult getAutotestProjectSettings(projectId)

Get autotest project settings.

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectSettingsApi();
let projectId = "projectId_example"; // String | Internal (UUID) or global (integer) identifier
apiInstance.getAutotestProjectSettings(projectId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Internal (UUID) or global (integer) identifier | 

### Return type

[**AutoTestProjectSettingsApiResult**](AutoTestProjectSettingsApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

