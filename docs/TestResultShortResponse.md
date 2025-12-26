# TestitApiClient.TestResultShortResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique ID of the test result | 
**name** | **String** | Name of autotest represented by the test result | 
**autotestGlobalId** | **Number** | Global ID of autotest represented by the test result | 
**autotestExternalId** | **String** | External ID of autotest represented by the test result | [optional] 
**testRunId** | **String** | Unique ID of test run where the test result is located | 
**configurationId** | **String** | Unique ID of configuration which the test result uses | 
**configurationName** | **String** | Name of configuration which the test result uses | 
**outcome** | **String** | Outcome of the test result | [optional] 
**status** | [**TestStatusApiResult**](TestStatusApiResult.md) |  | 
**resultReasons** | [**[AutoTestResultReasonShort]**](AutoTestResultReasonShort.md) | Collection of result reasons which the test result have | 
**comment** | **String** | Comment to the test result | [optional] 
**date** | **Date** | Date when the test result was completed or started or created | 
**createdDate** | **Date** | Date when the test result has been created | 
**modifiedDate** | **Date** | Date when the test result has been modified | [optional] 
**startedOn** | **Date** | Date when the test result has been started | [optional] 
**completedOn** | **Date** | Date when the test result has been completed | [optional] 
**duration** | **Number** | Time which it took to run the test | [optional] 
**links** | [**[LinkShort]**](LinkShort.md) | Collection of links attached to the test result | 
**attachments** | [**[AttachmentApiResult]**](AttachmentApiResult.md) | Collection of files attached to the test result | 
**rerunCompletedCount** | **Number** | Run count | 


