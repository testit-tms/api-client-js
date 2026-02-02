export default GlobalCustomAttributeUpdateModel;
/**
 * The GlobalCustomAttributeUpdateModel model module.
 * @module model/GlobalCustomAttributeUpdateModel
 * @version 7.1.0-TMS-5.6
 */
declare class GlobalCustomAttributeUpdateModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any): void;
    /**
     * Constructs a <code>GlobalCustomAttributeUpdateModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GlobalCustomAttributeUpdateModel} obj Optional instance to populate.
     * @return {module:model/GlobalCustomAttributeUpdateModel} The populated <code>GlobalCustomAttributeUpdateModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>GlobalCustomAttributeUpdateModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GlobalCustomAttributeUpdateModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>GlobalCustomAttributeUpdateModel</code>.
     * @alias module:model/GlobalCustomAttributeUpdateModel
     * @param name {String} Name of attribute
     */
    constructor(name: string);
    name: any;
    options: any;
    isEnabled: any;
    isRequired: any;
}
declare namespace GlobalCustomAttributeUpdateModel {
    let RequiredProperties: string[];
}
