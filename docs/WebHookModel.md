# TestitApiClient.WebHookModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the webhook | 
**eventType** | [**WebHookEventTypeModel**](WebHookEventTypeModel.md) | Type of event which triggers the webhook | 
**description** | **String** | Description of the webhook | [optional] 
**url** | **String** | Url to which the webhook sends request | 
**requestType** | [**RequestTypeModel**](RequestTypeModel.md) | Method which the webhook uses | 
**shouldSendBody** | **Boolean** | Indicates if the webhook sends body | 
**headers** | **{String: String}** | Collection of headers which the webhook sends | [optional] 
**queryParameters** | **{String: String}** | Collection of query parameters which the webhook sends | [optional] 
**isEnabled** | **Boolean** | Indicates if the webhook is active | 
**shouldSendCustomBody** | **Boolean** | Indicates if the webhook sends custom body | 
**customBody** | **String** | Custom body of the webhook | [optional] 
**customBodyMediaType** | **String** | MIME type of body of the webhook | [optional] 
**shouldReplaceParameters** | **Boolean** | Indicates if the webhook injects parameters | 
**shouldEscapeParameters** | **Boolean** | Indicates if the webhook escapes invalid characters in parameters | 
**createdDate** | **Date** | Creation date of the webhook | 
**createdById** | **String** | Unique ID of user who created the webhook | 
**modifiedDate** | **Date** | Last modification date of the webhook | [optional] 
**modifiedById** | **String** | Unique ID of user who modified the webhook last time | [optional] 
**projectId** | **String** | Unique ID of project where the webhook is located | 
**id** | **String** | Unique ID of the entity | 
**isDeleted** | **Boolean** | Indicates if the entity is deleted | 


