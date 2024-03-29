# TestSuiteWorkItemsSearchModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **tagNames** | **Set** | Collection of tags | [optional] [default to null] |
| **entityTypes** | [**Set**](WorkItemEntityTypes.md) | Collection of types of work item  &lt;br&gt;Allowed values: &#x60;TestCases&#x60;, &#x60;CheckLists&#x60;, &#x60;SharedSteps&#x60; | [optional] [default to null] |
| **nameOrId** | **String** | Name or identifier (UUID) of work item | [optional] [default to null] |
| **includeIds** | **Set** | Collection of identifiers of work items which need to be included in result regardless of filtering | [optional] [default to null] |
| **excludeIds** | **Set** | Collection of identifiers of work items which need to be excluded from result regardless of filtering | [optional] [default to null] |
| **projectIds** | **Set** | Collection of project identifiers | [optional] [default to null] |
| **name** | **String** | Name of work item | [optional] [default to null] |
| **ids** | **Set** | Specifies a work item unique IDs to search for | [optional] [default to null] |
| **globalIds** | **Set** | Collection of global (integer) identifiers | [optional] [default to null] |
| **attributes** | [**Map**](set.md) | Custom attributes of work item | [optional] [default to null] |
| **isDeleted** | **Boolean** | Is result must consist of only actual/deleted work items | [optional] [default to null] |
| **sectionIds** | **Set** | Collection of section identifiers | [optional] [default to null] |
| **createdByIds** | **Set** | Collection of identifiers of users who created work item | [optional] [default to null] |
| **modifiedByIds** | **Set** | Collection of identifiers of users who applied last modification to work item | [optional] [default to null] |
| **states** | [**Set**](WorkItemStates.md) | Collection of states of work item | [optional] [default to null] |
| **priorities** | [**Set**](WorkItemPriorityModel.md) | Collection of priorities of work item | [optional] [default to null] |
| **types** | [**Set**](WorkItemEntityTypes.md) | Collection of types of work item | [optional] [default to null] |
| **createdDate** | [**TestPointFilterModel_workItemCreatedDate**](TestPointFilterModel_workItemCreatedDate.md) |  | [optional] [default to null] |
| **modifiedDate** | [**TestPointFilterModel_workItemModifiedDate**](TestPointFilterModel_workItemModifiedDate.md) |  | [optional] [default to null] |
| **duration** | [**TestSuiteWorkItemsSearchModel_duration**](TestSuiteWorkItemsSearchModel_duration.md) |  | [optional] [default to null] |
| **medianDuration** | [**TestSuiteWorkItemsSearchModel_medianDuration**](TestSuiteWorkItemsSearchModel_medianDuration.md) |  | [optional] [default to null] |
| **isAutomated** | **Boolean** | Is result must consist of only manual/automated work items | [optional] [default to null] |
| **tags** | **Set** | Collection of tags | [optional] [default to null] |
| **autoTestIds** | **Set** | Collection of identifiers of linked autotests | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

