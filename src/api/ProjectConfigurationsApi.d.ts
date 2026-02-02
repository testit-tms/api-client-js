/**
* ProjectConfigurations service.
* @module api/ProjectConfigurationsApi
* @version 7.1.0-TMS-5.6
*/
export default class ProjectConfigurationsApi {
    /**
    * Constructs a new ProjectConfigurationsApi.
    * @alias module:api/ProjectConfigurationsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Get project configurations
     *  Use case  User sets project internal or global identifier  User runs method execution  System search project  System search all configurations related to project  System returns array of found configurations (listed in response model)
     * @param {String} projectId Project internal (UUID) or global (integer) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ConfigurationModel>} and HTTP response
     */
    getConfigurationsByProjectIdWithHttpInfo(projectId: string): Promise<any>;
    /**
     * Get project configurations
     *  Use case  User sets project internal or global identifier  User runs method execution  System search project  System search all configurations related to project  System returns array of found configurations (listed in response model)
     * @param {String} projectId Project internal (UUID) or global (integer) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ConfigurationModel>}
     */
    getConfigurationsByProjectId(projectId: string): Promise<any>;
}
