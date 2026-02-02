export default TestStatusModel;
/**
 * The TestStatusModel model module.
 * @module model/TestStatusModel
 * @version 7.1.0
 */
declare class TestStatusModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, name: any, type: any, isSystem: any, code: any): void;
    /**
     * Constructs a <code>TestStatusModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestStatusModel} obj Optional instance to populate.
     * @return {module:model/TestStatusModel} The populated <code>TestStatusModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestStatusModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestStatusModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestStatusModel</code>.
     * @alias module:model/TestStatusModel
     * @param id {String}
     * @param name {String}
     * @param type {module:model/TestStatusType}
     * @param isSystem {Boolean}
     * @param code {String}
     */
    constructor(id: string, name: string, type: any, isSystem: boolean, code: string);
    id: any;
    name: any;
    type: any;
    isSystem: any;
    code: any;
    description: any;
}
declare namespace TestStatusModel {
    let RequiredProperties: string[];
}
