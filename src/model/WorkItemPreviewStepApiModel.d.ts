export default WorkItemPreviewStepApiModel;
/**
 * The WorkItemPreviewStepApiModel model module.
 * @module model/WorkItemPreviewStepApiModel
 * @version 7.1.0
 */
declare class WorkItemPreviewStepApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, number: any, action: any, expected: any): void;
    /**
     * Constructs a <code>WorkItemPreviewStepApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkItemPreviewStepApiModel} obj Optional instance to populate.
     * @return {module:model/WorkItemPreviewStepApiModel} The populated <code>WorkItemPreviewStepApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkItemPreviewStepApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkItemPreviewStepApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WorkItemPreviewStepApiModel</code>.
     * @alias module:model/WorkItemPreviewStepApiModel
     * @param number {Number}
     * @param action {String}
     * @param expected {String}
     */
    constructor(number: number, action: string, expected: string);
    number: any;
    action: any;
    expected: any;
}
declare namespace WorkItemPreviewStepApiModel {
    let RequiredProperties: string[];
}
