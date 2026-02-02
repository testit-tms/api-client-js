export default TestPlanWithAnalyticModel;
/**
 * The TestPlanWithAnalyticModel model module.
 * @module model/TestPlanWithAnalyticModel
 * @version 7.1.0-TMS-5.6
 */
declare class TestPlanWithAnalyticModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, analytic: any, status: any, createdById: any, globalId: any, isDeleted: any, id: any, name: any, projectId: any, attributes: any): void;
    /**
     * Constructs a <code>TestPlanWithAnalyticModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanWithAnalyticModel} obj Optional instance to populate.
     * @return {module:model/TestPlanWithAnalyticModel} The populated <code>TestPlanWithAnalyticModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPlanWithAnalyticModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPlanWithAnalyticModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPlanWithAnalyticModel</code>.
     * @alias module:model/TestPlanWithAnalyticModel
     * @param analytic {module:model/TestPointAnalyticResult}
     * @param status {module:model/TestPlanStatusModel}
     * @param createdById {String}
     * @param globalId {Number} Used for search Test plan
     * @param isDeleted {Boolean}
     * @param id {String}
     * @param name {String}
     * @param projectId {String}
     * @param attributes {Object.<String, Object>}
     */
    constructor(analytic: any, status: any, createdById: string, globalId: number, isDeleted: boolean, id: string, name: string, projectId: string, attributes: any);
    analytic: any;
    status: any;
    startedOn: any;
    completedOn: any;
    createdDate: any;
    modifiedDate: any;
    createdById: any;
    modifiedById: any;
    globalId: any;
    isDeleted: any;
    lockedDate: any;
    id: any;
    lockedById: any;
    tags: any;
    name: any;
    startDate: any;
    endDate: any;
    description: any;
    build: any;
    projectId: any;
    productName: any;
    hasAutomaticDurationTimer: any;
    attributes: any;
}
declare namespace TestPlanWithAnalyticModel {
    let RequiredProperties: string[];
}
