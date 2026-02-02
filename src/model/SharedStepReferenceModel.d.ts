export default SharedStepReferenceModel;
/**
 * The SharedStepReferenceModel model module.
 * @module model/SharedStepReferenceModel
 * @version 7.1.0
 */
declare class SharedStepReferenceModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, id: any, globalId: any, name: any, entityTypeName: any, hasThisSharedStepAsStep: any, hasThisSharedStepAsPrecondition: any, hasThisSharedStepAsPostcondition: any, createdById: any, state: any, priority: any, sourceType: any, isDeleted: any, versionId: any, isAutomated: any, sectionId: any): void;
    /**
     * Constructs a <code>SharedStepReferenceModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SharedStepReferenceModel} obj Optional instance to populate.
     * @return {module:model/SharedStepReferenceModel} The populated <code>SharedStepReferenceModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>SharedStepReferenceModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SharedStepReferenceModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>SharedStepReferenceModel</code>.
     * @alias module:model/SharedStepReferenceModel
     * @param id {String}
     * @param globalId {Number}
     * @param name {String}
     * @param entityTypeName {String}
     * @param hasThisSharedStepAsStep {Boolean}
     * @param hasThisSharedStepAsPrecondition {Boolean}
     * @param hasThisSharedStepAsPostcondition {Boolean}
     * @param createdById {String}
     * @param state {String}
     * @param priority {module:model/WorkItemPriorityModel}
     * @param sourceType {module:model/WorkItemSourceTypeModel}
     * @param isDeleted {Boolean}
     * @param versionId {String} used for versioning changes in workitem
     * @param isAutomated {Boolean}
     * @param sectionId {String}
     */
    constructor(id: string, globalId: number, name: string, entityTypeName: string, hasThisSharedStepAsStep: boolean, hasThisSharedStepAsPrecondition: boolean, hasThisSharedStepAsPostcondition: boolean, createdById: string, state: string, priority: any, sourceType: any, isDeleted: boolean, versionId: string, isAutomated: boolean, sectionId: string);
    id: any;
    globalId: any;
    name: any;
    entityTypeName: any;
    hasThisSharedStepAsStep: any;
    hasThisSharedStepAsPrecondition: any;
    hasThisSharedStepAsPostcondition: any;
    createdById: any;
    modifiedById: any;
    createdDate: any;
    modifiedDate: any;
    state: any;
    priority: any;
    sourceType: any;
    isDeleted: any;
    versionId: any;
    isAutomated: any;
    sectionId: any;
    tags: any;
}
declare namespace SharedStepReferenceModel {
    let RequiredProperties: string[];
}
