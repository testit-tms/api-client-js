export default TestPlanSelectModel;
/**
 * The TestPlanSelectModel model module.
 * @module model/TestPlanSelectModel
 * @version 7.1.0-TMS-5.6
 */
declare class TestPlanSelectModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, filter: any): void;
    /**
     * Constructs a <code>TestPlanSelectModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanSelectModel} obj Optional instance to populate.
     * @return {module:model/TestPlanSelectModel} The populated <code>TestPlanSelectModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPlanSelectModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPlanSelectModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPlanSelectModel</code>.
     * @alias module:model/TestPlanSelectModel
     * @param filter {module:model/ProjectTestPlansFilterModel}
     */
    constructor(filter: any);
    filter: any;
    extractionModel: any;
}
declare namespace TestPlanSelectModel {
    let RequiredProperties: string[];
}
