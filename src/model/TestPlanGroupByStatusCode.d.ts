export default TestPlanGroupByStatusCode;
/**
 * The TestPlanGroupByStatusCode model module.
 * @module model/TestPlanGroupByStatusCode
 * @version 7.1.0
 */
declare class TestPlanGroupByStatusCode {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, statusCode: any, value: any): void;
    /**
     * Constructs a <code>TestPlanGroupByStatusCode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanGroupByStatusCode} obj Optional instance to populate.
     * @return {module:model/TestPlanGroupByStatusCode} The populated <code>TestPlanGroupByStatusCode</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPlanGroupByStatusCode</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPlanGroupByStatusCode</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPlanGroupByStatusCode</code>.
     * @alias module:model/TestPlanGroupByStatusCode
     * @param statusCode {String}
     * @param value {Number}
     */
    constructor(statusCode: string, value: number);
    statusCode: any;
    value: any;
}
declare namespace TestPlanGroupByStatusCode {
    let RequiredProperties: string[];
}
