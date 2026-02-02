export default GetExternalFormApiResult;
/**
 * The GetExternalFormApiResult model module.
 * @module model/GetExternalFormApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class GetExternalFormApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, testResultIds: any, form: any): void;
    /**
     * Constructs a <code>GetExternalFormApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetExternalFormApiResult} obj Optional instance to populate.
     * @return {module:model/GetExternalFormApiResult} The populated <code>GetExternalFormApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>GetExternalFormApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetExternalFormApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>GetExternalFormApiResult</code>.
     * @alias module:model/GetExternalFormApiResult
     * @param testResultIds {Array.<String>} Linked test result IDs
     * @param form {module:model/ExternalFormModel} External form definition
     */
    constructor(testResultIds: Array<string>, form: any);
    testResultIds: any;
    form: any;
}
declare namespace GetExternalFormApiResult {
    let RequiredProperties: string[];
}
