export default CreateTestRunAndFillByAutoTestsApiModel;
/**
 * The CreateTestRunAndFillByAutoTestsApiModel model module.
 * @module model/CreateTestRunAndFillByAutoTestsApiModel
 * @version 7.1.0
 */
declare class CreateTestRunAndFillByAutoTestsApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, projectId: any, configurationIds: any, autoTestExternalIds: any): void;
    /**
     * Constructs a <code>CreateTestRunAndFillByAutoTestsApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTestRunAndFillByAutoTestsApiModel} obj Optional instance to populate.
     * @return {module:model/CreateTestRunAndFillByAutoTestsApiModel} The populated <code>CreateTestRunAndFillByAutoTestsApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>CreateTestRunAndFillByAutoTestsApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateTestRunAndFillByAutoTestsApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>CreateTestRunAndFillByAutoTestsApiModel</code>.
     * @alias module:model/CreateTestRunAndFillByAutoTestsApiModel
     * @param projectId {String} Specifies the GUID of the project, in which a test run will be created.
     * @param configurationIds {Array.<String>} Specifies the configuration GUIDs, from which test points are created. You can specify several GUIDs.
     * @param autoTestExternalIds {Array.<String>} Specifies the external ID of the autotest. You can specify several IDs.
     */
    constructor(projectId: string, configurationIds: Array<string>, autoTestExternalIds: Array<string>);
    projectId: any;
    name: any;
    configurationIds: any;
    autoTestExternalIds: any;
    description: any;
    launchSource: any;
    attachments: any;
    links: any;
}
declare namespace CreateTestRunAndFillByAutoTestsApiModel {
    let RequiredProperties: string[];
}
