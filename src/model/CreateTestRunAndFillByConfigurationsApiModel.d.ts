export default CreateTestRunAndFillByConfigurationsApiModel;
/**
 * The CreateTestRunAndFillByConfigurationsApiModel model module.
 * @module model/CreateTestRunAndFillByConfigurationsApiModel
 * @version 7.1.0
 */
declare class CreateTestRunAndFillByConfigurationsApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, projectId: any, testPlanId: any, testPointSelectors: any): void;
    /**
     * Constructs a <code>CreateTestRunAndFillByConfigurationsApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTestRunAndFillByConfigurationsApiModel} obj Optional instance to populate.
     * @return {module:model/CreateTestRunAndFillByConfigurationsApiModel} The populated <code>CreateTestRunAndFillByConfigurationsApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>CreateTestRunAndFillByConfigurationsApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateTestRunAndFillByConfigurationsApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>CreateTestRunAndFillByConfigurationsApiModel</code>.
     * @alias module:model/CreateTestRunAndFillByConfigurationsApiModel
     * @param projectId {String} Specifies the GUID of the project, in which a test run will be created.
     * @param testPlanId {String} Specifies the GUID of the test plan, within which the test run will be created.
     * @param testPointSelectors {Array.<module:model/TestPointSelector>} Specifies an array of work items and configuration to create a test run for.
     */
    constructor(projectId: string, testPlanId: string, testPointSelectors: Array<NodeModule>);
    projectId: any;
    testPlanId: any;
    name: any;
    description: any;
    launchSource: any;
    attachments: any;
    links: any;
    testPointSelectors: any;
}
declare namespace CreateTestRunAndFillByConfigurationsApiModel {
    let RequiredProperties: string[];
}
