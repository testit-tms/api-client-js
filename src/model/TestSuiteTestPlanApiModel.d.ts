export default TestSuiteTestPlanApiModel;
/**
 * The TestSuiteTestPlanApiModel model module.
 * @module model/TestSuiteTestPlanApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class TestSuiteTestPlanApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, workItemsSelector: any): void;
    /**
     * Constructs a <code>TestSuiteTestPlanApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestSuiteTestPlanApiModel} obj Optional instance to populate.
     * @return {module:model/TestSuiteTestPlanApiModel} The populated <code>TestSuiteTestPlanApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestSuiteTestPlanApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestSuiteTestPlanApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestSuiteTestPlanApiModel</code>.
     * @alias module:model/TestSuiteTestPlanApiModel
     * @param name {String} Test suite nane
     * @param workItemsSelector {module:model/WorkItemSelectModel} Model containing options to filter work items
     */
    constructor(name: string, workItemsSelector: any);
    name: any;
    configurationIds: any;
    type: any;
    saveStructure: any;
    workItemsSelector: any;
}
declare namespace TestSuiteTestPlanApiModel {
    let RequiredProperties: string[];
}
