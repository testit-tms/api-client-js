/**
* TestPlans service.
* @module api/TestPlansApi
* @version 7.1.0
*/
export default class TestPlansApi {
    /**
    * Constructs a new TestPlansApi.
    * @alias module:api/TestPlansApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Add test-points to TestPlan with sections
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/WorkItemSelectModel} [workItemSelectModel] Filter object to retrieve work items for test-suite's project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    addTestPointsWithSectionsWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Add test-points to TestPlan with sections
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/WorkItemSelectModel} opts.workItemSelectModel Filter object to retrieve work items for test-suite's project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    addTestPointsWithSections(id: string, opts: {
        workItemSelectModel: any;
    }): Promise<any>;
    /**
     * Add WorkItems to TestPlan with Sections as TestSuites
     *  Use case  User sets TestPlan identifier  User sets WorkItem identifiers (listed in request example)  User runs method execution  System added WorkItems and Sections to TestPlan  System returns no content response
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} [requestBody]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    addWorkItemsWithSectionsWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Add WorkItems to TestPlan with Sections as TestSuites
     *  Use case  User sets TestPlan identifier  User sets WorkItem identifiers (listed in request example)  User runs method execution  System added WorkItems and Sections to TestPlan  System returns no content response
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.requestBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    addWorkItemsWithSections(id: string, opts: {
        requestBody: Array<string>;
    }): Promise<any>;
    /**
     * Get analytics by TestPlan
     *  Use case  User sets test plan identifier  User runs method execution  System returns analytics by test plan
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TestPointAnalyticResult} and HTTP response
     */
    apiV2TestPlansIdAnalyticsGetWithHttpInfo(id: string): Promise<any>;
    /**
     * Get analytics by TestPlan
     *  Use case  User sets test plan identifier  User runs method execution  System returns analytics by test plan
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TestPointAnalyticResult}
     */
    apiV2TestPlansIdAnalyticsGet(id: string): Promise<any>;
    /**
     * Distribute test points between the users
     * @param {String} id Test plan unique or global ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} [testers] Specifies a project user IDs to distribute
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TestPlanWithTestSuiteTreeModel} and HTTP response
     */
    apiV2TestPlansIdAutobalancePostWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Distribute test points between the users
     * @param {String} id Test plan unique or global ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.testers Specifies a project user IDs to distribute
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TestPlanWithTestSuiteTreeModel}
     */
    apiV2TestPlansIdAutobalancePost(id: string, opts: {
        testers: Array<string>;
    }): Promise<any>;
    /**
     * Get TestPlan configurations
     *  Use case  User sets test plan identifier  User runs method execution  System return test plan configurations
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ConfigurationModel>} and HTTP response
     */
    apiV2TestPlansIdConfigurationsGetWithHttpInfo(id: string): Promise<any>;
    /**
     * Get TestPlan configurations
     *  Use case  User sets test plan identifier  User runs method execution  System return test plan configurations
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ConfigurationModel>}
     */
    apiV2TestPlansIdConfigurationsGet(id: string): Promise<any>;
    /**
     * Export TestPoints from TestPlan in xls format
     *  Use case  User sets test plan identifier  User sets filter model (listed in request example)  User runs method execution  System return export xlsx file
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @param {Object} opts Optional parameters
     * @param {Number} [timeZoneOffsetInMinutes]
     * @param {module:model/GetXlsxTestPointsByTestPlanModel} [getXlsxTestPointsByTestPlanModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2TestPlansIdExportTestPointsXlsxPostWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Export TestPoints from TestPlan in xls format
     *  Use case  User sets test plan identifier  User sets filter model (listed in request example)  User runs method execution  System return export xlsx file
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @param {Object} opts Optional parameters
     * @param {Number} opts.timeZoneOffsetInMinutes
     * @param {module:model/GetXlsxTestPointsByTestPlanModel} opts.getXlsxTestPointsByTestPlanModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2TestPlansIdExportTestPointsXlsxPost(id: string, opts: {
        timeZoneOffsetInMinutes: number;
        getXlsxTestPointsByTestPlanModel: any;
    }): Promise<any>;
    /**
     * Export TestResults history from TestPlan in xls format
     *  Use case  User sets test plan identifier  User sets filter model (listed in request example)  User runs method execution  System return export xlsx file
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @param {Object} opts Optional parameters
     * @param {Boolean} [mustReturnOnlyLastTestResult]
     * @param {Boolean} [includeSteps]
     * @param {Boolean} [includeDeletedTestSuites]
     * @param {Number} [timeZoneOffsetInMinutes]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2TestPlansIdExportTestResultHistoryXlsxPostWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Export TestResults history from TestPlan in xls format
     *  Use case  User sets test plan identifier  User sets filter model (listed in request example)  User runs method execution  System return export xlsx file
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.mustReturnOnlyLastTestResult
     * @param {Boolean} opts.includeSteps
     * @param {Boolean} opts.includeDeletedTestSuites
     * @param {Number} opts.timeZoneOffsetInMinutes
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2TestPlansIdExportTestResultHistoryXlsxPost(id: string, opts: {
        mustReturnOnlyLastTestResult: boolean;
        includeSteps: boolean;
        includeDeletedTestSuites: boolean;
        timeZoneOffsetInMinutes: number;
    }): Promise<any>;
    /**
     * Get TestPlan history
     *  Use case  User sets test plan identifier  User runs method execution  System return test plan history
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TestPlanChangeModel>} and HTTP response
     */
    apiV2TestPlansIdHistoryGetWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Get TestPlan history
     *  Use case  User sets test plan identifier  User runs method execution  System return test plan history
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TestPlanChangeModel>}
     */
    apiV2TestPlansIdHistoryGet(id: string, opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
    }): Promise<any>;
    /**
     * Get Links of TestPlan
     *  Use case  User sets test plan identifier  User sets pagination filter (listed in request example)  User runs method execution  System returns links of TestPlan
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @param {Object} opts Optional parameters
     * @param {Number} [skip]
     * @param {Number} [take]
     * @param {String} [orderBy]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TestPlanLink>} and HTTP response
     */
    apiV2TestPlansIdLinksGetWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Get Links of TestPlan
     *  Use case  User sets test plan identifier  User sets pagination filter (listed in request example)  User runs method execution  System returns links of TestPlan
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip
     * @param {Number} opts.take
     * @param {String} opts.orderBy
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TestPlanLink>}
     */
    apiV2TestPlansIdLinksGet(id: string, opts: {
        skip: number;
        take: number;
        orderBy: string;
    }): Promise<any>;
    /**
     * Patch test plan
     * See <a href=\"https://www.rfc-editor.org/rfc/rfc6902\" target=\"_blank\">RFC 6902: JavaScript Object Notation (JSON) Patch</a> for details
     * @param {String} id Unique ID of the test plan
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/Operation>} [operation]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2TestPlansIdPatchWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Patch test plan
     * See <a href=\"https://www.rfc-editor.org/rfc/rfc6902\" target=\"_blank\">RFC 6902: JavaScript Object Notation (JSON) Patch</a> for details
     * @param {String} id Unique ID of the test plan
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/Operation>} opts.operation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2TestPlansIdPatch(id: string, opts: any): Promise<any>;
    /**
     * Get summary by TestPlan
     *  Use case  User sets test plan identifier  User runs method execution  System returns summary by test plan
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TestPlanSummaryModel} and HTTP response
     */
    apiV2TestPlansIdSummariesGetWithHttpInfo(id: string): Promise<any>;
    /**
     * Get summary by TestPlan
     *  Use case  User sets test plan identifier  User runs method execution  System returns summary by test plan
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TestPlanSummaryModel}
     */
    apiV2TestPlansIdSummariesGet(id: string): Promise<any>;
    /**
     * Get TestPoints with last result from TestPlan
     *  Use case  User sets test plan identifier  User sets filter (listed in request example)  User runs method execution  System return test points with last result from test plan
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @param {Object} opts Optional parameters
     * @param {String} [testerId]
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TestPointWithLastResultResponseModel>} and HTTP response
     */
    apiV2TestPlansIdTestPointsLastResultsGetWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Get TestPoints with last result from TestPlan
     *  Use case  User sets test plan identifier  User sets filter (listed in request example)  User runs method execution  System return test points with last result from test plan
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @param {Object} opts Optional parameters
     * @param {String} opts.testerId
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TestPointWithLastResultResponseModel>}
     */
    apiV2TestPlansIdTestPointsLastResultsGet(id: string, opts: {
        testerId: string;
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
    }): Promise<any>;
    /**
     * Reset TestPoints status of TestPlan
     *  Use case  User sets test plan identifier  User sets test points identifiers  User runs method execution  System reset test points statuses of test plan
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} [requestBody]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2TestPlansIdTestPointsResetPostWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Reset TestPoints status of TestPlan
     *  Use case  User sets test plan identifier  User sets test points identifiers  User runs method execution  System reset test points statuses of test plan
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.requestBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2TestPlansIdTestPointsResetPost(id: string, opts: {
        requestBody: Array<string>;
    }): Promise<any>;
    /**
     * Unassign users from multiple test points
     * @param {String} id Unique or global ID of the test plan
     * @param {Object} opts Optional parameters
     * @param {module:model/TestPointSelectModel} [testPointSelectModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<String>} and HTTP response
     */
    apiV2TestPlansIdTestPointsTesterDeleteWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Unassign users from multiple test points
     * @param {String} id Unique or global ID of the test plan
     * @param {Object} opts Optional parameters
     * @param {module:model/TestPointSelectModel} opts.testPointSelectModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<String>}
     */
    apiV2TestPlansIdTestPointsTesterDelete(id: string, opts: {
        testPointSelectModel: any;
    }): Promise<any>;
    /**
     * Assign user as a tester to multiple test points
     * @param {String} id Unique or global ID of the test plan
     * @param {String} userId Unique ID of the user
     * @param {Object} opts Optional parameters
     * @param {module:model/TestPointSelectModel} [testPointSelectModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<String>} and HTTP response
     */
    apiV2TestPlansIdTestPointsTesterUserIdPostWithHttpInfo(id: string, userId: string, opts: any): Promise<any>;
    /**
     * Assign user as a tester to multiple test points
     * @param {String} id Unique or global ID of the test plan
     * @param {String} userId Unique ID of the user
     * @param {Object} opts Optional parameters
     * @param {module:model/TestPointSelectModel} opts.testPointSelectModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<String>}
     */
    apiV2TestPlansIdTestPointsTesterUserIdPost(id: string, userId: string, opts: {
        testPointSelectModel: any;
    }): Promise<any>;
    /**
     * Get TestRuns of TestPlan
     *  Use case  User sets test plan identifier  User sets TestRun status filter (listed in request example)  User runs method execution  System returns TestRuns for TestPlan
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @param {Object} opts Optional parameters
     * @param {Boolean} [notStarted]
     * @param {Boolean} [inProgress]
     * @param {Boolean} [stopped]
     * @param {Boolean} [completed]
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TestRunApiResult>} and HTTP response
     */
    apiV2TestPlansIdTestRunsGetWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Get TestRuns of TestPlan
     *  Use case  User sets test plan identifier  User sets TestRun status filter (listed in request example)  User runs method execution  System returns TestRuns for TestPlan
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.notStarted
     * @param {Boolean} opts.inProgress
     * @param {Boolean} opts.stopped
     * @param {Boolean} opts.completed
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TestRunApiResult>}
     */
    apiV2TestPlansIdTestRunsGet(id: string, opts: {
        notStarted: boolean;
        inProgress: boolean;
        stopped: boolean;
        completed: boolean;
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
    }): Promise<any>;
    /**
     * Search TestRuns of TestPlan
     *  Use case  User sets test plan identifier  User sets TestRuns filter (listed in request example)  User runs method execution  System returns TestRuns for TestPlan
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @param {module:model/SearchTestRunsApiModel} [searchTestRunsApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TestRunApiResult>} and HTTP response
     */
    apiV2TestPlansIdTestRunsSearchPostWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Search TestRuns of TestPlan
     *  Use case  User sets test plan identifier  User sets TestRuns filter (listed in request example)  User runs method execution  System returns TestRuns for TestPlan
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @param {module:model/SearchTestRunsApiModel} opts.searchTestRunsApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TestRunApiResult>}
     */
    apiV2TestPlansIdTestRunsSearchPost(id: string, opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
        searchTestRunsApiModel: any;
    }): Promise<any>;
    /**
     * Get last modification date of test plan's test results
     * @param {String} id Internal (UUID) or global (integer) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2TestPlansIdTestRunsTestResultsLastModifiedModifiedDateGetWithHttpInfo(id: string): Promise<any>;
    /**
     * Get last modification date of test plan's test results
     * @param {String} id Internal (UUID) or global (integer) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2TestPlansIdTestRunsTestResultsLastModifiedModifiedDateGet(id: string): Promise<any>;
    /**
     * Send unlock TestPlan notification
     *  Use case  User sets test plan identifier  User runs method execution  System send unlock test plan notification
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2TestPlansIdUnlockRequestPostWithHttpInfo(id: string): Promise<any>;
    /**
     * Send unlock TestPlan notification
     *  Use case  User sets test plan identifier  User runs method execution  System send unlock test plan notification
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2TestPlansIdUnlockRequestPost(id: string): Promise<any>;
    /**
     * Get TestPlans short models by Project identifiers
     *  Use case  User sets projects identifiers  User runs method execution  System return test plans short models (listed in response example)
     * @param {Object} opts Optional parameters
     * @param {Boolean} [isDeleted]
     * @param {Array.<String>} [requestBody]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TestPlanShortModel>} and HTTP response
     */
    apiV2TestPlansShortsPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Get TestPlans short models by Project identifiers
     *  Use case  User sets projects identifiers  User runs method execution  System return test plans short models (listed in response example)
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.isDeleted
     * @param {Array.<String>} opts.requestBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TestPlanShortModel>}
     */
    apiV2TestPlansShortsPost(opts: {
        isDeleted: boolean;
        requestBody: Array<string>;
    }): Promise<any>;
    /**
     * Clone TestPlan
     *  Use case  User sets test plan identifier  User runs method execution  System clones test plan  System returns test plan (listed in response example)
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TestPlanModel} and HTTP response
     */
    cloneWithHttpInfo(id: string): Promise<any>;
    /**
     * Clone TestPlan
     *  Use case  User sets test plan identifier  User runs method execution  System clones test plan  System returns test plan (listed in response example)
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TestPlanModel}
     */
    clone(id: string): Promise<any>;
    /**
     * Complete TestPlan
     *  Use case  User sets test plan identifier  User runs method execution  System completes the test plan and updates test plan status  System returns no content response
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    completeWithHttpInfo(id: string): Promise<any>;
    /**
     * Complete TestPlan
     *  Use case  User sets test plan identifier  User runs method execution  System completes the test plan and updates test plan status  System returns no content response
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    complete(id: string): Promise<any>;
    /**
     * Create TestPlan
     *  Use case  User sets test plan properties (listed in request example)  User runs method execution  System creates test plan  System returns test plan (listed in response example)
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateTestPlanApiModel} [createTestPlanApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TestPlanModel} and HTTP response
     */
    createTestPlanWithHttpInfo(opts: any): Promise<any>;
    /**
     * Create TestPlan
     *  Use case  User sets test plan properties (listed in request example)  User runs method execution  System creates test plan  System returns test plan (listed in response example)
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateTestPlanApiModel} opts.createTestPlanApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TestPlanModel}
     */
    createTestPlan(opts: {
        createTestPlanApiModel: any;
    }): Promise<any>;
    /**
     * Delete TestPlan
     *  Use case  User sets test plan identifier  User runs method execution  System delete test plan  System returns no content response
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteTestPlanWithHttpInfo(id: string): Promise<any>;
    /**
     * Delete TestPlan
     *  Use case  User sets test plan identifier  User runs method execution  System delete test plan  System returns no content response
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteTestPlan(id: string): Promise<any>;
    /**
     * Get TestPlan by Id
     *  Use case  User sets test plan identifier  User runs method execution  System search  test plan by the identifier  System returns test plan
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TestPlanModel} and HTTP response
     */
    getTestPlanByIdWithHttpInfo(id: string): Promise<any>;
    /**
     * Get TestPlan by Id
     *  Use case  User sets test plan identifier  User runs method execution  System search  test plan by the identifier  System returns test plan
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TestPlanModel}
     */
    getTestPlanById(id: string): Promise<any>;
    /**
     * Get TestSuites Tree By Id
     *  Use case  User sets test plan identifier  User runs method execution  System finds test suites related to the test plan  System returns test suites as a tree model (listed in response example)
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TestSuiteHierarchyApiResult>} and HTTP response
     */
    getTestSuitesByIdWithHttpInfo(id: string): Promise<any>;
    /**
     * Get TestSuites Tree By Id
     *  Use case  User sets test plan identifier  User runs method execution  System finds test suites related to the test plan  System returns test suites as a tree model (listed in response example)
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TestSuiteHierarchyApiResult>}
     */
    getTestSuitesById(id: string): Promise<any>;
    /**
     * Pause TestPlan
     *  Use case  User sets test plan identifier  User runs method execution  System pauses the test plan and updates test plan status  System returns no content response
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    pauseWithHttpInfo(id: string): Promise<any>;
    /**
     * Pause TestPlan
     *  Use case  User sets test plan identifier  User runs method execution  System pauses the test plan and updates test plan status  System returns no content response
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    pause(id: string): Promise<any>;
    /**
     * Permanently delete test plan from archive
     * @param {String} id Unique or global ID of the test plan
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    purgeTestPlanWithHttpInfo(id: string): Promise<any>;
    /**
     * Permanently delete test plan from archive
     * @param {String} id Unique or global ID of the test plan
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    purgeTestPlan(id: string): Promise<any>;
    /**
     * Restore TestPlan
     *  Use case  User sets test plan identifier  User runs method execution  System restores test plan  System returns no content response
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    restoreTestPlanWithHttpInfo(id: string): Promise<any>;
    /**
     * Restore TestPlan
     *  Use case  User sets test plan identifier  User runs method execution  System restores test plan  System returns no content response
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    restoreTestPlan(id: string): Promise<any>;
    /**
     * Start TestPlan
     *  Use case  User sets test plan identifier  User runs method execution  System starts the test plan and updates test plan status  System returns no content response
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    startWithHttpInfo(id: string): Promise<any>;
    /**
     * Start TestPlan
     *  Use case  User sets test plan identifier  User runs method execution  System starts the test plan and updates test plan status  System returns no content response
     * @param {String} id Test plan internal (guid format) or global (int format) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    start(id: string): Promise<any>;
    /**
     * Update TestPlan
     *  Use case  User sets test plan properties(listed in request example)  User runs method execution  System updates test plan  System returns no content response
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateTestPlanApiModel} [updateTestPlanApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updateTestPlanWithHttpInfo(opts: any): Promise<any>;
    /**
     * Update TestPlan
     *  Use case  User sets test plan properties(listed in request example)  User runs method execution  System updates test plan  System returns no content response
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateTestPlanApiModel} opts.updateTestPlanApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateTestPlan(opts: {
        updateTestPlanApiModel: any;
    }): Promise<any>;
}
