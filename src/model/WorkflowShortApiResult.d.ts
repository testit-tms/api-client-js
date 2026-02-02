export default WorkflowShortApiResult;
/**
 * The WorkflowShortApiResult model module.
 * @module model/WorkflowShortApiResult
 * @version 7.1.0
 */
declare class WorkflowShortApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, name: any, isSystem: any, isDefault: any, createdDate: any, createdById: any, modifiedDate: any, modifiedById: any, projects: any): void;
    /**
     * Constructs a <code>WorkflowShortApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowShortApiResult} obj Optional instance to populate.
     * @return {module:model/WorkflowShortApiResult} The populated <code>WorkflowShortApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkflowShortApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkflowShortApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WorkflowShortApiResult</code>.
     * @alias module:model/WorkflowShortApiResult
     * @param id {String}
     * @param name {String}
     * @param isSystem {Boolean}
     * @param isDefault {Boolean}
     * @param createdDate {Date}
     * @param createdById {String}
     * @param modifiedDate {Date}
     * @param modifiedById {String}
     * @param projects {module:model/WorkflowProjectApiResultApiCollectionPreview}
     */
    constructor(id: string, name: string, isSystem: boolean, isDefault: boolean, createdDate: Date, createdById: string, modifiedDate: Date, modifiedById: string, projects: any);
    id: any;
    name: any;
    isSystem: any;
    isDefault: any;
    createdDate: any;
    createdById: any;
    modifiedDate: any;
    modifiedById: any;
    projects: any;
}
declare namespace WorkflowShortApiResult {
    let RequiredProperties: string[];
}
