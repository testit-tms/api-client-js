export default LastTestResultApiResult;
/**
 * The LastTestResultApiResult model module.
 * @module model/LastTestResultApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class LastTestResultApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, testRunId: any, links: any, attachments: any): void;
    /**
     * Constructs a <code>LastTestResultApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LastTestResultApiResult} obj Optional instance to populate.
     * @return {module:model/LastTestResultApiResult} The populated <code>LastTestResultApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>LastTestResultApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LastTestResultApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>LastTestResultApiResult</code>.
     * @alias module:model/LastTestResultApiResult
     * @param id {String}
     * @param testRunId {String}
     * @param links {Array.<module:model/LinkApiResult>}
     * @param attachments {Array.<module:model/AttachmentApiResult>}
     */
    constructor(id: string, testRunId: string, links: Array<NodeModule>, attachments: Array<NodeModule>);
    id: any;
    testRunId: any;
    autoTestId: any;
    comment: any;
    links: any;
    workItemVersionId: any;
    attachments: any;
}
declare namespace LastTestResultApiResult {
    let RequiredProperties: string[];
}
