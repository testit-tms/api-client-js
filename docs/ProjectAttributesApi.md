# TestitApiClient.ProjectAttributesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProjectsAttribute**](ProjectAttributesApi.md#createProjectsAttribute) | **POST** /api/v2/projects/{projectId}/attributes | Create project attribute
[**deleteProjectsAttribute**](ProjectAttributesApi.md#deleteProjectsAttribute) | **DELETE** /api/v2/projects/{projectId}/attributes/{attributeId} | Delete project attribute
[**getAttributeByProjectId**](ProjectAttributesApi.md#getAttributeByProjectId) | **GET** /api/v2/projects/{projectId}/attributes/{attributeId} | Get project attribute
[**getAttributesByProjectId**](ProjectAttributesApi.md#getAttributesByProjectId) | **GET** /api/v2/projects/{projectId}/attributes | Get project attributes
[**searchAttributesInProject**](ProjectAttributesApi.md#searchAttributesInProject) | **POST** /api/v2/projects/{projectId}/attributes/search | Search for attributes used in the project
[**updateProjectsAttribute**](ProjectAttributesApi.md#updateProjectsAttribute) | **PUT** /api/v2/projects/{projectId}/attributes | Edit attribute of the project



## createProjectsAttribute

> CustomAttributeModel createProjectsAttribute(projectId, opts)

Create project attribute

 Use case  User sets attribute parameters (listed in request example) and runs method execution  System search project  System creates attribute and relates it to the project  System returns project attribute properties (example listed in response parameters)

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectAttributesApi();
let projectId = "projectId_example"; // String | Project internal (UUID) or global (integer) identifier
let opts = {
  'customAttributePostModel': new TestitApiClient.CustomAttributePostModel() // CustomAttributePostModel | 
};
apiInstance.createProjectsAttribute(projectId, opts, (error, data, response) => {
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
 **customAttributePostModel** | [**CustomAttributePostModel**](CustomAttributePostModel.md)|  | [optional] 

### Return type

[**CustomAttributeModel**](CustomAttributeModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteProjectsAttribute

> deleteProjectsAttribute(projectId, attributeId)

Delete project attribute

 Use case  User sets project identifier and runs method execution  User sets attribute identifier  User runs method execution  System search project  System search and delete attribute  System returns no content response

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectAttributesApi();
let projectId = "projectId_example"; // String | Project internal (UUID) or global (integer) identifier
let attributeId = "attributeId_example"; // String | Project attribute internal (UUID)
apiInstance.deleteProjectsAttribute(projectId, attributeId, (error, data, response) => {
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
 **attributeId** | **String**| Project attribute internal (UUID) | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAttributeByProjectId

> CustomAttributeModel getAttributeByProjectId(projectId, attributeId)

Get project attribute

 Use case  User sets project internal or global identifier  User sets project attribute identifier  User runs method execution  System search project  System search project attribute  System returns project attribute (listed in response model)

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectAttributesApi();
let projectId = "projectId_example"; // String | Project internal (UUID) or global (integer) identifier
let attributeId = "attributeId_example"; // String | Project attribute internal (UUID) or global (integer) identifier
apiInstance.getAttributeByProjectId(projectId, attributeId, (error, data, response) => {
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
 **attributeId** | **String**| Project attribute internal (UUID) or global (integer) identifier | 

### Return type

[**CustomAttributeModel**](CustomAttributeModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAttributesByProjectId

> [CustomAttributeModel] getAttributesByProjectId(projectId, opts)

Get project attributes

 Use case  User sets project internal or global identifier  [Optional] User sets isDeleted field value  User runs method execution  System search project  [Optional] If User sets isDeleted field value as true, System search all deleted attributes related to project  [Optional] If User sets isDeleted field value as false, System search all attributes related to project which are not deleted  [Optional] If User did not set isDeleted field value, System search all attributes related to project  System returns array of found attributes (listed in response model)

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectAttributesApi();
let projectId = "projectId_example"; // String | Project internal (UUID) or global (integer) identifier
let opts = {
  'isDeleted': new TestitApiClient.DeletionState() // DeletionState | 
};
apiInstance.getAttributesByProjectId(projectId, opts, (error, data, response) => {
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
 **isDeleted** | [**DeletionState**](.md)|  | [optional] 

### Return type

[**[CustomAttributeModel]**](CustomAttributeModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchAttributesInProject

> [CustomAttributeGetModel] searchAttributesInProject(projectId, opts)

Search for attributes used in the project

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectAttributesApi();
let projectId = "projectId_example"; // String | Unique or global project ID
let opts = {
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example", // String | Value for searching
  'projectAttributesFilterModel': new TestitApiClient.ProjectAttributesFilterModel() // ProjectAttributesFilterModel | 
};
apiInstance.searchAttributesInProject(projectId, opts, (error, data, response) => {
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


## updateProjectsAttribute

> updateProjectsAttribute(projectId, opts)

Edit attribute of the project

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectAttributesApi();
let projectId = "projectId_example"; // String | Unique or global project ID
let opts = {
  'customAttributePutModel': new TestitApiClient.CustomAttributePutModel() // CustomAttributePutModel | 
};
apiInstance.updateProjectsAttribute(projectId, opts, (error, data, response) => {
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
 **projectId** | **String**| Unique or global project ID | 
 **customAttributePutModel** | [**CustomAttributePutModel**](CustomAttributePutModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

