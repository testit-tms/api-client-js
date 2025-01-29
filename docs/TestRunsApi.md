# TestRunsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2TestRunsDelete**](TestRunsApi.md#apiV2TestRunsDelete) | **DELETE** /api/v2/testRuns | Delete multiple test runs |
| [**apiV2TestRunsIdAutoTestsNamespacesGet**](TestRunsApi.md#apiV2TestRunsIdAutoTestsNamespacesGet) | **GET** /api/v2/testRuns/{id}/autoTestsNamespaces | Get autotest classes and namespaces in test run |
| [**apiV2TestRunsIdDelete**](TestRunsApi.md#apiV2TestRunsIdDelete) | **DELETE** /api/v2/testRuns/{id} | Delete test run |
| [**apiV2TestRunsIdPurgePost**](TestRunsApi.md#apiV2TestRunsIdPurgePost) | **POST** /api/v2/testRuns/{id}/purge | Permanently delete test run from archive |
| [**apiV2TestRunsIdRerunsPost**](TestRunsApi.md#apiV2TestRunsIdRerunsPost) | **POST** /api/v2/testRuns/{id}/reruns | Manual autotests rerun in test run |
| [**apiV2TestRunsIdRestorePost**](TestRunsApi.md#apiV2TestRunsIdRestorePost) | **POST** /api/v2/testRuns/{id}/restore | Restore test run from the archive |
| [**apiV2TestRunsIdStatisticsFilterPost**](TestRunsApi.md#apiV2TestRunsIdStatisticsFilterPost) | **POST** /api/v2/testRuns/{id}/statistics/filter | Search for the test run test results and build statistics |
| [**apiV2TestRunsIdTestPointsResultsGet**](TestRunsApi.md#apiV2TestRunsIdTestPointsResultsGet) | **GET** /api/v2/testRuns/{id}/testPoints/results | Get test results from the test run grouped by test points |
| [**apiV2TestRunsIdTestResultsBulkPut**](TestRunsApi.md#apiV2TestRunsIdTestResultsBulkPut) | **PUT** /api/v2/testRuns/{id}/testResults/bulk | Partial edit of multiple test results in the test run |
| [**apiV2TestRunsIdTestResultsLastModifiedModificationDateGet**](TestRunsApi.md#apiV2TestRunsIdTestResultsLastModifiedModificationDateGet) | **GET** /api/v2/testRuns/{id}/testResults/lastModified/modificationDate | Get modification date of last test result of the test run |
| [**apiV2TestRunsPurgeBulkPost**](TestRunsApi.md#apiV2TestRunsPurgeBulkPost) | **POST** /api/v2/testRuns/purge/bulk | Permanently delete multiple test runs from archive |
| [**apiV2TestRunsRestoreBulkPost**](TestRunsApi.md#apiV2TestRunsRestoreBulkPost) | **POST** /api/v2/testRuns/restore/bulk | Restore multiple test runs from the archive |
| [**apiV2TestRunsSearchPost**](TestRunsApi.md#apiV2TestRunsSearchPost) | **POST** /api/v2/testRuns/search | Search for test runs |
| [**apiV2TestRunsUpdateMultiplePost**](TestRunsApi.md#apiV2TestRunsUpdateMultiplePost) | **POST** /api/v2/testRuns/updateMultiple | Update multiple test runs |
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


<a name="apiV2TestRunsDelete"></a>
# **apiV2TestRunsDelete**
> Integer apiV2TestRunsDelete(TestRunSelectApiModel)

Delete multiple test runs

     Use case   User sets selection parameters of test runs   System search and delete collection of test runs   System returns the number of deleted test runs

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **TestRunSelectApiModel** | [**TestRunSelectApiModel**](../Models/TestRunSelectApiModel.md)|  | [optional] |

### Return type

**Integer**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2TestRunsIdAutoTestsNamespacesGet"></a>
# **apiV2TestRunsIdAutoTestsNamespacesGet**
> AutoTestNamespacesCountResponse apiV2TestRunsIdAutoTestsNamespacesGet(id)

Get autotest classes and namespaces in test run

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**|  | [default to null] |

### Return type

[**AutoTestNamespacesCountResponse**](../Models/AutoTestNamespacesCountResponse.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TestRunsIdDelete"></a>
# **apiV2TestRunsIdDelete**
> apiV2TestRunsIdDelete(id)

Delete test run

     Use case   User sets test run internal (guid format) identifier   System search and delete test run

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test run internal (UUID) identifier | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TestRunsIdPurgePost"></a>
# **apiV2TestRunsIdPurgePost**
> apiV2TestRunsIdPurgePost(id)

Permanently delete test run from archive

     Use case   User sets archived test run internal (guid format) identifier   System search and purge archived test run

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test run internal (UUID) identifier | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TestRunsIdRerunsPost"></a>
# **apiV2TestRunsIdRerunsPost**
> ManualRerunApiResult apiV2TestRunsIdRerunsPost(id, ManualRerunSelectApiModel)

Manual autotests rerun in test run

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**|  | [default to null] |
| **ManualRerunSelectApiModel** | [**ManualRerunSelectApiModel**](../Models/ManualRerunSelectApiModel.md)|  | [optional] |

### Return type

[**ManualRerunApiResult**](../Models/ManualRerunApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2TestRunsIdRestorePost"></a>
# **apiV2TestRunsIdRestorePost**
> apiV2TestRunsIdRestorePost(id)

Restore test run from the archive

     Use case   User sets archived test run internal (guid format) identifier   System search and restore test run

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Unique ID of the test run | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TestRunsIdStatisticsFilterPost"></a>
# **apiV2TestRunsIdStatisticsFilterPost**
> TestResultsStatisticsApiResult apiV2TestRunsIdStatisticsFilterPost(id, TestRunStatisticsFilterApiModel)

Search for the test run test results and build statistics

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test run unique ID | [default to null] |
| **TestRunStatisticsFilterApiModel** | [**TestRunStatisticsFilterApiModel**](../Models/TestRunStatisticsFilterApiModel.md)|  | [optional] |

### Return type

[**TestResultsStatisticsApiResult**](../Models/TestResultsStatisticsApiResult.md)

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

<a name="apiV2TestRunsPurgeBulkPost"></a>
# **apiV2TestRunsPurgeBulkPost**
> Integer apiV2TestRunsPurgeBulkPost(TestRunSelectApiModel)

Permanently delete multiple test runs from archive

     Use case   User sets selection parameters of archived test runs   System search and delete collection of archived test runs   System returns the number of deleted archived test runs

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **TestRunSelectApiModel** | [**TestRunSelectApiModel**](../Models/TestRunSelectApiModel.md)|  | [optional] |

### Return type

**Integer**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2TestRunsRestoreBulkPost"></a>
# **apiV2TestRunsRestoreBulkPost**
> Integer apiV2TestRunsRestoreBulkPost(TestRunSelectApiModel)

Restore multiple test runs from the archive

     Use case   User sets selection parameters of archived test runs   System search and restore collection of archived test runs   System returns the number of restored test runs

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **TestRunSelectApiModel** | [**TestRunSelectApiModel**](../Models/TestRunSelectApiModel.md)|  | [optional] |

### Return type

**Integer**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2TestRunsSearchPost"></a>
# **apiV2TestRunsSearchPost**
> List apiV2TestRunsSearchPost(Skip, Take, OrderBy, SearchField, SearchValue, TestRunFilterApiModel)

Search for test runs

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **TestRunFilterApiModel** | [**TestRunFilterApiModel**](../Models/TestRunFilterApiModel.md)|  | [optional] |

### Return type

[**List**](../Models/TestRunShortApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2TestRunsUpdateMultiplePost"></a>
# **apiV2TestRunsUpdateMultiplePost**
> apiV2TestRunsUpdateMultiplePost(UpdateMultipleTestRunsApiModel)

Update multiple test runs

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **UpdateMultipleTestRunsApiModel** | [**UpdateMultipleTestRunsApiModel**](../Models/UpdateMultipleTestRunsApiModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="completeTestRun"></a>
# **completeTestRun**
> completeTestRun(id)

Complete TestRun

     Use case   User sets test run identifier   User runs method execution   System completes test run   System returns no content response

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
> TestRunV2ApiResult createAndFillByAutoTests(CreateTestRunAndFillByAutoTestsApiModel)

Create test runs based on autotests and configurations

    This method creates a test run based on an autotest and a configuration.  The difference between the &#x60;POST /api/v2/testRuns/byWorkItems&#x60; and &#x60;POST /api/v2/testRuns/byConfigurations&#x60; methods is  that in this method there is no need to create a test plan and work items (test cases and checklists).

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **CreateTestRunAndFillByAutoTestsApiModel** | [**CreateTestRunAndFillByAutoTestsApiModel**](../Models/CreateTestRunAndFillByAutoTestsApiModel.md)|  | [optional] |

### Return type

[**TestRunV2ApiResult**](../Models/TestRunV2ApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createAndFillByConfigurations"></a>
# **createAndFillByConfigurations**
> TestRunV2ApiResult createAndFillByConfigurations(CreateTestRunAndFillByConfigurationsApiModel)

Create test runs picking the needed test points

    This method creates a test run based on a combination of a configuration and a work item(test case or checklist).  Before you create a test run using this method, make sure to create a test plan. Work items must be automated.  This method is different from the &#x60;POST /api/v2/testRuns/byWorkItems&#x60; method because of the ability to send a  jagged array within the \&quot;&lt;b&gt;testPointSelectors&lt;/b&gt;\&quot; parameter.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **CreateTestRunAndFillByConfigurationsApiModel** | [**CreateTestRunAndFillByConfigurationsApiModel**](../Models/CreateTestRunAndFillByConfigurationsApiModel.md)|  | [optional] |

### Return type

[**TestRunV2ApiResult**](../Models/TestRunV2ApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createAndFillByWorkItems"></a>
# **createAndFillByWorkItems**
> TestRunV2ApiResult createAndFillByWorkItems(CreateTestRunAndFillByWorkItemsApiModel)

Create test run based on configurations and work items

    This method creates a test run based on a combination of configuration and work item (test case or checklist).  Before you create a test run using this method, make sure to create a test plan.  Work items must be automated.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **CreateTestRunAndFillByWorkItemsApiModel** | [**CreateTestRunAndFillByWorkItemsApiModel**](../Models/CreateTestRunAndFillByWorkItemsApiModel.md)|  | [optional] |

### Return type

[**TestRunV2ApiResult**](../Models/TestRunV2ApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createEmpty"></a>
# **createEmpty**
> TestRunV2ApiResult createEmpty(CreateEmptyTestRunApiModel)

Create empty TestRun

     Use case   User sets test run model (listed in the request example)   User runs method execution   System creates test run   System returns test run model

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **CreateEmptyTestRunApiModel** | [**CreateEmptyTestRunApiModel**](../Models/CreateEmptyTestRunApiModel.md)|  | [optional] |

### Return type

[**TestRunV2ApiResult**](../Models/TestRunV2ApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getTestRunById"></a>
# **getTestRunById**
> TestRunV2ApiResult getTestRunById(id)

Get TestRun by Id

     Use case   User sets test run identifier   User runs method execution   System finds test run   System returns test run

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test Run internal identifier (GUID format) | [default to null] |

### Return type

[**TestRunV2ApiResult**](../Models/TestRunV2ApiResult.md)

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

     Use case   User sets test run identifier   User runs method execution   System starts test run   System returns no content response

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

     Use case   User sets test run identifier   User runs method execution   System stops test run   System returns no content response

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
> updateEmpty(UpdateEmptyTestRunApiModel)

Update empty TestRun

     Use case   User sets test run properties (listed in the request example)   User runs method execution   System updates test run   System returns returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **UpdateEmptyTestRunApiModel** | [**UpdateEmptyTestRunApiModel**](../Models/UpdateEmptyTestRunApiModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

