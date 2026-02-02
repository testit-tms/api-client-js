export default BooleanChangedFieldViewModel;
/**
 * The BooleanChangedFieldViewModel model module.
 * @module model/BooleanChangedFieldViewModel
 * @version 7.1.0
 */
declare class BooleanChangedFieldViewModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, oldValue: any, newValue: any): void;
    /**
     * Constructs a <code>BooleanChangedFieldViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BooleanChangedFieldViewModel} obj Optional instance to populate.
     * @return {module:model/BooleanChangedFieldViewModel} The populated <code>BooleanChangedFieldViewModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>BooleanChangedFieldViewModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BooleanChangedFieldViewModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>BooleanChangedFieldViewModel</code>.
     * @alias module:model/BooleanChangedFieldViewModel
     * @param oldValue {Boolean}
     * @param newValue {Boolean}
     */
    constructor(oldValue: boolean, newValue: boolean);
    oldValue: any;
    newValue: any;
}
declare namespace BooleanChangedFieldViewModel {
    let RequiredProperties: string[];
}
