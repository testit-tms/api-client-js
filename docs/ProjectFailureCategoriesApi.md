# ProjectFailureCategoriesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2ProjectsProjectIdAutotestsFailureCategoriesGroupingSearchPost**](ProjectFailureCategoriesApi.md#apiV2ProjectsProjectIdAutotestsFailureCategoriesGroupingSearchPost) | **POST** /api/v2/projects/{projectId}/autotests/failure-categories/grouping-search | Get failure categories with support for filtering, sorting and grouping |
| [**apiV2ProjectsProjectIdAutotestsFailureCategoriesIdDelete**](ProjectFailureCategoriesApi.md#apiV2ProjectsProjectIdAutotestsFailureCategoriesIdDelete) | **DELETE** /api/v2/projects/{projectId}/autotests/failure-categories/{id} | Delete failure category |
| [**apiV2ProjectsProjectIdAutotestsFailureCategoriesIdGet**](ProjectFailureCategoriesApi.md#apiV2ProjectsProjectIdAutotestsFailureCategoriesIdGet) | **GET** /api/v2/projects/{projectId}/autotests/failure-categories/{id} | Get failure category by ID |
| [**apiV2ProjectsProjectIdAutotestsFailureCategoriesPost**](ProjectFailureCategoriesApi.md#apiV2ProjectsProjectIdAutotestsFailureCategoriesPost) | **POST** /api/v2/projects/{projectId}/autotests/failure-categories | Create failure category |
| [**apiV2ProjectsProjectIdAutotestsFailureCategoriesPut**](ProjectFailureCategoriesApi.md#apiV2ProjectsProjectIdAutotestsFailureCategoriesPut) | **PUT** /api/v2/projects/{projectId}/autotests/failure-categories | Update failure category |


<a name="apiV2ProjectsProjectIdAutotestsFailureCategoriesGroupingSearchPost"></a>
# **apiV2ProjectsProjectIdAutotestsFailureCategoriesGroupingSearchPost**
> ProjectFailureCategoryGroupItemApiResultReply apiV2ProjectsProjectIdAutotestsFailureCategoriesGroupingSearchPost(projectId, AutoTestResultReasonGroupSearchApiModel)

Get failure categories with support for filtering, sorting and grouping

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**|  | [default to null] |
| **AutoTestResultReasonGroupSearchApiModel** | [**AutoTestResultReasonGroupSearchApiModel**](../Models/AutoTestResultReasonGroupSearchApiModel.md)|  | [optional] |

### Return type

[**ProjectFailureCategoryGroupItemApiResultReply**](../Models/ProjectFailureCategoryGroupItemApiResultReply.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ProjectsProjectIdAutotestsFailureCategoriesIdDelete"></a>
# **apiV2ProjectsProjectIdAutotestsFailureCategoriesIdDelete**
> apiV2ProjectsProjectIdAutotestsFailureCategoriesIdDelete(projectId, id)

Delete failure category

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**|  | [default to null] |
| **id** | **UUID**|  | [default to null] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2ProjectsProjectIdAutotestsFailureCategoriesIdGet"></a>
# **apiV2ProjectsProjectIdAutotestsFailureCategoriesIdGet**
> ProjectDetailedFailureCategoryApiResult apiV2ProjectsProjectIdAutotestsFailureCategoriesIdGet(projectId, id)

Get failure category by ID

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**|  | [default to null] |
| **id** | **UUID**|  | [default to null] |

### Return type

[**ProjectDetailedFailureCategoryApiResult**](../Models/ProjectDetailedFailureCategoryApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2ProjectsProjectIdAutotestsFailureCategoriesPost"></a>
# **apiV2ProjectsProjectIdAutotestsFailureCategoriesPost**
> ProjectDetailedFailureCategoryApiResult apiV2ProjectsProjectIdAutotestsFailureCategoriesPost(projectId, CreateProjectFailureCategoryApiModel)

Create failure category

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**|  | [default to null] |
| **CreateProjectFailureCategoryApiModel** | [**CreateProjectFailureCategoryApiModel**](../Models/CreateProjectFailureCategoryApiModel.md)|  | [optional] |

### Return type

[**ProjectDetailedFailureCategoryApiResult**](../Models/ProjectDetailedFailureCategoryApiResult.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="apiV2ProjectsProjectIdAutotestsFailureCategoriesPut"></a>
# **apiV2ProjectsProjectIdAutotestsFailureCategoriesPut**
> apiV2ProjectsProjectIdAutotestsFailureCategoriesPut(projectId, UpdateFailureCategoryProjectApiModel)

Update failure category

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **projectId** | **String**|  | [default to null] |
| **UpdateFailureCategoryProjectApiModel** | [**UpdateFailureCategoryProjectApiModel**](../Models/UpdateFailureCategoryProjectApiModel.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

