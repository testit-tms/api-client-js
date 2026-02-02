export default SharedStepResultApiModel;
/**
 * The SharedStepResultApiModel model module.
 * @module model/SharedStepResultApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class SharedStepResultApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, stepId: any, outcome: any): void;
    /**
     * Constructs a <code>SharedStepResultApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SharedStepResultApiModel} obj Optional instance to populate.
     * @return {module:model/SharedStepResultApiModel} The populated <code>SharedStepResultApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>SharedStepResultApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SharedStepResultApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>SharedStepResultApiModel</code>.
     * @alias module:model/SharedStepResultApiModel
     * @param stepId {String}
     * @param outcome {String}
     */
    constructor(stepId: string, outcome: string);
    stepId: any;
    outcome: any;
}
declare namespace SharedStepResultApiModel {
    let RequiredProperties: string[];
}
