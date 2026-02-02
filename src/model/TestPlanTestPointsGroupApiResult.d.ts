export default TestPlanTestPointsGroupApiResult;
/**
 * The TestPlanTestPointsGroupApiResult model module.
 * @module model/TestPlanTestPointsGroupApiResult
 * @version 7.1.0
 */
declare class TestPlanTestPointsGroupApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, fieldValue: any, displayFieldValue: any, count: any): void;
    /**
     * Constructs a <code>TestPlanTestPointsGroupApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanTestPointsGroupApiResult} obj Optional instance to populate.
     * @return {module:model/TestPlanTestPointsGroupApiResult} The populated <code>TestPlanTestPointsGroupApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPlanTestPointsGroupApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPlanTestPointsGroupApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPlanTestPointsGroupApiResult</code>.
     * @alias module:model/TestPlanTestPointsGroupApiResult
     * @param fieldValue {Object}
     * @param displayFieldValue {Object}
     * @param count {Number}
     */
    constructor(fieldValue: any, displayFieldValue: any, count: number);
    fieldValue: any;
    displayFieldValue: any;
    count: any;
}
declare namespace TestPlanTestPointsGroupApiResult {
    let RequiredProperties: string[];
}
