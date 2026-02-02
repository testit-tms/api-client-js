export default ExternalFormCreateModel;
/**
 * The ExternalFormCreateModel model module.
 * @module model/ExternalFormCreateModel
 * @version 7.1.0
 */
declare class ExternalFormCreateModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, possibleValues: any, fields: any, links: any, values: any): void;
    /**
     * Constructs a <code>ExternalFormCreateModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExternalFormCreateModel} obj Optional instance to populate.
     * @return {module:model/ExternalFormCreateModel} The populated <code>ExternalFormCreateModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ExternalFormCreateModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExternalFormCreateModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ExternalFormCreateModel</code>.
     * @alias module:model/ExternalFormCreateModel
     * @param possibleValues {Object.<String, Array.<module:model/ExternalFormAllowedValueModel>>}
     * @param fields {Array.<module:model/ExternalFormFieldModel>}
     * @param links {Array.<module:model/ExternalFormLinkModel>}
     * @param values {Object.<String, Object>}
     */
    constructor(possibleValues: any, fields: Array<NodeModule>, links: Array<NodeModule>, values: any);
    possibleValues: any;
    fields: any;
    links: any;
    values: any;
}
declare namespace ExternalFormCreateModel {
    let RequiredProperties: string[];
}
