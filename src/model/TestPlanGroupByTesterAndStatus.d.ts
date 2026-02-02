export default TestPlanGroupByTesterAndStatus;
/**
 * The TestPlanGroupByTesterAndStatus model module.
 * @module model/TestPlanGroupByTesterAndStatus
 * @version 7.1.0-TMS-5.6
 */
declare class TestPlanGroupByTesterAndStatus {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, status: any, value: any): void;
    /**
     * Constructs a <code>TestPlanGroupByTesterAndStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanGroupByTesterAndStatus} obj Optional instance to populate.
     * @return {module:model/TestPlanGroupByTesterAndStatus} The populated <code>TestPlanGroupByTesterAndStatus</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPlanGroupByTesterAndStatus</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPlanGroupByTesterAndStatus</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPlanGroupByTesterAndStatus</code>.
     * @alias module:model/TestPlanGroupByTesterAndStatus
     * @param status {String}
     * @param value {Number}
     */
    constructor(status: string, value: number);
    userId: any;
    status: any;
    value: any;
}
declare namespace TestPlanGroupByTesterAndStatus {
    let RequiredProperties: string[];
}
