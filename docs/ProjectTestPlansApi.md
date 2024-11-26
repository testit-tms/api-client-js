# ProjectTestPlansApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2ProjectsProjectIdTestPlansAnalyticsGet**](ProjectTestPlansApi.md#apiV2ProjectsProjectIdTestPlansAnalyticsGet) | **GET** /api/v2/projects/{projectId}/testPlans/analytics | Get TestPlans analytics |
| [**apiV2ProjectsProjectIdTestPlansDeleteBulkPost**](ProjectTestPlansApi.md#apiV2ProjectsProjectIdTestPlansDeleteBulkPost) | **POST** /api/v2/projects/{projectId}/testPlans/delete/bulk | Delete multiple test plans |
| [**apiV2ProjectsProjectIdTestPlansNameExistsGet**](ProjectTestPlansApi.md#apiV2ProjectsProjectIdTestPlansNameExistsGet) | **GET** /api/v2/projects/{projectId}/testPlans/{name}/exists | Checks if TestPlan exists with the specified name exists for the project |
| [**apiV2ProjectsProjectIdTestPlansPurgeBulkPost**](ProjectTestPlansApi.md#apiV2ProjectsProjectIdTestPlansPurgeBulkPost) | **POST** /api/v2/projects/{projectId}/testPlans/purge/bulk | Permanently delete multiple archived test plans |
| [**apiV2ProjectsProjectIdTestPlansRestoreBulkPost**](ProjectTestPlansApi.md#apiV2ProjectsProjectIdTestPlansRestoreBulkPost) | **POST** /api/v2/projects/{projectId}/testPlans/restore/bulk | Restore multiple test plans |
| [**apiV2ProjectsProjectIdTestPlansSearchPost**](ProjectTestPlansApi.md#apiV2ProjectsProjectIdTestPlansSearchPost) | **POST** /api/v2/projects/{projectId}/testPlans/search | Get Project TestPlans with analytics |


<a name="apiV2ProjectsProjectIdTestPlansAnalyticsGet"></a>
# **apiV2ProjectsProjectIdTestPlansAnalyticsGet**
> List apiV2ProjectsProjectIdTestPlansAnalyticsGet(projectId, isDeleted, mustUpdateCache, Skip, Take, OrderBy, SearchField, SearchValue)

Get TestPlans analytics

     Use case   User sets project internal identifier   User sets query params   User runs method execution   System return analytics

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **UUID**| Project internal (UUID) identifier | [default to null] |
| **isDeleted** | **Boolean**|  | [optional] [default to null] |
| **mustUpdateCache** | **Boolean**|  | [optional] [default to false] |
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |

### Return type

[**List**](../Models/TestPlanWithAnalyticModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2ProjectsProjectIdTestPlansDeleteBulkPost"></a>
# **apiV2ProjectsProjectIdTestPlansDeleteBulkPost**
> List apiV2ProjectsProjectIdTestPlansDeleteBulkPost(projectId, TestPlanSelectModel)

Delete multiple test plans

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**| Unique or global ID of the project | [default to null] |
| **TestPlanSelectModel** | [**TestPlanSelectModel**](../Models/TestPlanSelectModel.md)|  | [optional] |

### Return type

**List**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ProjectsProjectIdTestPlansNameExistsGet"></a>
# **apiV2ProjectsProjectIdTestPlansNameExistsGet**
> Boolean apiV2ProjectsProjectIdTestPlansNameExistsGet(projectId, name)

Checks if TestPlan exists with the specified name exists for the project

     Use case   User sets project internal or global identifier    User runs method execution   System purge delete project workitems

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **UUID**| Project internal (UUID) or global (integer) identifier | [default to null] |
| **name** | **String**| TestPlan name to check | [default to null] |

### Return type

**Boolean**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2ProjectsProjectIdTestPlansPurgeBulkPost"></a>
# **apiV2ProjectsProjectIdTestPlansPurgeBulkPost**
> apiV2ProjectsProjectIdTestPlansPurgeBulkPost(projectId, TestPlanSelectModel)

Permanently delete multiple archived test plans

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**| Unique or global ID of the project | [default to null] |
| **TestPlanSelectModel** | [**TestPlanSelectModel**](../Models/TestPlanSelectModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ProjectsProjectIdTestPlansRestoreBulkPost"></a>
# **apiV2ProjectsProjectIdTestPlansRestoreBulkPost**
> List apiV2ProjectsProjectIdTestPlansRestoreBulkPost(projectId, TestPlanSelectModel)

Restore multiple test plans

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**| Unique or global ID of the project | [default to null] |
| **TestPlanSelectModel** | [**TestPlanSelectModel**](../Models/TestPlanSelectModel.md)|  | [optional] |

### Return type

**List**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ProjectsProjectIdTestPlansSearchPost"></a>
# **apiV2ProjectsProjectIdTestPlansSearchPost**
> List apiV2ProjectsProjectIdTestPlansSearchPost(projectId, mustUpdateCache, Skip, Take, OrderBy, SearchField, SearchValue, ProjectTestPlansFilterModel)

Get Project TestPlans with analytics

     Use case   User sets project internal or global identifier    User sets request body    User runs method execution   System returns project testplans with analytics

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**| Project internal (UUID) or global (integer) identifier | [default to null] |
| **mustUpdateCache** | **Boolean**|  | [optional] [default to false] |
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **ProjectTestPlansFilterModel** | [**ProjectTestPlansFilterModel**](../Models/ProjectTestPlansFilterModel.md)|  | [optional] |

### Return type

[**List**](../Models/TestPlanWithAnalyticModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

