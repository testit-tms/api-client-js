export default AutoTestResultReasonsCountItemModel;
/**
 * The AutoTestResultReasonsCountItemModel model module.
 * @module model/AutoTestResultReasonsCountItemModel
 * @version 7.1.0
 */
declare class AutoTestResultReasonsCountItemModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, failureCategory: any, count: any): void;
    /**
     * Constructs a <code>AutoTestResultReasonsCountItemModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoTestResultReasonsCountItemModel} obj Optional instance to populate.
     * @return {module:model/AutoTestResultReasonsCountItemModel} The populated <code>AutoTestResultReasonsCountItemModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AutoTestResultReasonsCountItemModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutoTestResultReasonsCountItemModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AutoTestResultReasonsCountItemModel</code>.
     * @alias module:model/AutoTestResultReasonsCountItemModel
     * @param failureCategory {module:model/AvailableFailureCategory}
     * @param count {Number}
     */
    constructor(failureCategory: any, count: number);
    failureCategory: any;
    count: any;
}
declare namespace AutoTestResultReasonsCountItemModel {
    let RequiredProperties: string[];
}
