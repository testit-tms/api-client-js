# TestitApiClient.WorkItemModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**versionId** | **String** | used for versioning changes in workitem | 
**medianDuration** | **Number** | used for getting a median duration of all autotests related to this workitem | 
**isDeleted** | **Boolean** |  | 
**projectId** | **String** |  | 
**entityTypeName** | [**WorkItemEntityTypes**](WorkItemEntityTypes.md) |  | 
**isAutomated** | **Boolean** |  | 
**autoTests** | [**[AutoTestModel]**](AutoTestModel.md) |  | [optional] 
**attachments** | [**[AttachmentModel]**](AttachmentModel.md) |  | [optional] 
**sectionPreconditionSteps** | [**[StepModel]**](StepModel.md) |  | [optional] 
**sectionPostconditionSteps** | [**[StepModel]**](StepModel.md) |  | [optional] 
**versionNumber** | **Number** | used for define chronology of workitem state in each version | 
**iterations** | [**[IterationModel]**](IterationModel.md) |  | [optional] 
**createdDate** | **Date** |  | 
**modifiedDate** | **Date** |  | [optional] 
**createdById** | **String** |  | 
**modifiedById** | **String** |  | [optional] 
**globalId** | **Number** |  | 
**externalIssues** | [**[ExternalIssueModel]**](ExternalIssueModel.md) |  | 
**id** | **String** |  | 
**sectionId** | **String** |  | 
**description** | **String** |  | [optional] 
**state** | [**WorkItemStates**](WorkItemStates.md) |  | 
**priority** | [**WorkItemPriorityModel**](WorkItemPriorityModel.md) |  | 
**sourceType** | [**WorkItemSourceTypeModel**](WorkItemSourceTypeModel.md) |  | 
**steps** | [**[StepModel]**](StepModel.md) |  | 
**preconditionSteps** | [**[StepModel]**](StepModel.md) |  | 
**postconditionSteps** | [**[StepModel]**](StepModel.md) |  | 
**duration** | **Number** |  | 
**attributes** | **{String: Object}** |  | 
**tags** | [**[TagModel]**](TagModel.md) |  | 
**links** | [**[LinkModel]**](LinkModel.md) |  | 
**name** | **String** |  | 


