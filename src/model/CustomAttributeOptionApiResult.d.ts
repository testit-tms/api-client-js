export default CustomAttributeOptionApiResult;
/**
 * The CustomAttributeOptionApiResult model module.
 * @module model/CustomAttributeOptionApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class CustomAttributeOptionApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, isDeleted: any, isDefault: any): void;
    /**
     * Constructs a <code>CustomAttributeOptionApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomAttributeOptionApiResult} obj Optional instance to populate.
     * @return {module:model/CustomAttributeOptionApiResult} The populated <code>CustomAttributeOptionApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>CustomAttributeOptionApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomAttributeOptionApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>CustomAttributeOptionApiResult</code>.
     * @alias module:model/CustomAttributeOptionApiResult
     * @param id {String} Unique ID of the attribute option
     * @param isDeleted {Boolean} Indicates if the attributes option is deleted
     * @param isDefault {Boolean} Indicates if the attribute option is used by default
     */
    constructor(id: string, isDeleted: boolean, isDefault: boolean);
    id: any;
    isDeleted: any;
    value: any;
    isDefault: any;
}
declare namespace CustomAttributeOptionApiResult {
    let RequiredProperties: string[];
}
