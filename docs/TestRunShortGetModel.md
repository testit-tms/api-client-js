# TestRunShortGetModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** | Unique ID of the test run | [default to null] |
| **name** | **String** | Name of the test run | [default to null] |
| **state** | [**TestRunState**](TestRunState.md) | Current state of the test run | [default to null] |
| **createdDate** | **Date** | Date when the test run was created | [default to null] |
| **startedDate** | **Date** | Date when the test run was started | [optional] [default to null] |
| **completedDate** | **Date** | Completion date of the test run | [optional] [default to null] |
| **createdById** | **UUID** | Unique ID of user who created the test run | [default to null] |
| **modifiedById** | **UUID** | Unique ID of user who modified the test run last time | [optional] [default to null] |
| **isDeleted** | **Boolean** | Is the test run is deleted | [default to null] |
| **autoTestsCount** | **Integer** | Number of AutoTests run in the test run | [default to null] |
| **statistics** | [**TestResultsStatisticsGetModel**](TestResultsStatisticsGetModel.md) | Statistics of the test run | [default to null] |
| **testResultsConfigurations** | [**List**](ConfigurationShortModel.md) | Test results configurations | [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

