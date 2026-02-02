export default CreateProjectFailureCategoryApiModel;
/**
 * The CreateProjectFailureCategoryApiModel model module.
 * @module model/CreateProjectFailureCategoryApiModel
 * @version 7.1.0
 */
declare class CreateProjectFailureCategoryApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, failureCategory: any): void;
    /**
     * Constructs a <code>CreateProjectFailureCategoryApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateProjectFailureCategoryApiModel} obj Optional instance to populate.
     * @return {module:model/CreateProjectFailureCategoryApiModel} The populated <code>CreateProjectFailureCategoryApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>CreateProjectFailureCategoryApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateProjectFailureCategoryApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>CreateProjectFailureCategoryApiModel</code>.
     * @alias module:model/CreateProjectFailureCategoryApiModel
     * @param name {String} Failure category name
     * @param failureCategory {module:model/FailureCategory} Category type
     */
    constructor(name: string, failureCategory: any);
    name: any;
    failureCategory: any;
    failureClassRegexes: any;
}
declare namespace CreateProjectFailureCategoryApiModel {
    let RequiredProperties: string[];
}
