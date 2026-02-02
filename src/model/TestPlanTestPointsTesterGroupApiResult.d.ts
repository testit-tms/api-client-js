export default TestPlanTestPointsTesterGroupApiResult;
/**
 * The TestPlanTestPointsTesterGroupApiResult model module.
 * @module model/TestPlanTestPointsTesterGroupApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class TestPlanTestPointsTesterGroupApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, userId: any, value: any): void;
    /**
     * Constructs a <code>TestPlanTestPointsTesterGroupApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanTestPointsTesterGroupApiResult} obj Optional instance to populate.
     * @return {module:model/TestPlanTestPointsTesterGroupApiResult} The populated <code>TestPlanTestPointsTesterGroupApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPlanTestPointsTesterGroupApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPlanTestPointsTesterGroupApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPlanTestPointsTesterGroupApiResult</code>.
     * @alias module:model/TestPlanTestPointsTesterGroupApiResult
     * @param userId {String}
     * @param value {Number}
     */
    constructor(userId: string, value: number);
    userId: any;
    value: any;
}
declare namespace TestPlanTestPointsTesterGroupApiResult {
    let RequiredProperties: string[];
}
