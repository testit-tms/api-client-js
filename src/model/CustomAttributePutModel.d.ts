export default CustomAttributePutModel;
/**
 * The CustomAttributePutModel model module.
 * @module model/CustomAttributePutModel
 * @version 7.1.0-TMS-5.6
 */
declare class CustomAttributePutModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, type: any, isDeleted: any, name: any, isEnabled: any, isRequired: any, isGlobal: any): void;
    /**
     * Constructs a <code>CustomAttributePutModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomAttributePutModel} obj Optional instance to populate.
     * @return {module:model/CustomAttributePutModel} The populated <code>CustomAttributePutModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>CustomAttributePutModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomAttributePutModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>CustomAttributePutModel</code>.
     * @alias module:model/CustomAttributePutModel
     * @param id {String} Unique ID of the attribute
     * @param type {module:model/CustomAttributeTypesEnum} Type of the attribute
     * @param isDeleted {Boolean} Indicates if the entity is deleted
     * @param name {String} Name of the attribute
     * @param isEnabled {Boolean} Indicates if the attribute is enabled
     * @param isRequired {Boolean} Indicates if the attribute value is mandatory to specify
     * @param isGlobal {Boolean} Indicates if the attribute is available across all projects
     */
    constructor(id: string, type: any, isDeleted: boolean, name: string, isEnabled: boolean, isRequired: boolean, isGlobal: boolean);
    id: any;
    options: any;
    type: any;
    isDeleted: any;
    name: any;
    isEnabled: any;
    isRequired: any;
    isGlobal: any;
}
declare namespace CustomAttributePutModel {
    let RequiredProperties: string[];
}
