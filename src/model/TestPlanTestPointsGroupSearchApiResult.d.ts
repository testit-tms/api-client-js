export default TestPlanTestPointsGroupSearchApiResult;
/**
 * The TestPlanTestPointsGroupSearchApiResult model module.
 * @module model/TestPlanTestPointsGroupSearchApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class TestPlanTestPointsGroupSearchApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, data: any, totalCount: any, statusCounters: any): void;
    /**
     * Constructs a <code>TestPlanTestPointsGroupSearchApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanTestPointsGroupSearchApiResult} obj Optional instance to populate.
     * @return {module:model/TestPlanTestPointsGroupSearchApiResult} The populated <code>TestPlanTestPointsGroupSearchApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPlanTestPointsGroupSearchApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPlanTestPointsGroupSearchApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPlanTestPointsGroupSearchApiResult</code>.
     * @alias module:model/TestPlanTestPointsGroupSearchApiResult
     * @param data {Array.<module:model/TestPlanTestPointsGroupSearchItemApiResult>}
     * @param totalCount {Number}
     * @param statusCounters {module:model/TestPlanTestPointsSearchStatusCountersApiResult}
     */
    constructor(data: Array<NodeModule>, totalCount: number, statusCounters: any);
    data: any;
    totalCount: any;
    statusCounters: any;
}
declare namespace TestPlanTestPointsGroupSearchApiResult {
    let RequiredProperties: string[];
}
