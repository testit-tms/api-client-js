# TestResultShortResponse
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** | Unique ID of the test result | [default to null] |
| **name** | **String** | Name of autotest represented by the test result | [default to null] |
| **autotestGlobalId** | **Long** | Global ID of autotest represented by the test result | [default to null] |
| **autotestExternalId** | **String** | External ID of autotest represented by the test result | [optional] [default to null] |
| **testRunId** | **UUID** | Unique ID of test run where the test result is located | [default to null] |
| **configurationId** | **UUID** | Unique ID of configuration which the test result uses | [default to null] |
| **configurationName** | **String** | Name of configuration which the test result uses | [default to null] |
| **outcome** | **String** | Outcome of the test result | [optional] [default to null] |
| **status** | [**TestStatusApiResult**](TestStatusApiResult.md) |  | [default to null] |
| **resultReasons** | [**List**](AutoTestResultReasonShort.md) | Collection of result reasons which the test result have | [default to null] |
| **comment** | **String** | Comment to the test result | [optional] [default to null] |
| **date** | **Date** | Date when the test result was completed or started or created | [default to null] |
| **createdDate** | **Date** | Date when the test result has been created | [default to null] |
| **modifiedDate** | **Date** | Date when the test result has been modified | [optional] [default to null] |
| **startedOn** | **Date** | Date when the test result has been started | [optional] [default to null] |
| **completedOn** | **Date** | Date when the test result has been completed | [optional] [default to null] |
| **duration** | **Long** | Time which it took to run the test | [optional] [default to null] |
| **links** | [**List**](LinkShort.md) | Collection of links attached to the test result | [default to null] |
| **attachments** | [**List**](AttachmentApiResult.md) | Collection of files attached to the test result | [default to null] |
| **rerunCompletedCount** | **Integer** | Run count | [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

