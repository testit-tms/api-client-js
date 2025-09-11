# AutoTestResultReasonProjectApiResult
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** | Failure category identifier | [default to null] |
| **name** | **String** | Failure category name | [optional] [default to null] |
| **isDeleted** | **Boolean** | Indicates if the entity is deleted | [default to null] |
| **failureCategory** | [**FailureCategory**](FailureCategory.md) | Category type | [default to null] |
| **createdDate** | **Date** | Failure category creation date | [default to null] |
| **createdById** | **UUID** | Failure category creator identifier | [default to null] |
| **modifiedDate** | **Date** | Failure category last modification date | [optional] [default to null] |
| **modifiedById** | **UUID** | Failure category last modifier identifier | [optional] [default to null] |
| **projects** | [**List**](ProjectNameApiResult.md) | Projects names | [default to null] |
| **failureClassRegexes** | [**List**](FailureClassRegexApiResult.md) | Failure category regexes | [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

