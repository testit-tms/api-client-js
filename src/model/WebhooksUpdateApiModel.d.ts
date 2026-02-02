export default WebhooksUpdateApiModel;
/**
 * The WebhooksUpdateApiModel model module.
 * @module model/WebhooksUpdateApiModel
 * @version 7.1.0
 */
declare class WebhooksUpdateApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, filter: any, model: any, extractor: any): void;
    /**
     * Constructs a <code>WebhooksUpdateApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhooksUpdateApiModel} obj Optional instance to populate.
     * @return {module:model/WebhooksUpdateApiModel} The populated <code>WebhooksUpdateApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WebhooksUpdateApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhooksUpdateApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WebhooksUpdateApiModel</code>.
     * @alias module:model/WebhooksUpdateApiModel
     * @param filter {module:model/WebhooksFilterApiModel}
     * @param model {module:model/WebhookBulkUpdateApiModel}
     * @param extractor {module:model/WebhooksExtractionApiModel}
     */
    constructor(filter: any, model: any, extractor: any);
    filter: any;
    model: any;
    extractor: any;
}
declare namespace WebhooksUpdateApiModel {
    let RequiredProperties: string[];
}
