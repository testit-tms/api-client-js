export default AttachmentUpdateRequest;
/**
 * The AttachmentUpdateRequest model module.
 * @module model/AttachmentUpdateRequest
 * @version 7.1.0-TMS-5.6
 */
declare class AttachmentUpdateRequest {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any): void;
    /**
     * Constructs a <code>AttachmentUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttachmentUpdateRequest} obj Optional instance to populate.
     * @return {module:model/AttachmentUpdateRequest} The populated <code>AttachmentUpdateRequest</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AttachmentUpdateRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AttachmentUpdateRequest</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AttachmentUpdateRequest</code>.
     * @alias module:model/AttachmentUpdateRequest
     * @param id {String} Unique ID of the attachment
     */
    constructor(id: string);
    id: any;
}
declare namespace AttachmentUpdateRequest {
    let RequiredProperties: string[];
}
