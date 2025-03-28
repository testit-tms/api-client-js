# CreateTestRunAndFillByConfigurationsApiModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **projectId** | **UUID** | Specifies the GUID of the project, in which a test run will be created. | [default to null] |
| **testPlanId** | **UUID** | Specifies the GUID of the test plan, within which the test run will be created. | [default to null] |
| **name** | **String** | Specifies the name of the test run. | [optional] [default to null] |
| **description** | **String** | Specifies the test run description. | [optional] [default to null] |
| **launchSource** | **String** | Specifies the test run launch source. | [optional] [default to null] |
| **attachments** | [**List**](AssignAttachmentApiModel.md) | Collection of attachment ids to relate to the test run | [optional] [default to null] |
| **links** | [**List**](CreateLinkApiModel.md) | Collection of links to relate to the test run | [optional] [default to null] |
| **testPointSelectors** | [**List**](TestPointSelector.md) | Specifies an array of work items and configuration to create a test run for. | [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

