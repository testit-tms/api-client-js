export default AutoTestChangeViewModel;
/**
 * The AutoTestChangeViewModel model module.
 * @module model/AutoTestChangeViewModel
 * @version 7.1.0
 */
declare class AutoTestChangeViewModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, projectId: any, externalId: any, globalId: any): void;
    /**
     * Constructs a <code>AutoTestChangeViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoTestChangeViewModel} obj Optional instance to populate.
     * @return {module:model/AutoTestChangeViewModel} The populated <code>AutoTestChangeViewModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AutoTestChangeViewModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutoTestChangeViewModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AutoTestChangeViewModel</code>.
     * @alias module:model/AutoTestChangeViewModel
     * @param id {String}
     * @param projectId {String}
     * @param externalId {String}
     * @param globalId {Number}
     */
    constructor(id: string, projectId: string, externalId: string, globalId: number);
    id: any;
    projectId: any;
    externalId: any;
    globalId: any;
}
declare namespace AutoTestChangeViewModel {
    let RequiredProperties: string[];
}
