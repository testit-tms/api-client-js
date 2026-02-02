export default StepCommentApiModel;
/**
 * The StepCommentApiModel model module.
 * @module model/StepCommentApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class StepCommentApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, stepId: any, attachments: any, testResultId: any, createdById: any, createdDate: any): void;
    /**
     * Constructs a <code>StepCommentApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StepCommentApiModel} obj Optional instance to populate.
     * @return {module:model/StepCommentApiModel} The populated <code>StepCommentApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>StepCommentApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StepCommentApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>StepCommentApiModel</code>.
     * @alias module:model/StepCommentApiModel
     * @param id {String}
     * @param stepId {String}
     * @param attachments {Array.<module:model/AttachmentApiResult>}
     * @param testResultId {String}
     * @param createdById {String}
     * @param createdDate {Date}
     */
    constructor(id: string, stepId: string, attachments: Array<NodeModule>, testResultId: string, createdById: string, createdDate: Date);
    id: any;
    text: any;
    stepId: any;
    parentStepId: any;
    attachments: any;
    testResultId: any;
    createdById: any;
    modifiedById: any;
    createdDate: any;
    modifiedDate: any;
}
declare namespace StepCommentApiModel {
    let RequiredProperties: string[];
}
