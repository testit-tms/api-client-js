# TestRunV2GetModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **startedOn** | **Date** |  | [optional] [default to null] |
| **completedOn** | **Date** |  | [optional] [default to null] |
| **stateName** | [**TestRunState**](TestRunState.md) |  | [default to null] |
| **projectId** | **UUID** | This property is used to link test run with project | [default to null] |
| **testPlanId** | **UUID** | This property is used to link test run with test plan | [optional] [default to null] |
| **testResults** | [**List**](TestResultV2GetModel.md) |  | [optional] [default to null] |
| **createdDate** | **Date** |  | [default to null] |
| **modifiedDate** | **Date** |  | [optional] [default to null] |
| **createdById** | **UUID** |  | [default to null] |
| **modifiedById** | **UUID** |  | [optional] [default to null] |
| **createdByUserName** | **String** |  | [optional] [default to null] |
| **attachments** | [**List**](AttachmentModel.md) |  | [default to null] |
| **links** | [**List**](LinkModel.md) |  | [default to null] |
| **customParameters** | **Map** |  | [optional] [default to null] |
| **webhooks** | [**List**](NamedEntityModel.md) |  | [default to null] |
| **id** | **UUID** |  | [default to null] |
| **name** | **String** |  | [default to null] |
| **description** | **String** |  | [optional] [default to null] |
| **launchSource** | **String** | Once launch source is specified it cannot be updated | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

