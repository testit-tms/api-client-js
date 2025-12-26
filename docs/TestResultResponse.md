# TestitApiClient.TestResultResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**createdDate** | **Date** |  | 
**modifiedDate** | **Date** |  | [optional] 
**createdById** | **String** |  | 
**modifiedById** | **String** |  | [optional] 
**stepComments** | [**[StepCommentApiModel]**](StepCommentApiModel.md) |  | [optional] 
**failureClassIds** | **[String]** |  | 
**outcome** | [**TestResultOutcome**](TestResultOutcome.md) |  | [optional] 
**status** | [**TestStatusApiResult**](TestStatusApiResult.md) |  | [optional] 
**comment** | **String** |  | [optional] 
**links** | [**[Link]**](Link.md) |  | [optional] 
**stepResults** | [**[StepResultApiModel]**](StepResultApiModel.md) |  | [optional] 
**attachments** | [**[AttachmentApiResult]**](AttachmentApiResult.md) |  | [optional] 
**autoTestId** | **String** |  | [optional] 
**configurationId** | **String** |  | 
**startedOn** | **Date** |  | [optional] 
**completedOn** | **Date** |  | [optional] 
**durationInMs** | **Number** |  | [optional] 
**traces** | **String** |  | [optional] 
**failureType** | **String** |  | [optional] 
**message** | **String** |  | [optional] 
**runByUserId** | **String** |  | [optional] 
**stoppedByUserId** | **String** |  | [optional] 
**testPointId** | **String** |  | 
**testRunId** | **String** |  | 
**testPoint** | [**TestPoint**](TestPoint.md) |  | [optional] 
**autoTest** | [**AutoTest**](AutoTest.md) |  | [optional] 
**autoTestStepResults** | [**[AutoTestStepResult]**](AutoTestStepResult.md) |  | [optional] 
**setupResults** | [**[AutoTestStepResult]**](AutoTestStepResult.md) |  | [optional] 
**teardownResults** | [**[AutoTestStepResult]**](AutoTestStepResult.md) |  | [optional] 
**workItemVersionId** | **String** |  | 
**workItemVersionNumber** | **Number** |  | [optional] 
**parameters** | **{String: String}** |  | [optional] 
**properties** | **{String: String}** |  | [optional] 


