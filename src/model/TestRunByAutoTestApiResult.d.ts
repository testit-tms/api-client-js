export default TestRunByAutoTestApiResult;
/**
 * The TestRunByAutoTestApiResult model module.
 * @module model/TestRunByAutoTestApiResult
 * @version 7.1.0
 */
declare class TestRunByAutoTestApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, isDeleted: any, stateName: any, status: any, projectId: any): void;
    /**
     * Constructs a <code>TestRunByAutoTestApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestRunByAutoTestApiResult} obj Optional instance to populate.
     * @return {module:model/TestRunByAutoTestApiResult} The populated <code>TestRunByAutoTestApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestRunByAutoTestApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestRunByAutoTestApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestRunByAutoTestApiResult</code>.
     * @alias module:model/TestRunByAutoTestApiResult
     * @param id {String} Unique ID of the entity
     * @param isDeleted {Boolean} Indicates if the entity is deleted
     * @param stateName {module:model/TestRunState} Test run state
     * @param status {module:model/TestStatusApiResult} Test run status
     * @param projectId {String} Project internal identifier
     */
    constructor(id: string, isDeleted: boolean, stateName: any, status: any, projectId: string);
    id: any;
    isDeleted: any;
    stateName: any;
    status: any;
    projectId: any;
    testPlanId: any;
    name: any;
    description: any;
}
declare namespace TestRunByAutoTestApiResult {
    let RequiredProperties: string[];
}
