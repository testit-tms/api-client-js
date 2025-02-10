# TestResultApiResult
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** |  | [default to null] |
| **startedOn** | **Date** |  | [optional] [default to null] |
| **completedOn** | **Date** |  | [optional] [default to null] |
| **durationInMs** | **Long** |  | [optional] [default to null] |
| **traces** | **String** |  | [optional] [default to null] |
| **failureType** | **String** |  | [optional] [default to null] |
| **message** | **String** |  | [optional] [default to null] |
| **runByUserId** | **UUID** |  | [optional] [default to null] |
| **stoppedByUserId** | **UUID** |  | [optional] [default to null] |
| **outcome** | **String** |  | [default to null] |
| **autoTestId** | **UUID** |  | [optional] [default to null] |
| **testPointId** | **UUID** |  | [optional] [default to null] |
| **testRunId** | **UUID** |  | [default to null] |
| **configurationId** | **UUID** |  | [default to null] |
| **status** | [**TestStatusApiResult**](TestStatusApiResult.md) |  | [default to null] |
| **testPoint** | [**TestPointShortApiResult**](TestPointShortApiResult.md) |  | [optional] [default to null] |
| **autoTest** | [**AutoTestApiResult**](AutoTestApiResult.md) |  | [optional] [default to null] |
| **autoTestStepResults** | [**List**](AutoTestStepResultsApiResult.md) |  | [optional] [default to null] |
| **setupResults** | [**List**](AutoTestStepResultsApiResult.md) |  | [optional] [default to null] |
| **teardownResults** | [**List**](AutoTestStepResultsApiResult.md) |  | [optional] [default to null] |
| **workItemVersionId** | **UUID** |  | [optional] [default to null] |
| **workItemVersionNumber** | **Integer** |  | [optional] [default to null] |
| **attachments** | [**List**](AttachmentApiResult.md) |  | [default to null] |
| **links** | [**List**](LinkApiResult.md) |  | [default to null] |
| **failureClasses** | [**List**](TestResultFailureClassApiResult.md) |  | [default to null] |
| **stepComments** | [**List**](StepCommentApiResult.md) |  | [optional] [default to null] |
| **parameters** | **Map** |  | [optional] [default to null] |
| **properties** | **Map** |  | [optional] [default to null] |
| **createdDate** | **Date** |  | [default to null] |
| **modifiedDate** | **Date** |  | [optional] [default to null] |
| **createdById** | **UUID** |  | [default to null] |
| **modifiedById** | **UUID** |  | [optional] [default to null] |
| **isDeleted** | **Boolean** |  | [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

