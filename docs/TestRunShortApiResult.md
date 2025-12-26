# TestitApiClient.TestRunShortApiResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique ID of the test run | 
**name** | **String** | Name of the test run | 
**state** | [**TestRunState**](TestRunState.md) | Current state of the test run | 
**status** | [**TestStatusApiResult**](TestStatusApiResult.md) | Current status of the test run | 
**createdDate** | **Date** | Date when the test run was created | 
**startedDate** | **Date** | Date when the test run was started | [optional] 
**completedDate** | **Date** | Completion date of the test run | [optional] 
**createdById** | **String** | Unique ID of user who created the test run | 
**modifiedById** | **String** | Unique ID of user who modified the test run last time | [optional] 
**isDeleted** | **Boolean** | Is the test run is deleted | 
**autoTestsCount** | **Number** | Number of AutoTests run in the test run | 
**statistics** | [**TestResultsStatisticsApiResult**](TestResultsStatisticsApiResult.md) | Statistics of the test run | 
**testResultsConfigurations** | [**[ConfigurationShortApiResult]**](ConfigurationShortApiResult.md) | Test results configurations | 


