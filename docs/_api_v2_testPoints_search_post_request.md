# _api_v2_testPoints_search_post_request
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **testPlanIds** | **List** | Specifies a test point test plan IDS to search for | [optional] [default to null] |
| **testSuiteIds** | **List** | Specifies a test point test suite IDs to search for | [optional] [default to null] |
| **workItemGlobalIds** | **List** | Specifies a test point work item global IDs to search for | [optional] [default to null] |
| **workItemMedianDuration** | [**TestPointFilterModel_workItemMedianDuration**](TestPointFilterModel_workItemMedianDuration.md) |  | [optional] [default to null] |
| **statuses** | [**List**](TestPointStatus.md) | Specifies a test point statuses to search for | [optional] [default to null] |
| **priorities** | [**List**](WorkItemPriorityModel.md) | Specifies a test point priorities to search for | [optional] [default to null] |
| **isAutomated** | **Boolean** | Specifies a test point automation status to search for | [optional] [default to null] |
| **name** | **String** | Specifies a test point name to search for | [optional] [default to null] |
| **configurationIds** | **List** | Specifies a test point configuration IDs to search for | [optional] [default to null] |
| **testerIds** | **List** | Specifies a test point assigned user IDs to search for | [optional] [default to null] |
| **duration** | [**TestPointFilterModel_duration**](TestPointFilterModel_duration.md) |  | [optional] [default to null] |
| **sectionIds** | **List** | Specifies a test point work item section IDs to search for | [optional] [default to null] |
| **createdDate** | [**TestPointFilterModel_createdDate**](TestPointFilterModel_createdDate.md) |  | [optional] [default to null] |
| **createdByIds** | **List** | Specifies a test point creator IDs to search for | [optional] [default to null] |
| **modifiedDate** | [**TestPointFilterModel_modifiedDate**](TestPointFilterModel_modifiedDate.md) |  | [optional] [default to null] |
| **modifiedByIds** | **List** | Specifies a test point last editor IDs to search for | [optional] [default to null] |
| **tags** | **List** | Specifies a test point tags to search for | [optional] [default to null] |
| **attributes** | [**Map**](set.md) | Specifies a test point attributes to search for | [optional] [default to null] |
| **workItemCreatedDate** | [**TestPointFilterModel_workItemCreatedDate**](TestPointFilterModel_workItemCreatedDate.md) |  | [optional] [default to null] |
| **workItemCreatedByIds** | **List** | Specifies a work item creator IDs to search for | [optional] [default to null] |
| **workItemModifiedDate** | [**TestPointFilterModel_workItemModifiedDate**](TestPointFilterModel_workItemModifiedDate.md) |  | [optional] [default to null] |
| **workItemModifiedByIds** | **List** | Specifies a work item last editor IDs to search for | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

