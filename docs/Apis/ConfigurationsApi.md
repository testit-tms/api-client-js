# ConfigurationsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2ConfigurationsCreateByParametersPost**](ConfigurationsApi.md#apiV2ConfigurationsCreateByParametersPost) | **POST** /api/v2/configurations/createByParameters | Create Configurations by parameters |
| [**apiV2ConfigurationsSearchPost**](ConfigurationsApi.md#apiV2ConfigurationsSearchPost) | **POST** /api/v2/configurations/search | Search for configurations |
| [**createConfiguration**](ConfigurationsApi.md#createConfiguration) | **POST** /api/v2/configurations | Create Configuration |
| [**getConfigurationById**](ConfigurationsApi.md#getConfigurationById) | **GET** /api/v2/configurations/{id} | Get configuration by internal or global ID |
| [**updateConfiguration**](ConfigurationsApi.md#updateConfiguration) | **PUT** /api/v2/configurations | Update Configuration |


<a name="apiV2ConfigurationsCreateByParametersPost"></a>
# **apiV2ConfigurationsCreateByParametersPost**
> apiV2ConfigurationsCreateByParametersPost(ConfigurationByParametersModel)

Create Configurations by parameters

    &lt;br&gt;Use case  &lt;br&gt;User sets request model (listed in the request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System creates configurations  &lt;br&gt;System returns created configuration ids (listed in the response example)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ConfigurationByParametersModel** | [**ConfigurationByParametersModel**](../Models/ConfigurationByParametersModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ConfigurationsSearchPost"></a>
# **apiV2ConfigurationsSearchPost**
> List apiV2ConfigurationsSearchPost(Skip, Take, OrderBy, SearchField, SearchValue, ConfigurationSelectModel)

Search for configurations

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **ConfigurationSelectModel** | [**ConfigurationSelectModel**](../Models/ConfigurationSelectModel.md)| Model containing all the filters | [optional] |

### Return type

[**List**](../Models/ConfigurationModel.md)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createConfiguration"></a>
# **createConfiguration**
> ConfigurationModel createConfiguration(ConfigurationPostModel)

Create Configuration

    &lt;br&gt;Use case  &lt;br&gt;User sets configuration model (listed in the request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System creates configuration  &lt;br&gt;System returns created configuration (listed in the response example)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ConfigurationPostModel** | [**ConfigurationPostModel**](../Models/ConfigurationPostModel.md)|  | [optional] |

### Return type

[**ConfigurationModel**](../Models/ConfigurationModel.md)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

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
| **id** | **String**|  | [default to null] |

### Return type

[**ConfigurationModel**](../Models/ConfigurationModel.md)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="updateConfiguration"></a>
# **updateConfiguration**
> updateConfiguration(ConfigurationPutModel)

Update Configuration

    &lt;br&gt;Use case  &lt;br&gt;User sets configuration updated properties(listed in the request example)  &lt;br&gt;User runs method execution  &lt;br&gt;System updated configuration using updated properties  &lt;br&gt;System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **ConfigurationPutModel** | [**ConfigurationPutModel**](../Models/ConfigurationPutModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

#### Bearer or PrivateToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

