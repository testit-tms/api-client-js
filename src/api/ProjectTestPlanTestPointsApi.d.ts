/**
* ProjectTestPlanTestPoints service.
* @module api/ProjectTestPlanTestPointsApi
* @version 7.1.0-TMS-5.6
*/
export default class ProjectTestPlanTestPointsApi {
    /**
    * Constructs a new ProjectTestPlanTestPointsApi.
    * @alias module:api/ProjectTestPlanTestPointsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient?: any);
    apiClient: any;
    /**
     * Rerun autotests.
     * @param {String} projectId Internal (UUID) or global (integer) identifier
     * @param {String} testPlanId
     * @param {Object} opts Optional parameters
     * @param {module:model/TestPlanTestPointsAutoTestsRerunApiModel} [testPlanTestPointsAutoTestsRerunApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRerunPostWithHttpInfo(projectId: string, testPlanId: string, opts: any): Promise<any>;
    /**
     * Rerun autotests.
     * @param {String} projectId Internal (UUID) or global (integer) identifier
     * @param {String} testPlanId
     * @param {Object} opts Optional parameters
     * @param {module:model/TestPlanTestPointsAutoTestsRerunApiModel} opts.testPlanTestPointsAutoTestsRerunApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRerunPost(projectId: string, testPlanId: string, opts: {
        testPlanTestPointsAutoTestsRerunApiModel: any;
    }): Promise<any>;
    /**
     * Run autotests.
     * @param {String} projectId Internal (UUID) or global (integer) identifier
     * @param {String} testPlanId
     * @param {Object} opts Optional parameters
     * @param {module:model/TestPlanTestPointsAutoTestsRunApiModel} [testPlanTestPointsAutoTestsRunApiModel]
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TestRunNameApiResult} and HTTP response
     */
    apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRunPostWithHttpInfo(projectId: string, testPlanId: string, opts: any): Promise<any>;
    /**
     * Run autotests.
     * @param {String} projectId Internal (UUID) or global (integer) identifier
     * @param {String} testPlanId
     * @param {Object} opts Optional parameters
     * @param {module:model/TestPlanTestPointsAutoTestsRunApiModel} opts.testPlanTestPointsAutoTestsRunApiModel
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TestRunNameApiResult}
     */
    apiV2ProjectsProjectIdTestPlansTestPlanIdTestPointsAutotestsRunPost(projectId: string, testPlanId: string, opts: {
        testPlanTestPointsAutoTestsRunApiModel: any;
    }): Promise<any>;
}
