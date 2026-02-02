export default Filter;
/**
 * The Filter model module.
 * @module model/Filter
 * @version 7.1.0
 */
declare class Filter {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, operator: any, field: any): void;
    /**
     * Constructs a <code>Filter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Filter} obj Optional instance to populate.
     * @return {module:model/Filter} The populated <code>Filter</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>Filter</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Filter</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>Filter</code>.
     * @alias module:model/Filter
     * @param operator {module:model/FilterOperator}
     * @param field {String}
     */
    constructor(operator: any, field: string);
    operator: any;
    value: any;
    field: any;
}
declare namespace Filter {
    let RequiredProperties: string[];
}
