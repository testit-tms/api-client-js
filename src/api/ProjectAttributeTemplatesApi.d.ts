/**
* ProjectAttributeTemplates service.
* @module api/ProjectAttributeTemplatesApi
* @version 7.1.0-TMS-5.6
*/
export default class ProjectAttributeTemplatesApi {
    /**
    * Constructs a new ProjectAttributeTemplatesApi.
    * @alias module:api/ProjectAttributeTemplatesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Search for custom attributes templates
     * @param {String} projectId Internal (UUID) or global (integer) identifier
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @param {module:model/ProjectCustomAttributesTemplatesFilterModel} [projectCustomAttributesTemplatesFilterModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ProjectCustomAttributeTemplateGetModel>} and HTTP response
     */
    apiV2ProjectsProjectIdAttributesTemplatesSearchPostWithHttpInfo(projectId: string, opts: any): Promise<any>;
    /**
     * Search for custom attributes templates
     * @param {String} projectId Internal (UUID) or global (integer) identifier
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @param {module:model/ProjectCustomAttributesTemplatesFilterModel} opts.projectCustomAttributesTemplatesFilterModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ProjectCustomAttributeTemplateGetModel>}
     */
    apiV2ProjectsProjectIdAttributesTemplatesSearchPost(projectId: string, opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
        projectCustomAttributesTemplatesFilterModel: any;
    }): Promise<any>;
    /**
     * Delete CustomAttributeTemplate from Project
     *  Use case  User sets project internal or global identifier  User sets attribute template internal identifier  User runs method execution  System delete attribute template from project
     * @param {String} projectId Project internal (UUID) or global (integer) identifier
     * @param {String} templateId CustomAttributeTemplate internal (UUID) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2ProjectsProjectIdAttributesTemplatesTemplateIdDeleteWithHttpInfo(projectId: string, templateId: string): Promise<any>;
    /**
     * Delete CustomAttributeTemplate from Project
     *  Use case  User sets project internal or global identifier  User sets attribute template internal identifier  User runs method execution  System delete attribute template from project
     * @param {String} projectId Project internal (UUID) or global (integer) identifier
     * @param {String} templateId CustomAttributeTemplate internal (UUID) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2ProjectsProjectIdAttributesTemplatesTemplateIdDelete(projectId: string, templateId: string): Promise<any>;
    /**
     * Add CustomAttributeTemplate to Project
     *  Use case  User sets project internal or global identifier  User sets attribute template internal identifier  User runs method execution  System add attribute template to project
     * @param {String} projectId Project internal (UUID) or global (integer) identifier
     * @param {String} templateId CustomAttributeTemplate internal (UUID) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2ProjectsProjectIdAttributesTemplatesTemplateIdPostWithHttpInfo(projectId: string, templateId: string): Promise<any>;
    /**
     * Add CustomAttributeTemplate to Project
     *  Use case  User sets project internal or global identifier  User sets attribute template internal identifier  User runs method execution  System add attribute template to project
     * @param {String} projectId Project internal (UUID) or global (integer) identifier
     * @param {String} templateId CustomAttributeTemplate internal (UUID) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2ProjectsProjectIdAttributesTemplatesTemplateIdPost(projectId: string, templateId: string): Promise<any>;
}
