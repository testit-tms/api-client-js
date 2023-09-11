# TestResultShortGetModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** | Unique ID of the test result | [default to null] |
| **name** | **String** | Name of autotest represented by the test result | [optional] [default to null] |
| **autotestGlobalId** | **Long** | Global ID of autotest represented by the test result | [default to null] |
| **testRunId** | **UUID** | Unique ID of test run where the test result is located | [default to null] |
| **configurationId** | **UUID** | Unique ID of configuration which the test result uses | [default to null] |
| **configurationName** | **String** | Name of configuration which the test result uses | [optional] [default to null] |
| **outcome** | **String** | Outcome of the test result | [optional] [default to null] |
| **resultReasons** | [**List**](AutotestResultReasonSubGetModel.md) | Collection of result reasons which the test result have | [optional] [default to null] |
| **comment** | **String** | Comment to the test result | [optional] [default to null] |
| **date** | **Date** | Date when the test result has been set | [default to null] |
| **duration** | **Long** | Time which it took to run the test | [optional] [default to null] |
| **links** | [**List**](LinkSubGetModel.md) | Collection of links attached to the test result | [optional] [default to null] |
| **attachments** | [**List**](AttachmentModel.md) | Collection of files attached to the test result | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

