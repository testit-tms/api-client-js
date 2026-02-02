export default WorkItemIdApiModel;
/**
 * The WorkItemIdApiModel model module.
 * @module model/WorkItemIdApiModel
 * @version 7.1.0
 */
declare class WorkItemIdApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any): void;
    /**
     * Constructs a <code>WorkItemIdApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkItemIdApiModel} obj Optional instance to populate.
     * @return {module:model/WorkItemIdApiModel} The populated <code>WorkItemIdApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkItemIdApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkItemIdApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WorkItemIdApiModel</code>.
     * @alias module:model/WorkItemIdApiModel
     * @param id {String} Work Item ID or Global ID
     */
    constructor(id: string);
    id: any;
}
declare namespace WorkItemIdApiModel {
    let RequiredProperties: string[];
}
