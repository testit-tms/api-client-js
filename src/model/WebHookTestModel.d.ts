export default WebHookTestModel;
/**
 * The WebHookTestModel model module.
 * @module model/WebHookTestModel
 * @version 7.1.0-TMS-5.6
 */
declare class WebHookTestModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, requestType: any, url: any): void;
    /**
     * Constructs a <code>WebHookTestModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebHookTestModel} obj Optional instance to populate.
     * @return {module:model/WebHookTestModel} The populated <code>WebHookTestModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WebHookTestModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebHookTestModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WebHookTestModel</code>.
     * @alias module:model/WebHookTestModel
     * @param requestType {module:model/RequestTypeModel} Request method of the webhook
     * @param url {String} Request URL of the webhook
     */
    constructor(requestType: any, url: string);
    requestType: any;
    url: any;
}
declare namespace WebHookTestModel {
    let RequiredProperties: string[];
}
