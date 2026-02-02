export default ProjectFailureCategoryApiResult;
/**
 * The ProjectFailureCategoryApiResult model module.
 * @module model/ProjectFailureCategoryApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class ProjectFailureCategoryApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, failureCategory: any, createdDate: any, createdById: any, projectsCount: any, failureCategoryId: any, regexCount: any): void;
    /**
     * Constructs a <code>ProjectFailureCategoryApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectFailureCategoryApiResult} obj Optional instance to populate.
     * @return {module:model/ProjectFailureCategoryApiResult} The populated <code>ProjectFailureCategoryApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ProjectFailureCategoryApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProjectFailureCategoryApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ProjectFailureCategoryApiResult</code>.
     * @alias module:model/ProjectFailureCategoryApiResult
     * @param id {String} Failure category identifier
     * @param failureCategory {module:model/FailureCategory} Category type
     * @param createdDate {Date} Failure category creation date
     * @param createdById {String} Failure category creator identifier
     * @param projectsCount {Number} Projects relations count
     * @param failureCategoryId {Number} Category type index
     * @param regexCount {Number} Regexes count
     */
    constructor(id: string, failureCategory: any, createdDate: Date, createdById: string, projectsCount: number, failureCategoryId: number, regexCount: number);
    id: any;
    name: any;
    failureCategory: any;
    createdDate: any;
    createdById: any;
    modifiedDate: any;
    modifiedById: any;
    projectsCount: any;
    failureCategoryId: any;
    regexCount: any;
}
declare namespace ProjectFailureCategoryApiResult {
    let RequiredProperties: string[];
}
