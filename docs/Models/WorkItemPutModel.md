# WorkItemPutModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **attachments** | [**List**](AttachmentPutModel.md) |  | [default to null] |
| **iterations** | [**List**](IterationPutModel.md) |  | [optional] [default to null] |
| **autoTests** | [**List**](AutoTestIdModel.md) |  | [optional] [default to null] |
| **id** | **UUID** |  | [optional] [default to null] |
| **sectionId** | **UUID** |  | [optional] [default to null] |
| **description** | **String** |  | [optional] [default to null] |
| **state** | [**WorkItemStates**](WorkItemStates.md) |  | [default to null] |
| **priority** | [**WorkItemPriorityModel**](WorkItemPriorityModel.md) |  | [default to null] |
| **steps** | [**List**](StepPutModel.md) |  | [default to null] |
| **preconditionSteps** | [**List**](StepPutModel.md) |  | [default to null] |
| **postconditionSteps** | [**List**](StepPutModel.md) |  | [default to null] |
| **duration** | **Integer** |  | [optional] [default to null] |
| **attributes** | [**Map**](AnyType.md) |  | [default to null] |
| **tags** | [**List**](TagShortModel.md) |  | [default to null] |
| **links** | [**List**](LinkPutModel.md) |  | [default to null] |
| **name** | **String** |  | [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

