export default TestSuiteWithChildrenModel;
/**
 * The TestSuiteWithChildrenModel model module.
 * @module model/TestSuiteWithChildrenModel
 * @version 7.1.0
 */
declare class TestSuiteWithChildrenModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, testPlanId: any, name: any, id: any, isDeleted: any): void;
    /**
     * Constructs a <code>TestSuiteWithChildrenModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestSuiteWithChildrenModel} obj Optional instance to populate.
     * @return {module:model/TestSuiteWithChildrenModel} The populated <code>TestSuiteWithChildrenModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestSuiteWithChildrenModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestSuiteWithChildrenModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestSuiteWithChildrenModel</code>.
     * @alias module:model/TestSuiteWithChildrenModel
     * @param testPlanId {String}
     * @param name {String}
     * @param id {String} Unique ID of the entity
     * @param isDeleted {Boolean} Indicates if the entity is deleted
     */
    constructor(testPlanId: string, name: string, id: string, isDeleted: boolean);
    children: any;
    testerId: any;
    parentId: any;
    testPlanId: any;
    name: any;
    id: any;
    isDeleted: any;
}
declare namespace TestSuiteWithChildrenModel {
    let RequiredProperties: string[];
}
