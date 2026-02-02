export default TestPlanModel;
/**
 * The TestPlanModel model module.
 * @module model/TestPlanModel
 * @version 7.1.0
 */
declare class TestPlanModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, status: any, createdById: any, globalId: any, isDeleted: any, id: any, name: any, projectId: any, attributes: any): void;
    /**
     * Constructs a <code>TestPlanModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanModel} obj Optional instance to populate.
     * @return {module:model/TestPlanModel} The populated <code>TestPlanModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPlanModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPlanModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPlanModel</code>.
     * @alias module:model/TestPlanModel
     * @param status {module:model/TestPlanStatusModel}
     * @param createdById {String}
     * @param globalId {Number} Used for search Test plan
     * @param isDeleted {Boolean}
     * @param id {String}
     * @param name {String}
     * @param projectId {String}
     * @param attributes {Object.<String, Object>}
     */
    constructor(status: any, createdById: string, globalId: number, isDeleted: boolean, id: string, name: string, projectId: string, attributes: any);
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
declare namespace TestPlanModel {
    let RequiredProperties: string[];
}
