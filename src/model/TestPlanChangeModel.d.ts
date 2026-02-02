export default TestPlanChangeModel;
/**
 * The TestPlanChangeModel model module.
 * @module model/TestPlanChangeModel
 * @version 7.1.0
 */
declare class TestPlanChangeModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, testPlanId: any, testPlanChangedFields: any, createdById: any): void;
    /**
     * Constructs a <code>TestPlanChangeModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanChangeModel} obj Optional instance to populate.
     * @return {module:model/TestPlanChangeModel} The populated <code>TestPlanChangeModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPlanChangeModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPlanChangeModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPlanChangeModel</code>.
     * @alias module:model/TestPlanChangeModel
     * @param id {String}
     * @param testPlanId {String}
     * @param testPlanChangedFields {module:model/TestPlanChangedFieldsViewModel}
     * @param createdById {String}
     */
    constructor(id: string, testPlanId: string, testPlanChangedFields: any, createdById: string);
    id: any;
    testPlanId: any;
    testPlanChangedFields: any;
    createdById: any;
    createdDate: any;
}
declare namespace TestPlanChangeModel {
    let RequiredProperties: string[];
}
