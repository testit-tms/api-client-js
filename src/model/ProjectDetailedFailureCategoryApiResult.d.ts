export default ProjectDetailedFailureCategoryApiResult;
/**
 * The ProjectDetailedFailureCategoryApiResult model module.
 * @module model/ProjectDetailedFailureCategoryApiResult
 * @version 7.1.0
 */
declare class ProjectDetailedFailureCategoryApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, isDeleted: any, failureCategory: any, createdDate: any, createdById: any, failureClassRegexes: any, projectsCount: any): void;
    /**
     * Constructs a <code>ProjectDetailedFailureCategoryApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectDetailedFailureCategoryApiResult} obj Optional instance to populate.
     * @return {module:model/ProjectDetailedFailureCategoryApiResult} The populated <code>ProjectDetailedFailureCategoryApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ProjectDetailedFailureCategoryApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProjectDetailedFailureCategoryApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ProjectDetailedFailureCategoryApiResult</code>.
     * @alias module:model/ProjectDetailedFailureCategoryApiResult
     * @param id {String} Failure category identifier
     * @param isDeleted {Boolean} Indicates if the entity is deleted
     * @param failureCategory {module:model/FailureCategory} Category type
     * @param createdDate {Date} Failure category creation date
     * @param createdById {String} Failure category creator identifier
     * @param failureClassRegexes {Array.<module:model/FailureClassRegexApiResult>} Failure category regexes
     * @param projectsCount {Number} Projects relations count
     */
    constructor(id: string, isDeleted: boolean, failureCategory: any, createdDate: Date, createdById: string, failureClassRegexes: Array<NodeModule>, projectsCount: number);
    id: any;
    name: any;
    isDeleted: any;
    failureCategory: any;
    createdDate: any;
    createdById: any;
    modifiedDate: any;
    modifiedById: any;
    failureClassRegexes: any;
    projectsCount: any;
}
declare namespace ProjectDetailedFailureCategoryApiResult {
    let RequiredProperties: string[];
}
