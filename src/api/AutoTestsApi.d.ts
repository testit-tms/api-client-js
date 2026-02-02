/**
* AutoTests service.
* @module api/AutoTestsApi
* @version 7.1.0-TMS-5.6
*/
export default class AutoTestsApi {
    /**
    * Constructs a new AutoTestsApi.
    * @alias module:api/AutoTestsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Delete autotests
     * @param {Object} opts Optional parameters
     * @param {module:model/AutoTestBulkDeleteApiModel} [autoTestBulkDeleteApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AutoTestBulkDeleteApiResult} and HTTP response
     */
    apiV2AutoTestsDeleteWithHttpInfo(opts: any): Promise<any>;
    /**
     * Delete autotests
     * @param {Object} opts Optional parameters
     * @param {module:model/AutoTestBulkDeleteApiModel} opts.autoTestBulkDeleteApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AutoTestBulkDeleteApiResult}
     */
    apiV2AutoTestsDelete(opts: {
        autoTestBulkDeleteApiModel: any;
    }): Promise<any>;
    /**
     * Set \"Flaky\" status for multiple autotests
     * User permissions for project: - Read only - Execute - Write - Full control
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @param {module:model/AutoTestFlakyBulkApiModel} [autoTestFlakyBulkApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2AutoTestsFlakyBulkPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Set \"Flaky\" status for multiple autotests
     * User permissions for project: - Read only - Execute - Write - Full control
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @param {module:model/AutoTestFlakyBulkApiModel} opts.autoTestFlakyBulkApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2AutoTestsFlakyBulkPost(opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
        autoTestFlakyBulkApiModel: any;
    }): Promise<any>;
    /**
     * Patch auto test
     * See <a href=\"https://www.rfc-editor.org/rfc/rfc6902\" target=\"_blank\">RFC 6902: JavaScript Object Notation (JSON) Patch</a> for details
     * @param {String} id Global Id of auto test
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/Operation>} [operation]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2AutoTestsIdPatchWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Patch auto test
     * See <a href=\"https://www.rfc-editor.org/rfc/rfc6902\" target=\"_blank\">RFC 6902: JavaScript Object Notation (JSON) Patch</a> for details
     * @param {String} id Global Id of auto test
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/Operation>} opts.operation
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2AutoTestsIdPatch(id: string, opts: any): Promise<any>;
    /**
     * Get test results history for autotest
     *  Use case  User sets autotest internal (guid format) or global (integer format) identifier  User sets getTestResultHistoryReportQuery (listed in the example)  User runs method execution  System search for test results using filters set by user in getTestResultHistoryReportQuery and id  System returns the enumeration of test results
     * @param {String} id Autotest identifier
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @param {module:model/AutoTestResultHistorySelectApiModel} [autoTestResultHistorySelectApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/AutoTestResultHistoryApiResult>} and HTTP response
     */
    apiV2AutoTestsIdTestResultsSearchPostWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Get test results history for autotest
     *  Use case  User sets autotest internal (guid format) or global (integer format) identifier  User sets getTestResultHistoryReportQuery (listed in the example)  User runs method execution  System search for test results using filters set by user in getTestResultHistoryReportQuery and id  System returns the enumeration of test results
     * @param {String} id Autotest identifier
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @param {module:model/AutoTestResultHistorySelectApiModel} opts.autoTestResultHistorySelectApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/AutoTestResultHistoryApiResult>}
     */
    apiV2AutoTestsIdTestResultsSearchPost(id: string, opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
        autoTestResultHistorySelectApiModel: any;
    }): Promise<any>;
    /**
     * Get identifiers of changed linked work items
     * User permissions for project: - Read only - Execute - Write - Full control
     * @param {String} id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<String>} and HTTP response
     */
    apiV2AutoTestsIdWorkItemsChangedIdGetWithHttpInfo(id: string): Promise<any>;
    /**
     * Get identifiers of changed linked work items
     * User permissions for project: - Read only - Execute - Write - Full control
     * @param {String} id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<String>}
     */
    apiV2AutoTestsIdWorkItemsChangedIdGet(id: string): Promise<any>;
    /**
     * Approve changes to work items linked to autotest
     * User permissions for project: - Read only - Execute - Write - Full control
     * @param {String} id
     * @param {String} workItemId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2AutoTestsIdWorkItemsChangedWorkItemIdApprovePostWithHttpInfo(id: string, workItemId: string): Promise<any>;
    /**
     * Approve changes to work items linked to autotest
     * User permissions for project: - Read only - Execute - Write - Full control
     * @param {String} id
     * @param {String} workItemId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2AutoTestsIdWorkItemsChangedWorkItemIdApprovePost(id: string, workItemId: string): Promise<any>;
    /**
     * Search for autotests
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @param {module:model/AutoTestSearchApiModel} [autoTestSearchApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/AutoTestApiResult>} and HTTP response
     */
    apiV2AutoTestsSearchPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Search for autotests
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @param {module:model/AutoTestSearchApiModel} opts.autoTestSearchApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/AutoTestApiResult>}
     */
    apiV2AutoTestsSearchPost(opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
        autoTestSearchApiModel: any;
    }): Promise<any>;
    /**
     * Create autotest
     *  This method creates a new autotest.  To add an autotest to the test plan, link it to a work item using the `POST /api/v2/autoTests/{autoTestId}/workItems` method.  Use the `POST /api/v2/testRuns/byAutoTests` method to run autotest outside the test plan.
     * @param {Object} opts Optional parameters
     * @param {module:model/AutoTestCreateApiModel} [autoTestCreateApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AutoTestApiResult} and HTTP response
     */
    createAutoTestWithHttpInfo(opts: any): Promise<any>;
    /**
     * Create autotest
     *  This method creates a new autotest.  To add an autotest to the test plan, link it to a work item using the `POST /api/v2/autoTests/{autoTestId}/workItems` method.  Use the `POST /api/v2/testRuns/byAutoTests` method to run autotest outside the test plan.
     * @param {Object} opts Optional parameters
     * @param {module:model/AutoTestCreateApiModel} opts.autoTestCreateApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AutoTestApiResult}
     */
    createAutoTest(opts: {
        autoTestCreateApiModel: any;
    }): Promise<any>;
    /**
     * Create multiple autotests
     *  Use case  User sets autotest parameters (listed in the example) and runs method execution  System creates autotest  [Optional] If steps enumeration is set, system creates step items and relates them to autotest  [Optional] If setup enumeration is set, system creates setup items and relates them to autotest  [Optional] If teardown enumeration is set, system creates teardown items and relates them to autotest  [Optional] If label enumeration is set, system creates labels and relates them to autotest  [Optional] If link enumeration is set, system creates links and relates them to autotest  System returns autotest model (example listed in response parameters)
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/AutoTestCreateApiModel>} [autoTestCreateApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/AutoTestApiResult>} and HTTP response
     */
    createMultipleWithHttpInfo(opts: any): Promise<any>;
    /**
     * Create multiple autotests
     *  Use case  User sets autotest parameters (listed in the example) and runs method execution  System creates autotest  [Optional] If steps enumeration is set, system creates step items and relates them to autotest  [Optional] If setup enumeration is set, system creates setup items and relates them to autotest  [Optional] If teardown enumeration is set, system creates teardown items and relates them to autotest  [Optional] If label enumeration is set, system creates labels and relates them to autotest  [Optional] If link enumeration is set, system creates links and relates them to autotest  System returns autotest model (example listed in response parameters)
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/AutoTestCreateApiModel>} opts.autoTestCreateApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/AutoTestApiResult>}
     */
    createMultiple(opts: any): Promise<any>;
    /**
     * Delete autotest
     *  Use case  User sets autotest internal (guid format) or global (integer format) identifier and runs method execution  System finds the autotest by the identifier  System deletes autotest and returns no content response
     * @param {String} id Autotest internal (UUID) or global (integer) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteAutoTestWithHttpInfo(id: string): Promise<any>;
    /**
     * Delete autotest
     *  Use case  User sets autotest internal (guid format) or global (integer format) identifier and runs method execution  System finds the autotest by the identifier  System deletes autotest and returns no content response
     * @param {String} id Autotest internal (UUID) or global (integer) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteAutoTest(id: string): Promise<any>;
    /**
     * Unlink autotest from work item
     *  Use case  User sets autotest internal (guid format) or global (integer format) identifier  [Optional] User sets workitem internal (guid format) or global (integer format) identifier  User runs method execution  System finds the autotest by the autotest identifier  [Optional] if workitem id is set by User, System finds the workitem by the workitem identifier and unlinks it             from autotest.  [Optional] Otherwise, if workitem id is not specified, System unlinks all workitems linked to autotest.  System returns no content response
     * @param {String} id Autotest internal (UUID) or global (integer) identifier
     * @param {Object} opts Optional parameters
     * @param {String} [workItemId] Work item internal (UUID) or global (integer) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteAutoTestLinkFromWorkItemWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Unlink autotest from work item
     *  Use case  User sets autotest internal (guid format) or global (integer format) identifier  [Optional] User sets workitem internal (guid format) or global (integer format) identifier  User runs method execution  System finds the autotest by the autotest identifier  [Optional] if workitem id is set by User, System finds the workitem by the workitem identifier and unlinks it             from autotest.  [Optional] Otherwise, if workitem id is not specified, System unlinks all workitems linked to autotest.  System returns no content response
     * @param {String} id Autotest internal (UUID) or global (integer) identifier
     * @param {Object} opts Optional parameters
     * @param {String} opts.workItemId Work item internal (UUID) or global (integer) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteAutoTestLinkFromWorkItem(id: string, opts: {
        workItemId: string;
    }): Promise<any>;
    /**
     * @param {Object} opts Optional parameters
     * @param {String} [projectId] Project internal ID
     * @param {String} [externalId] Autotest external ID
     * @param {Number} [globalId] Autotest global ID
     * @param {String} [namespace] Namespace in which autotest is located
     * @param {Boolean} [isNamespaceNull] OBSOLETE: Use `includeEmptyNamespaces` instead
     * @param {Boolean} [includeEmptyNamespaces] If result must contain autotests without namespace
     * @param {String} [className] Name of class in which autotest is located
     * @param {Boolean} [isClassnameNull] OBSOLETE: Use `includeEmptyClassNames` instead
     * @param {Boolean} [includeEmptyClassNames] If result must contain autotests without class
     * @param {Boolean} [isDeleted] OBSOLETE: Use `deleted` instead
     * @param {Boolean} [deleted] Is autotest deleted
     * @param {Array.<String>} [labels] Include only autotests with provided labels
     * @param {Number} [stabilityMinimal] OBSOLETE: Use `minStability` instead
     * @param {Number} [minStability] Minimum stability value of autotest
     * @param {Number} [stabilityMaximal] OBSOLETE: Use `maxStability` instead
     * @param {Number} [maxStability] Maximum stability value of autotest
     * @param {Boolean} [isFlaky] OBSOLETE: Use `flaky` instead
     * @param {Boolean} [flaky] Is autotest marked as \"Flaky\"
     * @param {Boolean} [includeSteps] If result must also include autotest steps
     * @param {Boolean} [includeLabels] If result must also include autotest labels
     * @param {String} [externalKey] External key of autotest
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/AutoTestModel>} and HTTP response
     */
    getAllAutoTestsWithHttpInfo(opts: any): Promise<any>;
    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.projectId Project internal ID
     * @param {String} opts.externalId Autotest external ID
     * @param {Number} opts.globalId Autotest global ID
     * @param {String} opts.namespace Namespace in which autotest is located
     * @param {Boolean} opts.isNamespaceNull OBSOLETE: Use `includeEmptyNamespaces` instead
     * @param {Boolean} opts.includeEmptyNamespaces If result must contain autotests without namespace
     * @param {String} opts.className Name of class in which autotest is located
     * @param {Boolean} opts.isClassnameNull OBSOLETE: Use `includeEmptyClassNames` instead
     * @param {Boolean} opts.includeEmptyClassNames If result must contain autotests without class
     * @param {Boolean} opts.isDeleted OBSOLETE: Use `deleted` instead
     * @param {Boolean} opts.deleted Is autotest deleted
     * @param {Array.<String>} opts.labels Include only autotests with provided labels
     * @param {Number} opts.stabilityMinimal OBSOLETE: Use `minStability` instead
     * @param {Number} opts.minStability Minimum stability value of autotest
     * @param {Number} opts.stabilityMaximal OBSOLETE: Use `maxStability` instead
     * @param {Number} opts.maxStability Maximum stability value of autotest
     * @param {Boolean} opts.isFlaky OBSOLETE: Use `flaky` instead
     * @param {Boolean} opts.flaky Is autotest marked as \"Flaky\"
     * @param {Boolean} opts.includeSteps If result must also include autotest steps
     * @param {Boolean} opts.includeLabels If result must also include autotest labels
     * @param {String} opts.externalKey External key of autotest
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/AutoTestModel>}
     */
    getAllAutoTests(opts: {
        projectId: string;
        externalId: string;
        globalId: number;
        namespace: string;
        isNamespaceNull: boolean;
        includeEmptyNamespaces: boolean;
        className: string;
        isClassnameNull: boolean;
        includeEmptyClassNames: boolean;
        isDeleted: boolean;
        deleted: boolean;
        labels: Array<string>;
        stabilityMinimal: number;
        minStability: number;
        stabilityMaximal: number;
        maxStability: number;
        isFlaky: boolean;
        flaky: boolean;
        includeSteps: boolean;
        includeLabels: boolean;
        externalKey: string;
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
    }): Promise<any>;
    /**
     * Get average autotest duration
     *  Use case  User sets autotest internal (guid format) or global (integer format) identifier  User runs method execution  System calculates pass average duration and fail average duration of autotest from all related test results  System returns pass average duration and fail average duration for autotest
     * @param {String} id Autotest internal (UUID) or global (integer) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AutoTestAverageDurationApiResult} and HTTP response
     */
    getAutoTestAverageDurationWithHttpInfo(id: string): Promise<any>;
    /**
     * Get average autotest duration
     *  Use case  User sets autotest internal (guid format) or global (integer format) identifier  User runs method execution  System calculates pass average duration and fail average duration of autotest from all related test results  System returns pass average duration and fail average duration for autotest
     * @param {String} id Autotest internal (UUID) or global (integer) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AutoTestAverageDurationApiResult}
     */
    getAutoTestAverageDuration(id: string): Promise<any>;
    /**
     * Get autotest by internal or global ID
     *  Use case  User sets autotest internal or global identifier and runs method execution  System returns autotest, which internal or global identifier equals the identifier value set in the previous action
     * @param {String} id Autotest internal (UUID) or global (integer) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AutoTestApiResult} and HTTP response
     */
    getAutoTestByIdWithHttpInfo(id: string): Promise<any>;
    /**
     * Get autotest by internal or global ID
     *  Use case  User sets autotest internal or global identifier and runs method execution  System returns autotest, which internal or global identifier equals the identifier value set in the previous action
     * @param {String} id Autotest internal (UUID) or global (integer) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AutoTestApiResult}
     */
    getAutoTestById(id: string): Promise<any>;
    /**
     * Get autotest chronology
     *  Use case  User sets autotest internal (guid format) or global (integer format) identifier  User runs method execution  System search all test results related to autotest (with default limit equal 100)  System orders the test results by CompletedOn property descending and then orders by CreatedDate property descending  System returns test result chronology for autotest
     * @param {String} id Autotest internal (UUID) or global (integer) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TestResultChronologyModel>} and HTTP response
     */
    getAutoTestChronologyWithHttpInfo(id: string): Promise<any>;
    /**
     * Get autotest chronology
     *  Use case  User sets autotest internal (guid format) or global (integer format) identifier  User runs method execution  System search all test results related to autotest (with default limit equal 100)  System orders the test results by CompletedOn property descending and then orders by CreatedDate property descending  System returns test result chronology for autotest
     * @param {String} id Autotest internal (UUID) or global (integer) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TestResultChronologyModel>}
     */
    getAutoTestChronology(id: string): Promise<any>;
    /**
     * Get completed tests runs for autotests
     *  Use case  User sets autotest internal (guid format) or global (integer format) identifier  User runs method execution  System search for all test runs related to the autotest  System returns the enumeration of test runs
     * @param {String} id Autotest internal (UUID) or global (integer) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TestRunByAutoTestApiResult>} and HTTP response
     */
    getTestRunsWithHttpInfo(id: string): Promise<any>;
    /**
     * Get completed tests runs for autotests
     *  Use case  User sets autotest internal (guid format) or global (integer format) identifier  User runs method execution  System search for all test runs related to the autotest  System returns the enumeration of test runs
     * @param {String} id Autotest internal (UUID) or global (integer) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TestRunByAutoTestApiResult>}
     */
    getTestRuns(id: string): Promise<any>;
    /**
     * Get work items linked to autotest
     *  This method links an autotest to a test case or a checklist.             A manual test case with a linked automated work item is marked in the test management system as an autotest.             You can run it from graphical user interface (GUI). To do that:  1. Open the project in GUI.              2. Go to <b>Test plans</b> section and switch to the <b>Execution</b> tab.              3. Select the autotest(s) you want to run using checkboxes.              4. In the toolbar above the test list, click <b>Run autotests</b>.
     * @param {String} id Specifies the autotest entity ID.  You can copy it from the address bar in your web browser or use autotest GUID.
     * @param {Object} opts Optional parameters
     * @param {Boolean} [isDeleted] Specifies that a test is deleted or still relevant.
     * @param {Boolean} [isWorkItemDeleted = false)] OBSOLETE: Use `isDeleted` instead
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/AutoTestWorkItemIdentifierApiResult>} and HTTP response
     */
    getWorkItemsLinkedToAutoTestWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Get work items linked to autotest
     *  This method links an autotest to a test case or a checklist.             A manual test case with a linked automated work item is marked in the test management system as an autotest.             You can run it from graphical user interface (GUI). To do that:  1. Open the project in GUI.              2. Go to <b>Test plans</b> section and switch to the <b>Execution</b> tab.              3. Select the autotest(s) you want to run using checkboxes.              4. In the toolbar above the test list, click <b>Run autotests</b>.
     * @param {String} id Specifies the autotest entity ID.  You can copy it from the address bar in your web browser or use autotest GUID.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.isDeleted Specifies that a test is deleted or still relevant.
     * @param {Boolean} opts.isWorkItemDeleted OBSOLETE: Use `isDeleted` instead (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/AutoTestWorkItemIdentifierApiResult>}
     */
    getWorkItemsLinkedToAutoTest(id: string, opts: {
        isDeleted: boolean;
        isWorkItemDeleted: boolean;
    }): Promise<any>;
    /**
     * Link autotest with work items
     *  Use case  User sets autotest internal (guid format) or global (integer format) identifier  User sets work item internal (guid format) or global (integer format) identifier  User runs method execution  System finds the autotest by the autotest identifier  System finds the work item by the work item identifier  System relates the work item with the autotest and returns no content response
     * @param {String} id Autotest internal (UUID) or global (integer) identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/WorkItemIdApiModel} [workItemIdApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    linkAutoTestToWorkItemWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Link autotest with work items
     *  Use case  User sets autotest internal (guid format) or global (integer format) identifier  User sets work item internal (guid format) or global (integer format) identifier  User runs method execution  System finds the autotest by the autotest identifier  System finds the work item by the work item identifier  System relates the work item with the autotest and returns no content response
     * @param {String} id Autotest internal (UUID) or global (integer) identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/WorkItemIdApiModel} opts.workItemIdApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    linkAutoTestToWorkItem(id: string, opts: {
        workItemIdApiModel: any;
    }): Promise<any>;
    /**
     * Update autotest
     *  Use case  User sets autotest updated parameters values (listed in the example) and runs method execution  System finds the autotest by the identifier  System updates autotest parameters  [Optional] If steps enumeration is set, system creates step items, relates them to autotest             and deletes relations with current steps( if exist)  [Optional] If Setup enumeration is set, system creates setup items and relates them to autotest             and deletes relations with current Setup items (if exist)  [Optional] If teardown enumeration is set, system creates teardown items and relates them to autotest             and deletes relations with current teardown items (if exist)  [Optional] If label enumeration is set, system creates labels and relates them to autotest             and deletes relations with current Labels (if exist)  [Optional] If link enumeration is set, system creates links and relates them to autotest             and deletes relations with current Links (if exist)  System updates autotest and returns no content response
     * @param {Object} opts Optional parameters
     * @param {module:model/AutoTestUpdateApiModel} [autoTestUpdateApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updateAutoTestWithHttpInfo(opts: any): Promise<any>;
    /**
     * Update autotest
     *  Use case  User sets autotest updated parameters values (listed in the example) and runs method execution  System finds the autotest by the identifier  System updates autotest parameters  [Optional] If steps enumeration is set, system creates step items, relates them to autotest             and deletes relations with current steps( if exist)  [Optional] If Setup enumeration is set, system creates setup items and relates them to autotest             and deletes relations with current Setup items (if exist)  [Optional] If teardown enumeration is set, system creates teardown items and relates them to autotest             and deletes relations with current teardown items (if exist)  [Optional] If label enumeration is set, system creates labels and relates them to autotest             and deletes relations with current Labels (if exist)  [Optional] If link enumeration is set, system creates links and relates them to autotest             and deletes relations with current Links (if exist)  System updates autotest and returns no content response
     * @param {Object} opts Optional parameters
     * @param {module:model/AutoTestUpdateApiModel} opts.autoTestUpdateApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateAutoTest(opts: {
        autoTestUpdateApiModel: any;
    }): Promise<any>;
    /**
     * Update multiple autotests
     *  Use case  User sets autotest updated parameters values (listed in the example) and runs method execution  System finds the autotest by the identifier  System updates autotest parameters  [Optional] If steps enumeration is set, system creates step items, relates them to autotest             and deletes relations with current steps( if exist)  [Optional] If Setup enumeration is set, system creates setup items and relates them to autotest             and deletes relations with current Setup items (if exist)  [Optional] If teardown enumeration is set, system creates teardown items and relates them to autotest             and deletes relations with current teardown items (if exist)  [Optional] If label enumeration is set, system creates labels and relates them to autotest             and deletes relations with current Labels (if exist)  [Optional] If link enumeration is set, system creates links and relates them to autotest             and deletes relations with current Links (if exist)  System updates autotest and returns no content response
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/AutoTestUpdateApiModel>} [autoTestUpdateApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updateMultipleWithHttpInfo(opts: any): Promise<any>;
    /**
     * Update multiple autotests
     *  Use case  User sets autotest updated parameters values (listed in the example) and runs method execution  System finds the autotest by the identifier  System updates autotest parameters  [Optional] If steps enumeration is set, system creates step items, relates them to autotest             and deletes relations with current steps( if exist)  [Optional] If Setup enumeration is set, system creates setup items and relates them to autotest             and deletes relations with current Setup items (if exist)  [Optional] If teardown enumeration is set, system creates teardown items and relates them to autotest             and deletes relations with current teardown items (if exist)  [Optional] If label enumeration is set, system creates labels and relates them to autotest             and deletes relations with current Labels (if exist)  [Optional] If link enumeration is set, system creates links and relates them to autotest             and deletes relations with current Links (if exist)  System updates autotest and returns no content response
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/AutoTestUpdateApiModel>} opts.autoTestUpdateApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateMultiple(opts: any): Promise<any>;
}
