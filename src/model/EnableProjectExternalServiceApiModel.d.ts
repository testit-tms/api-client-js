export default EnableProjectExternalServiceApiModel;
/**
 * The EnableProjectExternalServiceApiModel model module.
 * @module model/EnableProjectExternalServiceApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class EnableProjectExternalServiceApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, settings: any): void;
    /**
     * Constructs a <code>EnableProjectExternalServiceApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EnableProjectExternalServiceApiModel} obj Optional instance to populate.
     * @return {module:model/EnableProjectExternalServiceApiModel} The populated <code>EnableProjectExternalServiceApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>EnableProjectExternalServiceApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EnableProjectExternalServiceApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>EnableProjectExternalServiceApiModel</code>.
     * @alias module:model/EnableProjectExternalServiceApiModel
     * @param settings {Object} External service settings
     */
    constructor(settings: any);
    settings: any;
}
declare namespace EnableProjectExternalServiceApiModel {
    let RequiredProperties: string[];
}
