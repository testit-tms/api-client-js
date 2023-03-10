# CustomAttributePutModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **id** | **UUID** | Unique ID of the attribute | [optional] [default to null] |
| **options** | [**List**](CustomAttributeOptionModel.md) | Collection of the attribute options  &lt;br /&gt;  Available for attributes of type &#x60;options&#x60; and &#x60;multiple options&#x60; only | [optional] [default to null] |
| **type** | [**CustomAttributeTypesEnum**](CustomAttributeTypesEnum.md) |  | [default to null] |
| **isDeleted** | **Boolean** | Indicates if the entity is deleted | [optional] [default to null] |
| **name** | **String** | Name of the attribute | [default to null] |
| **isEnabled** | **Boolean** | Indicates if the attribute is enabled | [optional] [default to null] |
| **isRequired** | **Boolean** | Indicates if the attribute value is mandatory to specify | [optional] [default to null] |
| **isGlobal** | **Boolean** | Indicates if the attribute is available across all projects | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

