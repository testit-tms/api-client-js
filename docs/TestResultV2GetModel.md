# TestResultV2GetModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **configuration** | [**Test_result_configuration**](Test_result_configuration.md) |  | [optional] [default to null] |
| **autoTest** | [**auto_test_related_to_test_result**](auto_test_related_to_test_result.md) |  | [optional] [default to null] |
| **id** | **UUID** |  | [optional] [default to null] |
| **configurationId** | **UUID** |  | [optional] [default to null] |
| **workItemVersionId** | **UUID** |  | [optional] [default to null] |
| **autoTestId** | **UUID** |  | [optional] [default to null] |
| **message** | **String** |  | [optional] [default to null] |
| **traces** | **String** |  | [optional] [default to null] |
| **startedOn** | **Date** |  | [optional] [default to null] |
| **completedOn** | **Date** |  | [optional] [default to null] |
| **runByUserId** | **UUID** |  | [optional] [default to null] |
| **stoppedByUserId** | **UUID** |  | [optional] [default to null] |
| **testPointId** | **UUID** |  | [optional] [default to null] |
| **testPoint** | [**Test_point_related_to_test_result**](Test_point_related_to_test_result.md) |  | [optional] [default to null] |
| **testRunId** | **UUID** |  | [optional] [default to null] |
| **outcome** | **String** | Property can contain one of these values: Passed, Failed, InProgress, Blocked, Skipped | [optional] [default to null] |
| **comment** | **String** |  | [optional] [default to null] |
| **links** | [**List**](LinkModel.md) |  | [optional] [default to null] |
| **attachments** | [**List**](AttachmentModel.md) |  | [optional] [default to null] |
| **parameters** | **Map** |  | [optional] [default to null] |
| **properties** | **Map** |  | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

