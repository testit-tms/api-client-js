export default SearchCustomAttributeTemplateGetModel;
/**
 * The SearchCustomAttributeTemplateGetModel model module.
 * @module model/SearchCustomAttributeTemplateGetModel
 * @version 7.1.0-TMS-5.6
 */
declare class SearchCustomAttributeTemplateGetModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, isDeleted: any, name: any, projectShortestModels: any, customAttributeModels: any): void;
    /**
     * Constructs a <code>SearchCustomAttributeTemplateGetModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchCustomAttributeTemplateGetModel} obj Optional instance to populate.
     * @return {module:model/SearchCustomAttributeTemplateGetModel} The populated <code>SearchCustomAttributeTemplateGetModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>SearchCustomAttributeTemplateGetModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SearchCustomAttributeTemplateGetModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>SearchCustomAttributeTemplateGetModel</code>.
     * @alias module:model/SearchCustomAttributeTemplateGetModel
     * @param id {String}
     * @param isDeleted {Boolean}
     * @param name {String}
     * @param projectShortestModels {Array.<module:model/ProjectShortestModel>}
     * @param customAttributeModels {Array.<module:model/CustomAttributeModel>}
     */
    constructor(id: string, isDeleted: boolean, name: string, projectShortestModels: Array<NodeModule>, customAttributeModels: Array<NodeModule>);
    id: any;
    isDeleted: any;
    name: any;
    projectShortestModels: any;
    customAttributeModels: any;
}
declare namespace SearchCustomAttributeTemplateGetModel {
    let RequiredProperties: string[];
}
