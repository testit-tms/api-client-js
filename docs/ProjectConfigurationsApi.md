# ProjectConfigurationsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getConfigurationsByProjectId**](ProjectConfigurationsApi.md#getConfigurationsByProjectId) | **GET** /api/v2/projects/{projectId}/configurations | Get project configurations |


<a name="getConfigurationsByProjectId"></a>
# **getConfigurationsByProjectId**
> List getConfigurationsByProjectId(projectId)

Get project configurations

     Use case   User sets project internal or global identifier   User runs method execution   System search project   System search all configurations related to project   System returns array of found configurations (listed in response model)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**| Project internal (UUID) or global (integer) identifier | [default to null] |

### Return type

[**List**](../Models/ConfigurationModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

