export default IterationApiResult;
/**
 * The IterationApiResult model module.
 * @module model/IterationApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class IterationApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any): void;
    /**
     * Constructs a <code>IterationApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IterationApiResult} obj Optional instance to populate.
     * @return {module:model/IterationApiResult} The populated <code>IterationApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>IterationApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IterationApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>IterationApiResult</code>.
     * @alias module:model/IterationApiResult
     * @param id {String}
     */
    constructor(id: string);
    id: any;
    parameters: any;
}
declare namespace IterationApiResult {
    let RequiredProperties: string[];
}
