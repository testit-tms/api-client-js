export default TestSuiteWorkItemsSearchModel;
/**
 * The TestSuiteWorkItemsSearchModel model module.
 * @module model/TestSuiteWorkItemsSearchModel
 * @version 7.1.0-TMS-5.6
 */
declare class TestSuiteWorkItemsSearchModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>TestSuiteWorkItemsSearchModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestSuiteWorkItemsSearchModel} obj Optional instance to populate.
     * @return {module:model/TestSuiteWorkItemsSearchModel} The populated <code>TestSuiteWorkItemsSearchModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestSuiteWorkItemsSearchModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestSuiteWorkItemsSearchModel</code>.
     */
    static validateJSON(data: any): boolean;
    tagNames: any;
    entityTypes: any;
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
