# AutoTestResultHistoryApiResult
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** |  | [default to null] |
| **testPlanId** | **UUID** |  | [optional] [default to null] |
| **testPlanGlobalId** | **Long** |  | [optional] [default to null] |
| **testPlanName** | **String** |  | [optional] [default to null] |
| **duration** | **Long** |  | [optional] [default to null] |
| **testRunId** | **UUID** |  | [default to null] |
| **testRunName** | **String** |  | [optional] [default to null] |
| **configurationId** | **UUID** |  | [default to null] |
| **configurationName** | **String** |  | [default to null] |
| **outcome** | [**AutotestResultOutcome**](AutotestResultOutcome.md) |  | [default to null] |
| **status** | [**TestStatusApiResult**](TestStatusApiResult.md) |  | [default to null] |
| **launchSource** | **String** |  | [optional] [default to null] |
| **rerunCount** | **Integer** |  | [default to null] |
| **rerunTestResults** | [**List**](RerunTestResultApiResult.md) |  | [default to null] |
| **createdDate** | **Date** |  | [default to null] |
| **createdById** | **UUID** |  | [default to null] |
| **createdByName** | **String** |  | [optional] [default to null] |
| **modifiedDate** | **Date** |  | [optional] [default to null] |
| **modifiedById** | **UUID** |  | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

