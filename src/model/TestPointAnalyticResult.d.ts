export default TestPointAnalyticResult;
/**
 * The TestPointAnalyticResult model module.
 * @module model/TestPointAnalyticResult
 * @version 7.1.0
 */
declare class TestPointAnalyticResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, countGroupByStatus: any, sumGroupByTester: any, countGroupByTester: any, countGroupByTestSuite: any, countGroupByTesterAndStatus: any, countGroupByStatusCode: any, countGroupByTesterAndStatusCode: any, countGroupByStatusType: any): void;
    /**
     * Constructs a <code>TestPointAnalyticResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPointAnalyticResult} obj Optional instance to populate.
     * @return {module:model/TestPointAnalyticResult} The populated <code>TestPointAnalyticResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPointAnalyticResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPointAnalyticResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPointAnalyticResult</code>.
     * @alias module:model/TestPointAnalyticResult
     * @param countGroupByStatus {Array.<module:model/TestPlanGroupByStatus>}
     * @param sumGroupByTester {Array.<module:model/TestPlanGroupByTester>}
     * @param countGroupByTester {Array.<module:model/TestPlanGroupByTester>}
     * @param countGroupByTestSuite {Array.<module:model/TestPlanGroupByTestSuite>}
     * @param countGroupByTesterAndStatus {Array.<module:model/TestPlanGroupByTesterAndStatus>}
     * @param countGroupByStatusCode {Array.<module:model/TestPlanGroupByStatusCode>}
     * @param countGroupByTesterAndStatusCode {Array.<module:model/TestPlanGroupByTesterAndStatusCode>}
     * @param countGroupByStatusType {Array.<module:model/TestPlanGroupByStatusType>}
     */
    constructor(countGroupByStatus: Array<NodeModule>, sumGroupByTester: Array<NodeModule>, countGroupByTester: Array<NodeModule>, countGroupByTestSuite: Array<NodeModule>, countGroupByTesterAndStatus: Array<NodeModule>, countGroupByStatusCode: Array<NodeModule>, countGroupByTesterAndStatusCode: Array<NodeModule>, countGroupByStatusType: Array<NodeModule>);
    countGroupByStatus: any;
    sumGroupByTester: any;
    countGroupByTester: any;
    countGroupByTestSuite: any;
    countGroupByTesterAndStatus: any;
    countGroupByStatusCode: any;
    countGroupByTesterAndStatusCode: any;
    countGroupByStatusType: any;
}
declare namespace TestPointAnalyticResult {
    let RequiredProperties: string[];
}
