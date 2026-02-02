export default UpdateFailureClassRegexApiModel;
/**
 * The UpdateFailureClassRegexApiModel model module.
 * @module model/UpdateFailureClassRegexApiModel
 * @version 7.1.0
 */
declare class UpdateFailureClassRegexApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, regexText: any): void;
    /**
     * Constructs a <code>UpdateFailureClassRegexApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateFailureClassRegexApiModel} obj Optional instance to populate.
     * @return {module:model/UpdateFailureClassRegexApiModel} The populated <code>UpdateFailureClassRegexApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>UpdateFailureClassRegexApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateFailureClassRegexApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>UpdateFailureClassRegexApiModel</code>.
     * @alias module:model/UpdateFailureClassRegexApiModel
     * @param id {String} Regex unique identifier
     * @param regexText {String} Regex value
     */
    constructor(id: string, regexText: string);
    id: any;
    regexText: any;
}
declare namespace UpdateFailureClassRegexApiModel {
    let RequiredProperties: string[];
}
