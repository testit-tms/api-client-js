/**
* CustomAttributeTemplates service.
* @module api/CustomAttributeTemplatesApi
* @version 7.1.0-TMS-5.6
*/
export default class CustomAttributeTemplatesApi {
    /**
    * Constructs a new CustomAttributeTemplatesApi.
    * @alias module:api/CustomAttributeTemplatesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * @param {Object} opts Optional parameters
     * @param {String} [name]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomAttributeTemplateValidationResult} and HTTP response
     */
    apiV2CustomAttributesTemplatesExistsGetWithHttpInfo(opts: any): Promise<any>;
    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomAttributeTemplateValidationResult}
     */
    apiV2CustomAttributesTemplatesExistsGet(opts: {
        name: string;
    }): Promise<any>;
    /**
     * Exclude CustomAttributes from CustomAttributeTemplate
     *  Use case  User sets attribute template internal identifier  User sets attribute internal identifiers  User runs method execution  System delete attributes from attributes tempalte
     * @param {String} id Attribute template internal (UUID) identifier
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} [requestBody]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2CustomAttributesTemplatesIdCustomAttributesExcludePostWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Exclude CustomAttributes from CustomAttributeTemplate
     *  Use case  User sets attribute template internal identifier  User sets attribute internal identifiers  User runs method execution  System delete attributes from attributes tempalte
     * @param {String} id Attribute template internal (UUID) identifier
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.requestBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2CustomAttributesTemplatesIdCustomAttributesExcludePost(id: string, opts: {
        requestBody: Array<string>;
    }): Promise<any>;
    /**
     * Include CustomAttributes to CustomAttributeTemplate
     *  Use case  User sets attribute template internal identifier  User sets attribute internal identifiers  User runs method execution  System add attributes to attributes tempalte
     * @param {String} id Attribute template internal (UUID) identifier
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} [requestBody]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2CustomAttributesTemplatesIdCustomAttributesIncludePostWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Include CustomAttributes to CustomAttributeTemplate
     *  Use case  User sets attribute template internal identifier  User sets attribute internal identifiers  User runs method execution  System add attributes to attributes tempalte
     * @param {String} id Attribute template internal (UUID) identifier
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.requestBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2CustomAttributesTemplatesIdCustomAttributesIncludePost(id: string, opts: {
        requestBody: Array<string>;
    }): Promise<any>;
    /**
     * Delete CustomAttributeTemplate
     *  Use case  User sets attribute template internal identifier  User runs method execution  System search and delete attribute template  System returns no content response
     * @param {String} id Attribute template internal (UUID) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2CustomAttributesTemplatesIdDeleteWithHttpInfo(id: string): Promise<any>;
    /**
     * Delete CustomAttributeTemplate
     *  Use case  User sets attribute template internal identifier  User runs method execution  System search and delete attribute template  System returns no content response
     * @param {String} id Attribute template internal (UUID) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2CustomAttributesTemplatesIdDelete(id: string): Promise<any>;
    /**
     * Get CustomAttributeTemplate by ID
     *  Use case  User sets attribute template internal identifier  User runs method execution  System return attribute template (listed in response example)
     * @param {String} id CustomAttributeTemplate internal (UUID) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomAttributeTemplateModel} and HTTP response
     */
    apiV2CustomAttributesTemplatesIdGetWithHttpInfo(id: string): Promise<any>;
    /**
     * Get CustomAttributeTemplate by ID
     *  Use case  User sets attribute template internal identifier  User runs method execution  System return attribute template (listed in response example)
     * @param {String} id CustomAttributeTemplate internal (UUID) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomAttributeTemplateModel}
     */
    apiV2CustomAttributesTemplatesIdGet(id: string): Promise<any>;
    /**
     * Get CustomAttributeTemplate by name
     *  Use case  User sets attribute template name  User runs method execution  System search and return list of attribute templates (listed in response example)
     * @param {String} name CustomAttributeTemplate name for search
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomAttributeTemplateModel} and HTTP response
     */
    apiV2CustomAttributesTemplatesNameGetWithHttpInfo(name: string): Promise<any>;
    /**
     * Get CustomAttributeTemplate by name
     *  Use case  User sets attribute template name  User runs method execution  System search and return list of attribute templates (listed in response example)
     * @param {String} name CustomAttributeTemplate name for search
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomAttributeTemplateModel}
     */
    apiV2CustomAttributesTemplatesNameGet(name: string): Promise<any>;
    /**
     * Create CustomAttributeTemplate
     *  Use case  User sets attribute template parameters (listed in request example)  User runs method execution  System creates attribute template  System returns attribute template model (example listed in response parameters)
     * @param {Object} opts Optional parameters
     * @param {module:model/CustomAttributeTemplatePostModel} [customAttributeTemplatePostModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CustomAttributeTemplateModel} and HTTP response
     */
    apiV2CustomAttributesTemplatesPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Create CustomAttributeTemplate
     *  Use case  User sets attribute template parameters (listed in request example)  User runs method execution  System creates attribute template  System returns attribute template model (example listed in response parameters)
     * @param {Object} opts Optional parameters
     * @param {module:model/CustomAttributeTemplatePostModel} opts.customAttributeTemplatePostModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CustomAttributeTemplateModel}
     */
    apiV2CustomAttributesTemplatesPost(opts: {
        customAttributeTemplatePostModel: any;
    }): Promise<any>;
    /**
     * Update custom attributes template
     * @param {Object} opts Optional parameters
     * @param {module:model/CustomAttributeTemplatePutModel} [customAttributeTemplatePutModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2CustomAttributesTemplatesPutWithHttpInfo(opts: any): Promise<any>;
    /**
     * Update custom attributes template
     * @param {Object} opts Optional parameters
     * @param {module:model/CustomAttributeTemplatePutModel} opts.customAttributeTemplatePutModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2CustomAttributesTemplatesPut(opts: {
        customAttributeTemplatePutModel: any;
    }): Promise<any>;
    /**
     * Search CustomAttributeTemplates
     *  Use case  User sets search params model (listed in request example)  User runs method execution  System return attribute templates (listed in response example)
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @param {module:model/CustomAttributeTemplateSearchQueryModel} [customAttributeTemplateSearchQueryModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/SearchCustomAttributeTemplateGetModel>} and HTTP response
     */
    apiV2CustomAttributesTemplatesSearchPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Search CustomAttributeTemplates
     *  Use case  User sets search params model (listed in request example)  User runs method execution  System return attribute templates (listed in response example)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @param {module:model/CustomAttributeTemplateSearchQueryModel} opts.customAttributeTemplateSearchQueryModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/SearchCustomAttributeTemplateGetModel>}
     */
    apiV2CustomAttributesTemplatesSearchPost(opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
        customAttributeTemplateSearchQueryModel: any;
    }): Promise<any>;
}
