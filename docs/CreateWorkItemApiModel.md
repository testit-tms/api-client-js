# TestitApiClient.CreateWorkItemApiModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectId** | **String** | Unique identifier of the project | 
**sectionId** | **String** | Unique identifier of the section within a project | [optional] 
**name** | **String** | Name of the work item | 
**description** | **String** | Description of the work item | [optional] 
**entityTypeName** | [**WorkItemEntityTypeApiModel**](WorkItemEntityTypeApiModel.md) | Type of entity associated with this work item | 
**duration** | **Number** | Duration of the work item in milliseconds | 
**state** | [**WorkItemStateApiModel**](WorkItemStateApiModel.md) | Current state of the work item | 
**priority** | [**WorkItemPriorityApiModel**](WorkItemPriorityApiModel.md) | Priority level assigned to the work item | 
**attributes** | **{String: Object}** | Set of custom attributes associated with the work item | [optional] 
**tags** | [**[TagModel]**](TagModel.md) | Set of tags applied to the work item | [optional] 
**preconditionSteps** | [**[CreateStepApiModel]**](CreateStepApiModel.md) | Set of precondition steps that must be executed before the main steps | [optional] 
**steps** | [**[CreateStepApiModel]**](CreateStepApiModel.md) | Set of main steps or actions defined for the work item | [optional] 
**postconditionSteps** | [**[CreateStepApiModel]**](CreateStepApiModel.md) | Set of postcondition steps that are executed after completing the main steps | [optional] 
**iterations** | [**[AssignIterationApiModel]**](AssignIterationApiModel.md) | Set of iterations associated with the work item | [optional] 
**autoTests** | [**[AutoTestIdModel]**](AutoTestIdModel.md) | Set of automated tests linked to the work item | [optional] 
**attachments** | [**[AssignAttachmentApiModel]**](AssignAttachmentApiModel.md) | Set of files attached to the work item | [optional] 
**links** | [**[CreateLinkApiModel]**](CreateLinkApiModel.md) | Set of links related to the work item | [optional] 
**parameters** | [**[WorkItemParameterKeyApiModel]**](WorkItemParameterKeyApiModel.md) | Set of parameter keys associated with the work item | [optional] 


