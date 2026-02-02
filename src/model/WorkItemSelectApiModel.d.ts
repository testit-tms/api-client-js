export default WorkItemSelectApiModel;
/**
 * The WorkItemSelectApiModel model module.
 * @module model/WorkItemSelectApiModel
 * @version 7.1.0
 */
declare class WorkItemSelectApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, filter: any): void;
    /**
     * Constructs a <code>WorkItemSelectApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkItemSelectApiModel} obj Optional instance to populate.
     * @return {module:model/WorkItemSelectApiModel} The populated <code>WorkItemSelectApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkItemSelectApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkItemSelectApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WorkItemSelectApiModel</code>.
     * @alias module:model/WorkItemSelectApiModel
     * @param filter {module:model/WorkItemFilterApiModel}
     */
    constructor(filter: any);
    filter: any;
    extractionModel: any;
}
declare namespace WorkItemSelectApiModel {
    let RequiredProperties: string[];
}
