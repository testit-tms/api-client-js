# TestitApiClient.TestResultV2ShortModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**configurationId** | **String** |  | 
**workItemVersionId** | **String** |  | 
**autoTestId** | **String** |  | [optional] 
**message** | **String** |  | [optional] 
**traces** | **String** |  | [optional] 
**startedOn** | **Date** |  | [optional] 
**completedOn** | **Date** |  | [optional] 
**runByUserId** | **String** |  | [optional] 
**stoppedByUserId** | **String** |  | [optional] 
**testPointId** | **String** |  | [optional] 
**testPoint** | [**TestPointShortModel**](TestPointShortModel.md) |  | [optional] 
**testRunId** | **String** |  | 
**outcome** | **String** | Property can contain one of these values: Passed, Failed, InProgress, Blocked, Skipped | 
**comment** | **String** |  | [optional] 
**links** | [**[LinkModel]**](LinkModel.md) |  | [optional] 
**attachments** | [**[AttachmentModel]**](AttachmentModel.md) |  | [optional] 
**parameters** | **{String: String}** |  | [optional] 
**properties** | **{String: String}** |  | [optional] 


