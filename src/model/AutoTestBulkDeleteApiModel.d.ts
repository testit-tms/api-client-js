export default AutoTestBulkDeleteApiModel;
/**
 * The AutoTestBulkDeleteApiModel model module.
 * @module model/AutoTestBulkDeleteApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class AutoTestBulkDeleteApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, autoTestSelect: any): void;
    /**
     * Constructs a <code>AutoTestBulkDeleteApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoTestBulkDeleteApiModel} obj Optional instance to populate.
     * @return {module:model/AutoTestBulkDeleteApiModel} The populated <code>AutoTestBulkDeleteApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AutoTestBulkDeleteApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutoTestBulkDeleteApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AutoTestBulkDeleteApiModel</code>.
     * @alias module:model/AutoTestBulkDeleteApiModel
     * @param autoTestSelect {module:model/AutoTestSelectModel}
     */
    constructor(autoTestSelect: any);
    autoTestSelect: any;
}
declare namespace AutoTestBulkDeleteApiModel {
    let RequiredProperties: string[];
}
