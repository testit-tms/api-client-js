export default TestResultsStatisticsApiResult;
/**
 * The TestResultsStatisticsApiResult model module.
 * @module model/TestResultsStatisticsApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class TestResultsStatisticsApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, statuses: any, failureCategories: any): void;
    /**
     * Constructs a <code>TestResultsStatisticsApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestResultsStatisticsApiResult} obj Optional instance to populate.
     * @return {module:model/TestResultsStatisticsApiResult} The populated <code>TestResultsStatisticsApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestResultsStatisticsApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestResultsStatisticsApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestResultsStatisticsApiResult</code>.
     * @alias module:model/TestResultsStatisticsApiResult
     * @param statuses {module:model/TestResultsStatisticsStatusesApiResult} Test results counts aggregated by outcome
     * @param failureCategories {module:model/TestResultsStatisticsFailureCategoriesApiResult} Test results counts aggregated by result failure categories
     */
    constructor(statuses: any, failureCategories: any);
    statuses: any;
    failureCategories: any;
}
declare namespace TestResultsStatisticsApiResult {
    let RequiredProperties: string[];
}
