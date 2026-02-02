export default WebhookLogApiResult;
/**
 * The WebhookLogApiResult model module.
 * @module model/WebhookLogApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class WebhookLogApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, isDeleted: any, webHookName: any, eventType: any, webHookId: any, responseStatusCode: any, projectId: any, url: any, requestType: any, createdById: any): void;
    /**
     * Constructs a <code>WebhookLogApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookLogApiResult} obj Optional instance to populate.
     * @return {module:model/WebhookLogApiResult} The populated <code>WebhookLogApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WebhookLogApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookLogApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WebhookLogApiResult</code>.
     * @alias module:model/WebhookLogApiResult
     * @param id {String}
     * @param isDeleted {Boolean}
     * @param webHookName {String}
     * @param eventType {module:model/WebHookEventType}
     * @param webHookId {String}
     * @param responseStatusCode {Number}
     * @param projectId {String}
     * @param url {String}
     * @param requestType {module:model/RequestType}
     * @param createdById {String}
     */
    constructor(id: string, isDeleted: boolean, webHookName: string, eventType: any, webHookId: string, responseStatusCode: number, projectId: string, url: string, requestType: any, createdById: string);
    id: any;
    isDeleted: any;
    webHookName: any;
    eventType: any;
    webHookId: any;
    requestBody: any;
    requestMeta: any;
    responseStatusCode: any;
    responseBody: any;
    responseMeta: any;
    projectId: any;
    url: any;
    requestType: any;
    createdDate: any;
    modifiedDate: any;
    createdById: any;
    modifiedById: any;
}
declare namespace WebhookLogApiResult {
    let RequiredProperties: string[];
}
