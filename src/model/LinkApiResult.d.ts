export default LinkApiResult;
/**
 * The LinkApiResult model module.
 * @module model/LinkApiResult
 * @version 7.1.0
 */
declare class LinkApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, url: any, hasInfo: any): void;
    /**
     * Constructs a <code>LinkApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkApiResult} obj Optional instance to populate.
     * @return {module:model/LinkApiResult} The populated <code>LinkApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>LinkApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LinkApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>LinkApiResult</code>.
     * @alias module:model/LinkApiResult
     * @param url {String} Address can be specified without protocol, but necessarily with the domain.
     * @param hasInfo {Boolean} Flag defines if link relates to integrated jira service
     */
    constructor(url: string, hasInfo: boolean);
    id: any;
    title: any;
    url: any;
    description: any;
    type: any;
    hasInfo: any;
}
declare namespace LinkApiResult {
    let RequiredProperties: string[];
}
