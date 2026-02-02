export default UpdateTestPlanApiModel;
/**
 * The UpdateTestPlanApiModel model module.
 * @module model/UpdateTestPlanApiModel
 * @version 7.1.0
 */
declare class UpdateTestPlanApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, name: any, projectId: any): void;
    /**
     * Constructs a <code>UpdateTestPlanApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateTestPlanApiModel} obj Optional instance to populate.
     * @return {module:model/UpdateTestPlanApiModel} The populated <code>UpdateTestPlanApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>UpdateTestPlanApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateTestPlanApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>UpdateTestPlanApiModel</code>.
     * @alias module:model/UpdateTestPlanApiModel
     * @param id {String} Test plan unique internal identifier
     * @param name {String} Test plan name
     * @param projectId {String} Project unique identifier
     */
    constructor(id: string, name: string, projectId: string);
    id: any;
    lockedById: any;
    name: any;
    startDate: any;
    endDate: any;
    description: any;
    build: any;
    projectId: any;
    productName: any;
    hasAutomaticDurationTimer: any;
    attributes: any;
    tags: any;
}
declare namespace UpdateTestPlanApiModel {
    let RequiredProperties: string[];
}
