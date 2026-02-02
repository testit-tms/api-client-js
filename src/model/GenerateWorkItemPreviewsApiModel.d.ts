export default GenerateWorkItemPreviewsApiModel;
/**
 * The GenerateWorkItemPreviewsApiModel model module.
 * @module model/GenerateWorkItemPreviewsApiModel
 * @version 7.1.0
 */
declare class GenerateWorkItemPreviewsApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, externalServiceId: any, taskKey: any, sectionId: any, temperature: any, previewLimit: any): void;
    /**
     * Constructs a <code>GenerateWorkItemPreviewsApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenerateWorkItemPreviewsApiModel} obj Optional instance to populate.
     * @return {module:model/GenerateWorkItemPreviewsApiModel} The populated <code>GenerateWorkItemPreviewsApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>GenerateWorkItemPreviewsApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GenerateWorkItemPreviewsApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>GenerateWorkItemPreviewsApiModel</code>.
     * @alias module:model/GenerateWorkItemPreviewsApiModel
     * @param externalServiceId {String}
     * @param taskKey {String}
     * @param sectionId {String}
     * @param temperature {Number}
     * @param previewLimit {Number}
     */
    constructor(externalServiceId: string, taskKey: string, sectionId: string, temperature: number, previewLimit: number);
    externalServiceId: any;
    taskKey: any;
    sectionId: any;
    temperature: any;
    previewLimit: any;
}
declare namespace GenerateWorkItemPreviewsApiModel {
    let RequiredProperties: string[];
}
