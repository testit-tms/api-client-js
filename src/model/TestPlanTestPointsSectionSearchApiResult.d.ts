export default TestPlanTestPointsSectionSearchApiResult;
/**
 * The TestPlanTestPointsSectionSearchApiResult model module.
 * @module model/TestPlanTestPointsSectionSearchApiResult
 * @version 7.1.0
 */
declare class TestPlanTestPointsSectionSearchApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, orderRank: any): void;
    /**
     * Constructs a <code>TestPlanTestPointsSectionSearchApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanTestPointsSectionSearchApiResult} obj Optional instance to populate.
     * @return {module:model/TestPlanTestPointsSectionSearchApiResult} The populated <code>TestPlanTestPointsSectionSearchApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPlanTestPointsSectionSearchApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPlanTestPointsSectionSearchApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPlanTestPointsSectionSearchApiResult</code>.
     * @alias module:model/TestPlanTestPointsSectionSearchApiResult
     * @param id {String}
     * @param orderRank {String}
     */
    constructor(id: string, orderRank: string);
    id: any;
    orderRank: any;
    name: any;
}
declare namespace TestPlanTestPointsSectionSearchApiResult {
    let RequiredProperties: string[];
}
