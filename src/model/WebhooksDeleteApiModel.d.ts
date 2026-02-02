export default WebhooksDeleteApiModel;
/**
 * The WebhooksDeleteApiModel model module.
 * @module model/WebhooksDeleteApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class WebhooksDeleteApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, filter: any, extractor: any): void;
    /**
     * Constructs a <code>WebhooksDeleteApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhooksDeleteApiModel} obj Optional instance to populate.
     * @return {module:model/WebhooksDeleteApiModel} The populated <code>WebhooksDeleteApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WebhooksDeleteApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhooksDeleteApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WebhooksDeleteApiModel</code>.
     * @alias module:model/WebhooksDeleteApiModel
     * @param filter {module:model/WebhooksDeleteFilterApiModel}
     * @param extractor {module:model/WebhooksExtractionApiModel}
     */
    constructor(filter: any, extractor: any);
    filter: any;
    extractor: any;
}
declare namespace WebhooksDeleteApiModel {
    let RequiredProperties: string[];
}
