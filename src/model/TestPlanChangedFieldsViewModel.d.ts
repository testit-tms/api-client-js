export default TestPlanChangedFieldsViewModel;
/**
 * The TestPlanChangedFieldsViewModel model module.
 * @module model/TestPlanChangedFieldsViewModel
 * @version 7.1.0-TMS-5.6
 */
declare class TestPlanChangedFieldsViewModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>TestPlanChangedFieldsViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanChangedFieldsViewModel} obj Optional instance to populate.
     * @return {module:model/TestPlanChangedFieldsViewModel} The populated <code>TestPlanChangedFieldsViewModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPlanChangedFieldsViewModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPlanChangedFieldsViewModel</code>.
     */
    static validateJSON(data: any): boolean;
    name: any;
    description: any;
    productName: any;
    build: any;
    period: any;
    status: any;
    tags: any;
    testSuite: any;
    testPoints: any;
    testResults: any;
    locking: any;
    hasAutomaticDurationTimer: any;
    attributes: any;
}
