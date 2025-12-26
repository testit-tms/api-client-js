# TestitApiClient.TestResultsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2TestResultsExternalProjectsExternalProjectIdDefectsExternalFormsPost**](TestResultsApi.md#apiV2TestResultsExternalProjectsExternalProjectIdDefectsExternalFormsPost) | **POST** /api/v2/testResults/external-projects/{externalProjectId}/defects/external-forms | 
[**apiV2TestResultsExternalProjectsExternalProjectIdDefectsPost**](TestResultsApi.md#apiV2TestResultsExternalProjectsExternalProjectIdDefectsPost) | **POST** /api/v2/testResults/external-projects/{externalProjectId}/defects | 
[**apiV2TestResultsIdAggregatedGet**](TestResultsApi.md#apiV2TestResultsIdAggregatedGet) | **GET** /api/v2/testResults/{id}/aggregated | Get test result by ID aggregated with previous results
[**apiV2TestResultsIdAttachmentsAttachmentIdPut**](TestResultsApi.md#apiV2TestResultsIdAttachmentsAttachmentIdPut) | **PUT** /api/v2/testResults/{id}/attachments/{attachmentId} | Attach file to the test result
[**apiV2TestResultsIdAttachmentsInfoGet**](TestResultsApi.md#apiV2TestResultsIdAttachmentsInfoGet) | **GET** /api/v2/testResults/{id}/attachments/info | Get test result attachments meta-information
[**apiV2TestResultsIdGet**](TestResultsApi.md#apiV2TestResultsIdGet) | **GET** /api/v2/testResults/{id} | Get test result by ID
[**apiV2TestResultsIdPut**](TestResultsApi.md#apiV2TestResultsIdPut) | **PUT** /api/v2/testResults/{id} | Edit test result by ID
[**apiV2TestResultsIdRerunsGet**](TestResultsApi.md#apiV2TestResultsIdRerunsGet) | **GET** /api/v2/testResults/{id}/reruns | Get reruns
[**apiV2TestResultsSearchPost**](TestResultsApi.md#apiV2TestResultsSearchPost) | **POST** /api/v2/testResults/search | Search for test results
[**apiV2TestResultsStatisticsFilterPost**](TestResultsApi.md#apiV2TestResultsStatisticsFilterPost) | **POST** /api/v2/testResults/statistics/filter | Search for test results and extract statistics
[**createAttachment**](TestResultsApi.md#createAttachment) | **POST** /api/v2/testResults/{id}/attachments | Upload and link attachment to TestResult
[**deleteAttachment**](TestResultsApi.md#deleteAttachment) | **DELETE** /api/v2/testResults/{id}/attachments/{attachmentId} | Remove attachment and unlink from TestResult
[**downloadAttachment**](TestResultsApi.md#downloadAttachment) | **GET** /api/v2/testResults/{id}/attachments/{attachmentId} | Get attachment of TestResult
[**getAttachment**](TestResultsApi.md#getAttachment) | **GET** /api/v2/testResults/{id}/attachments/{attachmentId}/info | Get Metadata of TestResult&#39;s attachment
[**getAttachments**](TestResultsApi.md#getAttachments) | **GET** /api/v2/testResults/{id}/attachments | Get all attachments of TestResult



## apiV2TestResultsExternalProjectsExternalProjectIdDefectsExternalFormsPost

> GetExternalFormApiResult apiV2TestResultsExternalProjectsExternalProjectIdDefectsExternalFormsPost(externalProjectId, opts)



### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestResultsApi();
let externalProjectId = "externalProjectId_example"; // String | 
let opts = {
  'testResultsSelectApiModel': new TestitApiClient.TestResultsSelectApiModel() // TestResultsSelectApiModel | 
};
apiInstance.apiV2TestResultsExternalProjectsExternalProjectIdDefectsExternalFormsPost(externalProjectId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalProjectId** | **String**|  | 
 **testResultsSelectApiModel** | [**TestResultsSelectApiModel**](TestResultsSelectApiModel.md)|  | [optional] 

### Return type

[**GetExternalFormApiResult**](GetExternalFormApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2TestResultsExternalProjectsExternalProjectIdDefectsPost

> DefectApiModel apiV2TestResultsExternalProjectsExternalProjectIdDefectsPost(externalProjectId, opts)



### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestResultsApi();
let externalProjectId = "externalProjectId_example"; // String | 
let opts = {
  'createDefectApiModel': new TestitApiClient.CreateDefectApiModel() // CreateDefectApiModel | 
};
apiInstance.apiV2TestResultsExternalProjectsExternalProjectIdDefectsPost(externalProjectId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalProjectId** | **String**|  | 
 **createDefectApiModel** | [**CreateDefectApiModel**](CreateDefectApiModel.md)|  | [optional] 

### Return type

[**DefectApiModel**](DefectApiModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2TestResultsIdAggregatedGet

> TestResultResponse apiV2TestResultsIdAggregatedGet(id)

Get test result by ID aggregated with previous results

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestResultsApi();
let id = "id_example"; // String | Test result unique ID
apiInstance.apiV2TestResultsIdAggregatedGet(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Test result unique ID | 

### Return type

[**TestResultResponse**](TestResultResponse.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2TestResultsIdAttachmentsAttachmentIdPut

> apiV2TestResultsIdAttachmentsAttachmentIdPut(id, attachmentId)

Attach file to the test result

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestResultsApi();
let id = "id_example"; // String | Test result unique ID
let attachmentId = "attachmentId_example"; // String | Attachment unique ID
apiInstance.apiV2TestResultsIdAttachmentsAttachmentIdPut(id, attachmentId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Test result unique ID | 
 **attachmentId** | **String**| Attachment unique ID | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2TestResultsIdAttachmentsInfoGet

> [AttachmentApiResult] apiV2TestResultsIdAttachmentsInfoGet(id)

Get test result attachments meta-information

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestResultsApi();
let id = "id_example"; // String | Test result unique ID
apiInstance.apiV2TestResultsIdAttachmentsInfoGet(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Test result unique ID | 

### Return type

[**[AttachmentApiResult]**](AttachmentApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2TestResultsIdGet

> TestResultResponse apiV2TestResultsIdGet(id)

Get test result by ID

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestResultsApi();
let id = "id_example"; // String | Test result unique ID
apiInstance.apiV2TestResultsIdGet(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Test result unique ID | 

### Return type

[**TestResultResponse**](TestResultResponse.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2TestResultsIdPut

> apiV2TestResultsIdPut(id, opts)

Edit test result by ID

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestResultsApi();
let id = "id_example"; // String | Test result unique ID
let opts = {
  'testResultUpdateV2Request': new TestitApiClient.TestResultUpdateV2Request() // TestResultUpdateV2Request | 
};
apiInstance.apiV2TestResultsIdPut(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Test result unique ID | 
 **testResultUpdateV2Request** | [**TestResultUpdateV2Request**](TestResultUpdateV2Request.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2TestResultsIdRerunsGet

> RerunsModel apiV2TestResultsIdRerunsGet(id)

Get reruns

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestResultsApi();
let id = "id_example"; // String | Test result unique ID
apiInstance.apiV2TestResultsIdRerunsGet(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Test result unique ID | 

### Return type

[**RerunsModel**](RerunsModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2TestResultsSearchPost

> [TestResultShortResponse] apiV2TestResultsSearchPost(opts)

Search for test results

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestResultsApi();
let opts = {
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example", // String | Value for searching
  'testResultsFilterApiModel': new TestitApiClient.TestResultsFilterApiModel() // TestResultsFilterApiModel | 
};
apiInstance.apiV2TestResultsSearchPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 
 **testResultsFilterApiModel** | [**TestResultsFilterApiModel**](TestResultsFilterApiModel.md)|  | [optional] 

### Return type

[**[TestResultShortResponse]**](TestResultShortResponse.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2TestResultsStatisticsFilterPost

> TestResultsStatisticsApiResult apiV2TestResultsStatisticsFilterPost(opts)

Search for test results and extract statistics

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestResultsApi();
let opts = {
  'testResultsFilterApiModel': new TestitApiClient.TestResultsFilterApiModel() // TestResultsFilterApiModel | 
};
apiInstance.apiV2TestResultsStatisticsFilterPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **testResultsFilterApiModel** | [**TestResultsFilterApiModel**](TestResultsFilterApiModel.md)|  | [optional] 

### Return type

[**TestResultsStatisticsApiResult**](TestResultsStatisticsApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAttachment

> createAttachment(id, opts)

Upload and link attachment to TestResult

 Use case  User sets testResultId  User attaches a file  System creates attachment and links it to the test result  System returns attachment identifier

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestResultsApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test result internal identifier (guid format)
let opts = {
  'file': "/path/to/file" // File | Select file
};
apiInstance.createAttachment(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Test result internal identifier (guid format) | 
 **file** | **File**| Select file | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## deleteAttachment

> deleteAttachment(id, attachmentId)

Remove attachment and unlink from TestResult

 Use case  User sets testResultId and attachmentId  User attaches a file  User runs method execution  System deletes attachment and unlinks it from the test result  System returns attachment identifier

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestResultsApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test result internal identifier (guid format)
let attachmentId = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Attachment internal identifier (guid format)
apiInstance.deleteAttachment(id, attachmentId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Test result internal identifier (guid format) | 
 **attachmentId** | **String**| Attachment internal identifier (guid format) | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## downloadAttachment

> downloadAttachment(attachmentId, id, opts)

Get attachment of TestResult

 Use case  User sets attachmentId and testResultId  [Optional] User sets resize configuration  User runs method execution  System search attachments by the attachmentId and the testResultId  [Optional] If resize configuration is set, System resizes the attachment according to the resize                     configuration  [Optional] Otherwise, System does not resize the attachment  System returns attachment as a file

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestResultsApi();
let attachmentId = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Attachment internal identifier (guid format)
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test result internal identifier (guid format)
let opts = {
  'width': 56, // Number | Width of the result image
  'height': 56, // Number | Height of the result image
  'resizeType': new TestitApiClient.ImageResizeType(), // ImageResizeType | Type of resizing to apply to the result image
  'backgroundColor': "backgroundColor_example", // String | Color of the background if the `resizeType` is `AddBackgroundStripes`
  'preview': true // Boolean | If image must be converted to a preview (lower quality, no animation)
};
apiInstance.downloadAttachment(attachmentId, id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attachmentId** | **String**| Attachment internal identifier (guid format) | 
 **id** | **String**| Test result internal identifier (guid format) | 
 **width** | **Number**| Width of the result image | [optional] 
 **height** | **Number**| Height of the result image | [optional] 
 **resizeType** | [**ImageResizeType**](.md)| Type of resizing to apply to the result image | [optional] 
 **backgroundColor** | **String**| Color of the background if the &#x60;resizeType&#x60; is &#x60;AddBackgroundStripes&#x60; | [optional] 
 **preview** | **Boolean**| If image must be converted to a preview (lower quality, no animation) | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAttachment

> AttachmentApiResult getAttachment(id, attachmentId)

Get Metadata of TestResult&#39;s attachment

 Use case  User sets attachmentId and testResultId  User runs method execution  System search attachment by the attachmentId and the testResultId  System returns attachment data

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestResultsApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test result internal identifier (guid format)
let attachmentId = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Attachment internal identifier (guid format)
apiInstance.getAttachment(id, attachmentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Test result internal identifier (guid format) | 
 **attachmentId** | **String**| Attachment internal identifier (guid format) | 

### Return type

[**AttachmentApiResult**](AttachmentApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAttachments

> [AttachmentApiResult] getAttachments(id)

Get all attachments of TestResult

 Use case  User sets testResultId  User runs method execution  System search all attachments of the test result  System returns attachments enumeration

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.TestResultsApi();
let id = "3fa85f64-5717-4562-b3fc-2c963f66afa6"; // String | Test result internal identifier (guid format)
apiInstance.getAttachments(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Test result internal identifier (guid format) | 

### Return type

[**[AttachmentApiResult]**](AttachmentApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

