# TestitApiClient.UpdateWorkItemApiModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Workitem internal identifier | 
**sectionId** | **String** | Internal identifier of section where workitem is located | 
**description** | **String** | Workitem description | [optional] 
**state** | [**WorkItemStates**](WorkItemStates.md) |  | 
**priority** | [**WorkItemPriorityModel**](WorkItemPriorityModel.md) |  | 
**sourceType** | [**WorkItemSourceTypeModel**](WorkItemSourceTypeModel.md) |  | [optional] 
**steps** | [**[UpdateStepApiModel]**](UpdateStepApiModel.md) | Collection of workitem steps | 
**preconditionSteps** | [**[UpdateStepApiModel]**](UpdateStepApiModel.md) | Collection of workitem precondtion steps | 
**postconditionSteps** | [**[UpdateStepApiModel]**](UpdateStepApiModel.md) | Collection of workitem postcondition steps | 
**duration** | **Number** | Workitem duration in milliseconds | 
**attributes** | **{String: Object}** | Key value pair of custom workitem attributes | 
**tags** | [**[TagModel]**](TagModel.md) | Collection of workitem tags | 
**links** | [**[UpdateLinkApiModel]**](UpdateLinkApiModel.md) | Collection of workitem links | 
**name** | **String** | Workitem name | 
**attachments** | [**[AssignAttachmentApiModel]**](AssignAttachmentApiModel.md) |  | 
**iterations** | [**[AssignIterationApiModel]**](AssignIterationApiModel.md) | Collection of parameter id sets | [optional] 
**autoTests** | [**[AutoTestIdModel]**](AutoTestIdModel.md) | Collection of autotest internal ids | [optional] 


