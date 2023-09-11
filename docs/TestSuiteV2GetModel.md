# TestSuiteV2GetModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** | Unique ID of the test suite | [default to null] |
| **refreshDate** | **Date** | Date of the last refresh of the test suite | [optional] [default to null] |
| **parentId** | **UUID** | Unique ID of the parent test suite in hierarchy | [optional] [default to null] |
| **testPlanId** | **UUID** | Unique ID of test plan to which the test suite belongs | [default to null] |
| **name** | **String** | Name of the test suite | [default to null] |
| **type** | [**TestSuiteType**](TestSuiteType.md) |  | [optional] [default to null] |
| **saveStructure** | **Boolean** | Indicates if the test suite retains section tree structure | [optional] [default to null] |
| **autoRefresh** | **Boolean** | Indicates if scheduled auto refresh is enabled for the test suite | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

