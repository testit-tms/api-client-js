export default TestPointFilterRequestModel;
/**
 * The TestPointFilterRequestModel model module.
 * @module model/TestPointFilterRequestModel
 * @version 7.1.0-TMS-5.6
 */
declare class TestPointFilterRequestModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>TestPointFilterRequestModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPointFilterRequestModel} obj Optional instance to populate.
     * @return {module:model/TestPointFilterRequestModel} The populated <code>TestPointFilterRequestModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPointFilterRequestModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPointFilterRequestModel</code>.
     */
    static validateJSON(data: any): boolean;
    testPlanIds: any;
    testSuiteIds: any;
    workItemGlobalIds: any;
    workItemMedianDuration: any;
    workItemIsDeleted: any;
    statuses: any;
    statusCodes: any;
    priorities: any;
    sourceTypes: any;
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
    attributes: any;
    workItemCreatedDate: any;
    workItemCreatedByIds: any;
    workItemModifiedDate: any;
    workItemModifiedByIds: any;
}
