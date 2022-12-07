# testit_api_client.AutoTestPostModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workItemIdsForLinkWithAutoTest** | **[String]** | Specifies the IDs of work items to link your autotest to. You can specify several IDs. | [optional] 
**shouldCreateWorkItem** | **Boolean** | Creates a test case linked to the autotest. | [optional] 
**externalId** | **String** | Specifies the ID of your autotest in the external system.&lt;br /&gt;  To test the method, you can use any ID. | 
**links** | [**[LinkPostModel]**](LinkPostModel.md) | Specifies the links in the autotest. | [optional] 
**projectId** | **String** | Specifies the project GUID.&lt;br /&gt;  You can get it using the &#x60;GET /api/v2/projects&#x60; method. | 
**name** | **String** | Specifies autotest name in the test management system. | 
**namespace** | **String** | Specifies the name of the namespace in the test management system. | [optional] 
**classname** | **String** | Specifies the class name in the test management system. | [optional] 
**steps** | [**[AutoTestStepModel]**](AutoTestStepModel.md) | Specifies the steps in the autotest. | [optional] 
**setup** | [**[AutoTestStepModel]**](AutoTestStepModel.md) | Specifies the setup steps and relates them to the autotest. Supported values are the same as in the &#x60;steps&#x60; parameter. | [optional] 
**teardown** | [**[AutoTestStepModel]**](AutoTestStepModel.md) | Specifies the teardown steps and relates them to the autotest. Supported values are the same as in the &#x60;steps&#x60; parameter. | [optional] 
**title** | **String** | Specifies the name of the autotest in the autotest card.   The &#x60;Name&#x60; parameter is responsible for the name in the table. | [optional] 
**description** | **String** | Specifies the autotest description in the test management system. | [optional] 
**labels** | [**[LabelPostModel]**](LabelPostModel.md) | Specifies autotest labels. | [optional] 
**isFlaky** | **Boolean** | Marks the autotest as flaky. | [optional] 


