export default AutoTestNamespaceApiResult;
/**
 * The AutoTestNamespaceApiResult model module.
 * @module model/AutoTestNamespaceApiResult
 * @version 7.1.0
 */
declare class AutoTestNamespaceApiResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, classes: any): void;
    /**
     * Constructs a <code>AutoTestNamespaceApiResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoTestNamespaceApiResult} obj Optional instance to populate.
     * @return {module:model/AutoTestNamespaceApiResult} The populated <code>AutoTestNamespaceApiResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AutoTestNamespaceApiResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutoTestNamespaceApiResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AutoTestNamespaceApiResult</code>.
     * @alias module:model/AutoTestNamespaceApiResult
     * @param classes {Array.<String>} Autotest classnames
     */
    constructor(classes: Array<string>);
    name: any;
    classes: any;
}
declare namespace AutoTestNamespaceApiResult {
    let RequiredProperties: string[];
}
