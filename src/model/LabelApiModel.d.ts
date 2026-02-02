export default LabelApiModel;
/**
 * The LabelApiModel model module.
 * @module model/LabelApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class LabelApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any): void;
    /**
     * Constructs a <code>LabelApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LabelApiModel} obj Optional instance to populate.
     * @return {module:model/LabelApiModel} The populated <code>LabelApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>LabelApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LabelApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>LabelApiModel</code>.
     * @alias module:model/LabelApiModel
     * @param name {String} Name of the label
     */
    constructor(name: string);
    name: any;
}
declare namespace LabelApiModel {
    let RequiredProperties: string[];
}
