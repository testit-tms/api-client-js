export default BackgroundJobAttachmentModel;
/**
 * The BackgroundJobAttachmentModel model module.
 * @module model/BackgroundJobAttachmentModel
 * @version 7.1.0
 */
declare class BackgroundJobAttachmentModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, name: any, type: any, size: any): void;
    /**
     * Constructs a <code>BackgroundJobAttachmentModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BackgroundJobAttachmentModel} obj Optional instance to populate.
     * @return {module:model/BackgroundJobAttachmentModel} The populated <code>BackgroundJobAttachmentModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>BackgroundJobAttachmentModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BackgroundJobAttachmentModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>BackgroundJobAttachmentModel</code>.
     * @alias module:model/BackgroundJobAttachmentModel
     * @param id {String}
     * @param name {String}
     * @param type {String}
     * @param size {Number}
     */
    constructor(id: string, name: string, type: string, size: number);
    id: any;
    name: any;
    type: any;
    size: any;
}
declare namespace BackgroundJobAttachmentModel {
    let RequiredProperties: string[];
}
