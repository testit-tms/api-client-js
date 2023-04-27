# TestResultHistoryReportModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** |  | [optional] [default to null] |
| **createdDate** | **Date** |  | [optional] [default to null] |
| **modifiedDate** | **Date** |  | [optional] [default to null] |
| **userId** | **UUID** | If test run was stopped, this property equals identifier of user who stopped it.Otherwise, the property equals identifier of user who created the test result | [optional] [default to null] |
| **testRunId** | **UUID** |  | [optional] [default to null] |
| **testRunName** | **String** |  | [optional] [default to null] |
| **createdByUserName** | **String** |  | [optional] [default to null] |
| **testPlanId** | **UUID** |  | [optional] [default to null] |
| **testPlanGlobalId** | **Long** |  | [optional] [default to null] |
| **testPlanName** | **String** |  | [optional] [default to null] |
| **configurationName** | **String** | If test point related to the test result has configuration, this property will be equal to the test point configuration name. Otherwise, this property will be equal to the test result configuration name | [optional] [default to null] |
| **isAutomated** | **Boolean** |  | [optional] [default to null] |
| **outcome** | **String** | If any test result related to the test run is linked with autotest and the run has an outcome, the outcome value equalsto the worst outcome of the last modified test result.Otherwise, the outcome equals to the outcome of first created test result in the test run | [optional] [default to null] |
| **comment** | **String** | If any test result related to the test run is linked with autotest, comment will have default valueOtherwise, the comment equals to the comment of first created test result in the test run | [optional] [default to null] |
| **links** | [**List**](LinkModel.md) | If any test result related to the test run is linked with autotest, link will be equal to the links of last modified test result.Otherwise, the links equals to the links of first created test result in the test run | [optional] [default to null] |
| **startedOn** | **Date** |  | [optional] [default to null] |
| **completedOn** | **Date** |  | [optional] [default to null] |
| **duration** | **Long** |  | [optional] [default to null] |
| **createdById** | **UUID** |  | [optional] [default to null] |
| **modifiedById** | **UUID** |  | [optional] [default to null] |
| **attachments** | [**List**](AttachmentModel.md) | If any test result related to the test run is linked with autotest, attachments will be equal to the attachments of last modified test result.Otherwise, the attachments equals to the attachments of first created test result in the test run | [optional] [default to null] |
| **workItemVersionId** | **UUID** |  | [optional] [default to null] |
| **workItemVersionNumber** | **Integer** |  | [optional] [default to null] |
| **launchSource** | **String** |  | [optional] [default to null] |
| **failureClassIds** | **List** |  | [optional] [default to null] |
| **parameters** | **Map** |  | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

