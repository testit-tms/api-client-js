export default ExternalServicesMetadataApiResult;
/**
 * The ExternalServicesMetadataApiResult model module.
 * @module model/ExternalServicesMetadataApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class ExternalServicesMetadataApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, data: any): void;
    /**
     * Constructs a <code>ExternalServicesMetadataApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExternalServicesMetadataApiResult} obj Optional instance to populate.
     * @return {module:model/ExternalServicesMetadataApiResult} The populated <code>ExternalServicesMetadataApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ExternalServicesMetadataApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExternalServicesMetadataApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ExternalServicesMetadataApiResult</code>.
     * @alias module:model/ExternalServicesMetadataApiResult
     * @param data {Array.<module:model/ExternalServiceMetadataApiResult>} External services metadata
     */
    constructor(data: Array<NodeModule>);
    data: any;
}
declare namespace ExternalServicesMetadataApiResult {
    let RequiredProperties: string[];
}
