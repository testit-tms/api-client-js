export default CreateTestStatusApiModel;
/**
 * The CreateTestStatusApiModel model module.
 * @module model/CreateTestStatusApiModel
 * @version 7.1.0
 */
declare class CreateTestStatusApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, name: any, type: any, code: any): void;
    /**
     * Constructs a <code>CreateTestStatusApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTestStatusApiModel} obj Optional instance to populate.
     * @return {module:model/CreateTestStatusApiModel} The populated <code>CreateTestStatusApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>CreateTestStatusApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateTestStatusApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>CreateTestStatusApiModel</code>.
     * @alias module:model/CreateTestStatusApiModel
     * @param name {String} Name of the status, must be unique
     * @param type {module:model/TestStatusApiType} Type of the status
     * @param code {String} Code of the status, must be unique
     */
    constructor(name: string, type: any, code: string);
    name: any;
    type: any;
    code: any;
    description: any;
}
declare namespace CreateTestStatusApiModel {
    let RequiredProperties: string[];
}
