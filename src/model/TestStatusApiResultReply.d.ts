export default TestStatusApiResultReply;
/**
 * The TestStatusApiResultReply model module.
 * @module model/TestStatusApiResultReply
 * @version 7.1.0
 */
declare class TestStatusApiResultReply {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, data: any, totalCount: any): void;
    /**
     * Constructs a <code>TestStatusApiResultReply</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestStatusApiResultReply} obj Optional instance to populate.
     * @return {module:model/TestStatusApiResultReply} The populated <code>TestStatusApiResultReply</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestStatusApiResultReply</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestStatusApiResultReply</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestStatusApiResultReply</code>.
     * @alias module:model/TestStatusApiResultReply
     * @param data {Array.<module:model/TestStatusApiResult>}
     * @param totalCount {Number}
     */
    constructor(data: Array<NodeModule>, totalCount: number);
    data: any;
    totalCount: any;
}
declare namespace TestStatusApiResultReply {
    let RequiredProperties: string[];
}
