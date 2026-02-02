export default TestRunApiResult;
/**
 * The TestRunApiResult model module.
 * @module model/TestRunApiResult
 * @version 7.1.0
 */
declare class TestRunApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, isDeleted: any, build: any, stateName: any, status: any, projectId: any, autoTests: any, autoTestsCount: any, testSuiteIds: any, isAutomated: any, analytic: any, testResults: any, createdDate: any, createdById: any): void;
    /**
     * Constructs a <code>TestRunApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestRunApiResult} obj Optional instance to populate.
     * @return {module:model/TestRunApiResult} The populated <code>TestRunApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestRunApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestRunApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestRunApiResult</code>.
     * @alias module:model/TestRunApiResult
     * @param id {String} Unique ID of the entity
     * @param isDeleted {Boolean} Indicates if the entity is deleted
     * @param build {String}
     * @param stateName {module:model/TestRunState}
     * @param status {module:model/TestStatusApiResult}
     * @param projectId {String}
     * @param autoTests {Array.<module:model/AutoTestApiResult>}
     * @param autoTestsCount {Number}
     * @param testSuiteIds {Array.<String>}
     * @param isAutomated {Boolean}
     * @param analytic {module:model/TestRunAnalyticApiResult}
     * @param testResults {Array.<module:model/TestResultApiResult>}
     * @param createdDate {Date}
     * @param createdById {String}
     */
    constructor(id: string, isDeleted: boolean, build: string, stateName: any, status: any, projectId: string, autoTests: Array<NodeModule>, autoTestsCount: number, testSuiteIds: Array<string>, isAutomated: boolean, analytic: any, testResults: Array<NodeModule>, createdDate: Date, createdById: string);
    id: any;
    isDeleted: any;
    startedDate: any;
    completedDate: any;
    build: any;
    description: any;
    stateName: any;
    status: any;
    projectId: any;
    testPlanId: any;
    runByUserId: any;
    stoppedByUserId: any;
    name: any;
    launchSource: any;
    autoTests: any;
    autoTestsCount: any;
    testSuiteIds: any;
    isAutomated: any;
    analytic: any;
    testResults: any;
    testPlan: any;
    createdDate: any;
    modifiedDate: any;
    createdById: any;
    modifiedById: any;
    createdByUserName: any;
}
declare namespace TestRunApiResult {
    let RequiredProperties: string[];
}
