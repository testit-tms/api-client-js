export default CustomAttributeTemplateModel;
/**
 * The CustomAttributeTemplateModel model module.
 * @module model/CustomAttributeTemplateModel
 * @version 7.1.0-TMS-5.6
 */
declare class CustomAttributeTemplateModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, isDeleted: any, name: any): void;
    /**
     * Constructs a <code>CustomAttributeTemplateModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomAttributeTemplateModel} obj Optional instance to populate.
     * @return {module:model/CustomAttributeTemplateModel} The populated <code>CustomAttributeTemplateModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>CustomAttributeTemplateModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomAttributeTemplateModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>CustomAttributeTemplateModel</code>.
     * @alias module:model/CustomAttributeTemplateModel
     * @param id {String}
     * @param isDeleted {Boolean}
     * @param name {String} Custom attributes template name
     */
    constructor(id: string, isDeleted: boolean, name: string);
    id: any;
    isDeleted: any;
    name: any;
}
declare namespace CustomAttributeTemplateModel {
    let RequiredProperties: string[];
}
