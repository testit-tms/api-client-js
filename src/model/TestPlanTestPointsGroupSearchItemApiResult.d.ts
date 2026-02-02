export default TestPlanTestPointsGroupSearchItemApiResult;
/**
 * The TestPlanTestPointsGroupSearchItemApiResult model module.
 * @module model/TestPlanTestPointsGroupSearchItemApiResult
 * @version 7.1.0
 */
declare class TestPlanTestPointsGroupSearchItemApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, group: any, items: any): void;
    /**
     * Constructs a <code>TestPlanTestPointsGroupSearchItemApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanTestPointsGroupSearchItemApiResult} obj Optional instance to populate.
     * @return {module:model/TestPlanTestPointsGroupSearchItemApiResult} The populated <code>TestPlanTestPointsGroupSearchItemApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPlanTestPointsGroupSearchItemApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPlanTestPointsGroupSearchItemApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPlanTestPointsGroupSearchItemApiResult</code>.
     * @alias module:model/TestPlanTestPointsGroupSearchItemApiResult
     * @param group {module:model/TestPlanTestPointsGroupApiResult}
     * @param items {Array.<module:model/TestPlanTestPointsSearchApiResult>}
     */
    constructor(group: any, items: Array<NodeModule>);
    group: any;
    items: any;
}
declare namespace TestPlanTestPointsGroupSearchItemApiResult {
    let RequiredProperties: string[];
}
