# WorkItemShortModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** | Work Item internal unique identifier | [default to null] |
| **versionId** | **UUID** | Work Item version identifier | [default to null] |
| **versionNumber** | **Integer** | Work Item version number | [default to null] |
| **name** | **String** | Work Item name | [default to null] |
| **entityTypeName** | **String** | Work Item type. Possible values: CheckLists, SharedSteps, TestCases | [default to null] |
| **projectId** | **UUID** | Project unique identifier | [default to null] |
| **sectionId** | **UUID** | Identifier of Section where Work Item is located | [default to null] |
| **sectionName** | **String** | Section name of Work Item | [default to null] |
| **isAutomated** | **Boolean** | Boolean flag determining whether Work Item is automated | [default to null] |
| **globalId** | **Long** | Work Item global identifier | [default to null] |
| **duration** | **Integer** | Work Item duration | [default to null] |
| **medianDuration** | **Long** | Work Item median duration | [optional] [default to null] |
| **attributes** | [**Map**](AnyType.md) | Work Item attributes | [optional] [default to null] |
| **createdById** | **UUID** | Unique identifier of user who created Work Item | [default to null] |
| **modifiedById** | **UUID** | Unique identifier of user who applied the latest modification of Work Item | [optional] [default to null] |
| **createdDate** | **Date** | Date and time of Work Item creation | [optional] [default to null] |
| **modifiedDate** | **Date** | Date and time of the latest modification of Work Item | [optional] [default to null] |
| **state** | [**WorkItemStates**](WorkItemStates.md) | The current state of Work Item | [default to null] |
| **priority** | [**WorkItemPriorityModel**](WorkItemPriorityModel.md) | Work Item priority level | [default to null] |
| **sourceType** | [**WorkItemSourceTypeModel**](WorkItemSourceTypeModel.md) | Work Item source type | [default to null] |
| **isDeleted** | **Boolean** | Flag determining whether Work Item is deleted | [default to null] |
| **tagNames** | **List** | Array of tag names of Work Item | [optional] [default to null] |
| **iterations** | [**List**](IterationModel.md) | Set of iterations related to Work Item | [default to null] |
| **links** | [**List**](LinkShortModel.md) | Set of links related to Work Item | [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

