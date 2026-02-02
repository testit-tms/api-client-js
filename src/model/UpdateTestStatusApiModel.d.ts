export default UpdateTestStatusApiModel;
/**
 * The UpdateTestStatusApiModel model module.
 * @module model/UpdateTestStatusApiModel
 * @version 7.1.0
 */
declare class UpdateTestStatusApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any): void;
    /**
     * Constructs a <code>UpdateTestStatusApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateTestStatusApiModel} obj Optional instance to populate.
     * @return {module:model/UpdateTestStatusApiModel} The populated <code>UpdateTestStatusApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>UpdateTestStatusApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateTestStatusApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>UpdateTestStatusApiModel</code>.
     * @alias module:model/UpdateTestStatusApiModel
     * @param name {String} Name of the status, must be unique
     */
    constructor(name: string);
    name: any;
    description: any;
}
declare namespace UpdateTestStatusApiModel {
    let RequiredProperties: string[];
}
