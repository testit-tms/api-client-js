export default ProjectTestPlansFilterModel;
/**
 * The ProjectTestPlansFilterModel model module.
 * @module model/ProjectTestPlansFilterModel
 * @version 7.1.0
 */
declare class ProjectTestPlansFilterModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any): void;
    /**
     * Constructs a <code>ProjectTestPlansFilterModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectTestPlansFilterModel} obj Optional instance to populate.
     * @return {module:model/ProjectTestPlansFilterModel} The populated <code>ProjectTestPlansFilterModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>ProjectTestPlansFilterModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProjectTestPlansFilterModel</code>.
     */
    static validateJSON(data: any): boolean;
    name: any;
    description: any;
    build: any;
    productName: any;
    status: any;
    globalIds: any;
    isLocked: any;
    lockedDate: any;
    automaticDurationTimer: any;
    createdByIds: any;
    createdDate: any;
    startDate: any;
    endDate: any;
    tagNames: any;
    excludeTagNames: any;
    attributes: any;
    isDeleted: any;
}
