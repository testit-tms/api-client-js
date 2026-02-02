export default BooleanNullableChangedFieldViewModel;
/**
 * The BooleanNullableChangedFieldViewModel model module.
 * @module model/BooleanNullableChangedFieldViewModel
 * @version 7.1.0-TMS-5.6
 */
declare class BooleanNullableChangedFieldViewModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>BooleanNullableChangedFieldViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BooleanNullableChangedFieldViewModel} obj Optional instance to populate.
     * @return {module:model/BooleanNullableChangedFieldViewModel} The populated <code>BooleanNullableChangedFieldViewModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>BooleanNullableChangedFieldViewModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BooleanNullableChangedFieldViewModel</code>.
     */
    static validateJSON(data: any): boolean;
    oldValue: any;
    newValue: any;
}
