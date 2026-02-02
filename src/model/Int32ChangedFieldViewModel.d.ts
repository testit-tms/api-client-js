export default Int32ChangedFieldViewModel;
/**
 * The Int32ChangedFieldViewModel model module.
 * @module model/Int32ChangedFieldViewModel
 * @version 7.1.0-TMS-5.6
 */
declare class Int32ChangedFieldViewModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, oldValue: any, newValue: any): void;
    /**
     * Constructs a <code>Int32ChangedFieldViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Int32ChangedFieldViewModel} obj Optional instance to populate.
     * @return {module:model/Int32ChangedFieldViewModel} The populated <code>Int32ChangedFieldViewModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>Int32ChangedFieldViewModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Int32ChangedFieldViewModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>Int32ChangedFieldViewModel</code>.
     * @alias module:model/Int32ChangedFieldViewModel
     * @param oldValue {Number}
     * @param newValue {Number}
     */
    constructor(oldValue: number, newValue: number);
    oldValue: any;
    newValue: any;
}
declare namespace Int32ChangedFieldViewModel {
    let RequiredProperties: string[];
}
