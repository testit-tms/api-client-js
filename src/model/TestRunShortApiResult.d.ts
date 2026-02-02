export default TestRunShortApiResult;
/**
 * The TestRunShortApiResult model module.
 * @module model/TestRunShortApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class TestRunShortApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, name: any, state: any, status: any, createdDate: any, createdById: any, isDeleted: any, autoTestsCount: any, statistics: any, testResultsConfigurations: any): void;
    /**
     * Constructs a <code>TestRunShortApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestRunShortApiResult} obj Optional instance to populate.
     * @return {module:model/TestRunShortApiResult} The populated <code>TestRunShortApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestRunShortApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestRunShortApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestRunShortApiResult</code>.
     * @alias module:model/TestRunShortApiResult
     * @param id {String} Unique ID of the test run
     * @param name {String} Name of the test run
     * @param state {module:model/TestRunState} Current state of the test run
     * @param status {module:model/TestStatusApiResult} Current status of the test run
     * @param createdDate {Date} Date when the test run was created
     * @param createdById {String} Unique ID of user who created the test run
     * @param isDeleted {Boolean} Is the test run is deleted
     * @param autoTestsCount {Number} Number of AutoTests run in the test run
     * @param statistics {module:model/TestResultsStatisticsApiResult} Statistics of the test run
     * @param testResultsConfigurations {Array.<module:model/ConfigurationShortApiResult>} Test results configurations
     */
    constructor(id: string, name: string, state: any, status: any, createdDate: Date, createdById: string, isDeleted: boolean, autoTestsCount: number, statistics: any, testResultsConfigurations: Array<NodeModule>);
    id: any;
    name: any;
    state: any;
    status: any;
    createdDate: any;
    startedDate: any;
    completedDate: any;
    createdById: any;
    modifiedById: any;
    isDeleted: any;
    autoTestsCount: any;
    statistics: any;
    testResultsConfigurations: any;
}
declare namespace TestRunShortApiResult {
    let RequiredProperties: string[];
}
