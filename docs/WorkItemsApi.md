# WorkItemsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2WorkItemsIdAttachmentsPost**](WorkItemsApi.md#apiV2WorkItemsIdAttachmentsPost) | **POST** /api/v2/workItems/{id}/attachments | Upload and link attachment to WorkItem |
| [**apiV2WorkItemsIdCheckListTransformToTestCasePost**](WorkItemsApi.md#apiV2WorkItemsIdCheckListTransformToTestCasePost) | **POST** /api/v2/workItems/{id}/checkList/transformTo/testCase | Transform CheckList to TestCase |
| [**apiV2WorkItemsIdHistoryGet**](WorkItemsApi.md#apiV2WorkItemsIdHistoryGet) | **GET** /api/v2/workItems/{id}/history | Get change history of WorkItem |
| [**apiV2WorkItemsIdLikeDelete**](WorkItemsApi.md#apiV2WorkItemsIdLikeDelete) | **DELETE** /api/v2/workItems/{id}/like | Delete like from WorkItem |
| [**apiV2WorkItemsIdLikePost**](WorkItemsApi.md#apiV2WorkItemsIdLikePost) | **POST** /api/v2/workItems/{id}/like | Set like to WorkItem |
| [**apiV2WorkItemsIdLikesCountGet**](WorkItemsApi.md#apiV2WorkItemsIdLikesCountGet) | **GET** /api/v2/workItems/{id}/likes/count | Get likes count of WorkItem |
| [**apiV2WorkItemsIdLikesGet**](WorkItemsApi.md#apiV2WorkItemsIdLikesGet) | **GET** /api/v2/workItems/{id}/likes | Get likes of WorkItem |
| [**apiV2WorkItemsIdTestResultsHistoryGet**](WorkItemsApi.md#apiV2WorkItemsIdTestResultsHistoryGet) | **GET** /api/v2/workItems/{id}/testResults/history | Get test results history of WorkItem |
| [**apiV2WorkItemsIdVersionVersionIdActualPost**](WorkItemsApi.md#apiV2WorkItemsIdVersionVersionIdActualPost) | **POST** /api/v2/workItems/{id}/version/{versionId}/actual | Set WorkItem as actual |
| [**apiV2WorkItemsLinksUrlsSearchPost**](WorkItemsApi.md#apiV2WorkItemsLinksUrlsSearchPost) | **POST** /api/v2/workItems/links/urls/search |  |
| [**apiV2WorkItemsMovePost**](WorkItemsApi.md#apiV2WorkItemsMovePost) | **POST** /api/v2/workItems/move | Move WorkItem to another section |
| [**apiV2WorkItemsPost**](WorkItemsApi.md#apiV2WorkItemsPost) | **POST** /api/v2/workItems | Creates work item |
| [**apiV2WorkItemsSearchPost**](WorkItemsApi.md#apiV2WorkItemsSearchPost) | **POST** /api/v2/workItems/search | Search for work items |
| [**apiV2WorkItemsSharedStepIdReferencesSectionsPost**](WorkItemsApi.md#apiV2WorkItemsSharedStepIdReferencesSectionsPost) | **POST** /api/v2/workItems/{sharedStepId}/references/sections | Get SharedStep references in sections |
| [**apiV2WorkItemsSharedStepIdReferencesWorkItemsPost**](WorkItemsApi.md#apiV2WorkItemsSharedStepIdReferencesWorkItemsPost) | **POST** /api/v2/workItems/{sharedStepId}/references/workItems | Get SharedStep references in work items |
| [**apiV2WorkItemsSharedStepsSharedStepIdReferencesGet**](WorkItemsApi.md#apiV2WorkItemsSharedStepsSharedStepIdReferencesGet) | **GET** /api/v2/workItems/sharedSteps/{sharedStepId}/references | Get SharedStep references |
| [**deleteAllWorkItemsFromAutoTest**](WorkItemsApi.md#deleteAllWorkItemsFromAutoTest) | **DELETE** /api/v2/workItems/{id}/autoTests | Delete all links AutoTests from WorkItem by Id or GlobalId |
| [**deleteWorkItem**](WorkItemsApi.md#deleteWorkItem) | **DELETE** /api/v2/workItems/{id} | Delete Test Case, Checklist or Shared Step by Id or GlobalId |
| [**getAutoTestsForWorkItem**](WorkItemsApi.md#getAutoTestsForWorkItem) | **GET** /api/v2/workItems/{id}/autoTests | Get all AutoTests linked to WorkItem by Id or GlobalId |
| [**getIterations**](WorkItemsApi.md#getIterations) | **GET** /api/v2/workItems/{id}/iterations | Get iterations by work item Id or GlobalId |
| [**getWorkItemById**](WorkItemsApi.md#getWorkItemById) | **GET** /api/v2/workItems/{id} | Get Test Case, Checklist or Shared Step by Id or GlobalId |
| [**getWorkItemChronology**](WorkItemsApi.md#getWorkItemChronology) | **GET** /api/v2/workItems/{id}/chronology | Get WorkItem chronology by Id or GlobalId |
| [**getWorkItemVersions**](WorkItemsApi.md#getWorkItemVersions) | **GET** /api/v2/workItems/{id}/versions | Get WorkItem versions |
| [**purgeWorkItem**](WorkItemsApi.md#purgeWorkItem) | **POST** /api/v2/workItems/{id}/purge | Permanently delete test case, checklist or shared steps from archive |
| [**restoreWorkItem**](WorkItemsApi.md#restoreWorkItem) | **POST** /api/v2/workItems/{id}/restore | Restore test case, checklist or shared steps from archive |
| [**updateWorkItem**](WorkItemsApi.md#updateWorkItem) | **PUT** /api/v2/workItems | Update Test Case, Checklist or Shared Step |


<a name="apiV2WorkItemsIdAttachmentsPost"></a>
# **apiV2WorkItemsIdAttachmentsPost**
> apiV2WorkItemsIdAttachmentsPost(id, file)

Upload and link attachment to WorkItem

      Use case    User sets workItemId    User attaches a file    System creates attachment and links it to the work item    System returns attachment identifier

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Work item internal identifier (guid format) | [default to null] |
| **file** | **File**| Select file | [optional] [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

<a name="apiV2WorkItemsIdCheckListTransformToTestCasePost"></a>
# **apiV2WorkItemsIdCheckListTransformToTestCasePost**
> WorkItemModel apiV2WorkItemsIdCheckListTransformToTestCasePost(id)

Transform CheckList to TestCase

      Use case    User sets checklist identifier    User runs method execution    System transform CheckList to TestCase

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**|  | [default to null] |

### Return type

[**WorkItemModel**](../Models/WorkItemModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2WorkItemsIdHistoryGet"></a>
# **apiV2WorkItemsIdHistoryGet**
> List apiV2WorkItemsIdHistoryGet(id, Skip, Take, OrderBy, SearchField, SearchValue)

Get change history of WorkItem

      Use case    User sets work item identifier    User runs method execution    System return change history of WorkItem

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**|  | [default to null] |
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |

### Return type

[**List**](../Models/WorkItemChangeModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2WorkItemsIdLikeDelete"></a>
# **apiV2WorkItemsIdLikeDelete**
> apiV2WorkItemsIdLikeDelete(id)

Delete like from WorkItem

      Use case    User sets WorkItem identifier    User runs method execution    System delete like from WorkItem

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

<a name="apiV2WorkItemsIdLikePost"></a>
# **apiV2WorkItemsIdLikePost**
> apiV2WorkItemsIdLikePost(id)

Set like to WorkItem

      Use case    User sets WorkItem identifier    User runs method execution    System set like to WorkItem

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

<a name="apiV2WorkItemsIdLikesCountGet"></a>
# **apiV2WorkItemsIdLikesCountGet**
> Integer apiV2WorkItemsIdLikesCountGet(id)

Get likes count of WorkItem

      Use case    User sets WorkItem identifier    User runs method execution    System return likes count of WorkItem

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**|  | [default to null] |

### Return type

**Integer**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2WorkItemsIdLikesGet"></a>
# **apiV2WorkItemsIdLikesGet**
> List apiV2WorkItemsIdLikesGet(id)

Get likes of WorkItem

      Use case    User sets WorkItem identifier    User runs method execution    System return likes of WorkItem

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**|  | [default to null] |

### Return type

[**List**](../Models/WorkItemLikeModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2WorkItemsIdTestResultsHistoryGet"></a>
# **apiV2WorkItemsIdTestResultsHistoryGet**
> List apiV2WorkItemsIdTestResultsHistoryGet(id, from, to, configurationIds, testPlanIds, userIds, outcomes, statusCodes, isAutomated, automated, testRunIds, Skip, Take, OrderBy, SearchField, SearchValue)

Get test results history of WorkItem

      Use case    User sets WorkItem identifier    User runs method execution    System return test results history of WorkItem

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**|  | [default to null] |
| **from** | **Date**| Take results from this date | [optional] [default to null] |
| **to** | **Date**| Take results until this date | [optional] [default to null] |
| **configurationIds** | [**List**](../Models/UUID.md)| Identifiers of test result configurations | [optional] [default to null] |
| **testPlanIds** | [**List**](../Models/UUID.md)| Identifiers of test plans which contain test results | [optional] [default to null] |
| **userIds** | [**List**](../Models/UUID.md)| Identifiers of users who set test results | [optional] [default to null] |
| **outcomes** | [**List**](../Models/String.md)| List of outcomes of test results | [optional] [default to null] |
| **statusCodes** | [**List**](../Models/String.md)| List of status codes of test results | [optional] [default to null] |
| **isAutomated** | **Boolean**| OBSOLETE: Use &#x60;Automated&#x60; instead | [optional] [default to null] |
| **automated** | **Boolean**| If result must consist of only manual/automated test results | [optional] [default to null] |
| **testRunIds** | [**List**](../Models/UUID.md)| Identifiers of test runs which contain test results | [optional] [default to null] |
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |

### Return type

[**List**](../Models/TestResultHistoryReportApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2WorkItemsIdVersionVersionIdActualPost"></a>
# **apiV2WorkItemsIdVersionVersionIdActualPost**
> WorkItemModel apiV2WorkItemsIdVersionVersionIdActualPost(id, versionId)

Set WorkItem as actual

      Use case    User sets work item identifier    User runs method execution    System set WorkItem as actual

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**|  | [default to null] |
| **versionId** | **UUID**|  | [default to null] |

### Return type

[**WorkItemModel**](../Models/WorkItemModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2WorkItemsLinksUrlsSearchPost"></a>
# **apiV2WorkItemsLinksUrlsSearchPost**
> SearchWorkItemLinkUrlsApiResult apiV2WorkItemsLinksUrlsSearchPost(Skip, Take, OrderBy, SearchField, SearchValue, WorkItemLinkUrlApiModel)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **WorkItemLinkUrlApiModel** | [**WorkItemLinkUrlApiModel**](../Models/WorkItemLinkUrlApiModel.md)|  | [optional] |

### Return type

[**SearchWorkItemLinkUrlsApiResult**](../Models/SearchWorkItemLinkUrlsApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2WorkItemsMovePost"></a>
# **apiV2WorkItemsMovePost**
> WorkItemShortModel apiV2WorkItemsMovePost(WorkItemMovePostModel)

Move WorkItem to another section

      Use case    User sets WorkItem identifier    User runs method execution    System move WorkItem to another section

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **WorkItemMovePostModel** | [**WorkItemMovePostModel**](../Models/WorkItemMovePostModel.md)|  | [optional] |

### Return type

[**WorkItemShortModel**](../Models/WorkItemShortModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2WorkItemsPost"></a>
# **apiV2WorkItemsPost**
> WorkItemApiResult apiV2WorkItemsPost(CreateWorkItemApiModel)

Creates work item

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **CreateWorkItemApiModel** | [**CreateWorkItemApiModel**](../Models/CreateWorkItemApiModel.md)|  | [optional] |

### Return type

[**WorkItemApiResult**](../Models/WorkItemApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2WorkItemsSearchPost"></a>
# **apiV2WorkItemsSearchPost**
> List apiV2WorkItemsSearchPost(Skip, Take, OrderBy, SearchField, SearchValue, WorkItemSelectApiModel)

Search for work items

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **WorkItemSelectApiModel** | [**WorkItemSelectApiModel**](../Models/WorkItemSelectApiModel.md)|  | [optional] |

### Return type

[**List**](../Models/WorkItemShortApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2WorkItemsSharedStepIdReferencesSectionsPost"></a>
# **apiV2WorkItemsSharedStepIdReferencesSectionsPost**
> List apiV2WorkItemsSharedStepIdReferencesSectionsPost(sharedStepId, Skip, Take, OrderBy, SearchField, SearchValue, SharedStepReferenceSectionsQueryFilterModel)

Get SharedStep references in sections

      Use case    User sets SharedStep identifier    User runs method execution    System return SharedStep references

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **sharedStepId** | **UUID**|  | [default to null] |
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **SharedStepReferenceSectionsQueryFilterModel** | [**SharedStepReferenceSectionsQueryFilterModel**](../Models/SharedStepReferenceSectionsQueryFilterModel.md)|  | [optional] |

### Return type

[**List**](../Models/SharedStepReferenceSectionModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2WorkItemsSharedStepIdReferencesWorkItemsPost"></a>
# **apiV2WorkItemsSharedStepIdReferencesWorkItemsPost**
> List apiV2WorkItemsSharedStepIdReferencesWorkItemsPost(sharedStepId, Skip, Take, OrderBy, SearchField, SearchValue, SharedStepReferencesQueryFilterModel)

Get SharedStep references in work items

      Use case    User sets SharedStep identifier    User runs method execution    System return SharedStep references

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **sharedStepId** | **UUID**|  | [default to null] |
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **SharedStepReferencesQueryFilterModel** | [**SharedStepReferencesQueryFilterModel**](../Models/SharedStepReferencesQueryFilterModel.md)|  | [optional] |

### Return type

[**List**](../Models/SharedStepReferenceModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2WorkItemsSharedStepsSharedStepIdReferencesGet"></a>
# **apiV2WorkItemsSharedStepsSharedStepIdReferencesGet**
> List apiV2WorkItemsSharedStepsSharedStepIdReferencesGet(sharedStepId)

Get SharedStep references

      Use case    User sets SharedStep identifier    User runs method execution    System return SharedStep references

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **sharedStepId** | **UUID**|  | [default to null] |

### Return type

[**List**](../Models/SharedStepReferenceModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteAllWorkItemsFromAutoTest"></a>
# **deleteAllWorkItemsFromAutoTest**
> deleteAllWorkItemsFromAutoTest(id)

Delete all links AutoTests from WorkItem by Id or GlobalId

      Use case    User sets work item identifier    User runs method execution    System search work item by identifier    System search and delete all autotests, related to found work item    System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| WorkItem internal (guid format) or  global(integer format) identifier\&quot; | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteWorkItem"></a>
# **deleteWorkItem**
> deleteWorkItem(id)

Delete Test Case, Checklist or Shared Step by Id or GlobalId

      Use case    User sets work item identifier    User runs method execution    System deletes work item    System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| WorkItem internal (guid format) or  global(integer format) identifier\&quot; | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAutoTestsForWorkItem"></a>
# **getAutoTestsForWorkItem**
> List getAutoTestsForWorkItem(id)

Get all AutoTests linked to WorkItem by Id or GlobalId

      Use case    User sets work item identifier    User runs method execution    System search work item by identifier    System search all autotests, related to found work item    System returns list of found autotests

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| WorkItem internal (guid format) or  global(integer format) identifier\&quot; | [default to null] |

### Return type

[**List**](../Models/AutoTestModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getIterations"></a>
# **getIterations**
> List getIterations(id, versionId, versionNumber)

Get iterations by work item Id or GlobalId

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| WorkItem internal (guid format) or  global(integer format) identifier\&quot; | [default to null] |
| **versionId** | **UUID**| WorkItem version (guid format) identifier | [optional] [default to null] |
| **versionNumber** | **Integer**| WorkItem version number (0 is the last version)\&quot; | [optional] [default to null] |

### Return type

[**List**](../Models/IterationModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getWorkItemById"></a>
# **getWorkItemById**
> WorkItemModel getWorkItemById(id, versionId, versionNumber)

Get Test Case, Checklist or Shared Step by Id or GlobalId

      Use case    User sets work item identifier    [Optional] User sets work item version identifier    [Optional] User sets work item version number    User runs method execution    System search work item by identifier    [Optional] if User sets work item version identifier, system search work item version by identifier.    [Optional] if user sets work item version number, system search work item version by number    Otherwise, system search last work item version    System returns work item

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| WorkItem internal (guid format) or  global(integer format) identifier\&quot; | [default to null] |
| **versionId** | **UUID**| WorkItem version (guid format) identifier\&quot; | [optional] [default to null] |
| **versionNumber** | **Integer**| WorkItem version number (0 is the last version)\&quot; | [optional] [default to null] |

### Return type

[**WorkItemModel**](../Models/WorkItemModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getWorkItemChronology"></a>
# **getWorkItemChronology**
> List getWorkItemChronology(id)

Get WorkItem chronology by Id or GlobalId

      Use case    User sets work item identifier    User runs method execution    System search work item by identifier    System search test results of all autotests, related to found work item    System sort results by CompletedOn ascending, then by CreatedDate ascending    System returns sorted collection of test results

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Internal (UUID) or global (integer) identifier | [default to null] |

### Return type

[**List**](../Models/TestResultChronologyModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getWorkItemVersions"></a>
# **getWorkItemVersions**
> List getWorkItemVersions(id, workItemVersionId, versionNumber)

Get WorkItem versions

      Use case    User sets work item identifier    [Optional] User sets work item version identifier    User runs method execution    System search work item by identifier    [Optional] If User set work item version identifier, System search work item version by version identifier                      Otherwise, system search all version of work item    System returns array of work item version models (listed in response example)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| WorkItem internal (guid format) or  global(integer format) identifier\&quot; | [default to null] |
| **workItemVersionId** | **UUID**| WorkItem version (guid format)  identifier\&quot; | [optional] [default to null] |
| **versionNumber** | **Integer**| WorkItem version (integer format)  number\&quot; | [optional] [default to null] |

### Return type

[**List**](../Models/WorkItemVersionModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="purgeWorkItem"></a>
# **purgeWorkItem**
> purgeWorkItem(id)

Permanently delete test case, checklist or shared steps from archive

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Unique or global ID of the work item | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="restoreWorkItem"></a>
# **restoreWorkItem**
> restoreWorkItem(id)

Restore test case, checklist or shared steps from archive

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Unique or global ID of the work item | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateWorkItem"></a>
# **updateWorkItem**
> updateWorkItem(UpdateWorkItemApiModel)

Update Test Case, Checklist or Shared Step

      Use case    User sets work item properties (listed in request parameters)    User runs method execution    System updates work item by identifier    System returns updated work item model (listed in response parameters)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **UpdateWorkItemApiModel** | [**UpdateWorkItemApiModel**](../Models/UpdateWorkItemApiModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

