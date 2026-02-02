export default TestResultResponse;
/**
 * The TestResultResponse model module.
 * @module model/TestResultResponse
 * @version 7.1.0
 */
declare class TestResultResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, createdDate: any, createdById: any, failureClassIds: any, configurationId: any, testPointId: any, testRunId: any, workItemVersionId: any): void;
    /**
     * Constructs a <code>TestResultResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestResultResponse} obj Optional instance to populate.
     * @return {module:model/TestResultResponse} The populated <code>TestResultResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestResultResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestResultResponse</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestResultResponse</code>.
     * @alias module:model/TestResultResponse
     * @param id {String}
     * @param createdDate {Date}
     * @param createdById {String}
     * @param failureClassIds {Array.<String>}
     * @param configurationId {String}
     * @param testPointId {String}
     * @param testRunId {String}
     * @param workItemVersionId {String}
     */
    constructor(id: string, createdDate: Date, createdById: string, failureClassIds: Array<string>, configurationId: string, testPointId: string, testRunId: string, workItemVersionId: string);
    id: any;
    createdDate: any;
    modifiedDate: any;
    createdById: any;
    modifiedById: any;
    stepComments: any;
    failureClassIds: any;
    outcome: any;
    status: any;
    comment: any;
    links: any;
    stepResults: any;
    attachments: any;
    autoTestId: any;
    configurationId: any;
    startedOn: any;
    completedOn: any;
    durationInMs: any;
    traces: any;
    failureType: any;
    message: any;
    runByUserId: any;
    stoppedByUserId: any;
    testPointId: any;
    testRunId: any;
    testPoint: any;
    autoTest: any;
    autoTestStepResults: any;
    setupResults: any;
    teardownResults: any;
    workItemVersionId: any;
    workItemVersionNumber: any;
    parameters: any;
    properties: any;
}
declare namespace TestResultResponse {
    let RequiredProperties: string[];
}
