export default TestRunSelectApiModel;
/**
 * The TestRunSelectApiModel model module.
 * @module model/TestRunSelectApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class TestRunSelectApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, filter: any, extractionModel: any): void;
    /**
     * Constructs a <code>TestRunSelectApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestRunSelectApiModel} obj Optional instance to populate.
     * @return {module:model/TestRunSelectApiModel} The populated <code>TestRunSelectApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestRunSelectApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestRunSelectApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestRunSelectApiModel</code>.
     * Model containing options to filter test runs
     * @alias module:model/TestRunSelectApiModel
     * @param filter {module:model/TestRunFilterApiModel}
     * @param extractionModel {module:model/TestRunExtractionApiModel} Rules for different level entities inclusion/exclusion
     */
    constructor(filter: any, extractionModel: any);
    filter: any;
    extractionModel: any;
}
declare namespace TestRunSelectApiModel {
    let RequiredProperties: string[];
}
