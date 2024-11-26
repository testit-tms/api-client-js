# TestResultsFilterRequest
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **configurationIds** | **List** | Specifies a test result configuration IDs to search for | [optional] [default to null] |
| **outcomes** | [**List**](TestResultOutcome.md) | Specifies a test result outcomes to search for | [optional] [default to null] |
| **statusCodes** | **List** | Specifies a test result status codes to search for | [optional] [default to null] |
| **failureCategories** | [**List**](FailureCategoryModel.md) | Specifies a test result failure categories to search for | [optional] [default to null] |
| **namespace** | **String** | Specifies a test result namespace to search for | [optional] [default to null] |
| **className** | **String** | Specifies a test result class name to search for | [optional] [default to null] |
| **autoTestGlobalIds** | **List** | Specifies an autotest global IDs to search results for | [optional] [default to null] |
| **name** | **String** | Specifies an autotest name to search results for | [optional] [default to null] |
| **createdDate** | [**DateTimeRangeSelectorModel**](DateTimeRangeSelectorModel.md) | Specifies a test result creation date and time range to search for | [optional] [default to null] |
| **modifiedDate** | [**DateTimeRangeSelectorModel**](DateTimeRangeSelectorModel.md) | Specifies a test result modified date and time range to search for | [optional] [default to null] |
| **startedOn** | [**DateTimeRangeSelectorModel**](DateTimeRangeSelectorModel.md) | Specifies a test result started on date and time range to search for | [optional] [default to null] |
| **completedOn** | [**DateTimeRangeSelectorModel**](DateTimeRangeSelectorModel.md) | Specifies a test result completed on date and time range to search for | [optional] [default to null] |
| **duration** | [**Int64RangeSelectorModel**](Int64RangeSelectorModel.md) | Specifies a test result duration range to search for | [optional] [default to null] |
| **resultReasons** | **List** | Specifies result reasons for searching test results | [optional] [default to null] |
| **testRunIds** | **List** | Specifies a test result test run IDs to search for | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

