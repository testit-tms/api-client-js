# TestitApiClient.WebhooksApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2WebhooksDelete**](WebhooksApi.md#apiV2WebhooksDelete) | **DELETE** /api/v2/webhooks | 
[**apiV2WebhooksGet**](WebhooksApi.md#apiV2WebhooksGet) | **GET** /api/v2/webhooks | Get all webhooks
[**apiV2WebhooksIdDelete**](WebhooksApi.md#apiV2WebhooksIdDelete) | **DELETE** /api/v2/webhooks/{id} | Delete webhook by ID
[**apiV2WebhooksIdGet**](WebhooksApi.md#apiV2WebhooksIdGet) | **GET** /api/v2/webhooks/{id} | Get webhook by ID
[**apiV2WebhooksIdPut**](WebhooksApi.md#apiV2WebhooksIdPut) | **PUT** /api/v2/webhooks/{id} | Edit webhook by ID
[**apiV2WebhooksPost**](WebhooksApi.md#apiV2WebhooksPost) | **POST** /api/v2/webhooks | Create webhook
[**apiV2WebhooksPut**](WebhooksApi.md#apiV2WebhooksPut) | **PUT** /api/v2/webhooks | 
[**apiV2WebhooksSearchPost**](WebhooksApi.md#apiV2WebhooksSearchPost) | **POST** /api/v2/webhooks/search | Search for webhooks
[**apiV2WebhooksSpecialVariablesGet**](WebhooksApi.md#apiV2WebhooksSpecialVariablesGet) | **GET** /api/v2/webhooks/specialVariables | Get special variables for webhook event type
[**apiV2WebhooksTestPost**](WebhooksApi.md#apiV2WebhooksTestPost) | **POST** /api/v2/webhooks/test | Test webhook&#39;s url



## apiV2WebhooksDelete

> apiV2WebhooksDelete(opts)



### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WebhooksApi();
let opts = {
  'webhooksDeleteApiModel': new TestitApiClient.WebhooksDeleteApiModel() // WebhooksDeleteApiModel | 
};
apiInstance.apiV2WebhooksDelete(opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhooksDeleteApiModel** | [**WebhooksDeleteApiModel**](WebhooksDeleteApiModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2WebhooksGet

> [WebHookModel] apiV2WebhooksGet(opts)

Get all webhooks

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WebhooksApi();
let opts = {
  'projectId': "projectId_example" // String | Project unique ID
};
apiInstance.apiV2WebhooksGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Project unique ID | [optional] 

### Return type

[**[WebHookModel]**](WebHookModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2WebhooksIdDelete

> apiV2WebhooksIdDelete(id)

Delete webhook by ID

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WebhooksApi();
let id = "id_example"; // String | Webhook unique ID
apiInstance.apiV2WebhooksIdDelete(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Webhook unique ID | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2WebhooksIdGet

> WebHookModel apiV2WebhooksIdGet(id)

Get webhook by ID

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WebhooksApi();
let id = "id_example"; // String | Webhook unique ID
apiInstance.apiV2WebhooksIdGet(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Webhook unique ID | 

### Return type

[**WebHookModel**](WebHookModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2WebhooksIdPut

> WebHookModel apiV2WebhooksIdPut(id, opts)

Edit webhook by ID

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WebhooksApi();
let id = "id_example"; // String | Webhook unique ID
let opts = {
  'webHookPostModel': new TestitApiClient.WebHookPostModel() // WebHookPostModel | 
};
apiInstance.apiV2WebhooksIdPut(id, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Webhook unique ID | 
 **webHookPostModel** | [**WebHookPostModel**](WebHookPostModel.md)|  | [optional] 

### Return type

[**WebHookModel**](WebHookModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2WebhooksPost

> WebHookModel apiV2WebhooksPost(opts)

Create webhook

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WebhooksApi();
let opts = {
  'webHookPostModel': new TestitApiClient.WebHookPostModel() // WebHookPostModel | 
};
apiInstance.apiV2WebhooksPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webHookPostModel** | [**WebHookPostModel**](WebHookPostModel.md)|  | [optional] 

### Return type

[**WebHookModel**](WebHookModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2WebhooksPut

> WebhooksUpdateApiResult apiV2WebhooksPut(opts)



### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WebhooksApi();
let opts = {
  'webhooksUpdateApiModel': new TestitApiClient.WebhooksUpdateApiModel() // WebhooksUpdateApiModel | 
};
apiInstance.apiV2WebhooksPut(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhooksUpdateApiModel** | [**WebhooksUpdateApiModel**](WebhooksUpdateApiModel.md)|  | [optional] 

### Return type

[**WebhooksUpdateApiResult**](WebhooksUpdateApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2WebhooksSearchPost

> [WebHookModel] apiV2WebhooksSearchPost(opts)

Search for webhooks

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WebhooksApi();
let opts = {
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example", // String | Value for searching
  'searchWebhooksQueryModel': new TestitApiClient.SearchWebhooksQueryModel() // SearchWebhooksQueryModel | 
};
apiInstance.apiV2WebhooksSearchPost(opts).then((data) => {
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
 **searchWebhooksQueryModel** | [**SearchWebhooksQueryModel**](SearchWebhooksQueryModel.md)|  | [optional] 

### Return type

[**[WebHookModel]**](WebHookModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2WebhooksSpecialVariablesGet

> [String] apiV2WebhooksSpecialVariablesGet(opts)

Get special variables for webhook event type

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WebhooksApi();
let opts = {
  'eventType': new TestitApiClient.WebHookEventType(), // WebHookEventType | Webhook event type
  'variablesType': new TestitApiClient.WebhookVariablesType() // WebhookVariablesType | 
};
apiInstance.apiV2WebhooksSpecialVariablesGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventType** | [**WebHookEventType**](.md)| Webhook event type | [optional] 
 **variablesType** | [**WebhookVariablesType**](.md)|  | [optional] 

### Return type

**[String]**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2WebhooksTestPost

> WebhookResponse apiV2WebhooksTestPost(opts)

Test webhook&#39;s url

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.WebhooksApi();
let opts = {
  'webHookTestModel': new TestitApiClient.WebHookTestModel() // WebHookTestModel | 
};
apiInstance.apiV2WebhooksTestPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webHookTestModel** | [**WebHookTestModel**](WebHookTestModel.md)|  | [optional] 

### Return type

[**WebhookResponse**](WebhookResponse.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

