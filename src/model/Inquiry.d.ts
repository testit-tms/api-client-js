export default Inquiry;
/**
 * The Inquiry model module.
 * @module model/Inquiry
 * @version 7.1.0
 */
declare class Inquiry {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, order: any): void;
    /**
     * Constructs a <code>Inquiry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Inquiry} obj Optional instance to populate.
     * @return {module:model/Inquiry} The populated <code>Inquiry</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>Inquiry</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Inquiry</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>Inquiry</code>.
     * @alias module:model/Inquiry
     * @param order {Array.<module:model/Order>}
     */
    constructor(order: Array<NodeModule>);
    filter: any;
    order: any;
    page: any;
}
declare namespace Inquiry {
    let RequiredProperties: string[];
}
