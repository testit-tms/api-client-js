# TestitApiClient.ProjectTestPlanAttributesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCustomAttributeTestPlanProjectRelations**](ProjectTestPlanAttributesApi.md#createCustomAttributeTestPlanProjectRelations) | **POST** /api/v2/projects/{projectId}/testPlans/attributes | Add attributes to project&#39;s test plans
[**deleteCustomAttributeTestPlanProjectRelations**](ProjectTestPlanAttributesApi.md#deleteCustomAttributeTestPlanProjectRelations) | **DELETE** /api/v2/projects/{projectId}/testPlans/attributes/{attributeId} | Delete attribute from project&#39;s test plans
[**getCustomAttributeTestPlanProjectRelations**](ProjectTestPlanAttributesApi.md#getCustomAttributeTestPlanProjectRelations) | **GET** /api/v2/projects/{projectId}/testPlans/attributes | Get project&#39;s test plan attributes
[**searchTestPlanAttributesInProject**](ProjectTestPlanAttributesApi.md#searchTestPlanAttributesInProject) | **POST** /api/v2/projects/{projectId}/testPlans/attributes/search | Search for attributes used in the project test plans
[**updateCustomAttributeTestPlanProjectRelations**](ProjectTestPlanAttributesApi.md#updateCustomAttributeTestPlanProjectRelations) | **PUT** /api/v2/projects/{projectId}/testPlans/attributes | Update attribute of project&#39;s test plans



## createCustomAttributeTestPlanProjectRelations

> createCustomAttributeTestPlanProjectRelations(projectId, opts)

Add attributes to project&#39;s test plans

 Use case  User sets project internal or global identifier and attributes identifiers  User runs method execution  System updates project and add attributes to project for test plans  System returns no content response

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectTestPlanAttributesApi();
let projectId = "projectId_example"; // String | Project internal (UUID) or global (integer) identifier
let opts = {
  'requestBody': ["null"] // [String] | 
};
apiInstance.createCustomAttributeTestPlanProjectRelations(projectId, opts, (error, data, response) => {
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
 **requestBody** | [**[String]**](String.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCustomAttributeTestPlanProjectRelations

> deleteCustomAttributeTestPlanProjectRelations(projectId, attributeId)

Delete attribute from project&#39;s test plans

 Use case  User sets project internal or global identifier and attribute identifier  User runs method execution  System updates project and delete attribute from project for test plans  System returns no content response

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectTestPlanAttributesApi();
let projectId = "projectId_example"; // String | Project internal (UUID) or global (integer) identifier
let attributeId = "attributeId_example"; // String | 
apiInstance.deleteCustomAttributeTestPlanProjectRelations(projectId, attributeId, (error, data, response) => {
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
 **attributeId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCustomAttributeTestPlanProjectRelations

> [CustomAttributeModel] getCustomAttributeTestPlanProjectRelations(projectId)

Get project&#39;s test plan attributes

 Use case  User runs method execution  System returns project for test plans attributes by project identifier

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectTestPlanAttributesApi();
let projectId = "projectId_example"; // String | Project internal (UUID) or global (integer) identifier
apiInstance.getCustomAttributeTestPlanProjectRelations(projectId, (error, data, response) => {
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
 **projectId** | **String**| Project internal (UUID) or global (integer) identifier | 

### Return type

[**[CustomAttributeModel]**](CustomAttributeModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchTestPlanAttributesInProject

> [CustomAttributeGetModel] searchTestPlanAttributesInProject(projectId, opts)

Search for attributes used in the project test plans

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectTestPlanAttributesApi();
let projectId = "projectId_example"; // String | Unique or global project ID
let opts = {
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example", // String | Value for searching
  'projectAttributesFilterModel': new TestitApiClient.ProjectAttributesFilterModel() // ProjectAttributesFilterModel | 
};
apiInstance.searchTestPlanAttributesInProject(projectId, opts, (error, data, response) => {
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
 **projectId** | **String**| Unique or global project ID | 
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 
 **projectAttributesFilterModel** | [**ProjectAttributesFilterModel**](ProjectAttributesFilterModel.md)|  | [optional] 

### Return type

[**[CustomAttributeGetModel]**](CustomAttributeGetModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCustomAttributeTestPlanProjectRelations

> updateCustomAttributeTestPlanProjectRelations(projectId, opts)

Update attribute of project&#39;s test plans

 Use case  User sets project internal or global identifier and attribute model  User runs method execution  System updates project and project attribute for test plan  System returns no content response

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectTestPlanAttributesApi();
let projectId = "projectId_example"; // String | Project internal (UUID) or global (integer) identifier
let opts = {
  'customAttributeTestPlanProjectRelationPutModel': new TestitApiClient.CustomAttributeTestPlanProjectRelationPutModel() // CustomAttributeTestPlanProjectRelationPutModel | 
};
apiInstance.updateCustomAttributeTestPlanProjectRelations(projectId, opts, (error, data, response) => {
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
 **customAttributeTestPlanProjectRelationPutModel** | [**CustomAttributeTestPlanProjectRelationPutModel**](CustomAttributeTestPlanProjectRelationPutModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

