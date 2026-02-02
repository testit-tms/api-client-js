export default IterationModel;
/**
 * The IterationModel model module.
 * @module model/IterationModel
 * @version 7.1.0-TMS-5.6
 */
declare class IterationModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any): void;
    /**
     * Constructs a <code>IterationModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IterationModel} obj Optional instance to populate.
     * @return {module:model/IterationModel} The populated <code>IterationModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>IterationModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IterationModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>IterationModel</code>.
     * @alias module:model/IterationModel
     * @param id {String}
     */
    constructor(id: string);
    id: any;
    parameters: any;
}
declare namespace IterationModel {
    let RequiredProperties: string[];
}
