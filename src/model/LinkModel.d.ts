export default LinkModel;
/**
 * The LinkModel model module.
 * @module model/LinkModel
 * @version 7.1.0
 */
declare class LinkModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, url: any, hasInfo: any): void;
    /**
     * Constructs a <code>LinkModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkModel} obj Optional instance to populate.
     * @return {module:model/LinkModel} The populated <code>LinkModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>LinkModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LinkModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>LinkModel</code>.
     * @alias module:model/LinkModel
     * @param url {String} Address can be specified without protocol, but necessarily with the domain.
     * @param hasInfo {Boolean}
     */
    constructor(url: string, hasInfo: boolean);
    id: any;
    title: any;
    url: any;
    description: any;
    type: any;
    hasInfo: any;
}
declare namespace LinkModel {
    let RequiredProperties: string[];
}
