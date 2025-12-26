# TestitApiClient.CreateTestRunAndFillByAutoTestsApiModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectId** | **String** | Specifies the GUID of the project, in which a test run will be created. | 
**name** | **String** | Specifies the name of the test run. | [optional] 
**configurationIds** | **[String]** | Specifies the configuration GUIDs, from which test points are created. You can specify several GUIDs. | 
**autoTestExternalIds** | **[String]** | Specifies the external ID of the autotest. You can specify several IDs. | 
**description** | **String** | Specifies the test run description. | [optional] 
**launchSource** | **String** | Specifies the test run launch source. | [optional] 
**attachments** | [**[AssignAttachmentApiModel]**](AssignAttachmentApiModel.md) | Collection of attachment ids to relate to the test run | [optional] 
**links** | [**[CreateLinkApiModel]**](CreateLinkApiModel.md) | Collection of links to relate to the test run | [optional] 


