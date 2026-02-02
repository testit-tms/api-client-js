export default UpdateWorkflowApiModel;
/**
 * The UpdateWorkflowApiModel model module.
 * @module model/UpdateWorkflowApiModel
 * @version 7.1.0
 */
declare class UpdateWorkflowApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, isDefault: any, statuses: any, projectIds: any): void;
    /**
     * Constructs a <code>UpdateWorkflowApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateWorkflowApiModel} obj Optional instance to populate.
     * @return {module:model/UpdateWorkflowApiModel} The populated <code>UpdateWorkflowApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>UpdateWorkflowApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateWorkflowApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>UpdateWorkflowApiModel</code>.
     * @alias module:model/UpdateWorkflowApiModel
     * @param name {String}
     * @param isDefault {Boolean}
     * @param statuses {Array.<module:model/WorkflowStatusApiModel>}
     * @param projectIds {Array.<String>}
     */
    constructor(name: string, isDefault: boolean, statuses: Array<NodeModule>, projectIds: Array<string>);
    name: any;
    isDefault: any;
    statuses: any;
    projectIds: any;
}
declare namespace UpdateWorkflowApiModel {
    let RequiredProperties: string[];
}
