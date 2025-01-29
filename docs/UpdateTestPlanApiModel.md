# UpdateTestPlanApiModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** | Test plan unique internal identifier | [default to null] |
| **lockedById** | **UUID** | User who locked test plan modification internal identifier | [optional] [default to null] |
| **name** | **String** | Test plan name | [default to null] |
| **startDate** | **Date** | Date and time of test plan start | [optional] [default to null] |
| **endDate** | **Date** | Date and time of test plan end | [optional] [default to null] |
| **description** | **String** | Test plan description | [optional] [default to null] |
| **build** | **String** | Build of the application on which test plan is executed | [optional] [default to null] |
| **projectId** | **UUID** | Project unique identifier | [default to null] |
| **productName** | **String** | Name of the testing product | [optional] [default to null] |
| **hasAutomaticDurationTimer** | **Boolean** | Boolean flag defines if test plan has automatic duration timer | [optional] [default to null] |
| **attributes** | [**Map**](AnyType.md) | Key value pair of test plan custom attributes | [optional] [default to null] |
| **tags** | [**List**](TagApiModel.md) | Test plan tag names collection | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

