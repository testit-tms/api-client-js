export default UpdateParameterApiModel;
/**
 * The UpdateParameterApiModel model module.
 * @module model/UpdateParameterApiModel
 * @version 7.1.0
 */
declare class UpdateParameterApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, name: any, value: any): void;
    /**
     * Constructs a <code>UpdateParameterApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateParameterApiModel} obj Optional instance to populate.
     * @return {module:model/UpdateParameterApiModel} The populated <code>UpdateParameterApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>UpdateParameterApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateParameterApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>UpdateParameterApiModel</code>.
     * @alias module:model/UpdateParameterApiModel
     * @param id {String} ID's of the parameter
     * @param name {String} Key of the parameter
     * @param value {String} Value of the parameter
     */
    constructor(id: string, name: string, value: string);
    id: any;
    name: any;
    value: any;
    projectIds: any;
}
declare namespace UpdateParameterApiModel {
    let RequiredProperties: string[];
}
