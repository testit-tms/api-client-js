export default WorkItemModel;
/**
 * The WorkItemModel model module.
 * @module model/WorkItemModel
 * @version 7.1.0-TMS-5.6
 */
declare class WorkItemModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, versionId: any, medianDuration: any, isDeleted: any, projectId: any, entityTypeName: any, isAutomated: any, versionNumber: any, createdDate: any, createdById: any, globalId: any, externalIssues: any, id: any, sectionId: any, state: any, priority: any, sourceType: any, steps: any, preconditionSteps: any, postconditionSteps: any, duration: any, attributes: any, tags: any, links: any, name: any): void;
    /**
     * Constructs a <code>WorkItemModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkItemModel} obj Optional instance to populate.
     * @return {module:model/WorkItemModel} The populated <code>WorkItemModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkItemModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkItemModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WorkItemModel</code>.
     * @alias module:model/WorkItemModel
     * @param versionId {String} used for versioning changes in workitem
     * @param medianDuration {Number} used for getting a median duration of all autotests related to this workitem
     * @param isDeleted {Boolean}
     * @param projectId {String}
     * @param entityTypeName {module:model/WorkItemEntityTypes}
     * @param isAutomated {Boolean}
     * @param versionNumber {Number} used for define chronology of workitem state in each version
     * @param createdDate {Date}
     * @param createdById {String}
     * @param globalId {Number}
     * @param externalIssues {Array.<module:model/ExternalIssueModel>}
     * @param id {String}
     * @param sectionId {String}
     * @param state {module:model/WorkItemStates}
     * @param priority {module:model/WorkItemPriorityModel}
     * @param sourceType {module:model/WorkItemSourceTypeModel}
     * @param steps {Array.<module:model/StepModel>}
     * @param preconditionSteps {Array.<module:model/StepModel>}
     * @param postconditionSteps {Array.<module:model/StepModel>}
     * @param duration {Number}
     * @param attributes {Object.<String, Object>}
     * @param tags {Array.<module:model/TagModel>}
     * @param links {Array.<module:model/LinkModel>}
     * @param name {String}
     */
    constructor(versionId: string, medianDuration: number, isDeleted: boolean, projectId: string, entityTypeName: any, isAutomated: boolean, versionNumber: number, createdDate: Date, createdById: string, globalId: number, externalIssues: Array<NodeModule>, id: string, sectionId: string, state: any, priority: any, sourceType: any, steps: Array<NodeModule>, preconditionSteps: Array<NodeModule>, postconditionSteps: Array<NodeModule>, duration: number, attributes: any, tags: Array<NodeModule>, links: Array<NodeModule>, name: string);
    versionId: any;
    medianDuration: any;
    isDeleted: any;
    projectId: any;
    entityTypeName: any;
    isAutomated: any;
    autoTests: any;
    attachments: any;
    sectionPreconditionSteps: any;
    sectionPostconditionSteps: any;
    versionNumber: any;
    iterations: any;
    createdDate: any;
    modifiedDate: any;
    createdById: any;
    modifiedById: any;
    globalId: any;
    externalIssues: any;
    id: any;
    sectionId: any;
    description: any;
    state: any;
    priority: any;
    sourceType: any;
    steps: any;
    preconditionSteps: any;
    postconditionSteps: any;
    duration: any;
    attributes: any;
    tags: any;
    links: any;
    name: any;
}
declare namespace WorkItemModel {
    let RequiredProperties: string[];
}
