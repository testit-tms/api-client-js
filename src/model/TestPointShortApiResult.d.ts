export default TestPointShortApiResult;
/**
 * The TestPointShortApiResult model module.
 * @module model/TestPointShortApiResult
 * @version 7.1.0
 */
declare class TestPointShortApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, isDeleted: any, statusModel: any, iterationId: any, testSuiteId: any): void;
    /**
     * Constructs a <code>TestPointShortApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPointShortApiResult} obj Optional instance to populate.
     * @return {module:model/TestPointShortApiResult} The populated <code>TestPointShortApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPointShortApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPointShortApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPointShortApiResult</code>.
     * @alias module:model/TestPointShortApiResult
     * @param id {String} Test point unique internal identifier
     * @param isDeleted {Boolean} Indicates if the entity is deleted
     * @param statusModel {module:model/TestStatusApiResult} Test point status
     * @param iterationId {String} Iteration unique identifier
     * @param testSuiteId {String} Test suite to which test point relates unique identifier
     */
    constructor(id: string, isDeleted: boolean, statusModel: any, iterationId: string, testSuiteId: string);
    id: any;
    isDeleted: any;
    testerId: any;
    workItemId: any;
    configurationId: any;
    status: any;
    statusModel: any;
    lastTestResultId: any;
    iterationId: any;
    workItemMedianDuration: any;
    testSuiteId: any;
}
declare namespace TestPointShortApiResult {
    let RequiredProperties: string[];
}
