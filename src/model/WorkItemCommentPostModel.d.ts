export default WorkItemCommentPostModel;
/**
 * The WorkItemCommentPostModel model module.
 * @module model/WorkItemCommentPostModel
 * @version 7.1.0-TMS-5.6
 */
declare class WorkItemCommentPostModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, text: any, workItemId: any): void;
    /**
     * Constructs a <code>WorkItemCommentPostModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkItemCommentPostModel} obj Optional instance to populate.
     * @return {module:model/WorkItemCommentPostModel} The populated <code>WorkItemCommentPostModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkItemCommentPostModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkItemCommentPostModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WorkItemCommentPostModel</code>.
     * @alias module:model/WorkItemCommentPostModel
     * @param text {String}
     * @param workItemId {String}
     */
    constructor(text: string, workItemId: string);
    text: any;
    workItemId: any;
}
declare namespace WorkItemCommentPostModel {
    let RequiredProperties: string[];
}
