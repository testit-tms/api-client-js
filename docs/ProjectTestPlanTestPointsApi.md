# ProjectTestPlanTestPointsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAnalyticsPost**](ProjectTestPlanTestPointsApi.md#apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAnalyticsPost) | **POST** /api/v2/projects/{projectId}/test-plans/{testPlanId}/test-points/analytics | Get test points analytics. |
| [**apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRerunPost**](ProjectTestPlanTestPointsApi.md#apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRerunPost) | **POST** /api/v2/projects/{projectId}/test-plans/{testPlanId}/test-points/autotests/rerun | Rerun autotests. |
| [**apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRunPost**](ProjectTestPlanTestPointsApi.md#apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRunPost) | **POST** /api/v2/projects/{projectId}/test-plans/{testPlanId}/test-points/autotests/run | Run autotests. |
| [**apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsGroupingSearchPost**](ProjectTestPlanTestPointsApi.md#apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsGroupingSearchPost) | **POST** /api/v2/projects/{projectId}/test-plans/{testPlanId}/test-points/grouping-search | Search test points in test plan. |
| [**apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsTestersPost**](ProjectTestPlanTestPointsApi.md#apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsTestersPost) | **POST** /api/v2/projects/{projectId}/test-plans/{testPlanId}/test-points/testers | Distribute test points between the users. |


<a name="apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAnalyticsPost"></a>
# **apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAnalyticsPost**
> TestPlanTestPointsAnalyticsApiResult apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAnalyticsPost(projectId, testPlanId, TestPlanTestPointsAnalyticsApiModel)

Get test points analytics.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**|  | [default to null] |
| **testPlanId** | **UUID**|  | [default to null] |
| **TestPlanTestPointsAnalyticsApiModel** | [**TestPlanTestPointsAnalyticsApiModel**](../Models/TestPlanTestPointsAnalyticsApiModel.md)|  | [optional] |

### Return type

[**TestPlanTestPointsAnalyticsApiResult**](../Models/TestPlanTestPointsAnalyticsApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRerunPost"></a>
# **apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRerunPost**
> apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRerunPost(projectId, testPlanId, TestPlanTestPointsAutoTestsRerunApiModel)

Rerun autotests.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**|  | [default to null] |
| **testPlanId** | **UUID**|  | [default to null] |
| **TestPlanTestPointsAutoTestsRerunApiModel** | [**TestPlanTestPointsAutoTestsRerunApiModel**](../Models/TestPlanTestPointsAutoTestsRerunApiModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRunPost"></a>
# **apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRunPost**
> TestRunNameApiResult apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRunPost(projectId, testPlanId, TestPlanTestPointsAutoTestsRunApiModel)

Run autotests.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**|  | [default to null] |
| **testPlanId** | **UUID**|  | [default to null] |
| **TestPlanTestPointsAutoTestsRunApiModel** | [**TestPlanTestPointsAutoTestsRunApiModel**](../Models/TestPlanTestPointsAutoTestsRunApiModel.md)|  | [optional] |

### Return type

[**TestRunNameApiResult**](../Models/TestRunNameApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsGroupingSearchPost"></a>
# **apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsGroupingSearchPost**
> TestPlanTestPointsGroupSearchApiResult apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsGroupingSearchPost(projectId, testPlanId, TestPlanTestPointsApiModel)

Search test points in test plan.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**|  | [default to null] |
| **testPlanId** | **UUID**|  | [default to null] |
| **TestPlanTestPointsApiModel** | [**TestPlanTestPointsApiModel**](../Models/TestPlanTestPointsApiModel.md)|  | [optional] |

### Return type

[**TestPlanTestPointsGroupSearchApiResult**](../Models/TestPlanTestPointsGroupSearchApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsTestersPost"></a>
# **apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsTestersPost**
> apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsTestersPost(projectId, testPlanId, TestPlanTestPointsSetTestersApiModel)

Distribute test points between the users.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**|  | [default to null] |
| **testPlanId** | **UUID**|  | [default to null] |
| **TestPlanTestPointsSetTestersApiModel** | [**TestPlanTestPointsSetTestersApiModel**](../Models/TestPlanTestPointsSetTestersApiModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

