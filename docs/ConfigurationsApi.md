# ConfigurationsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2ConfigurationsCreateByParametersPost**](ConfigurationsApi.md#apiV2ConfigurationsCreateByParametersPost) | **POST** /api/v2/configurations/createByParameters | Create configurations by parameters |
| [**apiV2ConfigurationsDeleteBulkPost**](ConfigurationsApi.md#apiV2ConfigurationsDeleteBulkPost) | **POST** /api/v2/configurations/delete/bulk | Delete multiple configurations |
| [**apiV2ConfigurationsIdDelete**](ConfigurationsApi.md#apiV2ConfigurationsIdDelete) | **DELETE** /api/v2/configurations/{id} | Delete configuration |
| [**apiV2ConfigurationsIdPatch**](ConfigurationsApi.md#apiV2ConfigurationsIdPatch) | **PATCH** /api/v2/configurations/{id} | Patch configuration |
| [**apiV2ConfigurationsIdPurgePost**](ConfigurationsApi.md#apiV2ConfigurationsIdPurgePost) | **POST** /api/v2/configurations/{id}/purge | Permanently delete configuration from archive |
| [**apiV2ConfigurationsIdRestorePost**](ConfigurationsApi.md#apiV2ConfigurationsIdRestorePost) | **POST** /api/v2/configurations/{id}/restore | Restore configuration from the archive |
| [**apiV2ConfigurationsPurgeBulkPost**](ConfigurationsApi.md#apiV2ConfigurationsPurgeBulkPost) | **POST** /api/v2/configurations/purge/bulk | Permanently delete multiple archived configurations |
| [**apiV2ConfigurationsPut**](ConfigurationsApi.md#apiV2ConfigurationsPut) | **PUT** /api/v2/configurations | Edit configuration |
| [**apiV2ConfigurationsRestoreBulkPost**](ConfigurationsApi.md#apiV2ConfigurationsRestoreBulkPost) | **POST** /api/v2/configurations/restore/bulk | Restore multiple configurations from the archive |
| [**apiV2ConfigurationsSearchPost**](ConfigurationsApi.md#apiV2ConfigurationsSearchPost) | **POST** /api/v2/configurations/search | Search for configurations |
| [**createConfiguration**](ConfigurationsApi.md#createConfiguration) | **POST** /api/v2/configurations | Create Configuration |
| [**getConfigurationById**](ConfigurationsApi.md#getConfigurationById) | **GET** /api/v2/configurations/{id} | Get configuration by internal or global ID |


<a name="apiV2ConfigurationsCreateByParametersPost"></a>
# **apiV2ConfigurationsCreateByParametersPost**
> List apiV2ConfigurationsCreateByParametersPost(\_api\_v2\_configurations\_createByParameters\_post\_request)

Create configurations by parameters

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **\_api\_v2\_configurations\_createByParameters\_post\_request** | [**_api_v2_configurations_createByParameters_post_request**](../Models/_api_v2_configurations_createByParameters_post_request.md)|  | [optional] |

### Return type

**List**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ConfigurationsDeleteBulkPost"></a>
# **apiV2ConfigurationsDeleteBulkPost**
> Integer apiV2ConfigurationsDeleteBulkPost(\_api\_v2\_configurations\_purge\_bulk\_post\_request)

Delete multiple configurations

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **\_api\_v2\_configurations\_purge\_bulk\_post\_request** | [**_api_v2_configurations_purge_bulk_post_request**](../Models/_api_v2_configurations_purge_bulk_post_request.md)|  | [optional] |

### Return type

**Integer**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ConfigurationsIdDelete"></a>
# **apiV2ConfigurationsIdDelete**
> apiV2ConfigurationsIdDelete(id)

Delete configuration

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Unique or global ID of the configuration | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2ConfigurationsIdPatch"></a>
# **apiV2ConfigurationsIdPatch**
> apiV2ConfigurationsIdPatch(id, Operation)

Patch configuration

    See &lt;a href&#x3D;\&quot;https://www.rfc-editor.org/rfc/rfc6902\&quot; target&#x3D;\&quot;_blank\&quot;&gt;RFC 6902: JavaScript Object Notation (JSON) Patch&lt;/a&gt; for details

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Unique ID of the configuration | [default to null] |
| **Operation** | [**List**](../Models/Operation.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ConfigurationsIdPurgePost"></a>
# **apiV2ConfigurationsIdPurgePost**
> apiV2ConfigurationsIdPurgePost(id)

Permanently delete configuration from archive

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Unique or global ID of the configuration | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2ConfigurationsIdRestorePost"></a>
# **apiV2ConfigurationsIdRestorePost**
> apiV2ConfigurationsIdRestorePost(id)

Restore configuration from the archive

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Unique or global ID of the configuration | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2ConfigurationsPurgeBulkPost"></a>
# **apiV2ConfigurationsPurgeBulkPost**
> apiV2ConfigurationsPurgeBulkPost(\_api\_v2\_configurations\_purge\_bulk\_post\_request)

Permanently delete multiple archived configurations

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **\_api\_v2\_configurations\_purge\_bulk\_post\_request** | [**_api_v2_configurations_purge_bulk_post_request**](../Models/_api_v2_configurations_purge_bulk_post_request.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ConfigurationsPut"></a>
# **apiV2ConfigurationsPut**
> apiV2ConfigurationsPut(\_api\_v2\_configurations\_put\_request)

Edit configuration

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **\_api\_v2\_configurations\_put\_request** | [**_api_v2_configurations_put_request**](../Models/_api_v2_configurations_put_request.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ConfigurationsRestoreBulkPost"></a>
# **apiV2ConfigurationsRestoreBulkPost**
> Integer apiV2ConfigurationsRestoreBulkPost(\_api\_v2\_configurations\_purge\_bulk\_post\_request)

Restore multiple configurations from the archive

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **\_api\_v2\_configurations\_purge\_bulk\_post\_request** | [**_api_v2_configurations_purge_bulk_post_request**](../Models/_api_v2_configurations_purge_bulk_post_request.md)|  | [optional] |

### Return type

**Integer**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ConfigurationsSearchPost"></a>
# **apiV2ConfigurationsSearchPost**
> List apiV2ConfigurationsSearchPost(Skip, Take, OrderBy, SearchField, SearchValue, \_api\_v2\_configurations\_search\_post\_request)

Search for configurations

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **\_api\_v2\_configurations\_search\_post\_request** | [**_api_v2_configurations_search_post_request**](../Models/_api_v2_configurations_search_post_request.md)| Model containing all the filters | [optional] |

### Return type

[**List**](../Models/ConfigurationModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createConfiguration"></a>
# **createConfiguration**
> ConfigurationModel createConfiguration(CreateConfiguration\_request)

Create Configuration

    &lt;br&gt;Use case  &lt;br&gt;User sets configuration model (listed in the request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System creates configuration  &lt;br&gt;System returns created configuration (listed in the response example)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **CreateConfiguration\_request** | [**CreateConfiguration_request**](../Models/CreateConfiguration_request.md)|  | [optional] |

### Return type

[**ConfigurationModel**](../Models/ConfigurationModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getConfigurationById"></a>
# **getConfigurationById**
> ConfigurationModel getConfigurationById(id)

Get configuration by internal or global ID

    &lt;br&gt;Use case  &lt;br&gt;User sets configuration internal (guid format) or global (integer format) identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System search configuration using the identifier  &lt;br&gt;System returns configuration

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| Configuration internal (guid format) or global (integer format) identifier | [default to null] |

### Return type

[**ConfigurationModel**](../Models/ConfigurationModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

