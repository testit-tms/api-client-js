export default WorkItemCommentPutModel;
/**
 * The WorkItemCommentPutModel model module.
 * @module model/WorkItemCommentPutModel
 * @version 7.1.0-TMS-5.6
 */
declare class WorkItemCommentPutModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, text: any, id: any): void;
    /**
     * Constructs a <code>WorkItemCommentPutModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkItemCommentPutModel} obj Optional instance to populate.
     * @return {module:model/WorkItemCommentPutModel} The populated <code>WorkItemCommentPutModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkItemCommentPutModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkItemCommentPutModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WorkItemCommentPutModel</code>.
     * @alias module:model/WorkItemCommentPutModel
     * @param text {String} Text of the comment
     * @param id {String} Unique ID of the comment
     */
    constructor(text: string, id: string);
    text: any;
    id: any;
}
declare namespace WorkItemCommentPutModel {
    let RequiredProperties: string[];
}
