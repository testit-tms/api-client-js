# ProjectsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addGlobaAttributesToProject**](ProjectsApi.md#addGlobaAttributesToProject) | **POST** /api/v2/projects/{id}/globalAttributes | Add global attributes to project |
| [**apiV2ProjectsIdDelete**](ProjectsApi.md#apiV2ProjectsIdDelete) | **DELETE** /api/v2/projects/{id} | Archive project |
| [**apiV2ProjectsIdFailureClassesGet**](ProjectsApi.md#apiV2ProjectsIdFailureClassesGet) | **GET** /api/v2/projects/{id}/failureClasses | Get failure classes |
| [**apiV2ProjectsIdFavoritePut**](ProjectsApi.md#apiV2ProjectsIdFavoritePut) | **PUT** /api/v2/projects/{id}/favorite | Mark Project as favorite |
| [**apiV2ProjectsIdFiltersGet**](ProjectsApi.md#apiV2ProjectsIdFiltersGet) | **GET** /api/v2/projects/{id}/filters | Get Project filters |
| [**apiV2ProjectsIdPatch**](ProjectsApi.md#apiV2ProjectsIdPatch) | **PATCH** /api/v2/projects/{id} | Patch project |
| [**apiV2ProjectsIdPurgePost**](ProjectsApi.md#apiV2ProjectsIdPurgePost) | **POST** /api/v2/projects/{id}/purge | Purge the project |
| [**apiV2ProjectsIdRestorePost**](ProjectsApi.md#apiV2ProjectsIdRestorePost) | **POST** /api/v2/projects/{id}/restore | Restore archived project |
| [**apiV2ProjectsIdTestPlansAttributeAttributeIdDelete**](ProjectsApi.md#apiV2ProjectsIdTestPlansAttributeAttributeIdDelete) | **DELETE** /api/v2/projects/{id}/testPlans/attribute/{attributeId} | Delete attribute from project&#39;s test plans |
| [**apiV2ProjectsIdTestPlansAttributePut**](ProjectsApi.md#apiV2ProjectsIdTestPlansAttributePut) | **PUT** /api/v2/projects/{id}/testPlans/attribute | Update attribute of project&#39;s test plans |
| [**apiV2ProjectsIdTestRunsActiveGet**](ProjectsApi.md#apiV2ProjectsIdTestRunsActiveGet) | **GET** /api/v2/projects/{id}/testRuns/active | Get active Project TestRuns |
| [**apiV2ProjectsIdTestRunsFullGet**](ProjectsApi.md#apiV2ProjectsIdTestRunsFullGet) | **GET** /api/v2/projects/{id}/testRuns/full | Get Project TestRuns full models |
| [**apiV2ProjectsNameNameExistsGet**](ProjectsApi.md#apiV2ProjectsNameNameExistsGet) | **GET** /api/v2/projects/name/{name}/exists |  |
| [**apiV2ProjectsPurgeBulkPost**](ProjectsApi.md#apiV2ProjectsPurgeBulkPost) | **POST** /api/v2/projects/purge/bulk | Purge multiple projects |
| [**apiV2ProjectsRestoreBulkPost**](ProjectsApi.md#apiV2ProjectsRestoreBulkPost) | **POST** /api/v2/projects/restore/bulk | Restore multiple projects |
| [**apiV2ProjectsSearchPost**](ProjectsApi.md#apiV2ProjectsSearchPost) | **POST** /api/v2/projects/search | Search for projects |
| [**apiV2ProjectsShortsPost**](ProjectsApi.md#apiV2ProjectsShortsPost) | **POST** /api/v2/projects/shorts | Get projects short models |
| [**createProject**](ProjectsApi.md#createProject) | **POST** /api/v2/projects | Create project |
| [**deleteProjectAutoTests**](ProjectsApi.md#deleteProjectAutoTests) | **DELETE** /api/v2/projects/{id}/autoTests | Delete all autotests from project |
| [**getAllProjects**](ProjectsApi.md#getAllProjects) | **GET** /api/v2/projects | Get all projects |
| [**getAutoTestsNamespaces**](ProjectsApi.md#getAutoTestsNamespaces) | **GET** /api/v2/projects/{id}/autoTestsNamespaces | Get namespaces of autotests in project |
| [**getProjectById**](ProjectsApi.md#getProjectById) | **GET** /api/v2/projects/{id} | Get project by ID |
| [**getTestPlansByProjectId**](ProjectsApi.md#getTestPlansByProjectId) | **GET** /api/v2/projects/{id}/testPlans | Get project test plans |
| [**getTestRunsByProjectId**](ProjectsApi.md#getTestRunsByProjectId) | **GET** /api/v2/projects/{id}/testRuns | Get project test runs |
| [**updateProject**](ProjectsApi.md#updateProject) | **PUT** /api/v2/projects | Update project |


<a name="addGlobaAttributesToProject"></a>
# **addGlobaAttributesToProject**
> addGlobaAttributesToProject(id, request\_body)

Add global attributes to project

     Use case  User sets project internal or global identifier and attributes identifiers  System search project  System relates global attributes with project  System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Project internal (UUID) or global (integer) identifier | [default to null] |
| **request\_body** | [**Set**](../Models/UUID.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ProjectsIdDelete"></a>
# **apiV2ProjectsIdDelete**
> apiV2ProjectsIdDelete(id)

Archive project

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Unique or global ID of the project | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2ProjectsIdFailureClassesGet"></a>
# **apiV2ProjectsIdFailureClassesGet**
> List apiV2ProjectsIdFailureClassesGet(id, isDeleted)

Get failure classes

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Unique or global ID of the project | [default to null] |
| **isDeleted** | **Boolean**|  | [optional] [default to null] |

### Return type

[**List**](../Models/FailureClassModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2ProjectsIdFavoritePut"></a>
# **apiV2ProjectsIdFavoritePut**
> apiV2ProjectsIdFavoritePut(id)

Mark Project as favorite

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Project internal (UUID) or global (integer) identifier | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2ProjectsIdFiltersGet"></a>
# **apiV2ProjectsIdFiltersGet**
> List apiV2ProjectsIdFiltersGet(id)

Get Project filters

     Use case  User sets project internal or global identifier  User runs method execution  System returns project filters

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Project internal (UUID) or global (integer) identifier | [default to null] |

### Return type

[**List**](../Models/FilterModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2ProjectsIdPatch"></a>
# **apiV2ProjectsIdPatch**
> apiV2ProjectsIdPatch(id, Operation)

Patch project

    See &lt;a href&#x3D;\&quot;https://www.rfc-editor.org/rfc/rfc6902\&quot; target&#x3D;\&quot;_blank\&quot;&gt;RFC 6902: JavaScript Object Notation (JSON) Patch&lt;/a&gt; for details

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Unique or global Id of project | [default to null] |
| **Operation** | [**List**](../Models/Operation.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ProjectsIdPurgePost"></a>
# **apiV2ProjectsIdPurgePost**
> apiV2ProjectsIdPurgePost(id)

Purge the project

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Unique or global ID of the project | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2ProjectsIdRestorePost"></a>
# **apiV2ProjectsIdRestorePost**
> apiV2ProjectsIdRestorePost(id)

Restore archived project

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Unique or global ID of the project | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2ProjectsIdTestPlansAttributeAttributeIdDelete"></a>
# **apiV2ProjectsIdTestPlansAttributeAttributeIdDelete**
> apiV2ProjectsIdTestPlansAttributeAttributeIdDelete(id, attributeId)

Delete attribute from project&#39;s test plans

     Use case  User sets project internal or global identifier and attribute identifier  User runs method execution  System updates project and delete attribute from project for test plans  System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Project internal (UUID) or global (integer) identifier | [default to null] |
| **attributeId** | **UUID**|  | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2ProjectsIdTestPlansAttributePut"></a>
# **apiV2ProjectsIdTestPlansAttributePut**
> apiV2ProjectsIdTestPlansAttributePut(id, CustomAttributeTestPlanProjectRelationPutModel)

Update attribute of project&#39;s test plans

     Use case  User sets project internal or global identifier and attribute model  User runs method execution  System updates project and project attribute for test plan  System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Project internal (UUID) or global (integer) identifier | [default to null] |
| **CustomAttributeTestPlanProjectRelationPutModel** | [**CustomAttributeTestPlanProjectRelationPutModel**](../Models/CustomAttributeTestPlanProjectRelationPutModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ProjectsIdTestRunsActiveGet"></a>
# **apiV2ProjectsIdTestRunsActiveGet**
> List apiV2ProjectsIdTestRunsActiveGet(id)

Get active Project TestRuns

     Use case  User sets project internal or global identifier  User runs method execution  System returns active testruns

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Project internal (UUID) or global (integer) identifier | [default to null] |

### Return type

[**List**](../Models/PublicTestRunModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2ProjectsIdTestRunsFullGet"></a>
# **apiV2ProjectsIdTestRunsFullGet**
> List apiV2ProjectsIdTestRunsFullGet(id, includeTestResults, mustAggregateTestResults, notStarted, inProgress, stopped, completed, createdDateFrom, createdDateTo, testPlanId, Skip, Take, OrderBy, SearchField, SearchValue)

Get Project TestRuns full models

     Use case  User sets project internal or global identifier  User sets query params  User runs method execution  System returns project test runs full models

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Project internal (UUID) or global (integer) identifier | [default to null] |
| **includeTestResults** | **Boolean**|  | [optional] [default to null] |
| **mustAggregateTestResults** | **Boolean**|  | [optional] [default to null] |
| **notStarted** | **Boolean**|  | [optional] [default to null] |
| **inProgress** | **Boolean**|  | [optional] [default to null] |
| **stopped** | **Boolean**|  | [optional] [default to null] |
| **completed** | **Boolean**|  | [optional] [default to null] |
| **createdDateFrom** | **Date**|  | [optional] [default to null] |
| **createdDateTo** | **Date**|  | [optional] [default to null] |
| **testPlanId** | **UUID**|  | [optional] [default to null] |
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

<a name="apiV2ProjectsNameNameExistsGet"></a>
# **apiV2ProjectsNameNameExistsGet**
> Boolean apiV2ProjectsNameNameExistsGet(name)



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

<a name="apiV2ProjectsPurgeBulkPost"></a>
# **apiV2ProjectsPurgeBulkPost**
> Long apiV2ProjectsPurgeBulkPost(ProjectSelectModel)

Purge multiple projects

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ProjectSelectModel** | [**ProjectSelectModel**](../Models/ProjectSelectModel.md)|  | [optional] |

### Return type

**Long**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ProjectsRestoreBulkPost"></a>
# **apiV2ProjectsRestoreBulkPost**
> Long apiV2ProjectsRestoreBulkPost(ProjectSelectModel)

Restore multiple projects

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ProjectSelectModel** | [**ProjectSelectModel**](../Models/ProjectSelectModel.md)|  | [optional] |

### Return type

**Long**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ProjectsSearchPost"></a>
# **apiV2ProjectsSearchPost**
> List apiV2ProjectsSearchPost(Skip, Take, OrderBy, SearchField, SearchValue, ProjectsFilterModel)

Search for projects

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **ProjectsFilterModel** | [**ProjectsFilterModel**](../Models/ProjectsFilterModel.md)|  | [optional] |

### Return type

[**List**](../Models/ProjectShortModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ProjectsShortsPost"></a>
# **apiV2ProjectsShortsPost**
> ProjectShortApiResultReply apiV2ProjectsShortsPost(GetShortProjectsApiModel)

Get projects short models

     Use case  User sets query params  User runs method execution  System return projects short models

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **GetShortProjectsApiModel** | [**GetShortProjectsApiModel**](../Models/GetShortProjectsApiModel.md)|  | [optional] |

### Return type

[**ProjectShortApiResultReply**](../Models/ProjectShortApiResultReply.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createProject"></a>
# **createProject**
> ProjectApiResult createProject(CreateProjectApiModel)

Create project

     Use case  User sets project parameters (listed in request example) and runs method execution  System creates project  System returns project model (example listed in response parameters)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **CreateProjectApiModel** | [**CreateProjectApiModel**](../Models/CreateProjectApiModel.md)|  | [optional] |

### Return type

[**ProjectApiResult**](../Models/ProjectApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteProjectAutoTests"></a>
# **deleteProjectAutoTests**
> deleteProjectAutoTests(id)

Delete all autotests from project

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Unique or global ID of the project | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAllProjects"></a>
# **getAllProjects**
> List getAllProjects(isDeleted, projectName, Skip, Take, OrderBy, SearchField, SearchValue)

Get all projects

     Use case  [Optional] User sets isDeleted field value  [Optional] If User sets isDeleted field value as true, System search all deleted projects  [Optional] If User sets isDeleted field value as false, System search all projects which are not deleted  If User did not set isDeleted field value, System search all projects  System returns array of all found projects(listed in response model)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **isDeleted** | **Boolean**| If result must consist of only actual/deleted parameters | [optional] [default to null] |
| **projectName** | **String**|  | [optional] [default to null] |
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |

### Return type

[**List**](../Models/ProjectShortModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAutoTestsNamespaces"></a>
# **getAutoTestsNamespaces**
> List getAutoTestsNamespaces(id)

Get namespaces of autotests in project

     Use case  User sets project internal or global identifier and runs method execution  System search project  System search all autotest related to the project  System returns array of autotest with namespaces and classnames (listed in response)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Project internal (UUID) or global (integer) identifier | [default to null] |

### Return type

[**List**](../Models/AutoTestNamespaceModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getProjectById"></a>
# **getProjectById**
> ProjectModel getProjectById(id)

Get project by ID

     Use case  User sets project internal or global identifier and runs method execution  System search project  System returns project (example listed in response parameters)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Project internal (UUID) or global (integer) identifier | [default to null] |

### Return type

[**ProjectModel**](../Models/ProjectModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTestPlansByProjectId"></a>
# **getTestPlansByProjectId**
> List getTestPlansByProjectId(id, isDeleted)

Get project test plans

     Use case  User sets project internal or global identifier  [Optional] User sets isDeleted field value  User runs method execution  System search project  [Optional] If User sets isDeleted field value as true, System search all deleted test plans related to project  [Optional] If User sets isDeleted field value as false, System search all test plans related to project which are not deleted  [Optional] If User did not set isDeleted field value, System search all v related to project  System returns array of found test plans (listed in response model)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Project internal (UUID) or global (integer) identifier | [default to null] |
| **isDeleted** | **Boolean**| If result must consist of only actual/archived test plans | [optional] [default to null] |

### Return type

[**List**](../Models/TestPlanModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTestRunsByProjectId"></a>
# **getTestRunsByProjectId**
> List getTestRunsByProjectId(id, notStarted, inProgress, stopped, completed, createdDateFrom, createdDateTo, testPlanId, Skip, Take, OrderBy, SearchField, SearchValue)

Get project test runs

     Use case  User sets project internal or global identifier  User runs method execution  System search project  System search all test runs related to project  System returns array of found test runs (listed in response model)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Project internal (UUID) or global (integer) identifier | [default to null] |
| **notStarted** | **Boolean**|  | [default to null] |
| **inProgress** | **Boolean**|  | [default to null] |
| **stopped** | **Boolean**|  | [default to null] |
| **completed** | **Boolean**|  | [default to null] |
| **createdDateFrom** | **Date**|  | [optional] [default to null] |
| **createdDateTo** | **Date**|  | [optional] [default to null] |
| **testPlanId** | **UUID**|  | [optional] [default to null] |
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |

### Return type

[**List**](../Models/TestRunV2ApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateProject"></a>
# **updateProject**
> updateProject(UpdateProjectApiModel)

Update project

     Use case  User sets project parameters (listed in request example) and runs method execution  System updates project  System returns updated project model (example listed in response parameters)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **UpdateProjectApiModel** | [**UpdateProjectApiModel**](../Models/UpdateProjectApiModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

