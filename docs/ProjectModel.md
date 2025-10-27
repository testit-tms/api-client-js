# ProjectModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** | Unique ID of the project | [default to null] |
| **description** | **String** | Description of the project | [optional] [default to null] |
| **name** | **String** | Name of the project | [default to null] |
| **isFavorite** | **Boolean** | Indicates if the project is marked as favorite | [default to null] |
| **attributesScheme** | [**List**](CustomAttributeModel.md) | Collection of the project attributes | [optional] [default to null] |
| **testPlansAttributesScheme** | [**List**](CustomAttributeModel.md) | Collection of the project test plans attributes | [optional] [default to null] |
| **testCasesCount** | **Integer** | Number of test cases in the project | [optional] [default to null] |
| **sharedStepsCount** | **Integer** | Number of shared steps in the project | [optional] [default to null] |
| **checkListsCount** | **Integer** | Number of checklists in the project | [optional] [default to null] |
| **autoTestsCount** | **Integer** | Number of autotests in the project | [optional] [default to null] |
| **isDeleted** | **Boolean** | Indicates if the project is deleted | [default to null] |
| **createdDate** | **Date** | Creation date of the project | [default to null] |
| **modifiedDate** | **Date** | Last modification date of the project | [optional] [default to null] |
| **createdById** | **UUID** | Unique ID of the project creator | [default to null] |
| **modifiedById** | **UUID** | Unique ID of the project last editor | [optional] [default to null] |
| **globalId** | **Long** | Global ID of the project | [default to null] |
| **type** | [**ProjectTypeModel**](ProjectTypeModel.md) | Type of the project | [default to null] |
| **isFlakyAuto** | **Boolean** | Indicates if the status \&quot;Flaky/Stable\&quot; sets automatically | [optional] [default to null] |
| **workflowId** | **UUID** |  | [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

