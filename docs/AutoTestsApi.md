# AutoTestsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2AutoTestsDelete**](AutoTestsApi.md#apiV2AutoTestsDelete) | **DELETE** /api/v2/autoTests | Delete autotests |
| [**apiV2AutoTestsFlakyBulkPost**](AutoTestsApi.md#apiV2AutoTestsFlakyBulkPost) | **POST** /api/v2/autoTests/flaky/bulk | Set \&quot;Flaky\&quot; status for multiple autotests |
| [**apiV2AutoTestsIdPatch**](AutoTestsApi.md#apiV2AutoTestsIdPatch) | **PATCH** /api/v2/autoTests/{id} | Patch auto test |
| [**apiV2AutoTestsIdTestResultsSearchPost**](AutoTestsApi.md#apiV2AutoTestsIdTestResultsSearchPost) | **POST** /api/v2/autoTests/{id}/testResults/search | Get test results history for autotest |
| [**apiV2AutoTestsIdWorkItemsChangedIdGet**](AutoTestsApi.md#apiV2AutoTestsIdWorkItemsChangedIdGet) | **GET** /api/v2/autoTests/{id}/workItems/changed/id | Get identifiers of changed linked work items |
| [**apiV2AutoTestsIdWorkItemsChangedWorkItemIdApprovePost**](AutoTestsApi.md#apiV2AutoTestsIdWorkItemsChangedWorkItemIdApprovePost) | **POST** /api/v2/autoTests/{id}/workItems/changed/{workItemId}/approve | Approve changes to work items linked to autotest |
| [**apiV2AutoTestsSearchPost**](AutoTestsApi.md#apiV2AutoTestsSearchPost) | **POST** /api/v2/autoTests/search | Search for autotests |
| [**createAutoTest**](AutoTestsApi.md#createAutoTest) | **POST** /api/v2/autoTests | Create autotest |
| [**createMultiple**](AutoTestsApi.md#createMultiple) | **POST** /api/v2/autoTests/bulk | Create multiple autotests |
| [**deleteAutoTest**](AutoTestsApi.md#deleteAutoTest) | **DELETE** /api/v2/autoTests/{id} | Delete autotest |
| [**deleteAutoTestLinkFromWorkItem**](AutoTestsApi.md#deleteAutoTestLinkFromWorkItem) | **DELETE** /api/v2/autoTests/{id}/workItems | Unlink autotest from work item |
| [**getAllAutoTests**](AutoTestsApi.md#getAllAutoTests) | **GET** /api/v2/autoTests |  |
| [**getAutoTestAverageDuration**](AutoTestsApi.md#getAutoTestAverageDuration) | **GET** /api/v2/autoTests/{id}/averageDuration | Get average autotest duration |
| [**getAutoTestById**](AutoTestsApi.md#getAutoTestById) | **GET** /api/v2/autoTests/{id} | Get autotest by internal or global ID |
| [**getAutoTestChronology**](AutoTestsApi.md#getAutoTestChronology) | **GET** /api/v2/autoTests/{id}/chronology | Get autotest chronology |
| [**getTestRuns**](AutoTestsApi.md#getTestRuns) | **GET** /api/v2/autoTests/{id}/testRuns | Get completed tests runs for autotests |
| [**getWorkItemsLinkedToAutoTest**](AutoTestsApi.md#getWorkItemsLinkedToAutoTest) | **GET** /api/v2/autoTests/{id}/workItems | Get work items linked to autotest |
| [**linkAutoTestToWorkItem**](AutoTestsApi.md#linkAutoTestToWorkItem) | **POST** /api/v2/autoTests/{id}/workItems | Link autotest with work items |
| [**updateAutoTest**](AutoTestsApi.md#updateAutoTest) | **PUT** /api/v2/autoTests | Update autotest |
| [**updateMultiple**](AutoTestsApi.md#updateMultiple) | **PUT** /api/v2/autoTests/bulk | Update multiple autotests |


<a name="apiV2AutoTestsDelete"></a>
# **apiV2AutoTestsDelete**
> AutoTestBulkDeleteApiResult apiV2AutoTestsDelete(AutoTestBulkDeleteApiModel)

Delete autotests

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **AutoTestBulkDeleteApiModel** | [**AutoTestBulkDeleteApiModel**](../Models/AutoTestBulkDeleteApiModel.md)|  | [optional] |

### Return type

[**AutoTestBulkDeleteApiResult**](../Models/AutoTestBulkDeleteApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2AutoTestsFlakyBulkPost"></a>
# **apiV2AutoTestsFlakyBulkPost**
> apiV2AutoTestsFlakyBulkPost(Skip, Take, OrderBy, SearchField, SearchValue, AutoTestFlakyBulkApiModel)

Set \&quot;Flaky\&quot; status for multiple autotests

    User permissions for project: - Read only - Execute - Write - Full control

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **AutoTestFlakyBulkApiModel** | [**AutoTestFlakyBulkApiModel**](../Models/AutoTestFlakyBulkApiModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2AutoTestsIdPatch"></a>
# **apiV2AutoTestsIdPatch**
> apiV2AutoTestsIdPatch(id, Operation)

Patch auto test

    See &lt;a href&#x3D;\&quot;https://www.rfc-editor.org/rfc/rfc6902\&quot; target&#x3D;\&quot;_blank\&quot;&gt;RFC 6902: JavaScript Object Notation (JSON) Patch&lt;/a&gt; for details

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Global Id of auto test | [default to null] |
| **Operation** | [**List**](../Models/Operation.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2AutoTestsIdTestResultsSearchPost"></a>
# **apiV2AutoTestsIdTestResultsSearchPost**
> List apiV2AutoTestsIdTestResultsSearchPost(id, Skip, Take, OrderBy, SearchField, SearchValue, AutoTestResultHistorySelectApiModel)

Get test results history for autotest

     Use case  User sets autotest internal (guid format) or global (integer format) identifier  User sets getTestResultHistoryReportQuery (listed in the example)  User runs method execution  System search for test results using filters set by user in getTestResultHistoryReportQuery and id  System returns the enumeration of test results

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Autotest identifier | [default to null] |
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **AutoTestResultHistorySelectApiModel** | [**AutoTestResultHistorySelectApiModel**](../Models/AutoTestResultHistorySelectApiModel.md)|  | [optional] |

### Return type

[**List**](../Models/AutoTestResultHistoryApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2AutoTestsIdWorkItemsChangedIdGet"></a>
# **apiV2AutoTestsIdWorkItemsChangedIdGet**
> List apiV2AutoTestsIdWorkItemsChangedIdGet(id)

Get identifiers of changed linked work items

    User permissions for project: - Read only - Execute - Write - Full control

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**|  | [default to null] |

### Return type

**List**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2AutoTestsIdWorkItemsChangedWorkItemIdApprovePost"></a>
# **apiV2AutoTestsIdWorkItemsChangedWorkItemIdApprovePost**
> apiV2AutoTestsIdWorkItemsChangedWorkItemIdApprovePost(id, workItemId)

Approve changes to work items linked to autotest

    User permissions for project: - Read only - Execute - Write - Full control

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**|  | [default to null] |
| **workItemId** | **UUID**|  | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2AutoTestsSearchPost"></a>
# **apiV2AutoTestsSearchPost**
> List apiV2AutoTestsSearchPost(Skip, Take, OrderBy, SearchField, SearchValue, AutoTestSearchApiModel)

Search for autotests

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **AutoTestSearchApiModel** | [**AutoTestSearchApiModel**](../Models/AutoTestSearchApiModel.md)|  | [optional] |

### Return type

[**List**](../Models/AutoTestApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createAutoTest"></a>
# **createAutoTest**
> AutoTestApiResult createAutoTest(AutoTestCreateApiModel)

Create autotest

     This method creates a new autotest.  To add an autotest to the test plan, link it to a work item using the &#x60;POST /api/v2/autoTests/{autoTestId}/workItems&#x60; method.  Use the &#x60;POST /api/v2/testRuns/byAutoTests&#x60; method to run autotest outside the test plan.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **AutoTestCreateApiModel** | [**AutoTestCreateApiModel**](../Models/AutoTestCreateApiModel.md)|  | [optional] |

### Return type

[**AutoTestApiResult**](../Models/AutoTestApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createMultiple"></a>
# **createMultiple**
> List createMultiple(AutoTestCreateApiModel)

Create multiple autotests

     Use case  User sets autotest parameters (listed in the example) and runs method execution  System creates autotest  [Optional] If steps enumeration is set, system creates step items and relates them to autotest  [Optional] If setup enumeration is set, system creates setup items and relates them to autotest  [Optional] If teardown enumeration is set, system creates teardown items and relates them to autotest  [Optional] If label enumeration is set, system creates labels and relates them to autotest  [Optional] If link enumeration is set, system creates links and relates them to autotest  System returns autotest model (example listed in response parameters)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **AutoTestCreateApiModel** | [**List**](../Models/AutoTestCreateApiModel.md)|  | [optional] |

### Return type

[**List**](../Models/AutoTestApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteAutoTest"></a>
# **deleteAutoTest**
> deleteAutoTest(id)

Delete autotest

     Use case  User sets autotest internal (guid format) or global (integer format) identifier and runs method execution  System finds the autotest by the identifier  System deletes autotest and returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Autotest internal (UUID) or global (integer) identifier | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteAutoTestLinkFromWorkItem"></a>
# **deleteAutoTestLinkFromWorkItem**
> deleteAutoTestLinkFromWorkItem(id, workItemId)

Unlink autotest from work item

     Use case  User sets autotest internal (guid format) or global (integer format) identifier  [Optional] User sets workitem internal (guid format) or global (integer format) identifier  User runs method execution  System finds the autotest by the autotest identifier  [Optional] if workitem id is set by User, System finds the workitem by the workitem identifier and unlinks it             from autotest.  [Optional] Otherwise, if workitem id is not specified, System unlinks all workitems linked to autotest.  System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Autotest internal (UUID) or global (integer) identifier | [default to null] |
| **workItemId** | **String**| Work item internal (UUID) or global (integer) identifier | [optional] [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAllAutoTests"></a>
# **getAllAutoTests**
> List getAllAutoTests(projectId, externalId, globalId, namespace, isNamespaceNull, includeEmptyNamespaces, className, isClassnameNull, includeEmptyClassNames, isDeleted, deleted, labels, stabilityMinimal, minStability, stabilityMaximal, maxStability, isFlaky, flaky, includeSteps, includeLabels, externalKey, Skip, Take, OrderBy, SearchField, SearchValue)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **UUID**| Project internal ID | [optional] [default to null] |
| **externalId** | **String**| Autotest external ID | [optional] [default to null] |
| **globalId** | **Long**| Autotest global ID | [optional] [default to null] |
| **namespace** | **String**| Namespace in which autotest is located | [optional] [default to null] |
| **isNamespaceNull** | **Boolean**| OBSOLETE: Use &#x60;includeEmptyNamespaces&#x60; instead | [optional] [default to null] |
| **includeEmptyNamespaces** | **Boolean**| If result must contain autotests without namespace | [optional] [default to null] |
| **className** | **String**| Name of class in which autotest is located | [optional] [default to null] |
| **isClassnameNull** | **Boolean**| OBSOLETE: Use &#x60;includeEmptyClassNames&#x60; instead | [optional] [default to null] |
| **includeEmptyClassNames** | **Boolean**| If result must contain autotests without class | [optional] [default to null] |
| **isDeleted** | **Boolean**| OBSOLETE: Use &#x60;deleted&#x60; instead | [optional] [default to null] |
| **deleted** | **Boolean**| Is autotest deleted | [optional] [default to null] |
| **labels** | [**List**](../Models/String.md)| Include only autotests with provided labels | [optional] [default to null] |
| **stabilityMinimal** | **Integer**| OBSOLETE: Use &#x60;minStability&#x60; instead | [optional] [default to null] |
| **minStability** | **Integer**| Minimum stability value of autotest | [optional] [default to null] |
| **stabilityMaximal** | **Integer**| OBSOLETE: Use &#x60;maxStability&#x60; instead | [optional] [default to null] |
| **maxStability** | **Integer**| Maximum stability value of autotest | [optional] [default to null] |
| **isFlaky** | **Boolean**| OBSOLETE: Use &#x60;flaky&#x60; instead | [optional] [default to null] |
| **flaky** | **Boolean**| Is autotest marked as \&quot;Flaky\&quot; | [optional] [default to null] |
| **includeSteps** | **Boolean**| If result must also include autotest steps | [optional] [default to null] |
| **includeLabels** | **Boolean**| If result must also include autotest labels | [optional] [default to null] |
| **externalKey** | **String**| External key of autotest | [optional] [default to null] |
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |

### Return type

[**List**](../Models/AutoTestModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAutoTestAverageDuration"></a>
# **getAutoTestAverageDuration**
> AutoTestAverageDurationApiResult getAutoTestAverageDuration(id)

Get average autotest duration

     Use case  User sets autotest internal (guid format) or global (integer format) identifier  User runs method execution  System calculates pass average duration and fail average duration of autotest from all related test results  System returns pass average duration and fail average duration for autotest

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Autotest internal (UUID) or global (integer) identifier | [default to null] |

### Return type

[**AutoTestAverageDurationApiResult**](../Models/AutoTestAverageDurationApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAutoTestById"></a>
# **getAutoTestById**
> AutoTestApiResult getAutoTestById(id)

Get autotest by internal or global ID

     Use case  User sets autotest internal or global identifier and runs method execution  System returns autotest, which internal or global identifier equals the identifier value set in the previous action

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Autotest internal (UUID) or global (integer) identifier | [default to null] |

### Return type

[**AutoTestApiResult**](../Models/AutoTestApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAutoTestChronology"></a>
# **getAutoTestChronology**
> List getAutoTestChronology(id)

Get autotest chronology

     Use case  User sets autotest internal (guid format) or global (integer format) identifier  User runs method execution  System search all test results related to autotest (with default limit equal 100)  System orders the test results by CompletedOn property descending and then orders by CreatedDate property descending  System returns test result chronology for autotest

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Autotest internal (UUID) or global (integer) identifier | [default to null] |

### Return type

[**List**](../Models/TestResultChronologyModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTestRuns"></a>
# **getTestRuns**
> List getTestRuns(id)

Get completed tests runs for autotests

     Use case  User sets autotest internal (guid format) or global (integer format) identifier  User runs method execution  System search for all test runs related to the autotest  System returns the enumeration of test runs

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Autotest internal (UUID) or global (integer) identifier | [default to null] |

### Return type

[**List**](../Models/TestRunByAutoTestApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getWorkItemsLinkedToAutoTest"></a>
# **getWorkItemsLinkedToAutoTest**
> List getWorkItemsLinkedToAutoTest(id, isDeleted, isWorkItemDeleted)

Get work items linked to autotest

     This method links an autotest to a test case or a checklist.             A manual test case with a linked automated work item is marked in the test management system as an autotest.             You can run it from graphical user interface (GUI). To do that:  1. Open the project in GUI.              2. Go to &lt;b&gt;Test plans&lt;/b&gt; section and switch to the &lt;b&gt;Execution&lt;/b&gt; tab.              3. Select the autotest(s) you want to run using checkboxes.              4. In the toolbar above the test list, click &lt;b&gt;Run autotests&lt;/b&gt;.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Specifies the autotest entity ID.  You can copy it from the address bar in your web browser or use autotest GUID. | [default to null] |
| **isDeleted** | **Boolean**| Specifies that a test is deleted or still relevant. | [optional] [default to null] |
| **isWorkItemDeleted** | **Boolean**| OBSOLETE: Use &#x60;isDeleted&#x60; instead | [optional] [default to false] |

### Return type

[**List**](../Models/AutoTestWorkItemIdentifierApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="linkAutoTestToWorkItem"></a>
# **linkAutoTestToWorkItem**
> linkAutoTestToWorkItem(id, WorkItemIdApiModel)

Link autotest with work items

     Use case  User sets autotest internal (guid format) or global (integer format) identifier  User sets work item internal (guid format) or global (integer format) identifier  User runs method execution  System finds the autotest by the autotest identifier  System finds the work item by the work item identifier  System relates the work item with the autotest and returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Autotest internal (UUID) or global (integer) identifier | [default to null] |
| **WorkItemIdApiModel** | [**WorkItemIdApiModel**](../Models/WorkItemIdApiModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateAutoTest"></a>
# **updateAutoTest**
> updateAutoTest(AutoTestUpdateApiModel)

Update autotest

     Use case  User sets autotest updated parameters values (listed in the example) and runs method execution  System finds the autotest by the identifier  System updates autotest parameters  [Optional] If steps enumeration is set, system creates step items, relates them to autotest             and deletes relations with current steps( if exist)  [Optional] If Setup enumeration is set, system creates setup items and relates them to autotest             and deletes relations with current Setup items (if exist)  [Optional] If teardown enumeration is set, system creates teardown items and relates them to autotest             and deletes relations with current teardown items (if exist)  [Optional] If label enumeration is set, system creates labels and relates them to autotest             and deletes relations with current Labels (if exist)  [Optional] If link enumeration is set, system creates links and relates them to autotest             and deletes relations with current Links (if exist)  System updates autotest and returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **AutoTestUpdateApiModel** | [**AutoTestUpdateApiModel**](../Models/AutoTestUpdateApiModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateMultiple"></a>
# **updateMultiple**
> updateMultiple(AutoTestUpdateApiModel)

Update multiple autotests

     Use case  User sets autotest updated parameters values (listed in the example) and runs method execution  System finds the autotest by the identifier  System updates autotest parameters  [Optional] If steps enumeration is set, system creates step items, relates them to autotest             and deletes relations with current steps( if exist)  [Optional] If Setup enumeration is set, system creates setup items and relates them to autotest             and deletes relations with current Setup items (if exist)  [Optional] If teardown enumeration is set, system creates teardown items and relates them to autotest             and deletes relations with current teardown items (if exist)  [Optional] If label enumeration is set, system creates labels and relates them to autotest             and deletes relations with current Labels (if exist)  [Optional] If link enumeration is set, system creates links and relates them to autotest             and deletes relations with current Links (if exist)  System updates autotest and returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **AutoTestUpdateApiModel** | [**List**](../Models/AutoTestUpdateApiModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

