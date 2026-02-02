/**
* WebhooksLogs service.
* @module api/WebhooksLogsApi
* @version 7.1.0
*/
export default class WebhooksLogsApi {
    /**
    * Constructs a new WebhooksLogsApi.
    * @alias module:api/WebhooksLogsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Get last webhook logs
     * @param {Object} opts Optional parameters
     * @param {String} [projectId] Project unique ID
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/WebhookLogApiResult>} and HTTP response
     */
    apiV2WebhooksLogsGetWithHttpInfo(opts: any): Promise<any>;
    /**
     * Get last webhook logs
     * @param {Object} opts Optional parameters
     * @param {String} opts.projectId Project unique ID
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/WebhookLogApiResult>}
     */
    apiV2WebhooksLogsGet(opts: {
        projectId: string;
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
    }): Promise<any>;
    /**
     * Delete webhook log by ID
     * @param {String} id Webhook log unique ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2WebhooksLogsIdDeleteWithHttpInfo(id: string): Promise<any>;
    /**
     * Delete webhook log by ID
     * @param {String} id Webhook log unique ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2WebhooksLogsIdDelete(id: string): Promise<any>;
    /**
     * Get webhook log by ID
     * @param {String} id Webhook log unique ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WebhookLogApiResult} and HTTP response
     */
    apiV2WebhooksLogsIdGetWithHttpInfo(id: string): Promise<any>;
    /**
     * Get webhook log by ID
     * @param {String} id Webhook log unique ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WebhookLogApiResult}
     */
    apiV2WebhooksLogsIdGet(id: string): Promise<any>;
}
