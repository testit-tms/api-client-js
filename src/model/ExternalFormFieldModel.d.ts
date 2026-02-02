export default ExternalFormFieldModel;
/**
 * The ExternalFormFieldModel model module.
 * @module model/ExternalFormFieldModel
 * @version 7.1.0
 */
declare class ExternalFormFieldModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, isCustomValueAllowed: any): void;
    /**
     * Constructs a <code>ExternalFormFieldModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExternalFormFieldModel} obj Optional instance to populate.
     * @return {module:model/ExternalFormFieldModel} The populated <code>ExternalFormFieldModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ExternalFormFieldModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExternalFormFieldModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ExternalFormFieldModel</code>.
     * @alias module:model/ExternalFormFieldModel
     * @param isCustomValueAllowed {Boolean}
     */
    constructor(isCustomValueAllowed: boolean);
    fieldId: any;
    fieldName: any;
    helpText: any;
    type: any;
    arrayValuesType: any;
    defaultValue: any;
    isCustomValueAllowed: any;
    autoCompleteUrl: any;
    controlType: any;
    minLength: any;
    maxLength: any;
    isRequired: any;
    min: any;
    max: any;
}
declare namespace ExternalFormFieldModel {
    let RequiredProperties: string[];
}
