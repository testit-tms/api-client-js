# TestRunsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2TestRunsIdStatisticsFilterPost**](TestRunsApi.md#apiV2TestRunsIdStatisticsFilterPost) | **POST** /api/v2/testRuns/{id}/statistics/filter | Search for the test run test results and build statistics |
| [**apiV2TestRunsIdTestPointsResultsGet**](TestRunsApi.md#apiV2TestRunsIdTestPointsResultsGet) | **GET** /api/v2/testRuns/{id}/testPoints/results | Get test results from the test run grouped by test points |
| [**apiV2TestRunsIdTestResultsBulkPut**](TestRunsApi.md#apiV2TestRunsIdTestResultsBulkPut) | **PUT** /api/v2/testRuns/{id}/testResults/bulk | Partial edit of multiple test results in the test run |
| [**apiV2TestRunsIdTestResultsLastModifiedModificationDateGet**](TestRunsApi.md#apiV2TestRunsIdTestResultsLastModifiedModificationDateGet) | **GET** /api/v2/testRuns/{id}/testResults/lastModified/modificationDate | Get modification date of last test result of the test run |
| [**apiV2TestRunsSearchPost**](TestRunsApi.md#apiV2TestRunsSearchPost) | **POST** /api/v2/testRuns/search | Search for test runs |
| [**completeTestRun**](TestRunsApi.md#completeTestRun) | **POST** /api/v2/testRuns/{id}/complete | Complete TestRun |
| [**createAndFillByAutoTests**](TestRunsApi.md#createAndFillByAutoTests) | **POST** /api/v2/testRuns/byAutoTests | Create test runs based on autotests and configurations |
| [**createAndFillByConfigurations**](TestRunsApi.md#createAndFillByConfigurations) | **POST** /api/v2/testRuns/byConfigurations | Create test runs picking the needed test points |
| [**createAndFillByWorkItems**](TestRunsApi.md#createAndFillByWorkItems) | **POST** /api/v2/testRuns/byWorkItems | Create test run based on configurations and work items |
| [**createEmpty**](TestRunsApi.md#createEmpty) | **POST** /api/v2/testRuns | Create empty TestRun |
| [**getTestRunById**](TestRunsApi.md#getTestRunById) | **GET** /api/v2/testRuns/{id} | Get TestRun by Id |
| [**setAutoTestResultsForTestRun**](TestRunsApi.md#setAutoTestResultsForTestRun) | **POST** /api/v2/testRuns/{id}/testResults | Send test results to the test runs in the system |
| [**startTestRun**](TestRunsApi.md#startTestRun) | **POST** /api/v2/testRuns/{id}/start | Start TestRun |
| [**stopTestRun**](TestRunsApi.md#stopTestRun) | **POST** /api/v2/testRuns/{id}/stop | Stop TestRun |
| [**updateEmpty**](TestRunsApi.md#updateEmpty) | **PUT** /api/v2/testRuns | Update empty TestRun |


<a name="apiV2TestRunsIdStatisticsFilterPost"></a>
# **apiV2TestRunsIdStatisticsFilterPost**
> TestResultsStatisticsGetModel apiV2TestRunsIdStatisticsFilterPost(id, TestResultsLocalFilterModel)

Search for the test run test results and build statistics

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test run unique ID | [default to null] |
| **TestResultsLocalFilterModel** | [**TestResultsLocalFilterModel**](../Models/TestResultsLocalFilterModel.md)|  | [optional] |

### Return type

[**TestResultsStatisticsGetModel**](../Models/TestResultsStatisticsGetModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2TestRunsIdTestPointsResultsGet"></a>
# **apiV2TestRunsIdTestPointsResultsGet**
> List apiV2TestRunsIdTestPointsResultsGet(id)

Get test results from the test run grouped by test points

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test run unique ID | [default to null] |

### Return type

[**List**](../Models/TestPointResultModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TestRunsIdTestResultsBulkPut"></a>
# **apiV2TestRunsIdTestResultsBulkPut**
> apiV2TestRunsIdTestResultsBulkPut(id, TestRunTestResultsPartialBulkSetModel)

Partial edit of multiple test results in the test run

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test run unique ID | [default to null] |
| **TestRunTestResultsPartialBulkSetModel** | [**TestRunTestResultsPartialBulkSetModel**](../Models/TestRunTestResultsPartialBulkSetModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2TestRunsIdTestResultsLastModifiedModificationDateGet"></a>
# **apiV2TestRunsIdTestResultsLastModifiedModificationDateGet**
> Date apiV2TestRunsIdTestResultsLastModifiedModificationDateGet(id)

Get modification date of last test result of the test run

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test run unique ID | [default to null] |

### Return type

**Date**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TestRunsSearchPost"></a>
# **apiV2TestRunsSearchPost**
> List apiV2TestRunsSearchPost(Skip, Take, OrderBy, SearchField, SearchValue, TestRunFilterModel)

Search for test runs

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **TestRunFilterModel** | [**TestRunFilterModel**](../Models/TestRunFilterModel.md)|  | [optional] |

### Return type

[**List**](../Models/TestRunShortGetModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="completeTestRun"></a>
# **completeTestRun**
> completeTestRun(id)

Complete TestRun

    &lt;br&gt;Use case  &lt;br&gt;User sets test run identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System completes test run  &lt;br&gt;System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test Run internal identifier (GUID format) | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createAndFillByAutoTests"></a>
# **createAndFillByAutoTests**
> TestRunV2GetModel createAndFillByAutoTests(TestRunFillByAutoTestsPostModel)

Create test runs based on autotests and configurations

    This method creates a test run based on an autotest and a configuration.  The difference between the &#x60;POST /api/v2/testRuns/byWorkItems&#x60; and &#x60;POST /api/v2/testRuns/byConfigurations&#x60; methods is  that in this method there is no need to create a test plan and work items (test cases and checklists).

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **TestRunFillByAutoTestsPostModel** | [**TestRunFillByAutoTestsPostModel**](../Models/TestRunFillByAutoTestsPostModel.md)|  | [optional] |

### Return type

[**TestRunV2GetModel**](../Models/TestRunV2GetModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createAndFillByConfigurations"></a>
# **createAndFillByConfigurations**
> TestRunV2GetModel createAndFillByConfigurations(TestRunFillByConfigurationsPostModel)

Create test runs picking the needed test points

    This method creates a test run based on a combination of a configuration and a work item(test case or checklist).  Before you create a test run using this method, make sure to create a test plan. Work items must be automated.  This method is different from the &#x60;POST /api/v2/testRuns/byWorkItems&#x60; method because of the ability to send a  jagged array within the \&quot;&lt;b&gt;testPointSelectors&lt;/b&gt;\&quot; parameter.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **TestRunFillByConfigurationsPostModel** | [**TestRunFillByConfigurationsPostModel**](../Models/TestRunFillByConfigurationsPostModel.md)|  | [optional] |

### Return type

[**TestRunV2GetModel**](../Models/TestRunV2GetModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createAndFillByWorkItems"></a>
# **createAndFillByWorkItems**
> TestRunV2GetModel createAndFillByWorkItems(TestRunFillByWorkItemsPostModel)

Create test run based on configurations and work items

    This method creates a test run based on a combination of configuration and work item (test case or checklist).  Before you create a test run using this method, make sure to create a test plan.  Work items must be automated.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **TestRunFillByWorkItemsPostModel** | [**TestRunFillByWorkItemsPostModel**](../Models/TestRunFillByWorkItemsPostModel.md)|  | [optional] |

### Return type

[**TestRunV2GetModel**](../Models/TestRunV2GetModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createEmpty"></a>
# **createEmpty**
> TestRunV2GetModel createEmpty(TestRunV2PostShortModel)

Create empty TestRun

    &lt;br&gt;Use case  &lt;br&gt;User sets test run model (listed in the request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System creates test run  &lt;br&gt;System returns test run model

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **TestRunV2PostShortModel** | [**TestRunV2PostShortModel**](../Models/TestRunV2PostShortModel.md)|  | [optional] |

### Return type

[**TestRunV2GetModel**](../Models/TestRunV2GetModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getTestRunById"></a>
# **getTestRunById**
> TestRunV2GetModel getTestRunById(id)

Get TestRun by Id

    &lt;br&gt;Use case  &lt;br&gt;User sets test run identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System finds test run  &lt;br&gt;System returns test run

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test Run internal identifier (GUID format) | [default to null] |

### Return type

[**TestRunV2GetModel**](../Models/TestRunV2GetModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="setAutoTestResultsForTestRun"></a>
# **setAutoTestResultsForTestRun**
> List setAutoTestResultsForTestRun(id, AutoTestResultsForTestRunModel)

Send test results to the test runs in the system

    This method sends test results to the test management system.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test Run internal identifier (GUID format) | [default to null] |
| **AutoTestResultsForTestRunModel** | [**List**](../Models/AutoTestResultsForTestRunModel.md)|  | [optional] |

### Return type

**List**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="startTestRun"></a>
# **startTestRun**
> startTestRun(id)

Start TestRun

    &lt;br&gt;Use case  &lt;br&gt;User sets test run identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System starts test run  &lt;br&gt;System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test Run internal identifier (GUID format) | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="stopTestRun"></a>
# **stopTestRun**
> stopTestRun(id)

Stop TestRun

    &lt;br&gt;Use case  &lt;br&gt;User sets test run identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System stops test run  &lt;br&gt;System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test Run internal identifier (GUID format) | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateEmpty"></a>
# **updateEmpty**
> updateEmpty(TestRunV2PutModel)

Update empty TestRun

    &lt;br&gt;Use case  &lt;br&gt;User sets test run properties (listed in the request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System updates test run  &lt;br&gt;System returns returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **TestRunV2PutModel** | [**TestRunV2PutModel**](../Models/TestRunV2PutModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

