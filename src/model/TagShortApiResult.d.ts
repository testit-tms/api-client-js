export default TagShortApiResult;
/**
 * The TagShortApiResult model module.
 * @module model/TagShortApiResult
 * @version 7.1.0
 */
declare class TagShortApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any): void;
    /**
     * Constructs a <code>TagShortApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TagShortApiResult} obj Optional instance to populate.
     * @return {module:model/TagShortApiResult} The populated <code>TagShortApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TagShortApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TagShortApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TagShortApiResult</code>.
     * @alias module:model/TagShortApiResult
     * @param name {String} Name of the tag
     */
    constructor(name: string);
    name: any;
}
declare namespace TagShortApiResult {
    let RequiredProperties: string[];
}
