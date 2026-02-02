export default ExternalFormModel;
/**
 * The ExternalFormModel model module.
 * @module model/ExternalFormModel
 * @version 7.1.0
 */
declare class ExternalFormModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, fields: any, possibleValues: any): void;
    /**
     * Constructs a <code>ExternalFormModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExternalFormModel} obj Optional instance to populate.
     * @return {module:model/ExternalFormModel} The populated <code>ExternalFormModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ExternalFormModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExternalFormModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ExternalFormModel</code>.
     * @alias module:model/ExternalFormModel
     * @param fields {Array.<module:model/ExternalFormFieldModel>}
     * @param possibleValues {Object.<String, Array.<module:model/ExternalFormAllowedValueModel>>}
     */
    constructor(fields: Array<NodeModule>, possibleValues: any);
    fields: any;
    possibleValues: any;
}
declare namespace ExternalFormModel {
    let RequiredProperties: string[];
}
