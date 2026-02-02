export default CustomAttributePostModel;
/**
 * The CustomAttributePostModel model module.
 * @module model/CustomAttributePostModel
 * @version 7.1.0-TMS-5.6
 */
declare class CustomAttributePostModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any, name: any, isEnabled: any, isRequired: any, isGlobal: any): void;
    /**
     * Constructs a <code>CustomAttributePostModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomAttributePostModel} obj Optional instance to populate.
     * @return {module:model/CustomAttributePostModel} The populated <code>CustomAttributePostModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>CustomAttributePostModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomAttributePostModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>CustomAttributePostModel</code>.
     * @alias module:model/CustomAttributePostModel
     * @param type {module:model/CustomAttributeTypesEnum} Type of attribute
     * @param name {String} Name of the attribute
     * @param isEnabled {Boolean} Indicates if the attribute is enabled
     * @param isRequired {Boolean} Indicates if the attribute value is mandatory to specify
     * @param isGlobal {Boolean} Indicates if the attribute is available across all projects
     */
    constructor(type: any, name: string, isEnabled: boolean, isRequired: boolean, isGlobal: boolean);
    options: any;
    type: any;
    name: any;
    isEnabled: any;
    isRequired: any;
    isGlobal: any;
}
declare namespace CustomAttributePostModel {
    let RequiredProperties: string[];
}
