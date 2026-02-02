export default AutoTestUpdateApiModel;
/**
 * The AutoTestUpdateApiModel model module.
 * @module model/AutoTestUpdateApiModel
 * @version 7.1.0-TMS-5.6
 */
declare class AutoTestUpdateApiModel {
    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj: any, externalId: any, projectId: any, name: any): void;
    /**
     * Constructs a <code>AutoTestUpdateApiModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AutoTestUpdateApiModel} obj Optional instance to populate.
     * @return {module:model/AutoTestUpdateApiModel} The populated <code>AutoTestUpdateApiModel</code> instance.
     */
    static constructFromObject(data: any, obj: any): any;
    /**
     * Validates the JSON data with respect to <code>AutoTestUpdateApiModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutoTestUpdateApiModel</code>.
     */
    static validateJSON(data: any): boolean;
    /**
     * Constructs a new <code>AutoTestUpdateApiModel</code>.
     * @alias module:model/AutoTestUpdateApiModel
     * @param externalId {String} External ID of the autotest
     * @param projectId {String} Unique ID of the autotest project
     * @param name {String} Name of the autotest
     */
    constructor(externalId: string, projectId: string, name: string);
    id: any;
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
}
declare namespace AutoTestUpdateApiModel {
    let RequiredProperties: string[];
}
