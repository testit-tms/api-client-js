export default TestPlanTestPointsAutoTestsRunApiModel;
/**
 * The TestPlanTestPointsAutoTestsRunApiModel model module.
 * @module model/TestPlanTestPointsAutoTestsRunApiModel
 * @version 7.1.0
 */
declare class TestPlanTestPointsAutoTestsRunApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, webhookIds: any, resetNotActualAutomatedTestPoints: any): void;
    /**
     * Constructs a <code>TestPlanTestPointsAutoTestsRunApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanTestPointsAutoTestsRunApiModel} obj Optional instance to populate.
     * @return {module:model/TestPlanTestPointsAutoTestsRunApiModel} The populated <code>TestPlanTestPointsAutoTestsRunApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPlanTestPointsAutoTestsRunApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPlanTestPointsAutoTestsRunApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPlanTestPointsAutoTestsRunApiModel</code>.
     * @alias module:model/TestPlanTestPointsAutoTestsRunApiModel
     * @param webhookIds {Array.<String>} Webhook ids to run.
     * @param resetNotActualAutomatedTestPoints {Boolean} Reset test point status when actual work item does not automated.
     */
    constructor(webhookIds: Array<string>, resetNotActualAutomatedTestPoints: boolean);
    filter: any;
    extractionModel: any;
    webhookIds: any;
    build: any;
    resetNotActualAutomatedTestPoints: any;
}
declare namespace TestPlanTestPointsAutoTestsRunApiModel {
    let RequiredProperties: string[];
}
