# ParametersApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2ParametersBulkPost**](ParametersApi.md#apiV2ParametersBulkPost) | **POST** /api/v2/parameters/bulk | Create multiple parameters |
| [**apiV2ParametersBulkPut**](ParametersApi.md#apiV2ParametersBulkPut) | **PUT** /api/v2/parameters/bulk | Update multiple parameters |
| [**apiV2ParametersGroupsGet**](ParametersApi.md#apiV2ParametersGroupsGet) | **GET** /api/v2/parameters/groups | Get parameters as group |
| [**apiV2ParametersKeyNameNameExistsGet**](ParametersApi.md#apiV2ParametersKeyNameNameExistsGet) | **GET** /api/v2/parameters/key/name/{name}/exists | Check existence parameter key in system |
| [**apiV2ParametersKeyValuesGet**](ParametersApi.md#apiV2ParametersKeyValuesGet) | **GET** /api/v2/parameters/{key}/values | Get all parameter key values |
| [**apiV2ParametersKeysGet**](ParametersApi.md#apiV2ParametersKeysGet) | **GET** /api/v2/parameters/keys | Get all parameter keys |
| [**apiV2ParametersSearchPost**](ParametersApi.md#apiV2ParametersSearchPost) | **POST** /api/v2/parameters/search | Search for parameters |
| [**createParameter**](ParametersApi.md#createParameter) | **POST** /api/v2/parameters | Create parameter |
| [**deleteByName**](ParametersApi.md#deleteByName) | **DELETE** /api/v2/parameters/name/{name} | Delete parameter by name |
| [**deleteByParameterKeyId**](ParametersApi.md#deleteByParameterKeyId) | **DELETE** /api/v2/parameters/keyId/{keyId} | Delete parameters by parameter key identifier |
| [**deleteParameter**](ParametersApi.md#deleteParameter) | **DELETE** /api/v2/parameters/{id} | Delete parameter |
| [**getAllParameters**](ParametersApi.md#getAllParameters) | **GET** /api/v2/parameters | Get all parameters |
| [**getParameterById**](ParametersApi.md#getParameterById) | **GET** /api/v2/parameters/{id} | Get parameter by ID |
| [**obsoleteDeleteByName**](ParametersApi.md#obsoleteDeleteByName) | **POST** /api/v2/parameters/deleteByName |  |
| [**updateParameter**](ParametersApi.md#updateParameter) | **PUT** /api/v2/parameters | Update parameter |


<a name="apiV2ParametersBulkPost"></a>
# **apiV2ParametersBulkPost**
> List apiV2ParametersBulkPost(ParameterPostModel)

Create multiple parameters

    &lt;br&gt;Use case  &lt;br&gt;User sets list of parameter model (listed in the request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System creates parameters  &lt;br&gt;System returns list of parameter model (listed in the response example)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ParameterPostModel** | [**List**](../Models/ParameterPostModel.md)|  | [optional] |

### Return type

[**List**](../Models/ParameterModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ParametersBulkPut"></a>
# **apiV2ParametersBulkPut**
> apiV2ParametersBulkPut(ParameterPutModel)

Update multiple parameters

    &lt;br&gt;Use case  &lt;br&gt;User sets list of parameter model (listed in the request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System updates parameters

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ParameterPutModel** | [**List**](../Models/ParameterPutModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ParametersGroupsGet"></a>
# **apiV2ParametersGroupsGet**
> List apiV2ParametersGroupsGet(isDeleted, parameterKeyIds, Skip, Take, OrderBy, SearchField, SearchValue)

Get parameters as group

    &lt;br&gt;Use case  &lt;br&gt;User runs method execution  &lt;br&gt;System search parameters  &lt;br&gt;System returns parameters models as groups (listed in the response example)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **isDeleted** | **Boolean**|  | [optional] [default to null] |
| **parameterKeyIds** | [**Set**](../Models/UUID.md)|  | [optional] [default to null] |
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |

### Return type

[**List**](../Models/ParameterGroupModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2ParametersKeyNameNameExistsGet"></a>
# **apiV2ParametersKeyNameNameExistsGet**
> Boolean apiV2ParametersKeyNameNameExistsGet(name)

Check existence parameter key in system

    &lt;br&gt;Use case  &lt;br&gt;User sets name of parameter key  &lt;br&gt;User runs method execution  &lt;br&gt;System search parameter key  &lt;br&gt;System returns the flag for the existence of the parameter key in the system

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **name** | **String**|  | [default to null] |

### Return type

**Boolean**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2ParametersKeyValuesGet"></a>
# **apiV2ParametersKeyValuesGet**
> List apiV2ParametersKeyValuesGet(key)

Get all parameter key values

    &lt;br&gt;Use case  &lt;br&gt;User sets parameter key (string format)  &lt;br&gt;User runs method execution  &lt;br&gt;System search parameter values using the key  &lt;br&gt;System returns parameter

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **key** | **String**| Parameter key (string format) | [default to null] |

### Return type

**List**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2ParametersKeysGet"></a>
# **apiV2ParametersKeysGet**
> List apiV2ParametersKeysGet()

Get all parameter keys

    &lt;br&gt;Use case  &lt;br&gt;User runs method execution  &lt;br&gt;System search all parameter keys  &lt;br&gt;System returns parameter keys

### Parameters
This endpoint does not need any parameter.

### Return type

**List**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2ParametersSearchPost"></a>
# **apiV2ParametersSearchPost**
> List apiV2ParametersSearchPost(Skip, Take, OrderBy, SearchField, SearchValue, ParameterFilterModel)

Search for parameters

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **ParameterFilterModel** | [**ParameterFilterModel**](../Models/ParameterFilterModel.md)|  | [optional] |

### Return type

[**List**](../Models/ParameterModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createParameter"></a>
# **createParameter**
> ParameterModel createParameter(ParameterPostModel)

Create parameter

    &lt;br&gt;Use case  &lt;br&gt;User sets parameter model (listed in the request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System creates parameter  &lt;br&gt;System returns parameter model

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ParameterPostModel** | [**ParameterPostModel**](../Models/ParameterPostModel.md)|  | [optional] |

### Return type

[**ParameterModel**](../Models/ParameterModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteByName"></a>
# **deleteByName**
> deleteByName(name)

Delete parameter by name

    Deletes parameter and all it&#39;s values

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **name** | **String**| Name of the parameter | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteByParameterKeyId"></a>
# **deleteByParameterKeyId**
> deleteByParameterKeyId(keyId)

Delete parameters by parameter key identifier

    Deletes parameter and all it&#39;s values by parameter key identifier

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **keyId** | **UUID**|  | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="deleteParameter"></a>
# **deleteParameter**
> deleteParameter(id)

Delete parameter

    &lt;br&gt;Use case  &lt;br&gt;User sets parameter internal (guid format) identifier  &lt;br&gt;System search and delete parameter  &lt;br&gt;System returns deleted parameter

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Parameter internal (UUID) identifier | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getAllParameters"></a>
# **getAllParameters**
> ParameterModel getAllParameters(isDeleted, Skip, Take, OrderBy, SearchField, SearchValue)

Get all parameters

    &lt;br&gt;Use case  &lt;br&gt;[Optional] User sets isDeleted field value  &lt;br&gt;[Optional] If User sets isDeleted field value as true, System search all deleted parameters  &lt;br&gt;[Optional] If User sets isDeleted field value as false, System search all parameters which are not deleted  &lt;br&gt;If User did not set isDeleted field value, System search all parameters  &lt;br&gt;System returns array of all found parameters(listed in response model)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **isDeleted** | **Boolean**| If result must consist of only actual/deleted parameters | [optional] [default to null] |
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |

### Return type

[**ParameterModel**](../Models/ParameterModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getParameterById"></a>
# **getParameterById**
> ParameterModel getParameterById(id)

Get parameter by ID

    &lt;br&gt;Use case  &lt;br&gt;User sets parameter internal (guid format) identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System search parameter using the identifier  &lt;br&gt;System returns parameter

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Parameter internal (UUID) identifier | [default to null] |

### Return type

[**ParameterModel**](../Models/ParameterModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="obsoleteDeleteByName"></a>
# **obsoleteDeleteByName**
> obsoleteDeleteByName(name)



### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **name** | **String**|  | [optional] [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="updateParameter"></a>
# **updateParameter**
> updateParameter(ParameterPutModel)

Update parameter

    &lt;br&gt;Use case  &lt;br&gt;User sets parameter updated properties(listed in the request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System updated parameter using updated properties  &lt;br&gt;System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ParameterPutModel** | [**ParameterPutModel**](../Models/ParameterPutModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

