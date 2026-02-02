export default CreateWorkflowApiModel;
/**
 * The CreateWorkflowApiModel model module.
 * @module model/CreateWorkflowApiModel
 * @version 7.1.0
 */
declare class CreateWorkflowApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, statuses: any): void;
    /**
     * Constructs a <code>CreateWorkflowApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateWorkflowApiModel} obj Optional instance to populate.
     * @return {module:model/CreateWorkflowApiModel} The populated <code>CreateWorkflowApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>CreateWorkflowApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateWorkflowApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>CreateWorkflowApiModel</code>.
     * @alias module:model/CreateWorkflowApiModel
     * @param name {String}
     * @param statuses {Array.<module:model/WorkflowStatusApiModel>}
     */
    constructor(name: string, statuses: Array<NodeModule>);
    name: any;
    isDefault: any;
    statuses: any;
    projectIds: any;
}
declare namespace CreateWorkflowApiModel {
    let RequiredProperties: string[];
}
