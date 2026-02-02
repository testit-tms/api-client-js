export default CustomAttributeApiResult;
/**
 * The CustomAttributeApiResult model module.
 * @module model/CustomAttributeApiResult
 * @version 7.1.0
 */
declare class CustomAttributeApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, options: any, type: any, isDeleted: any, name: any, isEnabled: any, isRequired: any, isGlobal: any): void;
    /**
     * Constructs a <code>CustomAttributeApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomAttributeApiResult} obj Optional instance to populate.
     * @return {module:model/CustomAttributeApiResult} The populated <code>CustomAttributeApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>CustomAttributeApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomAttributeApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>CustomAttributeApiResult</code>.
     * @alias module:model/CustomAttributeApiResult
     * @param id {String} Unique ID of the attribute
     * @param options {Array.<module:model/CustomAttributeOptionApiResult>} Collection of the attribute options   Available for attributes of type `options` and `multiple options` only
     * @param type {module:model/CustomAttributeType} Type of the attribute
     * @param isDeleted {Boolean} Indicates if the attribute is deleted
     * @param name {String} Name of the attribute
     * @param isEnabled {Boolean} Indicates if the attribute is enabled
     * @param isRequired {Boolean} Indicates if the attribute value is mandatory to specify
     * @param isGlobal {Boolean} Indicates if the attribute is available across all projects
     */
    constructor(id: string, options: Array<NodeModule>, type: any, isDeleted: boolean, name: string, isEnabled: boolean, isRequired: boolean, isGlobal: boolean);
    id: any;
    options: any;
    type: any;
    isDeleted: any;
    name: any;
    isEnabled: any;
    isRequired: any;
    isGlobal: any;
}
declare namespace CustomAttributeApiResult {
    let RequiredProperties: string[];
}
