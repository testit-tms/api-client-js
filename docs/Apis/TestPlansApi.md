# TestPlansApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addTestPointsWithSections**](TestPlansApi.md#addTestPointsWithSections) | **POST** /api/v2/testPlans/{id}/test-points/withSections | Add test-points to TestPlan with sections |
| [**addWorkItemsWithSections**](TestPlansApi.md#addWorkItemsWithSections) | **POST** /api/v2/testPlans/{id}/workItems/withSections | Add WorkItems to TestPlan with Sections as TestSuites |
| [**apiV2TestPlansIdAnalyticsGet**](TestPlansApi.md#apiV2TestPlansIdAnalyticsGet) | **GET** /api/v2/testPlans/{id}/analytics | Get analytics by TestPlan |
| [**apiV2TestPlansIdAutobalancePost**](TestPlansApi.md#apiV2TestPlansIdAutobalancePost) | **POST** /api/v2/testPlans/{id}/autobalance | Distribute test points between the users |
| [**apiV2TestPlansIdConfigurationsGet**](TestPlansApi.md#apiV2TestPlansIdConfigurationsGet) | **GET** /api/v2/testPlans/{id}/configurations | Get TestPlan configurations |
| [**apiV2TestPlansIdExportTestPointsXlsxPost**](TestPlansApi.md#apiV2TestPlansIdExportTestPointsXlsxPost) | **POST** /api/v2/testPlans/{id}/export/testPoints/xlsx | Export TestPoints from TestPlan in xls format |
| [**apiV2TestPlansIdExportTestResultHistoryXlsxPost**](TestPlansApi.md#apiV2TestPlansIdExportTestResultHistoryXlsxPost) | **POST** /api/v2/testPlans/{id}/export/testResultHistory/xlsx | Export TestResults history from TestPlan in xls format |
| [**apiV2TestPlansIdHistoryGet**](TestPlansApi.md#apiV2TestPlansIdHistoryGet) | **GET** /api/v2/testPlans/{id}/history | Get TestPlan history |
| [**apiV2TestPlansIdLinksGet**](TestPlansApi.md#apiV2TestPlansIdLinksGet) | **GET** /api/v2/testPlans/{id}/links | Get Links of TestPlan |
| [**apiV2TestPlansIdTestPointsLastResultsGet**](TestPlansApi.md#apiV2TestPlansIdTestPointsLastResultsGet) | **GET** /api/v2/testPlans/{id}/testPoints/lastResults | Get TestPoints with last result from TestPlan |
| [**apiV2TestPlansIdTestPointsResetPost**](TestPlansApi.md#apiV2TestPlansIdTestPointsResetPost) | **POST** /api/v2/testPlans/{id}/testPoints/reset | Reset TestPoints status of TestPlan |
| [**apiV2TestPlansIdTestRunsGet**](TestPlansApi.md#apiV2TestPlansIdTestRunsGet) | **GET** /api/v2/testPlans/{id}/testRuns | Get TestRuns of TestPlan |
| [**apiV2TestPlansIdTestRunsSearchPost**](TestPlansApi.md#apiV2TestPlansIdTestRunsSearchPost) | **POST** /api/v2/testPlans/{id}/testRuns/search | Search TestRuns of TestPlan |
| [**apiV2TestPlansIdTestRunsTestResultsLastModifiedModifiedDateGet**](TestPlansApi.md#apiV2TestPlansIdTestRunsTestResultsLastModifiedModifiedDateGet) | **GET** /api/v2/testPlans/{id}/testRuns/testResults/lastModified/modifiedDate | Get last modification date of test plan&#39;s test results |
| [**apiV2TestPlansIdUnlockRequestPost**](TestPlansApi.md#apiV2TestPlansIdUnlockRequestPost) | **POST** /api/v2/testPlans/{id}/unlock/request | Send unlock TestPlan notification |
| [**apiV2TestPlansShortsPost**](TestPlansApi.md#apiV2TestPlansShortsPost) | **POST** /api/v2/testPlans/shorts | Get TestPlans short models by Project identifiers |
| [**clone**](TestPlansApi.md#clone) | **POST** /api/v2/testPlans/{id}/clone | Clone TestPlan |
| [**complete**](TestPlansApi.md#complete) | **POST** /api/v2/testPlans/{id}/complete | Complete TestPlan |
| [**createTestPlan**](TestPlansApi.md#createTestPlan) | **POST** /api/v2/testPlans | Create TestPlan |
| [**deleteTestPlan**](TestPlansApi.md#deleteTestPlan) | **DELETE** /api/v2/testPlans/{id} | Delete TestPlan |
| [**getTestPlanById**](TestPlansApi.md#getTestPlanById) | **GET** /api/v2/testPlans/{id} | Get TestPlan by Id |
| [**getTestSuitesById**](TestPlansApi.md#getTestSuitesById) | **GET** /api/v2/testPlans/{id}/testSuites | Get TestSuites Tree By Id |
| [**pause**](TestPlansApi.md#pause) | **POST** /api/v2/testPlans/{id}/pause | Pause TestPlan |
| [**restoreTestPlan**](TestPlansApi.md#restoreTestPlan) | **POST** /api/v2/testPlans/{id}/restore | Restore TestPlan |
| [**start**](TestPlansApi.md#start) | **POST** /api/v2/testPlans/{id}/start | Start TestPlan |
| [**updateTestPlan**](TestPlansApi.md#updateTestPlan) | **PUT** /api/v2/testPlans | Update TestPlan |


<a name="addTestPointsWithSections"></a>
# **addTestPointsWithSections**
> addTestPointsWithSections(id, WorkItemSelectModel)

Add test-points to TestPlan with sections

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | [default to null] |
| **WorkItemSelectModel** | [**WorkItemSelectModel**](../Models/WorkItemSelectModel.md)| Filter object to retrieve work items for test-suite&#39;s project | [optional] |

### Return type

null (empty response body)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="addWorkItemsWithSections"></a>
# **addWorkItemsWithSections**
> addWorkItemsWithSections(id, request\_body)

Add WorkItems to TestPlan with Sections as TestSuites

    &lt;br&gt;Use case  &lt;br&gt;User sets TestPlan identifier  &lt;br&gt;User sets WorkItem identifiers (listed in request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System added WorkItems and Sections to TestPlan  &lt;br&gt;System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | [default to null] |
| **request\_body** | [**Set**](../Models/UUID.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2TestPlansIdAnalyticsGet"></a>
# **apiV2TestPlansIdAnalyticsGet**
> TestPointAnalyticResult apiV2TestPlansIdAnalyticsGet(id)

Get analytics by TestPlan

    &lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System returns analytics by test plan

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | [default to null] |

### Return type

[**TestPointAnalyticResult**](../Models/TestPointAnalyticResult.md)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TestPlansIdAutobalancePost"></a>
# **apiV2TestPlansIdAutobalancePost**
> TestPlanWithTestSuiteTreeModel apiV2TestPlansIdAutobalancePost(id, testers)

Distribute test points between the users

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan unique or global ID | [default to null] |
| **testers** | [**Set**](../Models/UUID.md)| Specifies a project user IDs to distribute | [optional] [default to null] |

### Return type

[**TestPlanWithTestSuiteTreeModel**](../Models/TestPlanWithTestSuiteTreeModel.md)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TestPlansIdConfigurationsGet"></a>
# **apiV2TestPlansIdConfigurationsGet**
> List apiV2TestPlansIdConfigurationsGet(id)

Get TestPlan configurations

    &lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System return test plan configurations

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | [default to null] |

### Return type

[**List**](../Models/ConfigurationModel.md)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TestPlansIdExportTestPointsXlsxPost"></a>
# **apiV2TestPlansIdExportTestPointsXlsxPost**
> File apiV2TestPlansIdExportTestPointsXlsxPost(id, time-Zone-Offset-In-Minutes, GetXlsxTestPointsByTestPlanModel)

Export TestPoints from TestPlan in xls format

    &lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User sets filter model (listed in request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System return export xlsx file

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | [default to null] |
| **time-Zone-Offset-In-Minutes** | **Long**|  | [optional] [default to null] |
| **GetXlsxTestPointsByTestPlanModel** | [**GetXlsxTestPointsByTestPlanModel**](../Models/GetXlsxTestPointsByTestPlanModel.md)|  | [optional] |

### Return type

**File**

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/octet-stream, application/json

<a name="apiV2TestPlansIdExportTestResultHistoryXlsxPost"></a>
# **apiV2TestPlansIdExportTestResultHistoryXlsxPost**
> File apiV2TestPlansIdExportTestResultHistoryXlsxPost(id, mustReturnOnlyLastTestResult, includeSteps, includeDeletedTestSuites, time-Zone-Offset-In-Minutes)

Export TestResults history from TestPlan in xls format

    &lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User sets filter model (listed in request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System return export xlsx file

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | [default to null] |
| **mustReturnOnlyLastTestResult** | **Boolean**|  | [optional] [default to null] |
| **includeSteps** | **Boolean**|  | [optional] [default to null] |
| **includeDeletedTestSuites** | **Boolean**|  | [optional] [default to null] |
| **time-Zone-Offset-In-Minutes** | **Long**|  | [optional] [default to null] |

### Return type

**File**

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream, application/json

<a name="apiV2TestPlansIdHistoryGet"></a>
# **apiV2TestPlansIdHistoryGet**
> List apiV2TestPlansIdHistoryGet(id, Skip, Take, OrderBy, SearchField, SearchValue)

Get TestPlan history

    &lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System return test plan history

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | [default to null] |
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |

### Return type

[**List**](../Models/TestPlanChangeModel.md)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TestPlansIdLinksGet"></a>
# **apiV2TestPlansIdLinksGet**
> List apiV2TestPlansIdLinksGet(id, skip, take, orderBy)

Get Links of TestPlan

    &lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User sets pagination filter (listed in request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System returns links of TestPlan

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | [default to null] |
| **skip** | **Integer**|  | [optional] [default to null] |
| **take** | **Integer**|  | [optional] [default to null] |
| **orderBy** | **String**|  | [optional] [default to null] |

### Return type

[**List**](../Models/TestPlanLink.md)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TestPlansIdTestPointsLastResultsGet"></a>
# **apiV2TestPlansIdTestPointsLastResultsGet**
> List apiV2TestPlansIdTestPointsLastResultsGet(id, testerId, Skip, Take, OrderBy, SearchField, SearchValue)

Get TestPoints with last result from TestPlan

    &lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User sets filter (listed in request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System return test points with last result from test plan

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | [default to null] |
| **testerId** | **UUID**|  | [optional] [default to null] |
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |

### Return type

[**List**](../Models/TestPointWithLastResultModel.md)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TestPlansIdTestPointsResetPost"></a>
# **apiV2TestPlansIdTestPointsResetPost**
> apiV2TestPlansIdTestPointsResetPost(id, request\_body)

Reset TestPoints status of TestPlan

    &lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User sets test points identifiers  &lt;br&gt;User runs method execution  &lt;br&gt;System reset test points statuses of test plan

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | [default to null] |
| **request\_body** | [**Set**](../Models/UUID.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2TestPlansIdTestRunsGet"></a>
# **apiV2TestPlansIdTestRunsGet**
> List apiV2TestPlansIdTestRunsGet(id, notStarted, inProgress, stopped, completed, Skip, Take, OrderBy, SearchField, SearchValue)

Get TestRuns of TestPlan

    &lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User sets TestRun status filter (listed in request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System returns TestRuns for TestPlan

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | [default to null] |
| **notStarted** | **Boolean**|  | [optional] [default to null] |
| **inProgress** | **Boolean**|  | [optional] [default to null] |
| **stopped** | **Boolean**|  | [optional] [default to null] |
| **completed** | **Boolean**|  | [optional] [default to null] |
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |

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

<a name="apiV2TestPlansIdTestRunsSearchPost"></a>
# **apiV2TestPlansIdTestRunsSearchPost**
> List apiV2TestPlansIdTestRunsSearchPost(id, Skip, Take, OrderBy, SearchField, SearchValue, TestRunSearchQueryModel)

Search TestRuns of TestPlan

    &lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User sets TestRuns filter (listed in request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System returns TestRuns for TestPlan

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | [default to null] |
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **TestRunSearchQueryModel** | [**TestRunSearchQueryModel**](../Models/TestRunSearchQueryModel.md)|  | [optional] |

### Return type

[**List**](../Models/TestRunModel.md)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2TestPlansIdTestRunsTestResultsLastModifiedModifiedDateGet"></a>
# **apiV2TestPlansIdTestRunsTestResultsLastModifiedModifiedDateGet**
> Date apiV2TestPlansIdTestRunsTestResultsLastModifiedModifiedDateGet(id)

Get last modification date of test plan&#39;s test results

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan unique or global ID | [default to null] |

### Return type

**Date**

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TestPlansIdUnlockRequestPost"></a>
# **apiV2TestPlansIdUnlockRequestPost**
> apiV2TestPlansIdUnlockRequestPost(id)

Send unlock TestPlan notification

    &lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System send unlock test plan notification

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | [default to null] |

### Return type

null (empty response body)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TestPlansShortsPost"></a>
# **apiV2TestPlansShortsPost**
> List apiV2TestPlansShortsPost(isDeleted, request\_body)

Get TestPlans short models by Project identifiers

    &lt;br&gt;Use case  &lt;br&gt;User sets projects identifiers  &lt;br&gt;User runs method execution  &lt;br&gt;System return test plans short models (listed in response example)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **isDeleted** | **Boolean**|  | [optional] [default to null] |
| **request\_body** | [**Set**](../Models/UUID.md)|  | [optional] |

### Return type

[**List**](../Models/TestPlanShortModel.md)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="clone"></a>
# **clone**
> TestPlanModel clone(id)

Clone TestPlan

    &lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System clones test plan  &lt;br&gt;System returns test plan (listed in response example)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | [default to null] |

### Return type

[**TestPlanModel**](../Models/TestPlanModel.md)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="complete"></a>
# **complete**
> complete(id)

Complete TestPlan

    &lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System completes the test plan and updates test plan status  &lt;br&gt;System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | [default to null] |

### Return type

null (empty response body)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createTestPlan"></a>
# **createTestPlan**
> TestPlanModel createTestPlan(TestPlanPostModel)

Create TestPlan

    &lt;br&gt;Use case  &lt;br&gt;User sets test plan properties (listed in request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System creates test plan  &lt;br&gt;System returns test plan (listed in response example)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **TestPlanPostModel** | [**TestPlanPostModel**](../Models/TestPlanPostModel.md)|  | [optional] |

### Return type

[**TestPlanModel**](../Models/TestPlanModel.md)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteTestPlan"></a>
# **deleteTestPlan**
> deleteTestPlan(id)

Delete TestPlan

    &lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System delete test plan  &lt;br&gt;System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | [default to null] |

### Return type

null (empty response body)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTestPlanById"></a>
# **getTestPlanById**
> TestPlanModel getTestPlanById(id)

Get TestPlan by Id

    &lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System search  test plan by the identifier  &lt;br&gt;System returns test plan

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | [default to null] |

### Return type

[**TestPlanModel**](../Models/TestPlanModel.md)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTestSuitesById"></a>
# **getTestSuitesById**
> List getTestSuitesById(id)

Get TestSuites Tree By Id

    &lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System finds test suites related to the test plan  &lt;br&gt;System returns test suites as a tree model (listed in response example)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | [default to null] |

### Return type

[**List**](../Models/TestSuiteV2TreeModel.md)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="pause"></a>
# **pause**
> pause(id)

Pause TestPlan

    &lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System pauses the test plan and updates test plan status  &lt;br&gt;System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | [default to null] |

### Return type

null (empty response body)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="restoreTestPlan"></a>
# **restoreTestPlan**
> restoreTestPlan(id)

Restore TestPlan

    &lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System restores test plan  &lt;br&gt;System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | [default to null] |

### Return type

null (empty response body)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="start"></a>
# **start**
> start(id)

Start TestPlan

    &lt;br&gt;Use case  &lt;br&gt;User sets test plan identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System starts the test plan and updates test plan status  &lt;br&gt;System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int  format) identifier | [default to null] |

### Return type

null (empty response body)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateTestPlan"></a>
# **updateTestPlan**
> updateTestPlan(TestPlanPutModel)

Update TestPlan

    &lt;br&gt;Use case  &lt;br&gt;User sets test plan properties(listed in request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System updates test plan  &lt;br&gt;System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **TestPlanPutModel** | [**TestPlanPutModel**](../Models/TestPlanPutModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

