export default TestPointByTestSuiteModel;
/**
 * The TestPointByTestSuiteModel model module.
 * @module model/TestPointByTestSuiteModel
 * @version 7.1.0
 */
declare class TestPointByTestSuiteModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, iterationId: any): void;
    /**
     * Constructs a <code>TestPointByTestSuiteModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPointByTestSuiteModel} obj Optional instance to populate.
     * @return {module:model/TestPointByTestSuiteModel} The populated <code>TestPointByTestSuiteModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPointByTestSuiteModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPointByTestSuiteModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPointByTestSuiteModel</code>.
     * @alias module:model/TestPointByTestSuiteModel
     * @param id {String} Test point unique internal identifier
     * @param iterationId {String} Iteration unique identifier
     */
    constructor(id: string, iterationId: string);
    id: any;
    testerId: any;
    workItemId: any;
    configurationId: any;
    status: any;
    lastTestResultId: any;
    iterationId: any;
    workItemMedianDuration: any;
}
declare namespace TestPointByTestSuiteModel {
    let RequiredProperties: string[];
}
