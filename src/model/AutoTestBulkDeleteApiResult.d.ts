export default AutoTestBulkDeleteApiResult;
/**
 * The AutoTestBulkDeleteApiResult model module.
 * @module model/AutoTestBulkDeleteApiResult
 * @version 7.1.0
 */
declare class AutoTestBulkDeleteApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, deletedCount: any, inProgressCount: any): void;
    /**
     * Constructs a <code>AutoTestBulkDeleteApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoTestBulkDeleteApiResult} obj Optional instance to populate.
     * @return {module:model/AutoTestBulkDeleteApiResult} The populated <code>AutoTestBulkDeleteApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AutoTestBulkDeleteApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutoTestBulkDeleteApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AutoTestBulkDeleteApiResult</code>.
     * @alias module:model/AutoTestBulkDeleteApiResult
     * @param deletedCount {Number}
     * @param inProgressCount {Number}
     */
    constructor(deletedCount: number, inProgressCount: number);
    deletedCount: any;
    inProgressCount: any;
}
declare namespace AutoTestBulkDeleteApiResult {
    let RequiredProperties: string[];
}
