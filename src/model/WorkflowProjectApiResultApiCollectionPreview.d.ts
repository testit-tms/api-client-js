export default WorkflowProjectApiResultApiCollectionPreview;
/**
 * The WorkflowProjectApiResultApiCollectionPreview model module.
 * @module model/WorkflowProjectApiResultApiCollectionPreview
 * @version 7.1.0-TMS-5.6
 */
declare class WorkflowProjectApiResultApiCollectionPreview {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, data: any, totalCount: any): void;
    /**
     * Constructs a <code>WorkflowProjectApiResultApiCollectionPreview</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowProjectApiResultApiCollectionPreview} obj Optional instance to populate.
     * @return {module:model/WorkflowProjectApiResultApiCollectionPreview} The populated <code>WorkflowProjectApiResultApiCollectionPreview</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkflowProjectApiResultApiCollectionPreview</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkflowProjectApiResultApiCollectionPreview</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WorkflowProjectApiResultApiCollectionPreview</code>.
     * @alias module:model/WorkflowProjectApiResultApiCollectionPreview
     * @param data {Array.<module:model/WorkflowProjectApiResult>} Preview items
     * @param totalCount {Number} Total count
     */
    constructor(data: Array<NodeModule>, totalCount: number);
    data: any;
    totalCount: any;
}
declare namespace WorkflowProjectApiResultApiCollectionPreview {
    let RequiredProperties: string[];
}
