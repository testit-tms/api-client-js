export default TestPlanTestPointsGroupApiModel;
/**
 * The TestPlanTestPointsGroupApiModel model module.
 * @module model/TestPlanTestPointsGroupApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class TestPlanTestPointsGroupApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, field: any): void;
    /**
     * Constructs a <code>TestPlanTestPointsGroupApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanTestPointsGroupApiModel} obj Optional instance to populate.
     * @return {module:model/TestPlanTestPointsGroupApiModel} The populated <code>TestPlanTestPointsGroupApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPlanTestPointsGroupApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPlanTestPointsGroupApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPlanTestPointsGroupApiModel</code>.
     * @alias module:model/TestPlanTestPointsGroupApiModel
     * @param field {String}
     */
    constructor(field: string);
    field: any;
    displayField: any;
}
declare namespace TestPlanTestPointsGroupApiModel {
    let RequiredProperties: string[];
}
