export default TestResultsFilterApiModel;
/**
 * The TestResultsFilterApiModel model module.
 * @module model/TestResultsFilterApiModel
 * @version 7.1.0
 */
declare class TestResultsFilterApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>TestResultsFilterApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestResultsFilterApiModel} obj Optional instance to populate.
     * @return {module:model/TestResultsFilterApiModel} The populated <code>TestResultsFilterApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestResultsFilterApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestResultsFilterApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    configurationIds: any;
    outcomes: any;
    statusCodes: any;
    failureCategories: any;
    namespace: any;
    className: any;
    autoTestGlobalIds: any;
    name: any;
    createdDate: any;
    modifiedDate: any;
    startedOn: any;
    completedOn: any;
    duration: any;
    resultReasons: any;
    testRunIds: any;
}
