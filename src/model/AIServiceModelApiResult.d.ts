export default AIServiceModelApiResult;
/**
 * The AIServiceModelApiResult model module.
 * @module model/AIServiceModelApiResult
 * @version 7.1.0
 */
declare class AIServiceModelApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, name: any): void;
    /**
     * Constructs a <code>AIServiceModelApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AIServiceModelApiResult} obj Optional instance to populate.
     * @return {module:model/AIServiceModelApiResult} The populated <code>AIServiceModelApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AIServiceModelApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AIServiceModelApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AIServiceModelApiResult</code>.
     * @alias module:model/AIServiceModelApiResult
     * @param id {String} Model id
     * @param name {String} Model Name
     */
    constructor(id: string, name: string);
    id: any;
    name: any;
}
declare namespace AIServiceModelApiResult {
    let RequiredProperties: string[];
}
