export default TestResultsStatisticsStatusesApiResult;
/**
 * The TestResultsStatisticsStatusesApiResult model module.
 * @module model/TestResultsStatisticsStatusesApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class TestResultsStatisticsStatusesApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, inProgress: any, passed: any, succeeded: any, failed: any, skipped: any, blocked: any, incomplete: any): void;
    /**
     * Constructs a <code>TestResultsStatisticsStatusesApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestResultsStatisticsStatusesApiResult} obj Optional instance to populate.
     * @return {module:model/TestResultsStatisticsStatusesApiResult} The populated <code>TestResultsStatisticsStatusesApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestResultsStatisticsStatusesApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestResultsStatisticsStatusesApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestResultsStatisticsStatusesApiResult</code>.
     * @alias module:model/TestResultsStatisticsStatusesApiResult
     * @param inProgress {Number} Number of test results which is running currently
     * @param passed {Number} Number of test results which successfully passed
     * @param succeeded {Number} Number of successful test results
     * @param failed {Number} Number of test results which failed with an error
     * @param skipped {Number} Number of test results which did not run and were skipped
     * @param blocked {Number} Number of test results which cannot be launched
     * @param incomplete {Number} Number of test results which are incomplete
     */
    constructor(inProgress: number, passed: number, succeeded: number, failed: number, skipped: number, blocked: number, incomplete: number);
    inProgress: any;
    passed: any;
    succeeded: any;
    failed: any;
    skipped: any;
    blocked: any;
    incomplete: any;
}
declare namespace TestResultsStatisticsStatusesApiResult {
    let RequiredProperties: string[];
}
