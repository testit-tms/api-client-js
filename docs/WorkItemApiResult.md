# TestitApiClient.WorkItemApiResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier of the work item | 
**globalId** | **Number** | Global identifier of the work item | 
**versionId** | **String** | Version identifier of the work item | 
**versionNumber** | **Number** | Version number of the work item | 
**projectId** | **String** | Unique identifier of the project | 
**sectionId** | **String** | Unique identifier of the section within a project | 
**name** | **String** | Name of the work item | 
**description** | **String** | Description of the work item | [optional] 
**sourceType** | [**WorkItemSourceTypeApiModel**](WorkItemSourceTypeApiModel.md) | Source type of the work item | 
**entityTypeName** | [**WorkItemEntityTypeApiModel**](WorkItemEntityTypeApiModel.md) | Type of entity associated with this work item | 
**duration** | **Number** | Duration of the work item in milliseconds | 
**medianDuration** | **Number** | Median duration of the work item in milliseconds | 
**state** | [**WorkItemStateApiModel**](WorkItemStateApiModel.md) | State of the work item | 
**priority** | [**WorkItemPriorityApiModel**](WorkItemPriorityApiModel.md) | Priority level of the work item | 
**isAutomated** | **Boolean** |  | 
**attributes** | **{String: Object}** | Set of custom attributes associated with the work item | 
**tags** | [**[TagModel]**](TagModel.md) | Set of tags applied to the work item | 
**sectionPreconditionSteps** | [**[StepModel]**](StepModel.md) | Set of section precondition steps that need to be executed before starting the work item steps | 
**sectionPostconditionSteps** | [**[StepModel]**](StepModel.md) | Set of section postcondition steps that need to be executed after completing the work item steps | 
**preconditionSteps** | [**[StepModel]**](StepModel.md) | Set of precondition steps that need to be executed before starting the main steps | 
**steps** | [**[StepModel]**](StepModel.md) | Main steps or actions defined for the work item | 
**postconditionSteps** | [**[StepModel]**](StepModel.md) | Set of postcondition steps that are executed after completing the main steps | 
**iterations** | [**[IterationModel]**](IterationModel.md) | Associated iterations linked to the work item | 
**autoTests** | [**[AutoTestModel]**](AutoTestModel.md) | Automated tests associated with the work item | 
**attachments** | [**[AttachmentModel]**](AttachmentModel.md) | Files attached to the work item | 
**links** | [**[LinkModel]**](LinkModel.md) | Set of links related to the work item | 
**externalIssues** | [**[ExternalIssueApiResult]**](ExternalIssueApiResult.md) | Set of external issues related to the work item | 
**createdDate** | **Date** | Creation date of the work item | 
**createdById** | **String** | Unique identifier of the work item creator | 
**modifiedDate** | **Date** | Modification date of the work item | [optional] 
**modifiedById** | **String** | Unique identifier of the work item modifier | [optional] 
**isDeleted** | **Boolean** | Indicates whether the work item is marked as deleted | 


