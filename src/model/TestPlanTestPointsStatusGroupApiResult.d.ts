export default TestPlanTestPointsStatusGroupApiResult;
/**
 * The TestPlanTestPointsStatusGroupApiResult model module.
 * @module model/TestPlanTestPointsStatusGroupApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class TestPlanTestPointsStatusGroupApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, status: any, value: any): void;
    /**
     * Constructs a <code>TestPlanTestPointsStatusGroupApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanTestPointsStatusGroupApiResult} obj Optional instance to populate.
     * @return {module:model/TestPlanTestPointsStatusGroupApiResult} The populated <code>TestPlanTestPointsStatusGroupApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPlanTestPointsStatusGroupApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPlanTestPointsStatusGroupApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPlanTestPointsStatusGroupApiResult</code>.
     * @alias module:model/TestPlanTestPointsStatusGroupApiResult
     * @param status {String}
     * @param value {Number}
     */
    constructor(status: string, value: number);
    status: any;
    value: any;
}
declare namespace TestPlanTestPointsStatusGroupApiResult {
    let RequiredProperties: string[];
}
