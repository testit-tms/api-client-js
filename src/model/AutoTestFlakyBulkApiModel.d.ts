export default AutoTestFlakyBulkApiModel;
/**
 * The AutoTestFlakyBulkApiModel model module.
 * @module model/AutoTestFlakyBulkApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class AutoTestFlakyBulkApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, autoTestSelect: any, value: any): void;
    /**
     * Constructs a <code>AutoTestFlakyBulkApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoTestFlakyBulkApiModel} obj Optional instance to populate.
     * @return {module:model/AutoTestFlakyBulkApiModel} The populated <code>AutoTestFlakyBulkApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AutoTestFlakyBulkApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutoTestFlakyBulkApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AutoTestFlakyBulkApiModel</code>.
     * @alias module:model/AutoTestFlakyBulkApiModel
     * @param autoTestSelect {module:model/AutoTestSelectApiModel}
     * @param value {Boolean} Are autotests flaky
     */
    constructor(autoTestSelect: any, value: boolean);
    autoTestSelect: any;
    value: any;
}
declare namespace AutoTestFlakyBulkApiModel {
    let RequiredProperties: string[];
}
