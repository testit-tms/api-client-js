# TestRunFilterApiModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **projectIds** | **List** | Specifies a test run project IDs to search for | [optional] [default to null] |
| **name** | **String** | Specifies test run name | [optional] [default to null] |
| **states** | [**List**](TestRunState.md) | Specifies a test run states to search for | [optional] [default to null] |
| **statusCodes** | **List** | Specifies a test run status codes to search for | [optional] [default to null] |
| **createdDate** | [**DateTimeRangeSelectorModel**](DateTimeRangeSelectorModel.md) | Specifies a test run range of created date to search for | [optional] [default to null] |
| **startedDate** | [**DateTimeRangeSelectorModel**](DateTimeRangeSelectorModel.md) | Specifies a test run range of started date to search for | [optional] [default to null] |
| **createdByIds** | **List** | Specifies a test run creator IDs to search for | [optional] [default to null] |
| **modifiedByIds** | **List** | Specifies a test run last editor IDs to search for | [optional] [default to null] |
| **isDeleted** | **Boolean** | Specifies a test run deleted status to search for | [optional] [default to null] |
| **autoTestsCount** | [**Int32RangeSelectorModel**](Int32RangeSelectorModel.md) | Number of autoTests run in the test run | [optional] [default to null] |
| **testResultsOutcome** | [**List**](TestResultOutcome.md) | Specifies test results outcomes | [optional] [default to null] |
| **testResultsStatusCodes** | **List** | Specifies test results status codes | [optional] [default to null] |
| **failureCategory** | [**List**](FailureCategory.md) | Specifies failure categories | [optional] [default to null] |
| **completedDate** | [**DateTimeRangeSelectorModel**](DateTimeRangeSelectorModel.md) | Specifies a test run range of completed date to search for | [optional] [default to null] |
| **testResultsConfigurationIds** | **List** | Specifies a test result configuration IDs to search for | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

