export default TestPlanGroupByTesterAndStatusCode;
/**
 * The TestPlanGroupByTesterAndStatusCode model module.
 * @module model/TestPlanGroupByTesterAndStatusCode
 * @version 7.1.0
 */
declare class TestPlanGroupByTesterAndStatusCode {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, statusCode: any, value: any): void;
    /**
     * Constructs a <code>TestPlanGroupByTesterAndStatusCode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanGroupByTesterAndStatusCode} obj Optional instance to populate.
     * @return {module:model/TestPlanGroupByTesterAndStatusCode} The populated <code>TestPlanGroupByTesterAndStatusCode</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPlanGroupByTesterAndStatusCode</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPlanGroupByTesterAndStatusCode</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPlanGroupByTesterAndStatusCode</code>.
     * @alias module:model/TestPlanGroupByTesterAndStatusCode
     * @param statusCode {String}
     * @param value {Number}
     */
    constructor(statusCode: string, value: number);
    userId: any;
    statusCode: any;
    value: any;
}
declare namespace TestPlanGroupByTesterAndStatusCode {
    let RequiredProperties: string[];
}
