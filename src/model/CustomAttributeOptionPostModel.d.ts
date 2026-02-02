export default CustomAttributeOptionPostModel;
/**
 * The CustomAttributeOptionPostModel model module.
 * @module model/CustomAttributeOptionPostModel
 * @version 7.1.0
 */
declare class CustomAttributeOptionPostModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, isDefault: any): void;
    /**
     * Constructs a <code>CustomAttributeOptionPostModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomAttributeOptionPostModel} obj Optional instance to populate.
     * @return {module:model/CustomAttributeOptionPostModel} The populated <code>CustomAttributeOptionPostModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>CustomAttributeOptionPostModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomAttributeOptionPostModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>CustomAttributeOptionPostModel</code>.
     * @alias module:model/CustomAttributeOptionPostModel
     * @param isDefault {Boolean} Indicates if the attribute option is used by default
     */
    constructor(isDefault: boolean);
    value: any;
    isDefault: any;
}
declare namespace CustomAttributeOptionPostModel {
    let RequiredProperties: string[];
}
