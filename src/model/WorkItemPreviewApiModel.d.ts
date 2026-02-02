export default WorkItemPreviewApiModel;
/**
 * The WorkItemPreviewApiModel model module.
 * @module model/WorkItemPreviewApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class WorkItemPreviewApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, description: any, steps: any): void;
    /**
     * Constructs a <code>WorkItemPreviewApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkItemPreviewApiModel} obj Optional instance to populate.
     * @return {module:model/WorkItemPreviewApiModel} The populated <code>WorkItemPreviewApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkItemPreviewApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkItemPreviewApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WorkItemPreviewApiModel</code>.
     * @alias module:model/WorkItemPreviewApiModel
     * @param name {String}
     * @param description {String}
     * @param steps {Array.<module:model/WorkItemPreviewStepApiModel>}
     */
    constructor(name: string, description: string, steps: Array<NodeModule>);
    name: any;
    description: any;
    steps: any;
}
declare namespace WorkItemPreviewApiModel {
    let RequiredProperties: string[];
}
