# TestPointsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2TestPointsIdTestRunsGet**](TestPointsApi.md#apiV2TestPointsIdTestRunsGet) | **GET** /api/v2/testPoints/{id}/testRuns | Get all test runs which use test point |
| [**apiV2TestPointsIdWorkItemGet**](TestPointsApi.md#apiV2TestPointsIdWorkItemGet) | **GET** /api/v2/testPoints/{id}/workItem | Get work item represented by test point |
| [**apiV2TestPointsSearchIdPost**](TestPointsApi.md#apiV2TestPointsSearchIdPost) | **POST** /api/v2/testPoints/search/id | Search for test points and extract IDs only |
| [**apiV2TestPointsSearchPost**](TestPointsApi.md#apiV2TestPointsSearchPost) | **POST** /api/v2/testPoints/search | Search for test points |


<a name="apiV2TestPointsIdTestRunsGet"></a>
# **apiV2TestPointsIdTestRunsGet**
> List apiV2TestPointsIdTestRunsGet(id)

Get all test runs which use test point

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test point unique ID | [default to null] |

### Return type

[**List**](../Models/TestRunModel.md)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TestPointsIdWorkItemGet"></a>
# **apiV2TestPointsIdWorkItemGet**
> WorkItemModel apiV2TestPointsIdWorkItemGet(id)

Get work item represented by test point

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test point unique ID | [default to null] |

### Return type

[**WorkItemModel**](../Models/WorkItemModel.md)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TestPointsSearchIdPost"></a>
# **apiV2TestPointsSearchIdPost**
> List apiV2TestPointsSearchIdPost(Skip, Take, OrderBy, SearchField, SearchValue, TestPointFilterModel)

Search for test points and extract IDs only

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **TestPointFilterModel** | [**TestPointFilterModel**](../Models/TestPointFilterModel.md)|  | [optional] |

### Return type

**List**

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2TestPointsSearchPost"></a>
# **apiV2TestPointsSearchPost**
> List apiV2TestPointsSearchPost(Skip, Take, OrderBy, SearchField, SearchValue, TestPointFilterModel)

Search for test points

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **TestPointFilterModel** | [**TestPointFilterModel**](../Models/TestPointFilterModel.md)|  | [optional] |

### Return type

[**List**](../Models/TestPointShortGetModel.md)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

