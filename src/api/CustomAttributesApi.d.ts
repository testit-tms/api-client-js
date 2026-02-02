/**
* CustomAttributes service.
* @module api/CustomAttributesApi
* @version 7.1.0-TMS-5.6
*/
export default class CustomAttributesApi {
    /**
    * Constructs a new CustomAttributesApi.
    * @alias module:api/CustomAttributesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * @param {Object} opts Optional parameters
     * @param {String} [name]
     * @param {Boolean} [isGlobal]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomAttributeValidationResult} and HTTP response
     */
    apiV2CustomAttributesExistsGetWithHttpInfo(opts: any): Promise<any>;
    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.name
     * @param {Boolean} opts.isGlobal
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomAttributeValidationResult}
     */
    apiV2CustomAttributesExistsGet(opts: {
        name: string;
        isGlobal: boolean;
    }): Promise<any>;
    /**
     * Delete global attribute
     * @param {String} id Unique ID of attribute
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2CustomAttributesGlobalIdDeleteWithHttpInfo(id: string): Promise<any>;
    /**
     * Delete global attribute
     * @param {String} id Unique ID of attribute
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2CustomAttributesGlobalIdDelete(id: string): Promise<any>;
    /**
     * Edit global attribute
     * @param {String} id Unique ID of attribute
     * @param {Object} opts Optional parameters
     * @param {module:model/GlobalCustomAttributeUpdateModel} [globalCustomAttributeUpdateModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomAttributeModel} and HTTP response
     */
    apiV2CustomAttributesGlobalIdPutWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Edit global attribute
     * @param {String} id Unique ID of attribute
     * @param {Object} opts Optional parameters
     * @param {module:model/GlobalCustomAttributeUpdateModel} opts.globalCustomAttributeUpdateModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomAttributeModel}
     */
    apiV2CustomAttributesGlobalIdPut(id: string, opts: {
        globalCustomAttributeUpdateModel: any;
    }): Promise<any>;
    /**
     * Create global attribute
     * @param {Object} opts Optional parameters
     * @param {module:model/GlobalCustomAttributePostModel} [globalCustomAttributePostModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomAttributeModel} and HTTP response
     */
    apiV2CustomAttributesGlobalPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Create global attribute
     * @param {Object} opts Optional parameters
     * @param {module:model/GlobalCustomAttributePostModel} opts.globalCustomAttributePostModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomAttributeModel}
     */
    apiV2CustomAttributesGlobalPost(opts: {
        globalCustomAttributePostModel: any;
    }): Promise<any>;
    /**
     * Get attribute
     * @param {String} id Unique ID of attribute
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomAttributeModel} and HTTP response
     */
    apiV2CustomAttributesIdGetWithHttpInfo(id: string): Promise<any>;
    /**
     * Get attribute
     * @param {String} id Unique ID of attribute
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomAttributeModel}
     */
    apiV2CustomAttributesIdGet(id: string): Promise<any>;
    /**
     * Search for attributes
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @param {module:model/CustomAttributeSearchQueryModel} [customAttributeSearchQueryModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CustomAttributeSearchResponseModel>} and HTTP response
     */
    apiV2CustomAttributesSearchPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Search for attributes
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @param {module:model/CustomAttributeSearchQueryModel} opts.customAttributeSearchQueryModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CustomAttributeSearchResponseModel>}
     */
    apiV2CustomAttributesSearchPost(opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
        customAttributeSearchQueryModel: any;
    }): Promise<any>;
}
