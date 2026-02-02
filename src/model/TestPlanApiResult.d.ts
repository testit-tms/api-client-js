export default TestPlanApiResult;
/**
 * The TestPlanApiResult model module.
 * @module model/TestPlanApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class TestPlanApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, name: any, status: any, tags: any, globalId: any, attributes: any, createdById: any, isDeleted: any): void;
    /**
     * Constructs a <code>TestPlanApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanApiResult} obj Optional instance to populate.
     * @return {module:model/TestPlanApiResult} The populated <code>TestPlanApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPlanApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPlanApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPlanApiResult</code>.
     * @alias module:model/TestPlanApiResult
     * @param id {String}
     * @param name {String}
     * @param status {module:model/TestPlanStatus}
     * @param tags {Array.<module:model/TestPlanTagApiResult>}
     * @param globalId {Number}
     * @param attributes {Object.<String, Object>}
     * @param createdById {String}
     * @param isDeleted {Boolean}
     */
    constructor(id: string, name: string, status: any, tags: Array<NodeModule>, globalId: number, attributes: any, createdById: string, isDeleted: boolean);
    id: any;
    name: any;
    startDate: any;
    endDate: any;
    startedOn: any;
    completedOn: any;
    description: any;
    build: any;
    projectId: any;
    productName: any;
    status: any;
    tags: any;
    globalId: any;
    hasAutomaticDurationTimer: any;
    lockedById: any;
    lockedDate: any;
    attributes: any;
    createdDate: any;
    modifiedDate: any;
    createdById: any;
    modifiedById: any;
    isDeleted: any;
}
declare namespace TestPlanApiResult {
    let RequiredProperties: string[];
}
