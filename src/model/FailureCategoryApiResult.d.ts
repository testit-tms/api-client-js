export default FailureCategoryApiResult;
/**
 * The FailureCategoryApiResult model module.
 * @module model/FailureCategoryApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class FailureCategoryApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, isDeleted: any, failureCategory: any, createdDate: any, createdById: any, projects: any, failureClassRegexes: any): void;
    /**
     * Constructs a <code>FailureCategoryApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FailureCategoryApiResult} obj Optional instance to populate.
     * @return {module:model/FailureCategoryApiResult} The populated <code>FailureCategoryApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>FailureCategoryApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FailureCategoryApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>FailureCategoryApiResult</code>.
     * @alias module:model/FailureCategoryApiResult
     * @param id {String} Failure category identifier
     * @param isDeleted {Boolean} Indicates if the entity is deleted
     * @param failureCategory {module:model/FailureCategory} Category type
     * @param createdDate {Date} Failure category creation date
     * @param createdById {String} Failure category creator identifier
     * @param projects {Array.<module:model/ProjectNameApiResult>} Projects names
     * @param failureClassRegexes {Array.<module:model/FailureClassRegexApiResult>} Failure category regexes
     */
    constructor(id: string, isDeleted: boolean, failureCategory: any, createdDate: Date, createdById: string, projects: Array<NodeModule>, failureClassRegexes: Array<NodeModule>);
    id: any;
    name: any;
    isDeleted: any;
    failureCategory: any;
    createdDate: any;
    createdById: any;
    modifiedDate: any;
    modifiedById: any;
    projects: any;
    failureClassRegexes: any;
}
declare namespace FailureCategoryApiResult {
    let RequiredProperties: string[];
}
