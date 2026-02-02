export default LinkShortModel;
/**
 * The LinkShortModel model module.
 * @module model/LinkShortModel
 * @version 7.1.0
 */
declare class LinkShortModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, title: any, url: any): void;
    /**
     * Constructs a <code>LinkShortModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LinkShortModel} obj Optional instance to populate.
     * @return {module:model/LinkShortModel} The populated <code>LinkShortModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>LinkShortModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LinkShortModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>LinkShortModel</code>.
     * @alias module:model/LinkShortModel
     * @param id {String}
     * @param title {String}
     * @param url {String}
     */
    constructor(id: string, title: string, url: string);
    id: any;
    title: any;
    type: any;
    url: any;
}
declare namespace LinkShortModel {
    let RequiredProperties: string[];
}
