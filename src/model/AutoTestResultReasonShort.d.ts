export default AutoTestResultReasonShort;
/**
 * The AutoTestResultReasonShort model module.
 * @module model/AutoTestResultReasonShort
 * @version 7.1.0
 */
declare class AutoTestResultReasonShort {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, failureCategory: any, name: any): void;
    /**
     * Constructs a <code>AutoTestResultReasonShort</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoTestResultReasonShort} obj Optional instance to populate.
     * @return {module:model/AutoTestResultReasonShort} The populated <code>AutoTestResultReasonShort</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AutoTestResultReasonShort</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutoTestResultReasonShort</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AutoTestResultReasonShort</code>.
     * @alias module:model/AutoTestResultReasonShort
     * @param failureCategory {module:model/FailureCategoryModel}
     * @param name {String}
     */
    constructor(failureCategory: any, name: string);
    failureCategory: any;
    name: any;
}
declare namespace AutoTestResultReasonShort {
    let RequiredProperties: string[];
}
