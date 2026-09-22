# TestitApiClient.CustomAttributeSearchResponseModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workItemUsage** | [**[ProjectShortestModel]**](ProjectShortestModel.md) |  | 
**testPlanUsage** | [**[ProjectShortestModel]**](ProjectShortestModel.md) |  | 
**id** | **String** | Unique ID of the attribute. | 
**code** | **String** | Optional code identifier for the attribute. | [optional] 
**type** | [**CustomAttributeTypesEnum**](CustomAttributeTypesEnum.md) | Type of the attribute. | 
**options** | [**[CustomAttributeOptionModel]**](CustomAttributeOptionModel.md) | Collection of the attribute options. | 
**targets** | **[String]** | Collection of the attribute targets.   Defines where the attribute can be used (e.g., TestCases, AutoTestCases, TestPlans). | 
**isReadOnly** | **Boolean** | Indicates if the attribute is read-only. | 
**isDeleted** | **Boolean** | Indicates if the attribute is deleted. | 
**isSystem** | **Boolean** | Indicates if the attribute is system. | 
**name** | **String** | Name of the attribute | 
**isEnabled** | **Boolean** | Indicates if the attribute is enabled | 
**isRequired** | **Boolean** | Indicates if the attribute value is mandatory to specify | 
**isGlobal** | **Boolean** | Indicates if the attribute is available across all projects | 


