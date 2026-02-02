export default WorkItemLinkUrlApiResult;
/**
 * The WorkItemLinkUrlApiResult model module.
 * @module model/WorkItemLinkUrlApiResult
 * @version 7.1.0
 */
declare class WorkItemLinkUrlApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, url: any): void;
    /**
     * Constructs a <code>WorkItemLinkUrlApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkItemLinkUrlApiResult} obj Optional instance to populate.
     * @return {module:model/WorkItemLinkUrlApiResult} The populated <code>WorkItemLinkUrlApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkItemLinkUrlApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkItemLinkUrlApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WorkItemLinkUrlApiResult</code>.
     * @alias module:model/WorkItemLinkUrlApiResult
     * @param url {String}
     */
    constructor(url: string);
    url: any;
}
declare namespace WorkItemLinkUrlApiResult {
    let RequiredProperties: string[];
}
