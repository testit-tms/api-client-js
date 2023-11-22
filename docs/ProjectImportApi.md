# ProjectImportApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**backgroundImportToExistingProject**](ProjectImportApi.md#backgroundImportToExistingProject) | **POST** /api/v2/projects/{projectId}/import/json | Import project from JSON file into existing project in background job |
| [**backgroundImportZipToExistingProject**](ProjectImportApi.md#backgroundImportZipToExistingProject) | **POST** /api/v2/projects/{projectId}/import/zip | Import project from Zip file into existing project in background job |
| [**importToExistingProject**](ProjectImportApi.md#importToExistingProject) | **POST** /api/v2/projects/{projectId}/import | Import project from JSON file into existing project |


<a name="backgroundImportToExistingProject"></a>
# **backgroundImportToExistingProject**
> UUID backgroundImportToExistingProject(projectId, file)

Import project from JSON file into existing project in background job

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**| Project internal (UUID) or global (integer) identifier | [default to null] |
| **file** | **File**| Select file | [optional] [default to null] |

### Return type

**UUID**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

<a name="backgroundImportZipToExistingProject"></a>
# **backgroundImportZipToExistingProject**
> UUID backgroundImportZipToExistingProject(projectId, file)

Import project from Zip file into existing project in background job

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**| Project internal (UUID) or global (integer) identifier | [default to null] |
| **file** | **File**| Select file | [optional] [default to null] |

### Return type

**UUID**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

<a name="importToExistingProject"></a>
# **importToExistingProject**
> importToExistingProject(projectId, includeAttachments, file)

Import project from JSON file into existing project

    &lt;br&gt;Use case  &lt;br&gt;User attaches project as json file taken from export or export-by-testPlans method  &lt;br&gt;User runs method execution  &lt;br&gt;System updates project  &lt;br&gt;System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**| Project internal (UUID) or global (integer) identifier | [default to null] |
| **includeAttachments** | **Boolean**|  | [optional] [default to null] |
| **file** | **File**| Select file | [optional] [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

