export default AutoTestProjectSettingsApiModel;
/**
 * The AutoTestProjectSettingsApiModel model module.
 * @module model/AutoTestProjectSettingsApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class AutoTestProjectSettingsApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, rerunEnabled: any, rerunAttemptsCount: any): void;
    /**
     * Constructs a <code>AutoTestProjectSettingsApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoTestProjectSettingsApiModel} obj Optional instance to populate.
     * @return {module:model/AutoTestProjectSettingsApiModel} The populated <code>AutoTestProjectSettingsApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AutoTestProjectSettingsApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutoTestProjectSettingsApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AutoTestProjectSettingsApiModel</code>.
     * @alias module:model/AutoTestProjectSettingsApiModel
     * @param rerunEnabled {Boolean} Auto rerun enabled
     * @param rerunAttemptsCount {Number} Auto rerun attempt count
     */
    constructor(rerunEnabled: boolean, rerunAttemptsCount: number);
    isFlakyAuto: boolean;
    flakyStabilityPercentage: number;
    flakyTestRunCount: number;
    rerunEnabled: any;
    rerunAttemptsCount: any;
}
declare namespace AutoTestProjectSettingsApiModel {
    let RequiredProperties: string[];
}
