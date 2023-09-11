# _api_v2_testRuns_search_post_request
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **projectIds** | **Set** | Specifies a test run project IDs to search for | [optional] [default to null] |
| **name** | **String** | Specifies test run name | [optional] [default to null] |
| **states** | [**Set**](TestRunState.md) | Specifies a test run states to search for | [optional] [default to null] |
| **startedDate** | [**TestRunFilterModel_startedDate**](TestRunFilterModel_startedDate.md) |  | [optional] [default to null] |
| **createdByIds** | **Set** | Specifies a test run creator IDs to search for | [optional] [default to null] |
| **modifiedByIds** | **Set** | Specifies a test run last editor IDs to search for | [optional] [default to null] |
| **isDeleted** | **Boolean** | Specifies a test run deleted status to search for | [optional] [default to null] |
| **autoTestsCount** | [**TestRunFilterModel_autoTestsCount**](TestRunFilterModel_autoTestsCount.md) |  | [optional] [default to null] |
| **testResultsOutcome** | [**List**](TestResultOutcome.md) | Specifies test results outcomes | [optional] [default to null] |
| **failureCategory** | [**List**](FailureCategoryModel.md) | Specifies failure categories | [optional] [default to null] |
| **completedDate** | [**TestRunFilterModel_completedDate**](TestRunFilterModel_completedDate.md) |  | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

