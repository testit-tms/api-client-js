# testit_api_client.WorkItemShortModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**versionId** | **String** | used for versioning changes in workitem | [optional] 
**name** | **String** |  | 
**entityTypeName** | **String** | Property can have one of these values: CheckLists, SharedSteps, TestCases | 
**projectId** | **String** | This property is used to link autotest with project | 
**sectionId** | **String** | This property links workitem with section | 
**isAutomated** | **Boolean** |  | [optional] 
**globalId** | **Number** |  | [optional] 
**duration** | **Number** |  | [optional] 
**attributes** | **{String: Object}** |  | [optional] 
**createdById** | **String** |  | [optional] 
**modifiedById** | **String** |  | [optional] 
**createdDate** | **Date** |  | [optional] 
**modifiedDate** | **Date** |  | [optional] 
**state** | **String** | Property can have one of these values: NeedsWork, NotReady, Ready | 
**priority** | [**WorkItemPriorityModel**](WorkItemPriorityModel.md) |  | 
**isDeleted** | **Boolean** |  | [optional] 
**tagNames** | **[String]** |  | [optional] 
**iterations** | [**[IterationModel]**](IterationModel.md) |  | [optional] 


