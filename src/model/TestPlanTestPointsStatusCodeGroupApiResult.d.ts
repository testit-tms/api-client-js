export default TestPlanTestPointsStatusCodeGroupApiResult;
/**
 * The TestPlanTestPointsStatusCodeGroupApiResult model module.
 * @module model/TestPlanTestPointsStatusCodeGroupApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class TestPlanTestPointsStatusCodeGroupApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, statusCode: any, statusName: any, value: any): void;
    /**
     * Constructs a <code>TestPlanTestPointsStatusCodeGroupApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanTestPointsStatusCodeGroupApiResult} obj Optional instance to populate.
     * @return {module:model/TestPlanTestPointsStatusCodeGroupApiResult} The populated <code>TestPlanTestPointsStatusCodeGroupApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPlanTestPointsStatusCodeGroupApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPlanTestPointsStatusCodeGroupApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPlanTestPointsStatusCodeGroupApiResult</code>.
     * @alias module:model/TestPlanTestPointsStatusCodeGroupApiResult
     * @param statusCode {String}
     * @param statusName {String}
     * @param value {Number}
     */
    constructor(statusCode: string, statusName: string, value: number);
    statusCode: any;
    statusName: any;
    value: any;
}
declare namespace TestPlanTestPointsStatusCodeGroupApiResult {
    let RequiredProperties: string[];
}
