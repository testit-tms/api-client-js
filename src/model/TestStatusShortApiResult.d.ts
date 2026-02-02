export default TestStatusShortApiResult;
/**
 * The TestStatusShortApiResult model module.
 * @module model/TestStatusShortApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class TestStatusShortApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, name: any, code: any, type: any): void;
    /**
     * Constructs a <code>TestStatusShortApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestStatusShortApiResult} obj Optional instance to populate.
     * @return {module:model/TestStatusShortApiResult} The populated <code>TestStatusShortApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestStatusShortApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestStatusShortApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestStatusShortApiResult</code>.
     * @alias module:model/TestStatusShortApiResult
     * @param id {String}
     * @param name {String}
     * @param code {String}
     * @param type {module:model/TestStatusApiType} Collection of possible status types
     */
    constructor(id: string, name: string, code: string, type: any);
    id: any;
    name: any;
    code: any;
    type: any;
}
declare namespace TestStatusShortApiResult {
    let RequiredProperties: string[];
}
