# AutoTestModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **globalId** | **Long** | Global ID of the autotest | [optional] [default to null] |
| **isDeleted** | **Boolean** | Indicates if the autotest is deleted | [optional] [default to null] |
| **mustBeApproved** | **Boolean** | Indicates if the autotest has unapproved changes from linked work items | [optional] [default to null] |
| **id** | **UUID** | Unique ID of the autotest | [optional] [default to null] |
| **createdDate** | **Date** | Creation date of the autotest | [optional] [default to null] |
| **modifiedDate** | **Date** | Last modification date of the project | [optional] [default to null] |
| **createdById** | **UUID** | Unique ID of the project creator | [optional] [default to null] |
| **modifiedById** | **UUID** | Unique ID of the project last editor | [optional] [default to null] |
| **lastTestRunId** | **UUID** | Unique ID of the autotest last test run | [optional] [default to null] |
| **lastTestRunName** | **String** | Name of the autotest last test run | [optional] [default to null] |
| **lastTestResultId** | **UUID** | Unique ID of the autotest last test result | [optional] [default to null] |
| **lastTestResultOutcome** | **String** | Outcome of the autotest last test result | [optional] [default to null] |
| **stabilityPercentage** | **Integer** | Stability percentage of the autotest | [optional] [default to null] |
| **externalId** | **String** | External ID of the autotest | [default to null] |
| **links** | [**List**](LinkPutModel.md) | Collection of the autotest links | [optional] [default to null] |
| **projectId** | **UUID** | Unique ID of the autotest project | [default to null] |
| **name** | **String** | Name of the autotest | [default to null] |
| **namespace** | **String** | Name of the autotest namespace | [optional] [default to null] |
| **classname** | **String** | Name of the autotest class | [optional] [default to null] |
| **steps** | [**List**](AutoTestStepModel.md) | Collection of the autotest steps | [optional] [default to null] |
| **setup** | [**List**](AutoTestStepModel.md) | Collection of the autotest setup steps | [optional] [default to null] |
| **teardown** | [**List**](AutoTestStepModel.md) | Collection of the autotest teardown steps | [optional] [default to null] |
| **title** | **String** | Name of the autotest in autotest&#39;s card | [optional] [default to null] |
| **description** | **String** | Description of the autotest in autotest&#39;s card | [optional] [default to null] |
| **labels** | [**List**](LabelShortModel.md) | Collection of the autotest labels | [optional] [default to null] |
| **isFlaky** | **Boolean** | Indicates if the autotest is marked as flaky | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

