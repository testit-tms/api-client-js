export default SharedStepReferenceSectionModel;
/**
 * The SharedStepReferenceSectionModel model module.
 * @module model/SharedStepReferenceSectionModel
 * @version 7.1.0
 */
declare class SharedStepReferenceSectionModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, name: any, hasThisSharedStepAsPrecondition: any, hasThisSharedStepAsPostcondition: any, createdById: any, isDeleted: any): void;
    /**
     * Constructs a <code>SharedStepReferenceSectionModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SharedStepReferenceSectionModel} obj Optional instance to populate.
     * @return {module:model/SharedStepReferenceSectionModel} The populated <code>SharedStepReferenceSectionModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>SharedStepReferenceSectionModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SharedStepReferenceSectionModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>SharedStepReferenceSectionModel</code>.
     * @alias module:model/SharedStepReferenceSectionModel
     * @param id {String}
     * @param name {String}
     * @param hasThisSharedStepAsPrecondition {Boolean}
     * @param hasThisSharedStepAsPostcondition {Boolean}
     * @param createdById {String}
     * @param isDeleted {Boolean}
     */
    constructor(id: string, name: string, hasThisSharedStepAsPrecondition: boolean, hasThisSharedStepAsPostcondition: boolean, createdById: string, isDeleted: boolean);
    id: any;
    name: any;
    hasThisSharedStepAsPrecondition: any;
    hasThisSharedStepAsPostcondition: any;
    createdById: any;
    modifiedById: any;
    createdDate: any;
    modifiedDate: any;
    isDeleted: any;
}
declare namespace SharedStepReferenceSectionModel {
    let RequiredProperties: string[];
}
