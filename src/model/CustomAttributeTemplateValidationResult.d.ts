export default CustomAttributeTemplateValidationResult;
/**
 * The CustomAttributeTemplateValidationResult model module.
 * @module model/CustomAttributeTemplateValidationResult
 * @version 7.1.0
 */
declare class CustomAttributeTemplateValidationResult {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, exists: any): void;
    /**
     * Constructs a <code>CustomAttributeTemplateValidationResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomAttributeTemplateValidationResult} obj Optional instance to populate.
     * @return {module:model/CustomAttributeTemplateValidationResult} The populated <code>CustomAttributeTemplateValidationResult</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>CustomAttributeTemplateValidationResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomAttributeTemplateValidationResult</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>CustomAttributeTemplateValidationResult</code>.
     * @alias module:model/CustomAttributeTemplateValidationResult
     * @param exists {Boolean}
     */
    constructor(exists: boolean);
    exists: any;
}
declare namespace CustomAttributeTemplateValidationResult {
    let RequiredProperties: string[];
}
