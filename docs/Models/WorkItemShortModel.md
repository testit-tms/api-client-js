# WorkItemShortModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** |  | [optional] [default to null] |
| **versionId** | **UUID** | used for versioning changes in workitem | [optional] [default to null] |
| **name** | **String** |  | [default to null] |
| **entityTypeName** | **String** | Property can have one of these values: CheckLists, SharedSteps, TestCases | [default to null] |
| **projectId** | **UUID** | This property is used to link autotest with project | [default to null] |
| **sectionId** | **UUID** | This property links workitem with section | [default to null] |
| **isAutomated** | **Boolean** |  | [optional] [default to null] |
| **globalId** | **Long** |  | [optional] [default to null] |
| **duration** | **Integer** |  | [optional] [default to null] |
| **attributes** | [**Map**](AnyType.md) |  | [optional] [default to null] |
| **createdById** | **UUID** |  | [optional] [default to null] |
| **modifiedById** | **UUID** |  | [optional] [default to null] |
| **createdDate** | **Date** |  | [optional] [default to null] |
| **modifiedDate** | **Date** |  | [optional] [default to null] |
| **state** | [**WorkItemStates**](WorkItemStates.md) |  | [default to null] |
| **priority** | [**WorkItemPriorityModel**](WorkItemPriorityModel.md) |  | [default to null] |
| **isDeleted** | **Boolean** |  | [optional] [default to null] |
| **tagNames** | **List** |  | [optional] [default to null] |
| **iterations** | [**List**](IterationModel.md) |  | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

