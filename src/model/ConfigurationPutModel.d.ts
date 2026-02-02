export default ConfigurationPutModel;
/**
 * The ConfigurationPutModel model module.
 * @module model/ConfigurationPutModel
 * @version 7.1.0
 */
declare class ConfigurationPutModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, parameters: any, projectId: any, isDefault: any, name: any): void;
    /**
     * Constructs a <code>ConfigurationPutModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfigurationPutModel} obj Optional instance to populate.
     * @return {module:model/ConfigurationPutModel} The populated <code>ConfigurationPutModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ConfigurationPutModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConfigurationPutModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ConfigurationPutModel</code>.
     * @alias module:model/ConfigurationPutModel
     * @param id {String}
     * @param parameters {Object.<String, String>}
     * @param projectId {String} This property is used to link configuration with project
     * @param isDefault {Boolean}
     * @param name {String}
     */
    constructor(id: string, parameters: any, projectId: string, isDefault: boolean, name: string);
    id: any;
    description: any;
    parameters: any;
    projectId: any;
    isDefault: any;
    name: any;
}
declare namespace ConfigurationPutModel {
    let RequiredProperties: string[];
}
