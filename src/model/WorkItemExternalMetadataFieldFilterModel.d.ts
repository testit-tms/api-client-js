export default WorkItemExternalMetadataFieldFilterModel;
/**
 * The WorkItemExternalMetadataFieldFilterModel model module.
 * @module model/WorkItemExternalMetadataFieldFilterModel
 * @version 7.1.0-TMS-5.6
 */
declare class WorkItemExternalMetadataFieldFilterModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, value: any, externalServiceId: any): void;
    /**
     * Constructs a <code>WorkItemExternalMetadataFieldFilterModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkItemExternalMetadataFieldFilterModel} obj Optional instance to populate.
     * @return {module:model/WorkItemExternalMetadataFieldFilterModel} The populated <code>WorkItemExternalMetadataFieldFilterModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkItemExternalMetadataFieldFilterModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkItemExternalMetadataFieldFilterModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WorkItemExternalMetadataFieldFilterModel</code>.
     * @alias module:model/WorkItemExternalMetadataFieldFilterModel
     * @param value {String} Value of the field
     * @param externalServiceId {String} Identifier of external service which is source of this value
     */
    constructor(value: string, externalServiceId: string);
    value: any;
    externalServiceId: any;
}
declare namespace WorkItemExternalMetadataFieldFilterModel {
    let RequiredProperties: string[];
}
