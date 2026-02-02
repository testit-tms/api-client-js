export default GlobalSearchItemResult;
/**
 * The GlobalSearchItemResult model module.
 * @module model/GlobalSearchItemResult
 * @version 7.1.0
 */
declare class GlobalSearchItemResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, resourceType: any, resourceId: any, name: any, projectGlobalId: any): void;
    /**
     * Constructs a <code>GlobalSearchItemResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GlobalSearchItemResult} obj Optional instance to populate.
     * @return {module:model/GlobalSearchItemResult} The populated <code>GlobalSearchItemResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>GlobalSearchItemResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GlobalSearchItemResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>GlobalSearchItemResult</code>.
     * @alias module:model/GlobalSearchItemResult
     * @param resourceType {String}
     * @param resourceId {String}
     * @param name {String}
     * @param projectGlobalId {Number}
     */
    constructor(resourceType: string, resourceId: string, name: string, projectGlobalId: number);
    resourceType: any;
    resourceId: any;
    globalId: any;
    name: any;
    projectGlobalId: any;
}
declare namespace GlobalSearchItemResult {
    let RequiredProperties: string[];
}
