export default AutotestResultReasonShortGetModel;
/**
 * The AutotestResultReasonShortGetModel model module.
 * @module model/AutotestResultReasonShortGetModel
 * @version 7.1.0
 */
declare class AutotestResultReasonShortGetModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, isDeleted: any, failureCategory: any, failureCategoryId: any, regexCount: any, id: any, createdDate: any, createdById: any): void;
    /**
     * Constructs a <code>AutotestResultReasonShortGetModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutotestResultReasonShortGetModel} obj Optional instance to populate.
     * @return {module:model/AutotestResultReasonShortGetModel} The populated <code>AutotestResultReasonShortGetModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AutotestResultReasonShortGetModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutotestResultReasonShortGetModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AutotestResultReasonShortGetModel</code>.
     * @alias module:model/AutotestResultReasonShortGetModel
     * @param isDeleted {Boolean}
     * @param failureCategory {module:model/AvailableFailureCategory}
     * @param failureCategoryId {Number}
     * @param regexCount {Number}
     * @param id {String}
     * @param createdDate {Date}
     * @param createdById {String}
     */
    constructor(isDeleted: boolean, failureCategory: any, failureCategoryId: number, regexCount: number, id: string, createdDate: Date, createdById: string);
    isDeleted: any;
    failureCategory: any;
    failureCategoryId: any;
    name: any;
    regexCount: any;
    id: any;
    createdDate: any;
    createdById: any;
    modifiedDate: any;
    modifiedById: any;
}
declare namespace AutotestResultReasonShortGetModel {
    let RequiredProperties: string[];
}
