export default WorkItemGroupGetModel;
/**
 * The WorkItemGroupGetModel model module.
 * @module model/WorkItemGroupGetModel
 * @version 7.1.0
 */
declare class WorkItemGroupGetModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, groupType: any): void;
    /**
     * Constructs a <code>WorkItemGroupGetModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkItemGroupGetModel} obj Optional instance to populate.
     * @return {module:model/WorkItemGroupGetModel} The populated <code>WorkItemGroupGetModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkItemGroupGetModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkItemGroupGetModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WorkItemGroupGetModel</code>.
     * @alias module:model/WorkItemGroupGetModel
     * @param groupType {module:model/WorkItemGroupType}
     */
    constructor(groupType: any);
    selectModel: any;
    groupType: any;
    customAttributeId: any;
}
declare namespace WorkItemGroupGetModel {
    let RequiredProperties: string[];
}
