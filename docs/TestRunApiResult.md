# TestitApiClient.TestRunApiResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique ID of the entity | 
**isDeleted** | **Boolean** | Indicates if the entity is deleted | 
**startedDate** | **Date** |  | [optional] 
**completedDate** | **Date** |  | [optional] 
**build** | **String** |  | 
**description** | **String** |  | [optional] 
**stateName** | [**TestRunState**](TestRunState.md) |  | 
**status** | [**TestStatusApiResult**](TestStatusApiResult.md) |  | 
**projectId** | **String** |  | 
**testPlanId** | **String** |  | [optional] 
**runByUserId** | **String** |  | [optional] 
**stoppedByUserId** | **String** |  | [optional] 
**name** | **String** |  | [optional] 
**launchSource** | **String** |  | [optional] 
**autoTests** | [**[AutoTestApiResult]**](AutoTestApiResult.md) |  | 
**autoTestsCount** | **Number** |  | 
**testSuiteIds** | **[String]** |  | 
**isAutomated** | **Boolean** |  | 
**analytic** | [**TestRunAnalyticApiResult**](TestRunAnalyticApiResult.md) |  | 
**testResults** | [**[TestResultApiResult]**](TestResultApiResult.md) |  | 
**testPlan** | [**TestPlanApiResult**](TestPlanApiResult.md) |  | [optional] 
**createdDate** | **Date** |  | 
**modifiedDate** | **Date** |  | [optional] 
**createdById** | **String** |  | 
**modifiedById** | **String** |  | [optional] 
**createdByUserName** | **String** |  | [optional] 


