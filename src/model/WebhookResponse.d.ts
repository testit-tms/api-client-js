export default WebhookResponse;
/**
 * The WebhookResponse model module.
 * @module model/WebhookResponse
 * @version 7.1.0
 */
declare class WebhookResponse {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, statusCode: any, requestMeta: any, responseBody: any, responseMeta: any): void;
    /**
     * Constructs a <code>WebhookResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookResponse} obj Optional instance to populate.
     * @return {module:model/WebhookResponse} The populated <code>WebhookResponse</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WebhookResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookResponse</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WebhookResponse</code>.
     * @alias module:model/WebhookResponse
     * @param statusCode {Number}
     * @param requestMeta {String}
     * @param responseBody {String}
     * @param responseMeta {String}
     */
    constructor(statusCode: number, requestMeta: string, responseBody: string, responseMeta: string);
    uri: any;
    statusCode: any;
    requestBody: any;
    requestMeta: any;
    responseBody: any;
    responseMeta: any;
}
declare namespace WebhookResponse {
    let RequiredProperties: string[];
}
