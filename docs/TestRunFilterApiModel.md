# TestitApiClient.TestRunFilterApiModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectIds** | **[String]** | Specifies a test run project IDs to search for | [optional] 
**name** | **String** | Specifies test run name | [optional] 
**states** | [**[TestRunState]**](TestRunState.md) | Specifies a test run states to search for | [optional] 
**statusCodes** | **[String]** | Specifies a test run status codes to search for | [optional] 
**createdDate** | [**DateTimeRangeSelectorModel**](DateTimeRangeSelectorModel.md) | Specifies a test run range of created date to search for | [optional] 
**startedDate** | [**DateTimeRangeSelectorModel**](DateTimeRangeSelectorModel.md) | Specifies a test run range of started date to search for | [optional] 
**createdByIds** | **[String]** | Specifies a test run creator IDs to search for | [optional] 
**modifiedByIds** | **[String]** | Specifies a test run last editor IDs to search for | [optional] 
**isDeleted** | **Boolean** | Specifies a test run deleted status to search for | [optional] 
**autoTestsCount** | [**Int32RangeSelectorModel**](Int32RangeSelectorModel.md) | Number of autoTests run in the test run | [optional] 
**testResultsOutcome** | [**[TestResultOutcome]**](TestResultOutcome.md) | Specifies test results outcomes | [optional] 
**testResultsStatusCodes** | **[String]** | Specifies test results status codes | [optional] 
**failureCategory** | [**[FailureCategory]**](FailureCategory.md) | Specifies failure categories | [optional] 
**completedDate** | [**DateTimeRangeSelectorModel**](DateTimeRangeSelectorModel.md) | Specifies a test run range of completed date to search for | [optional] 
**testResultsConfigurationIds** | **[String]** | Specifies a test result configuration IDs to search for | [optional] 


