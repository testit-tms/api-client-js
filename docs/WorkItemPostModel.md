# testit_api_client.WorkItemPostModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityTypeName** | [**WorkItemEntityTypes**](WorkItemEntityTypes.md) |  | 
**description** | **String** |  | [optional] 
**state** | [**WorkItemStates**](WorkItemStates.md) |  | 
**priority** | [**WorkItemPriorityModel**](WorkItemPriorityModel.md) |  | 
**steps** | [**[StepPutModel]**](StepPutModel.md) |  | 
**preconditionSteps** | [**[StepPutModel]**](StepPutModel.md) |  | 
**postconditionSteps** | [**[StepPutModel]**](StepPutModel.md) |  | 
**duration** | **Number** | Must be 0 for shared steps and greater than 0 for the other types of work items | 
**attributes** | **{String: Object}** |  | 
**tags** | [**[TagShortModel]**](TagShortModel.md) |  | 
**attachments** | [**[AttachmentPutModel]**](AttachmentPutModel.md) |  | [optional] 
**iterations** | [**[IterationPutModel]**](IterationPutModel.md) |  | [optional] 
**links** | [**[LinkPostModel]**](LinkPostModel.md) |  | 
**name** | **String** |  | 
**projectId** | **String** | This property is used to link workitem with project | 
**sectionId** | **String** |  | 
**autoTests** | [**[AutoTestIdModel]**](AutoTestIdModel.md) |  | [optional] 


