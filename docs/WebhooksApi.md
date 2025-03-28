# WebhooksApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2WebhooksDelete**](WebhooksApi.md#apiV2WebhooksDelete) | **DELETE** /api/v2/webhooks |  |
| [**apiV2WebhooksGet**](WebhooksApi.md#apiV2WebhooksGet) | **GET** /api/v2/webhooks | Get all webhooks |
| [**apiV2WebhooksIdDelete**](WebhooksApi.md#apiV2WebhooksIdDelete) | **DELETE** /api/v2/webhooks/{id} | Delete webhook by ID |
| [**apiV2WebhooksIdGet**](WebhooksApi.md#apiV2WebhooksIdGet) | **GET** /api/v2/webhooks/{id} | Get webhook by ID |
| [**apiV2WebhooksIdPut**](WebhooksApi.md#apiV2WebhooksIdPut) | **PUT** /api/v2/webhooks/{id} | Edit webhook by ID |
| [**apiV2WebhooksPost**](WebhooksApi.md#apiV2WebhooksPost) | **POST** /api/v2/webhooks | Create webhook |
| [**apiV2WebhooksPut**](WebhooksApi.md#apiV2WebhooksPut) | **PUT** /api/v2/webhooks |  |
| [**apiV2WebhooksSearchPost**](WebhooksApi.md#apiV2WebhooksSearchPost) | **POST** /api/v2/webhooks/search | Search for webhooks |
| [**apiV2WebhooksSpecialVariablesGet**](WebhooksApi.md#apiV2WebhooksSpecialVariablesGet) | **GET** /api/v2/webhooks/specialVariables | Get special variables for webhook event type |
| [**apiV2WebhooksTestPost**](WebhooksApi.md#apiV2WebhooksTestPost) | **POST** /api/v2/webhooks/test | Test webhook&#39;s url |


<a name="apiV2WebhooksDelete"></a>
# **apiV2WebhooksDelete**
> apiV2WebhooksDelete(WebhooksDeleteApiModel)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **WebhooksDeleteApiModel** | [**WebhooksDeleteApiModel**](../Models/WebhooksDeleteApiModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

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
> WebHookModel apiV2WebhooksIdPut(id, WebHookPostModel)

Edit webhook by ID

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Webhook unique ID | [default to null] |
| **WebHookPostModel** | [**WebHookPostModel**](../Models/WebHookPostModel.md)|  | [optional] |

### Return type

[**WebHookModel**](../Models/WebHookModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2WebhooksPost"></a>
# **apiV2WebhooksPost**
> WebHookModel apiV2WebhooksPost(WebHookPostModel)

Create webhook

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **WebHookPostModel** | [**WebHookPostModel**](../Models/WebHookPostModel.md)|  | [optional] |

### Return type

[**WebHookModel**](../Models/WebHookModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2WebhooksPut"></a>
# **apiV2WebhooksPut**
> WebhooksUpdateApiResult apiV2WebhooksPut(WebhooksUpdateApiModel)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **WebhooksUpdateApiModel** | [**WebhooksUpdateApiModel**](../Models/WebhooksUpdateApiModel.md)|  | [optional] |

### Return type

[**WebhooksUpdateApiResult**](../Models/WebhooksUpdateApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2WebhooksSearchPost"></a>
# **apiV2WebhooksSearchPost**
> List apiV2WebhooksSearchPost(Skip, Take, OrderBy, SearchField, SearchValue, SearchWebhooksQueryModel)

Search for webhooks

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **SearchWebhooksQueryModel** | [**SearchWebhooksQueryModel**](../Models/SearchWebhooksQueryModel.md)|  | [optional] |

### Return type

[**List**](../Models/WebHookModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2WebhooksSpecialVariablesGet"></a>
# **apiV2WebhooksSpecialVariablesGet**
> List apiV2WebhooksSpecialVariablesGet(eventType, variablesType)

Get special variables for webhook event type

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **eventType** | [**WebHookEventType**](../Models/.md)| Webhook event type | [optional] [default to null] [enum: AutomatedTestRunCreated, TestPlansStatusChanged, TestRunStopped, TestPointAssigned, TestResultJiraIssueCreated, AutoTestFinished, UserMentionedInComment, UserSelectedInWorkItemAttribute, AllTestPointsFinished, AllAutoTestsFinished, AutoTestChanged, WorkItemAutoTestRelationChanged, WorkItemAttributeChanged, WorkItemChanged, ConfigurationChanged, ProjectChanged, TestPlanChanged] |
| **variablesType** | [**WebhookVariablesType**](../Models/.md)|  | [optional] [default to VariablesForUrl] [enum: VariablesForUrl, VariablesForHeaders, VariablesForBody] |

### Return type

**List**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2WebhooksTestPost"></a>
# **apiV2WebhooksTestPost**
> WebhookResponse apiV2WebhooksTestPost(WebHookTestModel)

Test webhook&#39;s url

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **WebHookTestModel** | [**WebHookTestModel**](../Models/WebHookTestModel.md)|  | [optional] |

### Return type

[**WebhookResponse**](../Models/WebhookResponse.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

