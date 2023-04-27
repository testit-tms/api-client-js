# NotificationsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2NotificationsCountGet**](NotificationsApi.md#apiV2NotificationsCountGet) | **GET** /api/v2/notifications/count | Get unread Notifications total in last 7 days |
| [**apiV2NotificationsGet**](NotificationsApi.md#apiV2NotificationsGet) | **GET** /api/v2/notifications | Get all Notifications for current User |
| [**apiV2NotificationsIdReadPost**](NotificationsApi.md#apiV2NotificationsIdReadPost) | **POST** /api/v2/notifications/{id}/read | Set Notification as read |
| [**apiV2NotificationsReadPost**](NotificationsApi.md#apiV2NotificationsReadPost) | **POST** /api/v2/notifications/read | Set all Notifications as read |
| [**apiV2NotificationsSearchPost**](NotificationsApi.md#apiV2NotificationsSearchPost) | **POST** /api/v2/notifications/search | Search Notifications for current User |


<a name="apiV2NotificationsCountGet"></a>
# **apiV2NotificationsCountGet**
> Integer apiV2NotificationsCountGet(isRead)

Get unread Notifications total in last 7 days

    &lt;br&gt;Use case  &lt;br&gt;User runs method execution  &lt;br&gt;System returns unread notifications total (listed in the response example)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **isRead** | **Boolean**|  | [optional] [default to null] |

### Return type

**Integer**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2NotificationsGet"></a>
# **apiV2NotificationsGet**
> List apiV2NotificationsGet(notificationType, Skip, Take, OrderBy, SearchField, SearchValue)

Get all Notifications for current User

    &lt;br&gt;Use case  &lt;br&gt;User runs method execution  &lt;br&gt;System returns notifications (listed in the response example)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **notificationType** | [**NotificationTypeModel**](../Models/.md)|  | [optional] [default to null] [enum: MentionInComment, TestPointIsSetInTestPlan, MentionInCustomAttribute, TestPlanUnlockRequest] |
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |

### Return type

[**List**](../Models/NotificationModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2NotificationsIdReadPost"></a>
# **apiV2NotificationsIdReadPost**
> apiV2NotificationsIdReadPost(id)

Set Notification as read

    &lt;br&gt;Use case  &lt;br&gt;User sets notification internal (guid format) identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System set notification as read

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**|  | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2NotificationsReadPost"></a>
# **apiV2NotificationsReadPost**
> apiV2NotificationsReadPost()

Set all Notifications as read

    &lt;br&gt;Use case  &lt;br&gt;User runs method execution  &lt;br&gt;System set all notifications as read

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2NotificationsSearchPost"></a>
# **apiV2NotificationsSearchPost**
> List apiV2NotificationsSearchPost(Skip, Take, OrderBy, SearchField, SearchValue, NotificationQueryFilterModel)

Search Notifications for current User

    &lt;br&gt;Use case  &lt;br&gt;User set filter and runs method execution  &lt;br&gt;System returns notifications (listed in the response example)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **NotificationQueryFilterModel** | [**NotificationQueryFilterModel**](../Models/NotificationQueryFilterModel.md)|  | [optional] |

### Return type

[**List**](../Models/NotificationModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

