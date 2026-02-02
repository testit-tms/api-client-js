export default TestPlanSummaryModel;
/**
 * The TestPlanSummaryModel model module.
 * @module model/TestPlanSummaryModel
 * @version 7.1.0-TMS-5.6
 */
declare class TestPlanSummaryModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, totalTestPointsCount: any, manualTestPointsCount: any, automatedTestPointsCount: any, completedTestPointsCount: any, defectsCount: any, plannedTestPointsDuration: any): void;
    /**
     * Constructs a <code>TestPlanSummaryModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanSummaryModel} obj Optional instance to populate.
     * @return {module:model/TestPlanSummaryModel} The populated <code>TestPlanSummaryModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPlanSummaryModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPlanSummaryModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPlanSummaryModel</code>.
     * @alias module:model/TestPlanSummaryModel
     * @param totalTestPointsCount {Number}
     * @param manualTestPointsCount {Number}
     * @param automatedTestPointsCount {Number}
     * @param completedTestPointsCount {Number}
     * @param defectsCount {Number}
     * @param plannedTestPointsDuration {Number}
     */
    constructor(totalTestPointsCount: number, manualTestPointsCount: number, automatedTestPointsCount: number, completedTestPointsCount: number, defectsCount: number, plannedTestPointsDuration: number);
    totalTestPointsCount: any;
    manualTestPointsCount: any;
    automatedTestPointsCount: any;
    completedTestPointsCount: any;
    defectsCount: any;
    plannedTestPointsDuration: any;
    spentTestPointsDuration: any;
}
declare namespace TestPlanSummaryModel {
    let RequiredProperties: string[];
}
