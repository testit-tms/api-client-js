# TestitApiClient.TestResultApiResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**startedOn** | **Date** |  | [optional] 
**completedOn** | **Date** |  | [optional] 
**durationInMs** | **Number** |  | [optional] 
**traces** | **String** |  | [optional] 
**failureType** | **String** |  | [optional] 
**message** | **String** |  | [optional] 
**runByUserId** | **String** |  | [optional] 
**stoppedByUserId** | **String** |  | [optional] 
**outcome** | **String** |  | 
**autoTestId** | **String** |  | [optional] 
**testPointId** | **String** |  | [optional] 
**testRunId** | **String** |  | 
**configurationId** | **String** |  | 
**status** | [**TestStatusApiResult**](TestStatusApiResult.md) |  | 
**testPoint** | [**TestPointShortApiResult**](TestPointShortApiResult.md) |  | [optional] 
**autoTest** | [**AutoTestApiResult**](AutoTestApiResult.md) |  | [optional] 
**autoTestStepResults** | [**[AutoTestStepResultsApiResult]**](AutoTestStepResultsApiResult.md) |  | [optional] 
**setupResults** | [**[AutoTestStepResultsApiResult]**](AutoTestStepResultsApiResult.md) |  | [optional] 
**teardownResults** | [**[AutoTestStepResultsApiResult]**](AutoTestStepResultsApiResult.md) |  | [optional] 
**workItemVersionId** | **String** |  | [optional] 
**workItemVersionNumber** | **Number** |  | [optional] 
**attachments** | [**[AttachmentApiResult]**](AttachmentApiResult.md) |  | 
**links** | [**[LinkApiResult]**](LinkApiResult.md) |  | 
**failureClasses** | [**[TestResultFailureClassApiResult]**](TestResultFailureClassApiResult.md) |  | 
**stepComments** | [**[StepCommentApiModel]**](StepCommentApiModel.md) |  | [optional] 
**parameters** | **{String: String}** |  | [optional] 
**properties** | **{String: String}** |  | [optional] 
**createdDate** | **Date** |  | 
**modifiedDate** | **Date** |  | [optional] 
**createdById** | **String** |  | 
**modifiedById** | **String** |  | [optional] 
**isDeleted** | **Boolean** |  | 


