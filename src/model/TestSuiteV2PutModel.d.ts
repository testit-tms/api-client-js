export default TestSuiteV2PutModel;
/**
 * The TestSuiteV2PutModel model module.
 * @module model/TestSuiteV2PutModel
 * @version 7.1.0
 */
declare class TestSuiteV2PutModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, name: any, isDeleted: any): void;
    /**
     * Constructs a <code>TestSuiteV2PutModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestSuiteV2PutModel} obj Optional instance to populate.
     * @return {module:model/TestSuiteV2PutModel} The populated <code>TestSuiteV2PutModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestSuiteV2PutModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestSuiteV2PutModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestSuiteV2PutModel</code>.
     * @alias module:model/TestSuiteV2PutModel
     * @param id {String}
     * @param name {String}
     * @param isDeleted {Boolean}
     */
    constructor(id: string, name: string, isDeleted: boolean);
    id: any;
    parentId: any;
    name: any;
    isDeleted: any;
    autoRefresh: any;
}
declare namespace TestSuiteV2PutModel {
    let RequiredProperties: string[];
}
