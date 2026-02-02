export default ManualRerunApiResult;
/**
 * The ManualRerunApiResult model module.
 * @module model/ManualRerunApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class ManualRerunApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, testResultsCount: any): void;
    /**
     * Constructs a <code>ManualRerunApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ManualRerunApiResult} obj Optional instance to populate.
     * @return {module:model/ManualRerunApiResult} The populated <code>ManualRerunApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ManualRerunApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ManualRerunApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ManualRerunApiResult</code>.
     * @alias module:model/ManualRerunApiResult
     * @param testResultsCount {Number}
     */
    constructor(testResultsCount: number);
    testResultsCount: any;
}
declare namespace ManualRerunApiResult {
    let RequiredProperties: string[];
}
