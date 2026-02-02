export default TestRunGroupByStatusApiResult;
/**
 * The TestRunGroupByStatusApiResult model module.
 * @module model/TestRunGroupByStatusApiResult
 * @version 7.1.0
 */
declare class TestRunGroupByStatusApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, status: any, value: any): void;
    /**
     * Constructs a <code>TestRunGroupByStatusApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestRunGroupByStatusApiResult} obj Optional instance to populate.
     * @return {module:model/TestRunGroupByStatusApiResult} The populated <code>TestRunGroupByStatusApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestRunGroupByStatusApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestRunGroupByStatusApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestRunGroupByStatusApiResult</code>.
     * @alias module:model/TestRunGroupByStatusApiResult
     * @param status {String}
     * @param value {Number}
     */
    constructor(status: string, value: number);
    status: any;
    value: any;
}
declare namespace TestRunGroupByStatusApiResult {
    let RequiredProperties: string[];
}
