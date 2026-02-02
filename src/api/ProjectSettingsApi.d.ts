/**
* ProjectSettings service.
* @module api/ProjectSettingsApi
* @version 7.1.0
*/
export default class ProjectSettingsApi {
    /**
    * Constructs a new ProjectSettingsApi.
    * @alias module:api/ProjectSettingsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Set autotest project settings.
     * @param {String} projectId Internal (UUID) or global (integer) identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/AutoTestProjectSettingsApiModel} [autoTestProjectSettingsApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2ProjectsProjectIdSettingsAutotestsPostWithHttpInfo(projectId: string, opts: any): Promise<any>;
    /**
     * Set autotest project settings.
     * @param {String} projectId Internal (UUID) or global (integer) identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/AutoTestProjectSettingsApiModel} opts.autoTestProjectSettingsApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2ProjectsProjectIdSettingsAutotestsPost(projectId: string, opts: {
        autoTestProjectSettingsApiModel: any;
    }): Promise<any>;
    /**
     * Get autotest project settings.
     * @param {String} projectId Internal (UUID) or global (integer) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AutoTestProjectSettingsApiResult} and HTTP response
     */
    getAutotestProjectSettingsWithHttpInfo(projectId: string): Promise<any>;
    /**
     * Get autotest project settings.
     * @param {String} projectId Internal (UUID) or global (integer) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AutoTestProjectSettingsApiResult}
     */
    getAutotestProjectSettings(projectId: string): Promise<any>;
}
