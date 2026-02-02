export default AutoTestProjectSettingsApiResult;
/**
 * The AutoTestProjectSettingsApiResult model module.
 * @module model/AutoTestProjectSettingsApiResult
 * @version 7.1.0
 */
declare class AutoTestProjectSettingsApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, projectId: any, isFlakyAuto: any, flakyStabilityPercentage: any, flakyTestRunCount: any, rerunEnabled: any, rerunAttemptsCount: any): void;
    /**
     * Constructs a <code>AutoTestProjectSettingsApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoTestProjectSettingsApiResult} obj Optional instance to populate.
     * @return {module:model/AutoTestProjectSettingsApiResult} The populated <code>AutoTestProjectSettingsApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AutoTestProjectSettingsApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutoTestProjectSettingsApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AutoTestProjectSettingsApiResult</code>.
     * @alias module:model/AutoTestProjectSettingsApiResult
     * @param projectId {String} Unique ID of the project.
     * @param isFlakyAuto {Boolean} Indicates if the status \"Flaky/Stable\" sets automatically
     * @param flakyStabilityPercentage {Number} Stability percentage for autotest flaky computing
     * @param flakyTestRunCount {Number} Last test run count for autotest flaky computing
     * @param rerunEnabled {Boolean} Auto rerun enabled
     * @param rerunAttemptsCount {Number} Auto rerun attempt count
     */
    constructor(projectId: string, isFlakyAuto: boolean, flakyStabilityPercentage: number, flakyTestRunCount: number, rerunEnabled: boolean, rerunAttemptsCount: number);
    projectId: any;
    isFlakyAuto: any;
    flakyStabilityPercentage: any;
    flakyTestRunCount: any;
    rerunEnabled: any;
    rerunAttemptsCount: any;
}
declare namespace AutoTestProjectSettingsApiResult {
    let RequiredProperties: string[];
}
