export default SectionWithStepsModel;
/**
 * The SectionWithStepsModel model module.
 * @module model/SectionWithStepsModel
 * @version 7.1.0
 */
declare class SectionWithStepsModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, isDeleted: any, id: any, createdDate: any, createdById: any, name: any): void;
    /**
     * Constructs a <code>SectionWithStepsModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SectionWithStepsModel} obj Optional instance to populate.
     * @return {module:model/SectionWithStepsModel} The populated <code>SectionWithStepsModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>SectionWithStepsModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SectionWithStepsModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>SectionWithStepsModel</code>.
     * @alias module:model/SectionWithStepsModel
     * @param isDeleted {Boolean}
     * @param id {String}
     * @param createdDate {Date}
     * @param createdById {String}
     * @param name {String}
     */
    constructor(isDeleted: boolean, id: string, createdDate: Date, createdById: string, name: string);
    attachments: any;
    preconditionSteps: any;
    postconditionSteps: any;
    projectId: any;
    parentId: any;
    isDeleted: any;
    id: any;
    createdDate: any;
    modifiedDate: any;
    createdById: any;
    modifiedById: any;
    name: any;
}
declare namespace SectionWithStepsModel {
    let RequiredProperties: string[];
}
