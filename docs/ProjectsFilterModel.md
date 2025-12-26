# TestitApiClient.ProjectsFilterModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Specifies a project name to search for | [optional] 
**isFavorite** | **Boolean** | Specifies a project favorite status to search for | [optional] 
**isDeleted** | **Boolean** | Specifies a project deleted status to search for | [optional] 
**testCasesCount** | [**Int32RangeSelectorModel**](Int32RangeSelectorModel.md) | Specifies a project range of test cases count to search for | [optional] 
**checklistsCount** | [**Int32RangeSelectorModel**](Int32RangeSelectorModel.md) | Specifies a project range of checklists count to search for | [optional] 
**sharedStepsCount** | [**Int32RangeSelectorModel**](Int32RangeSelectorModel.md) | Specifies a project range of shared steps count to search for | [optional] 
**autotestsCount** | [**Int32RangeSelectorModel**](Int32RangeSelectorModel.md) | Specifies a project range of autotests count to search for | [optional] 
**globalIds** | **[Number]** | Specifies a project global IDs to search for | [optional] 
**createdDate** | [**DateTimeRangeSelectorModel**](DateTimeRangeSelectorModel.md) | Specifies a project range of creation date to search for | [optional] 
**createdByIds** | **[String]** | Specifies an autotest creator IDs to search for | [optional] 
**types** | [**[ProjectTypeModel]**](ProjectTypeModel.md) | Collection of project types to search for | [optional] 


