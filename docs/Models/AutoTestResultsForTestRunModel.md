# AutoTestResultsForTestRunModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **configurationId** | **UUID** | Specifies the GUID of the autotest configuration, which was specified when the test run was created. | [default to null] |
| **links** | [**List**](LinkPostModel.md) | Specifies the links in the autotest. | [optional] [default to null] |
| **failureReasonNames** | [**List**](FailureCategoryModel.md) | Specifies the cause of autotest failure. | [optional] [default to null] |
| **autoTestExternalId** | **String** | Specifies the external ID of the autotest, which was specified when the test run was created. | [default to null] |
| **outcome** | [**AvailableTestResultOutcome**](AvailableTestResultOutcome.md) |  | [default to null] |
| **message** | **String** | A comment for the result. | [optional] [default to null] |
| **traces** | **String** | An extended comment or a stack trace. | [optional] [default to null] |
| **startedOn** | **Date** | Test run start date. | [optional] [default to null] |
| **completedOn** | **Date** | Test run end date. | [optional] [default to null] |
| **duration** | **Long** | Expected or actual duration of the test run execution in milliseconds. | [optional] [default to null] |
| **attachments** | [**List**](AttachmentPutModel.md) | Specifies an attachment GUID. Multiple values can be sent. | [optional] [default to null] |
| **parameters** | **Map** | \&quot;&lt;b&gt;parameter&lt;/b&gt;\&quot;: \&quot;&lt;b&gt;value&lt;/b&gt;\&quot; pair with arbitrary custom parameters. Multiple parameters can be sent. | [optional] [default to null] |
| **properties** | **Map** | \&quot;&lt;b&gt;property&lt;/b&gt;\&quot;: \&quot;&lt;b&gt;value&lt;/b&gt;\&quot; pair with arbitrary custom properties. Multiple properties can be sent. | [optional] [default to null] |
| **stepResults** | [**List**](AttachmentPutModelAutoTestStepResultsModel.md) | Specifies the results of individual steps. | [optional] [default to null] |
| **setupResults** | [**List**](AttachmentPutModelAutoTestStepResultsModel.md) | Specifies the results of setup steps. For information on supported values, see the &#x60;stepResults&#x60; parameter above. | [optional] [default to null] |
| **teardownResults** | [**List**](AttachmentPutModelAutoTestStepResultsModel.md) | Specifies the results of the teardown steps. For information on supported values, see the &#x60;stepResults&#x60; parameter above. | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

