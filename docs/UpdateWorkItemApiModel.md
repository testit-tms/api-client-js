# UpdateWorkItemApiModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** | Workitem internal identifier | [default to null] |
| **sectionId** | **UUID** | Internal identifier of section where workitem is located | [default to null] |
| **description** | **String** | Workitem description | [optional] [default to null] |
| **state** | [**WorkItemStates**](WorkItemStates.md) |  | [default to null] |
| **priority** | [**WorkItemPriorityModel**](WorkItemPriorityModel.md) |  | [default to null] |
| **sourceType** | [**WorkItemSourceTypeModel**](WorkItemSourceTypeModel.md) |  | [optional] [default to null] |
| **steps** | [**List**](UpdateStepApiModel.md) | Collection of workitem steps | [default to null] |
| **preconditionSteps** | [**List**](UpdateStepApiModel.md) | Collection of workitem precondtion steps | [default to null] |
| **postconditionSteps** | [**List**](UpdateStepApiModel.md) | Collection of workitem postcondition steps | [default to null] |
| **duration** | **Integer** | Workitem duration in milliseconds | [default to null] |
| **attributes** | [**Map**](AnyType.md) | Key value pair of custom workitem attributes | [default to null] |
| **tags** | [**List**](TagModel.md) | Collection of workitem tags | [default to null] |
| **links** | [**List**](UpdateLinkApiModel.md) | Collection of workitem links | [default to null] |
| **name** | **String** | Workitem name | [default to null] |
| **attachments** | [**List**](AssignAttachmentApiModel.md) |  | [default to null] |
| **iterations** | [**List**](AssignIterationApiModel.md) | Collection of parameter id sets | [optional] [default to null] |
| **autoTests** | [**List**](AutoTestIdModel.md) | Collection of autotest internal ids | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

