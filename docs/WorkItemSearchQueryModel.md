# WorkItemSearchQueryModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | Name of work item | [optional] [default to null] |
| **ids** | **Set** | Specifies a work item unique IDs to search for | [optional] [default to null] |
| **globalIds** | **Set** | Collection of global (integer) identifiers | [optional] [default to null] |
| **attributes** | [**Map**](set.md) | Custom attributes of work item | [optional] [default to null] |
| **isDeleted** | **Boolean** | Is result must consist of only actual/deleted work items | [optional] [default to null] |
| **projectIds** | **Set** | Collection of project identifiers | [optional] [default to null] |
| **sectionIds** | **Set** | Collection of section identifiers | [optional] [default to null] |
| **createdByIds** | **Set** | Collection of identifiers of users who created work item | [optional] [default to null] |
| **modifiedByIds** | **Set** | Collection of identifiers of users who applied last modification to work item | [optional] [default to null] |
| **states** | [**Set**](WorkItemStates.md) | Collection of states of work item | [optional] [default to null] |
| **priorities** | [**Set**](WorkItemPriorityModel.md) | Collection of priorities of work item | [optional] [default to null] |
| **types** | [**Set**](WorkItemEntityTypes.md) | Collection of types of work item | [optional] [default to null] |
| **createdDate** | [**DateTimeRangeSelectorModel**](DateTimeRangeSelectorModel.md) |  | [optional] [default to null] |
| **modifiedDate** | [**DateTimeRangeSelectorModel**](DateTimeRangeSelectorModel.md) |  | [optional] [default to null] |
| **duration** | [**Int32RangeSelectorModel**](Int32RangeSelectorModel.md) |  | [optional] [default to null] |
| **isAutomated** | **Boolean** | Is result must consist of only manual/automated work items | [optional] [default to null] |
| **tags** | **Set** | Collection of tags | [optional] [default to null] |
| **autoTestIds** | **Set** | Collection of identifiers of linked autotests | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

