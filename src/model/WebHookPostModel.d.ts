export default WebHookPostModel;
/**
 * The WebHookPostModel model module.
 * @module model/WebHookPostModel
 * @version 7.1.0
 */
declare class WebHookPostModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, projectId: any, eventType: any, url: any, requestType: any, shouldSendBody: any, headers: any, queryParameters: any, isEnabled: any, shouldSendCustomBody: any, shouldReplaceParameters: any, shouldEscapeParameters: any, name: any): void;
    /**
     * Constructs a <code>WebHookPostModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebHookPostModel} obj Optional instance to populate.
     * @return {module:model/WebHookPostModel} The populated <code>WebHookPostModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WebHookPostModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebHookPostModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WebHookPostModel</code>.
     * @alias module:model/WebHookPostModel
     * @param projectId {String} Unique ID of the webhook project
     * @param eventType {module:model/WebHookEventTypeModel} Type of event which triggers the webhook
     * @param url {String} Request URL of the webhook
     * @param requestType {module:model/RequestTypeModel} Request method of the webhook
     * @param shouldSendBody {Boolean} Indicates if the webhook sends body
     * @param headers {Object.<String, String>} Collection of the webhook headers
     * @param queryParameters {Object.<String, String>} Collection of the webhook query parameters
     * @param isEnabled {Boolean} Indicates if the webhook is active
     * @param shouldSendCustomBody {Boolean} Indicates if the webhook sends custom body
     * @param shouldReplaceParameters {Boolean} Indicates if the webhook injects parameters
     * @param shouldEscapeParameters {Boolean} Indicates if the webhook escapes invalid characters in parameters
     * @param name {String} Name of the webhook
     */
    constructor(projectId: string, eventType: any, url: string, requestType: any, shouldSendBody: boolean, headers: any, queryParameters: any, isEnabled: boolean, shouldSendCustomBody: boolean, shouldReplaceParameters: boolean, shouldEscapeParameters: boolean, name: string);
    projectId: any;
    eventType: any;
    description: any;
    url: any;
    requestType: any;
    shouldSendBody: any;
    headers: any;
    queryParameters: any;
    isEnabled: any;
    shouldSendCustomBody: any;
    customBody: any;
    shouldReplaceParameters: any;
    shouldEscapeParameters: any;
    name: any;
}
declare namespace WebHookPostModel {
    let RequiredProperties: string[];
}
