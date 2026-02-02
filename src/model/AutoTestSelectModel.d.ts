export default AutoTestSelectModel;
/**
 * The AutoTestSelectModel model module.
 * @module model/AutoTestSelectModel
 * @version 7.1.0
 */
declare class AutoTestSelectModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, filter: any): void;
    /**
     * Constructs a <code>AutoTestSelectModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoTestSelectModel} obj Optional instance to populate.
     * @return {module:model/AutoTestSelectModel} The populated <code>AutoTestSelectModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AutoTestSelectModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutoTestSelectModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AutoTestSelectModel</code>.
     * @alias module:model/AutoTestSelectModel
     * @param filter {module:model/AutoTestFilterModel}
     */
    constructor(filter: any);
    filter: any;
    extractionModel: any;
}
declare namespace AutoTestSelectModel {
    let RequiredProperties: string[];
}
