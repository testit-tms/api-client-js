# AttachmentModelAutoTestStepResultsModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **title** | **String** | The name of the step. | [optional] [default to null] |
| **description** | **String** | Description of the step result. | [optional] [default to null] |
| **info** | **String** | Extended description of the step result. | [optional] [default to null] |
| **startedOn** | **Date** | Step start date. | [optional] [default to null] |
| **completedOn** | **Date** | Step end date. | [optional] [default to null] |
| **duration** | **Long** | Expected or actual duration of the test run execution in milliseconds. | [optional] [default to null] |
| **outcome** | [**AvailableTestResultOutcome**](AvailableTestResultOutcome.md) |  | [optional] [default to null] |
| **stepResults** | [**List**](AttachmentModelAutoTestStepResultsModel.md) | Nested step results. The maximum nesting level is 15. | [optional] [default to null] |
| **attachments** | [**List**](AttachmentModel.md) | /// &lt;summary&gt;  Specifies an attachment GUID. Multiple values can be sent.  &lt;/summary&gt; | [optional] [default to null] |
| **parameters** | **Map** | \&quot;&lt;b&gt;parameter&lt;/b&gt;\&quot;: \&quot;&lt;b&gt;value&lt;/b&gt;\&quot; pair with arbitrary custom parameters. Multiple parameters can be sent. | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

