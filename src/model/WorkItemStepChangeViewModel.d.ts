export default WorkItemStepChangeViewModel;
/**
 * The WorkItemStepChangeViewModel model module.
 * @module model/WorkItemStepChangeViewModel
 * @version 7.1.0-TMS-5.6
 */
declare class WorkItemStepChangeViewModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, action: any, expected: any, comments: any, testData: any, index: any, workItem: any): void;
    /**
     * Constructs a <code>WorkItemStepChangeViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkItemStepChangeViewModel} obj Optional instance to populate.
     * @return {module:model/WorkItemStepChangeViewModel} The populated <code>WorkItemStepChangeViewModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>WorkItemStepChangeViewModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkItemStepChangeViewModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>WorkItemStepChangeViewModel</code>.
     * @alias module:model/WorkItemStepChangeViewModel
     * @param action {String}
     * @param expected {String}
     * @param comments {String}
     * @param testData {String}
     * @param index {Number}
     * @param workItem {module:model/SharedStepChangeViewModel}
     */
    constructor(action: string, expected: string, comments: string, testData: string, index: number, workItem: any);
    action: any;
    expected: any;
    comments: any;
    testData: any;
    index: any;
    workItemId: any;
    workItem: any;
}
declare namespace WorkItemStepChangeViewModel {
    let RequiredProperties: string[];
}
