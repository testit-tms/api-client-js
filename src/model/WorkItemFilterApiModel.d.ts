export default WorkItemFilterApiModel;
/**
 * The WorkItemFilterApiModel model module.
 * @module model/WorkItemFilterApiModel
 * @version 7.1.0
 */
declare class WorkItemFilterApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>WorkItemFilterApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkItemFilterApiModel} obj Optional instance to populate.
     * @return {module:model/WorkItemFilterApiModel} The populated <code>WorkItemFilterApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkItemFilterApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkItemFilterApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    nameOrId: any;
    includeIds: any;
    excludeIds: any;
    projectIds: any;
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
    links: any;
    externalMetadata: any;
}
