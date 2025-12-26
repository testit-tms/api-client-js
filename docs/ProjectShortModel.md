# TestitApiClient.ProjectShortModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique ID of the project | 
**description** | **String** | Description of the project | [optional] 
**name** | **String** | Name of the project | 
**isFavorite** | **Boolean** | Indicates if the project is marked as favorite | 
**testCasesCount** | **Number** | Number of test cases in the project | [optional] 
**sharedStepsCount** | **Number** | Number of shared steps in the project | [optional] 
**checkListsCount** | **Number** | Number of checklists in the project | [optional] 
**autoTestsCount** | **Number** | Number of autotests in the project | [optional] 
**isDeleted** | **Boolean** | Indicates if the project is deleted | 
**createdDate** | **Date** | Creation date of the project | 
**modifiedDate** | **Date** | Last modification date of the project | [optional] 
**createdById** | **String** | Unique ID of the project creator | 
**modifiedById** | **String** | Unique ID of the project last editor | [optional] 
**globalId** | **Number** | Global ID of the project | 
**type** | [**ProjectTypeModel**](ProjectTypeModel.md) | Type of the project | 
**isFlakyAuto** | **Boolean** | Indicates if the status \&quot;Flaky/Stable\&quot; sets automatically | [optional] 
**workflowId** | **String** |  | 


