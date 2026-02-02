export default CreateWorkItemPreviewsApiModel;
/**
 * The CreateWorkItemPreviewsApiModel model module.
 * @module model/CreateWorkItemPreviewsApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class CreateWorkItemPreviewsApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, sectionId: any, previews: any): void;
    /**
     * Constructs a <code>CreateWorkItemPreviewsApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateWorkItemPreviewsApiModel} obj Optional instance to populate.
     * @return {module:model/CreateWorkItemPreviewsApiModel} The populated <code>CreateWorkItemPreviewsApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>CreateWorkItemPreviewsApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateWorkItemPreviewsApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>CreateWorkItemPreviewsApiModel</code>.
     * @alias module:model/CreateWorkItemPreviewsApiModel
     * @param sectionId {String}
     * @param previews {Array.<module:model/WorkItemPreviewApiModel>}
     */
    constructor(sectionId: string, previews: Array<NodeModule>);
    sectionId: any;
    previews: any;
    attributes: any;
    link: any;
}
declare namespace CreateWorkItemPreviewsApiModel {
    let RequiredProperties: string[];
}
