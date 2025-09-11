# WorkItemApiResult
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** | Unique identifier of the work item | [default to null] |
| **globalId** | **Long** | Global identifier of the work item | [default to null] |
| **versionId** | **UUID** | Version identifier of the work item | [default to null] |
| **versionNumber** | **Integer** | Version number of the work item | [default to null] |
| **projectId** | **UUID** | Unique identifier of the project | [default to null] |
| **sectionId** | **UUID** | Unique identifier of the section within a project | [default to null] |
| **name** | **String** | Name of the work item | [default to null] |
| **description** | **String** | Description of the work item | [optional] [default to null] |
| **sourceType** | [**WorkItemSourceTypeApiModel**](WorkItemSourceTypeApiModel.md) | Source type of the work item | [default to null] |
| **entityTypeName** | [**WorkItemEntityTypeApiModel**](WorkItemEntityTypeApiModel.md) | Type of entity associated with this work item | [default to null] |
| **duration** | **Integer** | Duration of the work item in milliseconds | [default to null] |
| **medianDuration** | **Long** | Median duration of the work item in milliseconds | [default to null] |
| **state** | [**WorkItemStateApiModel**](WorkItemStateApiModel.md) | State of the work item | [default to null] |
| **priority** | [**WorkItemPriorityApiModel**](WorkItemPriorityApiModel.md) | Priority level of the work item | [default to null] |
| **isAutomated** | **Boolean** |  | [default to null] |
| **attributes** | [**Map**](AnyType.md) | Set of custom attributes associated with the work item | [default to null] |
| **tags** | [**List**](TagModel.md) | Set of tags applied to the work item | [default to null] |
| **sectionPreconditionSteps** | [**List**](StepModel.md) | Set of section precondition steps that need to be executed before starting the work item steps | [default to null] |
| **sectionPostconditionSteps** | [**List**](StepModel.md) | Set of section postcondition steps that need to be executed after completing the work item steps | [default to null] |
| **preconditionSteps** | [**List**](StepModel.md) | Set of precondition steps that need to be executed before starting the main steps | [default to null] |
| **steps** | [**List**](StepModel.md) | Main steps or actions defined for the work item | [default to null] |
| **postconditionSteps** | [**List**](StepModel.md) | Set of postcondition steps that are executed after completing the main steps | [default to null] |
| **iterations** | [**List**](IterationModel.md) | Associated iterations linked to the work item | [default to null] |
| **autoTests** | [**List**](AutoTestModel.md) | Automated tests associated with the work item | [default to null] |
| **attachments** | [**List**](AttachmentModel.md) | Files attached to the work item | [default to null] |
| **links** | [**List**](LinkModel.md) | Set of links related to the work item | [default to null] |
| **createdDate** | **Date** | Creation date of the work item | [default to null] |
| **createdById** | **UUID** | Unique identifier of the work item creator | [default to null] |
| **modifiedDate** | **Date** | Modification date of the work item | [optional] [default to null] |
| **modifiedById** | **UUID** | Unique identifier of the work item modifier | [optional] [default to null] |
| **isDeleted** | **Boolean** | Indicates whether the work item is marked as deleted | [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

