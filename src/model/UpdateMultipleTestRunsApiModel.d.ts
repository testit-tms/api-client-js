export default UpdateMultipleTestRunsApiModel;
/**
 * The UpdateMultipleTestRunsApiModel model module.
 * @module model/UpdateMultipleTestRunsApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class UpdateMultipleTestRunsApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, selectModel: any): void;
    /**
     * Constructs a <code>UpdateMultipleTestRunsApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateMultipleTestRunsApiModel} obj Optional instance to populate.
     * @return {module:model/UpdateMultipleTestRunsApiModel} The populated <code>UpdateMultipleTestRunsApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>UpdateMultipleTestRunsApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateMultipleTestRunsApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>UpdateMultipleTestRunsApiModel</code>.
     * @alias module:model/UpdateMultipleTestRunsApiModel
     * @param selectModel {module:model/TestRunSelectApiModel} Test run selection model
     */
    constructor(selectModel: any);
    selectModel: any;
    description: any;
    attachmentUpdateScheme: any;
    linkUpdateScheme: any;
}
declare namespace UpdateMultipleTestRunsApiModel {
    let RequiredProperties: string[];
}
