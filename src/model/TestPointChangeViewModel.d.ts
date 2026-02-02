export default TestPointChangeViewModel;
/**
 * The TestPointChangeViewModel model module.
 * @module model/TestPointChangeViewModel
 * @version 7.1.0
 */
declare class TestPointChangeViewModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, userId: any, testPointCount: any): void;
    /**
     * Constructs a <code>TestPointChangeViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestPointChangeViewModel} obj Optional instance to populate.
     * @return {module:model/TestPointChangeViewModel} The populated <code>TestPointChangeViewModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestPointChangeViewModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestPointChangeViewModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>TestPointChangeViewModel</code>.
     * @alias module:model/TestPointChangeViewModel
     * @param userId {String}
     * @param testPointCount {Number}
     */
    constructor(userId: string, testPointCount: number);
    userId: any;
    userName: any;
    testPointCount: any;
}
declare namespace TestPointChangeViewModel {
    let RequiredProperties: string[];
}
