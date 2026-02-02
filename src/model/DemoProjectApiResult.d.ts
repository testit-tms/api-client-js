export default DemoProjectApiResult;
/**
 * The DemoProjectApiResult model module.
 * @module model/DemoProjectApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class DemoProjectApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, jobId: any): void;
    /**
     * Constructs a <code>DemoProjectApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DemoProjectApiResult} obj Optional instance to populate.
     * @return {module:model/DemoProjectApiResult} The populated <code>DemoProjectApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>DemoProjectApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DemoProjectApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>DemoProjectApiResult</code>.
     * @alias module:model/DemoProjectApiResult
     * @param jobId {String} Job ID
     */
    constructor(jobId: string);
    jobId: any;
}
declare namespace DemoProjectApiResult {
    let RequiredProperties: string[];
}
