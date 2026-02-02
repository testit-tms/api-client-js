export default WorkflowExistsByNameApiResult;
/**
 * The WorkflowExistsByNameApiResult model module.
 * @module model/WorkflowExistsByNameApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class WorkflowExistsByNameApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, exists: any): void;
    /**
     * Constructs a <code>WorkflowExistsByNameApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowExistsByNameApiResult} obj Optional instance to populate.
     * @return {module:model/WorkflowExistsByNameApiResult} The populated <code>WorkflowExistsByNameApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkflowExistsByNameApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkflowExistsByNameApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WorkflowExistsByNameApiResult</code>.
     * @alias module:model/WorkflowExistsByNameApiResult
     * @param exists {Boolean}
     */
    constructor(exists: boolean);
    exists: any;
}
declare namespace WorkflowExistsByNameApiResult {
    let RequiredProperties: string[];
}
