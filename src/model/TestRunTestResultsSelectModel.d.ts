export default TestRunTestResultsSelectModel;
/**
 * The TestRunTestResultsSelectModel model module.
 * @module model/TestRunTestResultsSelectModel
 * @version 7.1.0
 */
declare class TestRunTestResultsSelectModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>TestRunTestResultsSelectModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestRunTestResultsSelectModel} obj Optional instance to populate.
     * @return {module:model/TestRunTestResultsSelectModel} The populated <code>TestRunTestResultsSelectModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestRunTestResultsSelectModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestRunTestResultsSelectModel</code>.
     */
    static validateJSON(data: any): boolean;
    filter: any;
    testResultIdsExtractionModel: any;
}
