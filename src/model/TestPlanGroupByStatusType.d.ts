export default TestPlanGroupByStatusType;
/**
 * The TestPlanGroupByStatusType model module.
 * @module model/TestPlanGroupByStatusType
 * @version 7.1.0
 */
declare class TestPlanGroupByStatusType {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, statusType: any, value: any): void;
    /**
     * Constructs a <code>TestPlanGroupByStatusType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanGroupByStatusType} obj Optional instance to populate.
     * @return {module:model/TestPlanGroupByStatusType} The populated <code>TestPlanGroupByStatusType</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPlanGroupByStatusType</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPlanGroupByStatusType</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPlanGroupByStatusType</code>.
     * @alias module:model/TestPlanGroupByStatusType
     * @param statusType {module:model/TestStatusType}
     * @param value {Number}
     */
    constructor(statusType: any, value: number);
    statusType: any;
    value: any;
}
declare namespace TestPlanGroupByStatusType {
    let RequiredProperties: string[];
}
