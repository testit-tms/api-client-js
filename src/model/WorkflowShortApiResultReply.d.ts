export default WorkflowShortApiResultReply;
/**
 * The WorkflowShortApiResultReply model module.
 * @module model/WorkflowShortApiResultReply
 * @version 7.1.0-TMS-5.6
 */
declare class WorkflowShortApiResultReply {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, data: any, totalCount: any): void;
    /**
     * Constructs a <code>WorkflowShortApiResultReply</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowShortApiResultReply} obj Optional instance to populate.
     * @return {module:model/WorkflowShortApiResultReply} The populated <code>WorkflowShortApiResultReply</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkflowShortApiResultReply</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkflowShortApiResultReply</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WorkflowShortApiResultReply</code>.
     * @alias module:model/WorkflowShortApiResultReply
     * @param data {Array.<module:model/WorkflowShortApiResult>}
     * @param totalCount {Number}
     */
    constructor(data: Array<NodeModule>, totalCount: number);
    data: any;
    totalCount: any;
}
declare namespace WorkflowShortApiResultReply {
    let RequiredProperties: string[];
}
