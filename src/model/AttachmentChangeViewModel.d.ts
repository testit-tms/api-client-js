export default AttachmentChangeViewModel;
/**
 * The AttachmentChangeViewModel model module.
 * @module model/AttachmentChangeViewModel
 * @version 7.1.0-TMS-5.6
 */
declare class AttachmentChangeViewModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, size: any): void;
    /**
     * Constructs a <code>AttachmentChangeViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttachmentChangeViewModel} obj Optional instance to populate.
     * @return {module:model/AttachmentChangeViewModel} The populated <code>AttachmentChangeViewModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AttachmentChangeViewModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AttachmentChangeViewModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AttachmentChangeViewModel</code>.
     * @alias module:model/AttachmentChangeViewModel
     * @param id {String}
     * @param size {Number}
     */
    constructor(id: string, size: number);
    id: any;
    name: any;
    type: any;
    size: any;
}
declare namespace AttachmentChangeViewModel {
    let RequiredProperties: string[];
}
