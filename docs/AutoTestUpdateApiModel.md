# TestitApiClient.AutoTestUpdateApiModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Autotest unique internal identifier | [optional] 
**projectId** | **String** | Unique ID of the autotest project | 
**externalId** | **String** | External ID of the autotest | 
**externalKey** | **String** | External key of the autotest | [optional] 
**name** | **String** | Name of the autotest | 
**namespace** | **String** | Name of the autotest namespace | [optional] 
**classname** | **String** | Name of the autotest class | [optional] 
**title** | **String** | Name of the autotest in autotest&#39;s card | [optional] 
**description** | **String** | Description of the autotest in autotest&#39;s card | [optional] 
**isFlaky** | **Boolean** | Indicates if the autotest is marked as flaky | [optional] 
**steps** | [**[AutoTestStepApiModel]**](AutoTestStepApiModel.md) | Collection of the autotest steps | [optional] 
**setup** | [**[AutoTestStepApiModel]**](AutoTestStepApiModel.md) | Collection of the autotest setup steps | [optional] 
**teardown** | [**[AutoTestStepApiModel]**](AutoTestStepApiModel.md) | Collection of the autotest teardown steps | [optional] 
**workItemIds** | **[String]** | Specifies the IDs of work items to link your autotest to. You can specify several IDs. | [optional] 
**workItemIdsForLinkWithAutoTest** | **[String]** | Specifies the IDs of work items to link your autotest to. You can specify several IDs. | [optional] 
**labels** | [**[LabelApiModel]**](LabelApiModel.md) | Collection of the autotest labels | [optional] 
**links** | [**[LinkUpdateApiModel]**](LinkUpdateApiModel.md) | Collection of the autotest links | [optional] 
**tags** | **[String]** | Collection of the autotest tags | [optional] 


