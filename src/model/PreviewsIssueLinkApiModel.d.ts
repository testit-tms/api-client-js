export default PreviewsIssueLinkApiModel;
/**
 * The PreviewsIssueLinkApiModel model module.
 * @module model/PreviewsIssueLinkApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class PreviewsIssueLinkApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, title: any, url: any): void;
    /**
     * Constructs a <code>PreviewsIssueLinkApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PreviewsIssueLinkApiModel} obj Optional instance to populate.
     * @return {module:model/PreviewsIssueLinkApiModel} The populated <code>PreviewsIssueLinkApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>PreviewsIssueLinkApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PreviewsIssueLinkApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>PreviewsIssueLinkApiModel</code>.
     * @alias module:model/PreviewsIssueLinkApiModel
     * @param title {String}
     * @param url {String}
     */
    constructor(title: string, url: string);
    title: any;
    url: any;
}
declare namespace PreviewsIssueLinkApiModel {
    let RequiredProperties: string[];
}
