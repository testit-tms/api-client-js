# TestSuitesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addTestPointsToTestSuite**](TestSuitesApi.md#addTestPointsToTestSuite) | **POST** /api/v2/testSuites/{id}/test-points | Add test-points to test suite |
| [**apiV2TestSuitesIdPatch**](TestSuitesApi.md#apiV2TestSuitesIdPatch) | **PATCH** /api/v2/testSuites/{id} | Patch test suite |
| [**apiV2TestSuitesIdRefreshPost**](TestSuitesApi.md#apiV2TestSuitesIdRefreshPost) | **POST** /api/v2/testSuites/{id}/refresh | Refresh test suite. Only dynamic test suites are supported by this method |
| [**apiV2TestSuitesIdWorkItemsPost**](TestSuitesApi.md#apiV2TestSuitesIdWorkItemsPost) | **POST** /api/v2/testSuites/{id}/workItems | Set work items for test suite |
| [**apiV2TestSuitesPost**](TestSuitesApi.md#apiV2TestSuitesPost) | **POST** /api/v2/testSuites | Create test suite |
| [**apiV2TestSuitesPut**](TestSuitesApi.md#apiV2TestSuitesPut) | **PUT** /api/v2/testSuites | Edit test suite |
| [**deleteTestSuite**](TestSuitesApi.md#deleteTestSuite) | **DELETE** /api/v2/testSuites/{id} | Delete TestSuite |
| [**getConfigurationsByTestSuiteId**](TestSuitesApi.md#getConfigurationsByTestSuiteId) | **GET** /api/v2/testSuites/{id}/configurations | Get Configurations By Id |
| [**getTestPointsById**](TestSuitesApi.md#getTestPointsById) | **GET** /api/v2/testSuites/{id}/testPoints | Get TestPoints By Id |
| [**getTestResultsById**](TestSuitesApi.md#getTestResultsById) | **GET** /api/v2/testSuites/{id}/testResults | Get TestResults By Id |
| [**getTestSuiteById**](TestSuitesApi.md#getTestSuiteById) | **GET** /api/v2/testSuites/{id} | Get TestSuite by Id |
| [**searchWorkItems**](TestSuitesApi.md#searchWorkItems) | **POST** /api/v2/testSuites/{id}/workItems/search | Search WorkItems |
| [**setConfigurationsByTestSuiteId**](TestSuitesApi.md#setConfigurationsByTestSuiteId) | **POST** /api/v2/testSuites/{id}/configurations | Set Configurations By TestSuite Id |


<a name="addTestPointsToTestSuite"></a>
# **addTestPointsToTestSuite**
> addTestPointsToTestSuite(id, \_api\_v2\_projects\_\_id\_\_workItems\_search\_post\_request)

Add test-points to test suite

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test suite internal identifier | [default to null] |
| **\_api\_v2\_projects\_\_id\_\_workItems\_search\_post\_request** | [**_api_v2_projects__id__workItems_search_post_request**](../Models/_api_v2_projects__id__workItems_search_post_request.md)| Filter object to retrieve work items for test-suite&#39;s project | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2TestSuitesIdPatch"></a>
# **apiV2TestSuitesIdPatch**
> apiV2TestSuitesIdPatch(id, Operation)

Patch test suite

    See &lt;a href&#x3D;\&quot;https://www.rfc-editor.org/rfc/rfc6902\&quot; target&#x3D;\&quot;_blank\&quot;&gt;RFC 6902: JavaScript Object Notation (JSON) Patch&lt;/a&gt; for details

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test Suite internal (UUID) identifier | [default to null] |
| **Operation** | [**List**](../Models/Operation.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2TestSuitesIdRefreshPost"></a>
# **apiV2TestSuitesIdRefreshPost**
> apiV2TestSuitesIdRefreshPost(id)

Refresh test suite. Only dynamic test suites are supported by this method

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test Suite internal (UUID) identifier | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2TestSuitesIdWorkItemsPost"></a>
# **apiV2TestSuitesIdWorkItemsPost**
> apiV2TestSuitesIdWorkItemsPost(id, request\_body)

Set work items for test suite

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Unique ID of the test suite | [default to null] |
| **request\_body** | [**Set**](../Models/UUID.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2TestSuitesPost"></a>
# **apiV2TestSuitesPost**
> TestSuiteV2GetModel apiV2TestSuitesPost(\_api\_v2\_testSuites\_post\_request)

Create test suite

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **\_api\_v2\_testSuites\_post\_request** | [**_api_v2_testSuites_post_request**](../Models/_api_v2_testSuites_post_request.md)|  | [optional] |

### Return type

[**TestSuiteV2GetModel**](../Models/TestSuiteV2GetModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2TestSuitesPut"></a>
# **apiV2TestSuitesPut**
> apiV2TestSuitesPut(\_api\_v2\_testSuites\_put\_request)

Edit test suite

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **\_api\_v2\_testSuites\_put\_request** | [**_api_v2_testSuites_put_request**](../Models/_api_v2_testSuites_put_request.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="deleteTestSuite"></a>
# **deleteTestSuite**
> deleteTestSuite(id)

Delete TestSuite

    &lt;br&gt;Use case  &lt;br&gt;User sets test suite identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System search test suite by identifier  &lt;br&gt;System deletes test suite  &lt;br&gt;System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test suite internal (guid format) identifier\&quot; | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getConfigurationsByTestSuiteId"></a>
# **getConfigurationsByTestSuiteId**
> List getConfigurationsByTestSuiteId(id)

Get Configurations By Id

    &lt;br&gt;Use case  &lt;br&gt;User sets test suite identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System search test suite by identifier  &lt;br&gt;System search test points related to the test suite  &lt;br&gt;System search configurations related to the test points  &lt;br&gt;System returns configurations array

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test suite internal (guid format) identifier\&quot; | [default to null] |

### Return type

[**List**](../Models/ConfigurationModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTestPointsById"></a>
# **getTestPointsById**
> List getTestPointsById(id)

Get TestPoints By Id

    &lt;br&gt;Use case  &lt;br&gt;User sets test suite identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System search test suite by identifier  &lt;br&gt;System search test points related to the test suite  &lt;br&gt;System returns test points array

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test suite internal (guid format) identifier\&quot; | [default to null] |

### Return type

[**List**](../Models/TestPointByTestSuiteModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTestResultsById"></a>
# **getTestResultsById**
> List getTestResultsById(id)

Get TestResults By Id

    &lt;br&gt;Use case  &lt;br&gt;User sets test suite identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System search test suite by identifier  &lt;br&gt;System search test points related to the test suite  &lt;br&gt;System search test results related to the test points  &lt;br&gt;System returns test results array

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test suite internal (guid format) identifier\&quot; | [default to null] |

### Return type

[**List**](../Models/TestResultV2ShortModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTestSuiteById"></a>
# **getTestSuiteById**
> TestSuiteV2GetModel getTestSuiteById(id)

Get TestSuite by Id

    &lt;br&gt;Use case  &lt;br&gt;User sets test suite identifier  &lt;br&gt;User runs method execution  &lt;br&gt;System search test suite by identifier  &lt;br&gt;System returns test suite

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test suite internal (guid format) identifier\&quot; | [default to null] |

### Return type

[**TestSuiteV2GetModel**](../Models/TestSuiteV2GetModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="searchWorkItems"></a>
# **searchWorkItems**
> List searchWorkItems(id, Skip, Take, OrderBy, SearchField, SearchValue, SearchWorkItems\_request)

Search WorkItems

    &lt;br&gt;Use case  &lt;br&gt;User sets test suite identifier  &lt;br&gt;[Optional] User sets filter  &lt;br&gt;User runs method execution  &lt;br&gt;System search test suite by identifier  &lt;br&gt;System search test points related to the test suite  &lt;br&gt;System search work items related to the test points  &lt;br&gt;                      [Optional] User sets filter, system applies filter                    &lt;br&gt;System returns work items array

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test suite internal (guid format) identifier\&quot; | [default to null] |
| **Skip** | **Integer**| Amount of items to be skipped (offset) | [optional] [default to null] |
| **Take** | **Integer**| Amount of items to be taken (limit) | [optional] [default to null] |
| **OrderBy** | **String**| SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC) | [optional] [default to null] |
| **SearchField** | **String**| Property name for searching | [optional] [default to null] |
| **SearchValue** | **String**| Value for searching | [optional] [default to null] |
| **SearchWorkItems\_request** | [**SearchWorkItems_request**](../Models/SearchWorkItems_request.md)|  | [optional] |

### Return type

[**List**](../Models/WorkItemShortModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="setConfigurationsByTestSuiteId"></a>
# **setConfigurationsByTestSuiteId**
> setConfigurationsByTestSuiteId(id, request\_body)

Set Configurations By TestSuite Id

    &lt;br&gt;Use case  &lt;br&gt;User sets test suite identifier  &lt;br&gt;User sets collection of configuration identifiers  &lt;br&gt;User runs method execution  &lt;br&gt;System search test suite by identifier  &lt;br&gt;System search test points related to the test suite  &lt;br&gt;System search configuration  &lt;br&gt;System restores(if exist) or creates test points with listed configuration  &lt;br&gt;System returns no content response

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**| Test suite internal (guid format) identifier\&quot; | [default to null] |
| **request\_body** | [**Set**](../Models/UUID.md)| Collection of configuration identifiers\&quot; | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

