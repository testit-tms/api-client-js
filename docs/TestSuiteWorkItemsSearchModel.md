# testit_api_client.TestSuiteWorkItemsSearchModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of work item | [optional] 
**globalIds** | **[Number]** | Collection of global (integer) identifiers | [optional] 
**sectionIds** | **[String]** | Collection of section identifiers | [optional] 
**priorities** | [**[WorkItemPriorityModel]**](WorkItemPriorityModel.md) | Collection of priorities of work item | [optional] 
**isAutomated** | **Boolean** | Is result must consist of only manual/automated work items | [optional] 
**states** | [**[WorkItemStates]**](WorkItemStates.md) | Collection of states of work item | [optional] 
**duration** | [**DurationRangeModel**](DurationRangeModel.md) |  | [optional] 
**createdDate** | [**DateRangeModel**](DateRangeModel.md) |  | [optional] 
**modifiedDate** | [**DateRangeModel**](DateRangeModel.md) |  | [optional] 
**createdByIds** | **[String]** | Collection of identifiers of users who created work item | [optional] 
**modifiedByIds** | **[String]** | Collection of identifiers of users who applied last modification to work item | [optional] 
**attributes** | **{String: [String]}** | Custom attributes of work item | [optional] 
**isDeleted** | **Boolean** | Is result must consist of only actual/deleted work items | [optional] 
**tagNames** | **[String]** | Collection of tags | [optional] 
**entityTypes** | **[String]** | Collection of types of work item  &lt;br&gt;Allowed values: &#x60;TestCases&#x60;, &#x60;CheckLists&#x60;, &#x60;SharedSteps&#x60; | [optional] 


