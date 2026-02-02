export default AssignAttachmentApiModel;
/**
 * The AssignAttachmentApiModel model module.
 * @module model/AssignAttachmentApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class AssignAttachmentApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any): void;
    /**
     * Constructs a <code>AssignAttachmentApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssignAttachmentApiModel} obj Optional instance to populate.
     * @return {module:model/AssignAttachmentApiModel} The populated <code>AssignAttachmentApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AssignAttachmentApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AssignAttachmentApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AssignAttachmentApiModel</code>.
     * @alias module:model/AssignAttachmentApiModel
     * @param id {String} Unique ID of the attachment
     */
    constructor(id: string);
    id: any;
}
declare namespace AssignAttachmentApiModel {
    let RequiredProperties: string[];
}
