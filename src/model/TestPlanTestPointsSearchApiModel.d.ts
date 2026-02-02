export default TestPlanTestPointsSearchApiModel;
/**
 * The TestPlanTestPointsSearchApiModel model module.
 * @module model/TestPlanTestPointsSearchApiModel
 * @version 7.1.0
 */
declare class TestPlanTestPointsSearchApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>TestPlanTestPointsSearchApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanTestPointsSearchApiModel} obj Optional instance to populate.
     * @return {module:model/TestPlanTestPointsSearchApiModel} The populated <code>TestPlanTestPointsSearchApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPlanTestPointsSearchApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPlanTestPointsSearchApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    testSuiteIds: any;
    workItemGlobalIds: any;
    workItemMedianDuration: any;
    statuses: any;
    statusCodes: any;
    priorities: any;
    isAutomated: any;
    name: any;
    configurationIds: any;
    testerIds: any;
    duration: any;
    sectionIds: any;
    createdDate: any;
    createdByIds: any;
    modifiedDate: any;
    modifiedByIds: any;
    tags: any;
    excludeTags: any;
    attributes: any;
    workItemCreatedDate: any;
    workItemCreatedByIds: any;
    workItemModifiedDate: any;
    workItemModifiedByIds: any;
}
