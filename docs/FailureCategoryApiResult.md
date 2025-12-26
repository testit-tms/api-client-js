# TestitApiClient.FailureCategoryApiResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Failure category identifier | 
**name** | **String** | Failure category name | [optional] 
**isDeleted** | **Boolean** | Indicates if the entity is deleted | 
**failureCategory** | [**FailureCategory**](FailureCategory.md) | Category type | 
**createdDate** | **Date** | Failure category creation date | 
**createdById** | **String** | Failure category creator identifier | 
**modifiedDate** | **Date** | Failure category last modification date | [optional] 
**modifiedById** | **String** | Failure category last modifier identifier | [optional] 
**projects** | [**[ProjectNameApiResult]**](ProjectNameApiResult.md) | Projects names | 
**failureClassRegexes** | [**[FailureClassRegexApiResult]**](FailureClassRegexApiResult.md) | Failure category regexes | 


