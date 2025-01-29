# AutoTestApiResult
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** |  | [default to null] |
| **projectId** | **UUID** |  | [default to null] |
| **externalId** | **String** |  | [optional] [default to null] |
| **name** | **String** |  | [default to null] |
| **namespace** | **String** |  | [optional] [default to null] |
| **classname** | **String** |  | [optional] [default to null] |
| **steps** | [**List**](AutoTestStepApiResult.md) |  | [optional] [default to null] |
| **setup** | [**List**](AutoTestStepApiResult.md) |  | [optional] [default to null] |
| **teardown** | [**List**](AutoTestStepApiResult.md) |  | [optional] [default to null] |
| **title** | **String** |  | [optional] [default to null] |
| **description** | **String** |  | [optional] [default to null] |
| **isFlaky** | **Boolean** |  | [default to null] |
| **externalKey** | **String** |  | [optional] [default to null] |
| **globalId** | **Long** |  | [default to null] |
| **isDeleted** | **Boolean** |  | [default to null] |
| **mustBeApproved** | **Boolean** |  | [default to null] |
| **createdDate** | **Date** |  | [default to null] |
| **modifiedDate** | **Date** |  | [optional] [default to null] |
| **createdById** | **UUID** |  | [default to null] |
| **modifiedById** | **UUID** |  | [optional] [default to null] |
| **lastTestRunId** | **UUID** |  | [optional] [default to null] |
| **lastTestRunName** | **String** |  | [optional] [default to null] |
| **lastTestResultId** | **UUID** |  | [optional] [default to null] |
| **lastTestResultConfiguration** | [**ConfigurationShortApiResult**](ConfigurationShortApiResult.md) |  | [optional] [default to null] |
| **lastTestResultOutcome** | **String** |  | [optional] [default to null] |
| **lastTestResultStatus** | [**TestStatusApiResult**](TestStatusApiResult.md) |  | [optional] [default to null] |
| **stabilityPercentage** | **Long** |  | [optional] [default to null] |
| **links** | [**List**](LinkApiResult.md) |  | [optional] [default to null] |
| **labels** | [**List**](LabelApiResult.md) |  | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

