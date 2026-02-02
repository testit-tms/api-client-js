export default TestPlanTestPointsTesterAndStatusGroupApiResult;
/**
 * The TestPlanTestPointsTesterAndStatusGroupApiResult model module.
 * @module model/TestPlanTestPointsTesterAndStatusGroupApiResult
 * @version 7.1.0
 */
declare class TestPlanTestPointsTesterAndStatusGroupApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, userId: any, status: any, value: any): void;
    /**
     * Constructs a <code>TestPlanTestPointsTesterAndStatusGroupApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanTestPointsTesterAndStatusGroupApiResult} obj Optional instance to populate.
     * @return {module:model/TestPlanTestPointsTesterAndStatusGroupApiResult} The populated <code>TestPlanTestPointsTesterAndStatusGroupApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPlanTestPointsTesterAndStatusGroupApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPlanTestPointsTesterAndStatusGroupApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPlanTestPointsTesterAndStatusGroupApiResult</code>.
     * @alias module:model/TestPlanTestPointsTesterAndStatusGroupApiResult
     * @param userId {String}
     * @param status {String}
     * @param value {Number}
     */
    constructor(userId: string, status: string, value: number);
    userId: any;
    status: any;
    value: any;
}
declare namespace TestPlanTestPointsTesterAndStatusGroupApiResult {
    let RequiredProperties: string[];
}
