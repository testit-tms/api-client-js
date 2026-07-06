# TestitApiClient.UpdateWorkItemApiModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier of the work item | 
**sectionId** | **String** | Unique identifier of the section within a project | 
**name** | **String** | Name of the work item | 
**description** | **String** | Description of the work item | [optional] 
**duration** | **Number** | Duration of the work item in milliseconds | 
**state** | [**WorkItemStateApiModel**](WorkItemStateApiModel.md) | Current state of the work item | 
**priority** | [**WorkItemPriorityApiModel**](WorkItemPriorityApiModel.md) | Priority level assigned to the work item | 
**attributes** | **{String: Object}** | Set of custom attributes associated with the work item | [optional] 
**tags** | [**[TagModel]**](TagModel.md) | Set of tags applied to the work item | [optional] 
**preconditionSteps** | [**[UpdateStepApiModel]**](UpdateStepApiModel.md) | Set of precondition steps that must be executed before the main steps | [optional] 
**steps** | [**[UpdateStepApiModel]**](UpdateStepApiModel.md) | Set of main steps or actions defined for the work item | [optional] 
**postconditionSteps** | [**[UpdateStepApiModel]**](UpdateStepApiModel.md) | Set of postcondition steps that are executed after completing the main steps | [optional] 
**iterations** | [**[AssignIterationApiModel]**](AssignIterationApiModel.md) | Set of iterations associated with the work item | [optional] 
**autoTests** | [**[AutoTestIdModel]**](AutoTestIdModel.md) | Set of automated tests linked to the work item | [optional] 
**attachments** | [**[AssignAttachmentApiModel]**](AssignAttachmentApiModel.md) | Set of files attached to the work item | [optional] 
**links** | [**[UpdateLinkApiModel]**](UpdateLinkApiModel.md) | Set of links related to the work item | [optional] 
**parameters** | [**[WorkItemParameterKeyApiModel]**](WorkItemParameterKeyApiModel.md) | Set of parameter keys associated with the work item | [optional] 


