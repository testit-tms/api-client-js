export default TestResultStepCommentUpdateRequest;
/**
 * The TestResultStepCommentUpdateRequest model module.
 * @module model/TestResultStepCommentUpdateRequest
 * @version 7.1.0-TMS-5.6
 */
declare class TestResultStepCommentUpdateRequest {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, text: any, stepId: any, attachments: any): void;
    /**
     * Constructs a <code>TestResultStepCommentUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestResultStepCommentUpdateRequest} obj Optional instance to populate.
     * @return {module:model/TestResultStepCommentUpdateRequest} The populated <code>TestResultStepCommentUpdateRequest</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestResultStepCommentUpdateRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestResultStepCommentUpdateRequest</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestResultStepCommentUpdateRequest</code>.
     * @alias module:model/TestResultStepCommentUpdateRequest
     * @param id {String} Entity unique identifier
     * @param text {String}
     * @param stepId {String}
     * @param attachments {Array.<module:model/AttachmentUpdateRequest>}
     */
    constructor(id: string, text: string, stepId: string, attachments: Array<NodeModule>);
    id: any;
    text: any;
    stepId: any;
    parentStepId: any;
    attachments: any;
}
declare namespace TestResultStepCommentUpdateRequest {
    let RequiredProperties: string[];
}
