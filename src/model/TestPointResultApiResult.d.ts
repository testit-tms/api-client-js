export default TestPointResultApiResult;
/**
 * The TestPointResultApiResult model module.
 * @module model/TestPointResultApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class TestPointResultApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, testResults: any): void;
    /**
     * Constructs a <code>TestPointResultApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPointResultApiResult} obj Optional instance to populate.
     * @return {module:model/TestPointResultApiResult} The populated <code>TestPointResultApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPointResultApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPointResultApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPointResultApiResult</code>.
     * @alias module:model/TestPointResultApiResult
     * @param testResults {Array.<module:model/TestResultShortApiResult>}
     */
    constructor(testResults: Array<NodeModule>);
    testPointId: any;
    aggregatedOutcome: any;
    aggregatedStatus: any;
    workItemGlobalId: any;
    workItemName: any;
    configurationName: any;
    testResults: any;
}
declare namespace TestPointResultApiResult {
    let RequiredProperties: string[];
}
