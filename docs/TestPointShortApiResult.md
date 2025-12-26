# TestitApiClient.TestPointShortApiResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Test point unique internal identifier | 
**isDeleted** | **Boolean** | Indicates if the entity is deleted | 
**testerId** | **String** | Tester who is responded for the test unique internal identifier | [optional] 
**workItemId** | **String** | Workitem to which test point relates unique identifier | [optional] 
**configurationId** | **String** | Configuration to which test point relates unique identifier | [optional] 
**status** | **String** | Test point status  Applies one of these values: Blocked, NoResults, Failed, Passed | [optional] 
**statusModel** | [**TestStatusApiResult**](TestStatusApiResult.md) | Test point status | 
**lastTestResultId** | **String** | Last test result unique identifier | [optional] 
**iterationId** | **String** | Iteration unique identifier | 
**workItemMedianDuration** | **Number** | Median duration of work item the test point represents | [optional] 
**testSuiteId** | **String** | Test suite to which test point relates unique identifier | 


