# WorkItemPostModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **entityTypeName** | [**WorkItemEntityTypes**](WorkItemEntityTypes.md) |  | [default to null] |
| **description** | **String** |  | [optional] [default to null] |
| **state** | [**WorkItemStates**](WorkItemStates.md) |  | [default to null] |
| **priority** | [**WorkItemPriorityModel**](WorkItemPriorityModel.md) |  | [default to null] |
| **steps** | [**List**](StepPutModel.md) |  | [default to null] |
| **preconditionSteps** | [**List**](StepPutModel.md) |  | [default to null] |
| **postconditionSteps** | [**List**](StepPutModel.md) |  | [default to null] |
| **duration** | **Integer** | Must be 0 for shared steps and greater than 0 for the other types of work items | [default to null] |
| **attributes** | [**Map**](AnyType.md) |  | [default to null] |
| **tags** | [**List**](TagShortModel.md) |  | [default to null] |
| **attachments** | [**List**](AttachmentPutModel.md) |  | [optional] [default to null] |
| **iterations** | [**List**](IterationPutModel.md) |  | [optional] [default to null] |
| **links** | [**List**](LinkPostModel.md) |  | [default to null] |
| **name** | **String** |  | [default to null] |
| **projectId** | **UUID** | This property is used to link workitem with project | [default to null] |
| **sectionId** | **UUID** |  | [default to null] |
| **autoTests** | [**List**](AutoTestIdModel.md) |  | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

