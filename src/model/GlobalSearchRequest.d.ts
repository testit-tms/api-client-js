export default GlobalSearchRequest;
/**
 * The GlobalSearchRequest model module.
 * @module model/GlobalSearchRequest
 * @version 7.1.0
 */
declare class GlobalSearchRequest {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, query: any, take: any, skip: any): void;
    /**
     * Constructs a <code>GlobalSearchRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GlobalSearchRequest} obj Optional instance to populate.
     * @return {module:model/GlobalSearchRequest} The populated <code>GlobalSearchRequest</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>GlobalSearchRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GlobalSearchRequest</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>GlobalSearchRequest</code>.
     * @alias module:model/GlobalSearchRequest
     * @param query {String}
     * @param take {Number}
     * @param skip {Number}
     */
    constructor(query: string, take: number, skip: number);
    query: any;
    resourceType: any;
    take: any;
    skip: any;
}
declare namespace GlobalSearchRequest {
    let RequiredProperties: string[];
}
