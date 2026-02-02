export default ProjectShortApiResultReply;
/**
 * The ProjectShortApiResultReply model module.
 * @module model/ProjectShortApiResultReply
 * @version 7.1.0-TMS-5.6
 */
declare class ProjectShortApiResultReply {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, data: any, totalCount: any): void;
    /**
     * Constructs a <code>ProjectShortApiResultReply</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectShortApiResultReply} obj Optional instance to populate.
     * @return {module:model/ProjectShortApiResultReply} The populated <code>ProjectShortApiResultReply</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ProjectShortApiResultReply</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProjectShortApiResultReply</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ProjectShortApiResultReply</code>.
     * @alias module:model/ProjectShortApiResultReply
     * @param data {Array.<module:model/ProjectShortApiResult>}
     * @param totalCount {Number}
     */
    constructor(data: Array<NodeModule>, totalCount: number);
    data: any;
    totalCount: any;
}
declare namespace ProjectShortApiResultReply {
    let RequiredProperties: string[];
}
