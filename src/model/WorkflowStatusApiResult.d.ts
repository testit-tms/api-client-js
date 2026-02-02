export default WorkflowStatusApiResult;
/**
 * The WorkflowStatusApiResult model module.
 * @module model/WorkflowStatusApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class WorkflowStatusApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, name: any, code: any, type: any, description: any, isSystem: any, priority: any): void;
    /**
     * Constructs a <code>WorkflowStatusApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowStatusApiResult} obj Optional instance to populate.
     * @return {module:model/WorkflowStatusApiResult} The populated <code>WorkflowStatusApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkflowStatusApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkflowStatusApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WorkflowStatusApiResult</code>.
     * @alias module:model/WorkflowStatusApiResult
     * @param id {String}
     * @param name {String}
     * @param code {String}
     * @param type {module:model/TestStatusApiType} Collection of possible status types
     * @param description {String}
     * @param isSystem {Boolean}
     * @param priority {Number}
     */
    constructor(id: string, name: string, code: string, type: any, description: string, isSystem: boolean, priority: number);
    id: any;
    name: any;
    code: any;
    type: any;
    description: any;
    isSystem: any;
    priority: any;
}
declare namespace WorkflowStatusApiResult {
    let RequiredProperties: string[];
}
