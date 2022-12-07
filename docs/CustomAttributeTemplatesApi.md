# testit_api_client.CustomAttributeTemplatesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2CustomAttributesTemplatesIdCustomAttributesExcludePost**](CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesIdCustomAttributesExcludePost) | **POST** /api/v2/customAttributes/templates/{id}/customAttributes/exclude | Exclude CustomAttributes from CustomAttributeTemplate
[**apiV2CustomAttributesTemplatesIdCustomAttributesIncludePost**](CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesIdCustomAttributesIncludePost) | **POST** /api/v2/customAttributes/templates/{id}/customAttributes/include | Include CustomAttributes to CustomAttributeTemplate
[**apiV2CustomAttributesTemplatesIdDelete**](CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesIdDelete) | **DELETE** /api/v2/customAttributes/templates/{id} | Delete CustomAttributeTemplate
[**apiV2CustomAttributesTemplatesIdGet**](CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesIdGet) | **GET** /api/v2/customAttributes/templates/{id} | Get CustomAttributeTemplate by ID
[**apiV2CustomAttributesTemplatesNameGet**](CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesNameGet) | **GET** /api/v2/customAttributes/templates/{name} | Get CustomAttributeTemplate by name
[**apiV2CustomAttributesTemplatesPost**](CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesPost) | **POST** /api/v2/customAttributes/templates | Create CustomAttributeTemplate
[**apiV2CustomAttributesTemplatesPut**](CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesPut) | **PUT** /api/v2/customAttributes/templates | Update CustomAttributeTemplate
[**apiV2CustomAttributesTemplatesSearchPost**](CustomAttributeTemplatesApi.md#apiV2CustomAttributesTemplatesSearchPost) | **POST** /api/v2/customAttributes/templates/search | Search CustomAttributeTemplates



## apiV2CustomAttributesTemplatesIdCustomAttributesExcludePost

> apiV2CustomAttributesTemplatesIdCustomAttributesExcludePost(id, opts)

Exclude CustomAttributes from CustomAttributeTemplate

&lt;br&gt;Use case  &lt;br&gt;User sets attribute template internal identifier  &lt;br&gt;User sets attribute internal identifiers   &lt;br&gt;User runs method execution  &lt;br&gt;System delete attributes from attributes tempalte

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.CustomAttributeTemplatesApi();
let id = "id_example"; // String | Attribute template internal (UUID) identifier
let opts = {
  'requestBody': ["null"] // [String] | 
};
apiInstance.apiV2CustomAttributesTemplatesIdCustomAttributesExcludePost(id, opts, (error, data, response) => {
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
 **id** | **String**| Attribute template internal (UUID) identifier | 
 **requestBody** | [**[String]**](String.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2CustomAttributesTemplatesIdCustomAttributesIncludePost

> apiV2CustomAttributesTemplatesIdCustomAttributesIncludePost(id, opts)

Include CustomAttributes to CustomAttributeTemplate

&lt;br&gt;Use case  &lt;br&gt;User sets attribute template internal identifier  &lt;br&gt;User sets attribute internal identifiers   &lt;br&gt;User runs method execution  &lt;br&gt;System add attributes to attributes tempalte

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.CustomAttributeTemplatesApi();
let id = "id_example"; // String | Attribute template internal (UUID) identifier
let opts = {
  'requestBody': ["null"] // [String] | 
};
apiInstance.apiV2CustomAttributesTemplatesIdCustomAttributesIncludePost(id, opts, (error, data, response) => {
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
 **id** | **String**| Attribute template internal (UUID) identifier | 
 **requestBody** | [**[String]**](String.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2CustomAttributesTemplatesIdDelete

> NoContentResult apiV2CustomAttributesTemplatesIdDelete(id)

Delete CustomAttributeTemplate

&lt;br&gt;Use case  &lt;br&gt;User sets attribute template internal identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System search and delete attribute template  &lt;br&gt;System returns no content response

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.CustomAttributeTemplatesApi();
let id = "id_example"; // String | Attribute template internal (UUID) identifier
apiInstance.apiV2CustomAttributesTemplatesIdDelete(id, (error, data, response) => {
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
 **id** | **String**| Attribute template internal (UUID) identifier | 

### Return type

[**NoContentResult**](NoContentResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2CustomAttributesTemplatesIdGet

> CustomAttributeTemplateModel apiV2CustomAttributesTemplatesIdGet(id)

Get CustomAttributeTemplate by ID

&lt;br&gt;Use case  &lt;br&gt;User sets attribute template internal identifier   &lt;br&gt;User runs method execution  &lt;br&gt;System return attribute template (listed in response example)

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.CustomAttributeTemplatesApi();
let id = "id_example"; // String | CustomAttributeTemplate internal (UUID) identifier
apiInstance.apiV2CustomAttributesTemplatesIdGet(id, (error, data, response) => {
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
 **id** | **String**| CustomAttributeTemplate internal (UUID) identifier | 

### Return type

[**CustomAttributeTemplateModel**](CustomAttributeTemplateModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2CustomAttributesTemplatesNameGet

> [CustomAttributeTemplateModel] apiV2CustomAttributesTemplatesNameGet(name)

Get CustomAttributeTemplate by name

&lt;br&gt;Use case  &lt;br&gt;User sets attribute template name  &lt;br&gt;User runs method execution  &lt;br&gt;System search and return list of attribute templates (listed in response example)

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.CustomAttributeTemplatesApi();
let name = "name_example"; // String | CustomAttributeTemplate name for search
apiInstance.apiV2CustomAttributesTemplatesNameGet(name, (error, data, response) => {
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
 **name** | **String**| CustomAttributeTemplate name for search | 

### Return type

[**[CustomAttributeTemplateModel]**](CustomAttributeTemplateModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2CustomAttributesTemplatesPost

> CustomAttributeTemplateModel apiV2CustomAttributesTemplatesPost(opts)

Create CustomAttributeTemplate

&lt;br&gt;Use case  &lt;br&gt;User sets attribute template parameters (listed in request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System creates attribute template  &lt;br&gt;System returns attribute template model (example listed in response parameters)

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.CustomAttributeTemplatesApi();
let opts = {
  'customAttributeTemplatePostModel': new testit_api_client.CustomAttributeTemplatePostModel() // CustomAttributeTemplatePostModel | 
};
apiInstance.apiV2CustomAttributesTemplatesPost(opts, (error, data, response) => {
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
 **customAttributeTemplatePostModel** | [**CustomAttributeTemplatePostModel**](CustomAttributeTemplatePostModel.md)|  | [optional] 

### Return type

[**CustomAttributeTemplateModel**](CustomAttributeTemplateModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2CustomAttributesTemplatesPut

> apiV2CustomAttributesTemplatesPut(opts)

Update CustomAttributeTemplate

&lt;br&gt;Use case  &lt;br&gt;User sets attribute template parameters (listed in request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System updates attribute template

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.CustomAttributeTemplatesApi();
let opts = {
  'customAttributeTemplatePutModel': new testit_api_client.CustomAttributeTemplatePutModel() // CustomAttributeTemplatePutModel | 
};
apiInstance.apiV2CustomAttributesTemplatesPut(opts, (error, data, response) => {
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
 **customAttributeTemplatePutModel** | [**CustomAttributeTemplatePutModel**](CustomAttributeTemplatePutModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2CustomAttributesTemplatesSearchPost

> [CustomAttributeTemplateSearchResponseModel] apiV2CustomAttributesTemplatesSearchPost(opts)

Search CustomAttributeTemplates

&lt;br&gt;Use case  &lt;br&gt;User sets search params model (listed in request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System return attribute templates (listed in response example)

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.CustomAttributeTemplatesApi();
let opts = {
  'customAttributeTemplateSearchQueryModel': new testit_api_client.CustomAttributeTemplateSearchQueryModel() // CustomAttributeTemplateSearchQueryModel | 
};
apiInstance.apiV2CustomAttributesTemplatesSearchPost(opts, (error, data, response) => {
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
 **customAttributeTemplateSearchQueryModel** | [**CustomAttributeTemplateSearchQueryModel**](CustomAttributeTemplateSearchQueryModel.md)|  | [optional] 

### Return type

[**[CustomAttributeTemplateSearchResponseModel]**](CustomAttributeTemplateSearchResponseModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

