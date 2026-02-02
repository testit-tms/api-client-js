export default TestPlanWithTestSuiteTreeModel;
/**
 * The TestPlanWithTestSuiteTreeModel model module.
 * @module model/TestPlanWithTestSuiteTreeModel
 * @version 7.1.0-TMS-5.6
 */
declare class TestPlanWithTestSuiteTreeModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, testSuites: any, status: any, createdById: any, globalId: any, isDeleted: any, id: any, name: any, projectId: any, attributes: any): void;
    /**
     * Constructs a <code>TestPlanWithTestSuiteTreeModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanWithTestSuiteTreeModel} obj Optional instance to populate.
     * @return {module:model/TestPlanWithTestSuiteTreeModel} The populated <code>TestPlanWithTestSuiteTreeModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPlanWithTestSuiteTreeModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPlanWithTestSuiteTreeModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPlanWithTestSuiteTreeModel</code>.
     * @alias module:model/TestPlanWithTestSuiteTreeModel
     * @param testSuites {Array.<module:model/TestSuiteWithChildrenModel>}
     * @param status {module:model/TestPlanStatusModel}
     * @param createdById {String}
     * @param globalId {Number} Used for search Test plan
     * @param isDeleted {Boolean}
     * @param id {String}
     * @param name {String}
     * @param projectId {String}
     * @param attributes {Object.<String, Object>}
     */
    constructor(testSuites: Array<NodeModule>, status: any, createdById: string, globalId: number, isDeleted: boolean, id: string, name: string, projectId: string, attributes: any);
    testSuites: any;
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
declare namespace TestPlanWithTestSuiteTreeModel {
    let RequiredProperties: string[];
}
