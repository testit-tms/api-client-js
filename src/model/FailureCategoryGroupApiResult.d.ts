export default FailureCategoryGroupApiResult;
/**
 * The FailureCategoryGroupApiResult model module.
 * @module model/FailureCategoryGroupApiResult
 * @version 7.1.0
 */
declare class FailureCategoryGroupApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, count: any): void;
    /**
     * Constructs a <code>FailureCategoryGroupApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FailureCategoryGroupApiResult} obj Optional instance to populate.
     * @return {module:model/FailureCategoryGroupApiResult} The populated <code>FailureCategoryGroupApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>FailureCategoryGroupApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FailureCategoryGroupApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>FailureCategoryGroupApiResult</code>.
     * @alias module:model/FailureCategoryGroupApiResult
     * @param count {Number} Group entries count
     */
    constructor(count: number);
    fieldValue: any;
    displayFieldValue: any;
    count: any;
}
declare namespace FailureCategoryGroupApiResult {
    let RequiredProperties: string[];
}
