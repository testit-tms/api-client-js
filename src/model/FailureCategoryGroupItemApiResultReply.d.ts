export default FailureCategoryGroupItemApiResultReply;
/**
 * The FailureCategoryGroupItemApiResultReply model module.
 * @module model/FailureCategoryGroupItemApiResultReply
 * @version 7.1.0-TMS-5.6
 */
declare class FailureCategoryGroupItemApiResultReply {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, data: any, totalCount: any): void;
    /**
     * Constructs a <code>FailureCategoryGroupItemApiResultReply</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FailureCategoryGroupItemApiResultReply} obj Optional instance to populate.
     * @return {module:model/FailureCategoryGroupItemApiResultReply} The populated <code>FailureCategoryGroupItemApiResultReply</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>FailureCategoryGroupItemApiResultReply</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FailureCategoryGroupItemApiResultReply</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>FailureCategoryGroupItemApiResultReply</code>.
     * @alias module:model/FailureCategoryGroupItemApiResultReply
     * @param data {Array.<module:model/FailureCategoryGroupItemApiResult>}
     * @param totalCount {Number}
     */
    constructor(data: Array<NodeModule>, totalCount: number);
    data: any;
    totalCount: any;
}
declare namespace FailureCategoryGroupItemApiResultReply {
    let RequiredProperties: string[];
}
