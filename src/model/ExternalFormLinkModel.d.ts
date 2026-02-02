export default ExternalFormLinkModel;
/**
 * The ExternalFormLinkModel model module.
 * @module model/ExternalFormLinkModel
 * @version 7.1.0-TMS-5.6
 */
declare class ExternalFormLinkModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, url: any): void;
    /**
     * Constructs a <code>ExternalFormLinkModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExternalFormLinkModel} obj Optional instance to populate.
     * @return {module:model/ExternalFormLinkModel} The populated <code>ExternalFormLinkModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ExternalFormLinkModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExternalFormLinkModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ExternalFormLinkModel</code>.
     * @alias module:model/ExternalFormLinkModel
     * @param name {String}
     * @param url {String}
     */
    constructor(name: string, url: string);
    name: any;
    url: any;
}
declare namespace ExternalFormLinkModel {
    let RequiredProperties: string[];
}
