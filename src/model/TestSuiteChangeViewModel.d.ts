export default TestSuiteChangeViewModel;
/**
 * The TestSuiteChangeViewModel model module.
 * @module model/TestSuiteChangeViewModel
 * @version 7.1.0-TMS-5.6
 */
declare class TestSuiteChangeViewModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, name: any, workItemCount: any): void;
    /**
     * Constructs a <code>TestSuiteChangeViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestSuiteChangeViewModel} obj Optional instance to populate.
     * @return {module:model/TestSuiteChangeViewModel} The populated <code>TestSuiteChangeViewModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestSuiteChangeViewModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestSuiteChangeViewModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestSuiteChangeViewModel</code>.
     * @alias module:model/TestSuiteChangeViewModel
     * @param id {String}
     * @param name {String}
     * @param workItemCount {Number}
     */
    constructor(id: string, name: string, workItemCount: number);
    id: any;
    name: any;
    configurations: any;
    workItemCount: any;
}
declare namespace TestSuiteChangeViewModel {
    let RequiredProperties: string[];
}
