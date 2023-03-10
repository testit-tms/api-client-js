# TestRunFillByWorkItemsPostModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **configurationIds** | **List** | Specifies the configuration GUIDs, from which test points are created. You can specify several GUIDs. | [default to null] |
| **workitemIds** | **List** | Specifies the work item GUIDs, from which test points are created. You can specify several GUIDs. | [default to null] |
| **projectId** | **UUID** | Specifies the GUID of the project, in which a test run will be created. | [default to null] |
| **testPlanId** | **UUID** | Specifies the GUID of the test plan, within which the test run will be created. | [default to null] |
| **name** | **String** | Specifies the name of the test run. | [optional] [default to null] |
| **description** | **String** | Specifies the test run description. | [optional] [default to null] |
| **launchSource** | **String** | Specifies the test run launch source. | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

