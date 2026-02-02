export default CreateParameterApiModel;
/**
 * The CreateParameterApiModel model module.
 * @module model/CreateParameterApiModel
 * @version 7.1.0
 */
declare class CreateParameterApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, value: any): void;
    /**
     * Constructs a <code>CreateParameterApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateParameterApiModel} obj Optional instance to populate.
     * @return {module:model/CreateParameterApiModel} The populated <code>CreateParameterApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>CreateParameterApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateParameterApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>CreateParameterApiModel</code>.
     * @alias module:model/CreateParameterApiModel
     * @param name {String} Key of the parameter
     * @param value {String} Value of the parameter
     */
    constructor(name: string, value: string);
    name: any;
    value: any;
    projectIds: any;
}
declare namespace CreateParameterApiModel {
    let RequiredProperties: string[];
}
