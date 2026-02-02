export default LinkShort;
/**
 * The LinkShort model module.
 * @module model/LinkShort
 * @version 7.1.0
 */
declare class LinkShort {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, url: any): void;
    /**
     * Constructs a <code>LinkShort</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkShort} obj Optional instance to populate.
     * @return {module:model/LinkShort} The populated <code>LinkShort</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>LinkShort</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LinkShort</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>LinkShort</code>.
     * @alias module:model/LinkShort
     * @param name {String}
     * @param url {String}
     */
    constructor(name: string, url: string);
    name: any;
    url: any;
}
declare namespace LinkShort {
    let RequiredProperties: string[];
}
