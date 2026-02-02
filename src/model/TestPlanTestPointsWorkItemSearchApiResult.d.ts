export default TestPlanTestPointsWorkItemSearchApiResult;
/**
 * The TestPlanTestPointsWorkItemSearchApiResult model module.
 * @module model/TestPlanTestPointsWorkItemSearchApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class TestPlanTestPointsWorkItemSearchApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, globalId: any, versionId: any, versionNumber: any, duration: any, state: any, tags: any, attributes: any, isAutomated: any, name: any, priority: any, section: any, created: any): void;
    /**
     * Constructs a <code>TestPlanTestPointsWorkItemSearchApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanTestPointsWorkItemSearchApiResult} obj Optional instance to populate.
     * @return {module:model/TestPlanTestPointsWorkItemSearchApiResult} The populated <code>TestPlanTestPointsWorkItemSearchApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPlanTestPointsWorkItemSearchApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPlanTestPointsWorkItemSearchApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPlanTestPointsWorkItemSearchApiResult</code>.
     * @alias module:model/TestPlanTestPointsWorkItemSearchApiResult
     * @param id {String}
     * @param globalId {Number}
     * @param versionId {String}
     * @param versionNumber {Number}
     * @param duration {Number}
     * @param state {module:model/WorkItemState}
     * @param tags {Array.<String>}
     * @param attributes {Object.<String, Object>}
     * @param isAutomated {Boolean}
     * @param name {String}
     * @param priority {module:model/WorkItemPriority}
     * @param section {module:model/TestPlanTestPointsSectionSearchApiResult}
     * @param created {module:model/AuditApiResult}
     */
    constructor(id: string, globalId: number, versionId: string, versionNumber: number, duration: number, state: any, tags: Array<string>, attributes: any, isAutomated: boolean, name: string, priority: any, section: any, created: any);
    id: any;
    globalId: any;
    versionId: any;
    versionNumber: any;
    medianDuration: any;
    isDeleted: any;
    duration: any;
    state: any;
    tags: any;
    attributes: any;
    orderRank: any;
    isAutomated: any;
    name: any;
    priority: any;
    section: any;
    created: any;
    modified: any;
}
declare namespace TestPlanTestPointsWorkItemSearchApiResult {
    let RequiredProperties: string[];
}
