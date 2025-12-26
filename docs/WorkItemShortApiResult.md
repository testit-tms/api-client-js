# TestitApiClient.WorkItemShortApiResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Work Item internal unique identifier | 
**versionId** | **String** | Work Item version identifier | 
**versionNumber** | **Number** | Work Item version number | 
**name** | **String** | Work Item name | 
**entityTypeName** | **String** | Work Item type. Possible values: CheckLists, SharedSteps, TestCases | 
**projectId** | **String** | Project unique identifier | 
**sectionId** | **String** | Identifier of Section where Work Item is located | 
**sectionName** | **String** | Section name of Work Item | 
**isAutomated** | **Boolean** | Boolean flag determining whether Work Item is automated | 
**globalId** | **Number** | Work Item global identifier | 
**duration** | **Number** | Work Item duration | 
**medianDuration** | **Number** | Work Item median duration | [optional] 
**attributes** | **{String: Object}** | Work Item attributes | [optional] 
**createdById** | **String** | Unique identifier of user who created Work Item | 
**modifiedById** | **String** | Unique identifier of user who applied the latest modification of Work Item | [optional] 
**createdDate** | **Date** | Date and time of Work Item creation | [optional] 
**modifiedDate** | **Date** | Date and time of the latest modification of Work Item | [optional] 
**state** | [**WorkItemStates**](WorkItemStates.md) | The current state of Work Item | 
**priority** | [**WorkItemPriorityModel**](WorkItemPriorityModel.md) | Work Item priority level | 
**sourceType** | [**WorkItemSourceTypeModel**](WorkItemSourceTypeModel.md) | Work Item priority level | 
**isDeleted** | **Boolean** | Flag determining whether Work Item is deleted | 
**tagNames** | **[String]** | Array of tag names of Work Item | [optional] 
**iterations** | [**[IterationApiResult]**](IterationApiResult.md) | Set of iterations related to Work Item | 
**links** | [**[LinkShortApiResult]**](LinkShortApiResult.md) | Set of links related to Work Item | 


