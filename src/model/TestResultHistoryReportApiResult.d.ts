export default TestResultHistoryReportApiResult;
/**
 * The TestResultHistoryReportApiResult model module.
 * @module model/TestResultHistoryReportApiResult
 * @version 7.1.0
 */
declare class TestResultHistoryReportApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, createdDate: any, userId: any, isAutomated: any, status: any, createdById: any, failureClassIds: any): void;
    /**
     * Constructs a <code>TestResultHistoryReportApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestResultHistoryReportApiResult} obj Optional instance to populate.
     * @return {module:model/TestResultHistoryReportApiResult} The populated <code>TestResultHistoryReportApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestResultHistoryReportApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestResultHistoryReportApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestResultHistoryReportApiResult</code>.
     * @alias module:model/TestResultHistoryReportApiResult
     * @param id {String} Internal test result identifier
     * @param createdDate {Date} Test result creation date
     * @param userId {String} Internal identifier of user who stopped test run related to the test result or user who created the test result              If test run was stopped, this property equals identifier of user who stopped it. Otherwise, the property equals identifier of user who created the test result
     * @param isAutomated {Boolean} Boolean flag defines if test point related to the test result is automated or not
     * @param status {module:model/TestStatusApiResult} Status from test result with max modified date or from first created test result
     * @param createdById {String} Unique identifier of user who created first test result in the test run
     * @param failureClassIds {Array.<String>} Unique identifier of failure classes related to the first test result in the test run
     */
    constructor(id: string, createdDate: Date, userId: string, isAutomated: boolean, status: any, createdById: string, failureClassIds: Array<string>);
    id: any;
    createdDate: any;
    modifiedDate: any;
    userId: any;
    testRunId: any;
    testRunName: any;
    createdByUserName: any;
    testPlanId: any;
    testPlanGlobalId: any;
    testPlanName: any;
    configurationName: any;
    isAutomated: any;
    outcome: any;
    status: any;
    comment: any;
    links: any;
    startedOn: any;
    completedOn: any;
    duration: any;
    createdById: any;
    modifiedById: any;
    attachments: any;
    workItemVersionId: any;
    workItemVersionNumber: any;
    launchSource: any;
    failureClassIds: any;
    parameters: any;
}
declare namespace TestResultHistoryReportApiResult {
    let RequiredProperties: string[];
}
