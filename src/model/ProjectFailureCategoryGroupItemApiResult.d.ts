export default ProjectFailureCategoryGroupItemApiResult;
/**
 * The ProjectFailureCategoryGroupItemApiResult model module.
 * @module model/ProjectFailureCategoryGroupItemApiResult
 * @version 7.1.0
 */
declare class ProjectFailureCategoryGroupItemApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, items: any): void;
    /**
     * Constructs a <code>ProjectFailureCategoryGroupItemApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectFailureCategoryGroupItemApiResult} obj Optional instance to populate.
     * @return {module:model/ProjectFailureCategoryGroupItemApiResult} The populated <code>ProjectFailureCategoryGroupItemApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ProjectFailureCategoryGroupItemApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProjectFailureCategoryGroupItemApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ProjectFailureCategoryGroupItemApiResult</code>.
     * @alias module:model/ProjectFailureCategoryGroupItemApiResult
     * @param items {Array.<module:model/ProjectFailureCategoryApiResult>} Group data
     */
    constructor(items: Array<NodeModule>);
    group: any;
    items: any;
}
declare namespace ProjectFailureCategoryGroupItemApiResult {
    let RequiredProperties: string[];
}
