export default ExternalIssueApiFieldSuggestion;
/**
 * The ExternalIssueApiFieldSuggestion model module.
 * @module model/ExternalIssueApiFieldSuggestion
 * @version 7.1.0-TMS-5.6
 */
declare class ExternalIssueApiFieldSuggestion {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, value: any, externalService: any): void;
    /**
     * Constructs a <code>ExternalIssueApiFieldSuggestion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExternalIssueApiFieldSuggestion} obj Optional instance to populate.
     * @return {module:model/ExternalIssueApiFieldSuggestion} The populated <code>ExternalIssueApiFieldSuggestion</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ExternalIssueApiFieldSuggestion</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExternalIssueApiFieldSuggestion</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ExternalIssueApiFieldSuggestion</code>.
     * @alias module:model/ExternalIssueApiFieldSuggestion
     * @param value {String} Value of the external issue field
     * @param externalService {module:model/ExternalIssueExternalServiceApiResult} Associated external service with this value
     */
    constructor(value: string, externalService: any);
    value: any;
    externalService: any;
}
declare namespace ExternalIssueApiFieldSuggestion {
    let RequiredProperties: string[];
}
