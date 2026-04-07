# TestitApiClient.UserRoleAssignmentsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2UsersUserIdRolesRoleIdDelete**](UserRoleAssignmentsApi.md#apiV2UsersUserIdRolesRoleIdDelete) | **DELETE** /api/v2/users/{userId}/roles/{roleId} | 
[**apiV2UsersUserIdRolesRoleIdPost**](UserRoleAssignmentsApi.md#apiV2UsersUserIdRolesRoleIdPost) | **POST** /api/v2/users/{userId}/roles/{roleId} | 



## apiV2UsersUserIdRolesRoleIdDelete

> apiV2UsersUserIdRolesRoleIdDelete(userId, roleId)



### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.UserRoleAssignmentsApi();
let userId = "userId_example"; // String | 
let roleId = "roleId_example"; // String | 
apiInstance.apiV2UsersUserIdRolesRoleIdDelete(userId, roleId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **roleId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV2UsersUserIdRolesRoleIdPost

> apiV2UsersUserIdRolesRoleIdPost(userId, roleId)



### Example

```javascript
import TestitApiClient from 'testit-api-client';
let defaultClient = TestitApiClient.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new TestitApiClient.UserRoleAssignmentsApi();
let userId = "userId_example"; // String | 
let roleId = "roleId_example"; // String | 
apiInstance.apiV2UsersUserIdRolesRoleIdPost(userId, roleId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **roleId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

