export default AutoTestCreateApiModel;
/**
 * The AutoTestCreateApiModel model module.
 * @module model/AutoTestCreateApiModel
 * @version 7.1.0
 */
declare class AutoTestCreateApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, externalId: any, projectId: any, name: any): void;
    /**
     * Constructs a <code>AutoTestCreateApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoTestCreateApiModel} obj Optional instance to populate.
     * @return {module:model/AutoTestCreateApiModel} The populated <code>AutoTestCreateApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AutoTestCreateApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutoTestCreateApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AutoTestCreateApiModel</code>.
     * @alias module:model/AutoTestCreateApiModel
     * @param externalId {String} External ID of the autotest
     * @param projectId {String} Unique ID of the autotest project
     * @param name {String} Name of the autotest
     */
    constructor(externalId: string, projectId: string, name: string);
    externalId: any;
    externalKey: any;
    projectId: any;
    name: any;
    namespace: any;
    classname: any;
    steps: any;
    setup: any;
    teardown: any;
    title: any;
    description: any;
    labels: any;
    links: any;
    isFlaky: any;
    workItemIdsForLinkWithAutoTest: any;
    workItemIds: any;
    shouldCreateWorkItem: any;
    attributes: any;
}
declare namespace AutoTestCreateApiModel {
    let RequiredProperties: string[];
}
