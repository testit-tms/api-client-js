# TestitApiClient.CreateTestRunAndFillByConfigurationsApiModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectId** | **String** | Specifies the GUID of the project, in which a test run will be created. | 
**testPlanId** | **String** | Specifies the GUID of the test plan, within which the test run will be created. | 
**name** | **String** | Specifies the name of the test run. | [optional] 
**description** | **String** | Specifies the test run description. | [optional] 
**launchSource** | **String** | Specifies the test run launch source. | [optional] 
**attachments** | [**[AssignAttachmentApiModel]**](AssignAttachmentApiModel.md) | Collection of attachment ids to relate to the test run | [optional] 
**links** | [**[CreateLinkApiModel]**](CreateLinkApiModel.md) | Collection of links to relate to the test run | [optional] 
**testPointSelectors** | [**[TestPointSelector]**](TestPointSelector.md) | Specifies an array of work items and configuration to create a test run for. | 


