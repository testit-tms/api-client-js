export default StepResultApiModel;
/**
 * The StepResultApiModel model module.
 * @module model/StepResultApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class StepResultApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, stepId: any, outcome: any): void;
    /**
     * Constructs a <code>StepResultApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StepResultApiModel} obj Optional instance to populate.
     * @return {module:model/StepResultApiModel} The populated <code>StepResultApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>StepResultApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StepResultApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>StepResultApiModel</code>.
     * @alias module:model/StepResultApiModel
     * @param stepId {String}
     * @param outcome {String}
     */
    constructor(stepId: string, outcome: string);
    stepId: any;
    outcome: any;
    sharedStepVersionId: any;
    sharedStepResults: any;
    comment: any;
}
declare namespace StepResultApiModel {
    let RequiredProperties: string[];
}
