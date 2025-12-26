# TestitApiClient.TestPointShortResponseModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique ID of the test point | 
**createdDate** | **Date** | Creation date of the test point | 
**createdById** | **String** | Unique ID of the test point creator | 
**modifiedDate** | **Date** | Last modification date of the test point | [optional] 
**modifiedById** | **String** | Unique ID of the test point last editor | [optional] 
**testerId** | **String** | Unique ID of the test point assigned user | [optional] 
**parameters** | **{String: String}** | Collection of the test point parameters | [optional] 
**attributes** | **{String: Object}** | Collection of attributes of work item the test point represents | 
**tags** | **[String]** | Collection of the test point tags | 
**links** | **[String]** | Collection of the test point links | 
**testSuiteId** | **String** | Unique ID of test suite the test point assigned to | 
**testSuiteName** | **String** | Name of the test suite | 
**workItemId** | **String** | Unique ID of work item the test point represents | 
**workItemGlobalId** | **Number** | Global ID of work item the test point represents | 
**workItemVersionId** | **String** | Unique ID of work item version the test point represents | 
**workItemVersionNumber** | **Number** | Number of work item version the test point represents | 
**workItemMedianDuration** | **Number** | Median duration of work item the test point represents | [optional] 
**status** | [**TestPointStatus**](TestPointStatus.md) | Status of the test point | 
**statusModel** | [**TestStatusApiResult**](TestStatusApiResult.md) | Status of the test point | 
**priority** | [**WorkItemPriorityModel**](WorkItemPriorityModel.md) | Priority of the test point | 
**sourceType** | [**WorkItemSourceTypeModel**](WorkItemSourceTypeModel.md) | Source type of the test point | 
**isAutomated** | **Boolean** | Indicates if the test point represents an autotest | 
**name** | **String** | Name of the test point | 
**configurationId** | **String** | Unique ID of the test point configuration | 
**duration** | **Number** | Duration of the test point | 
**sectionId** | **String** | Unique ID of section where work item the test point represents is located | 
**sectionName** | **String** | Name of section where work item the test point represents is located | [optional] 
**projectId** | **String** | Unique ID of the test point project | 
**lastTestResult** | [**LastTestResultModel**](LastTestResultModel.md) | Model of the test point last test result | [optional] 
**iterationId** | **String** | Unique ID of work item iteration the test point represents | 
**workItemState** | [**WorkItemState**](WorkItemState.md) | Work item state | 
**workItemCreatedById** | **String** | Unique ID of the work item creator | 
**workItemCreatedDate** | **Date** | Creation date of work item | 
**workItemModifiedById** | **String** | Unique ID of the work item last editor | [optional] 
**workItemModifiedDate** | **Date** | Modified date of work item | [optional] 


