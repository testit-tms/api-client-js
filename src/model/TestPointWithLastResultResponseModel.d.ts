export default TestPointWithLastResultResponseModel;
/**
 * The TestPointWithLastResultResponseModel model module.
 * @module model/TestPointWithLastResultResponseModel
 * @version 7.1.0-TMS-5.6
 */
declare class TestPointWithLastResultResponseModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, isAutomated: any, workItemId: any, testSuiteId: any, sectionId: any, createdById: any, duration: any, priority: any, sourceType: any): void;
    /**
     * Constructs a <code>TestPointWithLastResultResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPointWithLastResultResponseModel} obj Optional instance to populate.
     * @return {module:model/TestPointWithLastResultResponseModel} The populated <code>TestPointWithLastResultResponseModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPointWithLastResultResponseModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPointWithLastResultResponseModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPointWithLastResultResponseModel</code>.
     * @alias module:model/TestPointWithLastResultResponseModel
     * @param id {String}
     * @param isAutomated {Boolean}
     * @param workItemId {String}
     * @param testSuiteId {String}
     * @param sectionId {String}
     * @param createdById {String}
     * @param duration {Number}
     * @param priority {module:model/WorkItemPriorityModel}
     * @param sourceType {module:model/WorkItemSourceTypeModel}
     */
    constructor(id: string, isAutomated: boolean, workItemId: string, testSuiteId: string, sectionId: string, createdById: string, duration: number, priority: any, sourceType: any);
    id: any;
    workItemName: any;
    isAutomated: any;
    testerId: any;
    workItemId: any;
    configurationId: any;
    testSuiteId: any;
    lastTestResult: any;
    status: any;
    statusModel: any;
    workItemGlobalId: any;
    workItemEntityTypeName: any;
    sectionId: any;
    sectionName: any;
    createdDate: any;
    modifiedDate: any;
    createdById: any;
    modifiedById: any;
    attributes: any;
    tagNames: any;
    duration: any;
    priority: any;
    sourceType: any;
    testSuiteNameBreadCrumbs: any;
    groupCount: any;
    iteration: any;
}
declare namespace TestPointWithLastResultResponseModel {
    let RequiredProperties: string[];
}
