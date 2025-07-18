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
| [**apiV2ParametersSearchGroupsPost**](ParametersApi.md#apiV2ParametersSearchGroupsPost) | **POST** /api/v2/parameters/search/groups | Search for parameters as group |
| [**apiV2ParametersSearchPost**](ParametersApi.md#apiV2ParametersSearchPost) | **POST** /api/v2/parameters/search | Search for parameters |
| [**createParameter**](ParametersApi.md#createParameter) | **POST** /api/v2/parameters | Create parameter |
| [**deleteByName**](ParametersApi.md#deleteByName) | **DELETE** /api/v2/parameters/name/{name} | Delete parameter by name |
| [**deleteByParameterKeyId**](ParametersApi.md#deleteByParameterKeyId) | **DELETE** /api/v2/parameters/keyId/{keyId} | Delete parameters by parameter key identifier |
| [**deleteParameter**](ParametersApi.md#deleteParameter) | **DELETE** /api/v2/parameters/{id} | Delete parameter |
| [**getAllParameters**](ParametersApi.md#getAllParameters) | **GET** /api/v2/parameters | Get all parameters |
| [**getParameterById**](ParametersApi.md#getParameterById) | **GET** /api/v2/parameters/{id} | Get parameter by ID |
| [**updateParameter**](ParametersApi.md#updateParameter) | **PUT** /api/v2/parameters | Update parameter |


<a name="apiV2ParametersBulkPost"></a>
# **apiV2ParametersBulkPost**
> List apiV2ParametersBulkPost(CreateParameterApiModel)

Create multiple parameters

     Use case  User sets list of parameter model (listed in the request example)  User runs method execution  System creates parameters  System returns list of parameter model (listed in the response example)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **CreateParameterApiModel** | [**List**](../Models/CreateParameterApiModel.md)|  | [optional] |

### Return type

[**List**](../Models/ParameterApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ParametersBulkPut"></a>
# **apiV2ParametersBulkPut**
> apiV2ParametersBulkPut(UpdateParameterApiModel)

Update multiple parameters

     Use case  User sets list of parameter model (listed in the request example)  User runs method execution  System updates parameters

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **UpdateParameterApiModel** | [**List**](../Models/UpdateParameterApiModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ParametersGroupsGet"></a>
# **apiV2ParametersGroupsGet**
> List apiV2ParametersGroupsGet(parameterKeyIds, name, isDeleted, projectIds, Skip, Take, OrderBy, SearchField, SearchValue)

Get parameters as group

     Use case  User runs method execution  System search parameters  System returns parameters models as groups (listed in the response example)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **parameterKeyIds** | [**Set**](../Models/UUID.md)|  | [optional] [default to null] |
| **name** | **String**|  | [optional] [default to null] |
| **isDeleted** | **Boolean**|  | [optional] [default to null] |
| **projectIds** | [**List**](../Models/UUID.md)|  | [optional] [default to null] |
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |

### Return type

[**List**](../Models/ParameterGroupApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2ParametersKeyNameNameExistsGet"></a>
# **apiV2ParametersKeyNameNameExistsGet**
> Boolean apiV2ParametersKeyNameNameExistsGet(name)

Check existence parameter key in system

     Use case  User sets name of parameter key  User runs method execution  System search parameter key  System returns the flag for the existence of the parameter key in the system

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

     Use case  User sets parameter key (string format)  User runs method execution  System search parameter values using the key  System returns parameter

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
> List apiV2ParametersKeysGet(projectIds)

Get all parameter keys

     Use case  User runs method execution  System search all parameter keys  System returns parameter keys

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectIds** | [**List**](../Models/UUID.md)|  | [optional] [default to null] |

### Return type

**List**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2ParametersSearchGroupsPost"></a>
# **apiV2ParametersSearchGroupsPost**
> List apiV2ParametersSearchGroupsPost(Skip, Take, OrderBy, SearchField, SearchValue, ParameterGroupsFilterApiModel)

Search for parameters as group

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **ParameterGroupsFilterApiModel** | [**ParameterGroupsFilterApiModel**](../Models/ParameterGroupsFilterApiModel.md)|  | [optional] |

### Return type

[**List**](../Models/ParameterGroupApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ParametersSearchPost"></a>
# **apiV2ParametersSearchPost**
> List apiV2ParametersSearchPost(Skip, Take, OrderBy, SearchField, SearchValue, ParametersFilterApiModel)

Search for parameters

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **ParametersFilterApiModel** | [**ParametersFilterApiModel**](../Models/ParametersFilterApiModel.md)|  | [optional] |

### Return type

[**List**](../Models/ParameterApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createParameter"></a>
# **createParameter**
> ParameterApiResult createParameter(CreateParameterApiModel)

Create parameter

     Use case  User sets parameter model (listed in the request example)  User runs method execution  System creates parameter  System returns parameter model

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **CreateParameterApiModel** | [**CreateParameterApiModel**](../Models/CreateParameterApiModel.md)|  | [optional] |

### Return type

[**ParameterApiResult**](../Models/ParameterApiResult.md)

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
| **keyId** | **UUID**| Identifier of the parameter key | [default to null] |

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

     Use case  User sets parameter internal (guid format) identifier  System search and delete parameter  System returns deleted parameter

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
> List getAllParameters(isDeleted, Skip, Take, OrderBy, SearchField, SearchValue)

Get all parameters

     Use case  [Optional] User sets isDeleted field value  [Optional] If User sets isDeleted field value as true, System search all deleted parameters  [Optional] If User sets isDeleted field value as false, System search all parameters which are not deleted  If User did not set isDeleted field value, System search all parameters  System returns array of all found parameters(listed in response model)

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

[**List**](../Models/ParameterApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getParameterById"></a>
# **getParameterById**
> ParameterApiResult getParameterById(id)

Get parameter by ID

     Use case  User sets parameter internal (guid format) identifier  User runs method execution  System search parameter using the identifier  System returns parameter

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Parameter internal (UUID) identifier | [default to null] |

### Return type

[**ParameterApiResult**](../Models/ParameterApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateParameter"></a>
# **updateParameter**
> updateParameter(UpdateParameterApiModel)

Update parameter

     Use case  User sets parameter updated properties(listed in the request example)  User runs method execution  System updated parameter using updated properties  System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **UpdateParameterApiModel** | [**UpdateParameterApiModel**](../Models/UpdateParameterApiModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

