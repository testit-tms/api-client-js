# TestRunApiResult
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** | Unique ID of the entity | [default to null] |
| **isDeleted** | **Boolean** | Indicates if the entity is deleted | [default to null] |
| **startedDate** | **Date** |  | [optional] [default to null] |
| **completedDate** | **Date** |  | [optional] [default to null] |
| **build** | **String** |  | [default to null] |
| **description** | **String** |  | [optional] [default to null] |
| **stateName** | [**TestRunState**](TestRunState.md) |  | [default to null] |
| **status** | [**TestStatusApiResult**](TestStatusApiResult.md) |  | [default to null] |
| **projectId** | **UUID** |  | [default to null] |
| **testPlanId** | **UUID** |  | [optional] [default to null] |
| **runByUserId** | **UUID** |  | [optional] [default to null] |
| **stoppedByUserId** | **UUID** |  | [optional] [default to null] |
| **name** | **String** |  | [optional] [default to null] |
| **launchSource** | **String** |  | [optional] [default to null] |
| **autoTests** | [**List**](AutoTestApiResult.md) |  | [default to null] |
| **autoTestsCount** | **Integer** |  | [default to null] |
| **testSuiteIds** | **List** |  | [default to null] |
| **isAutomated** | **Boolean** |  | [default to null] |
| **analytic** | [**TestRunAnalyticApiResult**](TestRunAnalyticApiResult.md) |  | [default to null] |
| **testResults** | [**List**](TestResultApiResult.md) |  | [default to null] |
| **testPlan** | [**TestPlanApiResult**](TestPlanApiResult.md) |  | [optional] [default to null] |
| **createdDate** | **Date** |  | [default to null] |
| **modifiedDate** | **Date** |  | [optional] [default to null] |
| **createdById** | **UUID** |  | [default to null] |
| **modifiedById** | **UUID** |  | [optional] [default to null] |
| **createdByUserName** | **String** |  | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

