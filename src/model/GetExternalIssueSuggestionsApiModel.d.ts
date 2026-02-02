export default GetExternalIssueSuggestionsApiModel;
/**
 * The GetExternalIssueSuggestionsApiModel model module.
 * @module model/GetExternalIssueSuggestionsApiModel
 * @version 7.1.0
 */
declare class GetExternalIssueSuggestionsApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, field: any): void;
    /**
     * Constructs a <code>GetExternalIssueSuggestionsApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetExternalIssueSuggestionsApiModel} obj Optional instance to populate.
     * @return {module:model/GetExternalIssueSuggestionsApiModel} The populated <code>GetExternalIssueSuggestionsApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>GetExternalIssueSuggestionsApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetExternalIssueSuggestionsApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>GetExternalIssueSuggestionsApiModel</code>.
     * @alias module:model/GetExternalIssueSuggestionsApiModel
     * @param field {module:model/ExternalIssueApiField} Field of external issue metadata to get
     */
    constructor(field: any);
    field: any;
    projectIds: any;
    inquiry: any;
}
declare namespace GetExternalIssueSuggestionsApiModel {
    let RequiredProperties: string[];
}
