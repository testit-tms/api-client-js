export default WorkItemExternalMetadataFieldFilterApiModel;
/**
 * The WorkItemExternalMetadataFieldFilterApiModel model module.
 * @module model/WorkItemExternalMetadataFieldFilterApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class WorkItemExternalMetadataFieldFilterApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, value: any, externalServiceId: any): void;
    /**
     * Constructs a <code>WorkItemExternalMetadataFieldFilterApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkItemExternalMetadataFieldFilterApiModel} obj Optional instance to populate.
     * @return {module:model/WorkItemExternalMetadataFieldFilterApiModel} The populated <code>WorkItemExternalMetadataFieldFilterApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkItemExternalMetadataFieldFilterApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkItemExternalMetadataFieldFilterApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WorkItemExternalMetadataFieldFilterApiModel</code>.
     * @alias module:model/WorkItemExternalMetadataFieldFilterApiModel
     * @param value {String} Value of the field
     * @param externalServiceId {String} Identifier of external service which is source of this value
     */
    constructor(value: string, externalServiceId: string);
    value: any;
    externalServiceId: any;
}
declare namespace WorkItemExternalMetadataFieldFilterApiModel {
    let RequiredProperties: string[];
}
