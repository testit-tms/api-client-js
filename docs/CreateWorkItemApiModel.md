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
**state** | [**WorkItemStateApiModel**](WorkItemStateApiModel.md) | State of the work item | 
**priority** | [**WorkItemPriorityApiModel**](WorkItemPriorityApiModel.md) | Priority level of the work item | 
**attributes** | **{String: Object}** | Set of custom attributes associated with the work item | 
**tags** | [**[TagModel]**](TagModel.md) | Set of tags applied to the work item | 
**preconditionSteps** | [**[CreateStepApiModel]**](CreateStepApiModel.md) | Set of precondition steps that need to be executed before starting the main steps | 
**steps** | [**[CreateStepApiModel]**](CreateStepApiModel.md) | Main steps or actions defined for the work item | 
**postconditionSteps** | [**[CreateStepApiModel]**](CreateStepApiModel.md) | Set of postcondition steps that are executed after completing the main steps | 
**iterations** | [**[AssignIterationApiModel]**](AssignIterationApiModel.md) | Associated iterations linked to the work item | [optional] 
**autoTests** | [**[AutoTestIdModel]**](AutoTestIdModel.md) | Automated tests associated with the work item | [optional] 
**attachments** | [**[AssignAttachmentApiModel]**](AssignAttachmentApiModel.md) | Files attached to the work item | [optional] 
**links** | [**[CreateLinkApiModel]**](CreateLinkApiModel.md) | Set of links related to the work item | 


