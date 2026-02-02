export default WorkItemVersionModel;
/**
 * The WorkItemVersionModel model module.
 * @module model/WorkItemVersionModel
 * @version 7.1.0
 */
declare class WorkItemVersionModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, versionId: any, versionNumber: any): void;
    /**
     * Constructs a <code>WorkItemVersionModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkItemVersionModel} obj Optional instance to populate.
     * @return {module:model/WorkItemVersionModel} The populated <code>WorkItemVersionModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkItemVersionModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkItemVersionModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WorkItemVersionModel</code>.
     * @alias module:model/WorkItemVersionModel
     * @param versionId {String} used for versioning changes in workitem
     * @param versionNumber {Number} used for define chronology of workitem state in each version
     */
    constructor(versionId: string, versionNumber: number);
    versionId: any;
    versionNumber: any;
    modifiedDate: any;
    modifiedById: any;
}
declare namespace WorkItemVersionModel {
    let RequiredProperties: string[];
}
