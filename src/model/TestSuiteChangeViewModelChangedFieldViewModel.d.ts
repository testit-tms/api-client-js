export default TestSuiteChangeViewModelChangedFieldViewModel;
/**
 * The TestSuiteChangeViewModelChangedFieldViewModel model module.
 * @module model/TestSuiteChangeViewModelChangedFieldViewModel
 * @version 7.1.0
 */
declare class TestSuiteChangeViewModelChangedFieldViewModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>TestSuiteChangeViewModelChangedFieldViewModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TestSuiteChangeViewModelChangedFieldViewModel} obj Optional instance to populate.
     * @return {module:model/TestSuiteChangeViewModelChangedFieldViewModel} The populated <code>TestSuiteChangeViewModelChangedFieldViewModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>TestSuiteChangeViewModelChangedFieldViewModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TestSuiteChangeViewModelChangedFieldViewModel</code>.
     */
    static validateJSON(data: any): boolean;
    oldValue: any;
    newValue: any;
}
