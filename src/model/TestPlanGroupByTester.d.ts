export default TestPlanGroupByTester;
/**
 * The TestPlanGroupByTester model module.
 * @module model/TestPlanGroupByTester
 * @version 7.1.0
 */
declare class TestPlanGroupByTester {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, value: any): void;
    /**
     * Constructs a <code>TestPlanGroupByTester</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanGroupByTester} obj Optional instance to populate.
     * @return {module:model/TestPlanGroupByTester} The populated <code>TestPlanGroupByTester</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPlanGroupByTester</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPlanGroupByTester</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPlanGroupByTester</code>.
     * @alias module:model/TestPlanGroupByTester
     * @param value {Number}
     */
    constructor(value: number);
    userId: any;
    value: any;
}
declare namespace TestPlanGroupByTester {
    let RequiredProperties: string[];
}
