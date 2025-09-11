# FailureCategoriesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2AutotestsFailureCategoriesCountPerFailureCategoryPost**](FailureCategoriesApi.md#apiV2AutotestsFailureCategoriesCountPerFailureCategoryPost) | **POST** /api/v2/autotests/failure-categories/count-per-failure-category |  |
| [**apiV2AutotestsFailureCategoriesGroupingSearchPost**](FailureCategoriesApi.md#apiV2AutotestsFailureCategoriesGroupingSearchPost) | **POST** /api/v2/autotests/failure-categories/grouping-search | Get failure categories with support for filtering, sorting and grouping |
| [**apiV2AutotestsFailureCategoriesIdDelete**](FailureCategoriesApi.md#apiV2AutotestsFailureCategoriesIdDelete) | **DELETE** /api/v2/autotests/failure-categories/{id} | Delete failure category |
| [**apiV2AutotestsFailureCategoriesIdGet**](FailureCategoriesApi.md#apiV2AutotestsFailureCategoriesIdGet) | **GET** /api/v2/autotests/failure-categories/{id} | Get failure category by ID |
| [**apiV2AutotestsFailureCategoriesNameNameExistsGet**](FailureCategoriesApi.md#apiV2AutotestsFailureCategoriesNameNameExistsGet) | **GET** /api/v2/autotests/failure-categories/name/{name}/exists | Check failure category with the specified name already exists |
| [**apiV2AutotestsFailureCategoriesPost**](FailureCategoriesApi.md#apiV2AutotestsFailureCategoriesPost) | **POST** /api/v2/autotests/failure-categories | Create failure category |
| [**apiV2AutotestsFailureCategoriesPut**](FailureCategoriesApi.md#apiV2AutotestsFailureCategoriesPut) | **PUT** /api/v2/autotests/failure-categories | Update failure category |
| [**apiV2AutotestsFailureCategoriesSearchPost**](FailureCategoriesApi.md#apiV2AutotestsFailureCategoriesSearchPost) | **POST** /api/v2/autotests/failure-categories/search |  |
| [**apiV2AutotestsResultReasonsCountPerFailureCategoryPost**](FailureCategoriesApi.md#apiV2AutotestsResultReasonsCountPerFailureCategoryPost) | **POST** /api/v2/autotests/resultReasons/count-per-failure-category |  |
| [**apiV2AutotestsResultReasonsGroupingSearchPost**](FailureCategoriesApi.md#apiV2AutotestsResultReasonsGroupingSearchPost) | **POST** /api/v2/autotests/resultReasons/grouping-search | Get failure categories with support for filtering, sorting and grouping |
| [**apiV2AutotestsResultReasonsIdDelete**](FailureCategoriesApi.md#apiV2AutotestsResultReasonsIdDelete) | **DELETE** /api/v2/autotests/resultReasons/{id} | Delete failure category |
| [**apiV2AutotestsResultReasonsIdGet**](FailureCategoriesApi.md#apiV2AutotestsResultReasonsIdGet) | **GET** /api/v2/autotests/resultReasons/{id} | Get failure category by ID |
| [**apiV2AutotestsResultReasonsNameNameExistsGet**](FailureCategoriesApi.md#apiV2AutotestsResultReasonsNameNameExistsGet) | **GET** /api/v2/autotests/resultReasons/name/{name}/exists | Check failure category with the specified name already exists |
| [**apiV2AutotestsResultReasonsPost**](FailureCategoriesApi.md#apiV2AutotestsResultReasonsPost) | **POST** /api/v2/autotests/resultReasons | Create failure category |
| [**apiV2AutotestsResultReasonsPut**](FailureCategoriesApi.md#apiV2AutotestsResultReasonsPut) | **PUT** /api/v2/autotests/resultReasons | Update failure category |
| [**apiV2AutotestsResultReasonsSearchPost**](FailureCategoriesApi.md#apiV2AutotestsResultReasonsSearchPost) | **POST** /api/v2/autotests/resultReasons/search |  |


<a name="apiV2AutotestsFailureCategoriesCountPerFailureCategoryPost"></a>
# **apiV2AutotestsFailureCategoriesCountPerFailureCategoryPost**
> AutoTestResultReasonsCountModel apiV2AutotestsFailureCategoriesCountPerFailureCategoryPost(AutotestResultReasonFilterModel)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **AutotestResultReasonFilterModel** | [**AutotestResultReasonFilterModel**](../Models/AutotestResultReasonFilterModel.md)|  | [optional] |

### Return type

[**AutoTestResultReasonsCountModel**](../Models/AutoTestResultReasonsCountModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2AutotestsFailureCategoriesGroupingSearchPost"></a>
# **apiV2AutotestsFailureCategoriesGroupingSearchPost**
> AutoTestResultReasonGroupItemApiResultReply apiV2AutotestsFailureCategoriesGroupingSearchPost(AutoTestResultReasonGroupSearchApiModel)

Get failure categories with support for filtering, sorting and grouping

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **AutoTestResultReasonGroupSearchApiModel** | [**AutoTestResultReasonGroupSearchApiModel**](../Models/AutoTestResultReasonGroupSearchApiModel.md)|  | [optional] |

### Return type

[**AutoTestResultReasonGroupItemApiResultReply**](../Models/AutoTestResultReasonGroupItemApiResultReply.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2AutotestsFailureCategoriesIdDelete"></a>
# **apiV2AutotestsFailureCategoriesIdDelete**
> apiV2AutotestsFailureCategoriesIdDelete(id)

Delete failure category

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**|  | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2AutotestsFailureCategoriesIdGet"></a>
# **apiV2AutotestsFailureCategoriesIdGet**
> AutoTestResultReasonProjectApiResult apiV2AutotestsFailureCategoriesIdGet(id, isDeleted)

Get failure category by ID

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**|  | [default to null] |
| **isDeleted** | **Boolean**|  | [optional] [default to null] |

### Return type

[**AutoTestResultReasonProjectApiResult**](../Models/AutoTestResultReasonProjectApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2AutotestsFailureCategoriesNameNameExistsGet"></a>
# **apiV2AutotestsFailureCategoriesNameNameExistsGet**
> Boolean apiV2AutotestsFailureCategoriesNameNameExistsGet(name)

Check failure category with the specified name already exists

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **name** | **String**|  | [default to null] |

### Return type

**Boolean**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2AutotestsFailureCategoriesPost"></a>
# **apiV2AutotestsFailureCategoriesPost**
> AutoTestResultReasonProjectApiResult apiV2AutotestsFailureCategoriesPost(CreateAutoTestResultReasonProjectApiModel)

Create failure category

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **CreateAutoTestResultReasonProjectApiModel** | [**CreateAutoTestResultReasonProjectApiModel**](../Models/CreateAutoTestResultReasonProjectApiModel.md)|  | [optional] |

### Return type

[**AutoTestResultReasonProjectApiResult**](../Models/AutoTestResultReasonProjectApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2AutotestsFailureCategoriesPut"></a>
# **apiV2AutotestsFailureCategoriesPut**
> apiV2AutotestsFailureCategoriesPut(UpdateAutoTestResultReasonProjectApiModel)

Update failure category

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **UpdateAutoTestResultReasonProjectApiModel** | [**UpdateAutoTestResultReasonProjectApiModel**](../Models/UpdateAutoTestResultReasonProjectApiModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2AutotestsFailureCategoriesSearchPost"></a>
# **apiV2AutotestsFailureCategoriesSearchPost**
> List apiV2AutotestsFailureCategoriesSearchPost(Skip, Take, OrderBy, SearchField, SearchValue, AutotestResultReasonFilterModel)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **AutotestResultReasonFilterModel** | [**AutotestResultReasonFilterModel**](../Models/AutotestResultReasonFilterModel.md)|  | [optional] |

### Return type

[**List**](../Models/AutotestResultReasonShortGetModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2AutotestsResultReasonsCountPerFailureCategoryPost"></a>
# **apiV2AutotestsResultReasonsCountPerFailureCategoryPost**
> AutoTestResultReasonsCountModel apiV2AutotestsResultReasonsCountPerFailureCategoryPost(AutotestResultReasonFilterModel)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **AutotestResultReasonFilterModel** | [**AutotestResultReasonFilterModel**](../Models/AutotestResultReasonFilterModel.md)|  | [optional] |

### Return type

[**AutoTestResultReasonsCountModel**](../Models/AutoTestResultReasonsCountModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2AutotestsResultReasonsGroupingSearchPost"></a>
# **apiV2AutotestsResultReasonsGroupingSearchPost**
> AutoTestResultReasonGroupItemApiResultReply apiV2AutotestsResultReasonsGroupingSearchPost(AutoTestResultReasonGroupSearchApiModel)

Get failure categories with support for filtering, sorting and grouping

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **AutoTestResultReasonGroupSearchApiModel** | [**AutoTestResultReasonGroupSearchApiModel**](../Models/AutoTestResultReasonGroupSearchApiModel.md)|  | [optional] |

### Return type

[**AutoTestResultReasonGroupItemApiResultReply**](../Models/AutoTestResultReasonGroupItemApiResultReply.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2AutotestsResultReasonsIdDelete"></a>
# **apiV2AutotestsResultReasonsIdDelete**
> apiV2AutotestsResultReasonsIdDelete(id)

Delete failure category

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**|  | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2AutotestsResultReasonsIdGet"></a>
# **apiV2AutotestsResultReasonsIdGet**
> AutoTestResultReasonProjectApiResult apiV2AutotestsResultReasonsIdGet(id, isDeleted)

Get failure category by ID

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**|  | [default to null] |
| **isDeleted** | **Boolean**|  | [optional] [default to null] |

### Return type

[**AutoTestResultReasonProjectApiResult**](../Models/AutoTestResultReasonProjectApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2AutotestsResultReasonsNameNameExistsGet"></a>
# **apiV2AutotestsResultReasonsNameNameExistsGet**
> Boolean apiV2AutotestsResultReasonsNameNameExistsGet(name)

Check failure category with the specified name already exists

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **name** | **String**|  | [default to null] |

### Return type

**Boolean**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2AutotestsResultReasonsPost"></a>
# **apiV2AutotestsResultReasonsPost**
> AutoTestResultReasonProjectApiResult apiV2AutotestsResultReasonsPost(CreateAutoTestResultReasonProjectApiModel)

Create failure category

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **CreateAutoTestResultReasonProjectApiModel** | [**CreateAutoTestResultReasonProjectApiModel**](../Models/CreateAutoTestResultReasonProjectApiModel.md)|  | [optional] |

### Return type

[**AutoTestResultReasonProjectApiResult**](../Models/AutoTestResultReasonProjectApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2AutotestsResultReasonsPut"></a>
# **apiV2AutotestsResultReasonsPut**
> apiV2AutotestsResultReasonsPut(UpdateAutoTestResultReasonProjectApiModel)

Update failure category

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **UpdateAutoTestResultReasonProjectApiModel** | [**UpdateAutoTestResultReasonProjectApiModel**](../Models/UpdateAutoTestResultReasonProjectApiModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2AutotestsResultReasonsSearchPost"></a>
# **apiV2AutotestsResultReasonsSearchPost**
> List apiV2AutotestsResultReasonsSearchPost(Skip, Take, OrderBy, SearchField, SearchValue, AutotestResultReasonFilterModel)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **AutotestResultReasonFilterModel** | [**AutotestResultReasonFilterModel**](../Models/AutotestResultReasonFilterModel.md)|  | [optional] |

### Return type

[**List**](../Models/AutotestResultReasonShortGetModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

