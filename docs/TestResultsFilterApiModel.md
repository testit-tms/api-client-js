# TestitApiClient.TestResultsFilterApiModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configurationIds** | **[String]** | Specifies a test result configuration IDs to search for | [optional] 
**outcomes** | [**[TestResultOutcome]**](TestResultOutcome.md) | Specifies a test result outcomes to search for | [optional] 
**statusCodes** | **[String]** | Specifies a test result status codes to search for | [optional] 
**failureCategories** | [**[FailureCategoryModel]**](FailureCategoryModel.md) | Specifies a test result failure categories to search for | [optional] 
**namespace** | **String** | Specifies a test result namespace to search for | [optional] 
**className** | **String** | Specifies a test result class name to search for | [optional] 
**autoTestGlobalIds** | **[Number]** | Specifies an autotest global IDs to search results for | [optional] 
**name** | **String** | Specifies an autotest name to search results for | [optional] 
**createdDate** | [**DateTimeRangeSelectorModel**](DateTimeRangeSelectorModel.md) | Specifies a test result creation date and time range to search for | [optional] 
**modifiedDate** | [**DateTimeRangeSelectorModel**](DateTimeRangeSelectorModel.md) | Specifies a test result modified date and time range to search for | [optional] 
**startedOn** | [**DateTimeRangeSelectorModel**](DateTimeRangeSelectorModel.md) | Specifies a test result started on date and time range to search for | [optional] 
**completedOn** | [**DateTimeRangeSelectorModel**](DateTimeRangeSelectorModel.md) | Specifies a test result completed on date and time range to search for | [optional] 
**duration** | [**Int64RangeSelectorModel**](Int64RangeSelectorModel.md) | Specifies a test result duration range to search for | [optional] 
**resultReasons** | **[String]** | Specifies result reasons for searching test results | [optional] 
**testRunIds** | **[String]** | Specifies a test result test run IDs to search for | [optional] 


