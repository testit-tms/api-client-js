export default TestPlanTestPointsSetTestersApiModel;
/**
 * The TestPlanTestPointsSetTestersApiModel model module.
 * @module model/TestPlanTestPointsSetTestersApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class TestPlanTestPointsSetTestersApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, testerIds: any): void;
    /**
     * Constructs a <code>TestPlanTestPointsSetTestersApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanTestPointsSetTestersApiModel} obj Optional instance to populate.
     * @return {module:model/TestPlanTestPointsSetTestersApiModel} The populated <code>TestPlanTestPointsSetTestersApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPlanTestPointsSetTestersApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPlanTestPointsSetTestersApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPlanTestPointsSetTestersApiModel</code>.
     * @alias module:model/TestPlanTestPointsSetTestersApiModel
     * @param testerIds {Array.<String>}
     */
    constructor(testerIds: Array<string>);
    filter: any;
    extractionModel: any;
    testerIds: any;
}
declare namespace TestPlanTestPointsSetTestersApiModel {
    let RequiredProperties: string[];
}
