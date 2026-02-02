/**
* Search service.
* @module api/SearchApi
* @version 7.1.0-TMS-5.6
*/
export default class SearchApi {
    /**
    * Constructs a new SearchApi.
    * @alias module:api/SearchApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/GlobalSearchRequest} [globalSearchRequest]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GlobalSearchResponse} and HTTP response
     */
    apiV2SearchGlobalSearchPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/GlobalSearchRequest} opts.globalSearchRequest
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GlobalSearchResponse}
     */
    apiV2SearchGlobalSearchPost(opts: {
        globalSearchRequest: any;
    }): Promise<any>;
}
