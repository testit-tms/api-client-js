export default CreateWorkItemApiModel;
/**
 * The CreateWorkItemApiModel model module.
 * @module model/CreateWorkItemApiModel
 * @version 7.1.0
 */
declare class CreateWorkItemApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, projectId: any, name: any, entityTypeName: any, duration: any, state: any, priority: any, attributes: any, tags: any, preconditionSteps: any, steps: any, postconditionSteps: any, links: any): void;
    /**
     * Constructs a <code>CreateWorkItemApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateWorkItemApiModel} obj Optional instance to populate.
     * @return {module:model/CreateWorkItemApiModel} The populated <code>CreateWorkItemApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>CreateWorkItemApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateWorkItemApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>CreateWorkItemApiModel</code>.
     * @alias module:model/CreateWorkItemApiModel
     * @param projectId {String} Unique identifier of the project
     * @param name {String} Name of the work item
     * @param entityTypeName {module:model/WorkItemEntityTypeApiModel} Type of entity associated with this work item
     * @param duration {Number} Duration of the work item in milliseconds
     * @param state {module:model/WorkItemStateApiModel} State of the work item
     * @param priority {module:model/WorkItemPriorityApiModel} Priority level of the work item
     * @param attributes {Object.<String, Object>} Set of custom attributes associated with the work item
     * @param tags {Array.<module:model/TagModel>} Set of tags applied to the work item
     * @param preconditionSteps {Array.<module:model/CreateStepApiModel>} Set of precondition steps that need to be executed before starting the main steps
     * @param steps {Array.<module:model/CreateStepApiModel>} Main steps or actions defined for the work item
     * @param postconditionSteps {Array.<module:model/CreateStepApiModel>} Set of postcondition steps that are executed after completing the main steps
     * @param links {Array.<module:model/CreateLinkApiModel>} Set of links related to the work item
     */
    constructor(projectId: string, name: string, entityTypeName: any, duration: number, state: any, priority: any, attributes: any, tags: Array<NodeModule>, preconditionSteps: Array<NodeModule>, steps: Array<NodeModule>, postconditionSteps: Array<NodeModule>, links: Array<NodeModule>);
    projectId: any;
    sectionId: any;
    name: any;
    description: any;
    entityTypeName: any;
    duration: any;
    state: any;
    priority: any;
    attributes: any;
    tags: any;
    preconditionSteps: any;
    steps: any;
    postconditionSteps: any;
    iterations: any;
    autoTests: any;
    attachments: any;
    links: any;
}
declare namespace CreateWorkItemApiModel {
    let RequiredProperties: string[];
}
