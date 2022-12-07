# testit_api_client.WorkItemModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**versionId** | **String** | used for versioning changes in workitem | [optional] 
**medianDuration** | **Number** | used for getting a median duration of all autotests related to this workitem | [optional] 
**isDeleted** | **Boolean** |  | [optional] 
**projectId** | **String** |  | [optional] 
**entityTypeName** | [**WorkItemEntityTypes**](WorkItemEntityTypes.md) |  | 
**isAutomated** | **Boolean** |  | [optional] 
**autoTests** | [**[AutoTestModel]**](AutoTestModel.md) |  | [optional] 
**attachments** | [**[AttachmentModel]**](AttachmentModel.md) |  | [optional] 
**sectionPreconditionSteps** | [**[StepModel]**](StepModel.md) |  | [optional] 
**sectionPostconditionSteps** | [**[StepModel]**](StepModel.md) |  | [optional] 
**versionNumber** | **Number** | used for define chronology of workitem state in each version | [optional] 
**iterations** | [**[IterationModel]**](IterationModel.md) |  | [optional] 
**createdDate** | **Date** |  | [optional] 
**modifiedDate** | **Date** |  | [optional] 
**createdById** | **String** |  | [optional] 
**modifiedById** | **String** |  | [optional] 
**globalId** | **Number** |  | [optional] 
**id** | **String** |  | [optional] 
**sectionId** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**state** | [**WorkItemStates**](WorkItemStates.md) |  | 
**priority** | [**WorkItemPriorityModel**](WorkItemPriorityModel.md) |  | 
**steps** | [**[StepModel]**](StepModel.md) |  | 
**preconditionSteps** | [**[StepModel]**](StepModel.md) |  | 
**postconditionSteps** | [**[StepModel]**](StepModel.md) |  | 
**duration** | **Number** |  | [optional] 
**attributes** | **{String: Object}** |  | 
**tags** | [**[TagShortModel]**](TagShortModel.md) |  | 
**links** | [**[LinkModel]**](LinkModel.md) |  | 
**name** | **String** |  | 


