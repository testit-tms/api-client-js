# CreateWorkItemApiModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **projectId** | **UUID** | Unique identifier of the project | [default to null] |
| **sectionId** | **UUID** | Unique identifier of the section within a project | [optional] [default to null] |
| **name** | **String** | Name of the work item | [default to null] |
| **description** | **String** | Description of the work item | [optional] [default to null] |
| **entityTypeName** | [**WorkItemEntityTypeApiModel**](WorkItemEntityTypeApiModel.md) | Type of entity associated with this work item | [default to null] |
| **duration** | **Integer** | Duration of the work item in milliseconds | [default to null] |
| **state** | [**WorkItemStateApiModel**](WorkItemStateApiModel.md) | State of the work item | [default to null] |
| **priority** | [**WorkItemPriorityApiModel**](WorkItemPriorityApiModel.md) | Priority level of the work item | [default to null] |
| **attributes** | [**Map**](AnyType.md) | Set of custom attributes associated with the work item | [default to null] |
| **tags** | [**List**](TagModel.md) | Set of tags applied to the work item | [default to null] |
| **preconditionSteps** | [**List**](CreateStepApiModel.md) | Set of precondition steps that need to be executed before starting the main steps | [default to null] |
| **steps** | [**List**](CreateStepApiModel.md) | Main steps or actions defined for the work item | [default to null] |
| **postconditionSteps** | [**List**](CreateStepApiModel.md) | Set of postcondition steps that are executed after completing the main steps | [default to null] |
| **iterations** | [**List**](AssignIterationApiModel.md) | Associated iterations linked to the work item | [optional] [default to null] |
| **autoTests** | [**List**](AutoTestIdModel.md) | Automated tests associated with the work item | [optional] [default to null] |
| **attachments** | [**List**](AssignAttachmentApiModel.md) | Files attached to the work item | [optional] [default to null] |
| **links** | [**List**](CreateLinkApiModel.md) | Set of links related to the work item | [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

