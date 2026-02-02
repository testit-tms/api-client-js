/**
* Projects service.
* @module api/ProjectsApi
* @version 7.1.0
*/
export default class ProjectsApi {
    /**
    * Constructs a new ProjectsApi.
    * @alias module:api/ProjectsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Add global attributes to project
     *  Use case  User sets project internal or global identifier and attributes identifiers  System search project  System relates global attributes with project  System returns no content response
     * @param {String} id Project internal (UUID) or global (integer) identifier
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} [requestBody]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    addGlobalAttributesToProjectWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Add global attributes to project
     *  Use case  User sets project internal or global identifier and attributes identifiers  System search project  System relates global attributes with project  System returns no content response
     * @param {String} id Project internal (UUID) or global (integer) identifier
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.requestBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    addGlobalAttributesToProject(id: string, opts: {
        requestBody: Array<string>;
    }): Promise<any>;
    /**
     * Archive project
     * @param {String} id Unique or global ID of the project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2ProjectsIdDeleteWithHttpInfo(id: string): Promise<any>;
    /**
     * Archive project
     * @param {String} id Unique or global ID of the project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2ProjectsIdDelete(id: string): Promise<any>;
    /**
     * Get failure classes
     * @param {String} id Unique or global ID of the project
     * @param {Object} opts Optional parameters
     * @param {Boolean} [isDeleted]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/FailureCategoryApiResult>} and HTTP response
     */
    apiV2ProjectsIdFailureClassesGetWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Get failure classes
     * @param {String} id Unique or global ID of the project
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.isDeleted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/FailureCategoryApiResult>}
     */
    apiV2ProjectsIdFailureClassesGet(id: string, opts: {
        isDeleted: boolean;
    }): Promise<any>;
    /**
     * Mark Project as favorite
     * @param {String} id Project internal (UUID) or global (integer) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2ProjectsIdFavoritePutWithHttpInfo(id: string): Promise<any>;
    /**
     * Mark Project as favorite
     * @param {String} id Project internal (UUID) or global (integer) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2ProjectsIdFavoritePut(id: string): Promise<any>;
    /**
     * Get Project filters
     *  Use case  User sets project internal or global identifier  User runs method execution  System returns project filters
     * @param {String} id Project internal (UUID) or global (integer) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/FilterModel>} and HTTP response
     */
    apiV2ProjectsIdFiltersGetWithHttpInfo(id: string): Promise<any>;
    /**
     * Get Project filters
     *  Use case  User sets project internal or global identifier  User runs method execution  System returns project filters
     * @param {String} id Project internal (UUID) or global (integer) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/FilterModel>}
     */
    apiV2ProjectsIdFiltersGet(id: string): Promise<any>;
    /**
     * Patch project
     * See <a href=\"https://www.rfc-editor.org/rfc/rfc6902\" target=\"_blank\">RFC 6902: JavaScript Object Notation (JSON) Patch</a> for details
     * @param {String} id Unique or global Id of project
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/Operation>} [operation]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2ProjectsIdPatchWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Patch project
     * See <a href=\"https://www.rfc-editor.org/rfc/rfc6902\" target=\"_blank\">RFC 6902: JavaScript Object Notation (JSON) Patch</a> for details
     * @param {String} id Unique or global Id of project
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/Operation>} opts.operation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2ProjectsIdPatch(id: string, opts: any): Promise<any>;
    /**
     * Purge the project
     * @param {String} id Unique or global ID of the project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2ProjectsIdPurgePostWithHttpInfo(id: string): Promise<any>;
    /**
     * Purge the project
     * @param {String} id Unique or global ID of the project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2ProjectsIdPurgePost(id: string): Promise<any>;
    /**
     * Restore archived project
     * @param {String} id Unique or global ID of the project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2ProjectsIdRestorePostWithHttpInfo(id: string): Promise<any>;
    /**
     * Restore archived project
     * @param {String} id Unique or global ID of the project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2ProjectsIdRestorePost(id: string): Promise<any>;
    /**
     * Delete attribute from project's test plans
     *  Use case  User sets project internal or global identifier and attribute identifier  User runs method execution  System updates project and delete attribute from project for test plans  System returns no content response
     * @param {String} id Project internal (UUID) or global (integer) identifier
     * @param {String} attributeId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2ProjectsIdTestPlansAttributeAttributeIdDeleteWithHttpInfo(id: string, attributeId: string): Promise<any>;
    /**
     * Delete attribute from project's test plans
     *  Use case  User sets project internal or global identifier and attribute identifier  User runs method execution  System updates project and delete attribute from project for test plans  System returns no content response
     * @param {String} id Project internal (UUID) or global (integer) identifier
     * @param {String} attributeId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2ProjectsIdTestPlansAttributeAttributeIdDelete(id: string, attributeId: string): Promise<any>;
    /**
     * Update attribute of project's test plans
     *  Use case  User sets project internal or global identifier and attribute model  User runs method execution  System updates project and project attribute for test plan  System returns no content response
     * @param {String} id Project internal (UUID) or global (integer) identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/CustomAttributeTestPlanProjectRelationPutModel} [customAttributeTestPlanProjectRelationPutModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2ProjectsIdTestPlansAttributePutWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Update attribute of project's test plans
     *  Use case  User sets project internal or global identifier and attribute model  User runs method execution  System updates project and project attribute for test plan  System returns no content response
     * @param {String} id Project internal (UUID) or global (integer) identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/CustomAttributeTestPlanProjectRelationPutModel} opts.customAttributeTestPlanProjectRelationPutModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2ProjectsIdTestPlansAttributePut(id: string, opts: {
        customAttributeTestPlanProjectRelationPutModel: any;
    }): Promise<any>;
    /**
     * Get Project TestRuns full models
     *  Use case  User sets project internal or global identifier  User sets query params  User runs method execution  System returns project test runs full models
     * @param {String} id Project internal (UUID) or global (integer) identifier
     * @param {Object} opts Optional parameters
     * @param {Boolean} [includeTestResults]
     * @param {Boolean} [mustAggregateTestResults]
     * @param {Boolean} [notStarted]
     * @param {Boolean} [inProgress]
     * @param {Boolean} [stopped]
     * @param {Boolean} [completed]
     * @param {Date} [createdDateFrom]
     * @param {Date} [createdDateTo]
     * @param {String} [testPlanId]
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TestRunApiResult>} and HTTP response
     */
    apiV2ProjectsIdTestRunsFullGetWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Get Project TestRuns full models
     *  Use case  User sets project internal or global identifier  User sets query params  User runs method execution  System returns project test runs full models
     * @param {String} id Project internal (UUID) or global (integer) identifier
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeTestResults
     * @param {Boolean} opts.mustAggregateTestResults
     * @param {Boolean} opts.notStarted
     * @param {Boolean} opts.inProgress
     * @param {Boolean} opts.stopped
     * @param {Boolean} opts.completed
     * @param {Date} opts.createdDateFrom
     * @param {Date} opts.createdDateTo
     * @param {String} opts.testPlanId
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TestRunApiResult>}
     */
    apiV2ProjectsIdTestRunsFullGet(id: string, opts: {
        includeTestResults: boolean;
        mustAggregateTestResults: boolean;
        notStarted: boolean;
        inProgress: boolean;
        stopped: boolean;
        completed: boolean;
        createdDateFrom: Date;
        createdDateTo: Date;
        testPlanId: string;
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
    }): Promise<any>;
    /**
     * @param {String} name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Boolean} and HTTP response
     */
    apiV2ProjectsNameNameExistsGetWithHttpInfo(name: string): Promise<any>;
    /**
     * @param {String} name
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Boolean}
     */
    apiV2ProjectsNameNameExistsGet(name: string): Promise<any>;
    /**
     * Purge multiple projects
     * @param {Object} opts Optional parameters
     * @param {module:model/ProjectSelectModel} [projectSelectModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Number} and HTTP response
     */
    apiV2ProjectsPurgeBulkPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Purge multiple projects
     * @param {Object} opts Optional parameters
     * @param {module:model/ProjectSelectModel} opts.projectSelectModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Number}
     */
    apiV2ProjectsPurgeBulkPost(opts: {
        projectSelectModel: any;
    }): Promise<any>;
    /**
     * Restore multiple projects
     * @param {Object} opts Optional parameters
     * @param {module:model/ProjectSelectModel} [projectSelectModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Number} and HTTP response
     */
    apiV2ProjectsRestoreBulkPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Restore multiple projects
     * @param {Object} opts Optional parameters
     * @param {module:model/ProjectSelectModel} opts.projectSelectModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Number}
     */
    apiV2ProjectsRestoreBulkPost(opts: {
        projectSelectModel: any;
    }): Promise<any>;
    /**
     * Search for projects
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @param {module:model/ProjectsFilterModel} [projectsFilterModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ProjectShortModel>} and HTTP response
     */
    apiV2ProjectsSearchPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Search for projects
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @param {module:model/ProjectsFilterModel} opts.projectsFilterModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ProjectShortModel>}
     */
    apiV2ProjectsSearchPost(opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
        projectsFilterModel: any;
    }): Promise<any>;
    /**
     * Get projects short models
     *  Use case  User sets query params  User runs method execution  System return projects short models
     * @param {Object} opts Optional parameters
     * @param {module:model/GetShortProjectsApiModel} [getShortProjectsApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProjectShortApiResultReply} and HTTP response
     */
    apiV2ProjectsShortsPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Get projects short models
     *  Use case  User sets query params  User runs method execution  System return projects short models
     * @param {Object} opts Optional parameters
     * @param {module:model/GetShortProjectsApiModel} opts.getShortProjectsApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectShortApiResultReply}
     */
    apiV2ProjectsShortsPost(opts: {
        getShortProjectsApiModel: any;
    }): Promise<any>;
    /**
     * Create project
     *  Use case  User sets project parameters (listed in request example) and runs method execution  System creates project  System returns project model (example listed in response parameters)
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateProjectApiModel} [createProjectApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProjectApiResult} and HTTP response
     */
    createProjectWithHttpInfo(opts: any): Promise<any>;
    /**
     * Create project
     *  Use case  User sets project parameters (listed in request example) and runs method execution  System creates project  System returns project model (example listed in response parameters)
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateProjectApiModel} opts.createProjectApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectApiResult}
     */
    createProject(opts: {
        createProjectApiModel: any;
    }): Promise<any>;
    /**
     * Delete all autotests from project
     * @param {String} id Unique or global ID of the project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteProjectAutoTestsWithHttpInfo(id: string): Promise<any>;
    /**
     * Delete all autotests from project
     * @param {String} id Unique or global ID of the project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteProjectAutoTests(id: string): Promise<any>;
    /**
     * Get all projects
     *  Use case  [Optional] User sets isDeleted field value  [Optional] If User sets isDeleted field value as true, System search all deleted projects  [Optional] If User sets isDeleted field value as false, System search all projects which are not deleted  If User did not set isDeleted field value, System search all projects  System returns array of all found projects(listed in response model)
     * @param {Object} opts Optional parameters
     * @param {Boolean} [isDeleted] If result must consist of only actual/deleted parameters
     * @param {String} [projectName]
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ProjectShortModel>} and HTTP response
     */
    getAllProjectsWithHttpInfo(opts: any): Promise<any>;
    /**
     * Get all projects
     *  Use case  [Optional] User sets isDeleted field value  [Optional] If User sets isDeleted field value as true, System search all deleted projects  [Optional] If User sets isDeleted field value as false, System search all projects which are not deleted  If User did not set isDeleted field value, System search all projects  System returns array of all found projects(listed in response model)
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.isDeleted If result must consist of only actual/deleted parameters
     * @param {String} opts.projectName
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ProjectShortModel>}
     */
    getAllProjects(opts: {
        isDeleted: boolean;
        projectName: string;
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
    }): Promise<any>;
    /**
     * Get namespaces of autotests in project
     *  Use case  User sets project internal or global identifier and runs method execution  System search project  System search all autotest related to the project  System returns array of autotest with namespaces and classnames (listed in response)
     * @param {String} id Project internal (UUID) or global (integer) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/AutoTestNamespaceApiResult>} and HTTP response
     */
    getAutoTestsNamespacesWithHttpInfo(id: string): Promise<any>;
    /**
     * Get namespaces of autotests in project
     *  Use case  User sets project internal or global identifier and runs method execution  System search project  System search all autotest related to the project  System returns array of autotest with namespaces and classnames (listed in response)
     * @param {String} id Project internal (UUID) or global (integer) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/AutoTestNamespaceApiResult>}
     */
    getAutoTestsNamespaces(id: string): Promise<any>;
    /**
     * Get project by ID
     *  Use case  User sets project internal or global identifier and runs method execution  System search project  System returns project (example listed in response parameters)
     * @param {String} id Project internal (UUID) or global (integer) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ProjectModel} and HTTP response
     */
    getProjectByIdWithHttpInfo(id: string): Promise<any>;
    /**
     * Get project by ID
     *  Use case  User sets project internal or global identifier and runs method execution  System search project  System returns project (example listed in response parameters)
     * @param {String} id Project internal (UUID) or global (integer) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProjectModel}
     */
    getProjectById(id: string): Promise<any>;
    /**
     * Get project test plans
     *  Use case  User sets project internal or global identifier  [Optional] User sets isDeleted field value  User runs method execution  System search project  [Optional] If User sets isDeleted field value as true, System search all deleted test plans related to project  [Optional] If User sets isDeleted field value as false, System search all test plans related to project which are not deleted  [Optional] If User did not set isDeleted field value, System search all v related to project  System returns array of found test plans (listed in response model)
     * @param {String} id Project internal (UUID) or global (integer) identifier
     * @param {Object} opts Optional parameters
     * @param {Boolean} [isDeleted] If result must consist of only actual/archived test plans
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TestPlanModel>} and HTTP response
     */
    getTestPlansByProjectIdWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Get project test plans
     *  Use case  User sets project internal or global identifier  [Optional] User sets isDeleted field value  User runs method execution  System search project  [Optional] If User sets isDeleted field value as true, System search all deleted test plans related to project  [Optional] If User sets isDeleted field value as false, System search all test plans related to project which are not deleted  [Optional] If User did not set isDeleted field value, System search all v related to project  System returns array of found test plans (listed in response model)
     * @param {String} id Project internal (UUID) or global (integer) identifier
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.isDeleted If result must consist of only actual/archived test plans
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TestPlanModel>}
     */
    getTestPlansByProjectId(id: string, opts: {
        isDeleted: boolean;
    }): Promise<any>;
    /**
     * Get project test runs
     *  Use case  User sets project internal or global identifier  User runs method execution  System search project  System search all test runs related to project  System returns array of found test runs (listed in response model)
     * @param {String} id Project internal (UUID) or global (integer) identifier
     * @param {Boolean} notStarted
     * @param {Boolean} inProgress
     * @param {Boolean} stopped
     * @param {Boolean} completed
     * @param {Object} opts Optional parameters
     * @param {Date} [createdDateFrom]
     * @param {Date} [createdDateTo]
     * @param {String} [testPlanId]
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TestRunV2ApiResult>} and HTTP response
     */
    getTestRunsByProjectIdWithHttpInfo(id: string, notStarted: boolean, inProgress: boolean, stopped: boolean, completed: boolean, opts: any): Promise<any>;
    /**
     * Get project test runs
     *  Use case  User sets project internal or global identifier  User runs method execution  System search project  System search all test runs related to project  System returns array of found test runs (listed in response model)
     * @param {String} id Project internal (UUID) or global (integer) identifier
     * @param {Boolean} notStarted
     * @param {Boolean} inProgress
     * @param {Boolean} stopped
     * @param {Boolean} completed
     * @param {Object} opts Optional parameters
     * @param {Date} opts.createdDateFrom
     * @param {Date} opts.createdDateTo
     * @param {String} opts.testPlanId
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TestRunV2ApiResult>}
     */
    getTestRunsByProjectId(id: string, notStarted: boolean, inProgress: boolean, stopped: boolean, completed: boolean, opts: {
        createdDateFrom: Date;
        createdDateTo: Date;
        testPlanId: string;
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
    }): Promise<any>;
    /**
     * Update project
     *  Use case  User sets project parameters (listed in request example) and runs method execution  System updates project  System returns updated project model (example listed in response parameters)
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateProjectApiModel} [updateProjectApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updateProjectWithHttpInfo(opts: any): Promise<any>;
    /**
     * Update project
     *  Use case  User sets project parameters (listed in request example) and runs method execution  System updates project  System returns updated project model (example listed in response parameters)
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateProjectApiModel} opts.updateProjectApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateProject(opts: {
        updateProjectApiModel: any;
    }): Promise<any>;
}
