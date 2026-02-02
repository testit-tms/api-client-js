export default WorkItemLinkChangeViewModel;
/**
 * The WorkItemLinkChangeViewModel model module.
 * @module model/WorkItemLinkChangeViewModel
 * @version 7.1.0-TMS-5.6
 */
declare class WorkItemLinkChangeViewModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, description: any, url: any, title: any, hasInfo: any, id: any, type: any): void;
    /**
     * Constructs a <code>WorkItemLinkChangeViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkItemLinkChangeViewModel} obj Optional instance to populate.
     * @return {module:model/WorkItemLinkChangeViewModel} The populated <code>WorkItemLinkChangeViewModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkItemLinkChangeViewModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkItemLinkChangeViewModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WorkItemLinkChangeViewModel</code>.
     * @alias module:model/WorkItemLinkChangeViewModel
     * @param description {String}
     * @param url {String}
     * @param title {String}
     * @param hasInfo {Boolean}
     * @param id {String}
     * @param type {String}
     */
    constructor(description: string, url: string, title: string, hasInfo: boolean, id: string, type: string);
    description: any;
    url: any;
    title: any;
    hasInfo: any;
    id: any;
    type: any;
}
declare namespace WorkItemLinkChangeViewModel {
    let RequiredProperties: string[];
}
