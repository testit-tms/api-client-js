# WebHookPostModel
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **projectId** | **UUID** | Unique ID of the webhook project | [default to null] |
| **eventType** | [**WebHookEventTypeModel**](WebHookEventTypeModel.md) | Type of event which triggers the webhook | [default to null] |
| **description** | **String** | Description of the webhook | [optional] [default to null] |
| **url** | **String** | Request URL of the webhook | [default to null] |
| **requestType** | [**RequestTypeModel**](RequestTypeModel.md) | Request method of the webhook | [default to null] |
| **shouldSendBody** | **Boolean** | Indicates if the webhook sends body | [default to null] |
| **headers** | **Map** | Collection of the webhook headers | [default to null] |
| **queryParameters** | **Map** | Collection of the webhook query parameters | [default to null] |
| **isEnabled** | **Boolean** | Indicates if the webhook is active | [default to null] |
| **shouldSendCustomBody** | **Boolean** | Indicates if the webhook sends custom body | [default to null] |
| **customBody** | **String** | Custom body of the webhook | [optional] [default to null] |
| **shouldReplaceParameters** | **Boolean** | Indicates if the webhook injects parameters | [default to null] |
| **shouldEscapeParameters** | **Boolean** | Indicates if the webhook escapes invalid characters in parameters | [default to null] |
| **name** | **String** | Name of the webhook | [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

