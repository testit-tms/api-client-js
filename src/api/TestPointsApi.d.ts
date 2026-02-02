/**
* TestPoints service.
* @module api/TestPointsApi
* @version 7.1.0-TMS-5.6
*/
export default class TestPointsApi {
    /**
    * Constructs a new TestPointsApi.
    * @alias module:api/TestPointsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Get all test runs which use test point
     * @param {String} id Test point unique ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TestRunApiResult>} and HTTP response
     */
    apiV2TestPointsIdTestRunsGetWithHttpInfo(id: string): Promise<any>;
    /**
     * Get all test runs which use test point
     * @param {String} id Test point unique ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TestRunApiResult>}
     */
    apiV2TestPointsIdTestRunsGet(id: string): Promise<any>;
    /**
     * Get work item represented by test point
     * @param {String} id Test point unique ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/WorkItemModel} and HTTP response
     */
    apiV2TestPointsIdWorkItemGetWithHttpInfo(id: string): Promise<any>;
    /**
     * Get work item represented by test point
     * @param {String} id Test point unique ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/WorkItemModel}
     */
    apiV2TestPointsIdWorkItemGet(id: string): Promise<any>;
    /**
     * Search for test points and extract IDs only
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @param {module:model/TestPointFilterRequestModel} [testPointFilterRequestModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<String>} and HTTP response
     */
    apiV2TestPointsSearchIdPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Search for test points and extract IDs only
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @param {module:model/TestPointFilterRequestModel} opts.testPointFilterRequestModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<String>}
     */
    apiV2TestPointsSearchIdPost(opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
        testPointFilterRequestModel: any;
    }): Promise<any>;
    /**
     * Search for test points
     * @param {Object} opts Optional parameters
     * @param {Number} [skip] Amount of items to be skipped (offset)
     * @param {Number} [take] Amount of items to be taken (limit)
     * @param {String} [orderBy] SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} [searchField] Property name for searching
     * @param {String} [searchValue] Value for searching
     * @param {module:model/TestPointFilterRequestModel} [testPointFilterRequestModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TestPointShortResponseModel>} and HTTP response
     */
    apiV2TestPointsSearchPostWithHttpInfo(opts: any): Promise<any>;
    /**
     * Search for test points
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skip Amount of items to be skipped (offset)
     * @param {Number} opts.take Amount of items to be taken (limit)
     * @param {String} opts.orderBy SQL-like  ORDER BY statement (column1 ASC|DESC , column2 ASC|DESC)
     * @param {String} opts.searchField Property name for searching
     * @param {String} opts.searchValue Value for searching
     * @param {module:model/TestPointFilterRequestModel} opts.testPointFilterRequestModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TestPointShortResponseModel>}
     */
    apiV2TestPointsSearchPost(opts: {
        skip: number;
        take: number;
        orderBy: string;
        searchField: string;
        searchValue: string;
        testPointFilterRequestModel: any;
    }): Promise<any>;
}
