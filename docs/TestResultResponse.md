# TestResultResponse
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** |  | [default to null] |
| **createdDate** | **Date** |  | [default to null] |
| **modifiedDate** | **Date** |  | [optional] [default to null] |
| **createdById** | **UUID** |  | [default to null] |
| **modifiedById** | **UUID** |  | [optional] [default to null] |
| **stepComments** | [**List**](StepCommentApiModel.md) |  | [optional] [default to null] |
| **failureClassIds** | **List** |  | [default to null] |
| **outcome** | [**TestResultOutcome**](TestResultOutcome.md) |  | [optional] [default to null] |
| **status** | [**TestStatusApiResult**](TestStatusApiResult.md) |  | [optional] [default to null] |
| **comment** | **String** |  | [optional] [default to null] |
| **links** | [**List**](Link.md) |  | [optional] [default to null] |
| **stepResults** | [**List**](StepResultApiModel.md) |  | [optional] [default to null] |
| **attachments** | [**List**](AttachmentApiResult.md) |  | [optional] [default to null] |
| **autoTestId** | **UUID** |  | [optional] [default to null] |
| **configurationId** | **UUID** |  | [default to null] |
| **startedOn** | **Date** |  | [optional] [default to null] |
| **completedOn** | **Date** |  | [optional] [default to null] |
| **durationInMs** | **Long** |  | [optional] [default to null] |
| **traces** | **String** |  | [optional] [default to null] |
| **failureType** | **String** |  | [optional] [default to null] |
| **message** | **String** |  | [optional] [default to null] |
| **runByUserId** | **UUID** |  | [optional] [default to null] |
| **stoppedByUserId** | **UUID** |  | [optional] [default to null] |
| **testPointId** | **UUID** |  | [default to null] |
| **testRunId** | **UUID** |  | [default to null] |
| **testPoint** | [**TestPoint**](TestPoint.md) |  | [optional] [default to null] |
| **autoTest** | [**AutoTest**](AutoTest.md) |  | [optional] [default to null] |
| **autoTestStepResults** | [**List**](AutoTestStepResult.md) |  | [optional] [default to null] |
| **setupResults** | [**List**](AutoTestStepResult.md) |  | [optional] [default to null] |
| **teardownResults** | [**List**](AutoTestStepResult.md) |  | [optional] [default to null] |
| **workItemVersionId** | **UUID** |  | [default to null] |
| **workItemVersionNumber** | **Integer** |  | [optional] [default to null] |
| **parameters** | **Map** |  | [optional] [default to null] |
| **properties** | **Map** |  | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

