export default ReplaceProjectExternalServiceApiModel;
/**
 * The ReplaceProjectExternalServiceApiModel model module.
 * @module model/ReplaceProjectExternalServiceApiModel
 * @version 7.1.0
 */
declare class ReplaceProjectExternalServiceApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, newExternalServiceId: any, settings: any): void;
    /**
     * Constructs a <code>ReplaceProjectExternalServiceApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReplaceProjectExternalServiceApiModel} obj Optional instance to populate.
     * @return {module:model/ReplaceProjectExternalServiceApiModel} The populated <code>ReplaceProjectExternalServiceApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ReplaceProjectExternalServiceApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReplaceProjectExternalServiceApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ReplaceProjectExternalServiceApiModel</code>.
     * @alias module:model/ReplaceProjectExternalServiceApiModel
     * @param newExternalServiceId {String} The unique ID of the new external service that will replace the current one
     * @param settings {Object} External service settings
     */
    constructor(newExternalServiceId: string, settings: any);
    newExternalServiceId: any;
    settings: any;
}
declare namespace ReplaceProjectExternalServiceApiModel {
    let RequiredProperties: string[];
}
