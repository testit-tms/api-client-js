/**
 * API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import AttachmentModel from '../model/AttachmentModel';
import ImageResizeType from '../model/ImageResizeType';
import LinkModel from '../model/LinkModel';
import ProblemDetails from '../model/ProblemDetails';
import TestResultCreateModel from '../model/TestResultCreateModel';
import TestResultLinkRequestPostModel from '../model/TestResultLinkRequestPostModel';
import TestResultModel from '../model/TestResultModel';
import UseTestResultLinkRequestPostModel from '../model/UseTestResultLinkRequestPostModel';
import ValidationProblemDetails from '../model/ValidationProblemDetails';

/**
* TestResults service.
* @module api/TestResultsApi
* @version 2.0.0
*/
export default class TestResultsApi {

    /**
    * Constructs a new TestResultsApi. 
    * @alias module:api/TestResultsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the apiV2TestResultsIdAggregatedGet operation.
     * @callback module:api/TestResultsApi~apiV2TestResultsIdAggregatedGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TestResultModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {module:api/TestResultsApi~apiV2TestResultsIdAggregatedGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TestResultModel}
     */
    apiV2TestResultsIdAggregatedGet(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiV2TestResultsIdAggregatedGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer or PrivateToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TestResultModel;
      return this.apiClient.callApi(
        '/api/v2/testResults/{id}/aggregated', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV2TestResultsIdAttachmentsAttachmentIdPut operation.
     * @callback module:api/TestResultsApi~apiV2TestResultsIdAttachmentsAttachmentIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {String} attachmentId 
     * @param {module:api/TestResultsApi~apiV2TestResultsIdAttachmentsAttachmentIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    apiV2TestResultsIdAttachmentsAttachmentIdPut(id, attachmentId, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiV2TestResultsIdAttachmentsAttachmentIdPut");
      }
      // verify the required parameter 'attachmentId' is set
      if (attachmentId === undefined || attachmentId === null) {
        throw new Error("Missing the required parameter 'attachmentId' when calling apiV2TestResultsIdAttachmentsAttachmentIdPut");
      }

      let pathParams = {
        'id': id,
        'attachmentId': attachmentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer or PrivateToken'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v2/testResults/{id}/attachments/{attachmentId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV2TestResultsIdAttachmentsInfoGet operation.
     * @callback module:api/TestResultsApi~apiV2TestResultsIdAttachmentsInfoGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AttachmentModel>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {module:api/TestResultsApi~apiV2TestResultsIdAttachmentsInfoGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AttachmentModel>}
     */
    apiV2TestResultsIdAttachmentsInfoGet(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiV2TestResultsIdAttachmentsInfoGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer or PrivateToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [AttachmentModel];
      return this.apiClient.callApi(
        '/api/v2/testResults/{id}/attachments/info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV2TestResultsIdExternalProjectsExternalProjectIdDefectPost operation.
     * @callback module:api/TestResultsApi~apiV2TestResultsIdExternalProjectsExternalProjectIdDefectPostCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {String} externalProjectId 
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     * @param {module:api/TestResultsApi~apiV2TestResultsIdExternalProjectsExternalProjectIdDefectPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    apiV2TestResultsIdExternalProjectsExternalProjectIdDefectPost(id, externalProjectId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiV2TestResultsIdExternalProjectsExternalProjectIdDefectPost");
      }
      // verify the required parameter 'externalProjectId' is set
      if (externalProjectId === undefined || externalProjectId === null) {
        throw new Error("Missing the required parameter 'externalProjectId' when calling apiV2TestResultsIdExternalProjectsExternalProjectIdDefectPost");
      }

      let pathParams = {
        'id': id,
        'externalProjectId': externalProjectId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer or PrivateToken'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/api/v2/testResults/{id}/externalProjects/{externalProjectId}/defect', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV2TestResultsIdExternalProjectsExternalProjectIdFormGet operation.
     * @callback module:api/TestResultsApi~apiV2TestResultsIdExternalProjectsExternalProjectIdFormGetCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {String} externalProjectId 
     * @param {module:api/TestResultsApi~apiV2TestResultsIdExternalProjectsExternalProjectIdFormGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    apiV2TestResultsIdExternalProjectsExternalProjectIdFormGet(id, externalProjectId, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiV2TestResultsIdExternalProjectsExternalProjectIdFormGet");
      }
      // verify the required parameter 'externalProjectId' is set
      if (externalProjectId === undefined || externalProjectId === null) {
        throw new Error("Missing the required parameter 'externalProjectId' when calling apiV2TestResultsIdExternalProjectsExternalProjectIdFormGet");
      }

      let pathParams = {
        'id': id,
        'externalProjectId': externalProjectId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer or PrivateToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/api/v2/testResults/{id}/externalProjects/{externalProjectId}/form', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV2TestResultsIdGet operation.
     * @callback module:api/TestResultsApi~apiV2TestResultsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TestResultModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {module:api/TestResultsApi~apiV2TestResultsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TestResultModel}
     */
    apiV2TestResultsIdGet(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiV2TestResultsIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer or PrivateToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TestResultModel;
      return this.apiClient.callApi(
        '/api/v2/testResults/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV2TestResultsIdLinkRequestsPost operation.
     * @callback module:api/TestResultsApi~apiV2TestResultsIdLinkRequestsPostCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/TestResultLinkRequestPostModel} opts.testResultLinkRequestPostModel 
     * @param {module:api/TestResultsApi~apiV2TestResultsIdLinkRequestsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    apiV2TestResultsIdLinkRequestsPost(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['testResultLinkRequestPostModel'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiV2TestResultsIdLinkRequestsPost");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer or PrivateToken'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/api/v2/testResults/{id}/linkRequests', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV2TestResultsIdPut operation.
     * @callback module:api/TestResultsApi~apiV2TestResultsIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {Object} opts Optional parameters
     * @param {module:model/TestResultCreateModel} opts.testResultCreateModel 
     * @param {module:api/TestResultsApi~apiV2TestResultsIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    apiV2TestResultsIdPut(id, opts, callback) {
      opts = opts || {};
      let postBody = opts['testResultCreateModel'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiV2TestResultsIdPut");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer or PrivateToken'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v2/testResults/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiV2TestResultsLinkRequestsLinkRequestIdUsePost operation.
     * @callback module:api/TestResultsApi~apiV2TestResultsLinkRequestsLinkRequestIdUsePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LinkModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} linkRequestId 
     * @param {Object} opts Optional parameters
     * @param {module:model/UseTestResultLinkRequestPostModel} opts.useTestResultLinkRequestPostModel 
     * @param {module:api/TestResultsApi~apiV2TestResultsLinkRequestsLinkRequestIdUsePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LinkModel}
     */
    apiV2TestResultsLinkRequestsLinkRequestIdUsePost(linkRequestId, opts, callback) {
      opts = opts || {};
      let postBody = opts['useTestResultLinkRequestPostModel'];
      // verify the required parameter 'linkRequestId' is set
      if (linkRequestId === undefined || linkRequestId === null) {
        throw new Error("Missing the required parameter 'linkRequestId' when calling apiV2TestResultsLinkRequestsLinkRequestIdUsePost");
      }

      let pathParams = {
        'linkRequestId': linkRequestId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer or PrivateToken'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = LinkModel;
      return this.apiClient.callApi(
        '/api/v2/testResults/linkRequests/{linkRequestId}/use', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createAttachment operation.
     * @callback module:api/TestResultsApi~createAttachmentCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload and link attachment to TestResult
     * <br>Use case  <br>User sets testResultId  <br>User attaches a file  <br>System creates attachment and links it to the test result  <br>System returns attachment identifier
     * @param {String} id Test result internal identifier (guid format)
     * @param {Object} opts Optional parameters
     * @param {File} opts.file Select file
     * @param {module:api/TestResultsApi~createAttachmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    createAttachment(id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling createAttachment");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'file': opts['file']
      };

      let authNames = ['Bearer or PrivateToken'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/api/v2/testResults/{id}/attachments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAttachment operation.
     * @callback module:api/TestResultsApi~deleteAttachmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove attachment and unlink from TestResult
     * <br>Use case  <br>User sets testResultId and attachmentId  <br>User attaches a file  <br>User runs method execution  <br>System deletes attachment and unlinks it from the test result  <br>System returns attachment identifier
     * @param {String} id Test result internal identifier (guid format)
     * @param {String} attachmentId Attachment internal identifier (guid format)
     * @param {module:api/TestResultsApi~deleteAttachmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteAttachment(id, attachmentId, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteAttachment");
      }
      // verify the required parameter 'attachmentId' is set
      if (attachmentId === undefined || attachmentId === null) {
        throw new Error("Missing the required parameter 'attachmentId' when calling deleteAttachment");
      }

      let pathParams = {
        'id': id,
        'attachmentId': attachmentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer or PrivateToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v2/testResults/{id}/attachments/{attachmentId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the downloadAttachment operation.
     * @callback module:api/TestResultsApi~downloadAttachmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get attachment of TestResult
     * <br>Use case  <br>User sets attachmentId and testResultId  <br>[Optional] User sets resize configuration  <br>User runs method execution  <br>System search attachments by the attachmentId and the testResultId  <br>                      [Optional] If resize configuration is set, System resizes the attachment according to the resize                      configuration                    <br>[Optional] Otherwise, System does not resize the attachment  <br>System returns attachment as a file
     * @param {String} attachmentId Attachment internal identifier (guid format)
     * @param {String} id Test result internal identifier (guid format)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.width Width of the result image
     * @param {Number} opts.height Height of the result image
     * @param {module:model/ImageResizeType} opts.resizeType Type of resizing to apply to the result image
     * @param {String} opts.backgroundColor Color of the background if the `resizeType` is `AddBackgroundStripes`
     * @param {Boolean} opts.preview If image must be converted to a preview (lower quality, no animation)
     * @param {module:api/TestResultsApi~downloadAttachmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    downloadAttachment(attachmentId, id, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'attachmentId' is set
      if (attachmentId === undefined || attachmentId === null) {
        throw new Error("Missing the required parameter 'attachmentId' when calling downloadAttachment");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling downloadAttachment");
      }

      let pathParams = {
        'attachmentId': attachmentId,
        'id': id
      };
      let queryParams = {
        'width': opts['width'],
        'height': opts['height'],
        'resizeType': opts['resizeType'],
        'backgroundColor': opts['backgroundColor'],
        'preview': opts['preview']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer or PrivateToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v2/testResults/{id}/attachments/{attachmentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAttachment operation.
     * @callback module:api/TestResultsApi~getAttachmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AttachmentModel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Metadata of TestResult's attachment
     * <br>Use case  <br>User sets attachmentId and testResultId  <br>User runs method execution  <br>System search attachment by the attachmentId and the testResultId  <br>System returns attachment data
     * @param {String} id Test result internal identifier (guid format)
     * @param {String} attachmentId Attachment internal identifier (guid format)
     * @param {module:api/TestResultsApi~getAttachmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AttachmentModel}
     */
    getAttachment(id, attachmentId, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getAttachment");
      }
      // verify the required parameter 'attachmentId' is set
      if (attachmentId === undefined || attachmentId === null) {
        throw new Error("Missing the required parameter 'attachmentId' when calling getAttachment");
      }

      let pathParams = {
        'id': id,
        'attachmentId': attachmentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer or PrivateToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AttachmentModel;
      return this.apiClient.callApi(
        '/api/v2/testResults/{id}/attachments/{attachmentId}/info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAttachments operation.
     * @callback module:api/TestResultsApi~getAttachmentsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AttachmentModel>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all attachments of TestResult
     * <br>Use case  <br>User sets testResultId  <br>User runs method execution  <br>System search all attachments of the test result  <br>System returns attachments enumeration
     * @param {String} id Test result internal identifier (guid format)
     * @param {module:api/TestResultsApi~getAttachmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AttachmentModel>}
     */
    getAttachments(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getAttachments");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer or PrivateToken'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [AttachmentModel];
      return this.apiClient.callApi(
        '/api/v2/testResults/{id}/attachments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}