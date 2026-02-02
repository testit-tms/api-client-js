export default WorkItemLinkUrlApiModel;
/**
 * The WorkItemLinkUrlApiModel model module.
 * @module model/WorkItemLinkUrlApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class WorkItemLinkUrlApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, filter: any, extractionModel: any): void;
    /**
     * Constructs a <code>WorkItemLinkUrlApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkItemLinkUrlApiModel} obj Optional instance to populate.
     * @return {module:model/WorkItemLinkUrlApiModel} The populated <code>WorkItemLinkUrlApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkItemLinkUrlApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkItemLinkUrlApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WorkItemLinkUrlApiModel</code>.
     * @alias module:model/WorkItemLinkUrlApiModel
     * @param filter {module:model/WorkItemLinkUrlFilterApiModel}
     * @param extractionModel {module:model/WorkItemLinkExtractionApiModel}
     */
    constructor(filter: any, extractionModel: any);
    filter: any;
    extractionModel: any;
}
declare namespace WorkItemLinkUrlApiModel {
    let RequiredProperties: string[];
}
