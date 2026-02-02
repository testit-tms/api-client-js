export default ExternalServiceMetadataApiResult;
/**
 * The ExternalServiceMetadataApiResult model module.
 * @module model/ExternalServiceMetadataApiResult
 * @version 7.1.0
 */
declare class ExternalServiceMetadataApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, code: any, iconUrl: any, category: any): void;
    /**
     * Constructs a <code>ExternalServiceMetadataApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExternalServiceMetadataApiResult} obj Optional instance to populate.
     * @return {module:model/ExternalServiceMetadataApiResult} The populated <code>ExternalServiceMetadataApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ExternalServiceMetadataApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExternalServiceMetadataApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ExternalServiceMetadataApiResult</code>.
     * @alias module:model/ExternalServiceMetadataApiResult
     * @param name {String} The name of the external service
     * @param code {String} The code of the external service
     * @param iconUrl {String} The icon URL of the external service
     * @param category {module:model/ApiExternalServiceCategory} The category of the external service
     */
    constructor(name: string, code: string, iconUrl: string, category: any);
    name: any;
    code: any;
    iconUrl: any;
    category: any;
}
declare namespace ExternalServiceMetadataApiResult {
    let RequiredProperties: string[];
}
