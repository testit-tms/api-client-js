# ProjectTestPlanTestPointsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRerunPost**](ProjectTestPlanTestPointsApi.md#apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRerunPost) | **POST** /api/v2/projects/{projectId}/test-plans/{testPlanId}/test-points/autotests/rerun | Rerun autotests. |
| [**apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRunPost**](ProjectTestPlanTestPointsApi.md#apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRunPost) | **POST** /api/v2/projects/{projectId}/test-plans/{testPlanId}/test-points/autotests/run | Run autotests. |


<a name="apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRerunPost"></a>
# **apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRerunPost**
> apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRerunPost(projectId, testPlanId, TestPlanTestPointsAutoTestsRerunApiModel)

Rerun autotests.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**| Internal (UUID) or global (integer) identifier | [default to null] |
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
| **projectId** | **String**| Internal (UUID) or global (integer) identifier | [default to null] |
| **testPlanId** | **UUID**|  | [default to null] |
| **TestPlanTestPointsAutoTestsRunApiModel** | [**TestPlanTestPointsAutoTestsRunApiModel**](../Models/TestPlanTestPointsAutoTestsRunApiModel.md)|  | [optional] |

### Return type

[**TestRunNameApiResult**](../Models/TestRunNameApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

