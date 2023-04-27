# SectionsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2SectionsIdPatch**](SectionsApi.md#apiV2SectionsIdPatch) | **PATCH** /api/v2/sections/{id} | Patch section |
| [**createSection**](SectionsApi.md#createSection) | **POST** /api/v2/sections | Create section |
| [**deleteSection**](SectionsApi.md#deleteSection) | **DELETE** /api/v2/sections/{id} | Delete section |
| [**getSectionById**](SectionsApi.md#getSectionById) | **GET** /api/v2/sections/{id} | Get section |
| [**getWorkItemsBySectionId**](SectionsApi.md#getWorkItemsBySectionId) | **GET** /api/v2/sections/{id}/workItems | Get section work items |
| [**move**](SectionsApi.md#move) | **POST** /api/v2/sections/move | Move section with all work items into another section |
| [**rename**](SectionsApi.md#rename) | **POST** /api/v2/sections/rename | Rename section |
| [**updateSection**](SectionsApi.md#updateSection) | **PUT** /api/v2/sections | Update section |


<a name="apiV2SectionsIdPatch"></a>
# **apiV2SectionsIdPatch**
> apiV2SectionsIdPatch(id, Operation)

Patch section

    See &lt;a href&#x3D;\&quot;https://www.rfc-editor.org/rfc/rfc6902\&quot; target&#x3D;\&quot;_blank\&quot;&gt;RFC 6902: JavaScript Object Notation (JSON) Patch&lt;/a&gt; for details

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Section internal (UUID) identifier | [default to null] |
| **Operation** | [**List**](../Models/Operation.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createSection"></a>
# **createSection**
> SectionWithStepsModel createSection(SectionPostModel)

Create section

    &lt;br&gt;Use case  &lt;br&gt;User sets section properties (listed in request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System creates section property values  &lt;br&gt;System returns section (listed in response example)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **SectionPostModel** | [**SectionPostModel**](../Models/SectionPostModel.md)|  | [optional] |

### Return type

[**SectionWithStepsModel**](../Models/SectionWithStepsModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteSection"></a>
# **deleteSection**
> deleteSection(id)

Delete section

    &lt;br&gt;Use case  &lt;br&gt;User sets section identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System search section by the identifier  &lt;br&gt;System search and delete nested sections of the found section  &lt;br&gt;System search and delete workitems related to the found nested sections  &lt;br&gt;System deletes initial section and related workitem  &lt;br&gt;System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Section internal (UUID) identifier | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getSectionById"></a>
# **getSectionById**
> SectionWithStepsModel getSectionById(id, isDeleted)

Get section

    &lt;br&gt;Use case  &lt;br&gt;User sets section internal (guid format) identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System search section by the section identifier  &lt;br&gt;              [Optional] If isDeleted flag equals false, deleted work items are not being searched.              If true, deleted work items are also being searched, null for all work items.                &lt;br&gt;System returns section

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Section internal (UUID) identifier | [default to null] |
| **isDeleted** | [**DeletionState**](../Models/.md)|  | [optional] [default to null] [enum: Any, Deleted, NotDeleted] |

### Return type

[**SectionWithStepsModel**](../Models/SectionWithStepsModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getWorkItemsBySectionId"></a>
# **getWorkItemsBySectionId**
> List getWorkItemsBySectionId(id, isDeleted, tagNames, includeIterations, Skip, Take, OrderBy, SearchField, SearchValue)

Get section work items

    &lt;br&gt;Use case  &lt;br&gt;User sets section identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System search section by the identifier  &lt;br&gt;System search work items related to the section  &lt;br&gt;              [Optional] If isDeleted flag equals false, deleted work items are not being searched.              If true, deleted work items are also being searched, null for all work items.                &lt;br&gt;System returns work item collection

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Section internal (UUID) identifier | [default to null] |
| **isDeleted** | **Boolean**| Requested section is deleted | [optional] [default to false] |
| **tagNames** | [**List**](../Models/String.md)| List of work item tags | [optional] [default to null] |
| **includeIterations** | **Boolean**|  | [optional] [default to true] |
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |

### Return type

[**List**](../Models/WorkItemShortModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="move"></a>
# **move**
> move(SectionMoveModel)

Move section with all work items into another section

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **SectionMoveModel** | [**SectionMoveModel**](../Models/SectionMoveModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="rename"></a>
# **rename**
> rename(SectionRenameModel)

Rename section

    &lt;br&gt;Use case  &lt;br&gt;User sets section identifier and new name (listed in request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System search section by the identifier  &lt;br&gt;System updates section name using the new name  &lt;br&gt;System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **SectionRenameModel** | [**SectionRenameModel**](../Models/SectionRenameModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="updateSection"></a>
# **updateSection**
> updateSection(SectionPutModel)

Update section

    &lt;br&gt;Use case  &lt;br&gt;User sets section properties (listed in request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System search section by the identifier  &lt;br&gt;System updates section using the property values  &lt;br&gt;System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **SectionPutModel** | [**SectionPutModel**](../Models/SectionPutModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

