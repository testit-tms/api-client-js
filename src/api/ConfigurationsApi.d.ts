/**
* Configurations service.
* @module api/ConfigurationsApi
* @version 7.1.0
*/
export default class ConfigurationsApi {
    /**
    * Constructs a new ConfigurationsApi.
    * @alias module:api/ConfigurationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Create configurations by parameters
     * @param {Object} opts Optional parameters
     * @param {module:model/ConfigurationByParametersModel} [configurationByParametersModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<String>} and HTTP response
     */
    apiV2ConfigurationsCreateByParametersPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Create configurations by parameters
     * @param {Object} opts Optional parameters
     * @param {module:model/ConfigurationByParametersModel} opts.configurationByParametersModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<String>}
     */
    apiV2ConfigurationsCreateByParametersPost(opts: {
        configurationByParametersModel: any;
    }): Promise<any>;
    /**
     * Delete multiple configurations
     * @param {Object} opts Optional parameters
     * @param {module:model/ConfigurationSelectApiModel} [configurationSelectApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Number} and HTTP response
     */
    apiV2ConfigurationsDeleteBulkPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Delete multiple configurations
     * @param {Object} opts Optional parameters
     * @param {module:model/ConfigurationSelectApiModel} opts.configurationSelectApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Number}
     */
    apiV2ConfigurationsDeleteBulkPost(opts: {
        configurationSelectApiModel: any;
    }): Promise<any>;
    /**
     * Delete configuration
     * @param {String} id Unique or global ID of the configuration
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2ConfigurationsIdDeleteWithHttpInfo(id: string): Promise<any>;
    /**
     * Delete configuration
     * @param {String} id Unique or global ID of the configuration
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2ConfigurationsIdDelete(id: string): Promise<any>;
    /**
     * Patch configuration
     * See <a href=\"https://www.rfc-editor.org/rfc/rfc6902\" target=\"_blank\">RFC 6902: JavaScript Object Notation (JSON) Patch</a> for details
     * @param {String} id Unique ID of the configuration
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/Operation>} [operation]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2ConfigurationsIdPatchWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Patch configuration
     * See <a href=\"https://www.rfc-editor.org/rfc/rfc6902\" target=\"_blank\">RFC 6902: JavaScript Object Notation (JSON) Patch</a> for details
     * @param {String} id Unique ID of the configuration
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/Operation>} opts.operation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2ConfigurationsIdPatch(id: string, opts: any): Promise<any>;
    /**
     * Permanently delete configuration from archive
     * @param {String} id Unique or global ID of the configuration
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2ConfigurationsIdPurgePostWithHttpInfo(id: string): Promise<any>;
    /**
     * Permanently delete configuration from archive
     * @param {String} id Unique or global ID of the configuration
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2ConfigurationsIdPurgePost(id: string): Promise<any>;
    /**
     * Restore configuration from the archive
     * @param {String} id Unique or global ID of the configuration
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2ConfigurationsIdRestorePostWithHttpInfo(id: string): Promise<any>;
    /**
     * Restore configuration from the archive
     * @param {String} id Unique or global ID of the configuration
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2ConfigurationsIdRestorePost(id: string): Promise<any>;
    /**
     * Permanently delete multiple archived configurations
     * @param {Object} opts Optional parameters
     * @param {module:model/ConfigurationSelectModel} [configurationSelectModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Number} and HTTP response
     */
    apiV2ConfigurationsPurgeBulkPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Permanently delete multiple archived configurations
     * @param {Object} opts Optional parameters
     * @param {module:model/ConfigurationSelectModel} opts.configurationSelectModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Number}
     */
    apiV2ConfigurationsPurgeBulkPost(opts: {
        configurationSelectModel: any;
    }): Promise<any>;
    /**
     * Edit configuration
     * @param {Object} opts Optional parameters
     * @param {module:model/ConfigurationPutModel} [configurationPutModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2ConfigurationsPutWithHttpInfo(opts: any): Promise<any>;
    /**
     * Edit configuration
     * @param {Object} opts Optional parameters
     * @param {module:model/ConfigurationPutModel} opts.configurationPutModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2ConfigurationsPut(opts: {
        configurationPutModel: any;
    }): Promise<any>;
    /**
     * Restore multiple configurations from the archive
     * @param {Object} opts Optional parameters
     * @param {module:model/ConfigurationSelectModel} [configurationSelectModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Number} and HTTP response
     */
    apiV2ConfigurationsRestoreBulkPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Restore multiple configurations from the archive
     * @param {Object} opts Optional parameters
     * @param {module:model/ConfigurationSelectModel} opts.configurationSelectModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Number}
     */
    apiV2ConfigurationsRestoreBulkPost(opts: {
        configurationSelectModel: any;
    }): Promise<any>;
    /**
     * Search for configurations
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @param {module:model/ConfigurationFilterModel} [configurationFilterModel] Model containing all the filters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ConfigurationModel>} and HTTP response
     */
    apiV2ConfigurationsSearchPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Search for configurations
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @param {module:model/ConfigurationFilterModel} opts.configurationFilterModel Model containing all the filters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ConfigurationModel>}
     */
    apiV2ConfigurationsSearchPost(opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
        configurationFilterModel: any;
    }): Promise<any>;
    /**
     * Create Configuration
     *  Use case  User sets configuration model (listed in the request example)  User runs method execution  System creates configuration  System returns created configuration (listed in the response example)
     * @param {Object} opts Optional parameters
     * @param {module:model/ConfigurationPostModel} [configurationPostModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConfigurationModel} and HTTP response
     */
    createConfigurationWithHttpInfo(opts: any): Promise<any>;
    /**
     * Create Configuration
     *  Use case  User sets configuration model (listed in the request example)  User runs method execution  System creates configuration  System returns created configuration (listed in the response example)
     * @param {Object} opts Optional parameters
     * @param {module:model/ConfigurationPostModel} opts.configurationPostModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConfigurationModel}
     */
    createConfiguration(opts: {
        configurationPostModel: any;
    }): Promise<any>;
    /**
     * Get configuration by internal or global ID
     *  Use case  User sets configuration internal (guid format) or global (integer format) identifier  User runs method execution  System search configuration using the identifier  System returns configuration
     * @param {String} id Configuration internal (guid format) or global (integer format) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConfigurationModel} and HTTP response
     */
    getConfigurationByIdWithHttpInfo(id: string): Promise<any>;
    /**
     * Get configuration by internal or global ID
     *  Use case  User sets configuration internal (guid format) or global (integer format) identifier  User runs method execution  System search configuration using the identifier  System returns configuration
     * @param {String} id Configuration internal (guid format) or global (integer format) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConfigurationModel}
     */
    getConfigurationById(id: string): Promise<any>;
}
