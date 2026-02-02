export default GlobalSearchResponse;
/**
 * The GlobalSearchResponse model module.
 * @module model/GlobalSearchResponse
 * @version 7.1.0
 */
declare class GlobalSearchResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, results: any, moreResultsAvailable: any, availableResourceTypes: any): void;
    /**
     * Constructs a <code>GlobalSearchResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GlobalSearchResponse} obj Optional instance to populate.
     * @return {module:model/GlobalSearchResponse} The populated <code>GlobalSearchResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>GlobalSearchResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GlobalSearchResponse</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>GlobalSearchResponse</code>.
     * @alias module:model/GlobalSearchResponse
     * @param results {Array.<module:model/GlobalSearchItemResult>}
     * @param moreResultsAvailable {Boolean}
     * @param availableResourceTypes {Array.<String>}
     */
    constructor(results: Array<NodeModule>, moreResultsAvailable: boolean, availableResourceTypes: Array<string>);
    results: any;
    moreResultsAvailable: any;
    availableResourceTypes: any;
}
declare namespace GlobalSearchResponse {
    let RequiredProperties: string[];
}
