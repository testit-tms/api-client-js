# CreateEmptyTestRunApiModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **projectId** | **UUID** | Project unique identifier              This property is to link test run with a project | [default to null] |
| **name** | **String** | Test run name | [optional] [default to null] |
| **description** | **String** | Test run description | [optional] [default to null] |
| **launchSource** | **String** | Test run launch source | [optional] [default to null] |
| **attachments** | [**List**](AssignAttachmentApiModel.md) | Collection of attachments to relate to the test run | [optional] [default to null] |
| **links** | [**List**](CreateLinkApiModel.md) | Collection of links to relate to the test run | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

