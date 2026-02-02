export default ParameterApiResult;
/**
 * The ParameterApiResult model module.
 * @module model/ParameterApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class ParameterApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, parameterKeyId: any, name: any, value: any, createdDate: any, createdById: any, isDeleted: any, projectIds: any): void;
    /**
     * Constructs a <code>ParameterApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ParameterApiResult} obj Optional instance to populate.
     * @return {module:model/ParameterApiResult} The populated <code>ParameterApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ParameterApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ParameterApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ParameterApiResult</code>.
     * @alias module:model/ParameterApiResult
     * @param id {String}
     * @param parameterKeyId {String}
     * @param name {String}
     * @param value {String}
     * @param createdDate {Date}
     * @param createdById {String}
     * @param isDeleted {Boolean}
     * @param projectIds {Array.<String>}
     */
    constructor(id: string, parameterKeyId: string, name: string, value: string, createdDate: Date, createdById: string, isDeleted: boolean, projectIds: Array<string>);
    id: any;
    parameterKeyId: any;
    name: any;
    value: any;
    createdDate: any;
    createdById: any;
    modifiedDate: any;
    modifiedById: any;
    isDeleted: any;
    projectIds: any;
}
declare namespace ParameterApiResult {
    let RequiredProperties: string[];
}
