export default CustomAttributeTestPlanProjectRelationPutModel;
/**
 * The CustomAttributeTestPlanProjectRelationPutModel model module.
 * @module model/CustomAttributeTestPlanProjectRelationPutModel
 * @version 7.1.0-TMS-5.6
 */
declare class CustomAttributeTestPlanProjectRelationPutModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, isEnabled: any, isRequired: any): void;
    /**
     * Constructs a <code>CustomAttributeTestPlanProjectRelationPutModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CustomAttributeTestPlanProjectRelationPutModel} obj Optional instance to populate.
     * @return {module:model/CustomAttributeTestPlanProjectRelationPutModel} The populated <code>CustomAttributeTestPlanProjectRelationPutModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>CustomAttributeTestPlanProjectRelationPutModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomAttributeTestPlanProjectRelationPutModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>CustomAttributeTestPlanProjectRelationPutModel</code>.
     * @alias module:model/CustomAttributeTestPlanProjectRelationPutModel
     * @param id {String} Custom attribute internal unique identifier
     * @param isEnabled {Boolean} Flag that defines if custom attribute is enabled
     * @param isRequired {Boolean} Flag that defines if custom attribute is required
     */
    constructor(id: string, isEnabled: boolean, isRequired: boolean);
    id: any;
    isEnabled: any;
    isRequired: any;
}
declare namespace CustomAttributeTestPlanProjectRelationPutModel {
    let RequiredProperties: string[];
}
