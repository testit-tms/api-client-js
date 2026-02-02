export default CustomAttributeTemplatePostModel;
/**
 * The CustomAttributeTemplatePostModel model module.
 * @module model/CustomAttributeTemplatePostModel
 * @version 7.1.0
 */
declare class CustomAttributeTemplatePostModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any): void;
    /**
     * Constructs a <code>CustomAttributeTemplatePostModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomAttributeTemplatePostModel} obj Optional instance to populate.
     * @return {module:model/CustomAttributeTemplatePostModel} The populated <code>CustomAttributeTemplatePostModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>CustomAttributeTemplatePostModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomAttributeTemplatePostModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>CustomAttributeTemplatePostModel</code>.
     * @alias module:model/CustomAttributeTemplatePostModel
     * @param name {String} Custom attributes template name
     */
    constructor(name: string);
    customAttributeIds: any;
    name: any;
}
declare namespace CustomAttributeTemplatePostModel {
    let RequiredProperties: string[];
}
