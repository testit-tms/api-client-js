# AttachmentsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV2AttachmentsIdDelete**](AttachmentsApi.md#apiV2AttachmentsIdDelete) | **DELETE** /api/v2/attachments/{id} | Delete attachment file |
| [**apiV2AttachmentsIdGet**](AttachmentsApi.md#apiV2AttachmentsIdGet) | **GET** /api/v2/attachments/{id} | Download attachment file |
| [**apiV2AttachmentsOccupiedFileStorageSizeGet**](AttachmentsApi.md#apiV2AttachmentsOccupiedFileStorageSizeGet) | **GET** /api/v2/attachments/occupiedFileStorageSize | Get size of attachments storage in bytes |
| [**apiV2AttachmentsPost**](AttachmentsApi.md#apiV2AttachmentsPost) | **POST** /api/v2/attachments | Upload new attachment file |


<a name="apiV2AttachmentsIdDelete"></a>
# **apiV2AttachmentsIdDelete**
> apiV2AttachmentsIdDelete(id)

Delete attachment file

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
- **Accept**: text/plain, application/json, text/json

<a name="apiV2AttachmentsIdGet"></a>
# **apiV2AttachmentsIdGet**
> File apiV2AttachmentsIdGet(id, width, height, resizeType, backgroundColor, preview)

Download attachment file

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **UUID**|  | [default to null] |
| **width** | **Integer**| Width of the result image | [optional] [default to null] |
| **height** | **Integer**| Height of the result image | [optional] [default to null] |
| **resizeType** | [**ImageResizeType**](../Models/.md)| Type of resizing to apply to the result image | [optional] [default to null] [enum: Crop, AddBackgroundStripes] |
| **backgroundColor** | **String**| Color of the background if the &#x60;resizeType&#x60; is &#x60;AddBackgroundStripes&#x60; | [optional] [default to null] |
| **preview** | **Boolean**| If image must be converted to a preview (lower quality, no animation) | [optional] [default to null] |

### Return type

**File**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream

<a name="apiV2AttachmentsOccupiedFileStorageSizeGet"></a>
# **apiV2AttachmentsOccupiedFileStorageSizeGet**
> Long apiV2AttachmentsOccupiedFileStorageSizeGet()

Get size of attachments storage in bytes

### Parameters
This endpoint does not need any parameter.

### Return type

**Long**

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="apiV2AttachmentsPost"></a>
# **apiV2AttachmentsPost**
> AttachmentModel apiV2AttachmentsPost(file)

Upload new attachment file

    File size is restricted to 50 MB (52 428 800 bytes)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **file** | **File**|  | [optional] [default to null] |

### Return type

[**AttachmentModel**](../Models/AttachmentModel.md)

### Authorization

[Bearer or PrivateToken](../README.md#Bearer or PrivateToken)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

