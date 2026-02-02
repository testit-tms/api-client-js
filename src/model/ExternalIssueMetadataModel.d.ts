export default ExternalIssueMetadataModel;
/**
 * The ExternalIssueMetadataModel model module.
 * @module model/ExternalIssueMetadataModel
 * @version 7.1.0
 */
declare class ExternalIssueMetadataModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, title: any): void;
    /**
     * Constructs a <code>ExternalIssueMetadataModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExternalIssueMetadataModel} obj Optional instance to populate.
     * @return {module:model/ExternalIssueMetadataModel} The populated <code>ExternalIssueMetadataModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ExternalIssueMetadataModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExternalIssueMetadataModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ExternalIssueMetadataModel</code>.
     * @alias module:model/ExternalIssueMetadataModel
     * @param id {String}
     * @param title {String}
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
declare namespace ExternalIssueMetadataModel {
    let RequiredProperties: string[];
}
