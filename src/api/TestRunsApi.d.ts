/**
* TestRuns service.
* @module api/TestRunsApi
* @version 7.1.0
*/
export default class TestRunsApi {
    /**
    * Constructs a new TestRunsApi.
    * @alias module:api/TestRunsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Delete multiple test runs
     *  Use case  User sets selection parameters of test runs  System search and delete collection of test runs  System returns the number of deleted test runs
     * @param {Object} opts Optional parameters
     * @param {module:model/TestRunSelectApiModel} [testRunSelectApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Number} and HTTP response
     */
    apiV2TestRunsDeleteWithHttpInfo(opts: any): Promise<any>;
    /**
     * Delete multiple test runs
     *  Use case  User sets selection parameters of test runs  System search and delete collection of test runs  System returns the number of deleted test runs
     * @param {Object} opts Optional parameters
     * @param {module:model/TestRunSelectApiModel} opts.testRunSelectApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Number}
     */
    apiV2TestRunsDelete(opts: {
        testRunSelectApiModel: any;
    }): Promise<any>;
    /**
     * Get autotest classes and namespaces in test run
     * @param {String} id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AutoTestNamespacesCountResponse} and HTTP response
     */
    apiV2TestRunsIdAutoTestsNamespacesGetWithHttpInfo(id: string): Promise<any>;
    /**
     * Get autotest classes and namespaces in test run
     * @param {String} id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AutoTestNamespacesCountResponse}
     */
    apiV2TestRunsIdAutoTestsNamespacesGet(id: string): Promise<any>;
    /**
     * Delete test run
     *  Use case  User sets test run internal (guid format) identifier  System search and delete test run
     * @param {String} id Test run internal (UUID) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2TestRunsIdDeleteWithHttpInfo(id: string): Promise<any>;
    /**
     * Delete test run
     *  Use case  User sets test run internal (guid format) identifier  System search and delete test run
     * @param {String} id Test run internal (UUID) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2TestRunsIdDelete(id: string): Promise<any>;
    /**
     * Permanently delete test run from archive
     *  Use case  User sets archived test run internal (guid format) identifier  System search and purge archived test run
     * @param {String} id Test run internal (UUID) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2TestRunsIdPurgePostWithHttpInfo(id: string): Promise<any>;
    /**
     * Permanently delete test run from archive
     *  Use case  User sets archived test run internal (guid format) identifier  System search and purge archived test run
     * @param {String} id Test run internal (UUID) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2TestRunsIdPurgePost(id: string): Promise<any>;
    /**
     * Manual autotests rerun in test run
     * @param {String} id
     * @param {Object} opts Optional parameters
     * @param {module:model/ManualRerunSelectTestResultsApiModel} [manualRerunSelectTestResultsApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ManualRerunApiResult} and HTTP response
     */
    apiV2TestRunsIdRerunsPostWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Manual autotests rerun in test run
     * @param {String} id
     * @param {Object} opts Optional parameters
     * @param {module:model/ManualRerunSelectTestResultsApiModel} opts.manualRerunSelectTestResultsApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ManualRerunApiResult}
     */
    apiV2TestRunsIdRerunsPost(id: string, opts: {
        manualRerunSelectTestResultsApiModel: any;
    }): Promise<any>;
    /**
     * Restore test run from the archive
     *  Use case  User sets archived test run internal (guid format) identifier  System search and restore test run
     * @param {String} id Unique ID of the test run
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2TestRunsIdRestorePostWithHttpInfo(id: string): Promise<any>;
    /**
     * Restore test run from the archive
     *  Use case  User sets archived test run internal (guid format) identifier  System search and restore test run
     * @param {String} id Unique ID of the test run
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2TestRunsIdRestorePost(id: string): Promise<any>;
    /**
     * Search for the test run test results and build statistics
     * @param {String} id Test run unique ID
     * @param {Object} opts Optional parameters
     * @param {module:model/TestRunStatisticsFilterApiModel} [testRunStatisticsFilterApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TestResultsStatisticsApiResult} and HTTP response
     */
    apiV2TestRunsIdStatisticsFilterPostWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Search for the test run test results and build statistics
     * @param {String} id Test run unique ID
     * @param {Object} opts Optional parameters
     * @param {module:model/TestRunStatisticsFilterApiModel} opts.testRunStatisticsFilterApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TestResultsStatisticsApiResult}
     */
    apiV2TestRunsIdStatisticsFilterPost(id: string, opts: {
        testRunStatisticsFilterApiModel: any;
    }): Promise<any>;
    /**
     * Get test results from the test run grouped by test points
     * @param {String} id Test run unique ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TestPointResultApiResult>} and HTTP response
     */
    apiV2TestRunsIdTestPointsResultsGetWithHttpInfo(id: string): Promise<any>;
    /**
     * Get test results from the test run grouped by test points
     * @param {String} id Test run unique ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TestPointResultApiResult>}
     */
    apiV2TestRunsIdTestPointsResultsGet(id: string): Promise<any>;
    /**
     * Partial edit of multiple test results in the test run
     * @param {String} id Test run unique ID
     * @param {Object} opts Optional parameters
     * @param {module:model/TestRunTestResultsPartialBulkSetModel} [testRunTestResultsPartialBulkSetModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2TestRunsIdTestResultsBulkPutWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Partial edit of multiple test results in the test run
     * @param {String} id Test run unique ID
     * @param {Object} opts Optional parameters
     * @param {module:model/TestRunTestResultsPartialBulkSetModel} opts.testRunTestResultsPartialBulkSetModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2TestRunsIdTestResultsBulkPut(id: string, opts: {
        testRunTestResultsPartialBulkSetModel: any;
    }): Promise<any>;
    /**
     * Get modification date of last test result of the test run
     * @param {String} id Test run unique ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Date} and HTTP response
     */
    apiV2TestRunsIdTestResultsLastModifiedModificationDateGetWithHttpInfo(id: string): Promise<any>;
    /**
     * Get modification date of last test result of the test run
     * @param {String} id Test run unique ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Date}
     */
    apiV2TestRunsIdTestResultsLastModifiedModificationDateGet(id: string): Promise<any>;
    /**
     * Permanently delete multiple test runs from archive
     *  Use case  User sets selection parameters of archived test runs  System search and delete collection of archived test runs  System returns the number of deleted archived test runs
     * @param {Object} opts Optional parameters
     * @param {module:model/TestRunSelectApiModel} [testRunSelectApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Number} and HTTP response
     */
    apiV2TestRunsPurgeBulkPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Permanently delete multiple test runs from archive
     *  Use case  User sets selection parameters of archived test runs  System search and delete collection of archived test runs  System returns the number of deleted archived test runs
     * @param {Object} opts Optional parameters
     * @param {module:model/TestRunSelectApiModel} opts.testRunSelectApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Number}
     */
    apiV2TestRunsPurgeBulkPost(opts: {
        testRunSelectApiModel: any;
    }): Promise<any>;
    /**
     * Restore multiple test runs from the archive
     *  Use case  User sets selection parameters of archived test runs  System search and restore collection of archived test runs  System returns the number of restored test runs
     * @param {Object} opts Optional parameters
     * @param {module:model/TestRunSelectApiModel} [testRunSelectApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Number} and HTTP response
     */
    apiV2TestRunsRestoreBulkPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Restore multiple test runs from the archive
     *  Use case  User sets selection parameters of archived test runs  System search and restore collection of archived test runs  System returns the number of restored test runs
     * @param {Object} opts Optional parameters
     * @param {module:model/TestRunSelectApiModel} opts.testRunSelectApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Number}
     */
    apiV2TestRunsRestoreBulkPost(opts: {
        testRunSelectApiModel: any;
    }): Promise<any>;
    /**
     * Search for test runs
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @param {module:model/TestRunFilterApiModel} [testRunFilterApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TestRunShortApiResult>} and HTTP response
     */
    apiV2TestRunsSearchPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Search for test runs
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @param {module:model/TestRunFilterApiModel} opts.testRunFilterApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TestRunShortApiResult>}
     */
    apiV2TestRunsSearchPost(opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
        testRunFilterApiModel: any;
    }): Promise<any>;
    /**
     * Update multiple test runs
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateMultipleTestRunsApiModel} [updateMultipleTestRunsApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2TestRunsUpdateMultiplePostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Update multiple test runs
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateMultipleTestRunsApiModel} opts.updateMultipleTestRunsApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2TestRunsUpdateMultiplePost(opts: {
        updateMultipleTestRunsApiModel: any;
    }): Promise<any>;
    /**
     * Complete TestRun
     *  Use case  User sets test run identifier  User runs method execution  System completes test run  System returns no content response
     * @param {String} id Test Run internal identifier (GUID format)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    completeTestRunWithHttpInfo(id: string): Promise<any>;
    /**
     * Complete TestRun
     *  Use case  User sets test run identifier  User runs method execution  System completes test run  System returns no content response
     * @param {String} id Test Run internal identifier (GUID format)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    completeTestRun(id: string): Promise<any>;
    /**
     * Create test runs based on autotests and configurations
     * This method creates a test run based on an autotest and a configuration. The difference between the `POST /api/v2/testRuns/byWorkItems` and `POST /api/v2/testRuns/byConfigurations` methods is that in this method there is no need to create a test plan and work items (test cases and checklists).
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateTestRunAndFillByAutoTestsApiModel} [createTestRunAndFillByAutoTestsApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TestRunV2ApiResult} and HTTP response
     */
    createAndFillByAutoTestsWithHttpInfo(opts: any): Promise<any>;
    /**
     * Create test runs based on autotests and configurations
     * This method creates a test run based on an autotest and a configuration. The difference between the `POST /api/v2/testRuns/byWorkItems` and `POST /api/v2/testRuns/byConfigurations` methods is that in this method there is no need to create a test plan and work items (test cases and checklists).
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateTestRunAndFillByAutoTestsApiModel} opts.createTestRunAndFillByAutoTestsApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TestRunV2ApiResult}
     */
    createAndFillByAutoTests(opts: {
        createTestRunAndFillByAutoTestsApiModel: any;
    }): Promise<any>;
    /**
     * Create test runs picking the needed test points
     * This method creates a test run based on a combination of a configuration and a work item(test case or checklist). Before you create a test run using this method, make sure to create a test plan. Work items must be automated. This method is different from the `POST /api/v2/testRuns/byWorkItems` method because of the ability to send a jagged array within the \"<b>testPointSelectors</b>\" parameter.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateTestRunAndFillByConfigurationsApiModel} [createTestRunAndFillByConfigurationsApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TestRunV2ApiResult} and HTTP response
     */
    createAndFillByConfigurationsWithHttpInfo(opts: any): Promise<any>;
    /**
     * Create test runs picking the needed test points
     * This method creates a test run based on a combination of a configuration and a work item(test case or checklist). Before you create a test run using this method, make sure to create a test plan. Work items must be automated. This method is different from the `POST /api/v2/testRuns/byWorkItems` method because of the ability to send a jagged array within the \"<b>testPointSelectors</b>\" parameter.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateTestRunAndFillByConfigurationsApiModel} opts.createTestRunAndFillByConfigurationsApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TestRunV2ApiResult}
     */
    createAndFillByConfigurations(opts: {
        createTestRunAndFillByConfigurationsApiModel: any;
    }): Promise<any>;
    /**
     * Create test run based on configurations and work items
     * This method creates a test run based on a combination of configuration and work item (test case or checklist). Before you create a test run using this method, make sure to create a test plan. Work items must be automated.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateTestRunAndFillByWorkItemsApiModel} [createTestRunAndFillByWorkItemsApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TestRunV2ApiResult} and HTTP response
     */
    createAndFillByWorkItemsWithHttpInfo(opts: any): Promise<any>;
    /**
     * Create test run based on configurations and work items
     * This method creates a test run based on a combination of configuration and work item (test case or checklist). Before you create a test run using this method, make sure to create a test plan. Work items must be automated.
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateTestRunAndFillByWorkItemsApiModel} opts.createTestRunAndFillByWorkItemsApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TestRunV2ApiResult}
     */
    createAndFillByWorkItems(opts: {
        createTestRunAndFillByWorkItemsApiModel: any;
    }): Promise<any>;
    /**
     * Create empty TestRun
     *  Use case  User sets test run model (listed in the request example)  User runs method execution  System creates test run  System returns test run model
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateEmptyTestRunApiModel} [createEmptyTestRunApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TestRunV2ApiResult} and HTTP response
     */
    createEmptyWithHttpInfo(opts: any): Promise<any>;
    /**
     * Create empty TestRun
     *  Use case  User sets test run model (listed in the request example)  User runs method execution  System creates test run  System returns test run model
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateEmptyTestRunApiModel} opts.createEmptyTestRunApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TestRunV2ApiResult}
     */
    createEmpty(opts: {
        createEmptyTestRunApiModel: any;
    }): Promise<any>;
    /**
     * Get TestRun by Id
     *  Use case  User sets test run identifier  User runs method execution  System finds test run  System returns test run
     * @param {String} id Test Run internal identifier (GUID format)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TestRunV2ApiResult} and HTTP response
     */
    getTestRunByIdWithHttpInfo(id: string): Promise<any>;
    /**
     * Get TestRun by Id
     *  Use case  User sets test run identifier  User runs method execution  System finds test run  System returns test run
     * @param {String} id Test Run internal identifier (GUID format)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TestRunV2ApiResult}
     */
    getTestRunById(id: string): Promise<any>;
    /**
     * Send test results to the test runs in the system
     * This method sends test results to the test management system.
     * @param {String} id Test Run internal identifier (GUID format)
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/AutoTestResultsForTestRunModel>} [autoTestResultsForTestRunModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<String>} and HTTP response
     */
    setAutoTestResultsForTestRunWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Send test results to the test runs in the system
     * This method sends test results to the test management system.
     * @param {String} id Test Run internal identifier (GUID format)
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/AutoTestResultsForTestRunModel>} opts.autoTestResultsForTestRunModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<String>}
     */
    setAutoTestResultsForTestRun(id: string, opts: any): Promise<any>;
    /**
     * Start TestRun
     *  Use case  User sets test run identifier  User runs method execution  System starts test run  System returns no content response
     * @param {String} id Test Run internal identifier (GUID format)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    startTestRunWithHttpInfo(id: string): Promise<any>;
    /**
     * Start TestRun
     *  Use case  User sets test run identifier  User runs method execution  System starts test run  System returns no content response
     * @param {String} id Test Run internal identifier (GUID format)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    startTestRun(id: string): Promise<any>;
    /**
     * Stop TestRun
     *  Use case  User sets test run identifier  User runs method execution  System stops test run  System returns no content response
     * @param {String} id Test Run internal identifier (GUID format)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    stopTestRunWithHttpInfo(id: string): Promise<any>;
    /**
     * Stop TestRun
     *  Use case  User sets test run identifier  User runs method execution  System stops test run  System returns no content response
     * @param {String} id Test Run internal identifier (GUID format)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    stopTestRun(id: string): Promise<any>;
    /**
     * Update empty TestRun
     *  Use case  User sets test run properties (listed in the request example)  User runs method execution  System updates test run  System returns returns no content response
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateEmptyTestRunApiModel} [updateEmptyTestRunApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updateEmptyWithHttpInfo(opts: any): Promise<any>;
    /**
     * Update empty TestRun
     *  Use case  User sets test run properties (listed in the request example)  User runs method execution  System updates test run  System returns returns no content response
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateEmptyTestRunApiModel} opts.updateEmptyTestRunApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateEmpty(opts: {
        updateEmptyTestRunApiModel: any;
    }): Promise<any>;
}
