export default UpdateMultipleLinksApiModel;
/**
 * The UpdateMultipleLinksApiModel model module.
 * @module model/UpdateMultipleLinksApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class UpdateMultipleLinksApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, action: any): void;
    /**
     * Constructs a <code>UpdateMultipleLinksApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateMultipleLinksApiModel} obj Optional instance to populate.
     * @return {module:model/UpdateMultipleLinksApiModel} The populated <code>UpdateMultipleLinksApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>UpdateMultipleLinksApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateMultipleLinksApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>UpdateMultipleLinksApiModel</code>.
     * @alias module:model/UpdateMultipleLinksApiModel
     * @param action {module:model/ActionUpdate}
     */
    constructor(action: any);
    action: any;
    links: any;
}
declare namespace UpdateMultipleLinksApiModel {
    let RequiredProperties: string[];
}
