# TestitApiClient.UpdateTestPlanApiModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Test plan unique internal identifier | 
**lockedById** | **String** | User who locked test plan modification internal identifier | [optional] 
**name** | **String** | Test plan name | 
**startDate** | **Date** | Date and time of test plan start | [optional] 
**endDate** | **Date** | Date and time of test plan end | [optional] 
**description** | **String** | Test plan description | [optional] 
**build** | **String** | Build of the application on which test plan is executed | [optional] 
**projectId** | **String** | Project unique identifier | 
**productName** | **String** | Name of the testing product | [optional] 
**hasAutomaticDurationTimer** | **Boolean** | Boolean flag defines if test plan has automatic duration timer | [optional] 
**attributes** | **{String: Object}** | Key value pair of test plan custom attributes | [optional] 
**tags** | [**[TagApiModel]**](TagApiModel.md) | Test plan tag names collection | [optional] 


