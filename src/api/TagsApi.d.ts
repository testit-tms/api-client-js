/**
* Tags service.
* @module api/TagsApi
* @version 7.1.0
*/
export default class TagsApi {
    /**
    * Constructs a new TagsApi.
    * @alias module:api/TagsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Delete tags
     *  Use case  User sets collection of tags internal (guid format) identifiers  System searches and deletes a collection of tags
     * @param {Object} opts Optional parameters
     * @param {module:model/SelectTagsApiModel} [selectTagsApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2TagsDeleteWithHttpInfo(opts: any): Promise<any>;
    /**
     * Delete tags
     *  Use case  User sets collection of tags internal (guid format) identifiers  System searches and deletes a collection of tags
     * @param {Object} opts Optional parameters
     * @param {module:model/SelectTagsApiModel} opts.selectTagsApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2TagsDelete(opts: {
        selectTagsApiModel: any;
    }): Promise<any>;
    /**
     * Delete tag
     *  Use case  User sets tag internal (guid format) identifier  System search and delete tag
     * @param {String} id Tag internal (UUID) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2TagsIdDeleteWithHttpInfo(id: string): Promise<any>;
    /**
     * Delete tag
     *  Use case  User sets tag internal (guid format) identifier  System search and delete tag
     * @param {String} id Tag internal (UUID) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2TagsIdDelete(id: string): Promise<any>;
    /**
     * Create tag
     *  Use case  User sets tag model (listed in the request example)  User runs method execution  System creates tag  System returns tag model (listed in the response example)
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateTagApiModel} [createTagApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TagApiResult} and HTTP response
     */
    apiV2TagsPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Create tag
     *  Use case  User sets tag model (listed in the request example)  User runs method execution  System creates tag  System returns tag model (listed in the response example)
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateTagApiModel} opts.createTagApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TagApiResult}
     */
    apiV2TagsPost(opts: {
        createTagApiModel: any;
    }): Promise<any>;
    /**
     * Update tag
     *  Use case  User sets tag ID and model (listed in the request example)  User runs method execution  System updates tag  System returns tag model (listed in the response example)
     * @param {Object} opts Optional parameters
     * @param {String} [id]
     * @param {module:model/UpdateTagApiModel} [updateTagApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TagApiResult} and HTTP response
     */
    apiV2TagsPutWithHttpInfo(opts: any): Promise<any>;
    /**
     * Update tag
     *  Use case  User sets tag ID and model (listed in the request example)  User runs method execution  System updates tag  System returns tag model (listed in the response example)
     * @param {Object} opts Optional parameters
     * @param {String} opts.id
     * @param {module:model/UpdateTagApiModel} opts.updateTagApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TagApiResult}
     */
    apiV2TagsPut(opts: {
        id: string;
        updateTagApiModel: any;
    }): Promise<any>;
    /**
     * Search tags
     *  Use case  User runs method execution  System returns collection of tags (listed in the response example)
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TagApiResult>} and HTTP response
     */
    apiV2TagsSearchGetWithHttpInfo(opts: any): Promise<any>;
    /**
     * Search tags
     *  Use case  User runs method execution  System returns collection of tags (listed in the response example)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TagApiResult>}
     */
    apiV2TagsSearchGet(opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
    }): Promise<any>;
    /**
     * Get all Tags that are used in TestPlans
     *  Use case  User runs method execution  System returns tags (listed in the response example)
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TagApiResult>} and HTTP response
     */
    apiV2TagsTestPlansTagsGetWithHttpInfo(opts: any): Promise<any>;
    /**
     * Get all Tags that are used in TestPlans
     *  Use case  User runs method execution  System returns tags (listed in the response example)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TagApiResult>}
     */
    apiV2TagsTestPlansTagsGet(opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
    }): Promise<any>;
}
