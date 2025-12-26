# TestitApiClient.TestRunV2ApiResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Test run unique identifier | 
**name** | **String** | Test run name | 
**description** | **String** | Test run description | [optional] 
**launchSource** | **String** | Test run launch source              Once launch source is specified it cannot be updated. | [optional] 
**startedOn** | **Date** | Date and time of test run start | [optional] 
**completedOn** | **Date** | Date and time of test run end | [optional] 
**stateName** | [**TestRunState**](TestRunState.md) | Test run state | 
**status** | [**TestStatusApiResult**](TestStatusApiResult.md) | Test run status | 
**projectId** | **String** | Project unique identifier              This property is used to link test run with project. | 
**testPlanId** | **String** | Test plan unique identifier              This property is used to link test run with test plan. | [optional] 
**testResults** | [**[TestResultV2GetModel]**](TestResultV2GetModel.md) | Enumeration of test results related to test run | [optional] 
**createdDate** | **Date** | Date and time of test run creation | 
**modifiedDate** | **Date** | Date and time of last test run  modification | [optional] 
**createdById** | **String** | Unique identifier of user who created test run | 
**modifiedById** | **String** | Unique identifier of user who applied last test run  modification | [optional] 
**createdByUserName** | **String** | Username of user who created test run | [optional] 
**attachments** | [**[AttachmentApiResult]**](AttachmentApiResult.md) | Collection of attachments related to the test run | 
**links** | [**[LinkApiResult]**](LinkApiResult.md) | Collection of links related to the test run | 
**customParameters** | **{String: String}** | Customers test run parameters | [optional] 
**webhooks** | [**[NamedEntityApiModel]**](NamedEntityApiModel.md) | Enabled webhooks | 
**runCount** | **Number** | Run count | 


