/**
* ProjectAttributes service.
* @module api/ProjectAttributesApi
* @version 7.1.0-TMS-5.6
*/
export default class ProjectAttributesApi {
    /**
    * Constructs a new ProjectAttributesApi.
    * @alias module:api/ProjectAttributesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Create project attribute
     *  Use case  User sets attribute parameters (listed in request example) and runs method execution  System search project  System creates attribute and relates it to the project  System returns project attribute properties (example listed in response parameters)
     * @param {String} projectId Project internal (UUID) or global (integer) identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/CustomAttributePostModel} [customAttributePostModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomAttributeModel} and HTTP response
     */
    createProjectsAttributeWithHttpInfo(projectId: string, opts: any): Promise<any>;
    /**
     * Create project attribute
     *  Use case  User sets attribute parameters (listed in request example) and runs method execution  System search project  System creates attribute and relates it to the project  System returns project attribute properties (example listed in response parameters)
     * @param {String} projectId Project internal (UUID) or global (integer) identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/CustomAttributePostModel} opts.customAttributePostModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomAttributeModel}
     */
    createProjectsAttribute(projectId: string, opts: {
        customAttributePostModel: any;
    }): Promise<any>;
    /**
     * Delete project attribute
     *  Use case  User sets project identifier and runs method execution  User sets attribute identifier  User runs method execution  System search project  System search and delete attribute  System returns no content response
     * @param {String} projectId Project internal (UUID) or global (integer) identifier
     * @param {String} attributeId Project attribute internal (UUID)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteProjectsAttributeWithHttpInfo(projectId: string, attributeId: string): Promise<any>;
    /**
     * Delete project attribute
     *  Use case  User sets project identifier and runs method execution  User sets attribute identifier  User runs method execution  System search project  System search and delete attribute  System returns no content response
     * @param {String} projectId Project internal (UUID) or global (integer) identifier
     * @param {String} attributeId Project attribute internal (UUID)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteProjectsAttribute(projectId: string, attributeId: string): Promise<any>;
    /**
     * Get project attribute
     *  Use case  User sets project internal or global identifier  User sets project attribute identifier  User runs method execution  System search project  System search project attribute  System returns project attribute (listed in response model)
     * @param {String} projectId Project internal (UUID) or global (integer) identifier
     * @param {String} attributeId Project attribute internal (UUID) or global (integer) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomAttributeModel} and HTTP response
     */
    getAttributeByProjectIdWithHttpInfo(projectId: string, attributeId: string): Promise<any>;
    /**
     * Get project attribute
     *  Use case  User sets project internal or global identifier  User sets project attribute identifier  User runs method execution  System search project  System search project attribute  System returns project attribute (listed in response model)
     * @param {String} projectId Project internal (UUID) or global (integer) identifier
     * @param {String} attributeId Project attribute internal (UUID) or global (integer) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomAttributeModel}
     */
    getAttributeByProjectId(projectId: string, attributeId: string): Promise<any>;
    /**
     * Get project attributes
     *  Use case  User sets project internal or global identifier  [Optional] User sets isDeleted field value  User runs method execution  System search project  [Optional] If User sets isDeleted field value as true, System search all deleted attributes related to project  [Optional] If User sets isDeleted field value as false, System search all attributes related to project which are not deleted  [Optional] If User did not set isDeleted field value, System search all attributes related to project  System returns array of found attributes (listed in response model)
     * @param {String} projectId Project internal (UUID) or global (integer) identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/DeletionState} [isDeleted]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CustomAttributeModel>} and HTTP response
     */
    getAttributesByProjectIdWithHttpInfo(projectId: string, opts: any): Promise<any>;
    /**
     * Get project attributes
     *  Use case  User sets project internal or global identifier  [Optional] User sets isDeleted field value  User runs method execution  System search project  [Optional] If User sets isDeleted field value as true, System search all deleted attributes related to project  [Optional] If User sets isDeleted field value as false, System search all attributes related to project which are not deleted  [Optional] If User did not set isDeleted field value, System search all attributes related to project  System returns array of found attributes (listed in response model)
     * @param {String} projectId Project internal (UUID) or global (integer) identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/DeletionState} opts.isDeleted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CustomAttributeModel>}
     */
    getAttributesByProjectId(projectId: string, opts: {
        isDeleted: any;
    }): Promise<any>;
    /**
     * Search for attributes used in the project
     * @param {String} projectId Unique or global project ID
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @param {module:model/ProjectAttributesFilterModel} [projectAttributesFilterModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CustomAttributeGetModel>} and HTTP response
     */
    searchAttributesInProjectWithHttpInfo(projectId: string, opts: any): Promise<any>;
    /**
     * Search for attributes used in the project
     * @param {String} projectId Unique or global project ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @param {module:model/ProjectAttributesFilterModel} opts.projectAttributesFilterModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CustomAttributeGetModel>}
     */
    searchAttributesInProject(projectId: string, opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
        projectAttributesFilterModel: any;
    }): Promise<any>;
    /**
     * Edit attribute of the project
     * @param {String} projectId Unique or global project ID
     * @param {Object} opts Optional parameters
     * @param {module:model/CustomAttributePutModel} [customAttributePutModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updateProjectsAttributeWithHttpInfo(projectId: string, opts: any): Promise<any>;
    /**
     * Edit attribute of the project
     * @param {String} projectId Unique or global project ID
     * @param {Object} opts Optional parameters
     * @param {module:model/CustomAttributePutModel} opts.customAttributePutModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateProjectsAttribute(projectId: string, opts: {
        customAttributePutModel: any;
    }): Promise<any>;
}
