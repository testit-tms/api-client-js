export default TestPointShortModel;
/**
 * The TestPointShortModel model module.
 * @module model/TestPointShortModel
 * @version 7.1.0
 */
declare class TestPointShortModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, testSuiteId: any, id: any, iterationId: any): void;
    /**
     * Constructs a <code>TestPointShortModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPointShortModel} obj Optional instance to populate.
     * @return {module:model/TestPointShortModel} The populated <code>TestPointShortModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPointShortModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPointShortModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPointShortModel</code>.
     * @alias module:model/TestPointShortModel
     * @param testSuiteId {String}
     * @param id {String} Test point unique internal identifier
     * @param iterationId {String} Iteration unique identifier
     */
    constructor(testSuiteId: string, id: string, iterationId: string);
    testSuiteId: any;
    id: any;
    testerId: any;
    workItemId: any;
    configurationId: any;
    status: any;
    lastTestResultId: any;
    iterationId: any;
    workItemMedianDuration: any;
}
declare namespace TestPointShortModel {
    let RequiredProperties: string[];
}
