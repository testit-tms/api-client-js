# TestitApiClient.TestSuiteHierarchyApiResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique ID of the test suite | 
**name** | **String** | Name of the test suite | 
**type** | [**TestSuiteTypeApiResult**](TestSuiteTypeApiResult.md) | Type of the test suite | 
**saveStructure** | **Boolean** | Flag indicating whether the structure of the test suite should be saved | 
**autoRefresh** | **Boolean** | Flag indicating whether auto-refresh functionality is enabled for the test suite | 
**refreshDate** | **Date** | The last time the test suite&#39;s results were refreshed | 
**parentId** | **String** | Unique ID of the parent test suite, if any | 
**testPlanId** | **String** | Unique ID of the associated test plan | 
**children** | [**[TestSuiteHierarchyApiResult]**](TestSuiteHierarchyApiResult.md) | Collection of child test suites | [optional] 


