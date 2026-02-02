export default WorkflowProjectApiResult;
/**
 * The WorkflowProjectApiResult model module.
 * @module model/WorkflowProjectApiResult
 * @version 7.1.0
 */
declare class WorkflowProjectApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any): void;
    /**
     * Constructs a <code>WorkflowProjectApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowProjectApiResult} obj Optional instance to populate.
     * @return {module:model/WorkflowProjectApiResult} The populated <code>WorkflowProjectApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkflowProjectApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkflowProjectApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WorkflowProjectApiResult</code>.
     * @alias module:model/WorkflowProjectApiResult
     * @param id {String}
     */
    constructor(id: string);
    id: any;
}
declare namespace WorkflowProjectApiResult {
    let RequiredProperties: string[];
}
