export default ConfigurationModel;
/**
 * The ConfigurationModel model module.
 * @module model/ConfigurationModel
 * @version 7.1.0
 */
declare class ConfigurationModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, projectId: any, isDefault: any, createdDate: any, createdById: any, globalId: any, id: any, isDeleted: any): void;
    /**
     * Constructs a <code>ConfigurationModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfigurationModel} obj Optional instance to populate.
     * @return {module:model/ConfigurationModel} The populated <code>ConfigurationModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ConfigurationModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConfigurationModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ConfigurationModel</code>.
     * @alias module:model/ConfigurationModel
     * @param projectId {String} This property is used to link configuration with project
     * @param isDefault {Boolean}
     * @param createdDate {Date}
     * @param createdById {String}
     * @param globalId {Number}
     * @param id {String} Unique ID of the entity
     * @param isDeleted {Boolean} Indicates if the entity is deleted
     */
    constructor(projectId: string, isDefault: boolean, createdDate: Date, createdById: string, globalId: number, id: string, isDeleted: boolean);
    description: any;
    parameters: any;
    projectId: any;
    isDefault: any;
    name: any;
    createdDate: any;
    modifiedDate: any;
    createdById: any;
    modifiedById: any;
    globalId: any;
    id: any;
    isDeleted: any;
}
declare namespace ConfigurationModel {
    let RequiredProperties: string[];
}
