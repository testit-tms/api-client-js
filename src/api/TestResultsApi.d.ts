/**
* TestResults service.
* @module api/TestResultsApi
* @version 7.1.0-TMS-5.6
*/
export default class TestResultsApi {
    /**
    * Constructs a new TestResultsApi.
    * @alias module:api/TestResultsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * @param {String} externalProjectId
     * @param {Object} opts Optional parameters
     * @param {module:model/TestResultsSelectApiModel} [testResultsSelectApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetExternalFormApiResult} and HTTP response
     */
    apiV2TestResultsExternalProjectsExternalProjectIdDefectsExternalFormsPostWithHttpInfo(externalProjectId: string, opts: any): Promise<any>;
    /**
     * @param {String} externalProjectId
     * @param {Object} opts Optional parameters
     * @param {module:model/TestResultsSelectApiModel} opts.testResultsSelectApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetExternalFormApiResult}
     */
    apiV2TestResultsExternalProjectsExternalProjectIdDefectsExternalFormsPost(externalProjectId: string, opts: {
        testResultsSelectApiModel: any;
    }): Promise<any>;
    /**
     * @param {String} externalProjectId
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateDefectApiModel} [createDefectApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DefectApiModel} and HTTP response
     */
    apiV2TestResultsExternalProjectsExternalProjectIdDefectsPostWithHttpInfo(externalProjectId: string, opts: any): Promise<any>;
    /**
     * @param {String} externalProjectId
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateDefectApiModel} opts.createDefectApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DefectApiModel}
     */
    apiV2TestResultsExternalProjectsExternalProjectIdDefectsPost(externalProjectId: string, opts: {
        createDefectApiModel: any;
    }): Promise<any>;
    /**
     * Get test result by ID aggregated with previous results
     * @param {String} id Test result unique ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TestResultResponse} and HTTP response
     */
    apiV2TestResultsIdAggregatedGetWithHttpInfo(id: string): Promise<any>;
    /**
     * Get test result by ID aggregated with previous results
     * @param {String} id Test result unique ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TestResultResponse}
     */
    apiV2TestResultsIdAggregatedGet(id: string): Promise<any>;
    /**
     * Attach file to the test result
     * @param {String} id Test result unique ID
     * @param {String} attachmentId Attachment unique ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2TestResultsIdAttachmentsAttachmentIdPutWithHttpInfo(id: string, attachmentId: string): Promise<any>;
    /**
     * Attach file to the test result
     * @param {String} id Test result unique ID
     * @param {String} attachmentId Attachment unique ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2TestResultsIdAttachmentsAttachmentIdPut(id: string, attachmentId: string): Promise<any>;
    /**
     * Get test result attachments meta-information
     * @param {String} id Test result unique ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/AttachmentApiResult>} and HTTP response
     */
    apiV2TestResultsIdAttachmentsInfoGetWithHttpInfo(id: string): Promise<any>;
    /**
     * Get test result attachments meta-information
     * @param {String} id Test result unique ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/AttachmentApiResult>}
     */
    apiV2TestResultsIdAttachmentsInfoGet(id: string): Promise<any>;
    /**
     * Get test result by ID
     * @param {String} id Test result unique ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TestResultResponse} and HTTP response
     */
    apiV2TestResultsIdGetWithHttpInfo(id: string): Promise<any>;
    /**
     * Get test result by ID
     * @param {String} id Test result unique ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TestResultResponse}
     */
    apiV2TestResultsIdGet(id: string): Promise<any>;
    /**
     * Edit test result by ID
     * @param {String} id Test result unique ID
     * @param {Object} opts Optional parameters
     * @param {module:model/TestResultUpdateV2Request} [testResultUpdateV2Request]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2TestResultsIdPutWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Edit test result by ID
     * @param {String} id Test result unique ID
     * @param {Object} opts Optional parameters
     * @param {module:model/TestResultUpdateV2Request} opts.testResultUpdateV2Request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2TestResultsIdPut(id: string, opts: {
        testResultUpdateV2Request: any;
    }): Promise<any>;
    /**
     * Get reruns
     * @param {String} id Test result unique ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/RerunsModel} and HTTP response
     */
    apiV2TestResultsIdRerunsGetWithHttpInfo(id: string): Promise<any>;
    /**
     * Get reruns
     * @param {String} id Test result unique ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RerunsModel}
     */
    apiV2TestResultsIdRerunsGet(id: string): Promise<any>;
    /**
     * Search for test results
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @param {module:model/TestResultsFilterApiModel} [testResultsFilterApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TestResultShortResponse>} and HTTP response
     */
    apiV2TestResultsSearchPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Search for test results
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @param {module:model/TestResultsFilterApiModel} opts.testResultsFilterApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TestResultShortResponse>}
     */
    apiV2TestResultsSearchPost(opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
        testResultsFilterApiModel: any;
    }): Promise<any>;
    /**
     * Search for test results and extract statistics
     * @param {Object} opts Optional parameters
     * @param {module:model/TestResultsFilterApiModel} [testResultsFilterApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TestResultsStatisticsApiResult} and HTTP response
     */
    apiV2TestResultsStatisticsFilterPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Search for test results and extract statistics
     * @param {Object} opts Optional parameters
     * @param {module:model/TestResultsFilterApiModel} opts.testResultsFilterApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TestResultsStatisticsApiResult}
     */
    apiV2TestResultsStatisticsFilterPost(opts: {
        testResultsFilterApiModel: any;
    }): Promise<any>;
    /**
     * Upload and link attachment to TestResult
     *  Use case  User sets testResultId  User attaches a file  System creates attachment and links it to the test result  System returns attachment identifier
     * @param {String} id Test result internal identifier (guid format)
     * @param {Object} opts Optional parameters
     * @param {File} [file] Select file
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    createAttachmentWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Upload and link attachment to TestResult
     *  Use case  User sets testResultId  User attaches a file  System creates attachment and links it to the test result  System returns attachment identifier
     * @param {String} id Test result internal identifier (guid format)
     * @param {Object} opts Optional parameters
     * @param {File} opts.file Select file
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    createAttachment(id: string, opts: {
        file: File;
    }): Promise<any>;
    /**
     * Remove attachment and unlink from TestResult
     *  Use case  User sets testResultId and attachmentId  User attaches a file  User runs method execution  System deletes attachment and unlinks it from the test result  System returns attachment identifier
     * @param {String} id Test result internal identifier (guid format)
     * @param {String} attachmentId Attachment internal identifier (guid format)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteAttachmentWithHttpInfo(id: string, attachmentId: string): Promise<any>;
    /**
     * Remove attachment and unlink from TestResult
     *  Use case  User sets testResultId and attachmentId  User attaches a file  User runs method execution  System deletes attachment and unlinks it from the test result  System returns attachment identifier
     * @param {String} id Test result internal identifier (guid format)
     * @param {String} attachmentId Attachment internal identifier (guid format)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteAttachment(id: string, attachmentId: string): Promise<any>;
    /**
     * Get attachment of TestResult
     *  Use case  User sets attachmentId and testResultId  [Optional] User sets resize configuration  User runs method execution  System search attachments by the attachmentId and the testResultId  [Optional] If resize configuration is set, System resizes the attachment according to the resize                     configuration  [Optional] Otherwise, System does not resize the attachment  System returns attachment as a file
     * @param {String} attachmentId Attachment internal identifier (guid format)
     * @param {String} id Test result internal identifier (guid format)
     * @param {Object} opts Optional parameters
     * @param {Number} [width] Width of the result image
     * @param {Number} [height] Height of the result image
     * @param {module:model/ImageResizeType} [resizeType] Type of resizing to apply to the result image
     * @param {String} [backgroundColor] Color of the background if the `resizeType` is `AddBackgroundStripes`
     * @param {Boolean} [preview] If image must be converted to a preview (lower quality, no animation)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    downloadAttachmentWithHttpInfo(attachmentId: string, id: string, opts: any): Promise<any>;
    /**
     * Get attachment of TestResult
     *  Use case  User sets attachmentId and testResultId  [Optional] User sets resize configuration  User runs method execution  System search attachments by the attachmentId and the testResultId  [Optional] If resize configuration is set, System resizes the attachment according to the resize                     configuration  [Optional] Otherwise, System does not resize the attachment  System returns attachment as a file
     * @param {String} attachmentId Attachment internal identifier (guid format)
     * @param {String} id Test result internal identifier (guid format)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.width Width of the result image
     * @param {Number} opts.height Height of the result image
     * @param {module:model/ImageResizeType} opts.resizeType Type of resizing to apply to the result image
     * @param {String} opts.backgroundColor Color of the background if the `resizeType` is `AddBackgroundStripes`
     * @param {Boolean} opts.preview If image must be converted to a preview (lower quality, no animation)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    downloadAttachment(attachmentId: string, id: string, opts: {
        width: number;
        height: number;
        resizeType: any;
        backgroundColor: string;
        preview: boolean;
    }): Promise<any>;
    /**
     * Get Metadata of TestResult's attachment
     *  Use case  User sets attachmentId and testResultId  User runs method execution  System search attachment by the attachmentId and the testResultId  System returns attachment data
     * @param {String} id Test result internal identifier (guid format)
     * @param {String} attachmentId Attachment internal identifier (guid format)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AttachmentApiResult} and HTTP response
     */
    getAttachmentWithHttpInfo(id: string, attachmentId: string): Promise<any>;
    /**
     * Get Metadata of TestResult's attachment
     *  Use case  User sets attachmentId and testResultId  User runs method execution  System search attachment by the attachmentId and the testResultId  System returns attachment data
     * @param {String} id Test result internal identifier (guid format)
     * @param {String} attachmentId Attachment internal identifier (guid format)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AttachmentApiResult}
     */
    getAttachment(id: string, attachmentId: string): Promise<any>;
    /**
     * Get all attachments of TestResult
     *  Use case  User sets testResultId  User runs method execution  System search all attachments of the test result  System returns attachments enumeration
     * @param {String} id Test result internal identifier (guid format)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/AttachmentApiResult>} and HTTP response
     */
    getAttachmentsWithHttpInfo(id: string): Promise<any>;
    /**
     * Get all attachments of TestResult
     *  Use case  User sets testResultId  User runs method execution  System search all attachments of the test result  System returns attachments enumeration
     * @param {String} id Test result internal identifier (guid format)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/AttachmentApiResult>}
     */
    getAttachments(id: string): Promise<any>;
}
