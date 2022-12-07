# testit_api_client.WorkItemFilterModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nameOrId** | **String** | Name or identifier (UUID) of work item | [optional] 
**includeIds** | **[String]** | Collection of identifiers of work items which need to be included in result regardless of filtering | [optional] 
**excludeIds** | **[String]** | Collection of identifiers of work items which need to be excluded from result regardless of filtering | [optional] 
**name** | **String** | Name of work item | [optional] 
**globalIds** | **[Number]** | Collection of global (integer) identifiers | [optional] 
**attributes** | **{String: [String]}** | Custom attributes of work item | [optional] 
**isDeleted** | **Boolean** | Is result must consist of only actual/deleted work items | [optional] 
**projectIds** | **[String]** | Collection of project identifiers | [optional] 
**sectionIds** | **[String]** | Collection of section identifiers | [optional] 
**createdByIds** | **[String]** | Collection of identifiers of users who created work item | [optional] 
**modifiedByIds** | **[String]** | Collection of identifiers of users who applied last modification to work item | [optional] 
**states** | [**[WorkItemStates]**](WorkItemStates.md) | Collection of states of work item | [optional] 
**priorities** | [**[WorkItemPriorityModel]**](WorkItemPriorityModel.md) | Collection of priorities of work item | [optional] 
**entityTypes** | **[String]** | Collection of types of work item  &lt;br&gt;Allowed values: &#x60;TestCases&#x60;, &#x60;CheckLists&#x60;, &#x60;SharedSteps&#x60; | [optional] 
**createdDateMinimal** | **Date** | Minimum date and time of work item creation | [optional] 
**createdDateMaximal** | **Date** | Maximum date and time of work item creation | [optional] 
**modifiedDateMinimal** | **Date** | Minimum date and time of work item last modification | [optional] 
**modifiedDateMaximal** | **Date** | Maximum date and time of work item last modification | [optional] 
**durationMinimal** | **Number** | Minimum completion time (seconds) of work item | [optional] 
**durationMaximal** | **Number** | Maximum completion time (seconds) of work item | [optional] 
**isAutomated** | **Boolean** | Is result must consist of only manual/automated work items | [optional] 
**tagNames** | **[String]** | Collection of tags | [optional] 
**autoTestIds** | **[String]** | Collection of identifiers of linked autotests | [optional] 
**exceptWorkItemIds** | **[String]** |  | [optional] 


