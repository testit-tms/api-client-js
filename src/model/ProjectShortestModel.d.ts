export default ProjectShortestModel;
/**
 * The ProjectShortestModel model module.
 * @module model/ProjectShortestModel
 * @version 7.1.0
 */
declare class ProjectShortestModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, isDeleted: any, globalId: any, name: any, type: any): void;
    /**
     * Constructs a <code>ProjectShortestModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectShortestModel} obj Optional instance to populate.
     * @return {module:model/ProjectShortestModel} The populated <code>ProjectShortestModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ProjectShortestModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProjectShortestModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ProjectShortestModel</code>.
     * @alias module:model/ProjectShortestModel
     * @param id {String} Unique ID of project
     * @param isDeleted {Boolean} Indicates whether the project is deleted
     * @param globalId {Number} Global ID of project
     * @param name {String} Name of project
     * @param type {module:model/ProjectTypeModel} Type of the project
     */
    constructor(id: string, isDeleted: boolean, globalId: number, name: string, type: any);
    id: any;
    isDeleted: any;
    globalId: any;
    name: any;
    type: any;
}
declare namespace ProjectShortestModel {
    let RequiredProperties: string[];
}
