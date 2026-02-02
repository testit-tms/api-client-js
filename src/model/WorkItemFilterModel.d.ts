export default WorkItemFilterModel;
/**
 * The WorkItemFilterModel model module.
 * @module model/WorkItemFilterModel
 * @version 7.1.0
 */
declare class WorkItemFilterModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>WorkItemFilterModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkItemFilterModel} obj Optional instance to populate.
     * @return {module:model/WorkItemFilterModel} The populated <code>WorkItemFilterModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkItemFilterModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkItemFilterModel</code>.
     */
    static validateJSON(data: any): boolean;
    nameOrId: any;
    includeIds: any;
    excludeIds: any;
    externalMetadata: any;
    projectIds: any;
    links: any;
    name: any;
    ids: any;
    globalIds: any;
    attributes: any;
    isDeleted: any;
    sectionIds: any;
    createdByIds: any;
    modifiedByIds: any;
    states: any;
    priorities: any;
    sourceTypes: any;
    types: any;
    createdDate: any;
    modifiedDate: any;
    duration: any;
    medianDuration: any;
    isAutomated: any;
    tags: any;
    excludeTags: any;
    autoTestIds: any;
    workItemVersionIds: any;
}
