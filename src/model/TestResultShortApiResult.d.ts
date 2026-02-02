export default TestResultShortApiResult;
/**
 * The TestResultShortApiResult model module.
 * @module model/TestResultShortApiResult
 * @version 7.1.0
 */
declare class TestResultShortApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, outcome: any, status: any, createdDate: any, attachments: any): void;
    /**
     * Constructs a <code>TestResultShortApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestResultShortApiResult} obj Optional instance to populate.
     * @return {module:model/TestResultShortApiResult} The populated <code>TestResultShortApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestResultShortApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestResultShortApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestResultShortApiResult</code>.
     * @alias module:model/TestResultShortApiResult
     * @param id {String}
     * @param outcome {String}
     * @param status {module:model/TestStatusApiResult}
     * @param createdDate {Date}
     * @param attachments {Array.<module:model/AttachmentApiResult>}
     */
    constructor(id: string, outcome: string, status: any, createdDate: Date, attachments: Array<NodeModule>);
    id: any;
    outcome: any;
    status: any;
    traces: any;
    failureType: any;
    message: any;
    testPoint: any;
    createdDate: any;
    autoTest: any;
    attachments: any;
}
declare namespace TestResultShortApiResult {
    let RequiredProperties: string[];
}
