export default AttachmentPutModelAutoTestStepResultsModel;
/**
 * The AttachmentPutModelAutoTestStepResultsModel model module.
 * @module model/AttachmentPutModelAutoTestStepResultsModel
 * @version 7.1.0-TMS-5.6
 */
declare class AttachmentPutModelAutoTestStepResultsModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>AttachmentPutModelAutoTestStepResultsModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttachmentPutModelAutoTestStepResultsModel} obj Optional instance to populate.
     * @return {module:model/AttachmentPutModelAutoTestStepResultsModel} The populated <code>AttachmentPutModelAutoTestStepResultsModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AttachmentPutModelAutoTestStepResultsModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AttachmentPutModelAutoTestStepResultsModel</code>.
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
