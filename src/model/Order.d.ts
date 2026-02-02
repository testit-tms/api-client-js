export default Order;
/**
 * The Order model module.
 * @module model/Order
 * @version 7.1.0
 */
declare class Order {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, field: any, direction: any): void;
    /**
     * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Order} obj Optional instance to populate.
     * @return {module:model/Order} The populated <code>Order</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>Order</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Order</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>Order</code>.
     * @alias module:model/Order
     * @param field {String}
     * @param direction {module:model/ListSortDirection}
     */
    constructor(field: string, direction: any);
    field: any;
    direction: any;
}
declare namespace Order {
    let RequiredProperties: string[];
}
