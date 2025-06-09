# TestResultHistoryReportApiResult
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** | Internal test result identifier | [default to null] |
| **createdDate** | **Date** | Test result creation date | [default to null] |
| **modifiedDate** | **Date** | Test result last modification date | [optional] [default to null] |
| **userId** | **UUID** | Internal identifier of user who stopped test run related to the test result or user who created the test result              If test run was stopped, this property equals identifier of user who stopped it. Otherwise, the property equals identifier of user who created the test result | [default to null] |
| **testRunId** | **UUID** | Identifier of test run related to the test result | [optional] [default to null] |
| **testRunName** | **String** | Name of test run related to the test result | [optional] [default to null] |
| **createdByUserName** | **String** | Username of user who created test run | [optional] [default to null] |
| **testPlanId** | **UUID** | Internal identifier of test plan related to the test result&#39;s test run | [optional] [default to null] |
| **testPlanGlobalId** | **Long** | Global identifier of test plan related to the test result&#39;s test run | [optional] [default to null] |
| **testPlanName** | **String** | Name of test plan related to the test result&#39;s test run | [optional] [default to null] |
| **configurationName** | **String** | Configuration name of test point related to the test result or from test result itself              If test point related to the test result has configuration, this property will be equal to the test point configuration name. Otherwise, this property will be equal to the test result configuration name | [optional] [default to null] |
| **isAutomated** | **Boolean** | Boolean flag defines if test point related to the test result is automated or not | [default to null] |
| **outcome** | **String** | Outcome from test result with max modified date or from first created test result              Property can contain one of these values: Passed, Failed, InProgress, Blocked, Skipped.              If any test result related to the test run is linked with autotest and the run has an outcome, the outcome value equals to the worst outcome of the last modified test result. Otherwise, the outcome equals to the outcome of first created test result in the test run. | [optional] [default to null] |
| **status** | [**TestStatusApiResult**](TestStatusApiResult.md) | Status from test result with max modified date or from first created test result | [default to null] |
| **comment** | **String** | Test result comment              If any test result related to the test run is linked with autotest, comment will have default value. Otherwise, the comment equals to the comment of first created test result in the test run | [optional] [default to null] |
| **links** | [**List**](LinkApiResult.md) | Test result links              If any test result related to the test run is linked with autotest, link will be equal to the links of last modified test result. Otherwise, the links equals to the links of first created test result in the test run. | [optional] [default to null] |
| **startedOn** | **Date** | Start date time from test result or from test run (if test run new state is Running or Completed state) | [optional] [default to null] |
| **completedOn** | **Date** | End date time from test result or from test run (if test run new state is In progress, Stopped or Completed) | [optional] [default to null] |
| **duration** | **Long** | Duration of first created test result in the test run | [optional] [default to null] |
| **createdById** | **UUID** | Unique identifier of user who created first test result in the test run | [default to null] |
| **modifiedById** | **UUID** | Unique identifier of user who applied last modification of first test result in the test run | [optional] [default to null] |
| **attachments** | [**List**](AttachmentApiResult.md) | Attachments related to the test result              If any test result related to the test run is linked with autotest, attachments will be equal to the attachments of last modified test result. Otherwise, the attachments equals to the attachments of first created test result in the test run. | [optional] [default to null] |
| **workItemVersionId** | **UUID** | Unique identifier of workitem version related to the first test result in the test run | [optional] [default to null] |
| **workItemVersionNumber** | **Integer** | Number of workitem version related to the first test result in the test run | [optional] [default to null] |
| **launchSource** | **String** |  | [optional] [default to null] |
| **failureClassIds** | **List** | Unique identifier of failure classes related to the first test result in the test run | [default to null] |
| **parameters** | **Map** | Parameters of test result | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

