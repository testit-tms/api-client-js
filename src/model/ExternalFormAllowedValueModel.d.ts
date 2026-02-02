export default ExternalFormAllowedValueModel;
/**
 * The ExternalFormAllowedValueModel model module.
 * @module model/ExternalFormAllowedValueModel
 * @version 7.1.0-TMS-5.6
 */
declare class ExternalFormAllowedValueModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, hasChildren: any): void;
    /**
     * Constructs a <code>ExternalFormAllowedValueModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExternalFormAllowedValueModel} obj Optional instance to populate.
     * @return {module:model/ExternalFormAllowedValueModel} The populated <code>ExternalFormAllowedValueModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ExternalFormAllowedValueModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExternalFormAllowedValueModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>ExternalFormAllowedValueModel</code>.
     * @alias module:model/ExternalFormAllowedValueModel
     * @param hasChildren {Boolean}
     */
    constructor(hasChildren: boolean);
    id: any;
    name: any;
    parentId: any;
    hasChildren: any;
}
declare namespace ExternalFormAllowedValueModel {
    let RequiredProperties: string[];
}
