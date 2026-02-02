export default FailureCategoryGroupItemApiResult;
/**
 * The FailureCategoryGroupItemApiResult model module.
 * @module model/FailureCategoryGroupItemApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class FailureCategoryGroupItemApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, items: any): void;
    /**
     * Constructs a <code>FailureCategoryGroupItemApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FailureCategoryGroupItemApiResult} obj Optional instance to populate.
     * @return {module:model/FailureCategoryGroupItemApiResult} The populated <code>FailureCategoryGroupItemApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>FailureCategoryGroupItemApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FailureCategoryGroupItemApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>FailureCategoryGroupItemApiResult</code>.
     * @alias module:model/FailureCategoryGroupItemApiResult
     * @param items {Array.<module:model/FailureCategoryItemApiResult>} Group data
     */
    constructor(items: Array<NodeModule>);
    group: any;
    items: any;
}
declare namespace FailureCategoryGroupItemApiResult {
    let RequiredProperties: string[];
}
