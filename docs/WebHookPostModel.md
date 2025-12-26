# TestitApiClient.WebHookPostModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**projectId** | **String** | Unique ID of the webhook project | 
**eventType** | [**WebHookEventTypeModel**](WebHookEventTypeModel.md) | Type of event which triggers the webhook | 
**description** | **String** | Description of the webhook | [optional] 
**url** | **String** | Request URL of the webhook | 
**requestType** | [**RequestTypeModel**](RequestTypeModel.md) | Request method of the webhook | 
**shouldSendBody** | **Boolean** | Indicates if the webhook sends body | 
**headers** | **{String: String}** | Collection of the webhook headers | 
**queryParameters** | **{String: String}** | Collection of the webhook query parameters | 
**isEnabled** | **Boolean** | Indicates if the webhook is active | 
**shouldSendCustomBody** | **Boolean** | Indicates if the webhook sends custom body | 
**customBody** | **String** | Custom body of the webhook | [optional] 
**shouldReplaceParameters** | **Boolean** | Indicates if the webhook injects parameters | 
**shouldEscapeParameters** | **Boolean** | Indicates if the webhook escapes invalid characters in parameters | 
**name** | **String** | Name of the webhook | 


