# testit_api_client.TestResultModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoTestId** | **String** |  | [optional] 
**configurationId** | **String** |  | [optional] 
**startedOn** | **Date** |  | [optional] 
**completedOn** | **Date** |  | [optional] 
**durationInMs** | **Number** |  | [optional] 
**traces** | **String** |  | [optional] 
**failureType** | **String** |  | [optional] 
**message** | **String** |  | [optional] 
**runByUserId** | **String** |  | [optional] 
**stoppedByUserId** | **String** |  | [optional] 
**testPointId** | **String** |  | [optional] 
**testRunId** | **String** |  | [optional] 
**testPoint** | [**TestPointPutModel**](TestPointPutModel.md) |  | [optional] 
**autoTest** | [**AutoTestModel**](AutoTestModel.md) |  | [optional] 
**autoTestStepResults** | [**[AttachmentModelAutoTestStepResultsModel]**](AttachmentModelAutoTestStepResultsModel.md) |  | [optional] 
**setupResults** | [**[AttachmentModelAutoTestStepResultsModel]**](AttachmentModelAutoTestStepResultsModel.md) |  | [optional] 
**teardownResults** | [**[AttachmentModelAutoTestStepResultsModel]**](AttachmentModelAutoTestStepResultsModel.md) |  | [optional] 
**workItemVersionId** | **String** |  | [optional] 
**workItemVersionNumber** | **Number** |  | [optional] 
**parameters** | **{String: String}** |  | [optional] 
**properties** | **{String: String}** |  | [optional] 
**id** | **String** |  | [optional] 
**createdDate** | **Date** |  | [optional] 
**modifiedDate** | **Date** |  | [optional] 
**createdById** | **String** |  | [optional] 
**modifiedById** | **String** |  | [optional] 
**stepComments** | [**[StepCommentModel]**](StepCommentModel.md) |  | [optional] 
**failureClassIds** | **[String]** |  | [optional] 
**outcome** | **String** |  | [optional] 
**comment** | **String** |  | [optional] 
**links** | [**[LinkModel]**](LinkModel.md) |  | [optional] 
**stepResults** | [**[StepResultModel]**](StepResultModel.md) |  | [optional] 
**attachments** | [**[AttachmentModel]**](AttachmentModel.md) |  | [optional] 


