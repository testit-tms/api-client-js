# TestitApiClient.ProjectFailureCategoriesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2ProjectsProjectIdAutotestsFailureCategoriesGroupingSearchPost**](ProjectFailureCategoriesApi.md#apiV2ProjectsProjectIdAutotestsFailureCategoriesGroupingSearchPost) | **POST** /api/v2/projects/{projectId}/autotests/failure-categories/grouping-search | Get failure categories with support for filtering, sorting and grouping
[**apiV2ProjectsProjectIdAutotestsFailureCategoriesIdDelete**](ProjectFailureCategoriesApi.md#apiV2ProjectsProjectIdAutotestsFailureCategoriesIdDelete) | **DELETE** /api/v2/projects/{projectId}/autotests/failure-categories/{id} | Delete failure category
[**apiV2ProjectsProjectIdAutotestsFailureCategoriesIdGet**](ProjectFailureCategoriesApi.md#apiV2ProjectsProjectIdAutotestsFailureCategoriesIdGet) | **GET** /api/v2/projects/{projectId}/autotests/failure-categories/{id} | Get failure category by ID
[**apiV2ProjectsProjectIdAutotestsFailureCategoriesPost**](ProjectFailureCategoriesApi.md#apiV2ProjectsProjectIdAutotestsFailureCategoriesPost) | **POST** /api/v2/projects/{projectId}/autotests/failure-categories | Create failure category
[**apiV2ProjectsProjectIdAutotestsFailureCategoriesPut**](ProjectFailureCategoriesApi.md#apiV2ProjectsProjectIdAutotestsFailureCategoriesPut) | **PUT** /api/v2/projects/{projectId}/autotests/failure-categories | Update failure category



## apiV2ProjectsProjectIdAutotestsFailureCategoriesGroupingSearchPost

> ProjectFailureCategoryGroupItemApiResultReply apiV2ProjectsProjectIdAutotestsFailureCategoriesGroupingSearchPost(projectId, opts)

Get failure categories with support for filtering, sorting and grouping

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: PrivateToken
let PrivateToken = defaultClient.authentications['PrivateToken'];
PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//PrivateToken.apiKeyPrefix = 'Token';
// Configure API key authorization: Cookies
let Cookies = defaultClient.authentications['Cookies'];
Cookies.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Cookies.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectFailureCategoriesApi();
let projectId = "projectId_example"; // String | Internal (UUID) or global (integer) identifier
let opts = {
  'failureCategoryGroupSearchApiModel': new TestitApiClient.FailureCategoryGroupSearchApiModel() // FailureCategoryGroupSearchApiModel | 
};
apiInstance.apiV2ProjectsProjectIdAutotestsFailureCategoriesGroupingSearchPost(projectId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Internal (UUID) or global (integer) identifier | 
 **failureCategoryGroupSearchApiModel** | [**FailureCategoryGroupSearchApiModel**](FailureCategoryGroupSearchApiModel.md)|  | [optional] 

### Return type

[**ProjectFailureCategoryGroupItemApiResultReply**](ProjectFailureCategoryGroupItemApiResultReply.md)

### Authorization

[PrivateToken](../README.md#PrivateToken), [Cookies](../README.md#Cookies)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2ProjectsProjectIdAutotestsFailureCategoriesIdDelete

> apiV2ProjectsProjectIdAutotestsFailureCategoriesIdDelete(projectId, id)

Delete failure category

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: PrivateToken
let PrivateToken = defaultClient.authentications['PrivateToken'];
PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//PrivateToken.apiKeyPrefix = 'Token';
// Configure API key authorization: Cookies
let Cookies = defaultClient.authentications['Cookies'];
Cookies.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Cookies.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectFailureCategoriesApi();
let projectId = "projectId_example"; // String | Internal (UUID) or global (integer) identifier
let id = "id_example"; // String | 
apiInstance.apiV2ProjectsProjectIdAutotestsFailureCategoriesIdDelete(projectId, id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Internal (UUID) or global (integer) identifier | 
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[PrivateToken](../README.md#PrivateToken), [Cookies](../README.md#Cookies)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ProjectsProjectIdAutotestsFailureCategoriesIdGet

> ProjectDetailedFailureCategoryApiResult apiV2ProjectsProjectIdAutotestsFailureCategoriesIdGet(projectId, id)

Get failure category by ID

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: PrivateToken
let PrivateToken = defaultClient.authentications['PrivateToken'];
PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//PrivateToken.apiKeyPrefix = 'Token';
// Configure API key authorization: Cookies
let Cookies = defaultClient.authentications['Cookies'];
Cookies.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Cookies.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectFailureCategoriesApi();
let projectId = "projectId_example"; // String | Internal (UUID) or global (integer) identifier
let id = "id_example"; // String | 
apiInstance.apiV2ProjectsProjectIdAutotestsFailureCategoriesIdGet(projectId, id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Internal (UUID) or global (integer) identifier | 
 **id** | **String**|  | 

### Return type

[**ProjectDetailedFailureCategoryApiResult**](ProjectDetailedFailureCategoryApiResult.md)

### Authorization

[PrivateToken](../README.md#PrivateToken), [Cookies](../README.md#Cookies)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2ProjectsProjectIdAutotestsFailureCategoriesPost

> ProjectDetailedFailureCategoryApiResult apiV2ProjectsProjectIdAutotestsFailureCategoriesPost(projectId, opts)

Create failure category

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: PrivateToken
let PrivateToken = defaultClient.authentications['PrivateToken'];
PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//PrivateToken.apiKeyPrefix = 'Token';
// Configure API key authorization: Cookies
let Cookies = defaultClient.authentications['Cookies'];
Cookies.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Cookies.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectFailureCategoriesApi();
let projectId = "projectId_example"; // String | Internal (UUID) or global (integer) identifier
let opts = {
  'createProjectFailureCategoryApiModel': new TestitApiClient.CreateProjectFailureCategoryApiModel() // CreateProjectFailureCategoryApiModel | 
};
apiInstance.apiV2ProjectsProjectIdAutotestsFailureCategoriesPost(projectId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Internal (UUID) or global (integer) identifier | 
 **createProjectFailureCategoryApiModel** | [**CreateProjectFailureCategoryApiModel**](CreateProjectFailureCategoryApiModel.md)|  | [optional] 

### Return type

[**ProjectDetailedFailureCategoryApiResult**](ProjectDetailedFailureCategoryApiResult.md)

### Authorization

[PrivateToken](../README.md#PrivateToken), [Cookies](../README.md#Cookies)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2ProjectsProjectIdAutotestsFailureCategoriesPut

> apiV2ProjectsProjectIdAutotestsFailureCategoriesPut(projectId, opts)

Update failure category

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: PrivateToken
let PrivateToken = defaultClient.authentications['PrivateToken'];
PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//PrivateToken.apiKeyPrefix = 'Token';
// Configure API key authorization: Cookies
let Cookies = defaultClient.authentications['Cookies'];
Cookies.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Cookies.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectFailureCategoriesApi();
let projectId = "projectId_example"; // String | Internal (UUID) or global (integer) identifier
let opts = {
  'updateFailureCategoryProjectApiModel': new TestitApiClient.UpdateFailureCategoryProjectApiModel() // UpdateFailureCategoryProjectApiModel | 
};
apiInstance.apiV2ProjectsProjectIdAutotestsFailureCategoriesPut(projectId, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Internal (UUID) or global (integer) identifier | 
 **updateFailureCategoryProjectApiModel** | [**UpdateFailureCategoryProjectApiModel**](UpdateFailureCategoryProjectApiModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[PrivateToken](../README.md#PrivateToken), [Cookies](../README.md#Cookies)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

