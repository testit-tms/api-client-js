export default TestPoint;
/**
 * The TestPoint model module.
 * @module model/TestPoint
 * @version 7.1.0-TMS-5.6
 */
declare class TestPoint {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, isDeleted: any, iterationId: any, testSuiteId: any): void;
    /**
     * Constructs a <code>TestPoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPoint} obj Optional instance to populate.
     * @return {module:model/TestPoint} The populated <code>TestPoint</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPoint</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPoint</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPoint</code>.
     * @alias module:model/TestPoint
     * @param id {String} Unique ID of the entity
     * @param isDeleted {Boolean} Indicates if the entity is deleted
     * @param iterationId {String}
     * @param testSuiteId {String}
     */
    constructor(id: string, isDeleted: boolean, iterationId: string, testSuiteId: string);
    id: any;
    isDeleted: any;
    testerId: any;
    iterationId: any;
    workItemId: any;
    configurationId: any;
    testSuiteId: any;
    status: any;
    statusModel: any;
    lastTestResultId: any;
}
declare namespace TestPoint {
    let RequiredProperties: string[];
}
