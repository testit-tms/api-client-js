# CustomAttributeSearchResponseModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **workItemUsage** | [**List**](ProjectShortestModel.md) |  | [default to null] |
| **testPlanUsage** | [**List**](ProjectShortestModel.md) |  | [default to null] |
| **id** | **UUID** | Unique ID of the attribute | [default to null] |
| **options** | [**List**](CustomAttributeOptionModel.md) | Collection of the attribute options   Available for attributes of type &#x60;options&#x60; and &#x60;multiple options&#x60; only | [default to null] |
| **type** | [**CustomAttributeTypesEnum**](CustomAttributeTypesEnum.md) | Type of the attribute | [default to null] |
| **isDeleted** | **Boolean** | Indicates if the attribute is deleted | [default to null] |
| **name** | **String** | Name of the attribute | [default to null] |
| **isEnabled** | **Boolean** | Indicates if the attribute is enabled | [default to null] |
| **isRequired** | **Boolean** | Indicates if the attribute value is mandatory to specify | [default to null] |
| **isGlobal** | **Boolean** | Indicates if the attribute is available across all projects | [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

