/**
* Users service.
* @module api/UsersApi
* @version 7.1.0-TMS-5.6
*/
export default class UsersApi {
    /**
    * Constructs a new UsersApi.
    * @alias module:api/UsersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * @param {Object} opts Optional parameters
     * @param {String} [userName]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserCustomNameValidationResponse} and HTTP response
     */
    apiV2UsersExistsGetWithHttpInfo(opts: any): Promise<any>;
    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.userName
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserCustomNameValidationResponse}
     */
    apiV2UsersExistsGet(opts: {
        userName: string;
    }): Promise<any>;
}
