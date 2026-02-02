export default CompositeFilter;
/**
 * The CompositeFilter model module.
 * @module model/CompositeFilter
 * @version 7.1.0-TMS-5.6
 */
declare class CompositeFilter {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, filters: any, operator: any): void;
    /**
     * Constructs a <code>CompositeFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompositeFilter} obj Optional instance to populate.
     * @return {module:model/CompositeFilter} The populated <code>CompositeFilter</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>CompositeFilter</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CompositeFilter</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>CompositeFilter</code>.
     * @alias module:model/CompositeFilter
     * @param filters {Array.<module:model/IFilter>}
     * @param operator {module:model/LogicalOperator}
     */
    constructor(filters: Array<NodeModule>, operator: any);
    filters: any;
    operator: any;
}
declare namespace CompositeFilter {
    let RequiredProperties: string[];
}
