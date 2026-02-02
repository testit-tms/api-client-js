export default AutoTestModelV2GetModel;
/**
 * The AutoTestModelV2GetModel model module.
 * @module model/AutoTestModelV2GetModel
 * @version 7.1.0
 */
declare class AutoTestModelV2GetModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, externalId: any, projectId: any, name: any, globalId: any, createdById: any, id: any, isDeleted: any): void;
    /**
     * Constructs a <code>AutoTestModelV2GetModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoTestModelV2GetModel} obj Optional instance to populate.
     * @return {module:model/AutoTestModelV2GetModel} The populated <code>AutoTestModelV2GetModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AutoTestModelV2GetModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutoTestModelV2GetModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AutoTestModelV2GetModel</code>.
     * @alias module:model/AutoTestModelV2GetModel
     * @param externalId {String} This property is used to set autotest identifier from client system
     * @param projectId {String} This property is used to link autotest with project
     * @param name {String}
     * @param globalId {Number}
     * @param createdById {String}
     * @param id {String} Unique ID of the entity
     * @param isDeleted {Boolean} Indicates if the entity is deleted
     */
    constructor(externalId: string, projectId: string, name: string, globalId: number, createdById: string, id: string, isDeleted: boolean);
    externalId: any;
    links: any;
    projectId: any;
    name: any;
    namespace: any;
    classname: any;
    steps: any;
    setup: any;
    teardown: any;
    globalId: any;
    createdDate: any;
    modifiedDate: any;
    createdById: any;
    modifiedById: any;
    labels: any;
    externalKey: any;
    id: any;
    isDeleted: any;
}
declare namespace AutoTestModelV2GetModel {
    let RequiredProperties: string[];
}
