# AutoTestPostModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **workItemIdsForLinkWithAutoTest** | **Set** | Specifies the IDs of work items to link your autotest to. You can specify several IDs. | [optional] [default to null] |
| **shouldCreateWorkItem** | **Boolean** | Creates a test case linked to the autotest. | [optional] [default to null] |
| **externalId** | **String** | External ID of the autotest | [default to null] |
| **links** | [**List**](LinkPostModel.md) | Collection of the autotest links | [optional] [default to null] |
| **projectId** | **UUID** | Unique ID of the autotest project | [default to null] |
| **name** | **String** | Name of the autotest | [default to null] |
| **namespace** | **String** | Name of the autotest namespace | [optional] [default to null] |
| **classname** | **String** | Name of the autotest class | [optional] [default to null] |
| **steps** | [**List**](AutoTestStepModel.md) | Collection of the autotest steps | [optional] [default to null] |
| **setup** | [**List**](AutoTestStepModel.md) | Collection of the autotest setup steps | [optional] [default to null] |
| **teardown** | [**List**](AutoTestStepModel.md) | Collection of the autotest teardown steps | [optional] [default to null] |
| **title** | **String** | Name of the autotest in autotest&#39;s card | [optional] [default to null] |
| **description** | **String** | Description of the autotest in autotest&#39;s card | [optional] [default to null] |
| **labels** | [**List**](LabelPostModel.md) | Collection of the autotest labels | [optional] [default to null] |
| **isFlaky** | **Boolean** | Indicates if the autotest is marked as flaky | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

