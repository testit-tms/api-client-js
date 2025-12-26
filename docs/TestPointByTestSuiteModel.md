# TestitApiClient.TestPointByTestSuiteModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Test point unique internal identifier | 
**testerId** | **String** | Tester who is responded for the test unique internal identifier | [optional] 
**workItemId** | **String** | Workitem to which test point relates unique identifier | [optional] 
**configurationId** | **String** | Configuration to which test point relates unique identifier | [optional] 
**status** | **String** | Test point status  Applies one of these values: Blocked, NoResults, Failed, Passed | [optional] 
**lastTestResultId** | **String** | Last test result unique identifier | [optional] 
**iterationId** | **String** | Iteration unique identifier | 
**workItemMedianDuration** | **Number** | Median duration of work item the test point represents | [optional] 


