export default SectionPutModel;
/**
 * The SectionPutModel model module.
 * @module model/SectionPutModel
 * @version 7.1.0
 */
declare class SectionPutModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, name: any, projectId: any, attachments: any): void;
    /**
     * Constructs a <code>SectionPutModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SectionPutModel} obj Optional instance to populate.
     * @return {module:model/SectionPutModel} The populated <code>SectionPutModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>SectionPutModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SectionPutModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>SectionPutModel</code>.
     * @alias module:model/SectionPutModel
     * @param id {String}
     * @param name {String}
     * @param projectId {String}
     * @param attachments {Array.<module:model/AttachmentPutModel>}
     */
    constructor(id: string, name: string, projectId: string, attachments: Array<NodeModule>);
    id: any;
    name: any;
    projectId: any;
    parentId: any;
    preconditionSteps: any;
    postconditionSteps: any;
    attachments: any;
}
declare namespace SectionPutModel {
    let RequiredProperties: string[];
}
