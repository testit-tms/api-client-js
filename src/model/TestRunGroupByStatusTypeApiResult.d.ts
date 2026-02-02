export default TestRunGroupByStatusTypeApiResult;
/**
 * The TestRunGroupByStatusTypeApiResult model module.
 * @module model/TestRunGroupByStatusTypeApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class TestRunGroupByStatusTypeApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any, value: any): void;
    /**
     * Constructs a <code>TestRunGroupByStatusTypeApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestRunGroupByStatusTypeApiResult} obj Optional instance to populate.
     * @return {module:model/TestRunGroupByStatusTypeApiResult} The populated <code>TestRunGroupByStatusTypeApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestRunGroupByStatusTypeApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestRunGroupByStatusTypeApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestRunGroupByStatusTypeApiResult</code>.
     * @alias module:model/TestRunGroupByStatusTypeApiResult
     * @param type {String}
     * @param value {Number}
     */
    constructor(type: string, value: number);
    type: any;
    value: any;
}
declare namespace TestRunGroupByStatusTypeApiResult {
    let RequiredProperties: string[];
}
