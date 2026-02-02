export default ExternalIssueApiFieldSuggestionReply;
/**
 * The ExternalIssueApiFieldSuggestionReply model module.
 * @module model/ExternalIssueApiFieldSuggestionReply
 * @version 7.1.0
 */
declare class ExternalIssueApiFieldSuggestionReply {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, data: any, totalCount: any): void;
    /**
     * Constructs a <code>ExternalIssueApiFieldSuggestionReply</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExternalIssueApiFieldSuggestionReply} obj Optional instance to populate.
     * @return {module:model/ExternalIssueApiFieldSuggestionReply} The populated <code>ExternalIssueApiFieldSuggestionReply</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ExternalIssueApiFieldSuggestionReply</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExternalIssueApiFieldSuggestionReply</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ExternalIssueApiFieldSuggestionReply</code>.
     * @alias module:model/ExternalIssueApiFieldSuggestionReply
     * @param data {Array.<module:model/ExternalIssueApiFieldSuggestion>}
     * @param totalCount {Number}
     */
    constructor(data: Array<NodeModule>, totalCount: number);
    data: any;
    totalCount: any;
}
declare namespace ExternalIssueApiFieldSuggestionReply {
    let RequiredProperties: string[];
}
