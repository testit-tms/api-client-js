/**
* Webhooks service.
* @module api/WebhooksApi
* @version 7.1.0-TMS-5.6
*/
export default class WebhooksApi {
    /**
    * Constructs a new WebhooksApi.
    * @alias module:api/WebhooksApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/WebhooksDeleteApiModel} [webhooksDeleteApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2WebhooksDeleteWithHttpInfo(opts: any): Promise<any>;
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/WebhooksDeleteApiModel} opts.webhooksDeleteApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2WebhooksDelete(opts: {
        webhooksDeleteApiModel: any;
    }): Promise<any>;
    /**
     * Get all webhooks
     * @param {Object} opts Optional parameters
     * @param {String} [projectId] Project unique ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/WebHookModel>} and HTTP response
     */
    apiV2WebhooksGetWithHttpInfo(opts: any): Promise<any>;
    /**
     * Get all webhooks
     * @param {Object} opts Optional parameters
     * @param {String} opts.projectId Project unique ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/WebHookModel>}
     */
    apiV2WebhooksGet(opts: {
        projectId: string;
    }): Promise<any>;
    /**
     * Delete webhook by ID
     * @param {String} id Webhook unique ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2WebhooksIdDeleteWithHttpInfo(id: string): Promise<any>;
    /**
     * Delete webhook by ID
     * @param {String} id Webhook unique ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2WebhooksIdDelete(id: string): Promise<any>;
    /**
     * Get webhook by ID
     * @param {String} id Webhook unique ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WebHookModel} and HTTP response
     */
    apiV2WebhooksIdGetWithHttpInfo(id: string): Promise<any>;
    /**
     * Get webhook by ID
     * @param {String} id Webhook unique ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WebHookModel}
     */
    apiV2WebhooksIdGet(id: string): Promise<any>;
    /**
     * Edit webhook by ID
     * @param {String} id Webhook unique ID
     * @param {Object} opts Optional parameters
     * @param {module:model/WebHookPostModel} [webHookPostModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WebHookModel} and HTTP response
     */
    apiV2WebhooksIdPutWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Edit webhook by ID
     * @param {String} id Webhook unique ID
     * @param {Object} opts Optional parameters
     * @param {module:model/WebHookPostModel} opts.webHookPostModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WebHookModel}
     */
    apiV2WebhooksIdPut(id: string, opts: {
        webHookPostModel: any;
    }): Promise<any>;
    /**
     * Create webhook
     * @param {Object} opts Optional parameters
     * @param {module:model/WebHookPostModel} [webHookPostModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WebHookModel} and HTTP response
     */
    apiV2WebhooksPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Create webhook
     * @param {Object} opts Optional parameters
     * @param {module:model/WebHookPostModel} opts.webHookPostModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WebHookModel}
     */
    apiV2WebhooksPost(opts: {
        webHookPostModel: any;
    }): Promise<any>;
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/WebhooksUpdateApiModel} [webhooksUpdateApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WebhooksUpdateApiResult} and HTTP response
     */
    apiV2WebhooksPutWithHttpInfo(opts: any): Promise<any>;
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/WebhooksUpdateApiModel} opts.webhooksUpdateApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WebhooksUpdateApiResult}
     */
    apiV2WebhooksPut(opts: {
        webhooksUpdateApiModel: any;
    }): Promise<any>;
    /**
     * Search for webhooks
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @param {module:model/SearchWebhooksQueryModel} [searchWebhooksQueryModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/WebHookModel>} and HTTP response
     */
    apiV2WebhooksSearchPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Search for webhooks
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @param {module:model/SearchWebhooksQueryModel} opts.searchWebhooksQueryModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/WebHookModel>}
     */
    apiV2WebhooksSearchPost(opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
        searchWebhooksQueryModel: any;
    }): Promise<any>;
    /**
     * Get special variables for webhook event type
     * @param {Object} opts Optional parameters
     * @param {module:model/WebHookEventType} [eventType] Webhook event type
     * @param {module:model/WebhookVariablesType} [variablesType]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<String>} and HTTP response
     */
    apiV2WebhooksSpecialVariablesGetWithHttpInfo(opts: any): Promise<any>;
    /**
     * Get special variables for webhook event type
     * @param {Object} opts Optional parameters
     * @param {module:model/WebHookEventType} opts.eventType Webhook event type
     * @param {module:model/WebhookVariablesType} opts.variablesType
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<String>}
     */
    apiV2WebhooksSpecialVariablesGet(opts: {
        eventType: any;
        variablesType: any;
    }): Promise<any>;
    /**
     * Test webhook's url
     * @param {Object} opts Optional parameters
     * @param {module:model/WebHookTestModel} [webHookTestModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WebhookResponse} and HTTP response
     */
    apiV2WebhooksTestPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Test webhook's url
     * @param {Object} opts Optional parameters
     * @param {module:model/WebHookTestModel} opts.webHookTestModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WebhookResponse}
     */
    apiV2WebhooksTestPost(opts: {
        webHookTestModel: any;
    }): Promise<any>;
}
