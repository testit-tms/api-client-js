# TestPlanWithTestSuiteTreeModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **testSuites** | [**List**](TestSuiteWithChildrenModel.md) |  | [default to null] |
| **status** | [**TestPlanStatusModel**](TestPlanStatusModel.md) |  | [default to null] |
| **startedOn** | **Date** | Set when test plan is starter (status changed to: In Progress) | [optional] [default to null] |
| **completedOn** | **Date** | set when test plan status is completed (status changed to: Completed) | [optional] [default to null] |
| **createdDate** | **Date** |  | [optional] [default to null] |
| **modifiedDate** | **Date** |  | [optional] [default to null] |
| **createdById** | **UUID** |  | [default to null] |
| **modifiedById** | **UUID** |  | [optional] [default to null] |
| **globalId** | **Long** | Used for search Test plan | [default to null] |
| **isDeleted** | **Boolean** |  | [default to null] |
| **lockedDate** | **Date** |  | [optional] [default to null] |
| **id** | **UUID** |  | [default to null] |
| **lockedById** | **UUID** |  | [optional] [default to null] |
| **tags** | [**List**](TagModel.md) |  | [optional] [default to null] |
| **name** | **String** |  | [default to null] |
| **startDate** | **Date** | Used for analytics | [optional] [default to null] |
| **endDate** | **Date** | Used for analytics | [optional] [default to null] |
| **description** | **String** |  | [optional] [default to null] |
| **build** | **String** |  | [optional] [default to null] |
| **projectId** | **UUID** |  | [default to null] |
| **productName** | **String** |  | [optional] [default to null] |
| **hasAutomaticDurationTimer** | **Boolean** |  | [optional] [default to null] |
| **attributes** | [**Map**](AnyType.md) |  | [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

