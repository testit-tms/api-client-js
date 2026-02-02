export default WorkItemMovePostModel;
/**
 * The WorkItemMovePostModel model module.
 * @module model/WorkItemMovePostModel
 * @version 7.1.0-TMS-5.6
 */
declare class WorkItemMovePostModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, newSectionId: any): void;
    /**
     * Constructs a <code>WorkItemMovePostModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkItemMovePostModel} obj Optional instance to populate.
     * @return {module:model/WorkItemMovePostModel} The populated <code>WorkItemMovePostModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkItemMovePostModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkItemMovePostModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WorkItemMovePostModel</code>.
     * @alias module:model/WorkItemMovePostModel
     * @param id {String}
     * @param newSectionId {String}
     */
    constructor(id: string, newSectionId: string);
    id: any;
    newSectionId: any;
    oldSectionId: any;
    nextWorkItemId: any;
}
declare namespace WorkItemMovePostModel {
    let RequiredProperties: string[];
}
