# TestitApiClient.AutoTestApiResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**projectId** | **String** |  | 
**externalId** | **String** |  | [optional] 
**name** | **String** |  | 
**namespace** | **String** |  | [optional] 
**classname** | **String** |  | [optional] 
**steps** | [**[AutoTestStepApiResult]**](AutoTestStepApiResult.md) |  | [optional] 
**setup** | [**[AutoTestStepApiResult]**](AutoTestStepApiResult.md) |  | [optional] 
**teardown** | [**[AutoTestStepApiResult]**](AutoTestStepApiResult.md) |  | [optional] 
**title** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**isFlaky** | **Boolean** |  | 
**externalKey** | **String** |  | [optional] 
**globalId** | **Number** |  | 
**isDeleted** | **Boolean** |  | 
**mustBeApproved** | **Boolean** |  | 
**createdDate** | **Date** |  | 
**modifiedDate** | **Date** |  | [optional] 
**createdById** | **String** |  | 
**modifiedById** | **String** |  | [optional] 
**lastTestRunId** | **String** |  | [optional] 
**lastTestRunName** | **String** |  | [optional] 
**lastTestResultId** | **String** |  | [optional] 
**lastTestResultConfiguration** | [**ConfigurationShortApiResult**](ConfigurationShortApiResult.md) |  | [optional] 
**lastTestResultOutcome** | **String** |  | [optional] 
**lastTestResultStatus** | [**TestStatusApiResult**](TestStatusApiResult.md) |  | [optional] 
**stabilityPercentage** | **Number** |  | [optional] 
**layer** | [**LayerApiResult**](LayerApiResult.md) | Model of auto test layer for use in responses. | [optional] 
**links** | [**[LinkApiResult]**](LinkApiResult.md) |  | [optional] 
**labels** | [**[LabelApiResult]**](LabelApiResult.md) |  | [optional] 
**tags** | **[String]** |  | [optional] 


