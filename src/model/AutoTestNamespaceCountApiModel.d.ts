export default AutoTestNamespaceCountApiModel;
/**
 * The AutoTestNamespaceCountApiModel model module.
 * @module model/AutoTestNamespaceCountApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class AutoTestNamespaceCountApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, count: any, classes: any): void;
    /**
     * Constructs a <code>AutoTestNamespaceCountApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoTestNamespaceCountApiModel} obj Optional instance to populate.
     * @return {module:model/AutoTestNamespaceCountApiModel} The populated <code>AutoTestNamespaceCountApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AutoTestNamespaceCountApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutoTestNamespaceCountApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AutoTestNamespaceCountApiModel</code>.
     * @alias module:model/AutoTestNamespaceCountApiModel
     * @param count {Number}
     * @param classes {Array.<module:model/AutoTestClassCountApiModel>}
     */
    constructor(count: number, classes: Array<NodeModule>);
    name: any;
    count: any;
    classes: any;
}
declare namespace AutoTestNamespaceCountApiModel {
    let RequiredProperties: string[];
}
