export default GuidChangedFieldViewModel;
/**
 * The GuidChangedFieldViewModel model module.
 * @module model/GuidChangedFieldViewModel
 * @version 7.1.0
 */
declare class GuidChangedFieldViewModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, oldValue: any, newValue: any): void;
    /**
     * Constructs a <code>GuidChangedFieldViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GuidChangedFieldViewModel} obj Optional instance to populate.
     * @return {module:model/GuidChangedFieldViewModel} The populated <code>GuidChangedFieldViewModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>GuidChangedFieldViewModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GuidChangedFieldViewModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>GuidChangedFieldViewModel</code>.
     * @alias module:model/GuidChangedFieldViewModel
     * @param oldValue {String}
     * @param newValue {String}
     */
    constructor(oldValue: string, newValue: string);
    oldValue: any;
    newValue: any;
}
declare namespace GuidChangedFieldViewModel {
    let RequiredProperties: string[];
}
