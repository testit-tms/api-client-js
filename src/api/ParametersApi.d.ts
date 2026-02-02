/**
* Parameters service.
* @module api/ParametersApi
* @version 7.1.0-TMS-5.6
*/
export default class ParametersApi {
    /**
    * Constructs a new ParametersApi.
    * @alias module:api/ParametersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Create multiple parameters
     *  Use case  User sets list of parameter model (listed in the request example)  User runs method execution  System creates parameters  System returns list of parameter model (listed in the response example)
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/CreateParameterApiModel>} [createParameterApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ParameterApiResult>} and HTTP response
     */
    apiV2ParametersBulkPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Create multiple parameters
     *  Use case  User sets list of parameter model (listed in the request example)  User runs method execution  System creates parameters  System returns list of parameter model (listed in the response example)
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/CreateParameterApiModel>} opts.createParameterApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ParameterApiResult>}
     */
    apiV2ParametersBulkPost(opts: any): Promise<any>;
    /**
     * Update multiple parameters
     *  Use case  User sets list of parameter model (listed in the request example)  User runs method execution  System updates parameters
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/UpdateParameterApiModel>} [updateParameterApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2ParametersBulkPutWithHttpInfo(opts: any): Promise<any>;
    /**
     * Update multiple parameters
     *  Use case  User sets list of parameter model (listed in the request example)  User runs method execution  System updates parameters
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/UpdateParameterApiModel>} opts.updateParameterApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2ParametersBulkPut(opts: any): Promise<any>;
    /**
     * Get parameters as group
     *  Use case  User runs method execution  System search parameters  System returns parameters models as groups (listed in the response example)
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} [parameterKeyIds]
     * @param {String} [name]
     * @param {Boolean} [isDeleted]
     * @param {Array.<String>} [projectIds]
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ParameterGroupApiResult>} and HTTP response
     */
    apiV2ParametersGroupsGetWithHttpInfo(opts: any): Promise<any>;
    /**
     * Get parameters as group
     *  Use case  User runs method execution  System search parameters  System returns parameters models as groups (listed in the response example)
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.parameterKeyIds
     * @param {String} opts.name
     * @param {Boolean} opts.isDeleted
     * @param {Array.<String>} opts.projectIds
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ParameterGroupApiResult>}
     */
    apiV2ParametersGroupsGet(opts: {
        parameterKeyIds: Array<string>;
        name: string;
        isDeleted: boolean;
        projectIds: Array<string>;
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
    }): Promise<any>;
    /**
     * Check existence parameter key in system
     *  Use case  User sets name of parameter key  User runs method execution  System search parameter key  System returns the flag for the existence of the parameter key in the system
     * @param {String} name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Boolean} and HTTP response
     */
    apiV2ParametersKeyNameNameExistsGetWithHttpInfo(name: string): Promise<any>;
    /**
     * Check existence parameter key in system
     *  Use case  User sets name of parameter key  User runs method execution  System search parameter key  System returns the flag for the existence of the parameter key in the system
     * @param {String} name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Boolean}
     */
    apiV2ParametersKeyNameNameExistsGet(name: string): Promise<any>;
    /**
     * Get all parameter key values
     *  Use case  User sets parameter key (string format)  User runs method execution  System search parameter values using the key  System returns parameter
     * @param {String} key Parameter key (string format)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<String>} and HTTP response
     */
    apiV2ParametersKeyValuesGetWithHttpInfo(key: string): Promise<any>;
    /**
     * Get all parameter key values
     *  Use case  User sets parameter key (string format)  User runs method execution  System search parameter values using the key  System returns parameter
     * @param {String} key Parameter key (string format)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<String>}
     */
    apiV2ParametersKeyValuesGet(key: string): Promise<any>;
    /**
     * Get all parameter keys
     *  Use case  User runs method execution  System search all parameter keys  System returns parameter keys
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} [projectIds]
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<String>} and HTTP response
     */
    apiV2ParametersKeysGetWithHttpInfo(opts: any): Promise<any>;
    /**
     * Get all parameter keys
     *  Use case  User runs method execution  System search all parameter keys  System returns parameter keys
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.projectIds
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<String>}
     */
    apiV2ParametersKeysGet(opts: {
        projectIds: Array<string>;
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
    }): Promise<any>;
    /**
     * Search for parameters as group
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @param {module:model/ParameterGroupsFilterApiModel} [parameterGroupsFilterApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ParameterGroupApiResult>} and HTTP response
     */
    apiV2ParametersSearchGroupsPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Search for parameters as group
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @param {module:model/ParameterGroupsFilterApiModel} opts.parameterGroupsFilterApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ParameterGroupApiResult>}
     */
    apiV2ParametersSearchGroupsPost(opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
        parameterGroupsFilterApiModel: any;
    }): Promise<any>;
    /**
     * Search for parameters
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @param {module:model/ParametersFilterApiModel} [parametersFilterApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ParameterApiResult>} and HTTP response
     */
    apiV2ParametersSearchPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Search for parameters
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @param {module:model/ParametersFilterApiModel} opts.parametersFilterApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ParameterApiResult>}
     */
    apiV2ParametersSearchPost(opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
        parametersFilterApiModel: any;
    }): Promise<any>;
    /**
     * Create parameter
     *  Use case  User sets parameter model (listed in the request example)  User runs method execution  System creates parameter  System returns parameter model
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateParameterApiModel} [createParameterApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ParameterApiResult} and HTTP response
     */
    createParameterWithHttpInfo(opts: any): Promise<any>;
    /**
     * Create parameter
     *  Use case  User sets parameter model (listed in the request example)  User runs method execution  System creates parameter  System returns parameter model
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateParameterApiModel} opts.createParameterApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ParameterApiResult}
     */
    createParameter(opts: {
        createParameterApiModel: any;
    }): Promise<any>;
    /**
     * Delete parameter by name
     * Deletes parameter and all it's values
     * @param {String} name Name of the parameter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteByNameWithHttpInfo(name: string): Promise<any>;
    /**
     * Delete parameter by name
     * Deletes parameter and all it's values
     * @param {String} name Name of the parameter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteByName(name: string): Promise<any>;
    /**
     * Delete parameters by parameter key identifier
     * Deletes parameter and all it's values by parameter key identifier
     * @param {String} keyId Identifier of the parameter key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteByParameterKeyIdWithHttpInfo(keyId: string): Promise<any>;
    /**
     * Delete parameters by parameter key identifier
     * Deletes parameter and all it's values by parameter key identifier
     * @param {String} keyId Identifier of the parameter key
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteByParameterKeyId(keyId: string): Promise<any>;
    /**
     * Delete parameter
     *  Use case  User sets parameter internal (guid format) identifier  System search and delete parameter  System returns deleted parameter
     * @param {String} id Parameter internal (UUID) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteParameterWithHttpInfo(id: string): Promise<any>;
    /**
     * Delete parameter
     *  Use case  User sets parameter internal (guid format) identifier  System search and delete parameter  System returns deleted parameter
     * @param {String} id Parameter internal (UUID) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteParameter(id: string): Promise<any>;
    /**
     * Get all parameters
     *  Use case  [Optional] User sets isDeleted field value  [Optional] If User sets isDeleted field value as true, System search all deleted parameters  [Optional] If User sets isDeleted field value as false, System search all parameters which are not deleted  If User did not set isDeleted field value, System search all parameters  System returns array of all found parameters(listed in response model)
     * @param {Object} opts Optional parameters
     * @param {Boolean} [isDeleted] If result must consist of only actual/deleted parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ParameterApiResult>} and HTTP response
     */
    getAllParametersWithHttpInfo(opts: any): Promise<any>;
    /**
     * Get all parameters
     *  Use case  [Optional] User sets isDeleted field value  [Optional] If User sets isDeleted field value as true, System search all deleted parameters  [Optional] If User sets isDeleted field value as false, System search all parameters which are not deleted  If User did not set isDeleted field value, System search all parameters  System returns array of all found parameters(listed in response model)
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.isDeleted If result must consist of only actual/deleted parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ParameterApiResult>}
     */
    getAllParameters(opts: {
        isDeleted: boolean;
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
    }): Promise<any>;
    /**
     * Get parameter by ID
     *  Use case  User sets parameter internal (guid format) identifier  User runs method execution  System search parameter using the identifier  System returns parameter
     * @param {String} id Parameter internal (UUID) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ParameterApiResult} and HTTP response
     */
    getParameterByIdWithHttpInfo(id: string): Promise<any>;
    /**
     * Get parameter by ID
     *  Use case  User sets parameter internal (guid format) identifier  User runs method execution  System search parameter using the identifier  System returns parameter
     * @param {String} id Parameter internal (UUID) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ParameterApiResult}
     */
    getParameterById(id: string): Promise<any>;
    /**
     * Update parameter
     *  Use case  User sets parameter updated properties(listed in the request example)  User runs method execution  System updated parameter using updated properties  System returns no content response
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateParameterApiModel} [updateParameterApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updateParameterWithHttpInfo(opts: any): Promise<any>;
    /**
     * Update parameter
     *  Use case  User sets parameter updated properties(listed in the request example)  User runs method execution  System updated parameter using updated properties  System returns no content response
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateParameterApiModel} opts.updateParameterApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateParameter(opts: {
        updateParameterApiModel: any;
    }): Promise<any>;
}
