export default AutoTestFilterModel;
/**
 * The AutoTestFilterModel model module.
 * @module model/AutoTestFilterModel
 * @version 7.1.0
 */
declare class AutoTestFilterModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>AutoTestFilterModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoTestFilterModel} obj Optional instance to populate.
     * @return {module:model/AutoTestFilterModel} The populated <code>AutoTestFilterModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AutoTestFilterModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutoTestFilterModel</code>.
     */
    static validateJSON(data: any): boolean;
    projectIds: any;
    externalIds: any;
    globalIds: any;
    name: any;
    isFlaky: any;
    mustBeApproved: any;
    stabilityPercentage: any;
    createdDate: any;
    createdByIds: any;
    modifiedDate: any;
    modifiedByIds: any;
    isDeleted: any;
    namespace: any;
    isEmptyNamespace: any;
    className: any;
    isEmptyClassName: any;
    lastTestResultOutcome: any;
    lastTestResultStatusCodes: any;
    externalKey: any;
    lastTestResultConfigurationIds: any;
}
