/**
* ProjectTestPlans service.
* @module api/ProjectTestPlansApi
* @version 7.1.0
*/
export default class ProjectTestPlansApi {
    /**
    * Constructs a new ProjectTestPlansApi.
    * @alias module:api/ProjectTestPlansApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Get TestPlans analytics
     *  Use case  User sets project internal identifier  User sets query params  User runs method execution  System return analytics
     * @param {String} projectId Project internal (UUID) identifier
     * @param {Object} opts Optional parameters
     * @param {Boolean} [isDeleted]
     * @param {Boolean} [mustUpdateCache = false)]
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TestPlanWithAnalyticModel>} and HTTP response
     */
    apiV2ProjectsProjectIdTestPlansAnalyticsGetWithHttpInfo(projectId: string, opts: any): Promise<any>;
    /**
     * Get TestPlans analytics
     *  Use case  User sets project internal identifier  User sets query params  User runs method execution  System return analytics
     * @param {String} projectId Project internal (UUID) identifier
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.isDeleted
     * @param {Boolean} opts.mustUpdateCache  (default to false)
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TestPlanWithAnalyticModel>}
     */
    apiV2ProjectsProjectIdTestPlansAnalyticsGet(projectId: string, opts: {
        isDeleted: boolean;
        mustUpdateCache: boolean;
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
    }): Promise<any>;
    /**
     * Delete multiple test plans
     * @param {String} projectId Unique or global ID of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/TestPlanSelectModel} [testPlanSelectModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<String>} and HTTP response
     */
    apiV2ProjectsProjectIdTestPlansDeleteBulkPostWithHttpInfo(projectId: string, opts: any): Promise<any>;
    /**
     * Delete multiple test plans
     * @param {String} projectId Unique or global ID of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/TestPlanSelectModel} opts.testPlanSelectModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<String>}
     */
    apiV2ProjectsProjectIdTestPlansDeleteBulkPost(projectId: string, opts: {
        testPlanSelectModel: any;
    }): Promise<any>;
    /**
     * Checks if TestPlan exists with the specified name exists for the project
     *  Use case  User sets project internal or global identifier  User runs method execution  System purge delete project workitems
     * @param {String} projectId Project internal (UUID) or global (integer) identifier
     * @param {String} name TestPlan name to check
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Boolean} and HTTP response
     */
    apiV2ProjectsProjectIdTestPlansNameExistsGetWithHttpInfo(projectId: string, name: string): Promise<any>;
    /**
     * Checks if TestPlan exists with the specified name exists for the project
     *  Use case  User sets project internal or global identifier  User runs method execution  System purge delete project workitems
     * @param {String} projectId Project internal (UUID) or global (integer) identifier
     * @param {String} name TestPlan name to check
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Boolean}
     */
    apiV2ProjectsProjectIdTestPlansNameExistsGet(projectId: string, name: string): Promise<any>;
    /**
     * Permanently delete multiple archived test plans
     * @param {String} projectId Unique or global ID of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/TestPlanSelectModel} [testPlanSelectModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2ProjectsProjectIdTestPlansPurgeBulkPostWithHttpInfo(projectId: string, opts: any): Promise<any>;
    /**
     * Permanently delete multiple archived test plans
     * @param {String} projectId Unique or global ID of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/TestPlanSelectModel} opts.testPlanSelectModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2ProjectsProjectIdTestPlansPurgeBulkPost(projectId: string, opts: {
        testPlanSelectModel: any;
    }): Promise<any>;
    /**
     * Restore multiple test plans
     * @param {String} projectId Unique or global ID of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/TestPlanSelectModel} [testPlanSelectModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<String>} and HTTP response
     */
    apiV2ProjectsProjectIdTestPlansRestoreBulkPostWithHttpInfo(projectId: string, opts: any): Promise<any>;
    /**
     * Restore multiple test plans
     * @param {String} projectId Unique or global ID of the project
     * @param {Object} opts Optional parameters
     * @param {module:model/TestPlanSelectModel} opts.testPlanSelectModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<String>}
     */
    apiV2ProjectsProjectIdTestPlansRestoreBulkPost(projectId: string, opts: {
        testPlanSelectModel: any;
    }): Promise<any>;
    /**
     * Get Project TestPlans with analytics
     *  Use case  User sets project internal or global identifier  User sets request body  User runs method execution  System returns project testplans with analytics
     * @param {String} projectId Project internal (UUID) or global (integer) identifier
     * @param {Object} opts Optional parameters
     * @param {Boolean} [mustUpdateCache = false)]
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @param {module:model/ProjectTestPlansFilterModel} [projectTestPlansFilterModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TestPlanWithAnalyticModel>} and HTTP response
     */
    apiV2ProjectsProjectIdTestPlansSearchPostWithHttpInfo(projectId: string, opts: any): Promise<any>;
    /**
     * Get Project TestPlans with analytics
     *  Use case  User sets project internal or global identifier  User sets request body  User runs method execution  System returns project testplans with analytics
     * @param {String} projectId Project internal (UUID) or global (integer) identifier
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.mustUpdateCache  (default to false)
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @param {module:model/ProjectTestPlansFilterModel} opts.projectTestPlansFilterModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TestPlanWithAnalyticModel>}
     */
    apiV2ProjectsProjectIdTestPlansSearchPost(projectId: string, opts: {
        mustUpdateCache: boolean;
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
        projectTestPlansFilterModel: any;
    }): Promise<any>;
}
