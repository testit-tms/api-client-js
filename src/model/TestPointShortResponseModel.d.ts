export default TestPointShortResponseModel;
/**
 * The TestPointShortResponseModel model module.
 * @module model/TestPointShortResponseModel
 * @version 7.1.0
 */
declare class TestPointShortResponseModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, createdDate: any, createdById: any, attributes: any, tags: any, links: any, testSuiteId: any, testSuiteName: any, workItemId: any, workItemGlobalId: any, workItemVersionId: any, workItemVersionNumber: any, status: any, statusModel: any, priority: any, sourceType: any, isAutomated: any, name: any, configurationId: any, duration: any, sectionId: any, projectId: any, iterationId: any, workItemState: any, workItemCreatedById: any, workItemCreatedDate: any): void;
    /**
     * Constructs a <code>TestPointShortResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPointShortResponseModel} obj Optional instance to populate.
     * @return {module:model/TestPointShortResponseModel} The populated <code>TestPointShortResponseModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPointShortResponseModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPointShortResponseModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPointShortResponseModel</code>.
     * @alias module:model/TestPointShortResponseModel
     * @param id {String} Unique ID of the test point
     * @param createdDate {Date} Creation date of the test point
     * @param createdById {String} Unique ID of the test point creator
     * @param attributes {Object.<String, Object>} Collection of attributes of work item the test point represents
     * @param tags {Array.<String>} Collection of the test point tags
     * @param links {Array.<String>} Collection of the test point links
     * @param testSuiteId {String} Unique ID of test suite the test point assigned to
     * @param testSuiteName {String} Name of the test suite
     * @param workItemId {String} Unique ID of work item the test point represents
     * @param workItemGlobalId {Number} Global ID of work item the test point represents
     * @param workItemVersionId {String} Unique ID of work item version the test point represents
     * @param workItemVersionNumber {Number} Number of work item version the test point represents
     * @param status {module:model/TestPointStatus} Status of the test point
     * @param statusModel {module:model/TestStatusApiResult} Status of the test point
     * @param priority {module:model/WorkItemPriorityModel} Priority of the test point
     * @param sourceType {module:model/WorkItemSourceTypeModel} Source type of the test point
     * @param isAutomated {Boolean} Indicates if the test point represents an autotest
     * @param name {String} Name of the test point
     * @param configurationId {String} Unique ID of the test point configuration
     * @param duration {Number} Duration of the test point
     * @param sectionId {String} Unique ID of section where work item the test point represents is located
     * @param projectId {String} Unique ID of the test point project
     * @param iterationId {String} Unique ID of work item iteration the test point represents
     * @param workItemState {module:model/WorkItemState} Work item state
     * @param workItemCreatedById {String} Unique ID of the work item creator
     * @param workItemCreatedDate {Date} Creation date of work item
     */
    constructor(id: string, createdDate: Date, createdById: string, attributes: any, tags: Array<string>, links: Array<string>, testSuiteId: string, testSuiteName: string, workItemId: string, workItemGlobalId: number, workItemVersionId: string, workItemVersionNumber: number, status: any, statusModel: any, priority: any, sourceType: any, isAutomated: boolean, name: string, configurationId: string, duration: number, sectionId: string, projectId: string, iterationId: string, workItemState: any, workItemCreatedById: string, workItemCreatedDate: Date);
    id: any;
    createdDate: any;
    createdById: any;
    modifiedDate: any;
    modifiedById: any;
    testerId: any;
    parameters: any;
    attributes: any;
    tags: any;
    links: any;
    testSuiteId: any;
    testSuiteName: any;
    workItemId: any;
    workItemGlobalId: any;
    workItemVersionId: any;
    workItemVersionNumber: any;
    workItemMedianDuration: any;
    status: any;
    statusModel: any;
    priority: any;
    sourceType: any;
    isAutomated: any;
    name: any;
    configurationId: any;
    duration: any;
    sectionId: any;
    sectionName: any;
    projectId: any;
    lastTestResult: any;
    iterationId: any;
    workItemState: any;
    workItemCreatedById: any;
    workItemCreatedDate: any;
    workItemModifiedById: any;
    workItemModifiedDate: any;
}
declare namespace TestPointShortResponseModel {
    let RequiredProperties: string[];
}
