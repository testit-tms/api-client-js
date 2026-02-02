export default UpdateFailureCategoryApiModel;
/**
 * The UpdateFailureCategoryApiModel model module.
 * @module model/UpdateFailureCategoryApiModel
 * @version 7.1.0
 */
declare class UpdateFailureCategoryApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, name: any, failureCategory: any): void;
    /**
     * Constructs a <code>UpdateFailureCategoryApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateFailureCategoryApiModel} obj Optional instance to populate.
     * @return {module:model/UpdateFailureCategoryApiModel} The populated <code>UpdateFailureCategoryApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>UpdateFailureCategoryApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateFailureCategoryApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>UpdateFailureCategoryApiModel</code>.
     * @alias module:model/UpdateFailureCategoryApiModel
     * @param id {String} Failure category identifier
     * @param name {String} Failure category name
     * @param failureCategory {module:model/FailureCategory} Category type
     */
    constructor(id: string, name: string, failureCategory: any);
    id: any;
    name: any;
    failureCategory: any;
    failureClassRegexes: any;
    projectIds: any;
}
declare namespace UpdateFailureCategoryApiModel {
    let RequiredProperties: string[];
}
