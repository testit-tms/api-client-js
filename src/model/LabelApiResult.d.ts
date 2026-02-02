export default LabelApiResult;
/**
 * The LabelApiResult model module.
 * @module model/LabelApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class LabelApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, globalId: any): void;
    /**
     * Constructs a <code>LabelApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LabelApiResult} obj Optional instance to populate.
     * @return {module:model/LabelApiResult} The populated <code>LabelApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>LabelApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LabelApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>LabelApiResult</code>.
     * @alias module:model/LabelApiResult
     * @param name {String} Name of the label
     * @param globalId {Number} Global ID of the label
     */
    constructor(name: string, globalId: number);
    name: any;
    globalId: any;
}
declare namespace LabelApiResult {
    let RequiredProperties: string[];
}
