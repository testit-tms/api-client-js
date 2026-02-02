export default TestPlanTestPointsAnalyticsApiResult;
/**
 * The TestPlanTestPointsAnalyticsApiResult model module.
 * @module model/TestPlanTestPointsAnalyticsApiResult
 * @version 7.1.0
 */
declare class TestPlanTestPointsAnalyticsApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, countGroupByStatus: any, countGroupByTesterAndStatus: any, sumGroupByTester: any, countGroupByTester: any, countGroupByStatusType: any, countGroupByTesterAndStatusType: any): void;
    /**
     * Constructs a <code>TestPlanTestPointsAnalyticsApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanTestPointsAnalyticsApiResult} obj Optional instance to populate.
     * @return {module:model/TestPlanTestPointsAnalyticsApiResult} The populated <code>TestPlanTestPointsAnalyticsApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPlanTestPointsAnalyticsApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPlanTestPointsAnalyticsApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPlanTestPointsAnalyticsApiResult</code>.
     * @alias module:model/TestPlanTestPointsAnalyticsApiResult
     * @param countGroupByStatus {Array.<module:model/TestPlanTestPointsStatusGroupApiResult>}
     * @param countGroupByTesterAndStatus {Array.<module:model/TestPlanTestPointsTesterAndStatusGroupApiResult>}
     * @param sumGroupByTester {Array.<module:model/TestPlanTestPointsTesterGroupApiResult>}
     * @param countGroupByTester {Array.<module:model/TestPlanTestPointsTesterGroupApiResult>}
     * @param countGroupByStatusType {Array.<module:model/TestPlanTestPointsStatusTypeGroupApiResult>}
     * @param countGroupByTesterAndStatusType {Array.<module:model/TestPlanTestPointsTesterAndStatusTypeGroupApiResult>}
     */
    constructor(countGroupByStatus: Array<NodeModule>, countGroupByTesterAndStatus: Array<NodeModule>, sumGroupByTester: Array<NodeModule>, countGroupByTester: Array<NodeModule>, countGroupByStatusType: Array<NodeModule>, countGroupByTesterAndStatusType: Array<NodeModule>);
    countGroupByStatus: any;
    countGroupByTesterAndStatus: any;
    sumGroupByTester: any;
    countGroupByTester: any;
    countGroupByStatusType: any;
    countGroupByTesterAndStatusType: any;
}
declare namespace TestPlanTestPointsAnalyticsApiResult {
    let RequiredProperties: string[];
}
