export default TestPlanTestPointsStatusTypeGroupApiResult;
/**
 * The TestPlanTestPointsStatusTypeGroupApiResult model module.
 * @module model/TestPlanTestPointsStatusTypeGroupApiResult
 * @version 7.1.0
 */
declare class TestPlanTestPointsStatusTypeGroupApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, statusType: any, statuses: any): void;
    /**
     * Constructs a <code>TestPlanTestPointsStatusTypeGroupApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanTestPointsStatusTypeGroupApiResult} obj Optional instance to populate.
     * @return {module:model/TestPlanTestPointsStatusTypeGroupApiResult} The populated <code>TestPlanTestPointsStatusTypeGroupApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPlanTestPointsStatusTypeGroupApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPlanTestPointsStatusTypeGroupApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPlanTestPointsStatusTypeGroupApiResult</code>.
     * @alias module:model/TestPlanTestPointsStatusTypeGroupApiResult
     * @param statusType {module:model/TestStatusApiType} Collection of possible status types
     * @param statuses {Array.<module:model/TestPlanTestPointsStatusCodeGroupApiResult>}
     */
    constructor(statusType: any, statuses: Array<NodeModule>);
    statusType: any;
    statuses: any;
}
declare namespace TestPlanTestPointsStatusTypeGroupApiResult {
    let RequiredProperties: string[];
}
