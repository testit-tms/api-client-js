export default AutoTestIdModel;
/**
 * The AutoTestIdModel model module.
 * @module model/AutoTestIdModel
 * @version 7.1.0-TMS-5.6
 */
declare class AutoTestIdModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any): void;
    /**
     * Constructs a <code>AutoTestIdModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoTestIdModel} obj Optional instance to populate.
     * @return {module:model/AutoTestIdModel} The populated <code>AutoTestIdModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AutoTestIdModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutoTestIdModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AutoTestIdModel</code>.
     * @alias module:model/AutoTestIdModel
     * @param id {String}
     */
    constructor(id: string);
    id: any;
}
declare namespace AutoTestIdModel {
    let RequiredProperties: string[];
}
