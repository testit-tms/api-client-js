/**
* ProjectTestPlanAttributes service.
* @module api/ProjectTestPlanAttributesApi
* @version 7.1.0
*/
export default class ProjectTestPlanAttributesApi {
    /**
    * Constructs a new ProjectTestPlanAttributesApi.
    * @alias module:api/ProjectTestPlanAttributesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Add attributes to project's test plans
     *  Use case  User sets project internal or global identifier and attributes identifiers  User runs method execution  System updates project and add attributes to project for test plans  System returns no content response
     * @param {String} projectId Project internal (UUID) or global (integer) identifier
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} [requestBody]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    createCustomAttributeTestPlanProjectRelationsWithHttpInfo(projectId: string, opts: any): Promise<any>;
    /**
     * Add attributes to project's test plans
     *  Use case  User sets project internal or global identifier and attributes identifiers  User runs method execution  System updates project and add attributes to project for test plans  System returns no content response
     * @param {String} projectId Project internal (UUID) or global (integer) identifier
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.requestBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    createCustomAttributeTestPlanProjectRelations(projectId: string, opts: {
        requestBody: Array<string>;
    }): Promise<any>;
    /**
     * Delete attribute from project's test plans
     *  Use case  User sets project internal or global identifier and attribute identifier  User runs method execution  System updates project and delete attribute from project for test plans  System returns no content response
     * @param {String} projectId Project internal (UUID) or global (integer) identifier
     * @param {String} attributeId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteCustomAttributeTestPlanProjectRelationsWithHttpInfo(projectId: string, attributeId: string): Promise<any>;
    /**
     * Delete attribute from project's test plans
     *  Use case  User sets project internal or global identifier and attribute identifier  User runs method execution  System updates project and delete attribute from project for test plans  System returns no content response
     * @param {String} projectId Project internal (UUID) or global (integer) identifier
     * @param {String} attributeId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteCustomAttributeTestPlanProjectRelations(projectId: string, attributeId: string): Promise<any>;
    /**
     * Get project's test plan attributes
     *  Use case  User runs method execution  System returns project for test plans attributes by project identifier
     * @param {String} projectId Project internal (UUID) or global (integer) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/CustomAttributeModel>} and HTTP response
     */
    getCustomAttributeTestPlanProjectRelationsWithHttpInfo(projectId: string): Promise<any>;
    /**
     * Get project's test plan attributes
     *  Use case  User runs method execution  System returns project for test plans attributes by project identifier
     * @param {String} projectId Project internal (UUID) or global (integer) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/CustomAttributeModel>}
     */
    getCustomAttributeTestPlanProjectRelations(projectId: string): Promise<any>;
    /**
     * Search for attributes used in the project test plans
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
    searchTestPlanAttributesInProjectWithHttpInfo(projectId: string, opts: any): Promise<any>;
    /**
     * Search for attributes used in the project test plans
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
    searchTestPlanAttributesInProject(projectId: string, opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
        projectAttributesFilterModel: any;
    }): Promise<any>;
    /**
     * Update attribute of project's test plans
     *  Use case  User sets project internal or global identifier and attribute model  User runs method execution  System updates project and project attribute for test plan  System returns no content response
     * @param {String} projectId Project internal (UUID) or global (integer) identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/CustomAttributeTestPlanProjectRelationPutModel} [customAttributeTestPlanProjectRelationPutModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updateCustomAttributeTestPlanProjectRelationsWithHttpInfo(projectId: string, opts: any): Promise<any>;
    /**
     * Update attribute of project's test plans
     *  Use case  User sets project internal or global identifier and attribute model  User runs method execution  System updates project and project attribute for test plan  System returns no content response
     * @param {String} projectId Project internal (UUID) or global (integer) identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/CustomAttributeTestPlanProjectRelationPutModel} opts.customAttributeTestPlanProjectRelationPutModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateCustomAttributeTestPlanProjectRelations(projectId: string, opts: {
        customAttributeTestPlanProjectRelationPutModel: any;
    }): Promise<any>;
}
