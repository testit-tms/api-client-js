export default AutoTestFilterApiModel;
/**
 * The AutoTestFilterApiModel model module.
 * @module model/AutoTestFilterApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class AutoTestFilterApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>AutoTestFilterApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoTestFilterApiModel} obj Optional instance to populate.
     * @return {module:model/AutoTestFilterApiModel} The populated <code>AutoTestFilterApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AutoTestFilterApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutoTestFilterApiModel</code>.
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
