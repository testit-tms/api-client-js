export default TestPlanGroupByTestSuite;
/**
 * The TestPlanGroupByTestSuite model module.
 * @module model/TestPlanGroupByTestSuite
 * @version 7.1.0-TMS-5.6
 */
declare class TestPlanGroupByTestSuite {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, testSuiteId: any, testSuiteName: any, value: any): void;
    /**
     * Constructs a <code>TestPlanGroupByTestSuite</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanGroupByTestSuite} obj Optional instance to populate.
     * @return {module:model/TestPlanGroupByTestSuite} The populated <code>TestPlanGroupByTestSuite</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPlanGroupByTestSuite</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPlanGroupByTestSuite</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPlanGroupByTestSuite</code>.
     * @alias module:model/TestPlanGroupByTestSuite
     * @param testSuiteId {String}
     * @param testSuiteName {String}
     * @param value {Number}
     */
    constructor(testSuiteId: string, testSuiteName: string, value: number);
    testSuiteId: any;
    testSuiteName: any;
    value: any;
}
declare namespace TestPlanGroupByTestSuite {
    let RequiredProperties: string[];
}
