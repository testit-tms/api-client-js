export default ProjectFailureCategoryGroupItemApiResultReply;
/**
 * The ProjectFailureCategoryGroupItemApiResultReply model module.
 * @module model/ProjectFailureCategoryGroupItemApiResultReply
 * @version 7.1.0
 */
declare class ProjectFailureCategoryGroupItemApiResultReply {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, data: any, totalCount: any): void;
    /**
     * Constructs a <code>ProjectFailureCategoryGroupItemApiResultReply</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectFailureCategoryGroupItemApiResultReply} obj Optional instance to populate.
     * @return {module:model/ProjectFailureCategoryGroupItemApiResultReply} The populated <code>ProjectFailureCategoryGroupItemApiResultReply</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ProjectFailureCategoryGroupItemApiResultReply</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProjectFailureCategoryGroupItemApiResultReply</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ProjectFailureCategoryGroupItemApiResultReply</code>.
     * @alias module:model/ProjectFailureCategoryGroupItemApiResultReply
     * @param data {Array.<module:model/ProjectFailureCategoryGroupItemApiResult>}
     * @param totalCount {Number}
     */
    constructor(data: Array<NodeModule>, totalCount: number);
    data: any;
    totalCount: any;
}
declare namespace ProjectFailureCategoryGroupItemApiResultReply {
    let RequiredProperties: string[];
}
