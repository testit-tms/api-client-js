export default WorkItemCommentModel;
/**
 * The WorkItemCommentModel model module.
 * @module model/WorkItemCommentModel
 * @version 7.1.0
 */
declare class WorkItemCommentModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, text: any, user: any, createdById: any, createdDate: any): void;
    /**
     * Constructs a <code>WorkItemCommentModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkItemCommentModel} obj Optional instance to populate.
     * @return {module:model/WorkItemCommentModel} The populated <code>WorkItemCommentModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkItemCommentModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkItemCommentModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WorkItemCommentModel</code>.
     * @alias module:model/WorkItemCommentModel
     * @param id {String}
     * @param text {String}
     * @param user {module:model/UserWithRankModel}
     * @param createdById {String}
     * @param createdDate {Date}
     */
    constructor(id: string, text: string, user: any, createdById: string, createdDate: Date);
    id: any;
    text: any;
    user: any;
    createdById: any;
    modifiedById: any;
    createdDate: any;
    modifiedDate: any;
}
declare namespace WorkItemCommentModel {
    let RequiredProperties: string[];
}
