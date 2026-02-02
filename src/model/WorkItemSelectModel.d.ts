export default WorkItemSelectModel;
/**
 * The WorkItemSelectModel model module.
 * @module model/WorkItemSelectModel
 * @version 7.1.0-TMS-5.6
 */
declare class WorkItemSelectModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, filter: any): void;
    /**
     * Constructs a <code>WorkItemSelectModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkItemSelectModel} obj Optional instance to populate.
     * @return {module:model/WorkItemSelectModel} The populated <code>WorkItemSelectModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkItemSelectModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkItemSelectModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WorkItemSelectModel</code>.
     * Model containing options to filter work items
     * @alias module:model/WorkItemSelectModel
     * @param filter {module:model/WorkItemFilterModel} Collection of filters to apply to search
     */
    constructor(filter: any);
    filter: any;
    extractionModel: any;
}
declare namespace WorkItemSelectModel {
    let RequiredProperties: string[];
}
