export default TestPlanShortModel;
/**
 * The TestPlanShortModel model module.
 * @module model/TestPlanShortModel
 * @version 7.1.0-TMS-5.6
 */
declare class TestPlanShortModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, projectId: any, name: any): void;
    /**
     * Constructs a <code>TestPlanShortModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPlanShortModel} obj Optional instance to populate.
     * @return {module:model/TestPlanShortModel} The populated <code>TestPlanShortModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPlanShortModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPlanShortModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPlanShortModel</code>.
     * @alias module:model/TestPlanShortModel
     * @param id {String}
     * @param projectId {String}
     * @param name {String}
     */
    constructor(id: string, projectId: string, name: string);
    id: any;
    projectId: any;
    name: any;
}
declare namespace TestPlanShortModel {
    let RequiredProperties: string[];
}
