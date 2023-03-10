# WebHookModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **name** | **String** | Name of the webhook | [optional] [default to null] |
| **eventType** | [**WebHookEventTypeModel**](WebHookEventTypeModel.md) |  | [optional] [default to null] |
| **description** | **String** | Description of the webhook | [optional] [default to null] |
| **url** | **String** | Url to which the webhook sends request | [optional] [default to null] |
| **requestType** | [**RequestTypeModel**](RequestTypeModel.md) |  | [optional] [default to null] |
| **shouldSendBody** | **Boolean** | Indicates if the webhook sends body | [optional] [default to null] |
| **headers** | **Map** | Collection of headers which the webhook sends | [optional] [default to null] |
| **queryParameters** | **Map** | Collection of query parameters which the webhook sends | [optional] [default to null] |
| **isEnabled** | **Boolean** | Indicates if the webhook is active | [optional] [default to null] |
| **shouldSendCustomBody** | **Boolean** | Indicates if the webhook sends custom body | [optional] [default to null] |
| **customBody** | **String** | Custom body of the webhook | [optional] [default to null] |
| **customBodyMediaType** | **String** | MIME type of body of the webhook | [optional] [default to null] |
| **shouldReplaceParameters** | **Boolean** | Indicates if the webhook injects parameters | [optional] [default to null] |
| **shouldEscapeParameters** | **Boolean** | Indicates if the webhook escapes invalid characters in parameters | [optional] [default to null] |
| **createdDate** | **Date** | Creation date of the webhook | [optional] [default to null] |
| **createdById** | **UUID** | Unique ID of user who created the webhook | [optional] [default to null] |
| **modifiedDate** | **Date** | Last modification date of the webhook | [optional] [default to null] |
| **modifiedById** | **UUID** | Unique ID of user who modified the webhook last time | [optional] [default to null] |
| **projectId** | **UUID** | Unique ID of project where the webhook is located | [optional] [default to null] |
| **id** | **UUID** | Unique ID of the entity | [optional] [default to null] |
| **isDeleted** | **Boolean** | Indicates if the entity is deleted | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

