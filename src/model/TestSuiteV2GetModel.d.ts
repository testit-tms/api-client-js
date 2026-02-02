export default TestSuiteV2GetModel;
/**
 * The TestSuiteV2GetModel model module.
 * @module model/TestSuiteV2GetModel
 * @version 7.1.0-TMS-5.6
 */
declare class TestSuiteV2GetModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, testPlanId: any, name: any): void;
    /**
     * Constructs a <code>TestSuiteV2GetModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestSuiteV2GetModel} obj Optional instance to populate.
     * @return {module:model/TestSuiteV2GetModel} The populated <code>TestSuiteV2GetModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestSuiteV2GetModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestSuiteV2GetModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestSuiteV2GetModel</code>.
     * @alias module:model/TestSuiteV2GetModel
     * @param id {String} Unique ID of the test suite
     * @param testPlanId {String} Unique ID of test plan to which the test suite belongs
     * @param name {String} Name of the test suite
     */
    constructor(id: string, testPlanId: string, name: string);
    id: any;
    refreshDate: any;
    parentId: any;
    testPlanId: any;
    name: any;
    type: any;
    saveStructure: any;
    autoRefresh: any;
}
declare namespace TestSuiteV2GetModel {
    let RequiredProperties: string[];
}
