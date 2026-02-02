export default FailureCategoryItemApiResult;
/**
 * The FailureCategoryItemApiResult model module.
 * @module model/FailureCategoryItemApiResult
 * @version 7.1.0
 */
declare class FailureCategoryItemApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, failureCategory: any, createdDate: any, createdById: any, failureCategoryId: any, regexCount: any, projects: any, projectIds: any): void;
    /**
     * Constructs a <code>FailureCategoryItemApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FailureCategoryItemApiResult} obj Optional instance to populate.
     * @return {module:model/FailureCategoryItemApiResult} The populated <code>FailureCategoryItemApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>FailureCategoryItemApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FailureCategoryItemApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>FailureCategoryItemApiResult</code>.
     * @alias module:model/FailureCategoryItemApiResult
     * @param id {String} Failure category identifier
     * @param failureCategory {module:model/FailureCategory} Category type
     * @param createdDate {Date} Failure category creation date
     * @param createdById {String} Failure category creator identifier
     * @param failureCategoryId {Number} Category type index
     * @param regexCount {Number} Regexes count
     * @param projects {Array.<module:model/ProjectNameApiResult>} Projects names
     * @param projectIds {Array.<String>} Projects identifiers
     */
    constructor(id: string, failureCategory: any, createdDate: Date, createdById: string, failureCategoryId: number, regexCount: number, projects: Array<NodeModule>, projectIds: Array<string>);
    id: any;
    name: any;
    failureCategory: any;
    createdDate: any;
    createdById: any;
    modifiedDate: any;
    modifiedById: any;
    failureCategoryId: any;
    regexCount: any;
    projects: any;
    projectIds: any;
}
declare namespace FailureCategoryItemApiResult {
    let RequiredProperties: string[];
}
