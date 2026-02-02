export default ProjectsFilterModel;
/**
 * The ProjectsFilterModel model module.
 * @module model/ProjectsFilterModel
 * @version 7.1.0-TMS-5.6
 */
declare class ProjectsFilterModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ProjectsFilterModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectsFilterModel} obj Optional instance to populate.
     * @return {module:model/ProjectsFilterModel} The populated <code>ProjectsFilterModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ProjectsFilterModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProjectsFilterModel</code>.
     */
    static validateJSON(data: any): boolean;
    name: any;
    isFavorite: any;
    isDeleted: any;
    testCasesCount: any;
    checklistsCount: any;
    sharedStepsCount: any;
    autotestsCount: any;
    globalIds: any;
    createdDate: any;
    createdByIds: any;
    types: any;
}
