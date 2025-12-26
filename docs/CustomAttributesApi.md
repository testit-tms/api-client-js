# TestitApiClient.CustomAttributesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2CustomAttributesExistsGet**](CustomAttributesApi.md#apiV2CustomAttributesExistsGet) | **GET** /api/v2/customAttributes/exists | 
[**apiV2CustomAttributesGlobalIdDelete**](CustomAttributesApi.md#apiV2CustomAttributesGlobalIdDelete) | **DELETE** /api/v2/customAttributes/global/{id} | Delete global attribute
[**apiV2CustomAttributesGlobalIdPut**](CustomAttributesApi.md#apiV2CustomAttributesGlobalIdPut) | **PUT** /api/v2/customAttributes/global/{id} | Edit global attribute
[**apiV2CustomAttributesGlobalPost**](CustomAttributesApi.md#apiV2CustomAttributesGlobalPost) | **POST** /api/v2/customAttributes/global | Create global attribute
[**apiV2CustomAttributesIdGet**](CustomAttributesApi.md#apiV2CustomAttributesIdGet) | **GET** /api/v2/customAttributes/{id} | Get attribute
[**apiV2CustomAttributesSearchPost**](CustomAttributesApi.md#apiV2CustomAttributesSearchPost) | **POST** /api/v2/customAttributes/search | Search for attributes



## apiV2CustomAttributesExistsGet

> CustomAttributeValidationResult apiV2CustomAttributesExistsGet(opts)



### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.CustomAttributesApi();
let opts = {
  'name': "name_example", // String | 
  'isGlobal': true // Boolean | 
};
apiInstance.apiV2CustomAttributesExistsGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | [optional] 
 **isGlobal** | **Boolean**|  | [optional] 

### Return type

[**CustomAttributeValidationResult**](CustomAttributeValidationResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2CustomAttributesGlobalIdDelete

> apiV2CustomAttributesGlobalIdDelete(id)

Delete global attribute

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.CustomAttributesApi();
let id = "id_example"; // String | Unique ID of attribute
apiInstance.apiV2CustomAttributesGlobalIdDelete(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique ID of attribute | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2CustomAttributesGlobalIdPut

> CustomAttributeModel apiV2CustomAttributesGlobalIdPut(id, opts)

Edit global attribute

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.CustomAttributesApi();
let id = "id_example"; // String | Unique ID of attribute
let opts = {
  'globalCustomAttributeUpdateModel': new TestitApiClient.GlobalCustomAttributeUpdateModel() // GlobalCustomAttributeUpdateModel | 
};
apiInstance.apiV2CustomAttributesGlobalIdPut(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique ID of attribute | 
 **globalCustomAttributeUpdateModel** | [**GlobalCustomAttributeUpdateModel**](GlobalCustomAttributeUpdateModel.md)|  | [optional] 

### Return type

[**CustomAttributeModel**](CustomAttributeModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2CustomAttributesGlobalPost

> CustomAttributeModel apiV2CustomAttributesGlobalPost(opts)

Create global attribute

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.CustomAttributesApi();
let opts = {
  'globalCustomAttributePostModel': new TestitApiClient.GlobalCustomAttributePostModel() // GlobalCustomAttributePostModel | 
};
apiInstance.apiV2CustomAttributesGlobalPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **globalCustomAttributePostModel** | [**GlobalCustomAttributePostModel**](GlobalCustomAttributePostModel.md)|  | [optional] 

### Return type

[**CustomAttributeModel**](CustomAttributeModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2CustomAttributesIdGet

> CustomAttributeModel apiV2CustomAttributesIdGet(id)

Get attribute

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.CustomAttributesApi();
let id = "id_example"; // String | Unique ID of attribute
apiInstance.apiV2CustomAttributesIdGet(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique ID of attribute | 

### Return type

[**CustomAttributeModel**](CustomAttributeModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2CustomAttributesSearchPost

> [CustomAttributeSearchResponseModel] apiV2CustomAttributesSearchPost(opts)

Search for attributes

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.CustomAttributesApi();
let opts = {
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example", // String | Value for searching
  'customAttributeSearchQueryModel': new TestitApiClient.CustomAttributeSearchQueryModel() // CustomAttributeSearchQueryModel | 
};
apiInstance.apiV2CustomAttributesSearchPost(opts).then((data) => {
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
 **customAttributeSearchQueryModel** | [**CustomAttributeSearchQueryModel**](CustomAttributeSearchQueryModel.md)|  | [optional] 

### Return type

[**[CustomAttributeSearchResponseModel]**](CustomAttributeSearchResponseModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

