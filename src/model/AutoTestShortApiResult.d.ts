export default AutoTestShortApiResult;
/**
 * The AutoTestShortApiResult model module.
 * @module model/AutoTestShortApiResult
 * @version 7.1.0-TMS-5.6
 */
declare class AutoTestShortApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, projectId: any, name: any, externalId: any, globalId: any): void;
    /**
     * Constructs a <code>AutoTestShortApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoTestShortApiResult} obj Optional instance to populate.
     * @return {module:model/AutoTestShortApiResult} The populated <code>AutoTestShortApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AutoTestShortApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutoTestShortApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AutoTestShortApiResult</code>.
     * @alias module:model/AutoTestShortApiResult
     * @param id {String}
     * @param projectId {String}
     * @param name {String}
     * @param externalId {String}
     * @param globalId {Number}
     */
    constructor(id: string, projectId: string, name: string, externalId: string, globalId: number);
    id: any;
    projectId: any;
    name: any;
    externalId: any;
    globalId: any;
}
declare namespace AutoTestShortApiResult {
    let RequiredProperties: string[];
}
