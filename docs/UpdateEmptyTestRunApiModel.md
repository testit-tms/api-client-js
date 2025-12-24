# UpdateEmptyTestRunApiModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** | Test run unique identifier | [default to null] |
| **name** | **String** | Test run name | [default to null] |
| **description** | **String** | Test run description | [optional] [default to null] |
| **launchSource** | **String** | Test run launch source              Once launch source is specified it cannot be updated | [optional] [default to null] |
| **attachments** | [**List**](AssignAttachmentApiModel.md) | Collection of attachments related to the test run | [optional] [default to null] |
| **links** | [**List**](UpdateLinkApiModel.md) | Collection of links related to the test run | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

