# WorkItemModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **versionId** | **UUID** | used for versioning changes in workitem | [default to null] |
| **medianDuration** | **Long** | used for getting a median duration of all autotests related to this workitem | [default to null] |
| **isDeleted** | **Boolean** |  | [default to null] |
| **projectId** | **UUID** |  | [default to null] |
| **entityTypeName** | [**WorkItemEntityTypes**](WorkItemEntityTypes.md) |  | [default to null] |
| **isAutomated** | **Boolean** |  | [default to null] |
| **autoTests** | [**List**](AutoTestModel.md) |  | [optional] [default to null] |
| **attachments** | [**List**](AttachmentModel.md) |  | [optional] [default to null] |
| **sectionPreconditionSteps** | [**List**](StepModel.md) |  | [optional] [default to null] |
| **sectionPostconditionSteps** | [**List**](StepModel.md) |  | [optional] [default to null] |
| **versionNumber** | **Integer** | used for define chronology of workitem state in each version | [default to null] |
| **iterations** | [**List**](IterationModel.md) |  | [optional] [default to null] |
| **createdDate** | **Date** |  | [default to null] |
| **modifiedDate** | **Date** |  | [optional] [default to null] |
| **createdById** | **UUID** |  | [default to null] |
| **modifiedById** | **UUID** |  | [optional] [default to null] |
| **globalId** | **Long** |  | [default to null] |
| **id** | **UUID** |  | [default to null] |
| **sectionId** | **UUID** |  | [default to null] |
| **description** | **String** |  | [optional] [default to null] |
| **state** | [**WorkItemStates**](WorkItemStates.md) |  | [default to null] |
| **priority** | [**WorkItemPriorityModel**](WorkItemPriorityModel.md) |  | [default to null] |
| **sourceType** | [**WorkItemSourceTypeModel**](WorkItemSourceTypeModel.md) |  | [default to null] |
| **steps** | [**List**](StepModel.md) |  | [default to null] |
| **preconditionSteps** | [**List**](StepModel.md) |  | [default to null] |
| **postconditionSteps** | [**List**](StepModel.md) |  | [default to null] |
| **duration** | **Integer** |  | [default to null] |
| **attributes** | [**Map**](AnyType.md) |  | [default to null] |
| **tags** | [**List**](TagModel.md) |  | [default to null] |
| **links** | [**List**](LinkModel.md) |  | [default to null] |
| **name** | **String** |  | [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

