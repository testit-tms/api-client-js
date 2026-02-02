export default CreateTestPlanApiModel;
/**
 * The CreateTestPlanApiModel model module.
 * @module model/CreateTestPlanApiModel
 * @version 7.1.0
 */
declare class CreateTestPlanApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, projectId: any, attributes: any): void;
    /**
     * Constructs a <code>CreateTestPlanApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTestPlanApiModel} obj Optional instance to populate.
     * @return {module:model/CreateTestPlanApiModel} The populated <code>CreateTestPlanApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>CreateTestPlanApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateTestPlanApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>CreateTestPlanApiModel</code>.
     * @alias module:model/CreateTestPlanApiModel
     * @param name {String} Test plan name
     * @param projectId {String} Project unique identifier
     * @param attributes {Object.<String, Object>} Key value pair of test plan custom attributes
     */
    constructor(name: string, projectId: string, attributes: any);
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
    testSuite: any;
}
declare namespace CreateTestPlanApiModel {
    let RequiredProperties: string[];
}
