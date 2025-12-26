# TestitApiClient.SharedStepReferencesQueryFilterModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of work item | [optional] 
**globalIds** | **[Number]** | Collection of global (integer) identifiers | [optional] 
**sectionIds** | **[String]** | Collection of section identifiers | [optional] 
**createdByIds** | **[String]** | Collection of identifiers of users who created work item | [optional] 
**modifiedByIds** | **[String]** | Collection of identifiers of users who applied last modification to work item | [optional] 
**states** | [**[WorkItemStates]**](WorkItemStates.md) | Collection of states of work item | [optional] 
**priorities** | [**[WorkItemPriorityModel]**](WorkItemPriorityModel.md) | Collection of priorities of work item | [optional] 
**entityTypes** | **[String]** | Collection of types of work item  Allowed values: &#x60;TestCases&#x60;, &#x60;CheckLists&#x60;, &#x60;SharedSteps&#x60; | [optional] 
**createdDate** | [**DateTimeRangeSelectorModel**](DateTimeRangeSelectorModel.md) | Date and time of work item creation | [optional] 
**modifiedDate** | [**DateTimeRangeSelectorModel**](DateTimeRangeSelectorModel.md) | Date and time of work item last modification | [optional] 
**isAutomated** | **Boolean** | Is result must consist of only manual/automated work items | [optional] 
**tags** | **[String]** | Collection of tags | [optional] 


