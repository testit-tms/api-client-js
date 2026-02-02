export default ProjectExternalServiceApiResult;
/**
 * The ProjectExternalServiceApiResult model module.
 * @module model/ProjectExternalServiceApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class ProjectExternalServiceApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, name: any, metadata: any, enabled: any): void;
    /**
     * Constructs a <code>ProjectExternalServiceApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectExternalServiceApiResult} obj Optional instance to populate.
     * @return {module:model/ProjectExternalServiceApiResult} The populated <code>ProjectExternalServiceApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ProjectExternalServiceApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProjectExternalServiceApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ProjectExternalServiceApiResult</code>.
     * @alias module:model/ProjectExternalServiceApiResult
     * @param id {String} The unique ID of the external service
     * @param name {String} The name of the external service
     * @param metadata {module:model/ExternalServiceMetadataApiResult} The metadata associated with the external service
     * @param enabled {Boolean} Indicates whether the external service is enabled or not
     */
    constructor(id: string, name: string, metadata: any, enabled: boolean);
    id: any;
    name: any;
    metadata: any;
    enabled: any;
}
declare namespace ProjectExternalServiceApiResult {
    let RequiredProperties: string[];
}
