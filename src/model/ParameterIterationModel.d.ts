export default ParameterIterationModel;
/**
 * The ParameterIterationModel model module.
 * @module model/ParameterIterationModel
 * @version 7.1.0
 */
declare class ParameterIterationModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any): void;
    /**
     * Constructs a <code>ParameterIterationModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ParameterIterationModel} obj Optional instance to populate.
     * @return {module:model/ParameterIterationModel} The populated <code>ParameterIterationModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ParameterIterationModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ParameterIterationModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ParameterIterationModel</code>.
     * @alias module:model/ParameterIterationModel
     * @param id {String}
     */
    constructor(id: string);
    id: any;
}
declare namespace ParameterIterationModel {
    let RequiredProperties: string[];
}
