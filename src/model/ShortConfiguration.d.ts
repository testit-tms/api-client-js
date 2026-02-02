export default ShortConfiguration;
/**
 * The ShortConfiguration model module.
 * @module model/ShortConfiguration
 * @version 7.1.0
 */
declare class ShortConfiguration {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, name: any): void;
    /**
     * Constructs a <code>ShortConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ShortConfiguration} obj Optional instance to populate.
     * @return {module:model/ShortConfiguration} The populated <code>ShortConfiguration</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ShortConfiguration</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ShortConfiguration</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ShortConfiguration</code>.
     * @alias module:model/ShortConfiguration
     * @param id {String}
     * @param name {String}
     */
    constructor(id: string, name: string);
    id: any;
    name: any;
}
declare namespace ShortConfiguration {
    let RequiredProperties: string[];
}
