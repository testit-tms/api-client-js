# WebhooksApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2WebhooksGet**](WebhooksApi.md#apiV2WebhooksGet) | **GET** /api/v2/webhooks | Get all webhooks |
| [**apiV2WebhooksIdDelete**](WebhooksApi.md#apiV2WebhooksIdDelete) | **DELETE** /api/v2/webhooks/{id} | Delete webhook by ID |
| [**apiV2WebhooksIdGet**](WebhooksApi.md#apiV2WebhooksIdGet) | **GET** /api/v2/webhooks/{id} | Get webhook by ID |
| [**apiV2WebhooksIdPut**](WebhooksApi.md#apiV2WebhooksIdPut) | **PUT** /api/v2/webhooks/{id} | Edit webhook by ID |
| [**apiV2WebhooksPost**](WebhooksApi.md#apiV2WebhooksPost) | **POST** /api/v2/webhooks | Create webhook |
| [**apiV2WebhooksSearchPost**](WebhooksApi.md#apiV2WebhooksSearchPost) | **POST** /api/v2/webhooks/search | Search for webhooks |
| [**apiV2WebhooksSpecialVariablesGet**](WebhooksApi.md#apiV2WebhooksSpecialVariablesGet) | **GET** /api/v2/webhooks/specialVariables | Get special variables for webhook event type |
| [**apiV2WebhooksTestPost**](WebhooksApi.md#apiV2WebhooksTestPost) | **POST** /api/v2/webhooks/test | Test webhook&#39;s url |


<a name="apiV2WebhooksGet"></a>
# **apiV2WebhooksGet**
> List apiV2WebhooksGet(projectId)

Get all webhooks

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **UUID**| Project unique ID | [optional] [default to null] |

### Return type

[**List**](../Models/WebHookModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2WebhooksIdDelete"></a>
# **apiV2WebhooksIdDelete**
> apiV2WebhooksIdDelete(id)

Delete webhook by ID

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Webhook unique ID | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2WebhooksIdGet"></a>
# **apiV2WebhooksIdGet**
> WebHookModel apiV2WebhooksIdGet(id)

Get webhook by ID

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Webhook unique ID | [default to null] |

### Return type

[**WebHookModel**](../Models/WebHookModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2WebhooksIdPut"></a>
# **apiV2WebhooksIdPut**
> WebHookModel apiV2WebhooksIdPut(id, \_api\_v2\_webhooks\_post\_request)

Edit webhook by ID

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Webhook unique ID | [default to null] |
| **\_api\_v2\_webhooks\_post\_request** | [**_api_v2_webhooks_post_request**](../Models/_api_v2_webhooks_post_request.md)|  | [optional] |

### Return type

[**WebHookModel**](../Models/WebHookModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2WebhooksPost"></a>
# **apiV2WebhooksPost**
> WebHookModel apiV2WebhooksPost(\_api\_v2\_webhooks\_post\_request)

Create webhook

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **\_api\_v2\_webhooks\_post\_request** | [**_api_v2_webhooks_post_request**](../Models/_api_v2_webhooks_post_request.md)|  | [optional] |

### Return type

[**WebHookModel**](../Models/WebHookModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2WebhooksSearchPost"></a>
# **apiV2WebhooksSearchPost**
> List apiV2WebhooksSearchPost(Skip, Take, OrderBy, SearchField, SearchValue, \_api\_v2\_webhooks\_search\_post\_request)

Search for webhooks

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **\_api\_v2\_webhooks\_search\_post\_request** | [**_api_v2_webhooks_search_post_request**](../Models/_api_v2_webhooks_search_post_request.md)|  | [optional] |

### Return type

[**List**](../Models/WebHookModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2WebhooksSpecialVariablesGet"></a>
# **apiV2WebhooksSpecialVariablesGet**
> List apiV2WebhooksSpecialVariablesGet(eventType)

Get special variables for webhook event type

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **eventType** | [**WebHookEventType**](../Models/.md)| Webhook event type | [optional] [default to null] [enum: AutomatedTestRunCreated, TestPlansStatusChanged, TestRunStopped, TestPointAssigned, TestResultJiraIssueCreated, AutoTestFinished, UserMentionedInComment, UserSelectedInWorkItemAttribute, AllTestPointsFinished, AllAutoTestsFinished, AutoTestChanged, WorkItemAutoTestRelationChanged, WorkItemAttributeChanged, WorkItemChanged, ConfigurationChanged] |

### Return type

**List**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2WebhooksTestPost"></a>
# **apiV2WebhooksTestPost**
> RequestData apiV2WebhooksTestPost(\_api\_v2\_webhooks\_test\_post\_request)

Test webhook&#39;s url

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **\_api\_v2\_webhooks\_test\_post\_request** | [**_api_v2_webhooks_test_post_request**](../Models/_api_v2_webhooks_test_post_request.md)|  | [optional] |

### Return type

[**RequestData**](../Models/RequestData.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
