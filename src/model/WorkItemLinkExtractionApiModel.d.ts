export default WorkItemLinkExtractionApiModel;
/**
 * The WorkItemLinkExtractionApiModel model module.
 * @module model/WorkItemLinkExtractionApiModel
 * @version 7.1.0
 */
declare class WorkItemLinkExtractionApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>WorkItemLinkExtractionApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkItemLinkExtractionApiModel} obj Optional instance to populate.
     * @return {module:model/WorkItemLinkExtractionApiModel} The populated <code>WorkItemLinkExtractionApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkItemLinkExtractionApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkItemLinkExtractionApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    projectIds: any;
    workItemIds: any;
    linkUrls: any;
}
