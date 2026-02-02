export default GlobalCustomAttributePostModel;
/**
 * The GlobalCustomAttributePostModel model module.
 * @module model/GlobalCustomAttributePostModel
 * @version 7.1.0
 */
declare class GlobalCustomAttributePostModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, type: any): void;
    /**
     * Constructs a <code>GlobalCustomAttributePostModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GlobalCustomAttributePostModel} obj Optional instance to populate.
     * @return {module:model/GlobalCustomAttributePostModel} The populated <code>GlobalCustomAttributePostModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>GlobalCustomAttributePostModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GlobalCustomAttributePostModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>GlobalCustomAttributePostModel</code>.
     * @alias module:model/GlobalCustomAttributePostModel
     * @param name {String} Name of attribute
     * @param type {module:model/CustomAttributeTypesEnum} Type of attribute
     */
    constructor(name: string, type: any);
    name: any;
    isEnabled: any;
    isRequired: any;
    options: any;
    type: any;
}
declare namespace GlobalCustomAttributePostModel {
    let RequiredProperties: string[];
}
