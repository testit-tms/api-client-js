export default WorkItemGroupModel;
/**
 * The WorkItemGroupModel model module.
 * @module model/WorkItemGroupModel
 * @version 7.1.0-TMS-5.6
 */
declare class WorkItemGroupModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, size: any, workItems: any): void;
    /**
     * Constructs a <code>WorkItemGroupModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkItemGroupModel} obj Optional instance to populate.
     * @return {module:model/WorkItemGroupModel} The populated <code>WorkItemGroupModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkItemGroupModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkItemGroupModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WorkItemGroupModel</code>.
     * @alias module:model/WorkItemGroupModel
     * @param size {Number}
     * @param workItems {Array.<module:model/WorkItemShortModel>}
     */
    constructor(size: number, workItems: Array<NodeModule>);
    key: any;
    size: any;
    workItems: any;
}
declare namespace WorkItemGroupModel {
    let RequiredProperties: string[];
}
