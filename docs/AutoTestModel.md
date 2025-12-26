# TestitApiClient.AutoTestModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**globalId** | **Number** | Global ID of the autotest | 
**isDeleted** | **Boolean** | Indicates if the autotest is deleted | 
**mustBeApproved** | **Boolean** | Indicates if the autotest has unapproved changes from linked work items | 
**id** | **String** | Unique ID of the autotest | 
**createdDate** | **Date** | Creation date of the autotest | 
**modifiedDate** | **Date** | Last modification date of the project | [optional] 
**createdById** | **String** | Unique ID of the project creator | 
**modifiedById** | **String** | Unique ID of the project last editor | [optional] 
**lastTestRunId** | **String** | Unique ID of the autotest last test run | [optional] 
**lastTestRunName** | **String** | Name of the autotest last test run | [optional] 
**lastTestResultId** | **String** | Unique ID of the autotest last test result | [optional] 
**lastTestResultConfiguration** | [**ConfigurationShortModel**](ConfigurationShortModel.md) | Configuration of the autotest last test result | [optional] 
**lastTestResultOutcome** | **String** | Outcome of the autotest last test result | [optional] 
**lastTestResultStatus** | [**TestStatusModel**](TestStatusModel.md) | Status of the autotest last test result | [optional] 
**stabilityPercentage** | **Number** | Stability percentage of the autotest | [optional] 
**externalId** | **String** | External ID of the autotest | 
**links** | [**[LinkPutModel]**](LinkPutModel.md) | Collection of the autotest links | [optional] 
**projectId** | **String** | Unique ID of the autotest project | 
**name** | **String** | Name of the autotest | 
**namespace** | **String** | Name of the autotest namespace | [optional] 
**classname** | **String** | Name of the autotest class | [optional] 
**steps** | [**[AutoTestStepModel]**](AutoTestStepModel.md) | Collection of the autotest steps | [optional] 
**setup** | [**[AutoTestStepModel]**](AutoTestStepModel.md) | Collection of the autotest setup steps | [optional] 
**teardown** | [**[AutoTestStepModel]**](AutoTestStepModel.md) | Collection of the autotest teardown steps | [optional] 
**title** | **String** | Name of the autotest in autotest&#39;s card | [optional] 
**description** | **String** | Description of the autotest in autotest&#39;s card | [optional] 
**labels** | [**[LabelShortModel]**](LabelShortModel.md) | Collection of the autotest labels | [optional] 
**isFlaky** | **Boolean** | Indicates if the autotest is marked as flaky | [optional] 
**externalKey** | **String** | External key of the autotest | [optional] 


