# ProjectExportApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**export**](ProjectExportApi.md#export) | **POST** /api/v2/projects/{projectId}/export | Export project as JSON file |
| [**exportProjectJson**](ProjectExportApi.md#exportProjectJson) | **POST** /api/v2/projects/{projectId}/export/json | Export project as JSON file in background job |
| [**exportProjectWithTestPlansJson**](ProjectExportApi.md#exportProjectWithTestPlansJson) | **POST** /api/v2/projects/{projectId}/export/testPlans/json | Export project as JSON file with test plans in background job |
| [**exportProjectWithTestPlansZip**](ProjectExportApi.md#exportProjectWithTestPlansZip) | **POST** /api/v2/projects/{projectId}/export/testPlans/zip | Export project as Zip file with test plans in background job |
| [**exportProjectZip**](ProjectExportApi.md#exportProjectZip) | **POST** /api/v2/projects/{projectId}/export/zip | Export project as Zip file in background job |


<a name="export"></a>
# **export**
> File export(projectId, includeAttachments, ProjectExportQueryModel)

Export project as JSON file

    &lt;br&gt;This method exports the selected project or its part (sections, work items) to a &#x60;.json&#x60; file.  &lt;br&gt;In the request body, you can specify sections and test cases to be exported.  &lt;br&gt;Example of a request to export two sections and two test cases:  &lt;br&gt;    &#x60;&#x60;&#x60;              curl -X POST \&quot;http://{domain}.com/api/v2/projects/27a32ce6-d972-4ef8-bef5-51be4bf9e468/export\&quot; \\              -H \&quot;accept: application/json\&quot; -H \&quot;Authorization: PrivateToken {token}\&quot; -H \&quot;Content-Type: application/json-patch+json\&quot; \\              -d \&quot;{\\\&quot;sectionIds\\\&quot;:[\\\&quot;3fa85f64-5717-4562-b3fc-2c963f66afa6\\\&quot;,\\\&quot;9fa85f64-5717-4562-b3fc-2c963f66a000\\\&quot;],\\\&quot;workItemIds\\\&quot;:[\\\&quot;3fa85f64-5717-4562-b3fc-2c963f66afa6\\\&quot;,\\\&quot;90085f64-5717-4562-b3fc-2c963f66a000\\\&quot;]}\&quot;              &#x60;&#x60;&#x60;    &lt;br&gt;In the response, you get:  &lt;br&gt;              - A &#x60;.zip&#x60; file with attachments and a.json file if you enable attachments export.&lt;br /&gt;              - A &#x60;.json&#x60; file with the project if you do not enable attachments export.              

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**| Specifies the ID of the project you want to export. | [default to null] |
| **includeAttachments** | **Boolean**| Enables attachment export. | [optional] [default to false] |
| **ProjectExportQueryModel** | [**ProjectExportQueryModel**](../Models/ProjectExportQueryModel.md)|  | [optional] |

### Return type

**File**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="exportProjectJson"></a>
# **exportProjectJson**
> UUID exportProjectJson(projectId, time-Zone-Offset-In-Minutes, ProjectExportQueryModel)

Export project as JSON file in background job

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**| Project internal (UUID) or global (integer) identifier | [default to null] |
| **time-Zone-Offset-In-Minutes** | **Long**|  | [optional] [default to null] |
| **ProjectExportQueryModel** | [**ProjectExportQueryModel**](../Models/ProjectExportQueryModel.md)|  | [optional] |

### Return type

**UUID**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="exportProjectWithTestPlansJson"></a>
# **exportProjectWithTestPlansJson**
> UUID exportProjectWithTestPlansJson(projectId, time-Zone-Offset-In-Minutes, ProjectExportWithTestPlansPostModel)

Export project as JSON file with test plans in background job

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**| Project internal (UUID) or global (integer) identifier | [default to null] |
| **time-Zone-Offset-In-Minutes** | **Long**|  | [optional] [default to null] |
| **ProjectExportWithTestPlansPostModel** | [**ProjectExportWithTestPlansPostModel**](../Models/ProjectExportWithTestPlansPostModel.md)|  | [optional] |

### Return type

**UUID**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="exportProjectWithTestPlansZip"></a>
# **exportProjectWithTestPlansZip**
> UUID exportProjectWithTestPlansZip(projectId, time-Zone-Offset-In-Minutes, ProjectExportWithTestPlansPostModel)

Export project as Zip file with test plans in background job

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**| Project internal (UUID) or global (integer) identifier | [default to null] |
| **time-Zone-Offset-In-Minutes** | **Long**|  | [optional] [default to null] |
| **ProjectExportWithTestPlansPostModel** | [**ProjectExportWithTestPlansPostModel**](../Models/ProjectExportWithTestPlansPostModel.md)|  | [optional] |

### Return type

**UUID**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="exportProjectZip"></a>
# **exportProjectZip**
> UUID exportProjectZip(projectId, time-Zone-Offset-In-Minutes, ProjectExportQueryModel)

Export project as Zip file in background job

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**| Project internal (UUID) or global (integer) identifier | [default to null] |
| **time-Zone-Offset-In-Minutes** | **Long**|  | [optional] [default to null] |
| **ProjectExportQueryModel** | [**ProjectExportQueryModel**](../Models/ProjectExportQueryModel.md)|  | [optional] |

### Return type

**UUID**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

