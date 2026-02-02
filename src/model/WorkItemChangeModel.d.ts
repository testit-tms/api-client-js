export default WorkItemChangeModel;
/**
 * The WorkItemChangeModel model module.
 * @module model/WorkItemChangeModel
 * @version 7.1.0
 */
declare class WorkItemChangeModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, workItemId: any, oldVersionId: any, newVersionId: any, workItemChangedFields: any, createdById: any): void;
    /**
     * Constructs a <code>WorkItemChangeModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkItemChangeModel} obj Optional instance to populate.
     * @return {module:model/WorkItemChangeModel} The populated <code>WorkItemChangeModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkItemChangeModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkItemChangeModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WorkItemChangeModel</code>.
     * @alias module:model/WorkItemChangeModel
     * @param id {String}
     * @param workItemId {String}
     * @param oldVersionId {String}
     * @param newVersionId {String}
     * @param workItemChangedFields {module:model/WorkItemChangedFieldsViewModel}
     * @param createdById {String}
     */
    constructor(id: string, workItemId: string, oldVersionId: string, newVersionId: string, workItemChangedFields: any, createdById: string);
    id: any;
    workItemId: any;
    oldVersionId: any;
    newVersionId: any;
    workItemChangedFields: any;
    createdById: any;
    createdDate: any;
}
declare namespace WorkItemChangeModel {
    let RequiredProperties: string[];
}
