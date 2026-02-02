export default TestResultChronologyModel;
/**
 * The TestResultChronologyModel model module.
 * @module model/TestResultChronologyModel
 * @version 7.1.0
 */
declare class TestResultChronologyModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, count: any): void;
    /**
     * Constructs a <code>TestResultChronologyModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestResultChronologyModel} obj Optional instance to populate.
     * @return {module:model/TestResultChronologyModel} The populated <code>TestResultChronologyModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestResultChronologyModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestResultChronologyModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestResultChronologyModel</code>.
     * @alias module:model/TestResultChronologyModel
     * @param count {Number}
     */
    constructor(count: number);
    outcome: any;
    count: any;
}
declare namespace TestResultChronologyModel {
    let RequiredProperties: string[];
}
