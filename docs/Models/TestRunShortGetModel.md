# TestRunShortGetModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** | Unique ID of the test run | [optional] [default to null] |
| **name** | **String** | Name of the test run | [optional] [default to null] |
| **projectId** | **UUID** | Unique ID of project where test run is located | [optional] [default to null] |
| **createdDate** | **Date** | Date when the test run was created | [optional] [default to null] |
| **createdById** | **UUID** | Unique ID of user who created the test run | [optional] [default to null] |
| **modifiedDate** | **Date** | Date when the test run was modified last time | [optional] [default to null] |
| **modifiedById** | **UUID** | Unique ID of user who modified the test run last time | [optional] [default to null] |
| **isDeleted** | **Boolean** | Is the test run is deleted | [optional] [default to null] |
| **state** | [**TestRunState**](TestRunState.md) |  | [optional] [default to null] |
| **startedDate** | **Date** | Date when the test run was started | [optional] [default to null] |
| **autotestsCount** | **Integer** | Number of autotests run in the test run | [optional] [default to null] |
| **statistics** | [**TestResultsStatisticsGetModel**](TestResultsStatisticsGetModel.md) |  | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

