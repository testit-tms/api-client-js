export default TestRunNameApiResult;
/**
 * The TestRunNameApiResult model module.
 * @module model/TestRunNameApiResult
 * @version 7.1.0
 */
declare class TestRunNameApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, name: any): void;
    /**
     * Constructs a <code>TestRunNameApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestRunNameApiResult} obj Optional instance to populate.
     * @return {module:model/TestRunNameApiResult} The populated <code>TestRunNameApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestRunNameApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestRunNameApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestRunNameApiResult</code>.
     * @alias module:model/TestRunNameApiResult
     * @param id {String} Test run id.
     * @param name {String} Test run name.
     */
    constructor(id: string, name: string);
    id: any;
    name: any;
}
declare namespace TestRunNameApiResult {
    let RequiredProperties: string[];
}
