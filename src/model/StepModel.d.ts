export default StepModel;
/**
 * The StepModel model module.
 * @module model/StepModel
 * @version 7.1.0-TMS-5.6
 */
declare class StepModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any): void;
    /**
     * Constructs a <code>StepModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StepModel} obj Optional instance to populate.
     * @return {module:model/StepModel} The populated <code>StepModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>StepModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StepModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>StepModel</code>.
     * @alias module:model/StepModel
     * @param id {String}
     */
    constructor(id: string);
    workItem: any;
    id: any;
    action: any;
    expected: any;
    testData: any;
    comments: any;
    workItemId: any;
}
declare namespace StepModel {
    let RequiredProperties: string[];
}
