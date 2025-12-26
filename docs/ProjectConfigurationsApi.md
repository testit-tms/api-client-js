# TestitApiClient.ProjectConfigurationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getConfigurationsByProjectId**](ProjectConfigurationsApi.md#getConfigurationsByProjectId) | **GET** /api/v2/projects/{projectId}/configurations | Get project configurations



## getConfigurationsByProjectId

> [ConfigurationModel] getConfigurationsByProjectId(projectId)

Get project configurations

 Use case  User sets project internal or global identifier  User runs method execution  System search project  System search all configurations related to project  System returns array of found configurations (listed in response model)

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectConfigurationsApi();
let projectId = "projectId_example"; // String | Project internal (UUID) or global (integer) identifier
apiInstance.getConfigurationsByProjectId(projectId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project internal (UUID) or global (integer) identifier | 

### Return type

[**[ConfigurationModel]**](ConfigurationModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

