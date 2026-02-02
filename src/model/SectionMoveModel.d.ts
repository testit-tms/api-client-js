export default SectionMoveModel;
/**
 * The SectionMoveModel model module.
 * @module model/SectionMoveModel
 * @version 7.1.0
 */
declare class SectionMoveModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, oldParentId: any, parentId: any): void;
    /**
     * Constructs a <code>SectionMoveModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SectionMoveModel} obj Optional instance to populate.
     * @return {module:model/SectionMoveModel} The populated <code>SectionMoveModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>SectionMoveModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SectionMoveModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>SectionMoveModel</code>.
     * @alias module:model/SectionMoveModel
     * @param id {String} Unique ID of the section
     * @param oldParentId {String} Unique ID of the section's current parent section
     * @param parentId {String} Unique ID of the section's target parent section
     */
    constructor(id: string, oldParentId: string, parentId: string);
    id: any;
    oldParentId: any;
    parentId: any;
    nextSectionId: any;
}
declare namespace SectionMoveModel {
    let RequiredProperties: string[];
}
