export default TestResultsStatisticsFailureCategoriesApiResult;
/**
 * The TestResultsStatisticsFailureCategoriesApiResult model module.
 * @module model/TestResultsStatisticsFailureCategoriesApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class TestResultsStatisticsFailureCategoriesApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, infrastructureDefect: any, productDefect: any, testDefect: any): void;
    /**
     * Constructs a <code>TestResultsStatisticsFailureCategoriesApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestResultsStatisticsFailureCategoriesApiResult} obj Optional instance to populate.
     * @return {module:model/TestResultsStatisticsFailureCategoriesApiResult} The populated <code>TestResultsStatisticsFailureCategoriesApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestResultsStatisticsFailureCategoriesApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestResultsStatisticsFailureCategoriesApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestResultsStatisticsFailureCategoriesApiResult</code>.
     * @alias module:model/TestResultsStatisticsFailureCategoriesApiResult
     * @param infrastructureDefect {Number} Number of test results which outcomes were caused by some infrastructure defect
     * @param productDefect {Number} Number of test results which outcomes were caused by some tested product defect
     * @param testDefect {Number} Number of test results which outcomes were caused by test itself
     */
    constructor(infrastructureDefect: number, productDefect: number, testDefect: number);
    infrastructureDefect: any;
    productDefect: any;
    testDefect: any;
}
declare namespace TestResultsStatisticsFailureCategoriesApiResult {
    let RequiredProperties: string[];
}
