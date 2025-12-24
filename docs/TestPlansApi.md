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
| [**apiV2TestPlansIdPatch**](TestPlansApi.md#apiV2TestPlansIdPatch) | **PATCH** /api/v2/testPlans/{id} | Patch test plan |
| [**apiV2TestPlansIdSummariesGet**](TestPlansApi.md#apiV2TestPlansIdSummariesGet) | **GET** /api/v2/testPlans/{id}/summaries | Get summary by TestPlan |
| [**apiV2TestPlansIdTestPointsLastResultsGet**](TestPlansApi.md#apiV2TestPlansIdTestPointsLastResultsGet) | **GET** /api/v2/testPlans/{id}/testPoints/lastResults | Get TestPoints with last result from TestPlan |
| [**apiV2TestPlansIdTestPointsResetPost**](TestPlansApi.md#apiV2TestPlansIdTestPointsResetPost) | **POST** /api/v2/testPlans/{id}/testPoints/reset | Reset TestPoints status of TestPlan |
| [**apiV2TestPlansIdTestPointsTesterDelete**](TestPlansApi.md#apiV2TestPlansIdTestPointsTesterDelete) | **DELETE** /api/v2/testPlans/{id}/testPoints/tester | Unassign users from multiple test points |
| [**apiV2TestPlansIdTestPointsTesterUserIdPost**](TestPlansApi.md#apiV2TestPlansIdTestPointsTesterUserIdPost) | **POST** /api/v2/testPlans/{id}/testPoints/tester/{userId} | Assign user as a tester to multiple test points |
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
| [**purgeTestPlan**](TestPlansApi.md#purgeTestPlan) | **POST** /api/v2/testPlans/{id}/purge | Permanently delete test plan from archive |
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
| **id** | **String**| Test plan internal (guid format) or global (int format) identifier | [default to null] |
| **WorkItemSelectModel** | [**WorkItemSelectModel**](../Models/WorkItemSelectModel.md)| Filter object to retrieve work items for test-suite&#39;s project | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="addWorkItemsWithSections"></a>
# **addWorkItemsWithSections**
> addWorkItemsWithSections(id, request\_body)

Add WorkItems to TestPlan with Sections as TestSuites

     Use case  User sets TestPlan identifier  User sets WorkItem identifiers (listed in request example)  User runs method execution  System added WorkItems and Sections to TestPlan  System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int format) identifier | [default to null] |
| **request\_body** | [**Set**](../Models/UUID.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2TestPlansIdAnalyticsGet"></a>
# **apiV2TestPlansIdAnalyticsGet**
> TestPointAnalyticResult apiV2TestPlansIdAnalyticsGet(id)

Get analytics by TestPlan

     Use case  User sets test plan identifier  User runs method execution  System returns analytics by test plan

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int format) identifier | [default to null] |

### Return type

[**TestPointAnalyticResult**](../Models/TestPointAnalyticResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

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

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TestPlansIdConfigurationsGet"></a>
# **apiV2TestPlansIdConfigurationsGet**
> List apiV2TestPlansIdConfigurationsGet(id)

Get TestPlan configurations

     Use case  User sets test plan identifier  User runs method execution  System return test plan configurations

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int format) identifier | [default to null] |

### Return type

[**List**](../Models/ConfigurationModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TestPlansIdExportTestPointsXlsxPost"></a>
# **apiV2TestPlansIdExportTestPointsXlsxPost**
> apiV2TestPlansIdExportTestPointsXlsxPost(id, time-Zone-Offset-In-Minutes, GetXlsxTestPointsByTestPlanModel)

Export TestPoints from TestPlan in xls format

     Use case  User sets test plan identifier  User sets filter model (listed in request example)  User runs method execution  System return export xlsx file

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int format) identifier | [default to null] |
| **time-Zone-Offset-In-Minutes** | **Long**|  | [optional] [default to null] |
| **GetXlsxTestPointsByTestPlanModel** | [**GetXlsxTestPointsByTestPlanModel**](../Models/GetXlsxTestPointsByTestPlanModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2TestPlansIdExportTestResultHistoryXlsxPost"></a>
# **apiV2TestPlansIdExportTestResultHistoryXlsxPost**
> apiV2TestPlansIdExportTestResultHistoryXlsxPost(id, mustReturnOnlyLastTestResult, includeSteps, includeDeletedTestSuites, time-Zone-Offset-In-Minutes)

Export TestResults history from TestPlan in xls format

     Use case  User sets test plan identifier  User sets filter model (listed in request example)  User runs method execution  System return export xlsx file

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int format) identifier | [default to null] |
| **mustReturnOnlyLastTestResult** | **Boolean**|  | [optional] [default to null] |
| **includeSteps** | **Boolean**|  | [optional] [default to null] |
| **includeDeletedTestSuites** | **Boolean**|  | [optional] [default to null] |
| **time-Zone-Offset-In-Minutes** | **Long**|  | [optional] [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TestPlansIdHistoryGet"></a>
# **apiV2TestPlansIdHistoryGet**
> List apiV2TestPlansIdHistoryGet(id, Skip, Take, OrderBy, SearchField, SearchValue)

Get TestPlan history

     Use case  User sets test plan identifier  User runs method execution  System return test plan history

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int format) identifier | [default to null] |
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |

### Return type

[**List**](../Models/TestPlanChangeModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TestPlansIdLinksGet"></a>
# **apiV2TestPlansIdLinksGet**
> List apiV2TestPlansIdLinksGet(id, skip, take, orderBy)

Get Links of TestPlan

     Use case  User sets test plan identifier  User sets pagination filter (listed in request example)  User runs method execution  System returns links of TestPlan

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int format) identifier | [default to null] |
| **skip** | **Integer**|  | [optional] [default to null] |
| **take** | **Integer**|  | [optional] [default to null] |
| **orderBy** | **String**|  | [optional] [default to null] |

### Return type

[**List**](../Models/TestPlanLink.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TestPlansIdPatch"></a>
# **apiV2TestPlansIdPatch**
> apiV2TestPlansIdPatch(id, Operation)

Patch test plan

    See &lt;a href&#x3D;\&quot;https://www.rfc-editor.org/rfc/rfc6902\&quot; target&#x3D;\&quot;_blank\&quot;&gt;RFC 6902: JavaScript Object Notation (JSON) Patch&lt;/a&gt; for details

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Unique ID of the test plan | [default to null] |
| **Operation** | [**List**](../Models/Operation.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2TestPlansIdSummariesGet"></a>
# **apiV2TestPlansIdSummariesGet**
> TestPlanSummaryModel apiV2TestPlansIdSummariesGet(id)

Get summary by TestPlan

     Use case  User sets test plan identifier  User runs method execution  System returns summary by test plan

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int format) identifier | [default to null] |

### Return type

[**TestPlanSummaryModel**](../Models/TestPlanSummaryModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TestPlansIdTestPointsLastResultsGet"></a>
# **apiV2TestPlansIdTestPointsLastResultsGet**
> List apiV2TestPlansIdTestPointsLastResultsGet(id, testerId, Skip, Take, OrderBy, SearchField, SearchValue)

Get TestPoints with last result from TestPlan

     Use case  User sets test plan identifier  User sets filter (listed in request example)  User runs method execution  System return test points with last result from test plan

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int format) identifier | [default to null] |
| **testerId** | **UUID**|  | [optional] [default to null] |
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |

### Return type

[**List**](../Models/TestPointWithLastResultResponseModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TestPlansIdTestPointsResetPost"></a>
# **apiV2TestPlansIdTestPointsResetPost**
> apiV2TestPlansIdTestPointsResetPost(id, request\_body)

Reset TestPoints status of TestPlan

     Use case  User sets test plan identifier  User sets test points identifiers  User runs method execution  System reset test points statuses of test plan

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int format) identifier | [default to null] |
| **request\_body** | [**Set**](../Models/UUID.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2TestPlansIdTestPointsTesterDelete"></a>
# **apiV2TestPlansIdTestPointsTesterDelete**
> List apiV2TestPlansIdTestPointsTesterDelete(id, TestPointSelectModel)

Unassign users from multiple test points

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Unique or global ID of the test plan | [default to null] |
| **TestPointSelectModel** | [**TestPointSelectModel**](../Models/TestPointSelectModel.md)|  | [optional] |

### Return type

**List**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2TestPlansIdTestPointsTesterUserIdPost"></a>
# **apiV2TestPlansIdTestPointsTesterUserIdPost**
> List apiV2TestPlansIdTestPointsTesterUserIdPost(id, userId, TestPointSelectModel)

Assign user as a tester to multiple test points

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Unique or global ID of the test plan | [default to null] |
| **userId** | **UUID**| Unique ID of the user | [default to null] |
| **TestPointSelectModel** | [**TestPointSelectModel**](../Models/TestPointSelectModel.md)|  | [optional] |

### Return type

**List**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2TestPlansIdTestRunsGet"></a>
# **apiV2TestPlansIdTestRunsGet**
> List apiV2TestPlansIdTestRunsGet(id, notStarted, inProgress, stopped, completed, Skip, Take, OrderBy, SearchField, SearchValue)

Get TestRuns of TestPlan

     Use case  User sets test plan identifier  User sets TestRun status filter (listed in request example)  User runs method execution  System returns TestRuns for TestPlan

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int format) identifier | [default to null] |
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

[**List**](../Models/TestRunApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TestPlansIdTestRunsSearchPost"></a>
# **apiV2TestPlansIdTestRunsSearchPost**
> List apiV2TestPlansIdTestRunsSearchPost(id, Skip, Take, OrderBy, SearchField, SearchValue, SearchTestRunsApiModel)

Search TestRuns of TestPlan

     Use case  User sets test plan identifier  User sets TestRuns filter (listed in request example)  User runs method execution  System returns TestRuns for TestPlan

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int format) identifier | [default to null] |
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **SearchTestRunsApiModel** | [**SearchTestRunsApiModel**](../Models/SearchTestRunsApiModel.md)|  | [optional] |

### Return type

[**List**](../Models/TestRunApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2TestPlansIdTestRunsTestResultsLastModifiedModifiedDateGet"></a>
# **apiV2TestPlansIdTestRunsTestResultsLastModifiedModifiedDateGet**
> apiV2TestPlansIdTestRunsTestResultsLastModifiedModifiedDateGet(id)

Get last modification date of test plan&#39;s test results

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Internal (UUID) or global (integer) identifier | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TestPlansIdUnlockRequestPost"></a>
# **apiV2TestPlansIdUnlockRequestPost**
> apiV2TestPlansIdUnlockRequestPost(id)

Send unlock TestPlan notification

     Use case  User sets test plan identifier  User runs method execution  System send unlock test plan notification

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int format) identifier | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TestPlansShortsPost"></a>
# **apiV2TestPlansShortsPost**
> List apiV2TestPlansShortsPost(isDeleted, request\_body)

Get TestPlans short models by Project identifiers

     Use case  User sets projects identifiers  User runs method execution  System return test plans short models (listed in response example)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **isDeleted** | **Boolean**|  | [optional] [default to null] |
| **request\_body** | [**Set**](../Models/UUID.md)|  | [optional] |

### Return type

[**List**](../Models/TestPlanShortModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="clone"></a>
# **clone**
> TestPlanModel clone(id)

Clone TestPlan

     Use case  User sets test plan identifier  User runs method execution  System clones test plan  System returns test plan (listed in response example)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int format) identifier | [default to null] |

### Return type

[**TestPlanModel**](../Models/TestPlanModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="complete"></a>
# **complete**
> complete(id)

Complete TestPlan

     Use case  User sets test plan identifier  User runs method execution  System completes the test plan and updates test plan status  System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int format) identifier | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="createTestPlan"></a>
# **createTestPlan**
> TestPlanModel createTestPlan(CreateTestPlanApiModel)

Create TestPlan

     Use case  User sets test plan properties (listed in request example)  User runs method execution  System creates test plan  System returns test plan (listed in response example)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **CreateTestPlanApiModel** | [**CreateTestPlanApiModel**](../Models/CreateTestPlanApiModel.md)|  | [optional] |

### Return type

[**TestPlanModel**](../Models/TestPlanModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteTestPlan"></a>
# **deleteTestPlan**
> deleteTestPlan(id)

Delete TestPlan

     Use case  User sets test plan identifier  User runs method execution  System delete test plan  System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int format) identifier | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTestPlanById"></a>
# **getTestPlanById**
> TestPlanModel getTestPlanById(id)

Get TestPlan by Id

     Use case  User sets test plan identifier  User runs method execution  System search  test plan by the identifier  System returns test plan

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int format) identifier | [default to null] |

### Return type

[**TestPlanModel**](../Models/TestPlanModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTestSuitesById"></a>
# **getTestSuitesById**
> List getTestSuitesById(id)

Get TestSuites Tree By Id

     Use case  User sets test plan identifier  User runs method execution  System finds test suites related to the test plan  System returns test suites as a tree model (listed in response example)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int format) identifier | [default to null] |

### Return type

[**List**](../Models/TestSuiteHierarchyApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="pause"></a>
# **pause**
> pause(id)

Pause TestPlan

     Use case  User sets test plan identifier  User runs method execution  System pauses the test plan and updates test plan status  System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int format) identifier | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="purgeTestPlan"></a>
# **purgeTestPlan**
> purgeTestPlan(id)

Permanently delete test plan from archive

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Unique or global ID of the test plan | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="restoreTestPlan"></a>
# **restoreTestPlan**
> restoreTestPlan(id)

Restore TestPlan

     Use case  User sets test plan identifier  User runs method execution  System restores test plan  System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int format) identifier | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="start"></a>
# **start**
> start(id)

Start TestPlan

     Use case  User sets test plan identifier  User runs method execution  System starts the test plan and updates test plan status  System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Test plan internal (guid format) or global (int format) identifier | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateTestPlan"></a>
# **updateTestPlan**
> updateTestPlan(UpdateTestPlanApiModel)

Update TestPlan

     Use case  User sets test plan properties(listed in request example)  User runs method execution  System updates test plan  System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **UpdateTestPlanApiModel** | [**UpdateTestPlanApiModel**](../Models/UpdateTestPlanApiModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

