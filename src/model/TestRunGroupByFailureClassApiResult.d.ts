export default TestRunGroupByFailureClassApiResult;
/**
 * The TestRunGroupByFailureClassApiResult model module.
 * @module model/TestRunGroupByFailureClassApiResult
 * @version 7.1.0
 */
declare class TestRunGroupByFailureClassApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, failureCategory: any, value: any): void;
    /**
     * Constructs a <code>TestRunGroupByFailureClassApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestRunGroupByFailureClassApiResult} obj Optional instance to populate.
     * @return {module:model/TestRunGroupByFailureClassApiResult} The populated <code>TestRunGroupByFailureClassApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestRunGroupByFailureClassApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestRunGroupByFailureClassApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestRunGroupByFailureClassApiResult</code>.
     * @alias module:model/TestRunGroupByFailureClassApiResult
     * @param failureCategory {String}
     * @param value {Number}
     */
    constructor(failureCategory: string, value: number);
    failureCategory: any;
    value: any;
}
declare namespace TestRunGroupByFailureClassApiResult {
    let RequiredProperties: string[];
}
