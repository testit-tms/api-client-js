export default TestSuiteApiResult;
/**
 * The TestSuiteApiResult model module.
 * @module model/TestSuiteApiResult
 * @version 7.1.0
 */
declare class TestSuiteApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, name: any, type: any, saveStructure: any, autoRefresh: any, refreshDate: any, parentId: any, testPlanId: any): void;
    /**
     * Constructs a <code>TestSuiteApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestSuiteApiResult} obj Optional instance to populate.
     * @return {module:model/TestSuiteApiResult} The populated <code>TestSuiteApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestSuiteApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestSuiteApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestSuiteApiResult</code>.
     * @alias module:model/TestSuiteApiResult
     * @param id {String} Unique ID of the test suite
     * @param name {String} Name of the test suite
     * @param type {module:model/TestSuiteTypeApiResult} Type of the test suite
     * @param saveStructure {Boolean} Flag indicating whether the structure of the test suite should be saved
     * @param autoRefresh {Boolean} Flag indicating whether auto-refresh functionality is enabled for the test suite
     * @param refreshDate {Date} The last time the test suite's results were refreshed
     * @param parentId {String} Unique ID of the parent test suite, if any
     * @param testPlanId {String} Unique ID of the associated test plan
     */
    constructor(id: string, name: string, type: any, saveStructure: boolean, autoRefresh: boolean, refreshDate: Date, parentId: string, testPlanId: string);
    id: any;
    name: any;
    type: any;
    saveStructure: any;
    autoRefresh: any;
    refreshDate: any;
    parentId: any;
    testPlanId: any;
}
declare namespace TestSuiteApiResult {
    let RequiredProperties: string[];
}
