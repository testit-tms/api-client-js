export default TestPlanTestPointsTesterAndStatusTypeGroupApiResult;
/**
 * The TestPlanTestPointsTesterAndStatusTypeGroupApiResult model module.
 * @module model/TestPlanTestPointsTesterAndStatusTypeGroupApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class TestPlanTestPointsTesterAndStatusTypeGroupApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, userId: any, statusType: any, statuses: any): void;
    /**
     * Constructs a <code>TestPlanTestPointsTesterAndStatusTypeGroupApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanTestPointsTesterAndStatusTypeGroupApiResult} obj Optional instance to populate.
     * @return {module:model/TestPlanTestPointsTesterAndStatusTypeGroupApiResult} The populated <code>TestPlanTestPointsTesterAndStatusTypeGroupApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPlanTestPointsTesterAndStatusTypeGroupApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPlanTestPointsTesterAndStatusTypeGroupApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPlanTestPointsTesterAndStatusTypeGroupApiResult</code>.
     * @alias module:model/TestPlanTestPointsTesterAndStatusTypeGroupApiResult
     * @param userId {String}
     * @param statusType {module:model/TestStatusApiType} Collection of possible status types
     * @param statuses {Array.<module:model/TestPlanTestPointsStatusCodeGroupApiResult>}
     */
    constructor(userId: string, statusType: any, statuses: Array<NodeModule>);
    userId: any;
    statusType: any;
    statuses: any;
}
declare namespace TestPlanTestPointsTesterAndStatusTypeGroupApiResult {
    let RequiredProperties: string[];
}
