export default AssignIterationApiModel;
/**
 * The AssignIterationApiModel model module.
 * @module model/AssignIterationApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class AssignIterationApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, parameters: any, id: any): void;
    /**
     * Constructs a <code>AssignIterationApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssignIterationApiModel} obj Optional instance to populate.
     * @return {module:model/AssignIterationApiModel} The populated <code>AssignIterationApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AssignIterationApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AssignIterationApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AssignIterationApiModel</code>.
     * @alias module:model/AssignIterationApiModel
     * @param parameters {Array.<module:model/ParameterIterationModel>}
     * @param id {String} Iteration identifier, must be empty for new or changed iteration
     */
    constructor(parameters: Array<NodeModule>, id: string);
    parameters: any;
    id: any;
}
declare namespace AssignIterationApiModel {
    let RequiredProperties: string[];
}
