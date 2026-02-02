export default FailureCategoryGroupSearchApiModel;
/**
 * The FailureCategoryGroupSearchApiModel model module.
 * @module model/FailureCategoryGroupSearchApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class FailureCategoryGroupSearchApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, inquiry: any): void;
    /**
     * Constructs a <code>FailureCategoryGroupSearchApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FailureCategoryGroupSearchApiModel} obj Optional instance to populate.
     * @return {module:model/FailureCategoryGroupSearchApiModel} The populated <code>FailureCategoryGroupSearchApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>FailureCategoryGroupSearchApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FailureCategoryGroupSearchApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>FailureCategoryGroupSearchApiModel</code>.
     * @alias module:model/FailureCategoryGroupSearchApiModel
     * @param inquiry {module:model/Inquiry} Inquiry details
     */
    constructor(inquiry: any);
    inquiry: any;
    group: any;
}
declare namespace FailureCategoryGroupSearchApiModel {
    let RequiredProperties: string[];
}
