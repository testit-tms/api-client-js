export default UpdateMultipleAttachmentsApiModel;
/**
 * The UpdateMultipleAttachmentsApiModel model module.
 * @module model/UpdateMultipleAttachmentsApiModel
 * @version 7.1.0
 */
declare class UpdateMultipleAttachmentsApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, action: any): void;
    /**
     * Constructs a <code>UpdateMultipleAttachmentsApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateMultipleAttachmentsApiModel} obj Optional instance to populate.
     * @return {module:model/UpdateMultipleAttachmentsApiModel} The populated <code>UpdateMultipleAttachmentsApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>UpdateMultipleAttachmentsApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateMultipleAttachmentsApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>UpdateMultipleAttachmentsApiModel</code>.
     * @alias module:model/UpdateMultipleAttachmentsApiModel
     * @param action {module:model/ActionUpdate}
     */
    constructor(action: any);
    action: any;
    attachmentIds: any;
}
declare namespace UpdateMultipleAttachmentsApiModel {
    let RequiredProperties: string[];
}
