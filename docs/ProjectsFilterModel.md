# ProjectsFilterModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | Specifies a project name to search for | [optional] [default to null] |
| **isFavorite** | **Boolean** | Specifies a project favorite status to search for | [optional] [default to null] |
| **isDeleted** | **Boolean** | Specifies a project deleted status to search for | [optional] [default to null] |
| **testCasesCount** | [**Int32RangeSelectorModel**](Int32RangeSelectorModel.md) | Specifies a project range of test cases count to search for | [optional] [default to null] |
| **checklistsCount** | [**Int32RangeSelectorModel**](Int32RangeSelectorModel.md) | Specifies a project range of checklists count to search for | [optional] [default to null] |
| **sharedStepsCount** | [**Int32RangeSelectorModel**](Int32RangeSelectorModel.md) | Specifies a project range of shared steps count to search for | [optional] [default to null] |
| **autotestsCount** | [**Int32RangeSelectorModel**](Int32RangeSelectorModel.md) | Specifies a project range of autotests count to search for | [optional] [default to null] |
| **globalIds** | **Set** | Specifies a project global IDs to search for | [optional] [default to null] |
| **createdDate** | [**DateTimeRangeSelectorModel**](DateTimeRangeSelectorModel.md) | Specifies a project range of creation date to search for | [optional] [default to null] |
| **createdByIds** | **Set** | Specifies an autotest creator IDs to search for | [optional] [default to null] |
| **types** | [**Set**](ProjectTypeModel.md) | Collection of project types to search for | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

