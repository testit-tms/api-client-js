export default SearchWebhooksQueryModel;
/**
 * The SearchWebhooksQueryModel model module.
 * @module model/SearchWebhooksQueryModel
 * @version 7.1.0-TMS-5.6
 */
declare class SearchWebhooksQueryModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>SearchWebhooksQueryModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchWebhooksQueryModel} obj Optional instance to populate.
     * @return {module:model/SearchWebhooksQueryModel} The populated <code>SearchWebhooksQueryModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>SearchWebhooksQueryModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SearchWebhooksQueryModel</code>.
     */
    static validateJSON(data: any): boolean;
    name: any;
    eventTypes: any;
    methods: any;
    projectIds: any;
    isEnabled: any;
}
