export default WorkItemApiResult;
/**
 * The WorkItemApiResult model module.
 * @module model/WorkItemApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class WorkItemApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, globalId: any, versionId: any, versionNumber: any, projectId: any, sectionId: any, name: any, sourceType: any, entityTypeName: any, duration: any, medianDuration: any, state: any, priority: any, isAutomated: any, attributes: any, tags: any, sectionPreconditionSteps: any, sectionPostconditionSteps: any, preconditionSteps: any, steps: any, postconditionSteps: any, iterations: any, autoTests: any, attachments: any, links: any, externalIssues: any, createdDate: any, createdById: any, isDeleted: any): void;
    /**
     * Constructs a <code>WorkItemApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkItemApiResult} obj Optional instance to populate.
     * @return {module:model/WorkItemApiResult} The populated <code>WorkItemApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkItemApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkItemApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WorkItemApiResult</code>.
     * @alias module:model/WorkItemApiResult
     * @param id {String} Unique identifier of the work item
     * @param globalId {Number} Global identifier of the work item
     * @param versionId {String} Version identifier of the work item
     * @param versionNumber {Number} Version number of the work item
     * @param projectId {String} Unique identifier of the project
     * @param sectionId {String} Unique identifier of the section within a project
     * @param name {String} Name of the work item
     * @param sourceType {module:model/WorkItemSourceTypeApiModel} Source type of the work item
     * @param entityTypeName {module:model/WorkItemEntityTypeApiModel} Type of entity associated with this work item
     * @param duration {Number} Duration of the work item in milliseconds
     * @param medianDuration {Number} Median duration of the work item in milliseconds
     * @param state {module:model/WorkItemStateApiModel} State of the work item
     * @param priority {module:model/WorkItemPriorityApiModel} Priority level of the work item
     * @param isAutomated {Boolean}
     * @param attributes {Object.<String, Object>} Set of custom attributes associated with the work item
     * @param tags {Array.<module:model/TagModel>} Set of tags applied to the work item
     * @param sectionPreconditionSteps {Array.<module:model/StepModel>} Set of section precondition steps that need to be executed before starting the work item steps
     * @param sectionPostconditionSteps {Array.<module:model/StepModel>} Set of section postcondition steps that need to be executed after completing the work item steps
     * @param preconditionSteps {Array.<module:model/StepModel>} Set of precondition steps that need to be executed before starting the main steps
     * @param steps {Array.<module:model/StepModel>} Main steps or actions defined for the work item
     * @param postconditionSteps {Array.<module:model/StepModel>} Set of postcondition steps that are executed after completing the main steps
     * @param iterations {Array.<module:model/IterationModel>} Associated iterations linked to the work item
     * @param autoTests {Array.<module:model/AutoTestModel>} Automated tests associated with the work item
     * @param attachments {Array.<module:model/AttachmentModel>} Files attached to the work item
     * @param links {Array.<module:model/LinkModel>} Set of links related to the work item
     * @param externalIssues {Array.<module:model/ExternalIssueApiResult>} Set of external issues related to the work item
     * @param createdDate {Date} Creation date of the work item
     * @param createdById {String} Unique identifier of the work item creator
     * @param isDeleted {Boolean} Indicates whether the work item is marked as deleted
     */
    constructor(id: string, globalId: number, versionId: string, versionNumber: number, projectId: string, sectionId: string, name: string, sourceType: any, entityTypeName: any, duration: number, medianDuration: number, state: any, priority: any, isAutomated: boolean, attributes: any, tags: Array<NodeModule>, sectionPreconditionSteps: Array<NodeModule>, sectionPostconditionSteps: Array<NodeModule>, preconditionSteps: Array<NodeModule>, steps: Array<NodeModule>, postconditionSteps: Array<NodeModule>, iterations: Array<NodeModule>, autoTests: Array<NodeModule>, attachments: Array<NodeModule>, links: Array<NodeModule>, externalIssues: Array<NodeModule>, createdDate: Date, createdById: string, isDeleted: boolean);
    id: any;
    globalId: any;
    versionId: any;
    versionNumber: any;
    projectId: any;
    sectionId: any;
    name: any;
    description: any;
    sourceType: any;
    entityTypeName: any;
    duration: any;
    medianDuration: any;
    state: any;
    priority: any;
    isAutomated: any;
    attributes: any;
    tags: any;
    sectionPreconditionSteps: any;
    sectionPostconditionSteps: any;
    preconditionSteps: any;
    steps: any;
    postconditionSteps: any;
    iterations: any;
    autoTests: any;
    attachments: any;
    links: any;
    externalIssues: any;
    createdDate: any;
    createdById: any;
    modifiedDate: any;
    modifiedById: any;
    isDeleted: any;
}
declare namespace WorkItemApiResult {
    let RequiredProperties: string[];
}
