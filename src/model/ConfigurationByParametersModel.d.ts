export default ConfigurationByParametersModel;
/**
 * The ConfigurationByParametersModel model module.
 * @module model/ConfigurationByParametersModel
 * @version 7.1.0-TMS-5.6
 */
declare class ConfigurationByParametersModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, projectId: any, parameterIds: any): void;
    /**
     * Constructs a <code>ConfigurationByParametersModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfigurationByParametersModel} obj Optional instance to populate.
     * @return {module:model/ConfigurationByParametersModel} The populated <code>ConfigurationByParametersModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ConfigurationByParametersModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConfigurationByParametersModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ConfigurationByParametersModel</code>.
     * @alias module:model/ConfigurationByParametersModel
     * @param projectId {String} This property is used to link configuration with project
     * @param parameterIds {Array.<String>}
     */
    constructor(projectId: string, parameterIds: Array<string>);
    projectId: any;
    parameterIds: any;
}
declare namespace ConfigurationByParametersModel {
    let RequiredProperties: string[];
}
