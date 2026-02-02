export default CreateTestRunAndFillByWorkItemsApiModel;
/**
 * The CreateTestRunAndFillByWorkItemsApiModel model module.
 * @module model/CreateTestRunAndFillByWorkItemsApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class CreateTestRunAndFillByWorkItemsApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, projectId: any, testPlanId: any, configurationIds: any, workItemIds: any): void;
    /**
     * Constructs a <code>CreateTestRunAndFillByWorkItemsApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTestRunAndFillByWorkItemsApiModel} obj Optional instance to populate.
     * @return {module:model/CreateTestRunAndFillByWorkItemsApiModel} The populated <code>CreateTestRunAndFillByWorkItemsApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>CreateTestRunAndFillByWorkItemsApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateTestRunAndFillByWorkItemsApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>CreateTestRunAndFillByWorkItemsApiModel</code>.
     * @alias module:model/CreateTestRunAndFillByWorkItemsApiModel
     * @param projectId {String} Specifies the GUID of the project, in which a test run will be created.
     * @param testPlanId {String} Specifies the GUID of the test plan, within which the test run will be created.
     * @param configurationIds {Array.<String>} Specifies the configuration GUIDs, from which test points are created. You can specify several GUIDs.
     * @param workItemIds {Array.<String>} Specifies the work item GUIDs, from which test points are created. You can specify several GUIDs.
     */
    constructor(projectId: string, testPlanId: string, configurationIds: Array<string>, workItemIds: Array<string>);
    projectId: any;
    testPlanId: any;
    name: any;
    description: any;
    launchSource: any;
    attachments: any;
    links: any;
    configurationIds: any;
    workItemIds: any;
}
declare namespace CreateTestRunAndFillByWorkItemsApiModel {
    let RequiredProperties: string[];
}
