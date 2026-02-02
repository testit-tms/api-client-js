export default RerunTestResultApiResult;
/**
 * The RerunTestResultApiResult model module.
 * @module model/RerunTestResultApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class RerunTestResultApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, outcome: any, status: any, runNumber: any): void;
    /**
     * Constructs a <code>RerunTestResultApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RerunTestResultApiResult} obj Optional instance to populate.
     * @return {module:model/RerunTestResultApiResult} The populated <code>RerunTestResultApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>RerunTestResultApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RerunTestResultApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>RerunTestResultApiResult</code>.
     * @alias module:model/RerunTestResultApiResult
     * @param id {String}
     * @param outcome {String}
     * @param status {module:model/TestStatusApiResult}
     * @param runNumber {Number}
     */
    constructor(id: string, outcome: string, status: any, runNumber: number);
    id: any;
    outcome: any;
    status: any;
    runNumber: any;
}
declare namespace RerunTestResultApiResult {
    let RequiredProperties: string[];
}
