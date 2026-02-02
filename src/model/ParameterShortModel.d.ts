export default ParameterShortModel;
/**
 * The ParameterShortModel model module.
 * @module model/ParameterShortModel
 * @version 7.1.0
 */
declare class ParameterShortModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, parameterKeyId: any, value: any, name: any, projectIds: any): void;
    /**
     * Constructs a <code>ParameterShortModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ParameterShortModel} obj Optional instance to populate.
     * @return {module:model/ParameterShortModel} The populated <code>ParameterShortModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ParameterShortModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ParameterShortModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ParameterShortModel</code>.
     * @alias module:model/ParameterShortModel
     * @param id {String}
     * @param parameterKeyId {String}
     * @param value {String} Value of the parameter
     * @param name {String} Key of the parameter
     * @param projectIds {Array.<String>}
     */
    constructor(id: string, parameterKeyId: string, value: string, name: string, projectIds: Array<string>);
    id: any;
    parameterKeyId: any;
    value: any;
    name: any;
    projectIds: any;
}
declare namespace ParameterShortModel {
    let RequiredProperties: string[];
}
