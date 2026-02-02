export default CustomAttributeTemplatePutModel;
/**
 * The CustomAttributeTemplatePutModel model module.
 * @module model/CustomAttributeTemplatePutModel
 * @version 7.1.0-TMS-5.6
 */
declare class CustomAttributeTemplatePutModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, name: any): void;
    /**
     * Constructs a <code>CustomAttributeTemplatePutModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomAttributeTemplatePutModel} obj Optional instance to populate.
     * @return {module:model/CustomAttributeTemplatePutModel} The populated <code>CustomAttributeTemplatePutModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>CustomAttributeTemplatePutModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomAttributeTemplatePutModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>CustomAttributeTemplatePutModel</code>.
     * @alias module:model/CustomAttributeTemplatePutModel
     * @param id {String} Unique ID of the attribute template
     * @param name {String} Custom attributes template name
     */
    constructor(id: string, name: string);
    id: any;
    customAttributeIds: any;
    name: any;
}
declare namespace CustomAttributeTemplatePutModel {
    let RequiredProperties: string[];
}
