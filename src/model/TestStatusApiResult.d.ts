export default TestStatusApiResult;
/**
 * The TestStatusApiResult model module.
 * @module model/TestStatusApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class TestStatusApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, name: any, type: any, isSystem: any, code: any): void;
    /**
     * Constructs a <code>TestStatusApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestStatusApiResult} obj Optional instance to populate.
     * @return {module:model/TestStatusApiResult} The populated <code>TestStatusApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestStatusApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestStatusApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestStatusApiResult</code>.
     * @alias module:model/TestStatusApiResult
     * @param id {String}
     * @param name {String}
     * @param type {module:model/TestStatusApiType} Collection of possible status types
     * @param isSystem {Boolean}
     * @param code {String}
     */
    constructor(id: string, name: string, type: any, isSystem: boolean, code: string);
    id: any;
    name: any;
    type: any;
    isSystem: any;
    code: any;
    description: any;
}
declare namespace TestStatusApiResult {
    let RequiredProperties: string[];
}
