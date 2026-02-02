export default TestResultApiResult;
/**
 * The TestResultApiResult model module.
 * @module model/TestResultApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class TestResultApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, outcome: any, testRunId: any, configurationId: any, status: any, attachments: any, links: any, failureClasses: any, createdDate: any, createdById: any, isDeleted: any): void;
    /**
     * Constructs a <code>TestResultApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestResultApiResult} obj Optional instance to populate.
     * @return {module:model/TestResultApiResult} The populated <code>TestResultApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestResultApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestResultApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestResultApiResult</code>.
     * @alias module:model/TestResultApiResult
     * @param id {String}
     * @param outcome {String}
     * @param testRunId {String}
     * @param configurationId {String}
     * @param status {module:model/TestStatusApiResult}
     * @param attachments {Array.<module:model/AttachmentApiResult>}
     * @param links {Array.<module:model/LinkApiResult>}
     * @param failureClasses {Array.<module:model/TestResultFailureClassApiResult>}
     * @param createdDate {Date}
     * @param createdById {String}
     * @param isDeleted {Boolean}
     */
    constructor(id: string, outcome: string, testRunId: string, configurationId: string, status: any, attachments: Array<NodeModule>, links: Array<NodeModule>, failureClasses: Array<NodeModule>, createdDate: Date, createdById: string, isDeleted: boolean);
    id: any;
    startedOn: any;
    completedOn: any;
    durationInMs: any;
    traces: any;
    failureType: any;
    message: any;
    runByUserId: any;
    stoppedByUserId: any;
    outcome: any;
    autoTestId: any;
    testPointId: any;
    testRunId: any;
    configurationId: any;
    status: any;
    testPoint: any;
    autoTest: any;
    autoTestStepResults: any;
    setupResults: any;
    teardownResults: any;
    workItemVersionId: any;
    workItemVersionNumber: any;
    attachments: any;
    links: any;
    failureClasses: any;
    stepComments: any;
    parameters: any;
    properties: any;
    createdDate: any;
    modifiedDate: any;
    createdById: any;
    modifiedById: any;
    isDeleted: any;
}
declare namespace TestResultApiResult {
    let RequiredProperties: string[];
}
