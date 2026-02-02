export default TestRunAnalyticApiResult;
/**
 * The TestRunAnalyticApiResult model module.
 * @module model/TestRunAnalyticApiResult
 * @version 7.1.0
 */
declare class TestRunAnalyticApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, countGroupByStatus: any, countGroupByStatusType: any, countGroupByFailureClass: any): void;
    /**
     * Constructs a <code>TestRunAnalyticApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestRunAnalyticApiResult} obj Optional instance to populate.
     * @return {module:model/TestRunAnalyticApiResult} The populated <code>TestRunAnalyticApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestRunAnalyticApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestRunAnalyticApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestRunAnalyticApiResult</code>.
     * @alias module:model/TestRunAnalyticApiResult
     * @param countGroupByStatus {Array.<module:model/TestRunGroupByStatusApiResult>}
     * @param countGroupByStatusType {Array.<module:model/TestRunGroupByStatusTypeApiResult>}
     * @param countGroupByFailureClass {Array.<module:model/TestRunGroupByFailureClassApiResult>}
     */
    constructor(countGroupByStatus: Array<NodeModule>, countGroupByStatusType: Array<NodeModule>, countGroupByFailureClass: Array<NodeModule>);
    countGroupByStatus: any;
    countGroupByStatusType: any;
    countGroupByFailureClass: any;
}
declare namespace TestRunAnalyticApiResult {
    let RequiredProperties: string[];
}
