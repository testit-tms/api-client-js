export default ExternalIssueApiResult;
/**
 * The ExternalIssueApiResult model module.
 * @module model/ExternalIssueApiResult
 * @version 7.1.0
 */
declare class ExternalIssueApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, externalId: any, url: any, metadata: any): void;
    /**
     * Constructs a <code>ExternalIssueApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExternalIssueApiResult} obj Optional instance to populate.
     * @return {module:model/ExternalIssueApiResult} The populated <code>ExternalIssueApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ExternalIssueApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExternalIssueApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ExternalIssueApiResult</code>.
     * @alias module:model/ExternalIssueApiResult
     * @param id {String} Identiief of external issue
     * @param externalId {String} Identifier of external issue in external service
     * @param url {String} Url of external issue
     * @param metadata {module:model/ExternalIssueApiMetadata} Metadata of external issue from external service
     */
    constructor(id: string, externalId: string, url: string, metadata: any);
    id: any;
    externalId: any;
    url: any;
    metadata: any;
}
declare namespace ExternalIssueApiResult {
    let RequiredProperties: string[];
}
