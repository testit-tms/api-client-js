export default FilterModel;
/**
 * The FilterModel model module.
 * @module model/FilterModel
 * @version 7.1.0-TMS-5.6
 */
declare class FilterModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, createdDate: any, createdById: any, projectId: any, name: any, id: any, isDeleted: any): void;
    /**
     * Constructs a <code>FilterModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FilterModel} obj Optional instance to populate.
     * @return {module:model/FilterModel} The populated <code>FilterModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>FilterModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FilterModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>FilterModel</code>.
     * @alias module:model/FilterModel
     * @param createdDate {Date}
     * @param createdById {String}
     * @param projectId {String}
     * @param name {String}
     * @param id {String} Unique ID of the entity
     * @param isDeleted {Boolean} Indicates if the entity is deleted
     */
    constructor(createdDate: Date, createdById: string, projectId: string, name: string, id: string, isDeleted: boolean);
    createdDate: any;
    modifiedDate: any;
    createdById: any;
    modifiedById: any;
    data: any;
    projectId: any;
    fieldsToShow: any;
    name: any;
    id: any;
    isDeleted: any;
}
declare namespace FilterModel {
    let RequiredProperties: string[];
}
