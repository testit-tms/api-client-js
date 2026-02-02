export default IFilter;
/**
 * The IFilter model module.
 * @module model/IFilter
 * @version 7.1.0-TMS-5.6
 */
declare class IFilter {
    /**
     * Constructs a <code>IFilter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IFilter} obj Optional instance to populate.
     * @return {module:model/IFilter} The populated <code>IFilter</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Create an instance of IFilter from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/IFilter} An instance of IFilter.
     */
    static fromJSON: (json_string: string) => any;
    /**
     * Constructs a new <code>IFilter</code>.
     * @alias module:model/IFilter
     * @param {(module:model/CollectionFilter|module:model/CompositeFilter|module:model/Filter)} instance The actual instance to initialize IFilter.
     */
    constructor(instance?: any);
    actualInstance: any;
    /**
     * Gets the actual instance, which can be <code>CollectionFilter</code>, <code>CompositeFilter</code>, <code>Filter</code>.
     * @return {(module:model/CollectionFilter|module:model/CompositeFilter|module:model/Filter)} The actual instance.
     */
    getActualInstance(): (module: model) => any;
    /**
     * Sets the actual instance, which can be <code>CollectionFilter</code>, <code>CompositeFilter</code>, <code>Filter</code>.
     * @param {(module:model/CollectionFilter|module:model/CompositeFilter|module:model/Filter)} obj The actual instance.
     */
    setActualInstance(obj: any): void;
    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON: () => string;
    filters: any;
    operator: any;
    value: any;
    field: any;
    filter: any;
}
declare namespace IFilter {
    let OneOf: string[];
}
