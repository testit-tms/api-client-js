# testit_api_client.SectionsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSection**](SectionsApi.md#createSection) | **POST** /api/v2/sections | Create section
[**deleteSection**](SectionsApi.md#deleteSection) | **DELETE** /api/v2/sections/{id} | Delete section
[**getSectionById**](SectionsApi.md#getSectionById) | **GET** /api/v2/sections/{id} | Get section
[**getWorkItemsBySectionId**](SectionsApi.md#getWorkItemsBySectionId) | **GET** /api/v2/sections/{id}/workItems | Get section work items
[**move**](SectionsApi.md#move) | **POST** /api/v2/sections/move | Move section
[**rename**](SectionsApi.md#rename) | **POST** /api/v2/sections/rename | Rename section
[**updateSection**](SectionsApi.md#updateSection) | **PUT** /api/v2/sections | Update section



## createSection

> SectionWithStepsModel createSection(opts)

Create section

&lt;br&gt;Use case  &lt;br&gt;User sets section properties (listed in request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System creates section property values  &lt;br&gt;System returns section (listed in response example)

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.SectionsApi();
let opts = {
  'sectionPostModel': new testit_api_client.SectionPostModel() // SectionPostModel | 
};
apiInstance.createSection(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sectionPostModel** | [**SectionPostModel**](SectionPostModel.md)|  | [optional] 

### Return type

[**SectionWithStepsModel**](SectionWithStepsModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteSection

> deleteSection(id)

Delete section

&lt;br&gt;Use case  &lt;br&gt;User sets section identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System search section by the identifier  &lt;br&gt;System search and delete nested sections of the found section  &lt;br&gt;System search and delete workitems related to the found nested sections  &lt;br&gt;System deletes initial section and related workitem  &lt;br&gt;System returns no content response

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.SectionsApi();
let id = "id_example"; // String | Section internal (UUID) identifier
apiInstance.deleteSection(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Section internal (UUID) identifier | 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSectionById

> SectionWithStepsModel getSectionById(id, opts)

Get section

&lt;br&gt;Use case  &lt;br&gt;User sets section internal (guid format) identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System search section by the section identifier  &lt;br&gt;              [Optional] If isDeleted flag equals false, deleted work items are not being searched.              If true, deleted work items are also being searched, null for all work items.                &lt;br&gt;System returns section

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.SectionsApi();
let id = "id_example"; // String | Section internal (UUID) identifier
let opts = {
  'isDeleted': false // Boolean | Requested section is deleted
};
apiInstance.getSectionById(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Section internal (UUID) identifier | 
 **isDeleted** | **Boolean**| Requested section is deleted | [optional] [default to false]

### Return type

[**SectionWithStepsModel**](SectionWithStepsModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWorkItemsBySectionId

> [WorkItemShortModel] getWorkItemsBySectionId(id, opts)

Get section work items

&lt;br&gt;Use case  &lt;br&gt;User sets section identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System search section by the identifier  &lt;br&gt;System search work items related to the section  &lt;br&gt;              [Optional] If isDeleted flag equals false, deleted work items are not being searched.              If true, deleted work items are also being searched, null for all work items.                &lt;br&gt;System returns work item collection

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.SectionsApi();
let id = "id_example"; // String | Section internal (UUID) identifier
let opts = {
  'isDeleted': false, // Boolean | Requested section is deleted
  'tagNames': ["null"], // [String] | List of work item tags
  'includeIterations': true, // Boolean | 
  'skip': 56, // Number | Amount of items to be skipped (offset)
  'take': 56, // Number | Amount of items to be taken (limit)
  'orderBy': "orderBy_example", // String | SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
  'searchField': "searchField_example", // String | Property name for searching
  'searchValue': "searchValue_example" // String | Value for searching
};
apiInstance.getWorkItemsBySectionId(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Section internal (UUID) identifier | 
 **isDeleted** | **Boolean**| Requested section is deleted | [optional] [default to false]
 **tagNames** | [**[String]**](String.md)| List of work item tags | [optional] 
 **includeIterations** | **Boolean**|  | [optional] [default to true]
 **skip** | **Number**| Amount of items to be skipped (offset) | [optional] 
 **take** | **Number**| Amount of items to be taken (limit) | [optional] 
 **orderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] 
 **searchField** | **String**| Property name for searching | [optional] 
 **searchValue** | **String**| Value for searching | [optional] 

### Return type

[**[WorkItemShortModel]**](WorkItemShortModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## move

> move(opts)

Move section

&lt;br&gt;Can be moved inside another section. It is possible to indicate a project  &lt;br&gt;Use case  &lt;br&gt;User sets section identifier, old parent identifier, parent identifier and  next section identifier (listed in request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System search section by the identifier  &lt;br&gt;System unlink section from the old parent and links to the new one  &lt;br&gt;System updates section rank using the next section identifier  &lt;br&gt;System returns no content response

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.SectionsApi();
let opts = {
  'sectionMoveModel': new testit_api_client.SectionMoveModel() // SectionMoveModel | 
};
apiInstance.move(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sectionMoveModel** | [**SectionMoveModel**](SectionMoveModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## rename

> rename(opts)

Rename section

&lt;br&gt;Use case  &lt;br&gt;User sets section identifier and new name (listed in request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System search section by the identifier  &lt;br&gt;System updates section name using the new name  &lt;br&gt;System returns no content response

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.SectionsApi();
let opts = {
  'sectionRenameModel': new testit_api_client.SectionRenameModel() // SectionRenameModel | 
};
apiInstance.rename(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sectionRenameModel** | [**SectionRenameModel**](SectionRenameModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateSection

> updateSection(opts)

Update section

&lt;br&gt;Use case  &lt;br&gt;User sets section properties (listed in request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System search section by the identifier  &lt;br&gt;System updates section using the property values  &lt;br&gt;System returns no content response

### Example

```javascript
import testit_api_client from 'testit-api-client';
let defaultClient = testit_api_client.ApiClient.instance;
// Configure API key authorization: Bearer or PrivateToken
let Bearer or PrivateToken = defaultClient.authentications['Bearer or PrivateToken'];
Bearer or PrivateToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer or PrivateToken.apiKeyPrefix = 'Token';

let apiInstance = new testit_api_client.SectionsApi();
let opts = {
  'sectionPutModel': new testit_api_client.SectionPutModel() // SectionPutModel | 
};
apiInstance.updateSection(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sectionPutModel** | [**SectionPutModel**](SectionPutModel.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

