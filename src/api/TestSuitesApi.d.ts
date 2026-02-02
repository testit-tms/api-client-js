/**
* TestSuites service.
* @module api/TestSuitesApi
* @version 7.1.0
*/
export default class TestSuitesApi {
    /**
    * Constructs a new TestSuitesApi.
    * @alias module:api/TestSuitesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Add test-points to test suite
     * @param {String} id Test suite internal identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/WorkItemSelectModel} [workItemSelectModel] Filter object to retrieve work items for test-suite's project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    addTestPointsToTestSuiteWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Add test-points to test suite
     * @param {String} id Test suite internal identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/WorkItemSelectModel} opts.workItemSelectModel Filter object to retrieve work items for test-suite's project
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    addTestPointsToTestSuite(id: string, opts: {
        workItemSelectModel: any;
    }): Promise<any>;
    /**
     * Patch test suite
     * See <a href=\"https://www.rfc-editor.org/rfc/rfc6902\" target=\"_blank\">RFC 6902: JavaScript Object Notation (JSON) Patch</a> for details
     * @param {String} id Test Suite internal (UUID) identifier
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/Operation>} [operation]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2TestSuitesIdPatchWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Patch test suite
     * See <a href=\"https://www.rfc-editor.org/rfc/rfc6902\" target=\"_blank\">RFC 6902: JavaScript Object Notation (JSON) Patch</a> for details
     * @param {String} id Test Suite internal (UUID) identifier
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/Operation>} opts.operation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2TestSuitesIdPatch(id: string, opts: any): Promise<any>;
    /**
     * Refresh test suite. Only dynamic test suites are supported by this method
     * @param {String} id Test Suite internal (UUID) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2TestSuitesIdRefreshPostWithHttpInfo(id: string): Promise<any>;
    /**
     * Refresh test suite. Only dynamic test suites are supported by this method
     * @param {String} id Test Suite internal (UUID) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2TestSuitesIdRefreshPost(id: string): Promise<any>;
    /**
     * Set work items for test suite
     * @param {String} id Unique ID of the test suite
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} [requestBody]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2TestSuitesIdWorkItemsPostWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Set work items for test suite
     * @param {String} id Unique ID of the test suite
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.requestBody
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2TestSuitesIdWorkItemsPost(id: string, opts: {
        requestBody: Array<string>;
    }): Promise<any>;
    /**
     * Create test suite
     * @param {Object} opts Optional parameters
     * @param {module:model/TestSuiteV2PostModel} [testSuiteV2PostModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TestSuiteV2GetModel} and HTTP response
     */
    apiV2TestSuitesPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Create test suite
     * @param {Object} opts Optional parameters
     * @param {module:model/TestSuiteV2PostModel} opts.testSuiteV2PostModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TestSuiteV2GetModel}
     */
    apiV2TestSuitesPost(opts: {
        testSuiteV2PostModel: any;
    }): Promise<any>;
    /**
     * Edit test suite
     * @param {Object} opts Optional parameters
     * @param {module:model/TestSuiteV2PutModel} [testSuiteV2PutModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2TestSuitesPutWithHttpInfo(opts: any): Promise<any>;
    /**
     * Edit test suite
     * @param {Object} opts Optional parameters
     * @param {module:model/TestSuiteV2PutModel} opts.testSuiteV2PutModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2TestSuitesPut(opts: {
        testSuiteV2PutModel: any;
    }): Promise<any>;
    /**
     * Delete TestSuite
     *  Use case  User sets test suite identifier  User runs method execution  System search test suite by identifier  System deletes test suite  System returns no content response
     * @param {String} id Test suite internal (guid format) identifier\"
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteTestSuiteWithHttpInfo(id: string): Promise<any>;
    /**
     * Delete TestSuite
     *  Use case  User sets test suite identifier  User runs method execution  System search test suite by identifier  System deletes test suite  System returns no content response
     * @param {String} id Test suite internal (guid format) identifier\"
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteTestSuite(id: string): Promise<any>;
    /**
     * Get Configurations By Id
     *  Use case  User sets test suite identifier  User runs method execution  System search test suite by identifier  System search test points related to the test suite  System search configurations related to the test points  System returns configurations array
     * @param {String} id Test suite internal (guid format) identifier\"
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ConfigurationModel>} and HTTP response
     */
    getConfigurationsByTestSuiteIdWithHttpInfo(id: string): Promise<any>;
    /**
     * Get Configurations By Id
     *  Use case  User sets test suite identifier  User runs method execution  System search test suite by identifier  System search test points related to the test suite  System search configurations related to the test points  System returns configurations array
     * @param {String} id Test suite internal (guid format) identifier\"
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ConfigurationModel>}
     */
    getConfigurationsByTestSuiteId(id: string): Promise<any>;
    /**
     * Get TestPoints By Id
     *  Use case  User sets test suite identifier  User runs method execution  System search test suite by identifier  System search test points related to the test suite  System returns test points array
     * @param {String} id Test suite internal (guid format) identifier\"
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TestPointByTestSuiteModel>} and HTTP response
     */
    getTestPointsByIdWithHttpInfo(id: string): Promise<any>;
    /**
     * Get TestPoints By Id
     *  Use case  User sets test suite identifier  User runs method execution  System search test suite by identifier  System search test points related to the test suite  System returns test points array
     * @param {String} id Test suite internal (guid format) identifier\"
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TestPointByTestSuiteModel>}
     */
    getTestPointsById(id: string): Promise<any>;
    /**
     * Get TestResults By Id
     *  Use case  User sets test suite identifier  User runs method execution  System search test suite by identifier  System search test points related to the test suite  System search test results related to the test points  System returns test results array
     * @param {String} id Test suite internal (guid format) identifier\"
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TestResultV2ShortModel>} and HTTP response
     */
    getTestResultsByIdWithHttpInfo(id: string): Promise<any>;
    /**
     * Get TestResults By Id
     *  Use case  User sets test suite identifier  User runs method execution  System search test suite by identifier  System search test points related to the test suite  System search test results related to the test points  System returns test results array
     * @param {String} id Test suite internal (guid format) identifier\"
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TestResultV2ShortModel>}
     */
    getTestResultsById(id: string): Promise<any>;
    /**
     * Get TestSuite by Id
     *  Use case  User sets test suite identifier  User runs method execution  System search test suite by identifier  System returns test suite
     * @param {String} id Test suite internal (guid format) identifier\"
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TestSuiteApiResult} and HTTP response
     */
    getTestSuiteByIdWithHttpInfo(id: string): Promise<any>;
    /**
     * Get TestSuite by Id
     *  Use case  User sets test suite identifier  User runs method execution  System search test suite by identifier  System returns test suite
     * @param {String} id Test suite internal (guid format) identifier\"
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TestSuiteApiResult}
     */
    getTestSuiteById(id: string): Promise<any>;
    /**
     * Search WorkItems
     *  Use case  User sets test suite identifier  [Optional] User sets filter  User runs method execution  System search test suite by identifier  System search test points related to the test suite  System search work items related to the test points  [Optional] User sets filter, system applies filter  System returns work items array
     * @param {String} id Test suite internal (guid format) identifier\"
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @param {module:model/TestSuiteWorkItemsSearchModel} [testSuiteWorkItemsSearchModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/WorkItemShortModel>} and HTTP response
     */
    searchWorkItemsWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Search WorkItems
     *  Use case  User sets test suite identifier  [Optional] User sets filter  User runs method execution  System search test suite by identifier  System search test points related to the test suite  System search work items related to the test points  [Optional] User sets filter, system applies filter  System returns work items array
     * @param {String} id Test suite internal (guid format) identifier\"
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @param {module:model/TestSuiteWorkItemsSearchModel} opts.testSuiteWorkItemsSearchModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/WorkItemShortModel>}
     */
    searchWorkItems(id: string, opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
        testSuiteWorkItemsSearchModel: any;
    }): Promise<any>;
    /**
     * Set Configurations By TestSuite Id
     *  Use case  User sets test suite identifier  User sets collection of configuration identifiers  User runs method execution  System search test suite by identifier  System search test points related to the test suite  System search configuration  System restores(if exist) or creates test points with listed configuration  System returns no content response
     * @param {String} id Test suite internal (guid format) identifier\"
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} [requestBody] Collection of configuration identifiers\"
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    setConfigurationsByTestSuiteIdWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Set Configurations By TestSuite Id
     *  Use case  User sets test suite identifier  User sets collection of configuration identifiers  User runs method execution  System search test suite by identifier  System search test points related to the test suite  System search configuration  System restores(if exist) or creates test points with listed configuration  System returns no content response
     * @param {String} id Test suite internal (guid format) identifier\"
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.requestBody Collection of configuration identifiers\"
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    setConfigurationsByTestSuiteId(id: string, opts: {
        requestBody: Array<string>;
    }): Promise<any>;
}
