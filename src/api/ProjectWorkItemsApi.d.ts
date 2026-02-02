/**
* ProjectWorkItems service.
* @module api/ProjectWorkItemsApi
* @version 7.1.0-TMS-5.6
*/
export default class ProjectWorkItemsApi {
    /**
    * Constructs a new ProjectWorkItemsApi.
    * @alias module:api/ProjectWorkItemsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Search for work items and group results by attribute
     * @param {String} projectId Unique or global ID of the project
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @param {module:model/WorkItemGroupGetModel} [workItemGroupGetModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/WorkItemGroupModel>} and HTTP response
     */
    apiV2ProjectsProjectIdWorkItemsSearchGroupedPostWithHttpInfo(projectId: string, opts: any): Promise<any>;
    /**
     * Search for work items and group results by attribute
     * @param {String} projectId Unique or global ID of the project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @param {module:model/WorkItemGroupGetModel} opts.workItemGroupGetModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/WorkItemGroupModel>}
     */
    apiV2ProjectsProjectIdWorkItemsSearchGroupedPost(projectId: string, opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
        workItemGroupGetModel: any;
    }): Promise<any>;
    /**
     * Search for work items and extract IDs only
     * @param {String} projectId Unique or global ID of the project
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @param {module:model/WorkItemSelectModel} [workItemSelectModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<String>} and HTTP response
     */
    apiV2ProjectsProjectIdWorkItemsSearchIdPostWithHttpInfo(projectId: string, opts: any): Promise<any>;
    /**
     * Search for work items and extract IDs only
     * @param {String} projectId Unique or global ID of the project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @param {module:model/WorkItemSelectModel} opts.workItemSelectModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<String>}
     */
    apiV2ProjectsProjectIdWorkItemsSearchIdPost(projectId: string, opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
        workItemSelectModel: any;
    }): Promise<any>;
    /**
     * Search for work items
     * @param {String} projectId Unique or global ID of the project
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @param {module:model/WorkItemSelectApiModel} [workItemSelectApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/WorkItemShortApiResult>} and HTTP response
     */
    apiV2ProjectsProjectIdWorkItemsSearchPostWithHttpInfo(projectId: string, opts: any): Promise<any>;
    /**
     * Search for work items
     * @param {String} projectId Unique or global ID of the project
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @param {module:model/WorkItemSelectApiModel} opts.workItemSelectApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/WorkItemShortApiResult>}
     */
    apiV2ProjectsProjectIdWorkItemsSearchPost(projectId: string, opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
        workItemSelectApiModel: any;
    }): Promise<any>;
    /**
     * Get work item index (position) in a collection by its id.
     * @param {String} projectId Internal (UUID) or global (integer) identifier
     * @param {String} workItemId
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @param {module:model/WorkItemSelectApiModel} [workItemSelectApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WorkItemIndexApiResult} and HTTP response
     */
    apiV2ProjectsProjectIdWorkItemsSearchWorkItemIdIndexPostWithHttpInfo(projectId: string, workItemId: string, opts: any): Promise<any>;
    /**
     * Get work item index (position) in a collection by its id.
     * @param {String} projectId Internal (UUID) or global (integer) identifier
     * @param {String} workItemId
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @param {module:model/WorkItemSelectApiModel} opts.workItemSelectApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkItemIndexApiResult}
     */
    apiV2ProjectsProjectIdWorkItemsSearchWorkItemIdIndexPost(projectId: string, workItemId: string, opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
        workItemSelectApiModel: any;
    }): Promise<any>;
    /**
     * Get WorkItems Tags
     *  Use case  User sets project internal identifier  User runs method execution  System returns work items tags
     * @param {String} projectId Project internal (UUID) identifier
     * @param {Object} opts Optional parameters
     * @param {Boolean} [isDeleted]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TagShortApiResult>} and HTTP response
     */
    apiV2ProjectsProjectIdWorkItemsTagsGetWithHttpInfo(projectId: string, opts: any): Promise<any>;
    /**
     * Get WorkItems Tags
     *  Use case  User sets project internal identifier  User runs method execution  System returns work items tags
     * @param {String} projectId Project internal (UUID) identifier
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.isDeleted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TagShortApiResult>}
     */
    apiV2ProjectsProjectIdWorkItemsTagsGet(projectId: string, opts: {
        isDeleted: boolean;
    }): Promise<any>;
    /**
     * Get project work items
     *  Use case  User sets project internal or global identifier  [Optional] User sets isDeleted field value  User runs method execution  System search project  [Optional] If User sets isDeleted field value as true, System search all deleted workitems related to project  [Optional] If User sets isDeleted field value as false, System search all workitems related to project which are not deleted  If User did not set isDeleted field value, System search all  workitems related to project  System returns array of found workitems (listed in response model)
     * @param {String} projectId Project internal (UUID) or global (integer) identifier
     * @param {Object} opts Optional parameters
     * @param {Boolean} [isDeleted = false)] If result must consist of only actual/deleted work items
     * @param {Array.<String>} [tagNames] List of tags to filter by
     * @param {Boolean} [includeIterations = true)]
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/WorkItemShortModel>} and HTTP response
     */
    getWorkItemsByProjectIdWithHttpInfo(projectId: string, opts: any): Promise<any>;
    /**
     * Get project work items
     *  Use case  User sets project internal or global identifier  [Optional] User sets isDeleted field value  User runs method execution  System search project  [Optional] If User sets isDeleted field value as true, System search all deleted workitems related to project  [Optional] If User sets isDeleted field value as false, System search all workitems related to project which are not deleted  If User did not set isDeleted field value, System search all  workitems related to project  System returns array of found workitems (listed in response model)
     * @param {String} projectId Project internal (UUID) or global (integer) identifier
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.isDeleted If result must consist of only actual/deleted work items (default to false)
     * @param {Array.<String>} opts.tagNames List of tags to filter by
     * @param {Boolean} opts.includeIterations  (default to true)
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/WorkItemShortModel>}
     */
    getWorkItemsByProjectId(projectId: string, opts: {
        isDeleted: boolean;
        tagNames: Array<string>;
        includeIterations: boolean;
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
    }): Promise<any>;
}
