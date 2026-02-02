export default RerunTestResultModel;
/**
 * The RerunTestResultModel model module.
 * @module model/RerunTestResultModel
 * @version 7.1.0
 */
declare class RerunTestResultModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, runNumber: any): void;
    /**
     * Constructs a <code>RerunTestResultModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RerunTestResultModel} obj Optional instance to populate.
     * @return {module:model/RerunTestResultModel} The populated <code>RerunTestResultModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>RerunTestResultModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RerunTestResultModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>RerunTestResultModel</code>.
     * @alias module:model/RerunTestResultModel
     * @param id {String}
     * @param runNumber {Number}
     */
    constructor(id: string, runNumber: number);
    id: any;
    outcome: any;
    runNumber: any;
}
declare namespace RerunTestResultModel {
    let RequiredProperties: string[];
}
