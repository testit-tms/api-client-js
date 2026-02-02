export default ParameterShortApiResult;
/**
 * The ParameterShortApiResult model module.
 * @module model/ParameterShortApiResult
 * @version 7.1.0
 */
declare class ParameterShortApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, parameterKeyId: any, value: any, name: any): void;
    /**
     * Constructs a <code>ParameterShortApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ParameterShortApiResult} obj Optional instance to populate.
     * @return {module:model/ParameterShortApiResult} The populated <code>ParameterShortApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ParameterShortApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ParameterShortApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ParameterShortApiResult</code>.
     * @alias module:model/ParameterShortApiResult
     * @param id {String}
     * @param parameterKeyId {String}
     * @param value {String} Value of the parameter
     * @param name {String} Key of the parameter
     */
    constructor(id: string, parameterKeyId: string, value: string, name: string);
    id: any;
    parameterKeyId: any;
    value: any;
    name: any;
}
declare namespace ParameterShortApiResult {
    let RequiredProperties: string[];
}
