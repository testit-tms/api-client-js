# TestitApiClient.ProjectAttributeTemplatesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2ProjectsProjectIdAttributesTemplatesSearchPost**](ProjectAttributeTemplatesApi.md#apiV2ProjectsProjectIdAttributesTemplatesSearchPost) | **POST** /api/v2/projects/{projectId}/attributes/templates/search | Search for custom attributes templates
[**apiV2ProjectsProjectIdAttributesTemplatesTemplateIdDelete**](ProjectAttributeTemplatesApi.md#apiV2ProjectsProjectIdAttributesTemplatesTemplateIdDelete) | **DELETE** /api/v2/projects/{projectId}/attributes/templates/{templateId} | Delete CustomAttributeTemplate from Project
[**apiV2ProjectsProjectIdAttributesTemplatesTemplateIdPost**](ProjectAttributeTemplatesApi.md#apiV2ProjectsProjectIdAttributesTemplatesTemplateIdPost) | **POST** /api/v2/projects/{projectId}/attributes/templates/{templateId} | Add CustomAttributeTemplate to Project



## apiV2ProjectsProjectIdAttributesTemplatesSearchPost

> [ProjectCustomAttributeTemplateGetModel] apiV2ProjectsProjectIdAttributesTemplatesSearchPost(projectId, opts)

Search for custom attributes templates

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectAttributeTemplatesApi();
let projectId = "projectId_example"; // String | Internal (UUID) or global (integer) identifier
let opts = {
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example", // String | Value for searching
  'projectCustomAttributesTemplatesFilterModel': new TestitApiClient.ProjectCustomAttributesTemplatesFilterModel() // ProjectCustomAttributesTemplatesFilterModel | 
};
apiInstance.apiV2ProjectsProjectIdAttributesTemplatesSearchPost(projectId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Internal (UUID) or global (integer) identifier | 
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 
 **projectCustomAttributesTemplatesFilterModel** | [**ProjectCustomAttributesTemplatesFilterModel**](ProjectCustomAttributesTemplatesFilterModel.md)|  | [optional] 

### Return type

[**[ProjectCustomAttributeTemplateGetModel]**](ProjectCustomAttributeTemplateGetModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2ProjectsProjectIdAttributesTemplatesTemplateIdDelete

> apiV2ProjectsProjectIdAttributesTemplatesTemplateIdDelete(projectId, templateId)

Delete CustomAttributeTemplate from Project

 Use case  User sets project internal or global identifier  User sets attribute template internal identifier  User runs method execution  System delete attribute template from project

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectAttributeTemplatesApi();
let projectId = "projectId_example"; // String | Project internal (UUID) or global (integer) identifier
let templateId = "templateId_example"; // String | CustomAttributeTemplate internal (UUID) identifier
apiInstance.apiV2ProjectsProjectIdAttributesTemplatesTemplateIdDelete(projectId, templateId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project internal (UUID) or global (integer) identifier | 
 **templateId** | **String**| CustomAttributeTemplate internal (UUID) identifier | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ProjectsProjectIdAttributesTemplatesTemplateIdPost

> apiV2ProjectsProjectIdAttributesTemplatesTemplateIdPost(projectId, templateId)

Add CustomAttributeTemplate to Project

 Use case  User sets project internal or global identifier  User sets attribute template internal identifier  User runs method execution  System add attribute template to project

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectAttributeTemplatesApi();
let projectId = "projectId_example"; // String | Project internal (UUID) or global (integer) identifier
let templateId = "templateId_example"; // String | CustomAttributeTemplate internal (UUID) identifier
apiInstance.apiV2ProjectsProjectIdAttributesTemplatesTemplateIdPost(projectId, templateId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project internal (UUID) or global (integer) identifier | 
 **templateId** | **String**| CustomAttributeTemplate internal (UUID) identifier | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

