# CreateWorkItemApiModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **entityTypeName** | [**WorkItemEntityTypes**](WorkItemEntityTypes.md) |  | [default to null] |
| **description** | **String** | Workitem description | [optional] [default to null] |
| **state** | [**WorkItemStates**](WorkItemStates.md) |  | [default to null] |
| **priority** | [**WorkItemPriorityModel**](WorkItemPriorityModel.md) |  | [default to null] |
| **steps** | [**List**](CreateStepApiModel.md) | Collection of workitem steps | [default to null] |
| **preconditionSteps** | [**List**](CreateStepApiModel.md) | Collection of workitem precondition steps | [default to null] |
| **postconditionSteps** | [**List**](CreateStepApiModel.md) | Collection of workitem postcondition steps | [default to null] |
| **duration** | **Integer** | WorkItem duration in milliseconds, must be 0 for shared steps and greater than 0 for the other types of work items | [default to null] |
| **attributes** | [**Map**](AnyType.md) | Key value pair of custom workitem attributes | [default to null] |
| **tags** | [**List**](TagModel.md) | Collection of workitem tags | [default to null] |
| **attachments** | [**List**](AssignAttachmentApiModel.md) | Collection of workitem attachments | [optional] [default to null] |
| **iterations** | [**List**](AssignIterationApiModel.md) | Collection of parameter sets | [optional] [default to null] |
| **links** | [**List**](CreateLinkApiModel.md) | Collection of workitem links | [default to null] |
| **name** | **String** | Workitem name | [default to null] |
| **projectId** | **UUID** | Project unique identifier - used to link workitem with project | [default to null] |
| **sectionId** | **UUID** | Internal identifier of section where workitem is located | [default to null] |
| **autoTests** | [**List**](AutoTestIdModel.md) | Collection of autotest internal ids | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

