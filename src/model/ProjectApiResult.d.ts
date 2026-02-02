export default ProjectApiResult;
/**
 * The ProjectApiResult model module.
 * @module model/ProjectApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class ProjectApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, name: any, isFavorite: any, isDeleted: any, createdDate: any, createdById: any, globalId: any, type: any, workflowId: any): void;
    /**
     * Constructs a <code>ProjectApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectApiResult} obj Optional instance to populate.
     * @return {module:model/ProjectApiResult} The populated <code>ProjectApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ProjectApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProjectApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ProjectApiResult</code>.
     * @alias module:model/ProjectApiResult
     * @param id {String} Unique ID of the project
     * @param name {String} Name of the project
     * @param isFavorite {Boolean} Indicates if the project is marked as favorite
     * @param isDeleted {Boolean} Indicates if the project is deleted
     * @param createdDate {Date} Creation date of the project
     * @param createdById {String} Unique ID of the project creator
     * @param globalId {Number} Global ID of the project
     * @param type {module:model/ProjectType} Type of the project
     * @param workflowId {String} ID of the workflow used in project
     */
    constructor(id: string, name: string, isFavorite: boolean, isDeleted: boolean, createdDate: Date, createdById: string, globalId: number, type: any, workflowId: string);
    id: any;
    description: any;
    name: any;
    isFavorite: any;
    attributesScheme: any;
    testPlansAttributesScheme: any;
    testCasesCount: any;
    sharedStepsCount: any;
    checkListsCount: any;
    autoTestsCount: any;
    isDeleted: any;
    createdDate: any;
    modifiedDate: any;
    createdById: any;
    modifiedById: any;
    globalId: any;
    type: any;
    isFlakyAuto: any;
    workflowId: any;
}
declare namespace ProjectApiResult {
    let RequiredProperties: string[];
}
