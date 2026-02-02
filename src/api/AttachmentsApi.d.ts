/**
* Attachments service.
* @module api/AttachmentsApi
* @version 7.1.0-TMS-5.6
*/
export default class AttachmentsApi {
    /**
    * Constructs a new AttachmentsApi.
    * @alias module:api/AttachmentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Delete attachment file
     * @param {String} id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2AttachmentsIdDeleteWithHttpInfo(id: string): Promise<any>;
    /**
     * Delete attachment file
     * @param {String} id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2AttachmentsIdDelete(id: string): Promise<any>;
    /**
     * Download attachment file
     * @param {String} id
     * @param {Object} opts Optional parameters
     * @param {Number} [width] Width of the result image
     * @param {Number} [height] Height of the result image
     * @param {module:model/ImageResizeType} [resizeType] Type of resizing to apply to the result image
     * @param {String} [backgroundColor] Color of the background if the `resizeType` is `AddBackgroundStripes`
     * @param {Boolean} [preview] If image must be converted to a preview (lower quality, no animation)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2AttachmentsIdGetWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Download attachment file
     * @param {String} id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.width Width of the result image
     * @param {Number} opts.height Height of the result image
     * @param {module:model/ImageResizeType} opts.resizeType Type of resizing to apply to the result image
     * @param {String} opts.backgroundColor Color of the background if the `resizeType` is `AddBackgroundStripes`
     * @param {Boolean} opts.preview If image must be converted to a preview (lower quality, no animation)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2AttachmentsIdGet(id: string, opts: {
        width: number;
        height: number;
        resizeType: any;
        backgroundColor: string;
        preview: boolean;
    }): Promise<any>;
    /**
     * Get attachment metadata
     * @param {String} id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AttachmentModel} and HTTP response
     */
    apiV2AttachmentsIdMetadataGetWithHttpInfo(id: string): Promise<any>;
    /**
     * Get attachment metadata
     * @param {String} id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AttachmentModel}
     */
    apiV2AttachmentsIdMetadataGet(id: string): Promise<any>;
    /**
     * Get size of attachments storage in bytes
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Number} and HTTP response
     */
    apiV2AttachmentsOccupiedFileStorageSizeGetWithHttpInfo(): Promise<any>;
    /**
     * Get size of attachments storage in bytes
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Number}
     */
    apiV2AttachmentsOccupiedFileStorageSizeGet(): Promise<any>;
    /**
     * Upload new attachment file
     * File size is restricted to 1 GB (1 073 741 824 bytes)
     * @param {Object} opts Optional parameters
     * @param {File} [file]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AttachmentModel} and HTTP response
     */
    apiV2AttachmentsPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Upload new attachment file
     * File size is restricted to 1 GB (1 073 741 824 bytes)
     * @param {Object} opts Optional parameters
     * @param {File} opts.file
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AttachmentModel}
     */
    apiV2AttachmentsPost(opts: {
        file: File;
    }): Promise<any>;
}
