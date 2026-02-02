export default Int64ChangedFieldViewModel;
/**
 * The Int64ChangedFieldViewModel model module.
 * @module model/Int64ChangedFieldViewModel
 * @version 7.1.0
 */
declare class Int64ChangedFieldViewModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, oldValue: any, newValue: any): void;
    /**
     * Constructs a <code>Int64ChangedFieldViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Int64ChangedFieldViewModel} obj Optional instance to populate.
     * @return {module:model/Int64ChangedFieldViewModel} The populated <code>Int64ChangedFieldViewModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>Int64ChangedFieldViewModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Int64ChangedFieldViewModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>Int64ChangedFieldViewModel</code>.
     * @alias module:model/Int64ChangedFieldViewModel
     * @param oldValue {Number}
     * @param newValue {Number}
     */
    constructor(oldValue: number, newValue: number);
    oldValue: any;
    newValue: any;
}
declare namespace Int64ChangedFieldViewModel {
    let RequiredProperties: string[];
}
