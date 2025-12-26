# TestitApiClient.TestResultUpdateV2Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failureClassIds** | **[String]** |  | [optional] 
**outcome** | [**TestResultOutcome**](TestResultOutcome.md) |  | [optional] 
**statusCode** | **String** |  | [optional] 
**comment** | **String** |  | [optional] 
**links** | [**[Link]**](Link.md) |  | [optional] 
**stepResults** | [**[StepResultApiModel]**](StepResultApiModel.md) |  | [optional] 
**attachments** | [**[AttachmentUpdateRequest]**](AttachmentUpdateRequest.md) |  | [optional] 
**durationInMs** | **Number** |  | [optional] 
**duration** | **Number** |  | [optional] 
**stepComments** | [**[TestResultStepCommentUpdateRequest]**](TestResultStepCommentUpdateRequest.md) |  | [optional] 
**setupResults** | [**[AutoTestStepResultUpdateRequest]**](AutoTestStepResultUpdateRequest.md) |  | [optional] 
**teardownResults** | [**[AutoTestStepResultUpdateRequest]**](AutoTestStepResultUpdateRequest.md) |  | [optional] 
**message** | **String** |  | [optional] 
**trace** | **String** |  | [optional] 


