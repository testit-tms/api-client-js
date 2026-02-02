export default AutoTestStepApiModel;
/**
 * The AutoTestStepApiModel model module.
 * @module model/AutoTestStepApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class AutoTestStepApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, title: any): void;
    /**
     * Constructs a <code>AutoTestStepApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoTestStepApiModel} obj Optional instance to populate.
     * @return {module:model/AutoTestStepApiModel} The populated <code>AutoTestStepApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AutoTestStepApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutoTestStepApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AutoTestStepApiModel</code>.
     * @alias module:model/AutoTestStepApiModel
     * @param title {String} Step name.
     */
    constructor(title: string);
    title: any;
    description: any;
    steps: any;
}
declare namespace AutoTestStepApiModel {
    let RequiredProperties: string[];
}
