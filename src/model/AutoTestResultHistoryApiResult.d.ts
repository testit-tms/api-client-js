export default AutoTestResultHistoryApiResult;
/**
 * The AutoTestResultHistoryApiResult model module.
 * @module model/AutoTestResultHistoryApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class AutoTestResultHistoryApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, testRunId: any, configurationId: any, configurationName: any, outcome: any, status: any, rerunCount: any, rerunTestResults: any, createdDate: any, createdById: any): void;
    /**
     * Constructs a <code>AutoTestResultHistoryApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoTestResultHistoryApiResult} obj Optional instance to populate.
     * @return {module:model/AutoTestResultHistoryApiResult} The populated <code>AutoTestResultHistoryApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AutoTestResultHistoryApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutoTestResultHistoryApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AutoTestResultHistoryApiResult</code>.
     * @alias module:model/AutoTestResultHistoryApiResult
     * @param id {String}
     * @param testRunId {String}
     * @param configurationId {String}
     * @param configurationName {String}
     * @param outcome {module:model/AutotestResultOutcome}
     * @param status {module:model/TestStatusApiResult}
     * @param rerunCount {Number}
     * @param rerunTestResults {Array.<module:model/RerunTestResultApiResult>}
     * @param createdDate {Date}
     * @param createdById {String}
     */
    constructor(id: string, testRunId: string, configurationId: string, configurationName: string, outcome: any, status: any, rerunCount: number, rerunTestResults: Array<NodeModule>, createdDate: Date, createdById: string);
    id: any;
    testPlanId: any;
    testPlanGlobalId: any;
    testPlanName: any;
    duration: any;
    testRunId: any;
    testRunName: any;
    configurationId: any;
    configurationName: any;
    outcome: any;
    status: any;
    launchSource: any;
    rerunCount: any;
    rerunTestResults: any;
    createdDate: any;
    createdById: any;
    createdByName: any;
    modifiedDate: any;
    modifiedById: any;
}
declare namespace AutoTestResultHistoryApiResult {
    let RequiredProperties: string[];
}
