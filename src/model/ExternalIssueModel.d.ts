export default ExternalIssueModel;
/**
 * The ExternalIssueModel model module.
 * @module model/ExternalIssueModel
 * @version 7.1.0-TMS-5.6
 */
declare class ExternalIssueModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, externalId: any, url: any, metadata: any): void;
    /**
     * Constructs a <code>ExternalIssueModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExternalIssueModel} obj Optional instance to populate.
     * @return {module:model/ExternalIssueModel} The populated <code>ExternalIssueModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ExternalIssueModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExternalIssueModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ExternalIssueModel</code>.
     * @alias module:model/ExternalIssueModel
     * @param id {String}
     * @param externalId {String}
     * @param url {String}
     * @param metadata {module:model/ExternalIssueMetadataModel}
     */
    constructor(id: string, externalId: string, url: string, metadata: any);
    id: any;
    externalId: any;
    url: any;
    metadata: any;
}
declare namespace ExternalIssueModel {
    let RequiredProperties: string[];
}
