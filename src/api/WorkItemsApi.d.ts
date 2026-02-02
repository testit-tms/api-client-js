/**
* WorkItems service.
* @module api/WorkItemsApi
* @version 7.1.0
*/
export default class WorkItemsApi {
    /**
    * Constructs a new WorkItemsApi.
    * @alias module:api/WorkItemsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Upload and link attachment to WorkItem
     *  Use case  User sets workItemId  User attaches a file  System creates attachment and links it to the work item  System returns attachment identifier
     * @param {String} id Work item internal identifier (guid format)
     * @param {Object} opts Optional parameters
     * @param {File} [file] Select file
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2WorkItemsIdAttachmentsPostWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Upload and link attachment to WorkItem
     *  Use case  User sets workItemId  User attaches a file  System creates attachment and links it to the work item  System returns attachment identifier
     * @param {String} id Work item internal identifier (guid format)
     * @param {Object} opts Optional parameters
     * @param {File} opts.file Select file
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2WorkItemsIdAttachmentsPost(id: string, opts: {
        file: File;
    }): Promise<any>;
    /**
     * Transform CheckList to TestCase
     *  Use case  User sets checklist identifier  User runs method execution  System transform CheckList to TestCase
     * @param {String} id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WorkItemModel} and HTTP response
     */
    apiV2WorkItemsIdCheckListTransformToTestCasePostWithHttpInfo(id: string): Promise<any>;
    /**
     * Transform CheckList to TestCase
     *  Use case  User sets checklist identifier  User runs method execution  System transform CheckList to TestCase
     * @param {String} id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkItemModel}
     */
    apiV2WorkItemsIdCheckListTransformToTestCasePost(id: string): Promise<any>;
    /**
     * Get change history of WorkItem
     *  Use case  User sets work item identifier  User runs method execution  System return change history of WorkItem
     * @param {String} id
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/WorkItemChangeModel>} and HTTP response
     */
    apiV2WorkItemsIdHistoryGetWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Get change history of WorkItem
     *  Use case  User sets work item identifier  User runs method execution  System return change history of WorkItem
     * @param {String} id
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/WorkItemChangeModel>}
     */
    apiV2WorkItemsIdHistoryGet(id: string, opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
    }): Promise<any>;
    /**
     * Delete like from WorkItem
     *  Use case  User sets WorkItem identifier  User runs method execution  System delete like from WorkItem
     * @param {String} id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2WorkItemsIdLikeDeleteWithHttpInfo(id: string): Promise<any>;
    /**
     * Delete like from WorkItem
     *  Use case  User sets WorkItem identifier  User runs method execution  System delete like from WorkItem
     * @param {String} id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2WorkItemsIdLikeDelete(id: string): Promise<any>;
    /**
     * Set like to WorkItem
     *  Use case  User sets WorkItem identifier  User runs method execution  System set like to WorkItem
     * @param {String} id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2WorkItemsIdLikePostWithHttpInfo(id: string): Promise<any>;
    /**
     * Set like to WorkItem
     *  Use case  User sets WorkItem identifier  User runs method execution  System set like to WorkItem
     * @param {String} id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2WorkItemsIdLikePost(id: string): Promise<any>;
    /**
     * Get likes count of WorkItem
     *  Use case  User sets WorkItem identifier  User runs method execution  System return likes count of WorkItem
     * @param {String} id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Number} and HTTP response
     */
    apiV2WorkItemsIdLikesCountGetWithHttpInfo(id: string): Promise<any>;
    /**
     * Get likes count of WorkItem
     *  Use case  User sets WorkItem identifier  User runs method execution  System return likes count of WorkItem
     * @param {String} id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Number}
     */
    apiV2WorkItemsIdLikesCountGet(id: string): Promise<any>;
    /**
     * Get likes of WorkItem
     *  Use case  User sets WorkItem identifier  User runs method execution  System return likes of WorkItem
     * @param {String} id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/WorkItemLikeModel>} and HTTP response
     */
    apiV2WorkItemsIdLikesGetWithHttpInfo(id: string): Promise<any>;
    /**
     * Get likes of WorkItem
     *  Use case  User sets WorkItem identifier  User runs method execution  System return likes of WorkItem
     * @param {String} id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/WorkItemLikeModel>}
     */
    apiV2WorkItemsIdLikesGet(id: string): Promise<any>;
    /**
     * Get test results history of WorkItem
     *  Use case  User sets WorkItem identifier  User runs method execution  System return test results history of WorkItem
     * @param {String} id
     * @param {Object} opts Optional parameters
     * @param {Date} [from] Take results from this date
     * @param {Date} [to] Take results until this date
     * @param {Array.<String>} [configurationIds] Identifiers of test result configurations
     * @param {Array.<String>} [testPlanIds] Identifiers of test plans which contain test results
     * @param {Array.<String>} [userIds] Identifiers of users who set test results
     * @param {Array.<String>} [outcomes] List of outcomes of test results
     * @param {Array.<String>} [statusCodes] List of status codes of test results
     * @param {Boolean} [isAutomated] OBSOLETE: Use `Automated` instead
     * @param {Boolean} [automated] If result must consist of only manual/automated test results
     * @param {Array.<String>} [testRunIds] Identifiers of test runs which contain test results
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TestResultHistoryReportApiResult>} and HTTP response
     */
    apiV2WorkItemsIdTestResultsHistoryGetWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Get test results history of WorkItem
     *  Use case  User sets WorkItem identifier  User runs method execution  System return test results history of WorkItem
     * @param {String} id
     * @param {Object} opts Optional parameters
     * @param {Date} opts.from Take results from this date
     * @param {Date} opts.to Take results until this date
     * @param {Array.<String>} opts.configurationIds Identifiers of test result configurations
     * @param {Array.<String>} opts.testPlanIds Identifiers of test plans which contain test results
     * @param {Array.<String>} opts.userIds Identifiers of users who set test results
     * @param {Array.<String>} opts.outcomes List of outcomes of test results
     * @param {Array.<String>} opts.statusCodes List of status codes of test results
     * @param {Boolean} opts.isAutomated OBSOLETE: Use `Automated` instead
     * @param {Boolean} opts.automated If result must consist of only manual/automated test results
     * @param {Array.<String>} opts.testRunIds Identifiers of test runs which contain test results
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TestResultHistoryReportApiResult>}
     */
    apiV2WorkItemsIdTestResultsHistoryGet(id: string, opts: {
        from: Date;
        to: Date;
        configurationIds: Array<string>;
        testPlanIds: Array<string>;
        userIds: Array<string>;
        outcomes: Array<string>;
        statusCodes: Array<string>;
        isAutomated: boolean;
        automated: boolean;
        testRunIds: Array<string>;
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
    }): Promise<any>;
    /**
     * Set WorkItem as actual
     *  Use case  User sets work item identifier  User runs method execution  System set WorkItem as actual
     * @param {String} id
     * @param {String} versionId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WorkItemModel} and HTTP response
     */
    apiV2WorkItemsIdVersionVersionIdActualPostWithHttpInfo(id: string, versionId: string): Promise<any>;
    /**
     * Set WorkItem as actual
     *  Use case  User sets work item identifier  User runs method execution  System set WorkItem as actual
     * @param {String} id
     * @param {String} versionId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkItemModel}
     */
    apiV2WorkItemsIdVersionVersionIdActualPost(id: string, versionId: string): Promise<any>;
    /**
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @param {module:model/WorkItemLinkUrlApiModel} [workItemLinkUrlApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SearchWorkItemLinkUrlsApiResult} and HTTP response
     */
    apiV2WorkItemsLinksUrlsSearchPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @param {module:model/WorkItemLinkUrlApiModel} opts.workItemLinkUrlApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SearchWorkItemLinkUrlsApiResult}
     */
    apiV2WorkItemsLinksUrlsSearchPost(opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
        workItemLinkUrlApiModel: any;
    }): Promise<any>;
    /**
     * Move WorkItem to another section
     *  Use case  User sets WorkItem identifier  User runs method execution  System move WorkItem to another section
     * @param {Object} opts Optional parameters
     * @param {module:model/WorkItemMovePostModel} [workItemMovePostModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WorkItemShortModel} and HTTP response
     */
    apiV2WorkItemsMovePostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Move WorkItem to another section
     *  Use case  User sets WorkItem identifier  User runs method execution  System move WorkItem to another section
     * @param {Object} opts Optional parameters
     * @param {module:model/WorkItemMovePostModel} opts.workItemMovePostModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkItemShortModel}
     */
    apiV2WorkItemsMovePost(opts: {
        workItemMovePostModel: any;
    }): Promise<any>;
    /**
     * Creates work item
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateWorkItemApiModel} [createWorkItemApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WorkItemApiResult} and HTTP response
     */
    apiV2WorkItemsPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Creates work item
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateWorkItemApiModel} opts.createWorkItemApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkItemApiResult}
     */
    apiV2WorkItemsPost(opts: {
        createWorkItemApiModel: any;
    }): Promise<any>;
    /**
     * Search for work items
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @param {module:model/WorkItemSelectApiModel} [workItemSelectApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/WorkItemShortApiResult>} and HTTP response
     */
    apiV2WorkItemsSearchPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Search for work items
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @param {module:model/WorkItemSelectApiModel} opts.workItemSelectApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/WorkItemShortApiResult>}
     */
    apiV2WorkItemsSearchPost(opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
        workItemSelectApiModel: any;
    }): Promise<any>;
    /**
     * Get SharedStep references in sections
     *  Use case  User sets SharedStep identifier  User runs method execution  System return SharedStep references
     * @param {String} sharedStepId
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @param {module:model/SharedStepReferenceSectionsQueryFilterModel} [sharedStepReferenceSectionsQueryFilterModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/SharedStepReferenceSectionModel>} and HTTP response
     */
    apiV2WorkItemsSharedStepIdReferencesSectionsPostWithHttpInfo(sharedStepId: string, opts: any): Promise<any>;
    /**
     * Get SharedStep references in sections
     *  Use case  User sets SharedStep identifier  User runs method execution  System return SharedStep references
     * @param {String} sharedStepId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @param {module:model/SharedStepReferenceSectionsQueryFilterModel} opts.sharedStepReferenceSectionsQueryFilterModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/SharedStepReferenceSectionModel>}
     */
    apiV2WorkItemsSharedStepIdReferencesSectionsPost(sharedStepId: string, opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
        sharedStepReferenceSectionsQueryFilterModel: any;
    }): Promise<any>;
    /**
     * Get SharedStep references in work items
     *  Use case  User sets SharedStep identifier  User runs method execution  System return SharedStep references
     * @param {String} sharedStepId
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @param {module:model/SharedStepReferencesQueryFilterModel} [sharedStepReferencesQueryFilterModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/SharedStepReferenceModel>} and HTTP response
     */
    apiV2WorkItemsSharedStepIdReferencesWorkItemsPostWithHttpInfo(sharedStepId: string, opts: any): Promise<any>;
    /**
     * Get SharedStep references in work items
     *  Use case  User sets SharedStep identifier  User runs method execution  System return SharedStep references
     * @param {String} sharedStepId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @param {module:model/SharedStepReferencesQueryFilterModel} opts.sharedStepReferencesQueryFilterModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/SharedStepReferenceModel>}
     */
    apiV2WorkItemsSharedStepIdReferencesWorkItemsPost(sharedStepId: string, opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
        sharedStepReferencesQueryFilterModel: any;
    }): Promise<any>;
    /**
     * Get SharedStep references
     *  Use case  User sets SharedStep identifier  User runs method execution  System return SharedStep references
     * @param {String} sharedStepId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/SharedStepReferenceModel>} and HTTP response
     */
    apiV2WorkItemsSharedStepsSharedStepIdReferencesGetWithHttpInfo(sharedStepId: string): Promise<any>;
    /**
     * Get SharedStep references
     *  Use case  User sets SharedStep identifier  User runs method execution  System return SharedStep references
     * @param {String} sharedStepId
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/SharedStepReferenceModel>}
     */
    apiV2WorkItemsSharedStepsSharedStepIdReferencesGet(sharedStepId: string): Promise<any>;
    /**
     * Delete all links AutoTests from WorkItem by Id or GlobalId
     *  Use case  User sets work item identifier  User runs method execution  System search work item by identifier  System search and delete all autotests, related to found work item  System returns no content response
     * @param {String} id WorkItem internal (guid format) or global(integer format) identifier\"
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteAllWorkItemsFromAutoTestWithHttpInfo(id: string): Promise<any>;
    /**
     * Delete all links AutoTests from WorkItem by Id or GlobalId
     *  Use case  User sets work item identifier  User runs method execution  System search work item by identifier  System search and delete all autotests, related to found work item  System returns no content response
     * @param {String} id WorkItem internal (guid format) or global(integer format) identifier\"
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteAllWorkItemsFromAutoTest(id: string): Promise<any>;
    /**
     * Delete Test Case, Checklist or Shared Step by Id or GlobalId
     *  Use case  User sets work item identifier  User runs method execution  System deletes work item  System returns no content response
     * @param {String} id WorkItem internal (guid format) or global(integer format) identifier\"
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteWorkItemWithHttpInfo(id: string): Promise<any>;
    /**
     * Delete Test Case, Checklist or Shared Step by Id or GlobalId
     *  Use case  User sets work item identifier  User runs method execution  System deletes work item  System returns no content response
     * @param {String} id WorkItem internal (guid format) or global(integer format) identifier\"
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteWorkItem(id: string): Promise<any>;
    /**
     * Get all AutoTests linked to WorkItem by Id or GlobalId
     *  Use case  User sets work item identifier  User runs method execution  System search work item by identifier  System search all autotests, related to found work item  System returns list of found autotests
     * @param {String} id WorkItem internal (guid format) or global(integer format) identifier\"
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/AutoTestModel>} and HTTP response
     */
    getAutoTestsForWorkItemWithHttpInfo(id: string): Promise<any>;
    /**
     * Get all AutoTests linked to WorkItem by Id or GlobalId
     *  Use case  User sets work item identifier  User runs method execution  System search work item by identifier  System search all autotests, related to found work item  System returns list of found autotests
     * @param {String} id WorkItem internal (guid format) or global(integer format) identifier\"
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/AutoTestModel>}
     */
    getAutoTestsForWorkItem(id: string): Promise<any>;
    /**
     * Get iterations by work item Id or GlobalId
     * @param {String} id WorkItem internal (guid format) or global(integer format) identifier\"
     * @param {Object} opts Optional parameters
     * @param {String} [versionId] WorkItem version (guid format) identifier
     * @param {Number} [versionNumber] WorkItem version number (0 is the last version)\"
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/IterationModel>} and HTTP response
     */
    getIterationsWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Get iterations by work item Id or GlobalId
     * @param {String} id WorkItem internal (guid format) or global(integer format) identifier\"
     * @param {Object} opts Optional parameters
     * @param {String} opts.versionId WorkItem version (guid format) identifier
     * @param {Number} opts.versionNumber WorkItem version number (0 is the last version)\"
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/IterationModel>}
     */
    getIterations(id: string, opts: {
        versionId: string;
        versionNumber: number;
    }): Promise<any>;
    /**
     * Get Test Case, Checklist or Shared Step by Id or GlobalId
     *  Use case  User sets work item identifier  [Optional] User sets work item version identifier  [Optional] User sets work item version number  User runs method execution  System search work item by identifier  [Optional] if User sets work item version identifier, system search work item version by identifier.  [Optional] if user sets work item version number, system search work item version by number  Otherwise, system search last work item version  System returns work item
     * @param {String} id WorkItem internal (guid format) or global(integer format) identifier\"
     * @param {Object} opts Optional parameters
     * @param {String} [versionId] WorkItem version (guid format) identifier\"
     * @param {Number} [versionNumber] WorkItem version number (0 is the last version)\"
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WorkItemModel} and HTTP response
     */
    getWorkItemByIdWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Get Test Case, Checklist or Shared Step by Id or GlobalId
     *  Use case  User sets work item identifier  [Optional] User sets work item version identifier  [Optional] User sets work item version number  User runs method execution  System search work item by identifier  [Optional] if User sets work item version identifier, system search work item version by identifier.  [Optional] if user sets work item version number, system search work item version by number  Otherwise, system search last work item version  System returns work item
     * @param {String} id WorkItem internal (guid format) or global(integer format) identifier\"
     * @param {Object} opts Optional parameters
     * @param {String} opts.versionId WorkItem version (guid format) identifier\"
     * @param {Number} opts.versionNumber WorkItem version number (0 is the last version)\"
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkItemModel}
     */
    getWorkItemById(id: string, opts: {
        versionId: string;
        versionNumber: number;
    }): Promise<any>;
    /**
     * Get WorkItem chronology by Id or GlobalId
     *  Use case  User sets work item identifier  User runs method execution  System search work item by identifier  System search test results of all autotests, related to found work item  System sort results by CompletedOn ascending, then by CreatedDate ascending  System returns sorted collection of test results
     * @param {String} id Internal (UUID) or global (integer) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TestResultChronologyModel>} and HTTP response
     */
    getWorkItemChronologyWithHttpInfo(id: string): Promise<any>;
    /**
     * Get WorkItem chronology by Id or GlobalId
     *  Use case  User sets work item identifier  User runs method execution  System search work item by identifier  System search test results of all autotests, related to found work item  System sort results by CompletedOn ascending, then by CreatedDate ascending  System returns sorted collection of test results
     * @param {String} id Internal (UUID) or global (integer) identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TestResultChronologyModel>}
     */
    getWorkItemChronology(id: string): Promise<any>;
    /**
     * Get WorkItem versions
     *  Use case  User sets work item identifier  [Optional] User sets work item version identifier  User runs method execution  System search work item by identifier  [Optional] If User set work item version identifier, System search work item version by version identifier                     Otherwise, system search all version of work item  System returns array of work item version models (listed in response example)
     * @param {String} id WorkItem internal (guid format) or global(integer format) identifier\"
     * @param {Object} opts Optional parameters
     * @param {String} [workItemVersionId] WorkItem version (guid format) identifier\"
     * @param {Number} [versionNumber] WorkItem version (integer format) number\"
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/WorkItemVersionModel>} and HTTP response
     */
    getWorkItemVersionsWithHttpInfo(id: string, opts: any): Promise<any>;
    /**
     * Get WorkItem versions
     *  Use case  User sets work item identifier  [Optional] User sets work item version identifier  User runs method execution  System search work item by identifier  [Optional] If User set work item version identifier, System search work item version by version identifier                     Otherwise, system search all version of work item  System returns array of work item version models (listed in response example)
     * @param {String} id WorkItem internal (guid format) or global(integer format) identifier\"
     * @param {Object} opts Optional parameters
     * @param {String} opts.workItemVersionId WorkItem version (guid format) identifier\"
     * @param {Number} opts.versionNumber WorkItem version (integer format) number\"
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/WorkItemVersionModel>}
     */
    getWorkItemVersions(id: string, opts: {
        workItemVersionId: string;
        versionNumber: number;
    }): Promise<any>;
    /**
     * Permanently delete test case, checklist or shared steps from archive
     * @param {String} id Unique or global ID of the work item
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    purgeWorkItemWithHttpInfo(id: string): Promise<any>;
    /**
     * Permanently delete test case, checklist or shared steps from archive
     * @param {String} id Unique or global ID of the work item
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    purgeWorkItem(id: string): Promise<any>;
    /**
     * Restore test case, checklist or shared steps from archive
     * @param {String} id Unique or global ID of the work item
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    restoreWorkItemWithHttpInfo(id: string): Promise<any>;
    /**
     * Restore test case, checklist or shared steps from archive
     * @param {String} id Unique or global ID of the work item
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    restoreWorkItem(id: string): Promise<any>;
    /**
     * Update Test Case, Checklist or Shared Step
     *  Use case  User sets work item properties (listed in request parameters)  User runs method execution  System updates work item by identifier  System returns updated work item model (listed in response parameters)
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateWorkItemApiModel} [updateWorkItemApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updateWorkItemWithHttpInfo(opts: any): Promise<any>;
    /**
     * Update Test Case, Checklist or Shared Step
     *  Use case  User sets work item properties (listed in request parameters)  User runs method execution  System updates work item by identifier  System returns updated work item model (listed in response parameters)
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateWorkItemApiModel} opts.updateWorkItemApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateWorkItem(opts: {
        updateWorkItemApiModel: any;
    }): Promise<any>;
}
