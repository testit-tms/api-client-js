export default WorkItemIndexApiResult;
/**
 * The WorkItemIndexApiResult model module.
 * @module model/WorkItemIndexApiResult
 * @version 7.1.0
 */
declare class WorkItemIndexApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, currentIndex: any, totalCount: any): void;
    /**
     * Constructs a <code>WorkItemIndexApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkItemIndexApiResult} obj Optional instance to populate.
     * @return {module:model/WorkItemIndexApiResult} The populated <code>WorkItemIndexApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkItemIndexApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkItemIndexApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WorkItemIndexApiResult</code>.
     * @alias module:model/WorkItemIndexApiResult
     * @param currentIndex {Number} Current index (position) of the element in a collection
     * @param totalCount {Number} Total count of elements in a collection
     */
    constructor(currentIndex: number, totalCount: number);
    currentIndex: any;
    totalCount: any;
}
declare namespace WorkItemIndexApiResult {
    let RequiredProperties: string[];
}
