export default UpdateLinkApiModel;
/**
 * The UpdateLinkApiModel model module.
 * @module model/UpdateLinkApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class UpdateLinkApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, url: any, hasInfo: any): void;
    /**
     * Constructs a <code>UpdateLinkApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateLinkApiModel} obj Optional instance to populate.
     * @return {module:model/UpdateLinkApiModel} The populated <code>UpdateLinkApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>UpdateLinkApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateLinkApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>UpdateLinkApiModel</code>.
     * @alias module:model/UpdateLinkApiModel
     * @param url {String} Address can be specified without protocol, but necessarily with the domain.
     * @param hasInfo {Boolean} Flag defines if link relates to integrated jira service
     */
    constructor(url: string, hasInfo: boolean);
    id: any;
    title: any;
    url: any;
    description: any;
    type: any;
    hasInfo: any;
}
declare namespace UpdateLinkApiModel {
    let RequiredProperties: string[];
}
