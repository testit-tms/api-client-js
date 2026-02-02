export default UpdateTagApiModel;
/**
 * The UpdateTagApiModel model module.
 * @module model/UpdateTagApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class UpdateTagApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any): void;
    /**
     * Constructs a <code>UpdateTagApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateTagApiModel} obj Optional instance to populate.
     * @return {module:model/UpdateTagApiModel} The populated <code>UpdateTagApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>UpdateTagApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateTagApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>UpdateTagApiModel</code>.
     * @alias module:model/UpdateTagApiModel
     * @param name {String} Name of the tag
     */
    constructor(name: string);
    name: any;
}
declare namespace UpdateTagApiModel {
    let RequiredProperties: string[];
}
