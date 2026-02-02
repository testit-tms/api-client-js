export default ExternalIssueApiMetadata;
/**
 * The ExternalIssueApiMetadata model module.
 * @module model/ExternalIssueApiMetadata
 * @version 7.1.0-TMS-5.6
 */
declare class ExternalIssueApiMetadata {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, title: any): void;
    /**
     * Constructs a <code>ExternalIssueApiMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExternalIssueApiMetadata} obj Optional instance to populate.
     * @return {module:model/ExternalIssueApiMetadata} The populated <code>ExternalIssueApiMetadata</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ExternalIssueApiMetadata</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExternalIssueApiMetadata</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ExternalIssueApiMetadata</code>.
     * @alias module:model/ExternalIssueApiMetadata
     * @param id {String} Identifier of external issue in external service
     * @param title {String} Title of external issue in external service
     */
    constructor(id: string, title: string);
    id: any;
    title: any;
    code: any;
    description: any;
    status: any;
    assignee: any;
    type: any;
    priority: any;
}
declare namespace ExternalIssueApiMetadata {
    let RequiredProperties: string[];
}
