export default AttachmentApiResult;
/**
 * The AttachmentApiResult model module.
 * @module model/AttachmentApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class AttachmentApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, fileId: any, type: any, size: any, createdDate: any, createdById: any, name: any): void;
    /**
     * Constructs a <code>AttachmentApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttachmentApiResult} obj Optional instance to populate.
     * @return {module:model/AttachmentApiResult} The populated <code>AttachmentApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AttachmentApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AttachmentApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AttachmentApiResult</code>.
     * @alias module:model/AttachmentApiResult
     * @param id {String} Unique ID of the attachment
     * @param fileId {String} Unique ID of the attachment file
     * @param type {String} MIME type of the attachment
     * @param size {Number} Size in bytes of the attachment file
     * @param createdDate {Date} Creation date of the attachment
     * @param createdById {String} Unique ID of the attachment creator
     * @param name {String} Name of the attachment file
     */
    constructor(id: string, fileId: string, type: string, size: number, createdDate: Date, createdById: string, name: string);
    id: any;
    fileId: any;
    type: any;
    size: any;
    createdDate: any;
    modifiedDate: any;
    createdById: any;
    modifiedById: any;
    name: any;
}
declare namespace AttachmentApiResult {
    let RequiredProperties: string[];
}
