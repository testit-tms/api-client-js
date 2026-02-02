export default ProjectShortApiResult;
/**
 * The ProjectShortApiResult model module.
 * @module model/ProjectShortApiResult
 * @version 7.1.0
 */
declare class ProjectShortApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, isDeleted: any, globalId: any, name: any, type: any, isFavorite: any): void;
    /**
     * Constructs a <code>ProjectShortApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectShortApiResult} obj Optional instance to populate.
     * @return {module:model/ProjectShortApiResult} The populated <code>ProjectShortApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ProjectShortApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProjectShortApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ProjectShortApiResult</code>.
     * @alias module:model/ProjectShortApiResult
     * @param id {String} Unique ID of project
     * @param isDeleted {Boolean} Indicates whether the project is deleted
     * @param globalId {Number} Global ID of project
     * @param name {String} Name of project
     * @param type {module:model/ProjectType} Type of the project
     * @param isFavorite {Boolean} Indicates if the project is marked as favorite
     */
    constructor(id: string, isDeleted: boolean, globalId: number, name: string, type: any, isFavorite: boolean);
    id: any;
    isDeleted: any;
    globalId: any;
    name: any;
    type: any;
    isFavorite: any;
}
declare namespace ProjectShortApiResult {
    let RequiredProperties: string[];
}
