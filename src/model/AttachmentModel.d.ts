export default AttachmentModel;
/**
 * The AttachmentModel model module.
 * @module model/AttachmentModel
 * @version 7.1.0-TMS-5.6
 */
declare class AttachmentModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, fileId: any, type: any, size: any, createdDate: any, createdById: any, name: any, id: any): void;
    /**
     * Constructs a <code>AttachmentModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttachmentModel} obj Optional instance to populate.
     * @return {module:model/AttachmentModel} The populated <code>AttachmentModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AttachmentModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AttachmentModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AttachmentModel</code>.
     * @alias module:model/AttachmentModel
     * @param fileId {String} Unique ID of the attachment file
     * @param type {String} MIME type of the attachment
     * @param size {Number} Size in bytes of the attachment file
     * @param createdDate {Date} Creation date of the attachment
     * @param createdById {String} Unique ID of the attachment creator
     * @param name {String} Name of the attachment file
     * @param id {String} Unique ID of the attachment
     */
    constructor(fileId: string, type: string, size: number, createdDate: Date, createdById: string, name: string, id: string);
    fileId: any;
    type: any;
    size: any;
    createdDate: any;
    modifiedDate: any;
    createdById: any;
    modifiedById: any;
    name: any;
    id: any;
}
declare namespace AttachmentModel {
    let RequiredProperties: string[];
}
