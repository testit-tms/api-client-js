# TestRunV2ApiResult
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** | Test run unique identifier | [default to null] |
| **name** | **String** | Test run name | [default to null] |
| **description** | **String** | Test run description | [optional] [default to null] |
| **launchSource** | **String** | Test run launch source              Once launch source is specified it cannot be updated. | [optional] [default to null] |
| **startedOn** | **Date** | Date and time of test run start | [optional] [default to null] |
| **completedOn** | **Date** | Date and time of test run end | [optional] [default to null] |
| **stateName** | [**TestRunState**](TestRunState.md) | Test run state | [default to null] |
| **status** | [**TestStatusApiResult**](TestStatusApiResult.md) | Test run status | [default to null] |
| **projectId** | **UUID** | Project unique identifier              This property is used to link test run with project. | [default to null] |
| **testPlanId** | **UUID** | Test plan unique identifier              This property is used to link test run with test plan. | [optional] [default to null] |
| **testResults** | [**List**](TestResultV2GetModel.md) | Enumeration of test results related to test run | [optional] [default to null] |
| **createdDate** | **Date** | Date and time of test run creation | [default to null] |
| **modifiedDate** | **Date** | Date and time of last test run  modification | [optional] [default to null] |
| **createdById** | **UUID** | Unique identifier of user who created test run | [default to null] |
| **modifiedById** | **UUID** | Unique identifier of user who applied last test run  modification | [optional] [default to null] |
| **createdByUserName** | **String** | Username of user who created test run | [optional] [default to null] |
| **attachments** | [**List**](AttachmentApiResult.md) | Collection of attachments related to the test run | [default to null] |
| **links** | [**List**](LinkApiResult.md) | Collection of links related to the test run | [default to null] |
| **customParameters** | **Map** | Customers test run parameters | [optional] [default to null] |
| **webhooks** | [**List**](NamedEntityApiModel.md) | Enabled webhooks | [default to null] |
| **runCount** | **Integer** | Run count | [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

