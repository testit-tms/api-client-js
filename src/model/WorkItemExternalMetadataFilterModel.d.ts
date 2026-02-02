export default WorkItemExternalMetadataFilterModel;
/**
 * The WorkItemExternalMetadataFilterModel model module.
 * @module model/WorkItemExternalMetadataFilterModel
 * @version 7.1.0
 */
declare class WorkItemExternalMetadataFilterModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>WorkItemExternalMetadataFilterModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkItemExternalMetadataFilterModel} obj Optional instance to populate.
     * @return {module:model/WorkItemExternalMetadataFilterModel} The populated <code>WorkItemExternalMetadataFilterModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkItemExternalMetadataFilterModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkItemExternalMetadataFilterModel</code>.
     */
    static validateJSON(data: any): boolean;
    ids: any;
    types: any;
    priorities: any;
    statuses: any;
    assignees: any;
}
