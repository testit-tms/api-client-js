# TestResultShortGetModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** | Unique ID of test result | [optional] [default to null] |
| **name** | **String** | Name of autotest represented by the test result | [optional] [default to null] |
| **autotestGlobalId** | **Long** | Global ID of autotest represented by test result | [optional] [default to null] |
| **testRunId** | **UUID** | Unique ID of test run where test result is located | [optional] [default to null] |
| **configurationId** | **UUID** | Unique ID of configuration which test result uses | [optional] [default to null] |
| **configurationName** | **String** | Name of configuration which test result uses | [optional] [default to null] |
| **outcome** | [**TestResultOutcome**](TestResultOutcome.md) |  | [default to null] |
| **resultReasons** | [**List**](AutotestResultReasonSubGetModel.md) | Collection of result reasons which test result have | [optional] [default to null] |
| **comment** | **String** | Comment to test result | [optional] [default to null] |
| **date** | **Date** | Date when test result has been set | [optional] [default to null] |
| **duration** | **Long** | Time which it took to run the test | [optional] [default to null] |
| **links** | [**List**](LinkSubGetModel.md) | Collection of links attached to test result | [optional] [default to null] |
| **attachments** | [**List**](AttachmentSubGetModel.md) | Collection of files attached to test result | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

