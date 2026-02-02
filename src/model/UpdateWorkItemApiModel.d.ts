export default UpdateWorkItemApiModel;
/**
 * The UpdateWorkItemApiModel model module.
 * @module model/UpdateWorkItemApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class UpdateWorkItemApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, sectionId: any, state: any, priority: any, steps: any, preconditionSteps: any, postconditionSteps: any, duration: any, attributes: any, tags: any, links: any, name: any, attachments: any): void;
    /**
     * Constructs a <code>UpdateWorkItemApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateWorkItemApiModel} obj Optional instance to populate.
     * @return {module:model/UpdateWorkItemApiModel} The populated <code>UpdateWorkItemApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>UpdateWorkItemApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateWorkItemApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>UpdateWorkItemApiModel</code>.
     * @alias module:model/UpdateWorkItemApiModel
     * @param id {String} Workitem internal identifier
     * @param sectionId {String} Internal identifier of section where workitem is located
     * @param state {module:model/WorkItemStates}
     * @param priority {module:model/WorkItemPriorityModel}
     * @param steps {Array.<module:model/UpdateStepApiModel>} Collection of workitem steps
     * @param preconditionSteps {Array.<module:model/UpdateStepApiModel>} Collection of workitem precondtion steps
     * @param postconditionSteps {Array.<module:model/UpdateStepApiModel>} Collection of workitem postcondition steps
     * @param duration {Number} Workitem duration in milliseconds
     * @param attributes {Object.<String, Object>} Key value pair of custom workitem attributes
     * @param tags {Array.<module:model/TagModel>} Collection of workitem tags
     * @param links {Array.<module:model/UpdateLinkApiModel>} Collection of workitem links
     * @param name {String} Workitem name
     * @param attachments {Array.<module:model/AssignAttachmentApiModel>}
     */
    constructor(id: string, sectionId: string, state: any, priority: any, steps: Array<NodeModule>, preconditionSteps: Array<NodeModule>, postconditionSteps: Array<NodeModule>, duration: number, attributes: any, tags: Array<NodeModule>, links: Array<NodeModule>, name: string, attachments: Array<NodeModule>);
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
    attachments: any;
    iterations: any;
    autoTests: any;
}
declare namespace UpdateWorkItemApiModel {
    let RequiredProperties: string[];
}
