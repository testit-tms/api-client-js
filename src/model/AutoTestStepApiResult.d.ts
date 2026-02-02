export default AutoTestStepApiResult;
/**
 * The AutoTestStepApiResult model module.
 * @module model/AutoTestStepApiResult
 * @version 7.1.0
 */
declare class AutoTestStepApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, title: any): void;
    /**
     * Constructs a <code>AutoTestStepApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoTestStepApiResult} obj Optional instance to populate.
     * @return {module:model/AutoTestStepApiResult} The populated <code>AutoTestStepApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AutoTestStepApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutoTestStepApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AutoTestStepApiResult</code>.
     * @alias module:model/AutoTestStepApiResult
     * @param title {String} Step name.
     */
    constructor(title: string);
    title: any;
    description: any;
    steps: any;
}
declare namespace AutoTestStepApiResult {
    let RequiredProperties: string[];
}
