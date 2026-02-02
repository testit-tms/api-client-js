export default ExternalIssueExternalServiceApiResult;
/**
 * The ExternalIssueExternalServiceApiResult model module.
 * @module model/ExternalIssueExternalServiceApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class ExternalIssueExternalServiceApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, name: any): void;
    /**
     * Constructs a <code>ExternalIssueExternalServiceApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExternalIssueExternalServiceApiResult} obj Optional instance to populate.
     * @return {module:model/ExternalIssueExternalServiceApiResult} The populated <code>ExternalIssueExternalServiceApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ExternalIssueExternalServiceApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExternalIssueExternalServiceApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ExternalIssueExternalServiceApiResult</code>.
     * @alias module:model/ExternalIssueExternalServiceApiResult
     * @param id {String} Identifier of external service
     * @param name {String} Name of external service
     */
    constructor(id: string, name: string);
    id: any;
    name: any;
}
declare namespace ExternalIssueExternalServiceApiResult {
    let RequiredProperties: string[];
}
