# TestitApiClient.WorkItemSearchQueryModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectIds** | **[String]** | Collection of project identifiers | [optional] 
**links** | [**WorkItemLinkFilterModel**](WorkItemLinkFilterModel.md) | Specifies a work item filter by its links | [optional] 
**name** | **String** | Name of work item | [optional] 
**ids** | **[String]** | Specifies a work item unique IDs to search for | [optional] 
**globalIds** | **[Number]** | Collection of global (integer) identifiers | [optional] 
**attributes** | **{String: [String]}** | Custom attributes of work item | [optional] 
**isDeleted** | **Boolean** | Is result must consist of only actual/deleted work items | [optional] 
**sectionIds** | **[String]** | Collection of section identifiers | [optional] 
**createdByIds** | **[String]** | Collection of identifiers of users who created work item | [optional] 
**modifiedByIds** | **[String]** | Collection of identifiers of users who applied last modification to work item | [optional] 
**states** | [**[WorkItemStates]**](WorkItemStates.md) | Collection of states of work item | [optional] 
**priorities** | [**[WorkItemPriorityModel]**](WorkItemPriorityModel.md) | Collection of priorities of work item | [optional] 
**sourceTypes** | [**[WorkItemSourceTypeModel]**](WorkItemSourceTypeModel.md) | Collection of priorities of work item | [optional] 
**types** | [**[WorkItemEntityTypes]**](WorkItemEntityTypes.md) | Collection of types of work item | [optional] 
**createdDate** | [**DateTimeRangeSelectorModel**](DateTimeRangeSelectorModel.md) | Specifies a work item range of creation date to search for | [optional] 
**modifiedDate** | [**DateTimeRangeSelectorModel**](DateTimeRangeSelectorModel.md) | Specifies a work item range of last modification date to search for | [optional] 
**duration** | [**Int32RangeSelectorModel**](Int32RangeSelectorModel.md) | Specifies a work item duration range to search for | [optional] 
**medianDuration** | [**Int64RangeSelectorModel**](Int64RangeSelectorModel.md) | Specifies a work item median duration range to search for | [optional] 
**isAutomated** | **Boolean** | Is result must consist of only manual/automated work items | [optional] 
**tags** | **[String]** | Collection of tags | [optional] 
**excludeTags** | **[String]** | Collection of tags to exclude | [optional] 
**autoTestIds** | **[String]** | Collection of identifiers of linked autotests | [optional] 
**workItemVersionIds** | **[String]** | Collection of identifiers work items versions. | [optional] 


