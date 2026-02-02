export default AutoTestStepResultUpdateRequest;
/**
 * The AutoTestStepResultUpdateRequest model module.
 * @module model/AutoTestStepResultUpdateRequest
 * @version 7.1.0-TMS-5.6
 */
declare class AutoTestStepResultUpdateRequest {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>AutoTestStepResultUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoTestStepResultUpdateRequest} obj Optional instance to populate.
     * @return {module:model/AutoTestStepResultUpdateRequest} The populated <code>AutoTestStepResultUpdateRequest</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AutoTestStepResultUpdateRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutoTestStepResultUpdateRequest</code>.
     */
    static validateJSON(data: any): boolean;
    title: any;
    description: any;
    info: any;
    startedOn: any;
    completedOn: any;
    duration: any;
    outcome: any;
    stepResults: any;
    attachments: any;
    parameters: any;
}
