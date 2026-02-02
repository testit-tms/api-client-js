/**
* BackgroundJobs service.
* @module api/BackgroundJobsApi
* @version 7.1.0-TMS-5.6
*/
export default class BackgroundJobsApi {
    /**
    * Constructs a new BackgroundJobsApi.
    * @alias module:api/BackgroundJobsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Delete all completed background jobs
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2BackgroundJobsCompletedDeleteWithHttpInfo(): Promise<any>;
    /**
     * Delete all completed background jobs
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2BackgroundJobsCompletedDelete(): Promise<any>;
    /**
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/BackgroundJobGetModel>} and HTTP response
     */
    apiV2BackgroundJobsGetWithHttpInfo(opts: any): Promise<any>;
    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/BackgroundJobGetModel>}
     */
    apiV2BackgroundJobsGet(opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
    }): Promise<any>;
    /**
     * Cancel current user background job
     * @param {String} id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2BackgroundJobsIdCancelPostWithHttpInfo(id: string): Promise<any>;
    /**
     * Cancel current user background job
     * @param {String} id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2BackgroundJobsIdCancelPost(id: string): Promise<any>;
    /**
     * Get background job by ID
     * @param {String} id Unique ID of the background job
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BackgroundJobGetModel} and HTTP response
     */
    apiV2BackgroundJobsIdGetWithHttpInfo(id: string): Promise<any>;
    /**
     * Get background job by ID
     * @param {String} id Unique ID of the background job
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BackgroundJobGetModel}
     */
    apiV2BackgroundJobsIdGet(id: string): Promise<any>;
    /**
     * Get background job status by job ID
     * @param {String} id Unique ID of the background job
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BackgroundJobState} and HTTP response
     */
    apiV2BackgroundJobsIdStatusGetWithHttpInfo(id: string): Promise<any>;
    /**
     * Get background job status by job ID
     * @param {String} id Unique ID of the background job
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BackgroundJobState}
     */
    apiV2BackgroundJobsIdStatusGet(id: string): Promise<any>;
    /**
     * Search for user background jobs
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @param {module:model/BackgroundJobFilterModel} [backgroundJobFilterModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/BackgroundJobGetModel>} and HTTP response
     */
    apiV2BackgroundJobsSearchPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Search for user background jobs
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @param {module:model/BackgroundJobFilterModel} opts.backgroundJobFilterModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/BackgroundJobGetModel>}
     */
    apiV2BackgroundJobsSearchPost(opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
        backgroundJobFilterModel: any;
    }): Promise<any>;
}
