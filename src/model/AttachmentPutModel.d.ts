export default AttachmentPutModel;
/**
 * The AttachmentPutModel model module.
 * @module model/AttachmentPutModel
 * @version 7.1.0
 */
declare class AttachmentPutModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any): void;
    /**
     * Constructs a <code>AttachmentPutModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttachmentPutModel} obj Optional instance to populate.
     * @return {module:model/AttachmentPutModel} The populated <code>AttachmentPutModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AttachmentPutModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AttachmentPutModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AttachmentPutModel</code>.
     * @alias module:model/AttachmentPutModel
     * @param id {String} Unique ID of the attachment
     */
    constructor(id: string);
    id: any;
}
declare namespace AttachmentPutModel {
    let RequiredProperties: string[];
}
