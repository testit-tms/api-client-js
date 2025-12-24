# TestPointByTestSuiteModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** | Test point unique internal identifier | [default to null] |
| **testerId** | **UUID** | Tester who is responded for the test unique internal identifier | [optional] [default to null] |
| **workItemId** | **UUID** | Workitem to which test point relates unique identifier | [optional] [default to null] |
| **configurationId** | **UUID** | Configuration to which test point relates unique identifier | [optional] [default to null] |
| **status** | **String** | Test point status  Applies one of these values: Blocked, NoResults, Failed, Passed | [optional] [default to null] |
| **lastTestResultId** | **UUID** | Last test result unique identifier | [optional] [default to null] |
| **iterationId** | **UUID** | Iteration unique identifier | [default to null] |
| **workItemMedianDuration** | **Long** | Median duration of work item the test point represents | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

