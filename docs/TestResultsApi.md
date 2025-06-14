# TestResultsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2TestResultsExternalProjectsExternalProjectIdDefectsExternalFormsPost**](TestResultsApi.md#apiV2TestResultsExternalProjectsExternalProjectIdDefectsExternalFormsPost) | **POST** /api/v2/testResults/external-projects/{externalProjectId}/defects/external-forms |  |
| [**apiV2TestResultsExternalProjectsExternalProjectIdDefectsPost**](TestResultsApi.md#apiV2TestResultsExternalProjectsExternalProjectIdDefectsPost) | **POST** /api/v2/testResults/external-projects/{externalProjectId}/defects |  |
| [**apiV2TestResultsIdAggregatedGet**](TestResultsApi.md#apiV2TestResultsIdAggregatedGet) | **GET** /api/v2/testResults/{id}/aggregated | Get test result by ID aggregated with previous results |
| [**apiV2TestResultsIdAttachmentsAttachmentIdPut**](TestResultsApi.md#apiV2TestResultsIdAttachmentsAttachmentIdPut) | **PUT** /api/v2/testResults/{id}/attachments/{attachmentId} | Attach file to the test result |
| [**apiV2TestResultsIdAttachmentsInfoGet**](TestResultsApi.md#apiV2TestResultsIdAttachmentsInfoGet) | **GET** /api/v2/testResults/{id}/attachments/info | Get test result attachments meta-information |
| [**apiV2TestResultsIdGet**](TestResultsApi.md#apiV2TestResultsIdGet) | **GET** /api/v2/testResults/{id} | Get test result by ID |
| [**apiV2TestResultsIdPut**](TestResultsApi.md#apiV2TestResultsIdPut) | **PUT** /api/v2/testResults/{id} | Edit test result by ID |
| [**apiV2TestResultsIdRerunsGet**](TestResultsApi.md#apiV2TestResultsIdRerunsGet) | **GET** /api/v2/testResults/{id}/reruns | Get reruns |
| [**apiV2TestResultsSearchPost**](TestResultsApi.md#apiV2TestResultsSearchPost) | **POST** /api/v2/testResults/search | Search for test results |
| [**apiV2TestResultsStatisticsFilterPost**](TestResultsApi.md#apiV2TestResultsStatisticsFilterPost) | **POST** /api/v2/testResults/statistics/filter | Search for test results and extract statistics |
| [**createAttachment**](TestResultsApi.md#createAttachment) | **POST** /api/v2/testResults/{id}/attachments | Upload and link attachment to TestResult |
| [**deleteAttachment**](TestResultsApi.md#deleteAttachment) | **DELETE** /api/v2/testResults/{id}/attachments/{attachmentId} | Remove attachment and unlink from TestResult |
| [**downloadAttachment**](TestResultsApi.md#downloadAttachment) | **GET** /api/v2/testResults/{id}/attachments/{attachmentId} | Get attachment of TestResult |
| [**getAttachment**](TestResultsApi.md#getAttachment) | **GET** /api/v2/testResults/{id}/attachments/{attachmentId}/info | Get Metadata of TestResult&#39;s attachment |
| [**getAttachments**](TestResultsApi.md#getAttachments) | **GET** /api/v2/testResults/{id}/attachments | Get all attachments of TestResult |


<a name="apiV2TestResultsExternalProjectsExternalProjectIdDefectsExternalFormsPost"></a>
# **apiV2TestResultsExternalProjectsExternalProjectIdDefectsExternalFormsPost**
> GetExternalFormApiResult apiV2TestResultsExternalProjectsExternalProjectIdDefectsExternalFormsPost(externalProjectId, TestResultsSelectApiModel)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **externalProjectId** | **UUID**|  | [default to null] |
| **TestResultsSelectApiModel** | [**TestResultsSelectApiModel**](../Models/TestResultsSelectApiModel.md)|  | [optional] |

### Return type

[**GetExternalFormApiResult**](../Models/GetExternalFormApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2TestResultsExternalProjectsExternalProjectIdDefectsPost"></a>
# **apiV2TestResultsExternalProjectsExternalProjectIdDefectsPost**
> DefectApiModel apiV2TestResultsExternalProjectsExternalProjectIdDefectsPost(externalProjectId, CreateDefectApiModel)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **externalProjectId** | **UUID**|  | [default to null] |
| **CreateDefectApiModel** | [**CreateDefectApiModel**](../Models/CreateDefectApiModel.md)|  | [optional] |

### Return type

[**DefectApiModel**](../Models/DefectApiModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2TestResultsIdAggregatedGet"></a>
# **apiV2TestResultsIdAggregatedGet**
> TestResultResponse apiV2TestResultsIdAggregatedGet(id)

Get test result by ID aggregated with previous results

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test result unique ID | [default to null] |

### Return type

[**TestResultResponse**](../Models/TestResultResponse.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TestResultsIdAttachmentsAttachmentIdPut"></a>
# **apiV2TestResultsIdAttachmentsAttachmentIdPut**
> apiV2TestResultsIdAttachmentsAttachmentIdPut(id, attachmentId)

Attach file to the test result

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test result unique ID | [default to null] |
| **attachmentId** | **UUID**| Attachment unique ID | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TestResultsIdAttachmentsInfoGet"></a>
# **apiV2TestResultsIdAttachmentsInfoGet**
> List apiV2TestResultsIdAttachmentsInfoGet(id)

Get test result attachments meta-information

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test result unique ID | [default to null] |

### Return type

[**List**](../Models/AttachmentModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TestResultsIdGet"></a>
# **apiV2TestResultsIdGet**
> TestResultResponse apiV2TestResultsIdGet(id)

Get test result by ID

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test result unique ID | [default to null] |

### Return type

[**TestResultResponse**](../Models/TestResultResponse.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TestResultsIdPut"></a>
# **apiV2TestResultsIdPut**
> apiV2TestResultsIdPut(id, TestResultUpdateV2Request)

Edit test result by ID

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test result unique ID | [default to null] |
| **TestResultUpdateV2Request** | [**TestResultUpdateV2Request**](../Models/TestResultUpdateV2Request.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2TestResultsIdRerunsGet"></a>
# **apiV2TestResultsIdRerunsGet**
> RerunsModel apiV2TestResultsIdRerunsGet(id)

Get reruns

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test result unique ID | [default to null] |

### Return type

[**RerunsModel**](../Models/RerunsModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TestResultsSearchPost"></a>
# **apiV2TestResultsSearchPost**
> List apiV2TestResultsSearchPost(Skip, Take, OrderBy, SearchField, SearchValue, TestResultsFilterApiModel)

Search for test results

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **TestResultsFilterApiModel** | [**TestResultsFilterApiModel**](../Models/TestResultsFilterApiModel.md)|  | [optional] |

### Return type

[**List**](../Models/TestResultShortResponse.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2TestResultsStatisticsFilterPost"></a>
# **apiV2TestResultsStatisticsFilterPost**
> TestResultsStatisticsApiResult apiV2TestResultsStatisticsFilterPost(TestResultsFilterApiModel)

Search for test results and extract statistics

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **TestResultsFilterApiModel** | [**TestResultsFilterApiModel**](../Models/TestResultsFilterApiModel.md)|  | [optional] |

### Return type

[**TestResultsStatisticsApiResult**](../Models/TestResultsStatisticsApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createAttachment"></a>
# **createAttachment**
> createAttachment(id, file)

Upload and link attachment to TestResult

     Use case  User sets testResultId  User attaches a file  System creates attachment and links it to the test result  System returns attachment identifier

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test result internal identifier (guid format) | [default to null] |
| **file** | **File**| Select file | [optional] [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

<a name="deleteAttachment"></a>
# **deleteAttachment**
> deleteAttachment(id, attachmentId)

Remove attachment and unlink from TestResult

     Use case  User sets testResultId and attachmentId  User attaches a file  User runs method execution  System deletes attachment and unlinks it from the test result  System returns attachment identifier

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test result internal identifier (guid format) | [default to null] |
| **attachmentId** | **UUID**| Attachment internal identifier (guid format) | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="downloadAttachment"></a>
# **downloadAttachment**
> downloadAttachment(attachmentId, id, width, height, resizeType, backgroundColor, preview)

Get attachment of TestResult

     Use case  User sets attachmentId and testResultId  [Optional] User sets resize configuration  User runs method execution  System search attachments by the attachmentId and the testResultId  [Optional] If resize configuration is set, System resizes the attachment according to the resize                     configuration  [Optional] Otherwise, System does not resize the attachment  System returns attachment as a file

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **attachmentId** | **UUID**| Attachment internal identifier (guid format) | [default to null] |
| **id** | **UUID**| Test result internal identifier (guid format) | [default to null] |
| **width** | **Integer**| Width of the result image | [optional] [default to null] |
| **height** | **Integer**| Height of the result image | [optional] [default to null] |
| **resizeType** | [**ImageResizeType**](../Models/.md)| Type of resizing to apply to the result image | [optional] [default to null] [enum: Crop, AddBackgroundStripes] |
| **backgroundColor** | **String**| Color of the background if the &#x60;resizeType&#x60; is &#x60;AddBackgroundStripes&#x60; | [optional] [default to null] |
| **preview** | **Boolean**| If image must be converted to a preview (lower quality, no animation) | [optional] [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAttachment"></a>
# **getAttachment**
> AttachmentModel getAttachment(id, attachmentId)

Get Metadata of TestResult&#39;s attachment

     Use case  User sets attachmentId and testResultId  User runs method execution  System search attachment by the attachmentId and the testResultId  System returns attachment data

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test result internal identifier (guid format) | [default to null] |
| **attachmentId** | **UUID**| Attachment internal identifier (guid format) | [default to null] |

### Return type

[**AttachmentModel**](../Models/AttachmentModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAttachments"></a>
# **getAttachments**
> List getAttachments(id)

Get all attachments of TestResult

     Use case  User sets testResultId  User runs method execution  System search all attachments of the test result  System returns attachments enumeration

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test result internal identifier (guid format) | [default to null] |

### Return type

[**List**](../Models/AttachmentModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

