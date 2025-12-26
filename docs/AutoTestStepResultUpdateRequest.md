# TestitApiClient.AutoTestStepResultUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | The name of the step. | [optional] 
**description** | **String** | Description of the step result. | [optional] 
**info** | **String** | Extended description of the step result. | [optional] 
**startedOn** | **Date** | Step start date. | [optional] 
**completedOn** | **Date** | Step end date. | [optional] 
**duration** | **Number** | Expected or actual duration of the test run execution in milliseconds. | [optional] 
**outcome** | [**AvailableTestResultOutcome**](AvailableTestResultOutcome.md) | Specifies the result of the autotest execution. | [optional] 
**stepResults** | [**[AutoTestStepResultUpdateRequest]**](AutoTestStepResultUpdateRequest.md) | Nested step results. The maximum nesting level is 15. | [optional] 
**attachments** | [**[AttachmentUpdateRequest]**](AttachmentUpdateRequest.md) | /// &lt;summary&gt; Specifies an attachment GUID. Multiple values can be sent. &lt;/summary&gt; | [optional] 
**parameters** | **{String: String}** | \&quot;&lt;b&gt;parameter&lt;/b&gt;\&quot;: \&quot;&lt;b&gt;value&lt;/b&gt;\&quot; pair with arbitrary custom parameters. Multiple parameters can be sent. | [optional] 


