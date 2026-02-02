export default ParameterGroupApiResult;
/**
 * The ParameterGroupApiResult model module.
 * @module model/ParameterGroupApiResult
 * @version 7.1.0
 */
declare class ParameterGroupApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, parameterKeyId: any, name: any, values: any, projectIds: any): void;
    /**
     * Constructs a <code>ParameterGroupApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ParameterGroupApiResult} obj Optional instance to populate.
     * @return {module:model/ParameterGroupApiResult} The populated <code>ParameterGroupApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ParameterGroupApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ParameterGroupApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ParameterGroupApiResult</code>.
     * @alias module:model/ParameterGroupApiResult
     * @param parameterKeyId {String}
     * @param name {String}
     * @param values {Object.<String, String>}
     * @param projectIds {Array.<String>}
     */
    constructor(parameterKeyId: string, name: string, values: any, projectIds: Array<string>);
    parameterKeyId: any;
    name: any;
    values: any;
    projectIds: any;
}
declare namespace ParameterGroupApiResult {
    let RequiredProperties: string[];
}
