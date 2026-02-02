export default StepPutModel;
/**
 * The StepPutModel model module.
 * @module model/StepPutModel
 * @version 7.1.0
 */
declare class StepPutModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any): void;
    /**
     * Constructs a <code>StepPutModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StepPutModel} obj Optional instance to populate.
     * @return {module:model/StepPutModel} The populated <code>StepPutModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>StepPutModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>StepPutModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>StepPutModel</code>.
     * @alias module:model/StepPutModel
     * @param id {String}
     */
    constructor(id: string);
    id: any;
    action: any;
    expected: any;
    testData: any;
    comments: any;
    workItemId: any;
}
declare namespace StepPutModel {
    let RequiredProperties: string[];
}
