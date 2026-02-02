export default WorkflowStatusApiModel;
/**
 * The WorkflowStatusApiModel model module.
 * @module model/WorkflowStatusApiModel
 * @version 7.1.0
 */
declare class WorkflowStatusApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, statusId: any, priority: any): void;
    /**
     * Constructs a <code>WorkflowStatusApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowStatusApiModel} obj Optional instance to populate.
     * @return {module:model/WorkflowStatusApiModel} The populated <code>WorkflowStatusApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkflowStatusApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkflowStatusApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WorkflowStatusApiModel</code>.
     * @alias module:model/WorkflowStatusApiModel
     * @param statusId {String}
     * @param priority {Number}
     */
    constructor(statusId: string, priority: number);
    statusId: any;
    priority: any;
}
declare namespace WorkflowStatusApiModel {
    let RequiredProperties: string[];
}
