# TestitApiClient.FailureCategoriesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2AutotestsFailureCategoriesGroupingSearchPost**](FailureCategoriesApi.md#apiV2AutotestsFailureCategoriesGroupingSearchPost) | **POST** /api/v2/autotests/failure-categories/grouping-search | Get failure categories with support for filtering, sorting and grouping
[**apiV2AutotestsFailureCategoriesIdDelete**](FailureCategoriesApi.md#apiV2AutotestsFailureCategoriesIdDelete) | **DELETE** /api/v2/autotests/failure-categories/{id} | Delete failure category
[**apiV2AutotestsFailureCategoriesIdGet**](FailureCategoriesApi.md#apiV2AutotestsFailureCategoriesIdGet) | **GET** /api/v2/autotests/failure-categories/{id} | Get failure category by ID
[**apiV2AutotestsFailureCategoriesNameNameExistsGet**](FailureCategoriesApi.md#apiV2AutotestsFailureCategoriesNameNameExistsGet) | **GET** /api/v2/autotests/failure-categories/name/{name}/exists | Check failure category with the specified name already exists
[**apiV2AutotestsFailureCategoriesPost**](FailureCategoriesApi.md#apiV2AutotestsFailureCategoriesPost) | **POST** /api/v2/autotests/failure-categories | Create failure category
[**apiV2AutotestsFailureCategoriesPut**](FailureCategoriesApi.md#apiV2AutotestsFailureCategoriesPut) | **PUT** /api/v2/autotests/failure-categories | Update failure category
[**apiV2AutotestsFailureCategoriesSearchPost**](FailureCategoriesApi.md#apiV2AutotestsFailureCategoriesSearchPost) | **POST** /api/v2/autotests/failure-categories/search | 
[**apiV2AutotestsResultReasonsGroupingSearchPost**](FailureCategoriesApi.md#apiV2AutotestsResultReasonsGroupingSearchPost) | **POST** /api/v2/autotests/resultReasons/grouping-search | Get failure categories with support for filtering, sorting and grouping
[**apiV2AutotestsResultReasonsIdDelete**](FailureCategoriesApi.md#apiV2AutotestsResultReasonsIdDelete) | **DELETE** /api/v2/autotests/resultReasons/{id} | Delete failure category
[**apiV2AutotestsResultReasonsIdGet**](FailureCategoriesApi.md#apiV2AutotestsResultReasonsIdGet) | **GET** /api/v2/autotests/resultReasons/{id} | Get failure category by ID
[**apiV2AutotestsResultReasonsNameNameExistsGet**](FailureCategoriesApi.md#apiV2AutotestsResultReasonsNameNameExistsGet) | **GET** /api/v2/autotests/resultReasons/name/{name}/exists | Check failure category with the specified name already exists
[**apiV2AutotestsResultReasonsPost**](FailureCategoriesApi.md#apiV2AutotestsResultReasonsPost) | **POST** /api/v2/autotests/resultReasons | Create failure category
[**apiV2AutotestsResultReasonsPut**](FailureCategoriesApi.md#apiV2AutotestsResultReasonsPut) | **PUT** /api/v2/autotests/resultReasons | Update failure category
[**apiV2AutotestsResultReasonsSearchPost**](FailureCategoriesApi.md#apiV2AutotestsResultReasonsSearchPost) | **POST** /api/v2/autotests/resultReasons/search | 



## apiV2AutotestsFailureCategoriesGroupingSearchPost

> FailureCategoryGroupItemApiResultReply apiV2AutotestsFailureCategoriesGroupingSearchPost(opts)

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

let apiInstance = new TestitApiClient.FailureCategoriesApi();
let opts = {
  'failureCategoryGroupSearchApiModel': new TestitApiClient.FailureCategoryGroupSearchApiModel() // FailureCategoryGroupSearchApiModel | 
};
apiInstance.apiV2AutotestsFailureCategoriesGroupingSearchPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **failureCategoryGroupSearchApiModel** | [**FailureCategoryGroupSearchApiModel**](FailureCategoryGroupSearchApiModel.md)|  | [optional] 

### Return type

[**FailureCategoryGroupItemApiResultReply**](FailureCategoryGroupItemApiResultReply.md)

### Authorization

[PrivateToken](../README.md#PrivateToken), [Cookies](../README.md#Cookies)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2AutotestsFailureCategoriesIdDelete

> apiV2AutotestsFailureCategoriesIdDelete(id)

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

let apiInstance = new TestitApiClient.FailureCategoriesApi();
let id = "id_example"; // String | 
apiInstance.apiV2AutotestsFailureCategoriesIdDelete(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[PrivateToken](../README.md#PrivateToken), [Cookies](../README.md#Cookies)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2AutotestsFailureCategoriesIdGet

> FailureCategoryApiResult apiV2AutotestsFailureCategoriesIdGet(id, opts)

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

let apiInstance = new TestitApiClient.FailureCategoriesApi();
let id = "id_example"; // String | 
let opts = {
  'isDeleted': true // Boolean | 
};
apiInstance.apiV2AutotestsFailureCategoriesIdGet(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **isDeleted** | **Boolean**|  | [optional] 

### Return type

[**FailureCategoryApiResult**](FailureCategoryApiResult.md)

### Authorization

[PrivateToken](../README.md#PrivateToken), [Cookies](../README.md#Cookies)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2AutotestsFailureCategoriesNameNameExistsGet

> Boolean apiV2AutotestsFailureCategoriesNameNameExistsGet(name)

Check failure category with the specified name already exists

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

let apiInstance = new TestitApiClient.FailureCategoriesApi();
let name = "name_example"; // String | 
apiInstance.apiV2AutotestsFailureCategoriesNameNameExistsGet(name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 

### Return type

**Boolean**

### Authorization

[PrivateToken](../README.md#PrivateToken), [Cookies](../README.md#Cookies)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2AutotestsFailureCategoriesPost

> FailureCategoryApiResult apiV2AutotestsFailureCategoriesPost(opts)

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

let apiInstance = new TestitApiClient.FailureCategoriesApi();
let opts = {
  'createFailureCategoryApiModel': new TestitApiClient.CreateFailureCategoryApiModel() // CreateFailureCategoryApiModel | 
};
apiInstance.apiV2AutotestsFailureCategoriesPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createFailureCategoryApiModel** | [**CreateFailureCategoryApiModel**](CreateFailureCategoryApiModel.md)|  | [optional] 

### Return type

[**FailureCategoryApiResult**](FailureCategoryApiResult.md)

### Authorization

[PrivateToken](../README.md#PrivateToken), [Cookies](../README.md#Cookies)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2AutotestsFailureCategoriesPut

> apiV2AutotestsFailureCategoriesPut(opts)

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

let apiInstance = new TestitApiClient.FailureCategoriesApi();
let opts = {
  'updateFailureCategoryApiModel': new TestitApiClient.UpdateFailureCategoryApiModel() // UpdateFailureCategoryApiModel | 
};
apiInstance.apiV2AutotestsFailureCategoriesPut(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateFailureCategoryApiModel** | [**UpdateFailureCategoryApiModel**](UpdateFailureCategoryApiModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[PrivateToken](../README.md#PrivateToken), [Cookies](../README.md#Cookies)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2AutotestsFailureCategoriesSearchPost

> [AutotestResultReasonShortGetModel] apiV2AutotestsFailureCategoriesSearchPost(opts)



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

let apiInstance = new TestitApiClient.FailureCategoriesApi();
let opts = {
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example", // String | Value for searching
  'autotestResultReasonFilterModel': new TestitApiClient.AutotestResultReasonFilterModel() // AutotestResultReasonFilterModel | 
};
apiInstance.apiV2AutotestsFailureCategoriesSearchPost(opts).then((data) => {
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
 **autotestResultReasonFilterModel** | [**AutotestResultReasonFilterModel**](AutotestResultReasonFilterModel.md)|  | [optional] 

### Return type

[**[AutotestResultReasonShortGetModel]**](AutotestResultReasonShortGetModel.md)

### Authorization

[PrivateToken](../README.md#PrivateToken), [Cookies](../README.md#Cookies)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2AutotestsResultReasonsGroupingSearchPost

> FailureCategoryGroupItemApiResultReply apiV2AutotestsResultReasonsGroupingSearchPost(opts)

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

let apiInstance = new TestitApiClient.FailureCategoriesApi();
let opts = {
  'failureCategoryGroupSearchApiModel': new TestitApiClient.FailureCategoryGroupSearchApiModel() // FailureCategoryGroupSearchApiModel | 
};
apiInstance.apiV2AutotestsResultReasonsGroupingSearchPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **failureCategoryGroupSearchApiModel** | [**FailureCategoryGroupSearchApiModel**](FailureCategoryGroupSearchApiModel.md)|  | [optional] 

### Return type

[**FailureCategoryGroupItemApiResultReply**](FailureCategoryGroupItemApiResultReply.md)

### Authorization

[PrivateToken](../README.md#PrivateToken), [Cookies](../README.md#Cookies)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2AutotestsResultReasonsIdDelete

> apiV2AutotestsResultReasonsIdDelete(id)

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

let apiInstance = new TestitApiClient.FailureCategoriesApi();
let id = "id_example"; // String | 
apiInstance.apiV2AutotestsResultReasonsIdDelete(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[PrivateToken](../README.md#PrivateToken), [Cookies](../README.md#Cookies)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2AutotestsResultReasonsIdGet

> FailureCategoryApiResult apiV2AutotestsResultReasonsIdGet(id, opts)

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

let apiInstance = new TestitApiClient.FailureCategoriesApi();
let id = "id_example"; // String | 
let opts = {
  'isDeleted': true // Boolean | 
};
apiInstance.apiV2AutotestsResultReasonsIdGet(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **isDeleted** | **Boolean**|  | [optional] 

### Return type

[**FailureCategoryApiResult**](FailureCategoryApiResult.md)

### Authorization

[PrivateToken](../README.md#PrivateToken), [Cookies](../README.md#Cookies)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2AutotestsResultReasonsNameNameExistsGet

> Boolean apiV2AutotestsResultReasonsNameNameExistsGet(name)

Check failure category with the specified name already exists

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

let apiInstance = new TestitApiClient.FailureCategoriesApi();
let name = "name_example"; // String | 
apiInstance.apiV2AutotestsResultReasonsNameNameExistsGet(name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 

### Return type

**Boolean**

### Authorization

[PrivateToken](../README.md#PrivateToken), [Cookies](../README.md#Cookies)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2AutotestsResultReasonsPost

> FailureCategoryApiResult apiV2AutotestsResultReasonsPost(opts)

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

let apiInstance = new TestitApiClient.FailureCategoriesApi();
let opts = {
  'createFailureCategoryApiModel': new TestitApiClient.CreateFailureCategoryApiModel() // CreateFailureCategoryApiModel | 
};
apiInstance.apiV2AutotestsResultReasonsPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createFailureCategoryApiModel** | [**CreateFailureCategoryApiModel**](CreateFailureCategoryApiModel.md)|  | [optional] 

### Return type

[**FailureCategoryApiResult**](FailureCategoryApiResult.md)

### Authorization

[PrivateToken](../README.md#PrivateToken), [Cookies](../README.md#Cookies)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2AutotestsResultReasonsPut

> apiV2AutotestsResultReasonsPut(opts)

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

let apiInstance = new TestitApiClient.FailureCategoriesApi();
let opts = {
  'updateFailureCategoryApiModel': new TestitApiClient.UpdateFailureCategoryApiModel() // UpdateFailureCategoryApiModel | 
};
apiInstance.apiV2AutotestsResultReasonsPut(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateFailureCategoryApiModel** | [**UpdateFailureCategoryApiModel**](UpdateFailureCategoryApiModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[PrivateToken](../README.md#PrivateToken), [Cookies](../README.md#Cookies)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2AutotestsResultReasonsSearchPost

> [AutotestResultReasonShortGetModel] apiV2AutotestsResultReasonsSearchPost(opts)



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

let apiInstance = new TestitApiClient.FailureCategoriesApi();
let opts = {
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example", // String | Value for searching
  'autotestResultReasonFilterModel': new TestitApiClient.AutotestResultReasonFilterModel() // AutotestResultReasonFilterModel | 
};
apiInstance.apiV2AutotestsResultReasonsSearchPost(opts).then((data) => {
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
 **autotestResultReasonFilterModel** | [**AutotestResultReasonFilterModel**](AutotestResultReasonFilterModel.md)|  | [optional] 

### Return type

[**[AutotestResultReasonShortGetModel]**](AutotestResultReasonShortGetModel.md)

### Authorization

[PrivateToken](../README.md#PrivateToken), [Cookies](../README.md#Cookies)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

