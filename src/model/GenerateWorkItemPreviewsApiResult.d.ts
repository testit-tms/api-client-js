export default GenerateWorkItemPreviewsApiResult;
/**
 * The GenerateWorkItemPreviewsApiResult model module.
 * @module model/GenerateWorkItemPreviewsApiResult
 * @version 7.1.0
 */
declare class GenerateWorkItemPreviewsApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, previews: any): void;
    /**
     * Constructs a <code>GenerateWorkItemPreviewsApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenerateWorkItemPreviewsApiResult} obj Optional instance to populate.
     * @return {module:model/GenerateWorkItemPreviewsApiResult} The populated <code>GenerateWorkItemPreviewsApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>GenerateWorkItemPreviewsApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GenerateWorkItemPreviewsApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>GenerateWorkItemPreviewsApiResult</code>.
     * @alias module:model/GenerateWorkItemPreviewsApiResult
     * @param previews {Array.<module:model/WorkItemPreviewApiModel>}
     */
    constructor(previews: Array<NodeModule>);
    previews: any;
    link: any;
}
declare namespace GenerateWorkItemPreviewsApiResult {
    let RequiredProperties: string[];
}
