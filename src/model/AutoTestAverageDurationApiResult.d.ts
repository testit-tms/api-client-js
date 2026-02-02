export default AutoTestAverageDurationApiResult;
/**
 * The AutoTestAverageDurationApiResult model module.
 * @module model/AutoTestAverageDurationApiResult
 * @version 7.1.0
 */
declare class AutoTestAverageDurationApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, passedAverageDuration: any, failedAverageDuration: any): void;
    /**
     * Constructs a <code>AutoTestAverageDurationApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoTestAverageDurationApiResult} obj Optional instance to populate.
     * @return {module:model/AutoTestAverageDurationApiResult} The populated <code>AutoTestAverageDurationApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AutoTestAverageDurationApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutoTestAverageDurationApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AutoTestAverageDurationApiResult</code>.
     * @alias module:model/AutoTestAverageDurationApiResult
     * @param passedAverageDuration {Number} Pass average duration of autotest from all related test results
     * @param failedAverageDuration {Number} Fail average duration of autotest from all related test results
     */
    constructor(passedAverageDuration: number, failedAverageDuration: number);
    passedAverageDuration: any;
    failedAverageDuration: any;
}
declare namespace AutoTestAverageDurationApiResult {
    let RequiredProperties: string[];
}
