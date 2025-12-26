# TestitApiClient.TestPlanTestPointsSearchApiModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**testSuiteIds** | **[String]** | Specifies a test point test suite IDs to search for | [optional] 
**workItemGlobalIds** | **[Number]** | Specifies a test point work item global IDs to search for | [optional] 
**workItemMedianDuration** | [**Int64RangeSelectorModel**](Int64RangeSelectorModel.md) | Specifies a test point work item median duration range to search for | [optional] 
**statuses** | [**[TestPointStatus]**](TestPointStatus.md) | Specifies a test point statuses to search for | [optional] 
**statusCodes** | **[String]** | Specifies a test point status codes to search for | [optional] 
**priorities** | [**[WorkItemPriorityModel]**](WorkItemPriorityModel.md) | Specifies a test point priorities to search for | [optional] 
**isAutomated** | **Boolean** | Specifies a test point automation status to search for | [optional] 
**name** | **String** | Specifies a test point name to search for | [optional] 
**configurationIds** | **[String]** | Specifies a test point configuration IDs to search for | [optional] 
**testerIds** | **[String]** | Specifies a test point assigned user IDs to search for | [optional] 
**duration** | [**Int64RangeSelectorModel**](Int64RangeSelectorModel.md) | Specifies a test point range of duration to search for | [optional] 
**sectionIds** | **[String]** | Specifies a test point work item section IDs to search for | [optional] 
**createdDate** | [**DateTimeRangeSelectorModel**](DateTimeRangeSelectorModel.md) | Specifies a test point range of creation date to search for | [optional] 
**createdByIds** | **[String]** | Specifies a test point creator IDs to search for | [optional] 
**modifiedDate** | [**DateTimeRangeSelectorModel**](DateTimeRangeSelectorModel.md) | Specifies a test point range of last modification date to search for | [optional] 
**modifiedByIds** | **[String]** | Specifies a test point last editor IDs to search for | [optional] 
**tags** | **[String]** | Specifies a test point tags to search for | [optional] 
**excludeTags** | **[String]** | Specifies a test point tags to exclude to search for | [optional] 
**attributes** | **{String: [String]}** | Specifies a test point attributes to search for | [optional] 
**workItemCreatedDate** | [**DateTimeRangeSelectorModel**](DateTimeRangeSelectorModel.md) | Specifies a work item range of creation date to search for | [optional] 
**workItemCreatedByIds** | **[String]** | Specifies a work item creator IDs to search for | [optional] 
**workItemModifiedDate** | [**DateTimeRangeSelectorModel**](DateTimeRangeSelectorModel.md) | Specifies a work item range of last modification date to search for | [optional] 
**workItemModifiedByIds** | **[String]** | Specifies a work item last editor IDs to search for | [optional] 


