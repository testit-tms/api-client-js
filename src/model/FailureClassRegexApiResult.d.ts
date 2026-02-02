export default FailureClassRegexApiResult;
/**
 * The FailureClassRegexApiResult model module.
 * @module model/FailureClassRegexApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class FailureClassRegexApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, isDeleted: any, regexText: any, failureClassId: any): void;
    /**
     * Constructs a <code>FailureClassRegexApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FailureClassRegexApiResult} obj Optional instance to populate.
     * @return {module:model/FailureClassRegexApiResult} The populated <code>FailureClassRegexApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>FailureClassRegexApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FailureClassRegexApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>FailureClassRegexApiResult</code>.
     * @alias module:model/FailureClassRegexApiResult
     * @param id {String} Regex unique identifier
     * @param isDeleted {Boolean} Indicates if the entity is deleted
     * @param regexText {String} Regex value
     * @param failureClassId {String} Failure category identifier
     */
    constructor(id: string, isDeleted: boolean, regexText: string, failureClassId: string);
    id: any;
    isDeleted: any;
    regexText: any;
    failureClassId: any;
}
declare namespace FailureClassRegexApiResult {
    let RequiredProperties: string[];
}
