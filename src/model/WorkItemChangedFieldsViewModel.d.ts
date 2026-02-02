export default WorkItemChangedFieldsViewModel;
/**
 * The WorkItemChangedFieldsViewModel model module.
 * @module model/WorkItemChangedFieldsViewModel
 * @version 7.1.0-TMS-5.6
 */
declare class WorkItemChangedFieldsViewModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, isDeleted: any, projectId: any, isAutomated: any, sectionId: any, state: any, priority: any, duration: any, attributes: any, steps: any, preconditionSteps: any, postconditionSteps: any, autoTests: any, attachments: any, tags: any, links: any, globalId: any, versionNumber: any, entityTypeName: any): void;
    /**
     * Constructs a <code>WorkItemChangedFieldsViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkItemChangedFieldsViewModel} obj Optional instance to populate.
     * @return {module:model/WorkItemChangedFieldsViewModel} The populated <code>WorkItemChangedFieldsViewModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkItemChangedFieldsViewModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkItemChangedFieldsViewModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WorkItemChangedFieldsViewModel</code>.
     * @alias module:model/WorkItemChangedFieldsViewModel
     * @param isDeleted {module:model/BooleanChangedFieldViewModel}
     * @param projectId {module:model/GuidChangedFieldViewModel}
     * @param isAutomated {module:model/BooleanChangedFieldViewModel}
     * @param sectionId {module:model/GuidChangedFieldViewModel}
     * @param state {module:model/StringChangedFieldViewModel}
     * @param priority {module:model/StringChangedFieldViewModel}
     * @param duration {module:model/Int32ChangedFieldViewModel}
     * @param attributes {Object.<String, module:model/WorkItemChangedAttributeViewModel>}
     * @param steps {module:model/WorkItemStepChangeViewModelArrayChangedFieldWithDiffsViewModel}
     * @param preconditionSteps {module:model/WorkItemStepChangeViewModelArrayChangedFieldWithDiffsViewModel}
     * @param postconditionSteps {module:model/WorkItemStepChangeViewModelArrayChangedFieldWithDiffsViewModel}
     * @param autoTests {module:model/AutoTestChangeViewModelArrayChangedFieldViewModel}
     * @param attachments {module:model/AttachmentChangeViewModelArrayChangedFieldViewModel}
     * @param tags {module:model/StringArrayChangedFieldViewModel}
     * @param links {module:model/WorkItemLinkChangeViewModelArrayChangedFieldViewModel}
     * @param globalId {module:model/Int64ChangedFieldViewModel}
     * @param versionNumber {module:model/Int32ChangedFieldViewModel}
     * @param entityTypeName {module:model/StringChangedFieldViewModel}
     */
    constructor(isDeleted: any, projectId: any, isAutomated: any, sectionId: any, state: any, priority: any, duration: any, attributes: any, steps: any, preconditionSteps: any, postconditionSteps: any, autoTests: any, attachments: any, tags: any, links: any, globalId: any, versionNumber: any, entityTypeName: any);
    name: any;
    isDeleted: any;
    projectId: any;
    isAutomated: any;
    sectionId: any;
    description: any;
    state: any;
    priority: any;
    duration: any;
    attributes: any;
    steps: any;
    preconditionSteps: any;
    postconditionSteps: any;
    autoTests: any;
    attachments: any;
    tags: any;
    links: any;
    globalId: any;
    versionNumber: any;
    entityTypeName: any;
}
declare namespace WorkItemChangedFieldsViewModel {
    let RequiredProperties: string[];
}
