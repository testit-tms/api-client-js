export default WebHookModel;
/**
 * The WebHookModel model module.
 * @module model/WebHookModel
 * @version 7.1.0-TMS-5.6
 */
declare class WebHookModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, eventType: any, url: any, requestType: any, shouldSendBody: any, isEnabled: any, shouldSendCustomBody: any, shouldReplaceParameters: any, shouldEscapeParameters: any, createdDate: any, createdById: any, projectId: any, id: any, isDeleted: any): void;
    /**
     * Constructs a <code>WebHookModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebHookModel} obj Optional instance to populate.
     * @return {module:model/WebHookModel} The populated <code>WebHookModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WebHookModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebHookModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WebHookModel</code>.
     * @alias module:model/WebHookModel
     * @param name {String} Name of the webhook
     * @param eventType {module:model/WebHookEventTypeModel} Type of event which triggers the webhook
     * @param url {String} Url to which the webhook sends request
     * @param requestType {module:model/RequestTypeModel} Method which the webhook uses
     * @param shouldSendBody {Boolean} Indicates if the webhook sends body
     * @param isEnabled {Boolean} Indicates if the webhook is active
     * @param shouldSendCustomBody {Boolean} Indicates if the webhook sends custom body
     * @param shouldReplaceParameters {Boolean} Indicates if the webhook injects parameters
     * @param shouldEscapeParameters {Boolean} Indicates if the webhook escapes invalid characters in parameters
     * @param createdDate {Date} Creation date of the webhook
     * @param createdById {String} Unique ID of user who created the webhook
     * @param projectId {String} Unique ID of project where the webhook is located
     * @param id {String} Unique ID of the entity
     * @param isDeleted {Boolean} Indicates if the entity is deleted
     */
    constructor(name: string, eventType: any, url: string, requestType: any, shouldSendBody: boolean, isEnabled: boolean, shouldSendCustomBody: boolean, shouldReplaceParameters: boolean, shouldEscapeParameters: boolean, createdDate: Date, createdById: string, projectId: string, id: string, isDeleted: boolean);
    name: any;
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
    customBodyMediaType: any;
    shouldReplaceParameters: any;
    shouldEscapeParameters: any;
    createdDate: any;
    createdById: any;
    modifiedDate: any;
    modifiedById: any;
    projectId: any;
    id: any;
    isDeleted: any;
}
declare namespace WebHookModel {
    let RequiredProperties: string[];
}
