export default LinkShortApiResult;
/**
 * The LinkShortApiResult model module.
 * @module model/LinkShortApiResult
 * @version 7.1.0
 */
declare class LinkShortApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, title: any, url: any, type: any): void;
    /**
     * Constructs a <code>LinkShortApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkShortApiResult} obj Optional instance to populate.
     * @return {module:model/LinkShortApiResult} The populated <code>LinkShortApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>LinkShortApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LinkShortApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>LinkShortApiResult</code>.
     * @alias module:model/LinkShortApiResult
     * @param id {String}
     * @param title {String}
     * @param url {String}
     * @param type {String}
     */
    constructor(id: string, title: string, url: string, type: string);
    id: any;
    title: any;
    url: any;
    type: any;
}
declare namespace LinkShortApiResult {
    let RequiredProperties: string[];
}
