export default WebhookBulkUpdateApiModel;
/**
 * The WebhookBulkUpdateApiModel model module.
 * @module model/WebhookBulkUpdateApiModel
 * @version 7.1.0
 */
declare class WebhookBulkUpdateApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, isEnabled: any): void;
    /**
     * Constructs a <code>WebhookBulkUpdateApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookBulkUpdateApiModel} obj Optional instance to populate.
     * @return {module:model/WebhookBulkUpdateApiModel} The populated <code>WebhookBulkUpdateApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WebhookBulkUpdateApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebhookBulkUpdateApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WebhookBulkUpdateApiModel</code>.
     * @alias module:model/WebhookBulkUpdateApiModel
     * @param isEnabled {Boolean}
     */
    constructor(isEnabled: boolean);
    isEnabled: any;
}
declare namespace WebhookBulkUpdateApiModel {
    let RequiredProperties: string[];
}
