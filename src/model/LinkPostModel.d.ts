export default LinkPostModel;
/**
 * The LinkPostModel model module.
 * @module model/LinkPostModel
 * @version 7.1.0-TMS-5.6
 */
declare class LinkPostModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, url: any, hasInfo: any): void;
    /**
     * Constructs a <code>LinkPostModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkPostModel} obj Optional instance to populate.
     * @return {module:model/LinkPostModel} The populated <code>LinkPostModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>LinkPostModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LinkPostModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>LinkPostModel</code>.
     * @alias module:model/LinkPostModel
     * @param url {String} Address can be specified without protocol, but necessarily with the domain.
     * @param hasInfo {Boolean}
     */
    constructor(url: string, hasInfo: boolean);
    title: any;
    url: any;
    description: any;
    type: any;
    hasInfo: any;
}
declare namespace LinkPostModel {
    let RequiredProperties: string[];
}
