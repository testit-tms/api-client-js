export default LastTestResultModel;
/**
 * The LastTestResultModel model module.
 * @module model/LastTestResultModel
 * @version 7.1.0-TMS-5.6
 */
declare class LastTestResultModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, testRunId: any, workItemVersionId: any): void;
    /**
     * Constructs a <code>LastTestResultModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LastTestResultModel} obj Optional instance to populate.
     * @return {module:model/LastTestResultModel} The populated <code>LastTestResultModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>LastTestResultModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LastTestResultModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>LastTestResultModel</code>.
     * @alias module:model/LastTestResultModel
     * @param id {String}
     * @param testRunId {String}
     * @param workItemVersionId {String}
     */
    constructor(id: string, testRunId: string, workItemVersionId: string);
    id: any;
    testRunId: any;
    autoTestId: any;
    comment: any;
    links: any;
    workItemVersionId: any;
    attachments: any;
}
declare namespace LastTestResultModel {
    let RequiredProperties: string[];
}
