export default SectionModel;
/**
 * The SectionModel model module.
 * @module model/SectionModel
 * @version 7.1.0-TMS-5.6
 */
declare class SectionModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, isDeleted: any, id: any, createdDate: any, createdById: any, name: any): void;
    /**
     * Constructs a <code>SectionModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SectionModel} obj Optional instance to populate.
     * @return {module:model/SectionModel} The populated <code>SectionModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>SectionModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SectionModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>SectionModel</code>.
     * @alias module:model/SectionModel
     * @param isDeleted {Boolean}
     * @param id {String}
     * @param createdDate {Date}
     * @param createdById {String}
     * @param name {String}
     */
    constructor(isDeleted: boolean, id: string, createdDate: Date, createdById: string, name: string);
    projectId: any;
    parentId: any;
    isDeleted: any;
    id: any;
    createdDate: any;
    modifiedDate: any;
    createdById: any;
    modifiedById: any;
    name: any;
}
declare namespace SectionModel {
    let RequiredProperties: string[];
}
