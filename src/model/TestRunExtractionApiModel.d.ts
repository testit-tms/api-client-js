export default TestRunExtractionApiModel;
/**
 * The TestRunExtractionApiModel model module.
 * @module model/TestRunExtractionApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class TestRunExtractionApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>TestRunExtractionApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestRunExtractionApiModel} obj Optional instance to populate.
     * @return {module:model/TestRunExtractionApiModel} The populated <code>TestRunExtractionApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestRunExtractionApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestRunExtractionApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    ids: any;
}
