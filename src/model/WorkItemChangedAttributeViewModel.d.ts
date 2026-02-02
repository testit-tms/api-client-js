export default WorkItemChangedAttributeViewModel;
/**
 * The WorkItemChangedAttributeViewModel model module.
 * @module model/WorkItemChangedAttributeViewModel
 * @version 7.1.0
 */
declare class WorkItemChangedAttributeViewModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, type: any, oldAttributeName: any, newAttributeName: any, oldValue: any, newValue: any): void;
    /**
     * Constructs a <code>WorkItemChangedAttributeViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkItemChangedAttributeViewModel} obj Optional instance to populate.
     * @return {module:model/WorkItemChangedAttributeViewModel} The populated <code>WorkItemChangedAttributeViewModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkItemChangedAttributeViewModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkItemChangedAttributeViewModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WorkItemChangedAttributeViewModel</code>.
     * @alias module:model/WorkItemChangedAttributeViewModel
     * @param type {String}
     * @param oldAttributeName {String}
     * @param newAttributeName {String}
     * @param oldValue {Object}
     * @param newValue {Object}
     */
    constructor(type: string, oldAttributeName: string, newAttributeName: string, oldValue: any, newValue: any);
    type: any;
    oldAttributeName: any;
    newAttributeName: any;
    oldValue: any;
    newValue: any;
}
declare namespace WorkItemChangedAttributeViewModel {
    let RequiredProperties: string[];
}
