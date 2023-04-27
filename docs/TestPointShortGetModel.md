# TestPointShortGetModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** | Unique ID of the test point | [optional] [default to null] |
| **createdDate** | **Date** | Creation date of the test point | [optional] [default to null] |
| **createdById** | **UUID** | Unique ID of the test point creator | [optional] [default to null] |
| **modifiedDate** | **Date** | Last modification date of the test point | [optional] [default to null] |
| **modifiedById** | **UUID** | Unique ID of the test point last editor | [optional] [default to null] |
| **testerId** | **UUID** | Unique ID of the test point assigned user | [optional] [default to null] |
| **parameters** | **Map** | Collection of the test point parameters | [optional] [default to null] |
| **attributes** | [**Map**](AnyType.md) | Collection of attributes of work item the test point represents | [optional] [default to null] |
| **tags** | **List** | Collection of the test point tags | [optional] [default to null] |
| **links** | **List** | Collection of the test point links | [optional] [default to null] |
| **testSuiteId** | **UUID** | Unique ID of test suite the test point assigned to | [optional] [default to null] |
| **workItemId** | **UUID** | Unique ID of work item the test point represents | [optional] [default to null] |
| **workItemGlobalId** | **Long** | Global ID of work item the test point represents | [optional] [default to null] |
| **workItemVersionId** | **UUID** | Unique ID of work item version the test point represents | [optional] [default to null] |
| **status** | [**TestPointStatus**](TestPointStatus.md) |  | [default to null] |
| **priority** | [**WorkItemPriorityModel**](WorkItemPriorityModel.md) |  | [default to null] |
| **isAutomated** | **Boolean** | Indicates if the test point represents an autotest | [optional] [default to null] |
| **name** | **String** | Name of the test point | [optional] [default to null] |
| **configurationId** | **UUID** | Unique ID of the test point configuration | [optional] [default to null] |
| **duration** | **Integer** | Duration of the test point | [optional] [default to null] |
| **sectionId** | **UUID** | Unique ID of section where work item the test point represents is located | [optional] [default to null] |
| **sectionName** | **String** | Name of section where work item the test point represents is located | [optional] [default to null] |
| **projectId** | **UUID** | Unique ID of the test point project | [optional] [default to null] |
| **lastTestResult** | [**LastTestResultModel**](LastTestResultModel.md) |  | [default to null] |
| **iterationId** | **UUID** | Unique ID of work item iteration the test point represents | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

