export default AutoTestWorkItemIdentifierApiResult;
/**
 * The AutoTestWorkItemIdentifierApiResult model module.
 * @module model/AutoTestWorkItemIdentifierApiResult
 * @version 7.1.0
 */
declare class AutoTestWorkItemIdentifierApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, globalId: any): void;
    /**
     * Constructs a <code>AutoTestWorkItemIdentifierApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoTestWorkItemIdentifierApiResult} obj Optional instance to populate.
     * @return {module:model/AutoTestWorkItemIdentifierApiResult} The populated <code>AutoTestWorkItemIdentifierApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AutoTestWorkItemIdentifierApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutoTestWorkItemIdentifierApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AutoTestWorkItemIdentifierApiResult</code>.
     * @alias module:model/AutoTestWorkItemIdentifierApiResult
     * @param id {String} WorkItem unique internal identifier
     * @param globalId {Number} WorkItem Global unique identifier
     */
    constructor(id: string, globalId: number);
    id: any;
    globalId: any;
}
declare namespace AutoTestWorkItemIdentifierApiResult {
    let RequiredProperties: string[];
}
