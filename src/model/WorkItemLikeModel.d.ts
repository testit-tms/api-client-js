export default WorkItemLikeModel;
/**
 * The WorkItemLikeModel model module.
 * @module model/WorkItemLikeModel
 * @version 7.1.0
 */
declare class WorkItemLikeModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, workItemId: any, createdDate: any, createdById: any, id: any, isDeleted: any): void;
    /**
     * Constructs a <code>WorkItemLikeModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkItemLikeModel} obj Optional instance to populate.
     * @return {module:model/WorkItemLikeModel} The populated <code>WorkItemLikeModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkItemLikeModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkItemLikeModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WorkItemLikeModel</code>.
     * @alias module:model/WorkItemLikeModel
     * @param workItemId {String}
     * @param createdDate {Date}
     * @param createdById {String}
     * @param id {String} Unique ID of the entity
     * @param isDeleted {Boolean} Indicates if the entity is deleted
     */
    constructor(workItemId: string, createdDate: Date, createdById: string, id: string, isDeleted: boolean);
    workItemId: any;
    createdDate: any;
    modifiedDate: any;
    createdById: any;
    modifiedById: any;
    id: any;
    isDeleted: any;
}
declare namespace WorkItemLikeModel {
    let RequiredProperties: string[];
}
