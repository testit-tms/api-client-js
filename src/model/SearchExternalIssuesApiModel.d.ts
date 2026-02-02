export default SearchExternalIssuesApiModel;
/**
 * The SearchExternalIssuesApiModel model module.
 * @module model/SearchExternalIssuesApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class SearchExternalIssuesApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, url: any): void;
    /**
     * Constructs a <code>SearchExternalIssuesApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchExternalIssuesApiModel} obj Optional instance to populate.
     * @return {module:model/SearchExternalIssuesApiModel} The populated <code>SearchExternalIssuesApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>SearchExternalIssuesApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SearchExternalIssuesApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>SearchExternalIssuesApiModel</code>.
     * @alias module:model/SearchExternalIssuesApiModel
     * @param url {String} Url of external issue
     */
    constructor(url: string);
    url: any;
}
declare namespace SearchExternalIssuesApiModel {
    let RequiredProperties: string[];
}
