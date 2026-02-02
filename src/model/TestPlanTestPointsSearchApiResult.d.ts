export default TestPlanTestPointsSearchApiResult;
/**
 * The TestPlanTestPointsSearchApiResult model module.
 * @module model/TestPlanTestPointsSearchApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class TestPlanTestPointsSearchApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, created: any, status: any, statusModel: any, inProgress: any, configuration: any, testSuite: any, workItem: any, parameters: any): void;
    /**
     * Constructs a <code>TestPlanTestPointsSearchApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanTestPointsSearchApiResult} obj Optional instance to populate.
     * @return {module:model/TestPlanTestPointsSearchApiResult} The populated <code>TestPlanTestPointsSearchApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPlanTestPointsSearchApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPlanTestPointsSearchApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPlanTestPointsSearchApiResult</code>.
     * @alias module:model/TestPlanTestPointsSearchApiResult
     * @param id {String}
     * @param created {module:model/AuditApiResult}
     * @param status {String}
     * @param statusModel {module:model/TestStatusShortApiResult}
     * @param inProgress {Boolean}
     * @param configuration {module:model/ConfigurationShortApiResult}
     * @param testSuite {module:model/TestPlanTestPointsTestSuiteSearchApiResult}
     * @param workItem {module:model/TestPlanTestPointsWorkItemSearchApiResult}
     * @param parameters {Array.<module:model/ParameterShortApiResult>}
     */
    constructor(id: string, created: any, status: string, statusModel: any, inProgress: boolean, configuration: any, testSuite: any, workItem: any, parameters: Array<NodeModule>);
    id: any;
    created: any;
    modified: any;
    status: any;
    statusModel: any;
    inProgress: any;
    configuration: any;
    tester: any;
    testSuite: any;
    workItem: any;
    parameters: any;
    lastTestResult: any;
}
declare namespace TestPlanTestPointsSearchApiResult {
    let RequiredProperties: string[];
}
