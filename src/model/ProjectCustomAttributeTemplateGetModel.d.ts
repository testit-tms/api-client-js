export default ProjectCustomAttributeTemplateGetModel;
/**
 * The ProjectCustomAttributeTemplateGetModel model module.
 * @module model/ProjectCustomAttributeTemplateGetModel
 * @version 7.1.0
 */
declare class ProjectCustomAttributeTemplateGetModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, isDeleted: any, name: any, customAttributeModels: any): void;
    /**
     * Constructs a <code>ProjectCustomAttributeTemplateGetModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectCustomAttributeTemplateGetModel} obj Optional instance to populate.
     * @return {module:model/ProjectCustomAttributeTemplateGetModel} The populated <code>ProjectCustomAttributeTemplateGetModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ProjectCustomAttributeTemplateGetModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProjectCustomAttributeTemplateGetModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ProjectCustomAttributeTemplateGetModel</code>.
     * @alias module:model/ProjectCustomAttributeTemplateGetModel
     * @param id {String} Unique ID of the custom attributes template
     * @param isDeleted {Boolean} Indicates if the custom attribute template is deleted
     * @param name {String} Name of the custom attribute template
     * @param customAttributeModels {Array.<module:model/CustomAttributeModel>} Attributes of the template
     */
    constructor(id: string, isDeleted: boolean, name: string, customAttributeModels: Array<NodeModule>);
    id: any;
    isDeleted: any;
    name: any;
    customAttributeModels: any;
}
declare namespace ProjectCustomAttributeTemplateGetModel {
    let RequiredProperties: string[];
}
