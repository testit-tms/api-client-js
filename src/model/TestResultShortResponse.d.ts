export default TestResultShortResponse;
/**
 * The TestResultShortResponse model module.
 * @module model/TestResultShortResponse
 * @version 7.1.0
 */
declare class TestResultShortResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, name: any, autotestGlobalId: any, testRunId: any, configurationId: any, configurationName: any, status: any, resultReasons: any, date: any, createdDate: any, links: any, attachments: any, rerunCompletedCount: any): void;
    /**
     * Constructs a <code>TestResultShortResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestResultShortResponse} obj Optional instance to populate.
     * @return {module:model/TestResultShortResponse} The populated <code>TestResultShortResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestResultShortResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestResultShortResponse</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestResultShortResponse</code>.
     * @alias module:model/TestResultShortResponse
     * @param id {String} Unique ID of the test result
     * @param name {String} Name of autotest represented by the test result
     * @param autotestGlobalId {Number} Global ID of autotest represented by the test result
     * @param testRunId {String} Unique ID of test run where the test result is located
     * @param configurationId {String} Unique ID of configuration which the test result uses
     * @param configurationName {String} Name of configuration which the test result uses
     * @param status {module:model/TestStatusApiResult}
     * @param resultReasons {Array.<module:model/AutoTestResultReasonShort>} Collection of result reasons which the test result have
     * @param date {Date} Date when the test result was completed or started or created
     * @param createdDate {Date} Date when the test result has been created
     * @param links {Array.<module:model/LinkShort>} Collection of links attached to the test result
     * @param attachments {Array.<module:model/AttachmentApiResult>} Collection of files attached to the test result
     * @param rerunCompletedCount {Number} Run count
     */
    constructor(id: string, name: string, autotestGlobalId: number, testRunId: string, configurationId: string, configurationName: string, status: any, resultReasons: Array<NodeModule>, date: Date, createdDate: Date, links: Array<NodeModule>, attachments: Array<NodeModule>, rerunCompletedCount: number);
    id: any;
    name: any;
    autotestGlobalId: any;
    autotestExternalId: any;
    testRunId: any;
    configurationId: any;
    configurationName: any;
    outcome: any;
    status: any;
    resultReasons: any;
    comment: any;
    date: any;
    createdDate: any;
    modifiedDate: any;
    startedOn: any;
    completedOn: any;
    duration: any;
    links: any;
    attachments: any;
    rerunCompletedCount: any;
}
declare namespace TestResultShortResponse {
    let RequiredProperties: string[];
}
