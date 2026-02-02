export default Page;
/**
 * The Page model module.
 * @module model/Page
 * @version 7.1.0
 */
declare class Page {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, skip: any, take: any): void;
    /**
     * Constructs a <code>Page</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Page} obj Optional instance to populate.
     * @return {module:model/Page} The populated <code>Page</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>Page</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Page</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>Page</code>.
     * @alias module:model/Page
     * @param skip {Number}
     * @param take {Number}
     */
    constructor(skip: number, take: number);
    skip: any;
    take: any;
}
declare namespace Page {
    let RequiredProperties: string[];
}
