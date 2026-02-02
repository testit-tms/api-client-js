export default ProjectAttributesFilterModel;
/**
 * The ProjectAttributesFilterModel model module.
 * @module model/ProjectAttributesFilterModel
 * @version 7.1.0-TMS-5.6
 */
declare class ProjectAttributesFilterModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, types: any): void;
    /**
     * Constructs a <code>ProjectAttributesFilterModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectAttributesFilterModel} obj Optional instance to populate.
     * @return {module:model/ProjectAttributesFilterModel} The populated <code>ProjectAttributesFilterModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ProjectAttributesFilterModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProjectAttributesFilterModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ProjectAttributesFilterModel</code>.
     * @alias module:model/ProjectAttributesFilterModel
     * @param name {String} Specifies an attribute name to search for
     * @param types {Array.<module:model/CustomAttributeTypesEnum>} Specifies an attribute types to search for
     */
    constructor(name: string, types: Array<NodeModule>);
    name: any;
    isRequired: any;
    isGlobal: any;
    types: any;
    isEnabled: any;
}
declare namespace ProjectAttributesFilterModel {
    let RequiredProperties: string[];
}
