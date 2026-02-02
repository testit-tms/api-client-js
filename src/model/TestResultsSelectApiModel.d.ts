export default TestResultsSelectApiModel;
/**
 * The TestResultsSelectApiModel model module.
 * @module model/TestResultsSelectApiModel
 * @version 7.1.0
 */
declare class TestResultsSelectApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, filter: any, extractionModel: any): void;
    /**
     * Constructs a <code>TestResultsSelectApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestResultsSelectApiModel} obj Optional instance to populate.
     * @return {module:model/TestResultsSelectApiModel} The populated <code>TestResultsSelectApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestResultsSelectApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestResultsSelectApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestResultsSelectApiModel</code>.
     * @alias module:model/TestResultsSelectApiModel
     * @param filter {module:model/TestResultsFilterApiModel} Test result filters
     * @param extractionModel {module:model/TestResultsExtractionApiModel} Test results extraction model
     */
    constructor(filter: any, extractionModel: any);
    filter: any;
    extractionModel: any;
}
declare namespace TestResultsSelectApiModel {
    let RequiredProperties: string[];
}
