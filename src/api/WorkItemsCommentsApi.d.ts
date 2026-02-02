/**
* WorkItemsComments service.
* @module api/WorkItemsCommentsApi
* @version 7.1.0-TMS-5.6
*/
export default class WorkItemsCommentsApi {
    /**
    * Constructs a new WorkItemsCommentsApi.
    * @alias module:api/WorkItemsCommentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Delete WorkItem comment
     *  Use case  User sets comment identifier  User runs method execution  System delete comment  System returns success status code
     * @param {String} commentId Comment internal (guid format) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2WorkItemsCommentsCommentIdDeleteWithHttpInfo(commentId: string): Promise<any>;
    /**
     * Delete WorkItem comment
     *  Use case  User sets comment identifier  User runs method execution  System delete comment  System returns success status code
     * @param {String} commentId Comment internal (guid format) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2WorkItemsCommentsCommentIdDelete(commentId: string): Promise<any>;
    /**
     * Create WorkItem comment
     *  Use case  User sets comment properties (listed in request parameters)  User runs method execution  System creates comment  System returns comment model (listed in response parameters)
     * @param {Object} opts Optional parameters
     * @param {module:model/WorkItemCommentPostModel} [workItemCommentPostModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WorkItemCommentModel} and HTTP response
     */
    apiV2WorkItemsCommentsPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Create WorkItem comment
     *  Use case  User sets comment properties (listed in request parameters)  User runs method execution  System creates comment  System returns comment model (listed in response parameters)
     * @param {Object} opts Optional parameters
     * @param {module:model/WorkItemCommentPostModel} opts.workItemCommentPostModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkItemCommentModel}
     */
    apiV2WorkItemsCommentsPost(opts: {
        workItemCommentPostModel: any;
    }): Promise<any>;
    /**
     * Update work item comment
     * @param {Object} opts Optional parameters
     * @param {module:model/WorkItemCommentPutModel} [workItemCommentPutModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2WorkItemsCommentsPutWithHttpInfo(opts: any): Promise<any>;
    /**
     * Update work item comment
     * @param {Object} opts Optional parameters
     * @param {module:model/WorkItemCommentPutModel} opts.workItemCommentPutModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2WorkItemsCommentsPut(opts: {
        workItemCommentPutModel: any;
    }): Promise<any>;
    /**
     * Get work item comments count
     * @param {String} id Unique or global ID of the work item
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Number} and HTTP response
     */
    apiV2WorkItemsIdCommentsCountGetWithHttpInfo(id: string): Promise<any>;
    /**
     * Get work item comments count
     * @param {String} id Unique or global ID of the work item
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Number}
     */
    apiV2WorkItemsIdCommentsCountGet(id: string): Promise<any>;
    /**
     * Get work item comments
     * @param {String} id Unique or global ID of the work item
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/WorkItemCommentModel>} and HTTP response
     */
    apiV2WorkItemsIdCommentsGetWithHttpInfo(id: string): Promise<any>;
    /**
     * Get work item comments
     * @param {String} id Unique or global ID of the work item
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/WorkItemCommentModel>}
     */
    apiV2WorkItemsIdCommentsGet(id: string): Promise<any>;
}
