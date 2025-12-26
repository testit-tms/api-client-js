# TestitApiClient.ProjectTestPlanTestPointsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRerunPost**](ProjectTestPlanTestPointsApi.md#apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRerunPost) | **POST** /api/v2/projects/{projectId}/test-plans/{testPlanId}/test-points/autotests/rerun | Rerun autotests.
[**apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRunPost**](ProjectTestPlanTestPointsApi.md#apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRunPost) | **POST** /api/v2/projects/{projectId}/test-plans/{testPlanId}/test-points/autotests/run | Run autotests.



## apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRerunPost

> apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRerunPost(projectId, testPlanId, opts)

Rerun autotests.

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectTestPlanTestPointsApi();
let projectId = "projectId_example"; // String | Internal (UUID) or global (integer) identifier
let testPlanId = "testPlanId_example"; // String | 
let opts = {
  'testPlanTestPointsAutoTestsRerunApiModel': new TestitApiClient.TestPlanTestPointsAutoTestsRerunApiModel() // TestPlanTestPointsAutoTestsRerunApiModel | 
};
apiInstance.apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRerunPost(projectId, testPlanId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Internal (UUID) or global (integer) identifier | 
 **testPlanId** | **String**|  | 
 **testPlanTestPointsAutoTestsRerunApiModel** | [**TestPlanTestPointsAutoTestsRerunApiModel**](TestPlanTestPointsAutoTestsRerunApiModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRunPost

> TestRunNameApiResult apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRunPost(projectId, testPlanId, opts)

Run autotests.

### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.ProjectTestPlanTestPointsApi();
let projectId = "projectId_example"; // String | Internal (UUID) or global (integer) identifier
let testPlanId = "testPlanId_example"; // String | 
let opts = {
  'testPlanTestPointsAutoTestsRunApiModel': new TestitApiClient.TestPlanTestPointsAutoTestsRunApiModel() // TestPlanTestPointsAutoTestsRunApiModel | 
};
apiInstance.apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRunPost(projectId, testPlanId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectId** | **String**| Internal (UUID) or global (integer) identifier | 
 **testPlanId** | **String**|  | 
 **testPlanTestPointsAutoTestsRunApiModel** | [**TestPlanTestPointsAutoTestsRunApiModel**](TestPlanTestPointsAutoTestsRunApiModel.md)|  | [optional] 

### Return type

[**TestRunNameApiResult**](TestRunNameApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

