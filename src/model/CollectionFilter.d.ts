export default CollectionFilter;
/**
 * The CollectionFilter model module.
 * @module model/CollectionFilter
 * @version 7.1.0-TMS-5.6
 */
declare class CollectionFilter {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, operator: any, filter: any, field: any): void;
    /**
     * Constructs a <code>CollectionFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CollectionFilter} obj Optional instance to populate.
     * @return {module:model/CollectionFilter} The populated <code>CollectionFilter</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>CollectionFilter</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CollectionFilter</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>CollectionFilter</code>.
     * @alias module:model/CollectionFilter
     * @param operator {module:model/CollectionOperator}
     * @param filter {module:model/IFilter}
     * @param field {String}
     */
    constructor(operator: any, filter: any, field: string);
    operator: any;
    filter: any;
    field: any;
}
declare namespace CollectionFilter {
    let RequiredProperties: string[];
}
