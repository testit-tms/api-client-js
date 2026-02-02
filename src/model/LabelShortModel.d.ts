export default LabelShortModel;
/**
 * The LabelShortModel model module.
 * @module model/LabelShortModel
 * @version 7.1.0-TMS-5.6
 */
declare class LabelShortModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, globalId: any, name: any): void;
    /**
     * Constructs a <code>LabelShortModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LabelShortModel} obj Optional instance to populate.
     * @return {module:model/LabelShortModel} The populated <code>LabelShortModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>LabelShortModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LabelShortModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>LabelShortModel</code>.
     * @alias module:model/LabelShortModel
     * @param globalId {Number} Global ID of the label
     * @param name {String} Name of the label
     */
    constructor(globalId: number, name: string);
    globalId: any;
    name: any;
}
declare namespace LabelShortModel {
    let RequiredProperties: string[];
}
