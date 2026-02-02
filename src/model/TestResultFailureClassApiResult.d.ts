export default TestResultFailureClassApiResult;
/**
 * The TestResultFailureClassApiResult model module.
 * @module model/TestResultFailureClassApiResult
 * @version 7.1.0
 */
declare class TestResultFailureClassApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, failureCategory: any): void;
    /**
     * Constructs a <code>TestResultFailureClassApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestResultFailureClassApiResult} obj Optional instance to populate.
     * @return {module:model/TestResultFailureClassApiResult} The populated <code>TestResultFailureClassApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestResultFailureClassApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestResultFailureClassApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestResultFailureClassApiResult</code>.
     * @alias module:model/TestResultFailureClassApiResult
     * @param failureCategory {module:model/FailureCategory}
     */
    constructor(failureCategory: any);
    failureCategory: any;
}
declare namespace TestResultFailureClassApiResult {
    let RequiredProperties: string[];
}
