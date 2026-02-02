export default WorkItemShortModel;
/**
 * The WorkItemShortModel model module.
 * @module model/WorkItemShortModel
 * @version 7.1.0
 */
declare class WorkItemShortModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, versionId: any, versionNumber: any, name: any, entityTypeName: any, projectId: any, sectionId: any, sectionName: any, isAutomated: any, globalId: any, duration: any, createdById: any, state: any, priority: any, sourceType: any, isDeleted: any, iterations: any, links: any): void;
    /**
     * Constructs a <code>WorkItemShortModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkItemShortModel} obj Optional instance to populate.
     * @return {module:model/WorkItemShortModel} The populated <code>WorkItemShortModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkItemShortModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkItemShortModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WorkItemShortModel</code>.
     * @alias module:model/WorkItemShortModel
     * @param id {String} Work Item internal unique identifier
     * @param versionId {String} Work Item version identifier
     * @param versionNumber {Number} Work Item version number
     * @param name {String} Work Item name
     * @param entityTypeName {String} Work Item type. Possible values: CheckLists, SharedSteps, TestCases
     * @param projectId {String} Project unique identifier
     * @param sectionId {String} Identifier of Section where Work Item is located
     * @param sectionName {String} Section name of Work Item
     * @param isAutomated {Boolean} Boolean flag determining whether Work Item is automated
     * @param globalId {Number} Work Item global identifier
     * @param duration {Number} Work Item duration
     * @param createdById {String} Unique identifier of user who created Work Item
     * @param state {module:model/WorkItemStates} The current state of Work Item
     * @param priority {module:model/WorkItemPriorityModel} Work Item priority level
     * @param sourceType {module:model/WorkItemSourceTypeModel} Work Item source type
     * @param isDeleted {Boolean} Flag determining whether Work Item is deleted
     * @param iterations {Array.<module:model/IterationModel>} Set of iterations related to Work Item
     * @param links {Array.<module:model/LinkShortModel>} Set of links related to Work Item
     */
    constructor(id: string, versionId: string, versionNumber: number, name: string, entityTypeName: string, projectId: string, sectionId: string, sectionName: string, isAutomated: boolean, globalId: number, duration: number, createdById: string, state: any, priority: any, sourceType: any, isDeleted: boolean, iterations: Array<NodeModule>, links: Array<NodeModule>);
    id: any;
    versionId: any;
    versionNumber: any;
    name: any;
    entityTypeName: any;
    projectId: any;
    sectionId: any;
    sectionName: any;
    isAutomated: any;
    globalId: any;
    duration: any;
    medianDuration: any;
    attributes: any;
    createdById: any;
    modifiedById: any;
    createdDate: any;
    modifiedDate: any;
    state: any;
    priority: any;
    sourceType: any;
    isDeleted: any;
    tagNames: any;
    iterations: any;
    links: any;
}
declare namespace WorkItemShortModel {
    let RequiredProperties: string[];
}
