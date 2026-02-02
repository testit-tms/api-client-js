export default PreviewsIssueLinkApiResult;
/**
 * The PreviewsIssueLinkApiResult model module.
 * @module model/PreviewsIssueLinkApiResult
 * @version 7.1.0
 */
declare class PreviewsIssueLinkApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, title: any, url: any): void;
    /**
     * Constructs a <code>PreviewsIssueLinkApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PreviewsIssueLinkApiResult} obj Optional instance to populate.
     * @return {module:model/PreviewsIssueLinkApiResult} The populated <code>PreviewsIssueLinkApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>PreviewsIssueLinkApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PreviewsIssueLinkApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>PreviewsIssueLinkApiResult</code>.
     * @alias module:model/PreviewsIssueLinkApiResult
     * @param title {String}
     * @param url {String}
     */
    constructor(title: string, url: string);
    title: any;
    url: any;
}
declare namespace PreviewsIssueLinkApiResult {
    let RequiredProperties: string[];
}
