export default AutoTestResultReasonsCountModel;
/**
 * The AutoTestResultReasonsCountModel model module.
 * @module model/AutoTestResultReasonsCountModel
 * @version 7.1.0
 */
declare class AutoTestResultReasonsCountModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, data: any): void;
    /**
     * Constructs a <code>AutoTestResultReasonsCountModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoTestResultReasonsCountModel} obj Optional instance to populate.
     * @return {module:model/AutoTestResultReasonsCountModel} The populated <code>AutoTestResultReasonsCountModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AutoTestResultReasonsCountModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutoTestResultReasonsCountModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AutoTestResultReasonsCountModel</code>.
     * @alias module:model/AutoTestResultReasonsCountModel
     * @param data {Array.<module:model/AutoTestResultReasonsCountItemModel>}
     */
    constructor(data: Array<NodeModule>);
    data: any;
}
declare namespace AutoTestResultReasonsCountModel {
    let RequiredProperties: string[];
}
